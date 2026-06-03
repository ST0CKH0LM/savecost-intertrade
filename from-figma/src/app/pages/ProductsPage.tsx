import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

const products = [
  {
    id: "SC-1001",
    name: "Scale inhibitor",
    category: "Chemical",
    description:
      "น้ำยาป้องกันตะกรันและสนิม เป็นน้ำยาป้องกันตะกรันและการกัดกร่อนในระบบคูลลิ่งทาวเวอร์ ปลอดภัยกับโลหะ พลาสติก ซีล และวาล์วต่างๆ น้ำยาจะช่วยปรับค่า pH ของน้ำในระบบ",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDvQNzOuErkJNKQyInDw7qxW18hu6GzfVPtgaAjXUpeQZ5h2Pps9hc3CajSZmROUMS62T-g1905VoY750O_nY3-oei35oouV5qbgTwZlDmxs_GjmRTdI90TZjxIeh3pKLcm3V4cAjEMBFuNo3iBf0FdsTBlKO0ezn7KoFIZu6KPI5UY9mvorHa72jcDI2rHkdTESpUeXbMQWLahWF3JIAaW0vvH2u_1H8MeoFpIjwPjgfUbPBVL35U2mc25XB8d0PgnFDyIvKKnSKk",
  },
  {
    id: "SC-2001",
    name: "Multi-purpose grease",
    category: "Grease",
    description: "จารบีอเนกประสงค์ เหมาะสำหรับการหล่อลื่นทั่วไป ทนความร้อนและแรงกดได้ดี",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDQuBcRaGAN66hK7nsLUt1ywxqRuH8UC6UmTvjyD8wbYzsaNccdUERHkelqm7KrS5g3_xpnYAIHdbdBem_Xkzwd5npmucI77pcNzyK_YfIk2eIUqjsM_Gj9o0FO307Sf2x3mUSrlLN8HhuqEDBOWfobsxa-0JWkhLAy1F0X22kCctDiPTXzMa8ejRxTZ2HuBWQffMwjymwWTF3xKGIQfEvfLlGw8qw7RlZB2krIRL7c7R285Uzy-d1fuvyXxIAWQ6FmYnw7oKxNRb0",
  },
  {
    id: "SC-3001",
    name: "Contact cleaner",
    category: "Spray",
    description:
      "น้ำยาล้างหน้าคอนแทค แห้งเร็ว ไม่ทิ้งคราบ ไม่ทำปฏิกิริยากับพลาสติก ไม่เป็นอันตรายต่อร่างกาย",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD--eKIILmIXLyb2rjizYm7Xjfk4gdXTrDisDQWrPI2ek3TIMSgNdyOJNTlBn_-JK-vw96zsciKpPH31xvibo6mdHsfHuzYQir99ljwjjreW5m168K6TA2o3PT3ICTIyzEiCezslX3lCD-2vVldP7jZdyJ1MWIDL9FnSsWeNuULiw3a7SvvU-jXQtCGECw6lTqLHOghntuvALv5B01M6jRYJCA3quuGcPqUPJCBKounMbhvgYIpbvBzuwuyz5Ti7O1snNjM3aDomQE",
  },
  {
    id: "SC-5001",
    name: "Sodium chloride",
    category: "Filter",
    description: "เกลืออุตสาหกรรมสำหรับทำความสะอาดสารกรองน้ำ",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD0j20SXnd9Ohvb001_1p43UfhCqK8yMvcGyTGwLQY5wMM4hu2b8R9o4WlAc-DA9nnOWU8qnSrpcGivtXbhXgHjWdpzyD4wwqEW9vt7QrnMHUcMT2ZdOna0xZ40Bj14ll_QWz7bX44LKWNuBiKpAhs2lMQk4uv4dPK0v3RTRqRN6FrKfJg7dYrT3N25FT5ulBUiIdnwRIiQD50e3I-kpEoFunYOasDTEHVNhghkktBjqIVv_Kw4rXEFZ73Pxdn4xaigCakqqhpHAvA",
  },
  {
    id: "SC-1002",
    name: "Biocide",
    category: "Chemical",
    description:
      "น้ำยาฆ่าเชื้อแบคทีเรีย เชื้อรา และตะไคร่น้ำ ในระบบน้ำหล่อเย็น ใช้งานง่าย ปลอดภัย และมีประสิทธิภาพสูง",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBt5doo6IdHg8Z4mFCGimNOy_Agkm6muS-dPE-6jDQMId4G7n6lbthgx3hBpMDRtTkwjh3GnfLRd-ZkL1GJMi4CdQTCsmi7gUizbdl4nyhVOSWuYAwAUpBhXdpiqpniUdt38CpAmz9ayeJLQY4YccnC8A11OccsBSRDGdAraRFX1-xRHApdy9Ex4FfIUeOovMH18Z54pYI8BQ39T-8RdK6HyP-eTf_O_X-c5HDThvHD1BsY4E0bxHu7eKQY5N_9FvGClNJbaI0oW-Y",
  },
  {
    id: "SC-5002",
    name: "Ion exchange resins",
    category: "Filter",
    description:
      "สารกรองน้ำเรซิ่น สามารถกำจัดความกระด้าง, หินปูน, แคลเซียม, แมกนีเซียมและจุดขุ่นสี เหมาะสำหรับการทำน้ำอ่อน",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBd8R1fItt5FO1Hr5wpF0isVfokUVX08uIkhP4wO-7x11hWDVo4yj_KUNSjusO6RGDVhbrY59FVbG3N3Ecpi5tTiZMyVM2JnHDPjy7XdlTodbrsndKNq3fMvBRr44g4kNPqenn28bR39-aKF42Fqan5NBxhLftFczXgycpU36jXeYcJqD4a5KDEyUUD1-ny1UaRzafmDsawz0Itb3vbeGtruCKxLp5gU9K-fUiKQca4X09wcmH_zpZtqcWgorb1Jr79YDPiGj8gQxA",
  },
];

const categories = ["ทั้งหมด", "Chemical", "Grease", "Spray", "Filter"];

export function ProductsPage() {
  return (
    <div className="pb-20">
      <section className="max-w-7xl mx-auto px-8 mb-16">
        <div className="relative overflow-hidden rounded-xl bg-slate-100 h-[300px] flex items-center">
          <div className="absolute inset-0 z-0 opacity-20">
            <img
              alt="Industrial Equipment Warehouse"
              className="w-full h-full object-cover"
              src="https://images.unsplash.com/photo-1712190695017-5118107679e9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxpbmR1c3RyaWFsJTIwZXF1aXBtZW50JTIwdG9vbHMlMjB3YXJlaG91c2V8ZW58MXx8fHwxNzc1NDY4ODgwfDA&ixlib=rb-4.1.0&q=80&w=1080"
            />
          </div>
          <div className="relative z-10 px-12 max-w-2xl">
            <span className="text-[#005ea3] tracking-[0.2em] font-bold uppercase mb-4 block text-xs">
              CATALOG 2024
            </span>
            <h1 className="text-5xl font-extrabold tracking-tight mb-4">สินค้าของเรา</h1>
            <p className="text-lg text-slate-600 leading-relaxed">
              ค้นพบอุปกรณ์อุตสาหกรรมคุณภาพสูงและโซลูชันที่แม่นยำสำหรับการดำเนินงานของคุณ
              เราคัดสรรเฉพาะแบรนด์ชั้นนำระดับโลก
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row gap-12">
        {/* Sidebar */}
        <aside className="w-full md:w-64 flex-shrink-0">
          <div className="sticky top-28 space-y-10">
            <div>
              <h3 className="text-xl font-bold mb-6">หมวดหมู่สินค้า</h3>
              <ul className="space-y-3">
                {categories.map((category, index) => (
                  <li key={category}>
                    <button
                      className={`w-full text-left px-4 py-2 rounded-lg font-medium transition-all ${
                        index === 0
                          ? "bg-[#005ea3] text-white"
                          : "text-slate-600 hover:bg-slate-100"
                      }`}
                    >
                      {category}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </aside>

        {/* Products Grid */}
        <div className="flex-grow">
          <div className="flex justify-between items-center mb-8">
            <span className="text-slate-600 font-medium">พบสินค้า 29 รายการ</span>
            <div className="flex items-center gap-2">
              <span className="text-sm text-slate-600">เรียงโดย:</span>
              <select className="bg-transparent border-none text-sm font-bold text-[#005ea3] focus:ring-0 cursor-pointer">
                <option>ล่าสุด</option>
                <option>รหัสสินค้า</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <div
                key={product.id}
                className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-slate-200"
              >
                <div className="relative h-64 bg-white overflow-hidden flex items-center justify-center p-4">
                  <img
                    alt={product.name}
                    className="max-h-full max-w-full object-contain group-hover:scale-110 transition-transform duration-700"
                    src={product.image}
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-slate-200 text-slate-700 text-[10px] font-bold px-2 py-1 rounded-sm uppercase tracking-wider">
                      {product.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="text-xs font-bold text-[#005ea3] mb-1">{product.id}</div>
                  <h4 className="text-lg font-bold mb-2 group-hover:text-[#005ea3] transition-colors">
                    {product.name}
                  </h4>
                  <p className="text-sm text-slate-600 line-clamp-3 mb-6">{product.description}</p>
                  <button className="flex items-center gap-2 text-[#005ea3] font-bold text-sm group/btn">
                    ดูรายละเอียด
                    <ArrowRight className="text-sm group-hover/btn:translate-x-1 transition-transform" size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="mt-16 flex justify-center items-center gap-2">
            <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-slate-300 hover:bg-slate-100 transition-all">
              <ChevronLeft size={20} />
            </button>
            <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-[#005ea3] text-white font-bold">
              1
            </button>
            <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-slate-300 hover:bg-slate-100 transition-all">
              2
            </button>
            <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-slate-300 hover:bg-slate-100 transition-all">
              3
            </button>
            <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-slate-300 hover:bg-slate-100 transition-all">
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
