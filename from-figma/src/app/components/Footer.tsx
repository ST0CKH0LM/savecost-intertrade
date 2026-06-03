import { Link } from 'react-router';
import { Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="w-full mt-auto border-t bg-white border-slate-200">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 px-12 py-16 w-full max-w-screen-2xl mx-auto">
        {/* Column 1: Brand Identity */}
        <div className="space-y-6">
          <div className="flex items-center gap-2">
            <img
              alt="SAVECOST INTERTRADE"
              className="h-12 w-auto"
              src="https://lh3.googleusercontent.com/aida/ADBb0ui3VhdaqAL7AJ2v1zXyrx9zh0eEDYoztCXd1n6_FqrStD9Hd5pw7bPtfjiMcFgYEjQmRRA1Q2jdUflEGtH3D0OGQGD7T_ENip79YaFNaLIWWtVfk4qVsiVfJUjidRbb5jsLQPa4roDTqDPY3kJeAlX5aFJqGIUDwbDWgky5pPVTHVSARGzzuuoC4V16MZU4hiGed3YMIhQsmgK5N0dAyNEgdap7ppaqEFfNWTUUFXK3-La9md_EOh4HI4y5yLWhiNvXrSrXBqQl4w"
            />
          </div>
          <p className="text-sm leading-relaxed text-slate-600">
            ผู้นำเข้าและจัดจำหน่ายอุปกรณ์อุตสาหกรรมครบวงจร มุ่งเน้นคุณภาพและการบริการที่เหนือระดับเพื่อความสำเร็จของธุรกิจคุณ
          </p>
        </div>

        {/* Column 2: Navigation Links */}
        <div>
          <h4 className="font-bold mb-6">เมนู</h4>
          <ul className="space-y-4 text-sm">
            <li>
              <Link to="/" className="hover:text-blue-400 hover:translate-x-1 transition-transform duration-200 block">
                หน้าหลัก
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-blue-400 hover:translate-x-1 transition-transform duration-200 block">
                เกี่ยวกับเรา
              </Link>
            </li>
            <li>
              <Link to="/products" className="hover:text-blue-400 hover:translate-x-1 transition-transform duration-200 block">
                สินค้า
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-blue-400 hover:translate-x-1 transition-transform duration-200 block">
                ติดต่อเรา
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 3: Contact Information */}
        <div>
          <h4 className="font-bold mb-6">ข้อมูลการติดต่อ</h4>
          <ul className="space-y-4 text-sm">
            <li className="flex items-center gap-3 group">
              <Mail className="text-[#005ea3]" size={18} />
              <span className="group-hover:text-[#005ea3] transition-colors">info@savecost.co.th</span>
            </li>
            <li className="flex items-center gap-3 group">
              <Phone className="text-[#005ea3]" size={18} />
              <span className="group-hover:text-[#005ea3] transition-colors">+66 (0) 2-002-3636</span>
            </li>
            <li className="flex items-start gap-3 group">
              <MapPin className="text-[#005ea3] flex-shrink-0" size={18} />
              <span className="leading-relaxed group-hover:text-[#005ea3] transition-colors">
                99/42 Moo 4, Bueng Yitho, Thanyaburi,<br/>
                Pathum Thani 12130, Thailand
              </span>
            </li>
          </ul>
        </div>

        {/* Column 4: Newsletter */}
        <div className="space-y-6">
          <h4 className="font-bold mb-6">จดหมายข่าว</h4>
          <p className="text-sm">รับข่าวสารสินค้าใหม่และโปรโมชั่นพิเศษก่อนใคร</p>
          <div className="flex flex-col gap-2">
            <input
              className="w-full rounded-lg px-4 py-2 text-sm placeholder-slate-400 focus:ring-2 focus:ring-[#005ea3] outline-none bg-slate-50 text-slate-900 border border-slate-200"
              placeholder="อีเมลของคุณ"
              type="email"
            />
            <button className="text-white py-2 rounded-lg text-sm font-bold hover:bg-blue-700 transition-colors bg-[#005ea3]">
              สมัครรับข่าวสาร
            </button>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="py-8 px-12 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-4 w-full max-w-screen-2xl mx-auto text-slate-600">
        <p className="text-sm">© 2024 Savecost Intertrade Co., Ltd. All Rights Reserved.</p>
        <div className="flex gap-8">
          <a className="hover:text-[#005ea3] text-sm transition-colors" href="#">Privacy Policy</a>
          <a className="hover:text-[#005ea3] text-sm transition-colors" href="#">Terms of Service</a>
          <a className="hover:text-[#005ea3] text-sm transition-colors" href="#">Cookie Policy</a>
        </div>
      </div>
    </footer>
  );
}
