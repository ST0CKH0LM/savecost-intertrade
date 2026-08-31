import type { Metadata } from "next";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { publicPath } from "@/lib/site-paths";
import { lineId, lineUrl } from "@/lib/social";

const companyAddress = "146/4 ถนนประชาทร แขวงลาดกระบัง เขตลาดกระบัง กรุงเทพฯ 10520";

export const metadata: Metadata = {
  title: "ติดต่อเรา | Savecost Intertrade",
  description: "ติดต่อทีมงาน Savecost Intertrade สอบถามสินค้า บริการ หรือขอใบเสนอราคา ที่อยู่ โทรศัพท์ และอีเมลของบริษัท",
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-7xl px-8 pb-20 pt-36 max-md:px-5 max-md:pb-14 max-md:pt-28">
      <div className="mb-20 max-md:mb-10">
        <h1 className="mb-6 text-5xl font-extrabold max-md:text-4xl md:text-7xl">ติดต่อเรา</h1>
        <p className="max-w-2xl text-lg leading-relaxed text-slate-600 max-md:text-base max-md:leading-7">ติดต่อทีมผู้เชี่ยวชาญด้านวิศวกรรมของเราเพื่อรับโซลูชันอุตสาหกรรมที่เชื่อถือได้ เรายินดีให้บริการเพื่อสนับสนุนการเติบโตของธุรกิจคุณ</p>
      </div>

      <div className="grid grid-cols-1 items-start gap-16 max-md:gap-10 lg:grid-cols-12">
        <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm sm:p-8 md:p-12 lg:col-span-7">
          <form action="mailto:savecost.info@gmail.com" className="space-y-8 max-md:space-y-6" encType="text/plain" method="post">
            <div className="grid grid-cols-1 gap-8 max-md:gap-5 md:grid-cols-2">
              <div className="space-y-2">
                <label className="block text-xs font-bold uppercase tracking-widest text-slate-600">ชื่อ-นามสกุล</label>
                <input className="w-full rounded-md border-none bg-slate-50 p-4 transition-all focus:ring-2 focus:ring-[#005ea3]" name="name" placeholder="สมชาย ใจดี" type="text" />
              </div>
              <div className="space-y-2">
                <label className="block text-xs font-bold uppercase tracking-widest text-slate-600">อีเมล</label>
                <input className="w-full rounded-md border-none bg-slate-50 p-4 transition-all focus:ring-2 focus:ring-[#005ea3]" name="email" placeholder="somchai@company.com" type="email" />
              </div>
            </div>

            <div className="space-y-2">
              <label className="block text-xs font-bold uppercase tracking-widest text-slate-600">ที่อยู่</label>
              <input className="w-full rounded-md border-none bg-slate-50 p-4 transition-all focus:ring-2 focus:ring-[#005ea3]" name="address" placeholder="ที่อยู่บริษัทหรือสถานที่จัดส่งสินค้า" type="text" />
            </div>

            <div className="space-y-2">
              <label className="block text-xs font-bold uppercase tracking-widest text-slate-600">หัวข้อ</label>
              <input className="w-full rounded-md border-none bg-slate-50 p-4 transition-all focus:ring-2 focus:ring-[#005ea3]" name="subject" placeholder="สอบถามเกี่ยวกับอุปกรณ์อุตสาหกรรม" type="text" />
            </div>

            <div className="space-y-2">
              <label className="block text-xs font-bold uppercase tracking-widest text-slate-600">ข้อความ</label>
              <textarea className="w-full rounded-md border-none bg-slate-50 p-4 transition-all focus:ring-2 focus:ring-[#005ea3]" name="message" placeholder="บอกเราว่าเราสามารถช่วยเหลือโปรเจคของคุณอย่างไร..." rows={6} />
            </div>

            <button className="w-full rounded-xl bg-gradient-to-br from-[#005ea3] to-[#0077cc] px-10 py-4 font-bold text-white shadow-lg transition-transform hover:scale-[0.98] md:w-auto" type="submit">
              ส่งข้อความ
            </button>
          </form>
        </div>

        <div className="space-y-12 max-md:space-y-8 lg:col-span-5">
          <div className="space-y-10 max-md:space-y-6">
            <ContactBlock icon={<MapPin className="text-[#005ea3]" size={24} />} title="ที่ตั้งสำนักงาน">
              <p className="font-medium leading-relaxed">
                146/4 ถนนประชาทร แขวงลาดกระบัง
                <br />
                เขตลาดกระบัง กรุงเทพฯ 10520
              </p>
            </ContactBlock>
            <ContactBlock icon={<Phone className="text-[#005ea3]" size={24} />} title="โทรศัพท์">
              <p className="font-medium">098-524-1542 | 081-889-7068</p>
              <p className="mt-1 text-sm text-slate-500">จันทร์ - ศุกร์, 08:30 - 17:30 น.</p>
            </ContactBlock>
            <ContactBlock icon={<Mail className="text-[#005ea3]" size={24} />} title="อีเมล">
              <p className="font-medium">savecost.info@gmail.com</p>
              <p className="font-medium">savecost.sup@gmail.com</p>
            </ContactBlock>
            <div className="flex gap-6 max-md:gap-4">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-slate-100">
                <MessageCircle className="text-[#005ea3]" size={24} />
              </div>
              <div className="flex flex-wrap items-center gap-5">
                <div>
                  <h2 className="mb-2 text-sm font-bold uppercase tracking-widest text-slate-600">LINE Official</h2>
                  <p className="font-medium leading-relaxed">
                    แอดไลน์คุยกับทีมงานได้โดยตรง
                    <br />
                    ไอดีไลน์:{" "}
                    <a className="font-bold text-[#005ea3] underline-offset-2 hover:underline" href={lineUrl} rel="noopener noreferrer" target="_blank">
                      {lineId}
                    </a>
                  </p>
                </div>
                <a aria-label={`แอดไลน์ SaveCost Intertrade (${lineId})`} href={lineUrl} rel="noopener noreferrer" target="_blank">
                  <img alt={`LINE QR Code ของ Savecost Intertrade (ID: ${lineId})`} className="h-24 w-24 flex-shrink-0 rounded-lg border border-slate-200 object-contain transition-opacity hover:opacity-80" src={publicPath("/images/line-qr.jpg")} />
                </a>
              </div>
            </div>
          </div>

          <div className="group relative overflow-hidden rounded-xl border border-slate-200 shadow-sm">
            <div className="relative aspect-video overflow-hidden bg-slate-100">
              <iframe allowFullScreen className="h-full w-full border-0" loading="lazy" referrerPolicy="no-referrer-when-downgrade" src={`https://maps.google.com/maps?q=${encodeURIComponent(companyAddress)}&output=embed`} title="แผนที่ตั้งสำนักงาน SaveCost Intertrade" />
              <a className="absolute bottom-4 left-4 rounded-lg bg-white px-4 py-2 text-xs font-bold tracking-tight text-[#005ea3] shadow-md transition-colors hover:bg-[#005ea3] hover:text-white" href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(companyAddress)}`} rel="noopener noreferrer" target="_blank">
                VIEW ON GOOGLE MAPS
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ContactBlock({ children, icon, title }: { children: React.ReactNode; icon: React.ReactNode; title: string }) {
  return (
    <div className="flex gap-6 max-md:gap-4">
      <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-slate-100">{icon}</div>
      <div>
        <h2 className="mb-2 text-sm font-bold uppercase tracking-widest text-slate-600">{title}</h2>
        {children}
      </div>
    </div>
  );
}
