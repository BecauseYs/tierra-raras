import { useEffect, useState } from "react";
import { DataNavbar } from "../../data/navigation-items";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  // (opcional) bloquear scroll cuando el menú está abierto
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header className="sticky top-0 z-50 bg-white backdrop-blur ">
      <div className="flex items-center justify-between mx-auto max-w-6xl px-6 py-2 w-full">
        {/* Logo */}
        <a href="#" className="font-semibold tracking-tight text-black uppercase z-99" onClick={close}>
          <img
            src="/image/logo/logo-white.png"
            alt="Tierra raras Logo"
            className="w-full h-20 lg:h-28"
          />
          {/* Tierra Raras */}
        </a>

        {/* Menú desktop */}
        <nav className="hidden gap-6 md:flex  items-center">
          {DataNavbar.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-black/90 hover:text-black/70 font-semibold transition uppercase"
            >
              {l.label}
            </a>
          ))}
          {/* CTA  */}
          <a
            href="#contact"
            className="bg-[#f08a00] px-4 w-full py-2 text-sm rounded-md border border-[#f08a00] text-white hover:bg-[#f08a00]/80 hover:border-white hover:text-gray-50 text-center uppercase font-semibold transition"
            onClick={close}
          >
            Obtener presupuesto
          </a>
        </nav>

        {/* Right side: CTA + Hamburguesa */}
        <div className="flex items-center gap-3">
          {/* Botón mobile */}
          <button
            type="button"
            className="md:hidden inline-flex h-10 w-10 items-center justify-center text-black/90 z-99 cursor-pointer"
            aria-label="Abrir menú"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {/* icon  / X */}
            {open ? (
              <svg viewBox="0 0 24 24" className="h-10 w-10 cursor-pointer z-50" fill="none">
                <path
                  d="M6 6l12 12M18 6 6 18"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" className="h-10 w-10 cursor-pointer" fill="none">
                <path
                  d="M4 7h16M4 12h16M4 17h16"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu panel */}
      {/* Overlay */}
      {/* <div
        className={[
          "md:hidden fixed inset-0 z-40 bg-black/60 transition-opacity",
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none",
        ].join(" ")}
        onClick={close}
      /> */}

      {/* Panel */}
      <div
        className={[
          "md:hidden fixed top-[95px] h-[calc(100vh-72px)] left-0 right-0 z-50",
          "bg-[#f08a00] border-t border-white/10",
          "transition-all duration-300",
          open ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-3 pointer-events-none",
        ].join(" ")}
      >
        <nav className="mx-auto max-w-6xl px-6 py-6">
          <div className="flex flex-col gap-4 gap-y-8">
            {DataNavbar.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={close}
                className="text-white/90 hover:text-white text-md font-semibold uppercase tracking-wide"
              >
                {l.label}
              </a>
            ))}

            <a
              href="#contacto"
              onClick={close}
              className="mt-3 inline-flex items-center justify-center bg-white text-black py-3 text-xs font-extrabold uppercase tracking-[0.2em] hover:opacity-90 transition"
            >
              Cotizar
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;