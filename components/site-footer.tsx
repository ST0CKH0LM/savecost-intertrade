import Link from "next/link";
import { Facebook, Mail, MapPin, Phone } from "lucide-react";
import { SaveCostLogo } from "@/components/savecost-logo";
import { facebookUrl, lineUrl } from "@/lib/social";

function LineIcon({ size = 18 }: { size?: number }) {
  return (
    <svg fill="currentColor" height={size} viewBox="0 0 24 24" width={size} xmlns="http://www.w3.org/2000/svg">
      <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
    </svg>
  );
}

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
        </div>
      </div>
      <div className="border-t border-white/10 px-8 py-6 text-center text-sm text-slate-500 max-md:px-5">
        © 2026 SaveCost Intertrade. All rights reserved.
      </div>
    </footer>
  );
}
