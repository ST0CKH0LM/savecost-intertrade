import { Mail, Phone, MapPin, MapPinned } from "lucide-react";

export function ContactPage() {
  return (
    <div className="pt-12 pb-20 px-8 max-w-7xl mx-auto">
      {/* Header Content */}
      <div className="mb-20">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter mb-6">ติดต่อเรา</h1>
        <p className="text-lg text-slate-600 max-w-2xl leading-relaxed">
          ติดต่อทีมผู้เชี่ยวชาญด้านวิศวกรรมของเราเพื่อรับโซลูชันอุตสาหกรรมที่เชื่อถือได้
          เรายินดีให้บริการเพื่อสนับสนุนการเติบโตของธุรกิจคุณ
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
        {/* Contact Form Section */}
        <div className="lg:col-span-7 bg-white p-8 md:p-12 rounded-xl shadow-sm border border-slate-200">
          <form className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="block text-xs font-bold uppercase tracking-widest text-slate-600">
                  ชื่อ-นามสกุล
                </label>
                <input
                  className="w-full bg-slate-50 border-none rounded-md p-4 focus:ring-2 focus:ring-[#005ea3] transition-all"
                  placeholder="สมชาย ใจดี"
                  type="text"
                />
              </div>
              <div className="space-y-2">
                <label className="block text-xs font-bold uppercase tracking-widest text-slate-600">
                  อีเมล
                </label>
                <input
                  className="w-full bg-slate-50 border-none rounded-md p-4 focus:ring-2 focus:ring-[#005ea3] transition-all"
                  placeholder="somchai@company.com"
                  type="email"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="block text-xs font-bold uppercase tracking-widest text-slate-600">
                หัวข้อ
              </label>
              <input
                className="w-full bg-slate-50 border-none rounded-md p-4 focus:ring-2 focus:ring-[#005ea3] transition-all"
                placeholder="สอบถามเกี่ยวกับอุปกรณ์อุตสาหกรรม"
                type="text"
              />
            </div>

            <div className="space-y-2">
              <label className="block text-xs font-bold uppercase tracking-widest text-slate-600">
                ข้อความ
              </label>
              <textarea
                className="w-full bg-slate-50 border-none rounded-md p-4 focus:ring-2 focus:ring-[#005ea3] transition-all"
                placeholder="บอกเราว่าเราสามารถช่วยเหลือโปรเจคของคุณอย่างไร..."
                rows={6}
              ></textarea>
            </div>

            <button
              className="w-full md:w-auto px-10 py-4 bg-gradient-to-br from-[#005ea3] to-[#0077cc] text-white font-bold rounded-xl shadow-lg hover:scale-[0.98] transition-transform"
              type="submit"
            >
              ส่งข้อความ
            </button>
          </form>
        </div>

        {/* Info Column */}
        <div className="lg:col-span-5 space-y-12">
          {/* Contact Details */}
          <div className="space-y-10">
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center">
                <MapPin className="text-[#005ea3]" size={24} />
              </div>
              <div>
                <h4 className="text-sm font-bold uppercase tracking-widest text-slate-600 mb-2">
                  ที่ตั้งสำนักงาน
                </h4>
                <p className="font-medium leading-relaxed">
                  99/42 หมู่ 4 บึงยี่โถ ธัญบุรี
                  <br />
                  ปทุมธานี 12130 ประเทศไทย
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center">
                <Phone className="text-[#005ea3]" size={24} />
              </div>
              <div>
                <h4 className="text-sm font-bold uppercase tracking-widest text-slate-600 mb-2">
                  โทรศัพท์
                </h4>
                <p className="font-medium">+66 (0) 2-002-3636</p>
                <p className="text-slate-500 text-sm mt-1">จันทร์ - ศุกร์, 08:30 - 17:30 น.</p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center">
                <Mail className="text-[#005ea3]" size={24} />
              </div>
              <div>
                <h4 className="text-sm font-bold uppercase tracking-widest text-slate-600 mb-2">
                  อีเมล
                </h4>
                <p className="font-medium">info@savecost.co.th</p>
                <p className="text-slate-500 text-sm mt-1">sales@savecost.co.th</p>
              </div>
            </div>
          </div>

          {/* Map / Visual Anchor */}
          <div className="relative group overflow-hidden rounded-xl shadow-sm border border-slate-200">
            <div className="aspect-video bg-slate-100 relative overflow-hidden flex items-center justify-center">
              <MapPinned className="text-slate-300" size={64} />
              <div className="absolute inset-0 bg-[#005ea3]/5 pointer-events-none"></div>
              <a
                className="absolute bottom-4 left-4 bg-white px-4 py-2 rounded-lg shadow-md text-xs font-bold text-[#005ea3] tracking-tight hover:bg-[#005ea3] hover:text-white transition-colors"
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                VIEW ON GOOGLE MAPS
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
