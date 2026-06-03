export function CTASection() {
  return (
    <section className="py-24 px-8">
      <div className="max-w-7xl mx-auto rounded-3xl bg-gradient-to-r from-[#005ea3] to-[#0077cc] p-16 text-center text-white overflow-hidden relative shadow-2xl">
        <div className="relative z-10">
          <h2 className="text-4xl font-extrabold mb-6">ยกระดับประสิทธิภาพอุตสาหกรรมของคุณไปกับเรา</h2>
          <p className="text-xl opacity-90 mb-10 max-w-2xl mx-auto">
            ติดต่อสอบถามข้อมูลเพิ่มเติม หรือขอใบเสนอราคาได้ทันที ทีมงานของเราพร้อมให้บริการคุณอย่างเต็มความสามารถ
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <button className="bg-white text-[#005ea3] px-10 py-4 rounded-xl font-bold text-lg hover:bg-blue-50 transition-all">
              ติดต่อเราตอนนี้
            </button>
            <button className="border-2 border-white/30 text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-all">
              ดาวน์โหลดแคตตาล็อก
            </button>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -mr-48 -mt-48 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-black/5 rounded-full -ml-48 -mb-48 blur-3xl"></div>
      </div>
    </section>
  );
}
