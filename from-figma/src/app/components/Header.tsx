import { Link, useLocation } from 'react-router';
import { Menu } from 'lucide-react';

export function Header() {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header className="fixed top-0 w-full z-50 bg-white/70 backdrop-blur-md border-b border-slate-200/50 shadow-sm">
      <nav className="grid grid-cols-3 items-center px-8 py-4 max-w-7xl mx-auto">
        {/* Brand Identity (Left) */}
        <div className="flex justify-start">
          <Link to="/" className="flex items-center">
            <img
              alt="SaveCost Logo"
              className="h-10 w-auto object-contain"
              src="https://lh3.googleusercontent.com/aida/ADBb0ui3VhdaqAL7AJ2v1zXyrx9zh0eEDYoztCXd1n6_FqrStD9Hd5pw7bPtfjiMcFgYEjQmRRA1Q2jdUflEGtH3D0OGQGD7T_ENip79YaFNaLIWWtVfk4qVsiVfJUjidRbb5jsLQPa4roDTqDPY3kJeAlX5aFJqGIUDwbDWgky5pPVTHVSARGzzuuoC4V16MZU4hiGed3YMIhQsmgK5N0dAyNEgdap7ppaqEFfNWTUUFXK3-La9md_EOh4HI4y5yLWhiNvXrSrXBqQl4w"
            />
          </Link>
        </div>

        {/* Desktop Navigation Links (Center) */}
        <div className="hidden md:flex justify-center items-center gap-8">
          <Link
            to="/"
            className={`font-medium text-sm tracking-tight transition-all duration-300 ${
              isActive("/")
                ? "text-blue-700 border-b-2 border-blue-700 pb-1"
                : "text-slate-600 hover:text-blue-600 hover:bg-blue-50"
            }`}
          >
            หน้าหลัก
          </Link>
          <Link
            to="/about"
            className={`font-medium text-sm tracking-tight transition-all duration-300 ${
              isActive("/about")
                ? "text-blue-700 border-b-2 border-blue-700 pb-1"
                : "text-slate-600 hover:text-blue-600 hover:bg-blue-50"
            }`}
          >
            เกี่ยวกับเรา
          </Link>
          <Link
            to="/products"
            className={`font-medium text-sm tracking-tight transition-all duration-300 ${
              isActive("/products")
                ? "text-blue-700 border-b-2 border-blue-700 pb-1"
                : "text-slate-600 hover:text-blue-600 hover:bg-blue-50"
            }`}
          >
            สินค้า
          </Link>
          <Link
            to="/contact"
            className={`font-medium text-sm tracking-tight transition-all duration-300 ${
              isActive("/contact")
                ? "text-blue-700 border-b-2 border-blue-700 pb-1"
                : "text-slate-600 hover:text-blue-600 hover:bg-blue-50"
            }`}
          >
            ติดต่อเรา
          </Link>
        </div>

        {/* Trailing Primary Action (Right) */}
        <div className="flex justify-end items-center gap-4">
          <button className="bg-[#005ea3] hover:bg-[#0077cc] text-white font-medium text-sm tracking-tight px-5 py-2.5 rounded-xl shadow-md transition-all duration-300 active:opacity-80 active:scale-95">
            ขอใบเสนอราคา
          </button>

          {/* Mobile Menu Trigger */}
          <button className="md:hidden p-2 text-slate-600">
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </nav>
    </header>
  );
}
