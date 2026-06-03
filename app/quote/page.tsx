import { CheckCircle2, FileText, PackageSearch, Send } from "lucide-react";

const requestSteps = [
  "แนบรุ่นสินค้า รูปภาพ หรือสเปกที่มี",
  "ทีมงานช่วยตรวจสอบและเทียบทางเลือก",
  "ส่งใบเสนอราคาพร้อมรายละเอียดการส่งมอบ",
];

export default function QuotePage() {
  return (
    <div className="mx-auto max-w-7xl px-8 pb-20 pt-36 max-md:px-5 max-md:pb-14 max-md:pt-28">
      <div className="mb-20 max-md:mb-10">
        <span className="mb-4 block text-xs font-bold uppercase tracking-[0.2em] text-[#005ea3]">Request a quote</span>
        <h1 className="mb-6 text-5xl font-extrabold tracking-tighter max-md:text-4xl md:text-7xl">ขอใบเสนอราคา</h1>
        <p className="max-w-2xl text-lg leading-relaxed text-slate-600 max-md:text-base max-md:leading-7">
          ส่งข้อมูลสินค้า ปริมาณ และเงื่อนไขการใช้งานมาให้ทีม SaveCost Intertrade
          เราจะช่วยตรวจสอบและจัดหาทางเลือกที่เหมาะกับงานของคุณ
        </p>
      </div>

      <div className="grid grid-cols-1 items-start gap-16 max-md:gap-10 lg:grid-cols-12">
        <form action="mailto:savecost.sales@savecost-intertrade.com" className="space-y-8 rounded-xl border border-slate-200 bg-white p-8 shadow-sm max-md:space-y-6 max-md:p-5 md:p-12 lg:col-span-7" encType="text/plain" method="post">
          <div className="grid grid-cols-1 gap-8 max-md:gap-5 md:grid-cols-2">
            <Field label="ชื่อผู้ติดต่อ" name="name" placeholder="สมชาย ใจดี" />
            <Field label="บริษัท" name="company" placeholder="บริษัท ตัวอย่าง จำกัด" />
            <Field label="อีเมล" name="email" placeholder="procurement@company.com" type="email" />
            <Field label="โทรศัพท์" name="phone" placeholder="+66 8x xxx xxxx" type="tel" />
          </div>
          <div className="space-y-2">
            <label className="block text-xs font-bold uppercase tracking-widest text-slate-600">รายการสินค้า</label>
            <textarea className="w-full rounded-md border-none bg-slate-50 p-4 transition-all focus:ring-2 focus:ring-[#005ea3]" name="items" placeholder="ระบุชื่อสินค้า รุ่น ยี่ห้อ ปริมาณ หรือแนบข้อมูลอ้างอิงเพิ่มเติมภายหลัง" rows={7} />
          </div>
          <button className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-br from-[#005ea3] to-[#0077cc] px-10 py-4 font-bold text-white shadow-lg transition-transform hover:scale-[0.98] md:w-auto" type="submit">
            <Send size={18} />
            ส่งคำขอ
          </button>
        </form>

        <aside className="rounded-xl border border-slate-200 bg-slate-50 p-8 max-md:p-5 lg:col-span-5">
          <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-xl bg-blue-100">
            <FileText className="text-[#005ea3]" size={30} />
          </div>
          <h2 className="mb-6 text-3xl font-black tracking-tight max-md:text-2xl">ข้อมูลที่ช่วยให้เสนอราคาได้เร็วขึ้น</h2>
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

function Field({
  label,
  name,
  placeholder,
  type = "text",
}: {
  label: string;
  name: string;
  placeholder: string;
  type?: string;
}) {
  return (
    <div className="space-y-2">
      <label className="block text-xs font-bold uppercase tracking-widest text-slate-600">{label}</label>
      <input className="w-full rounded-md border-none bg-slate-50 p-4 transition-all focus:ring-2 focus:ring-[#005ea3]" name={name} placeholder={placeholder} type={type} />
    </div>
  );
}
