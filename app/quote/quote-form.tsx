"use client";

import { useEffect, useRef, useState } from "react";
import { AlertCircle, CheckCircle2, FileText, Loader2, PackageSearch, Send } from "lucide-react";
import { catalogProducts } from "@/lib/catalog";
import { lineId, lineUrl } from "@/lib/social";

const recipientEmail = "savecost.info@gmail.com";
// Public Web3Forms access key (safe to expose). Without it the form falls back to a prefilled email.
const web3formsKey = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;

type Status = "idle" | "sending" | "sent" | "fallback";

const requestSteps = ["แนบรุ่นสินค้า รูปภาพ หรือสเปกที่มี", "ทีมงานช่วยตรวจสอบและเทียบทางเลือก", "ส่งใบเสนอราคาพร้อมรายละเอียดการส่งมอบ"];

export function QuoteForm() {
  const itemsRef = useRef<HTMLTextAreaElement>(null);
  const [status, setStatus] = useState<Status>("idle");
  const [mailtoHref, setMailtoHref] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form)) as Record<string, string>;
    if (data.botcheck) return;

    const subject = `ขอใบเสนอราคา - ${data.company || data.name}`;
    const body = [
      `ชื่อผู้ติดต่อ: ${data.name}`,
      `บริษัท: ${data.company}`,
      `อีเมล: ${data.email}`,
      `โทรศัพท์: ${data.phone}`,
      "",
      "รายการสินค้า:",
      data.items,
    ].join("\n");

    if (web3formsKey) {
      setStatus("sending");
      try {
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify({ access_key: web3formsKey, subject, from_name: "เว็บไซต์ SaveCost Intertrade", ...data }),
        });
        const result = await response.json();
        if (result.success) {
          setStatus("sent");
          form.reset();
          return;
        }
      } catch {
        // fall through to the email fallback
      }
    }

    const href = `mailto:${recipientEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setMailtoHref(href);
    setStatus("fallback");
    window.location.href = href;
  }

  useEffect(() => {
    const productId = new URLSearchParams(window.location.search).get("product");
    const product = catalogProducts.find((item) => item.id === productId);
    if (product && itemsRef.current) {
      itemsRef.current.value = `${product.id} - ${product.name}\n`;
    }
  }, []);

  return (
    <div className="mx-auto max-w-7xl px-8 pb-20 pt-36 max-md:px-5 max-md:pb-14 max-md:pt-28">
      <div className="mb-20 max-md:mb-10">
        <span className="mb-4 block text-xs font-bold uppercase tracking-[0.2em] text-[#005ea3]">Request a quote</span>
        <h1 className="mb-6 text-5xl font-extrabold max-md:text-4xl md:text-7xl">ขอใบเสนอราคา</h1>
        <p className="max-w-2xl text-lg leading-relaxed text-slate-600 max-md:text-base max-md:leading-7">ส่งข้อมูลสินค้า ปริมาณ และเงื่อนไขการใช้งานมาให้ทีม SaveCost Intertrade เราจะช่วยตรวจสอบและจัดหาทางเลือกที่เหมาะกับงานของคุณ</p>
      </div>

      <div className="grid grid-cols-1 items-start gap-16 max-md:gap-10 lg:grid-cols-12">
        <form className="space-y-8 rounded-xl border border-slate-200 bg-white p-8 shadow-sm max-md:space-y-6 max-md:p-5 md:p-12 lg:col-span-7" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 gap-8 max-md:gap-5 md:grid-cols-2">
            <Field label="ชื่อผู้ติดต่อ" name="name" placeholder="สมชาย ใจดี" required />
            <Field label="บริษัท" name="company" placeholder="บริษัท ตัวอย่าง จำกัด" />
            <Field label="อีเมล" name="email" placeholder="procurement@company.com" type="email" />
            <Field label="โทรศัพท์" name="phone" placeholder="+66 8x xxx xxxx" required type="tel" />
          </div>
          <div className="space-y-2">
            <label className="block text-xs font-bold uppercase tracking-widest text-slate-600" htmlFor="quote-items">
              รายการสินค้า <span className="text-red-500">*</span>
            </label>
            <textarea ref={itemsRef} required id="quote-items" className="w-full rounded-md border-none bg-slate-50 p-4 transition-all focus:ring-2 focus:ring-[#005ea3]" name="items" placeholder="ระบุชื่อสินค้า รุ่น ยี่ห้อ ปริมาณ หรือแนบข้อมูลอ้างอิงเพิ่มเติมภายหลัง" rows={7} />
          </div>
          <input aria-hidden="true" className="hidden" name="botcheck" tabIndex={-1} type="checkbox" />
          <button className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-br from-[#005ea3] to-[#0077cc] px-10 py-4 font-bold text-white shadow-lg transition-transform hover:scale-[0.98] disabled:opacity-60 md:w-auto" disabled={status === "sending"} type="submit">
            {status === "sending" ? <Loader2 className="animate-spin" size={18} /> : <Send size={18} />}
            {status === "sending" ? "กำลังส่ง..." : "ส่งคำขอ"}
          </button>
          {status === "sent" && (
            <div className="flex gap-3 rounded-xl bg-green-50 p-4 text-green-800" role="status">
              <CheckCircle2 className="mt-0.5 flex-shrink-0" size={20} />
              <p>ส่งคำขอเรียบร้อยแล้ว ทีมงานจะติดต่อกลับโดยเร็วที่สุด</p>
            </div>
          )}
          {status === "fallback" && (
            <div className="flex gap-3 rounded-xl bg-amber-50 p-4 text-amber-900" role="status">
              <AlertCircle className="mt-0.5 flex-shrink-0" size={20} />
              <p className="leading-relaxed">
                ระบบได้เปิดโปรแกรมอีเมลพร้อมข้อมูลของคุณแล้ว กรุณากดส่งในโปรแกรมอีเมล หากโปรแกรมไม่เปิด{" "}
                <a className="font-bold underline" href={mailtoHref}>
                  คลิกที่นี่
                </a>{" "}
                หรือติดต่อทาง LINE{" "}
                <a className="font-bold underline" href={lineUrl} rel="noopener noreferrer" target="_blank">
                  {lineId}
                </a>{" "}
                / โทร <a className="whitespace-nowrap font-bold underline" href="tel:0985241542">098-524-1542</a>
              </p>
            </div>
          )}
        </form>

        <aside className="rounded-xl border border-slate-200 bg-slate-50 p-8 max-md:p-5 lg:col-span-5">
          <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-xl bg-blue-100">
            <FileText className="text-[#005ea3]" size={30} />
          </div>
          <h2 className="mb-6 text-3xl font-bold max-md:text-2xl">ข้อมูลที่ช่วยให้เสนอราคาได้เร็วขึ้น</h2>
          <div className="grid gap-4">
            {requestSteps.map((step) => (
              <div className="flex gap-4 rounded-xl bg-white p-4" key={step}>
                <CheckCircle2 className="flex-shrink-0 text-[#005ea3]" size={22} />
                <span className="font-medium text-slate-700">{step}</span>
              </div>
            ))}
          </div>
          <div className="mt-8 flex gap-4 rounded-xl bg-slate-950 p-5 text-white">
            <PackageSearch className="flex-shrink-0 text-[#2da3e6]" size={24} />
            <p className="text-slate-300">หากยังไม่ทราบรุ่นสินค้าที่แน่นอน สามารถส่งรูปหน้างานหรือรายละเอียดการใช้งานให้ทีมงานช่วยประเมินเบื้องต้นได้</p>
          </div>
        </aside>
      </div>
    </div>
  );
}

function Field({ label, name, placeholder, required = false, type = "text" }: { label: string; name: string; placeholder: string; required?: boolean; type?: string }) {
  return (
    <div className="space-y-2">
      <label className="block text-xs font-bold uppercase tracking-widest text-slate-600" htmlFor={`quote-${name}`}>
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <input className="w-full rounded-md border-none bg-slate-50 p-4 transition-all focus:ring-2 focus:ring-[#005ea3]" id={`quote-${name}`} name={name} placeholder={placeholder} required={required} type={type} />
    </div>
  );
}
