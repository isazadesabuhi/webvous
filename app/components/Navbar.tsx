export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-100 bg-white backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center gap-6 px-6">
        <a href="/" className="flex items-center gap-3">
          <div className="flex size-10 items-center justify-center rounded-xl bg-blue-600 text-white shadow-sm">
            <span className="material-symbols-outlined text-xl">grid_view</span>
          </div>
          <span className="text-xl font-extrabold tracking-tight text-slate-900">
            WEB<span className="text-blue-600">CARRÉ</span>
          </span>
        </a>
        <nav className="flex flex-1 items-center justify-center gap-10 text-sm font-semibold text-slate-600">
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
        <a
          className="rounded-2xl bg-blue-600 px-6 py-2.5 text-sm font-bold text-white shadow-lg shadow-blue-600/30 transition-all hover:bg-blue-500"
          href="/contact"
        >
          Contactez-nous
        </a>
      </div>
    </header>
  );
}
