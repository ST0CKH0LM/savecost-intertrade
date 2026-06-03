export function FeaturedProducts() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-8">
        <div className="mb-16">
          <span className="text-sm text-[#005ea3] tracking-[0.2em] font-bold uppercase">หมวดหมู่สินค้า</span>
          <h2 className="text-4xl font-bold mt-2 text-slate-900">สินค้าแนะนำ (Featured Products)</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Large Feature */}
          <div className="md:col-span-8 group cursor-pointer relative bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500">
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
            <img
              alt="Industrial Tools and Equipment"
              className="w-full h-96 md:h-full object-cover group-hover:scale-105 transition-transform duration-700"
              src="https://images.unsplash.com/photo-1615467529424-0afb0c749c90?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwZXF1aXBtZW50JTIwdG9vbHMlMjB3YXJlaG91c2V8ZW58MXx8fHwxNzc1NDY4ODgwfDA&ixlib=rb-4.1.0&q=80&w=1080"
            />
            <div className="absolute bottom-8 left-8 z-20 text-white">
              <h3 className="text-2xl font-bold mb-2">เครื่องมือและอุปกรณ์อุตสาหกรรม</h3>
              <p className="opacity-90 max-w-sm">รวบรวมเครื่องมือช่างและวัสดุสิ้นเปลืองสำหรับโรงงานอุตสาหกรรมคุณภาพสูง</p>
            </div>
          </div>

          {/* Small Feature 1 */}
          <div className="md:col-span-4 group cursor-pointer bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all">
            <div className="aspect-square relative">
              <img
                alt="Industrial Warehouse Equipment"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform"
                src="https://images.unsplash.com/photo-1601598704991-eef6114775e0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxpbmR1c3RyaWFsJTIwZXF1aXBtZW50JTIwdG9vbHMlMjB3YXJlaG91c2V8ZW58MXx8fHwxNzc1NDY4ODgwfDA&ixlib=rb-4.1.0&q=80&w=1080"
              />
            </div>
            <div className="p-6">
              <h3 className="text-lg font-bold text-slate-900">อุปกรณ์ความเที่ยงตรงสูง</h3>
              <p className="text-slate-600 text-sm mt-2">ส่วนประกอบเครื่องจักรและอะไหล่ที่มีความแม่นยำและทนทาน</p>
            </div>
          </div>

          {/* Small Feature 2 */}
          <div className="md:col-span-4 group cursor-pointer bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all">
            <div className="aspect-square relative">
              <img
                alt="Safety Equipment - Worker with Hard Hat"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform"
                src="https://images.unsplash.com/photo-1735494032948-14ef288fc9d3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYWZldHklMjBlcXVpcG1lbnQlMjBoZWxtZXQlMjB3b3JrZXJ8ZW58MXx8fHwxNzc1NDY4ODgxfDA&ixlib=rb-4.1.0&q=80&w=1080"
              />
            </div>
            <div className="p-6">
              <h3 className="text-lg font-bold text-slate-900">อุปกรณ์ความปลอดภัย (PPE)</h3>
              <p className="text-slate-600 text-sm mt-2">อุปกรณ์ป้องกันอันตรายส่วนบุคคลที่ได้รับมาตรฐานสากล</p>
            </div>
          </div>

          {/* Medium Feature */}
          <div className="md:col-span-8 group cursor-pointer relative bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all">
            <div className="flex flex-col md:flex-row h-full">
              <div className="p-8 md:w-1/2 flex flex-col justify-center">
                <h3 className="text-2xl font-bold text-slate-900">บริการดูแลและซ่อมบำรุง</h3>
                <p className="text-slate-600 mt-4 leading-relaxed">
                  เรามีทีมงานวิศวกรผู้เชี่ยวชาญพร้อมให้คำปรึกษาและบริการหลังการขาย เพื่อให้การทำงานของคุณไม่สะดุด
                </p>
                <div className="mt-6 text-[#005ea3] font-bold flex items-center gap-2">
                  รายละเอียดบริการ <span>→</span>
                </div>
              </div>
              <div className="md:w-1/2 h-64 md:h-auto">
                <img
                  alt="Engineer Technician at Construction Site"
                  className="w-full h-full object-cover"
                  src="https://images.unsplash.com/photo-1759922378219-1d31edb644f4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbmdpbmVlciUyMHRlY2huaWNpYW4lMjB3b3JraW5nJTIwY29uc3RydWN0aW9ufGVufDF8fHx8MTc3NTQ2ODg4MXww&ixlib=rb-4.1.0&q=80&w=1080"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
