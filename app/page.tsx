import Link from "next/link";
import { ArrowRight, CheckCircle, Clock, Download, ShieldCheck, Truck } from "lucide-react";
import { catalogProducts } from "@/lib/catalog";
import { publicPath } from "@/lib/site-paths";

const featured = [
  {
    title: "เครื่องมือและอุปกรณ์อุตสาหกรรม",
    text: "รวมเครื่องมือช่างและวัสดุสิ้นเปลืองสำหรับโรงงานอุตสาหกรรมคุณภาพสูง",
    image: publicPath("/images/work/industrial-plant-cooling-tower.jpg"),
  },
  {
    title: "อุปกรณ์ความเที่ยงตรงสูง",
    text: "ส่วนประกอบเครื่องจักรและอะไหล่ที่มีความแม่นยำและทนทาน",
    image: publicPath("/images/work/water-filter-inspection.jpg"),
  },
  {
    title: "อุปกรณ์ความปลอดภัย (PPE)",
    text: "อุปกรณ์ป้องกันอันตรายส่วนบุคคลที่ได้รับมาตรฐานสากล",
    image: publicPath("/images/work/ppe-safety-inspection.jpg"),
  },
];

const reasons = [
  { icon: ShieldCheck, title: "คุณภาพที่ตรวจสอบได้", text: "คัดเลือกสินค้าและแบรนด์ที่เหมาะสมกับงานอุตสาหกรรมจริง" },
  { icon: Clock, title: "ตอบกลับรวดเร็ว", text: "ช่วยประเมินสเปกและจัดทำใบเสนอราคาอย่างเป็นระบบ" },
  { icon: Truck, title: "จัดส่งตรงเวลา", text: "ประสานงานตั้งแต่การจัดหาจนถึงการส่งมอบสินค้า" },
  { icon: CheckCircle, title: "บริการครบวงจร", text: "ให้คำปรึกษา จัดหา เทียบรุ่น และดูแลหลังการขาย" },
];

const highlightedProducts = catalogProducts.slice(0, 6);

export default function HomePage() {
  return (
    <>
      <section className="relative flex min-h-[870px] items-center overflow-hidden pt-24 max-lg:min-h-0 max-lg:pb-16 max-md:pb-12 max-md:pt-24">
        <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-10 px-8 max-md:px-6 lg:grid-cols-2 lg:gap-12">
          <div className="z-10">
            <h1 className="mb-5 text-5xl font-extrabold leading-tight text-slate-900 max-md:text-center max-md:text-[2.15rem] max-md:leading-[1.24] md:text-6xl">
              คุณภาพมาตรฐาน <br />
              <span className="text-[#005ea3]">บริการด้วยใจจริง</span>
            </h1>
            <p className="mb-8 max-w-lg text-xl leading-relaxed text-slate-600 max-md:mx-auto max-md:text-center max-md:text-base max-md:leading-7">เซฟ⁠คอส อินเตอร์⁠เทรด ผู้นำเข้าและจัดจำหน่ายอุปกรณ์อุตสาหกรรมครบวงจร มุ่งมั่นส่งมอบสินค้าคุณภาพสูงเพื่อตอบสนองทุกความต้องการของภาคอุตสาหกรรม</p>
            <div className="flex flex-wrap gap-4 max-md:justify-center">
              <Link className="rounded-xl bg-gradient-to-r from-[#005ea3] to-[#0077cc] px-8 py-4 text-lg font-bold text-white shadow-lg transition-all hover:shadow-xl max-md:w-full max-md:max-w-[232px] max-md:justify-center max-md:text-center" href="/products">
                เลือกชมสินค้า
              </Link>
              <Link className="rounded-xl bg-slate-200 px-8 py-4 text-lg font-bold text-slate-900 transition-all hover:bg-slate-300 max-md:w-full max-md:max-w-[232px] max-md:text-center" href="/about">
                รู้จักเรามากขึ้น
              </Link>
            </div>
            <div className="mt-10 hidden max-w-lg grid-cols-3 gap-3 lg:grid">
              <HeroMetric label="โรงงานที่ดูแล" value="30+" />
              <HeroMetric label="เริ่มก่อตั้ง" value="2015" />
              <HeroMetric label="สินค้าใน Catalog" value={`${catalogProducts.length}`} />
            </div>
          </div>

          <div className="relative">
            <div className="relative z-20 aspect-[4/5] overflow-hidden rounded-xl shadow-2xl max-lg:aspect-[16/9] max-md:aspect-[4/3]">
              <img alt="ทีมงาน Savecost Intertrade กำลังบำรุงรักษาคู⁠ล⁠ลิ่ง⁠ทาวเวอร์" className="h-full w-full object-cover" src={publicPath("/images/work/hero-cooling-tower-maintenance.jpg")} />
            </div>
          </div>

          <div className="grid max-w-lg grid-cols-3 gap-3 lg:hidden max-md:mx-auto max-md:max-w-[342px]">
            <HeroMetric label="โรงงานที่ดูแล" value="30+" />
            <HeroMetric label="เริ่มก่อตั้ง" value="2015" />
            <HeroMetric label="สินค้าใน Catalog" value={`${catalogProducts.length}`} />
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-24 max-md:py-14">
        <div className="mx-auto max-w-7xl px-8 max-md:px-5">
          <div className="mb-16 max-md:mb-8">
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-[#005ea3]">หมวดหมู่สินค้า</span>
            <h2 className="mt-2 text-4xl font-bold text-slate-900 max-md:text-3xl">สินค้าแนะนำ (Featured Products)</h2>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-12">
            <div className="group relative cursor-pointer overflow-hidden rounded-xl bg-white shadow-sm transition-all duration-500 hover:shadow-xl md:col-span-8">
              <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/60 to-transparent" />
              <img alt={featured[0].title} className="h-96 w-full object-cover transition-transform duration-700 group-hover:scale-105 max-md:h-72 lg:h-full" src={featured[0].image} />
              <div className="absolute bottom-8 left-8 right-8 z-20 text-white max-md:bottom-5 max-md:left-5 max-md:right-5">
                <h3 className="mb-2 text-2xl font-bold max-md:text-xl">{featured[0].title}</h3>
                <p className="max-w-sm opacity-90">{featured[0].text}</p>
              </div>
            </div>

            {featured.slice(1).map((item) => (
              <div key={item.title} className="group cursor-pointer overflow-hidden rounded-xl bg-white shadow-sm transition-all hover:shadow-xl md:col-span-4">
                <div className="relative aspect-square">
                  <img alt={item.title} className="h-full w-full object-cover transition-transform group-hover:scale-110" src={item.image} />
                </div>
                <div className="p-6 max-md:p-5">
                  <h3 className="text-lg font-bold text-slate-900">{item.title}</h3>
                  <p className="mt-2 text-sm text-slate-600">{item.text}</p>
                </div>
              </div>
            ))}

            <div className="group cursor-pointer overflow-hidden rounded-xl bg-white shadow-sm transition-all hover:shadow-xl md:col-span-8">
              <div className="flex h-full flex-col md:flex-row">
                <div className="flex flex-col justify-center p-8 max-md:p-6 md:w-1/2">
                  <h3 className="text-2xl font-bold text-slate-900">บริการดูแลและซ่อมบำรุง</h3>
                  <p className="mt-4 leading-relaxed text-slate-600">เรามีทีมงานวิศวกรผู้เชี่ยวชาญพร้อมให้คำปรึกษาและบริการหลังการขาย เพื่อให้การทำงานของคุณไม่สะดุด</p>
                  <Link className="mt-6 flex items-center gap-2 font-bold text-[#005ea3]" href="/about">
                    รายละเอียดบริการ <ArrowRight size={18} />
                  </Link>
                </div>
                <div className="h-64 md:h-auto md:w-1/2">
                  <img alt="ทีมวิศวกรของเรากำลังให้บริการหน้างาน" className="h-full w-full object-cover" src={publicPath("/images/work/technician-team-service.jpg")} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-8 py-24 max-md:px-5 max-md:py-14">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <span className="text-sm font-bold uppercase tracking-[0.2em] text-[#005ea3]">Catalog products</span>
              <h2 className="mt-3 text-4xl font-bold text-slate-900 max-md:text-3xl">รายการสินค้าจาก Catalog ล่าสุด</h2>
              <p className="mt-4 max-w-2xl text-slate-600">เริ่มจากรายการยอดนิยมในหมวดเคมีภัณฑ์และสินค้าซ่อมบำรุง พร้อมดูทั้งหมดได้ในหน้า catalog</p>
            </div>
            <a className="inline-flex items-center gap-2 rounded-xl border border-slate-300 px-5 py-3 font-bold text-slate-700 transition-colors hover:bg-slate-50" href={publicPath("/catalog/savecost-catalog-2024.pdf")} target="_blank">
              ดาวน์โหลด PDF <Download size={18} />
            </a>
          </div>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {highlightedProducts.map((product) => (
              <article key={product.id} className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl">
                <div className="mb-2 text-xs font-bold tracking-[0.2em] text-[#005ea3]">{product.id}</div>
                <h3 className="mb-3 text-xl font-bold">{product.name}</h3>
                <p className="line-clamp-3 text-slate-600">{product.description}</p>
              </article>
            ))}
          </div>
          <div className="mt-10">
            <Link className="inline-flex items-center gap-2 rounded-xl bg-[#005ea3] px-6 py-4 font-bold text-white shadow-lg transition-colors hover:bg-[#0077cc]" href="/products">
              ดูสินค้าทั้งหมด <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      <section className="px-8 py-24 max-md:px-5 max-md:py-14">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-[#005ea3]">Why choose us</span>
            <h2 className="mt-3 text-4xl font-bold text-slate-900 max-md:text-3xl">ทำไมต้องเลือก SaveCost Intertrade</h2>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
            {reasons.map((reason) => {
              const Icon = reason.icon;
              return (
                <div key={reason.title} className="rounded-xl border border-slate-200 bg-white p-8 shadow-sm transition-shadow hover:shadow-xl max-md:p-6">
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-blue-100">
                    <Icon className="text-[#005ea3]" size={28} />
                  </div>
                  <h3 className="mb-3 text-xl font-bold">{reason.title}</h3>
                  <p className="text-slate-600">{reason.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

function HeroMetric({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white/80 p-4 shadow-sm backdrop-blur max-md:p-3">
      <div className="text-2xl font-bold text-[#005ea3] max-md:text-xl">{value}</div>
      <div className="mt-1 text-xs font-bold leading-snug text-slate-500">{label}</div>
    </div>
  );
}
