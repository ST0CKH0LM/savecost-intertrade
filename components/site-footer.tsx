import Link from "next/link";
import { Facebook, Mail, MapPin, Phone } from "lucide-react";
import { LineIcon } from "@/components/line-icon";
import { SaveCostLogo } from "@/components/savecost-logo";
import { facebookUrl, lineId, lineUrl } from "@/lib/social";
import { publicPath } from "@/lib/site-paths";

export function SiteFooter() {
  return (
    <footer className="bg-slate-950 text-white">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-8 py-16 max-md:gap-9 max-md:px-5 max-md:py-12 md:grid-cols-12">
        <div className="md:col-span-5">
          <div className="mb-6 w-fit">
            <SaveCostLogo dark />
          </div>
          <p className="max-w-md text-slate-400 max-md:text-sm max-md:leading-7">
            ผู้นำเข้าและจัดจำหน่ายเคมีภัณฑ์ สารกรองน้ำ และสินค้าซ่อมบำรุงสำหรับโรงงานอุตสาหกรรม
            พร้อมบริการครบ จบในที่เดียว
          </p>
          <div className="mt-8 flex gap-3">
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
        </div>

        <div className="md:col-span-3">
          <h3 className="mb-5 text-sm font-bold uppercase tracking-[0.2em] text-slate-300">เมนู</h3>
          <div className="grid gap-3 text-slate-400">
            <Link className="hover:text-white" href="/">
              หน้าหลัก
            </Link>
            <Link className="hover:text-white" href="/about">
              เกี่ยวกับเรา
            </Link>
            <Link className="hover:text-white" href="/products">
              สินค้า
            </Link>
            <Link className="hover:text-white" href="/contact">
              ติดต่อเรา
            </Link>
          </div>
        </div>

        <div className="md:col-span-4">
          <h3 className="mb-5 text-sm font-bold uppercase tracking-[0.2em] text-slate-300">ติดต่อ</h3>
          <div className="grid gap-4 text-slate-400">
            <div className="flex gap-3">
              <MapPin className="mt-1 flex-shrink-0 text-[#2da3e6]" size={18} />
              <span>146/4 ถนนประชาทร แขวงลาดกระบัง เขตลาดกระบัง กรุงเทพฯ 10520</span>
            </div>
            <div className="flex gap-3">
              <Phone className="mt-1 flex-shrink-0 text-[#2da3e6]" size={18} />
              <span>098-524-1542 | 081-889-7068</span>
            </div>
            <div className="flex gap-3">
              <Mail className="mt-1 flex-shrink-0 text-[#2da3e6]" size={18} />
              <div className="flex flex-col">
                <span>savecost.info@gmail.com</span>
                <span>savecost.sup@gmail.com</span>
              </div>
            </div>
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
              className="h-24 w-24 flex-shrink-0 rounded-lg bg-white p-1 object-contain"
              src={publicPath("/images/line-qr.jpg")}
            />
            <span className="text-sm leading-6">
              สแกนเพื่อแอดไลน์
              <br />
              ID: <span className="font-bold text-white">{lineId}</span>
            </span>
          </a>
        </div>
      </div>
      <div className="border-t border-white/10 px-8 py-6 text-center text-sm text-slate-500 max-md:px-5">
        © 2026 SaveCost Intertrade. All rights reserved.
      </div>
    </footer>
  );
}
