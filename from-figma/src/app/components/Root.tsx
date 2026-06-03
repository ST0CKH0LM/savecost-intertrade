import { Outlet } from "react-router";
import { Header } from "./Header";
import { Footer } from "./Footer";

export function Root() {
  return (
    <div className="min-h-screen bg-[#f6f9ff] text-slate-900 antialiased font-['Inter']">
      <Header />
      <main className="pt-20">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
