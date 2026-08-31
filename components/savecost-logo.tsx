import { publicPath } from "@/lib/site-paths";

export function SaveCostLogo({ className = "h-16", dark = false }: { className?: string; dark?: boolean }) {
  return (
    <span className="inline-flex items-center gap-2.5" aria-label="SaveCost Intertrade">
      <img
        alt=""
        aria-hidden="true"
        className={`${className} w-auto object-contain`}
        src={publicPath("/images/savecost-icon.png")}
      />
      <span className="flex flex-col leading-none">
        <span className={`text-xl font-black tracking-tight sm:text-2xl ${dark ? "text-white" : "text-slate-900"}`}>
          Save<span className={dark ? "text-[#2da3e6]" : "text-[#005ea3]"}>Cost</span>
        </span>
        <span className={`text-[10px] font-semibold uppercase tracking-[0.25em] ${dark ? "text-slate-400" : "text-slate-500"}`}>
          Intertrade
        </span>
      </span>
    </span>
  );
}
