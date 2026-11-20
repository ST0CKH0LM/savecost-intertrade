import Link from "next/link";
import { Facebook, Mail, MapPin, Phone } from "lucide-react";
import { LineIcon } from "@/components/line-icon";
import { SaveCostLogo } from "@/components/savecost-logo";
import { facebookUrl, lineId, lineUrl } from "@/lib/social";
import { publicPath } from "@/lib/site-paths";

const phones = [
  { label: "สำนักงาน", number: "081-889-7068", tel: "0818897068" },
];

const emailGroups = [
  { label: "ออฟฟิศ", emails: ["savecost.info@gmail.com", "savecost.sup@gmail.com"] },
  { label: "คุณมิว · ฝ่ายขายภาคตะวันออก", emails: ["savecost.sales01@gmail.com"] },
  { label: "คุณมุก · ฝ่ายขายภาคกลาง", emails: ["savecost.sales02@gmail.com"] },
];

function ColumnTitle({ children }: { children: React.ReactNode }) {
  return <h3 className="mb-5 text-sm font-bold uppercase tracking-[0.2em] text-slate-300 max-md:mb-4">{children}</h3>;
}

export function SiteFooter() {
  return (
    <footer className="bg-slate-950 text-white">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-8 py-16 max-md:gap-10 max-md:px-5 max-md:py-12 md:grid-cols-2 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-4">
          <div className="mb-6 w-fit">
            <SaveCostLogo dark />
          </div>
          <p className="max-w-md text-slate-400 max-md:text-sm max-md:leading-7">
            <span className="lg:block">ผู้นำเข้าและจัดจำหน่ายเคมีภัณฑ์ สารกรองน้ำ </span>
            <span className="lg:block">และสินค้าซ่อมบำรุงสำหรับโรงงานอุตสาหกรรม </span>
            <span className="lg:block">พร้อมบริการครบ จบในที่เดียว</span>
          </p>
          <div className="mt-6 flex gap-3">
            <a
              aria-label="Facebook"
              className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 text-white transition-colors hover:bg-[#005ea3]"
              href={facebookUrl}
              rel="noopener noreferrer"
              target="_blank"
            >
              <Facebook size={18} />
            </a>
            <a
              aria-label="LINE"
              className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 text-white transition-colors hover:bg-[#06c755]"
              href={lineUrl}
              rel="noopener noreferrer"
              target="_blank"
            >
              <LineIcon size={18} />
            </a>
          </div>
          <a
            aria-label={`แอดไลน์ SaveCost Intertrade (${lineId})`}
            className="mt-6 flex w-fit items-center gap-4 text-slate-400 transition-colors hover:text-white"
            href={lineUrl}
            rel="noopener noreferrer"
            target="_blank"
          >
            <img
              alt={`LINE QR Code ของ Savecost Intertrade (ID: ${lineId})`}
              className="h-24 w-24 flex-shrink-0 rounded-lg bg-white object-contain p-1"
              src={publicPath("/images/line-qr.jpg")}
            />
            <span className="text-sm leading-6">
              สแกนเพื่อแอดไลน์
              <br />
              ID: <span className="font-bold text-white">{lineId}</span>
            </span>
          </a>
        </div>

        <div className="lg:col-span-2">
          <ColumnTitle>เมนู</ColumnTitle>
          <div className="grid gap-3 text-slate-400">
            <Link className="w-fit hover:text-white" href="/">
              หน้าหลัก
            </Link>
            <Link className="w-fit hover:text-white" href="/about">
              เกี่ยวกับเรา
            </Link>
            <Link className="w-fit hover:text-white" href="/products">
              สินค้า
            </Link>
            <Link className="w-fit hover:text-white" href="/contact">
              ติดต่อเรา
            </Link>
            <a className="w-fit hover:text-white" download href={publicPath("/documents/savecost-company-profile.pdf")} target="_blank">
              Company Profile
            </a>
            <a className="w-fit hover:text-white" href={publicPath("/catalog/savecost-catalog-2026.pdf")} target="_blank">
              Catalog 2026
            </a>
          </div>
        </div>

        <div className="lg:col-span-3">
          <ColumnTitle>ติดต่อ</ColumnTitle>
          <div className="grid gap-5 text-slate-400">
            <div className="flex gap-3">
              <MapPin className="mt-1 flex-shrink-0 text-[#2da3e6]" size={18} />
              <span>
                146/4 ถนนประชาทร แขวงลาดกระบัง
                <br />
                เขตลาดกระบัง กรุงเทพฯ 10520
              </span>
            </div>
            <div className="flex gap-3">
              <Phone className="mt-1 flex-shrink-0 text-[#2da3e6]" size={18} />
              <dl className="grid grid-cols-[auto_1fr] gap-x-3 gap-y-1">
                {phones.map((phone) => (
                  <div className="contents" key={phone.label}>
                    <dt className="text-slate-500">{phone.label}</dt>
                    <dd>
                      {phone.tel ? (
                        <a className="whitespace-nowrap hover:text-white" href={`tel:${phone.tel}`}>
                          {phone.number}
                        </a>
                      ) : (
                        <span className="whitespace-nowrap">{phone.number}</span>
                      )}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>

        <div className="lg:col-span-3">
          <ColumnTitle>อีเมล</ColumnTitle>
          <div className="flex gap-3 text-slate-400">
            <Mail className="mt-1 flex-shrink-0 text-[#2da3e6]" size={18} />
            <div className="grid min-w-0 gap-4">
              {emailGroups.map((group) => (
                <div key={group.label}>
                  <div className="text-sm text-slate-500">{group.label}</div>
                  {group.emails.map((email) => (
                    <a className="block break-all hover:text-white" href={`mailto:${email}`} key={email}>
                      {email}
                    </a>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 px-8 py-6 text-center text-sm text-slate-500 max-md:px-5">
        © 2026 SaveCost Intertrade. All rights reserved.
      </div>
    </footer>
  );
}
