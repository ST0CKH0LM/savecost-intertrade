"use client";

import { useState } from "react";
import { AlertCircle, CheckCircle2, Loader2, Send } from "lucide-react";
import { salesRegions } from "@/lib/contacts";
import { sendInquiry } from "@/lib/send-inquiry";
import { lineId, lineUrl } from "@/lib/social";

type Status = "idle" | "sending" | "sent" | "fallback";

const topics = ["สอบถามข้อมูลสินค้า", "ขอใบเสนอราคา", "นัดสำรวจหน้างาน / บริการล้างระบบ", "อื่น ๆ"];

const inputClass = "w-full rounded-md border-none bg-slate-50 p-4 transition-all focus:ring-2 focus:ring-[#005ea3]";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [mailtoHref, setMailtoHref] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form)) as Record<string, string>;
    if (data.botcheck) return;

    setStatus("sending");
    const result = await sendInquiry({
      topic: data.topic || "ติดต่อจากเว็บไซต์",
      title: data.company || data.name,
      lines: [
        `ชื่อผู้ติดต่อ: ${data.name}`,
        `บริษัท: ${data.company}`,
        `อีเมล: ${data.email}`,
        `โทรศัพท์: ${data.phone}`,
        `เรื่อง: ${data.topic}`,
        "",
        "ข้อความ:",
        data.message,
        "",
      ],
      data,
    });
    if (result.status === "sent") {
      setStatus("sent");
      form.reset();
      return;
    }
    setMailtoHref(result.href);
    setStatus("fallback");
    window.location.href = result.href;
  }

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 gap-6 max-md:gap-5 md:grid-cols-2">
        <Field label="ชื่อผู้ติดต่อ" name="name" placeholder="สมชาย ใจดี" required />
        <Field label="บริษัท" name="company" placeholder="บริษัท ตัวอย่าง จำกัด" />
        <Field label="โทรศัพท์" name="phone" placeholder="08x xxx xxxx" required type="tel" />
        <Field label="อีเมล" name="email" placeholder="somchai@company.com" type="email" />
        <div className="space-y-2">
          <Label htmlFor="contact-region" required>
            พื้นที่ตั้งโรงงาน
          </Label>
          <select className={inputClass} defaultValue="" id="contact-region" name="region" required>
            <option disabled value="">
              เลือกภาค
            </option>
            {salesRegions.map((item) => (
              <option key={item.value} value={item.value}>
                {item.label}
              </option>
            ))}
          </select>
        </div>
        <div className="space-y-2">
          <Label htmlFor="contact-topic">เรื่องที่ติดต่อ</Label>
          <select className={inputClass} defaultValue={topics[0]} id="contact-topic" name="topic">
            {topics.map((topic) => (
              <option key={topic}>{topic}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="contact-message" required>
          ข้อความ
        </Label>
        <textarea className={inputClass} id="contact-message" name="message" placeholder="รายละเอียดที่ต้องการสอบถาม เช่น ชื่อสินค้า ปริมาณ หรือปัญหาที่หน้างาน" required rows={6} />
      </div>

      <input aria-hidden="true" className="hidden" name="botcheck" tabIndex={-1} type="checkbox" />

      <button
        className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-br from-[#005ea3] to-[#0077cc] px-10 py-4 font-bold text-white shadow-lg transition-transform hover:scale-[0.98] disabled:opacity-60 md:w-auto"
        disabled={status === "sending"}
        type="submit"
      >
        {status === "sending" ? <Loader2 className="animate-spin" size={18} /> : <Send size={18} />}
        {status === "sending" ? "กำลังส่ง..." : "ส่งข้อความ"}
      </button>

      {status === "sent" && (
        <div className="flex gap-3 rounded-xl bg-green-50 p-4 text-green-800" role="status">
          <CheckCircle2 className="mt-0.5 flex-shrink-0" size={20} />
          <p>ส่งข้อความเรียบร้อยแล้ว ทีมงานจะติดต่อกลับโดยเร็วที่สุด</p>
        </div>
      )}
      {status === "fallback" && (
        <div className="flex gap-3 rounded-xl bg-amber-50 p-4 text-amber-900" role="status">
          <AlertCircle className="mt-0.5 flex-shrink-0" size={20} />
          <p className="leading-relaxed">
            ระบบได้เปิดโปรแกรมอีเมลพร้อมข้อความของคุณแล้ว กรุณากดส่งในโปรแกรมอีเมล หากโปรแกรมไม่เปิด{" "}
            <a className="font-bold underline" href={mailtoHref}>
              คลิกที่นี่
            </a>{" "}
            หรือติดต่อทาง LINE{" "}
            <a className="font-bold underline" href={lineUrl} rel="noopener noreferrer" target="_blank">
              {lineId}
            </a>{" "}
            / โทร{" "}
            <a className="whitespace-nowrap font-bold underline" href="tel:0818897068">
              081-889-7068
            </a>
          </p>
        </div>
      )}
    </form>
  );
}

function Label({ children, htmlFor, required = false }: { children: React.ReactNode; htmlFor: string; required?: boolean }) {
  return (
    <label className="block text-xs font-bold uppercase tracking-widest text-slate-600" htmlFor={htmlFor}>
      {children} {required && <span className="text-red-500">*</span>}
    </label>
  );
}

function Field({ label, name, placeholder, required = false, type = "text" }: { label: string; name: string; placeholder: string; required?: boolean; type?: string }) {
  return (
    <div className="space-y-2">
      <Label htmlFor={`contact-${name}`} required={required}>
        {label}
      </Label>
      <input className={inputClass} id={`contact-${name}`} name={name} placeholder={placeholder} required={required} type={type} />
    </div>
  );
}
