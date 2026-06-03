import Link from "next/link";
import { ArrowRight, Download, FlaskConical, ShieldCheck, SprayCan, Waves } from "lucide-react";
import { catalogCategories, catalogProducts, categoryLabels, type ProductCategory } from "@/lib/catalog";
import { publicPath } from "@/lib/site-paths";

const categoryMeta: Record<ProductCategory, { icon: React.ComponentType<{ size?: number; className?: string }>; note: string }> = {
  Chemical: {
    icon: FlaskConical,
    note: "เคมีปรับปรุงคุณภาพน้ำและน้ำยาซ่อมบำรุงสำหรับระบบคูลลิ่งทาวเวอร์ ชิลเลอร์ และบอยเลอร์",
  },
  Grease: {
    icon: ShieldCheck,
    note: "จารบีสำหรับงานหล่อลื่นทั่วไป งานหนัก งานอุณหภูมิสูง และงานป้องกันการจับตาย",
  },
  "Industrial Sprays": {
    icon: SprayCan,
    note: "สเปรย์อุตสาหกรรมสำหรับทำความสะอาด หล่อลื่น ป้องกันสนิม และงานแม่พิมพ์",
  },
  "Industrial Water Filters": {
    icon: Waves,
    note: "สารกรองน้ำและวัสดุสำหรับระบบกรองน้ำในโรงงานอุตสาหกรรม",
  },
};

export default function ProductsPage() {
  return (
    <div className="pb-20 pt-28">
      <section className="mx-auto mb-16 max-w-7xl px-8 max-md:mb-10 max-md:px-5">
        <div className="relative overflow-hidden rounded-xl bg-slate-950 px-8 py-16 text-white max-md:px-5 max-md:py-10 md:px-12">
          <div className="absolute inset-0 opacity-25">
            <img
              alt="Industrial equipment warehouse"
              className="h-full w-full object-cover"
              src="https://images.unsplash.com/photo-1712190695017-5118107679e9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxpbmR1c3RyaWFsJTIwZXF1aXBtZW50JTIwdG9vbHMlMjB3YXJlaG91c2V8ZW58MXx8fHwxNzc1NDY4ODgwfDA&ixlib=rb-4.1.0&q=80&w=1080"
            />
          </div>
          <div className="relative z-10 grid gap-10 lg:grid-cols-[1fr_360px] lg:items-end">
            <div>
              <span className="mb-4 block text-xs font-bold uppercase tracking-[0.24em] text-sky-300">PRODUCT CATALOG 2024</span>
              <h1 className="mb-5 max-w-3xl text-5xl font-extrabold tracking-tight max-md:text-4xl md:text-6xl">สินค้าของเรา</h1>
              <p className="max-w-2xl text-lg leading-relaxed text-slate-200 max-md:text-base max-md:leading-7">
                รายการสินค้าจาก catalog ล่าสุดของ SaveCost Intertrade ครอบคลุมเคมีภัณฑ์ จารบี
                สเปรย์อุตสาหกรรม และสารกรองน้ำสำหรับงานโรงงาน
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#005ea3] px-5 py-3 font-bold text-white shadow-lg transition-colors hover:bg-[#0077cc] sm:w-auto" href="/quote">
                  ขอใบเสนอราคา <ArrowRight size={18} />
                </Link>
                <a className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 font-bold text-slate-950 transition-colors hover:bg-slate-100 sm:w-auto" href={publicPath("/catalog/savecost-catalog-2024.pdf")} target="_blank">
                  ดาวน์โหลด Catalog <Download size={18} />
                </a>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-3 rounded-xl bg-white/10 p-4 backdrop-blur max-md:p-3">
              <Metric label="Products" value={catalogProducts.length} />
              <Metric label="Categories" value={catalogCategories.length} />
              <Metric label="Since" value="2015" />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto mb-14 max-w-7xl px-8 max-md:px-5">
        <div className="grid grid-cols-1 gap-4 max-md:grid-cols-2 md:grid-cols-4">
          {catalogCategories.map((category) => {
            const Icon = categoryMeta[category].icon;
            const count = catalogProducts.filter((product) => product.category === category).length;
            return (
              <a key={category} className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl max-md:p-4" href={`#${category}`}>
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-50 text-[#005ea3] max-md:mb-3">
                  <Icon size={24} />
                </div>
                <h2 className="text-xl font-bold max-md:text-lg">{categoryLabels[category]}</h2>
                <p className="mt-1 text-sm font-bold text-[#005ea3]">{category}</p>
                <p className="mt-4 text-sm text-slate-600">{count} รายการ</p>
              </a>
            );
          })}
        </div>
      </section>

      <section className="mx-auto max-w-7xl space-y-16 px-8 max-md:space-y-12 max-md:px-5">
        {catalogCategories.map((category) => {
          const Icon = categoryMeta[category].icon;
          const products = catalogProducts.filter((product) => product.category === category);
          return (
            <section id={category} key={category} className="scroll-mt-28">
              <div className="mb-8 flex flex-col justify-between gap-4 border-b border-slate-200 pb-6 md:flex-row md:items-end">
                <div>
                  <div className="mb-3 flex items-center gap-3">
                    <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#005ea3] text-white">
                      <Icon size={22} />
                    </span>
                    <span className="text-sm font-bold uppercase tracking-[0.2em] text-[#005ea3]">{category}</span>
                  </div>
                  <h2 className="text-3xl font-black tracking-tight text-slate-900 max-md:text-2xl md:text-4xl">{categoryLabels[category]}</h2>
                  <p className="mt-3 max-w-3xl text-slate-600">{categoryMeta[category].note}</p>
                </div>
                <span className="rounded-full bg-slate-100 px-4 py-2 text-sm font-bold text-slate-600">{products.length} รายการ</span>
              </div>

              <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
                {products.map((product) => (
                  <article key={product.id} className="group flex min-h-60 flex-col rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-[#005ea3]/40 hover:shadow-xl max-md:min-h-0 max-md:p-5">
                    <div className="mb-5">
                      <div className="mb-4 flex items-center justify-between gap-3">
                        <div className="text-xs font-black tracking-[0.2em] text-[#005ea3]">{product.id}</div>
                        <span className="max-w-[190px] rounded-full bg-slate-100 px-3 py-1 text-right text-xs font-bold leading-snug whitespace-nowrap text-slate-500">
                          {categoryLabels[category]}
                        </span>
                      </div>
                      <h3 className="max-w-[22rem] text-xl font-bold leading-snug text-slate-900 group-hover:text-[#005ea3] max-md:text-lg">
                        {product.name}
                      </h3>
                    </div>
                    <p className="flex-1 leading-7 text-slate-600 max-md:text-[0.95rem]">{product.description}</p>
                    <Link className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#005ea3]" href={`/quote?product=${product.id}`}>
                      ขอราคาสินค้านี้ <ArrowRight size={16} />
                    </Link>
                  </article>
                ))}
              </div>
            </section>
          );
        })}
      </section>

      <section className="mx-auto mt-20 max-w-7xl px-8 max-md:mt-14 max-md:px-5">
        <div className="grid gap-8 rounded-xl bg-slate-50 p-8 max-md:p-6 md:grid-cols-[1fr_auto] md:items-center md:p-10">
          <div>
            <h2 className="text-3xl font-black tracking-tight max-md:text-2xl">ไม่เจอรุ่นที่ต้องการ?</h2>
            <p className="mt-3 max-w-2xl text-slate-600">
              ส่งรูปสินค้า รุ่นเดิม หรือสเปกหน้างานมาให้ทีมงานช่วยเทียบรุ่นและจัดหาเพิ่มเติมได้
            </p>
          </div>
          <Link className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#005ea3] px-6 py-4 font-bold text-white shadow-lg transition-colors hover:bg-[#0077cc]" href="/quote">
            ส่งคำขอจัดหา <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
}

function Metric({ label, value }: { label: string; value: number | string }) {
  return (
    <div className="text-center">
      <div className="text-3xl font-black max-md:text-2xl">{value}</div>
      <div className="text-xs font-bold uppercase tracking-widest text-slate-300 max-md:tracking-normal">{label}</div>
    </div>
  );
}
