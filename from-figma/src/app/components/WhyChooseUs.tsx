import { Shield, Headset, Handshake } from 'lucide-react';

export function WhyChooseUs() {
  return (
    <section className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-20">
          <span className="text-sm text-[#005ea3] tracking-[0.2em] font-bold uppercase">ทำไมต้องเลือกเรา</span>
          <h2 className="text-4xl font-extrabold mt-2 text-slate-900">จุดเด่นของ เซฟคอส อินเตอร์เทรด</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="text-center p-8 rounded-xl bg-slate-50 hover:bg-slate-100 transition-colors">
            <div className="w-16 h-16 bg-blue-100 text-[#005ea3] rounded-xl flex items-center justify-center mx-auto mb-6">
              <Shield className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold mb-4">คุณภาพที่เชื่อถือได้</h3>
            <p className="text-slate-600 leading-relaxed">
              เราคัดสรรเฉพาะสินค้าจากแบรนด์ชั้นนำระดับโลกที่ได้รับความไว้วางใจในอุตสาหกรรม
            </p>
          </div>

          <div className="text-center p-8 rounded-xl bg-slate-50 hover:bg-slate-100 transition-colors">
            <div className="w-16 h-16 bg-blue-100 text-[#005ea3] rounded-xl flex items-center justify-center mx-auto mb-6">
              <Headset className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold mb-4">บริการระดับมืออาชีพ</h3>
            <p className="text-slate-600 leading-relaxed">
              ทีมงานผู้เชี่ยวชาญพร้อมให้คำปรึกษาและแก้ไขปัญหาทางเทคนิคด้วยความรวดเร็วและเป็นกันเอง
            </p>
          </div>

          <div className="text-center p-8 rounded-xl bg-slate-50 hover:bg-slate-100 transition-colors">
            <div className="w-16 h-16 bg-blue-100 text-[#005ea3] rounded-xl flex items-center justify-center mx-auto mb-6">
              <Handshake className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold mb-4">พันธมิตรที่จริงใจ</h3>
            <p className="text-slate-600 leading-relaxed">
              เรามุ่งเน้นการสร้างความสัมพันธ์ที่ยั่งยืนกับลูกค้า โดยการนำเสนอโซลูชันที่คุ้มค่าและดีที่สุด
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
