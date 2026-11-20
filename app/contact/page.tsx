import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Clock, Mail, MapPin, Navigation, Phone } from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { officeEmail, salesRegions } from "@/lib/contacts";
import { publicPath } from "@/lib/site-paths";
import { lineId, lineUrl } from "@/lib/social";

export const metadata: Metadata = {
  title: "ติดต่อเรา | Savecost Intertrade",
  description: "ติดต่อ Savecost Intertrade โทร 081-889-7068 แอดไลน์ หรืออีเมลถึงฝ่ายขายประจำภาคตะวันออกและภาคกลาง สอบถามสินค้า ขอใบเสนอราคา หรือนัดสำรวจหน้างาน",
};

const mapsUrl = "https://maps.app.goo.gl/e3hDofp4pB13HNBJA";

/** Regional salespeople first, then the office for everything else. */
const team = [
  ...salesRegions.filter((region) => region.email !== officeEmail).map((region) => ({ name: region.contact, area: region.label, emails: [region.email] })),
  { name: "ออฟฟิศ", area: "", emails: [officeEmail, "savecost.sup@gmail.com"] },
];

export default function ContactPage() {
  return (
    <div className="pb-20 pt-28 max-md:pb-14">
      {/* Banner with the main contact channels */}
      <section className="mx-auto mb-16 max-w-7xl px-8 max-md:mb-10 max-md:px-5">
        <div className="relative overflow-hidden rounded-2xl bg-slate-950 text-white">
          <img alt="ทีมงาน SaveCost Intertrade ให้บริการที่หน้างานลูกค้า" className="absolute inset-0 h-full w-full object-cover opacity-25" src={publicPath("/images/work/technician-team-service.jpg")} />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/85 to-slate-950/40" />
          <div className="relative p-12 max-md:p-6">
            <div>
              <span className="mb-4 block text-xs font-bold uppercase tracking-[0.24em] text-sky-300">Contact us</span>
              <h1 className="mb-5 text-6xl font-extrabold max-md:text-4xl">ติดต่อเรา</h1>
              <p className="max-w-xl text-lg leading-relaxed text-slate-200 max-md:text-base max-md:leading-7">
                สอบถามสินค้า ขอใบเสนอราคา หรือนัดสำรวจหน้างาน ทีมงานพร้อมช่วยเลือกสินค้าและบริการที่เหมาะกับโรงงานของคุณ
              </p>
              <p className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-slate-300">
                <Clock className="text-sky-300" size={16} /> เปิดทำการ จันทร์ – ศุกร์ 08:30 – 17:00 น.
              </p>
              <div className="mt-8">
                <Link className="group inline-flex items-center gap-2 rounded-xl bg-[#005ea3] px-6 py-4 font-bold text-white shadow-lg transition-colors hover:bg-[#0077cc] max-md:w-full max-md:justify-center" href="/quote">
                  ขอใบเสนอราคา
                  <ArrowRight className="transition-transform group-hover:translate-x-1" size={18} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl grid-cols-1 items-start gap-12 px-8 max-md:gap-10 max-md:px-5 lg:grid-cols-12">
        {/* Who to contact + office details */}
        <div className="lg:col-span-5">
          <h2 className="mb-2 text-3xl font-bold max-md:text-2xl">ติดต่อฝ่ายขายตามพื้นที่</h2>
          <p className="mb-6 text-slate-600">ส่งอีเมลถึงผู้ดูแลพื้นที่ของโรงงานคุณได้โดยตรง</p>
          <ul className="divide-y divide-slate-200 border-y border-slate-200">
            {team.map((member) => (
              <li className="py-5" key={member.name}>
                <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
                  <span className="text-lg font-bold text-slate-900">{member.name}</span>
                  {member.area && <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-bold text-[#005ea3]">{member.area}</span>}
                </div>
                <div className="mt-2 grid gap-1">
                  {member.emails.map((email) => (
                    <a className="inline-flex w-fit items-center gap-2 break-all text-slate-600 hover:text-[#005ea3]" href={`mailto:${email}`} key={email}>
                      <Mail className="flex-shrink-0" size={16} /> {email}
                    </a>
                  ))}
                </div>
              </li>
            ))}
          </ul>

          <h2 className="mb-5 mt-12 text-xl font-bold max-md:mt-10">สำนักงาน</h2>
          <dl className="grid gap-4 text-slate-700">
            <InfoRow icon={<MapPin size={18} />} label="ที่อยู่">
              146/4 ถนนประชาทร แขวงลาดกระบัง เขตลาดกระบัง กรุงเทพฯ 10520
            </InfoRow>
            <InfoRow icon={<Phone size={18} />} label="โทรศัพท์">
              <a className="hover:text-[#005ea3]" href="tel:0818897068">
                081-889-7068
              </a>
            </InfoRow>
          </dl>

          <a className="mt-8 flex w-fit items-center gap-4 rounded-xl border border-slate-200 p-3 pr-6 transition-colors hover:border-[#06c755]" href={lineUrl} rel="noopener noreferrer" target="_blank">
            <img alt={`LINE QR Code ของ Savecost Intertrade (ID: ${lineId})`} className="h-20 w-20 rounded-lg object-contain" src={publicPath("/images/line-qr.jpg")} />
            <span className="text-sm leading-relaxed text-slate-600">
              สแกนเพื่อแอดไลน์
              <br />
              ID: <span className="font-bold text-slate-900">{lineId}</span>
            </span>
          </a>
        </div>

        {/* Form */}
        <div className="rounded-2xl border border-slate-200 bg-white p-10 shadow-sm max-md:p-5 lg:col-span-7">
          <h2 className="mb-2 text-3xl font-bold max-md:text-2xl">ส่งข้อความถึงเรา</h2>
          <p className="mb-8 text-slate-600 max-md:mb-6">ข้อความจะถูกส่งถึงผู้ดูแลพื้นที่ที่คุณเลือก</p>
          <ContactForm />
        </div>
      </section>

      {/* Map */}
      <section className="mx-auto mt-16 max-w-7xl px-8 max-md:mt-12 max-md:px-5">
        <div className="relative overflow-hidden rounded-2xl border border-slate-200">
          <iframe allowFullScreen className="h-[420px] w-full border-0 max-md:h-72" loading="lazy" referrerPolicy="no-referrer-when-downgrade" src="https://maps.google.com/maps?q=SAVECOST+INTERTRADE+CO.,LTD@13.7268453,100.7300746&z=14&output=embed" title="แผนที่ตั้งสำนักงาน SaveCost Intertrade" />
          <div className="absolute left-6 top-6 max-w-xs rounded-xl bg-white p-5 shadow-xl max-md:static max-md:max-w-none max-md:rounded-none max-md:shadow-none">
            <div className="mb-1 text-xs font-bold uppercase tracking-widest text-[#005ea3]">SaveCost Intertrade</div>
            <p className="mb-4 font-medium leading-relaxed text-slate-800">146/4 ถนนประชาทร แขวงลาดกระบัง เขตลาดกระบัง กรุงเทพฯ 10520</p>
            <a className="inline-flex items-center gap-2 rounded-lg bg-[#005ea3] px-4 py-3 text-sm font-bold text-white transition-colors hover:bg-[#0077cc]" href={mapsUrl} rel="noopener noreferrer" target="_blank">
              <Navigation size={16} /> นำทางด้วย Google Maps
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

function InfoRow({ children, icon, label }: { children: React.ReactNode; icon: React.ReactNode; label: string }) {
  return (
    <div className="flex gap-3">
      <dt className="mt-0.5 flex-shrink-0 text-[#005ea3]" title={label}>
        {icon}
        <span className="sr-only">{label}</span>
      </dt>
      <dd className="leading-relaxed">{children}</dd>
    </div>
  );
}
