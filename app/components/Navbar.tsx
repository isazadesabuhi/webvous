"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import logo from "@/public/logo.svg";


export default function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-100 bg-white backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center gap-6 px-6">
        <a href="/" className="flex items-center gap-3">
          <div className="flex size-10 items-center justify-center rounded-xl bg-blue-600 text-white shadow-sm">
            {/* <span className="material-symbols-outlined text-xl">grid_view</span> */}
            <Image src={logo} alt="WebCarré Logo" width={40} height={40} />
          </div>
          <span className="text-xl font-extrabold tracking-tight text-slate-900">
            WEB<span className="text-blue-600">CARRÉ</span>
          </span>
        </a>
        <nav className="hidden flex-1 items-center justify-center gap-10 text-sm font-semibold text-slate-600 md:flex">
          <a className="transition-colors hover:text-blue-600" href="/services">
            Services
          </a>
          <a className="transition-colors hover:text-blue-600" href="/portfolio">
            Portfolio
          </a>
          <a className="transition-colors hover:text-blue-600" href="/contact">
            Contact
          </a>
        </nav>
        <div className="ml-auto flex items-center gap-3 md:ml-0">
          <a
            className="hidden rounded-2xl bg-blue-600 px-6 py-2.5 text-sm font-bold text-white shadow-lg shadow-blue-600/30 transition-all hover:bg-blue-500 md:inline-flex"
            href="/contact"
          >
            Contactez-nous
          </a>
          <button
            aria-controls="primary-menu"
            aria-expanded={open}
            aria-label="Ouvrir le menu"
            className="flex size-10 items-center justify-center rounded-xl border border-slate-200 text-slate-700 transition-colors hover:bg-slate-50 md:hidden"
            onClick={() => setOpen((value) => !value)}
            type="button"
          >
            <span className="material-symbols-outlined text-xl">menu</span>
          </button>
        </div>
      </div>
      <div
        className={`fixed inset-x-0 top-20 z-40 h-[calc(100dvh-5rem)] bg-white/98 px-6 py-10 text-2xl font-semibold text-slate-700 shadow-2xl transition-[transform,opacity] duration-300 ease-out md:hidden ${
          open
            ? "translate-x-0 opacity-100"
            : "pointer-events-none translate-x-full opacity-0"
        }`}
        id="primary-menu"
      >
        <div className="mx-auto flex h-full max-w-7xl flex-col items-center justify-center gap-10 text-center">
          <a className="transition-colors hover:text-blue-600" href="/services">
            Services
          </a>
          <a className="transition-colors hover:text-blue-600" href="/portfolio">
            Portfolio
          </a>
          <a className="transition-colors hover:text-blue-600" href="/contact">
            Contact
          </a>
          <div className="mt-auto">
            <a
              className="inline-flex w-full items-center justify-center rounded-2xl bg-blue-600 px-6 py-4 text-lg font-bold text-white shadow-lg shadow-blue-600/30 transition-all hover:bg-blue-500"
              href="/contact"
            >
              Contactez-nous
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
