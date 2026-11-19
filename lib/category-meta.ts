import { FlaskConical, ShieldCheck, SprayCan, Waves } from "lucide-react";
import type { ProductCategory } from "@/lib/catalog";
import { publicPath } from "@/lib/site-paths";

export const categoryMeta: Record<
  ProductCategory,
  { icon: React.ComponentType<{ size?: number; className?: string }>; note: string; image?: { src: string; className: string; imgClassName?: string } }
> = {
  Chemical: {
    icon: FlaskConical,
    note: "เคมีปรับปรุงคุณภาพน้ำและน้ำยาซ่อมบำรุงสำหรับระบบคู⁠ล⁠ลิ่ง⁠ทาวเวอร์ ชิล⁠เลอ⁠ร์ และบอย⁠เลอ⁠ร์",
    image: { src: publicPath("/images/products/chemical.jpg"), className: "bg-[#1b5989]" },
  },
  Grease: {
    icon: ShieldCheck,
    note: "จาระบีสำหรับงานหล่อลื่นทั่วไป งานหนัก งานอุณหภูมิสูง และงานป้องกันการจับตาย",
    image: { src: publicPath("/images/products/grease.jpg"), className: "bg-[#1b5989]" },
  },
  "Industrial Sprays": {
    icon: SprayCan,
    note: "ส⁠เปรย์อุตสาหกรรมสำหรับทำความสะอาด หล่อลื่น ป้องกันสนิม และงานแม่พิมพ์",
    image: { src: publicPath("/images/products/industrial-sprays.jpg"), className: "bg-[#1b5989]" },
  },
  "Industrial Water Filters": {
    icon: Waves,
    note: "สารกรองน้ำ ไส้กรองน้ำ และวัสดุสำหรับระบบกรองน้ำในโรงงานอุตสาหกรรม",
    image: {
      src: publicPath("/images/products/water-filters-cartridges.jpg"),
      // blend the white photo into the slate-50 text column instead of a hard edge
      className: "bg-gradient-to-r from-slate-50 to-white to-30%",
      imgClassName: "[mask-image:linear-gradient(to_right,transparent,black_18%)]",
    },
  },
};
