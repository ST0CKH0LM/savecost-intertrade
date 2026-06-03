export function SaveCostLogo({ className = "h-16", dark = false }: { className?: string; dark?: boolean }) {
  return (
    <span className="inline-flex items-center" aria-label="SaveCost Logo">
      <img
        alt="SaveCost Logo"
        className={`${className} w-auto object-contain`}
        src="/images/savecost-logo-original.jpg"
      />
      {dark ? <span className="sr-only">SaveCost Intertrade</span> : null}
    </span>
  );
}
