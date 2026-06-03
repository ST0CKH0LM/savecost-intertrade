export function HeroSection() {
  return (
    <section className="relative min-h-[870px] flex items-center overflow-hidden">
      <div className="max-w-7xl mx-auto px-8 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="z-10">
          <h1 className="text-6xl font-extrabold tracking-tight text-slate-900 mb-6 leading-tight">
            คุณภาพมาตรฐาน <br/>
            <span className="text-[#005ea3]">บริการด้วยใจจริง</span>
          </h1>
          <p className="text-xl text-slate-600 mb-10 max-w-lg leading-relaxed">
            เซฟคอส อินเตอร์เทรด ผู้นำเข้าและจัดจำหน่ายอุปกรณ์อุตสาหกรรมครบวงจร มุ่งมั่นส่งมอบสินค้าคุณภาพสูงเพื่อตอบสนองทุกความต้องการของภาคอุตสาหกรรม
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="bg-gradient-to-r from-[#005ea3] to-[#0077cc] text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all">
              เลือกชมสินค้า
            </button>
            <button className="bg-slate-200 text-slate-900 px-8 py-4 rounded-xl font-bold text-lg hover:bg-slate-300 transition-all">
              รู้จักเรามากขึ้น
            </button>
          </div>
        </div>

        <div className="relative">
          <div className="aspect-[4/5] rounded-xl overflow-hidden shadow-2xl relative z-20">
            <img
              alt="Industrial Worker with Heavy Machinery"
              className="w-full h-full object-cover"
              src="https://images.unsplash.com/photo-1764114908655-9a26d32750a0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxpbmR1c3RyaWFsJTIwZmFjdG9yeSUyMHdvcmtlciUyMG1hY2hpbmVyeXxlbnwxfHx8fDE3NzU0Njg4ODB8MA&ixlib=rb-4.1.0&q=80&w=1080"
            />
          </div>
          <div className="absolute -top-12 -right-12 w-64 h-64 bg-blue-200/20 rounded-full blur-3xl -z-10"></div>
          <div className="absolute -bottom-12 -left-12 w-72 h-72 bg-blue-300/10 rounded-full blur-3xl -z-10"></div>
        </div>
      </div>
    </section>
  );
}
