import Link from "next/link";

const navLinks = [
  { label: "Nos Services", href: "#services" },
  { label: "Nos Réalisations", href: "#realisations" },
  { label: "Pourquoi Nous Choisir", href: "#pourquoi" },
  { label: "Contact", href: "#contact" },
];

const solutions = [
  {
    title: "Création de Site Web",
    text: "Sites modernes et optimisés pour votre entreprise.",
    icon: (
      <svg viewBox="0 0 48 48" className="h-12 w-12 text-blue-600">
        <rect x="6" y="10" width="36" height="24" rx="4" fill="currentColor" opacity="0.15" />
        <rect x="10" y="14" width="28" height="4" rx="2" fill="currentColor" />
        <rect x="10" y="22" width="16" height="8" rx="2" fill="currentColor" opacity="0.6" />
        <rect x="28" y="22" width="10" height="8" rx="2" fill="currentColor" opacity="0.35" />
      </svg>
    ),
  },
  {
    title: "Référencement Local",
    text: "Soyez visible sur Google et Google Maps.",
    icon: (
      <svg viewBox="0 0 48 48" className="h-12 w-12 text-blue-600">
        <path
          d="M24 6c-7.2 0-13 5.8-13 13 0 9.4 13 23 13 23s13-13.6 13-23c0-7.2-5.8-13-13-13z"
          fill="currentColor"
          opacity="0.2"
        />
        <circle cx="24" cy="19" r="6" fill="currentColor" />
      </svg>
    ),
  },
  {
    title: "Marketing Digital",
    text: "Attirez plus de clients avec des campagnes efficaces.",
    icon: (
      <svg viewBox="0 0 48 48" className="h-12 w-12 text-blue-600">
        <path
          d="M10 28l16-10v20L10 28z"
          fill="currentColor"
          opacity="0.18"
        />
        <path d="M26 18l12-6v24l-12-6V18z" fill="currentColor" />
        <path d="M10 32h8v4h-8z" fill="currentColor" opacity="0.35" />
      </svg>
    ),
  },
];

const demoWorks = [
  {
    title: "Boulangerie Saint-Honoré",
    category: "Site vitrine + SEO local",
    result: "+68% appels en 3 mois",
    image: (
      <svg viewBox="0 0 320 180" className="h-full w-full">
        <defs>
          <linearGradient id="bg-boulangerie" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#fde68a" />
            <stop offset="100%" stopColor="#f59e0b" />
          </linearGradient>
        </defs>
        <rect width="320" height="180" rx="24" fill="url(#bg-boulangerie)" />
        <rect x="28" y="36" width="264" height="108" rx="20" fill="#fff7ed" opacity="0.9" />
        <circle cx="92" cy="90" r="28" fill="#f59e0b" opacity="0.8" />
        <rect x="140" y="72" width="120" height="12" rx="6" fill="#92400e" opacity="0.6" />
        <rect x="140" y="94" width="84" height="12" rx="6" fill="#92400e" opacity="0.4" />
      </svg>
    ),
  },
  {
    title: "Garage Nova Auto",
    category: "Refonte + Google Maps",
    result: "+2.4x demandes de devis",
    image: (
      <svg viewBox="0 0 320 180" className="h-full w-full">
        <defs>
          <linearGradient id="bg-garage" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#bae6fd" />
            <stop offset="100%" stopColor="#38bdf8" />
          </linearGradient>
        </defs>
        <rect width="320" height="180" rx="24" fill="url(#bg-garage)" />
        <rect x="26" y="46" width="268" height="88" rx="18" fill="#f0f9ff" opacity="0.9" />
        <rect x="56" y="102" width="208" height="12" rx="6" fill="#0284c7" opacity="0.5" />
        <circle cx="108" cy="112" r="16" fill="#0ea5e9" />
        <circle cx="212" cy="112" r="16" fill="#0ea5e9" />
      </svg>
    ),
  },
  {
    title: "Clinique Dentaire Rivoli",
    category: "Landing + Ads locales",
    result: "+41% rendez-vous",
    image: (
      <svg viewBox="0 0 320 180" className="h-full w-full">
        <defs>
          <linearGradient id="bg-clinic" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#bbf7d0" />
            <stop offset="100%" stopColor="#22c55e" />
          </linearGradient>
        </defs>
        <rect width="320" height="180" rx="24" fill="url(#bg-clinic)" />
        <rect x="34" y="40" width="252" height="100" rx="18" fill="#ecfdf5" opacity="0.9" />
        <rect x="70" y="72" width="180" height="16" rx="8" fill="#16a34a" opacity="0.55" />
        <rect x="104" y="98" width="112" height="12" rx="6" fill="#16a34a" opacity="0.35" />
      </svg>
    ),
  },
  {
    title: "Studio Yoga Nami",
    category: "Site + réservation en ligne",
    result: "+120 inscriptions/mois",
    image: (
      <svg viewBox="0 0 320 180" className="h-full w-full">
        <defs>
          <linearGradient id="bg-yoga" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#ddd6fe" />
            <stop offset="100%" stopColor="#8b5cf6" />
          </linearGradient>
        </defs>
        <rect width="320" height="180" rx="24" fill="url(#bg-yoga)" />
        <rect x="34" y="36" width="252" height="108" rx="18" fill="#f5f3ff" opacity="0.9" />
        <circle cx="160" cy="92" r="26" fill="#7c3aed" opacity="0.6" />
        <rect x="92" y="118" width="136" height="10" rx="5" fill="#6d28d9" opacity="0.5" />
      </svg>
    ),
  },
];

const reasons = [
  { label: "Approche personnalisée" },
  { label: "Résultats mesurables" },
  { label: "Accompagnement simple" },
  { label: "Transparence totale" },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,_#eff6ff_0%,_#f8fafc_45%,_#ffffff_100%)] text-slate-800">
      <header className="sticky top-0 z-10 border-b border-slate-200/70 bg-white/80 backdrop-blur">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-5">
          <Link href="/" className="text-lg font-semibold tracking-tight">
            Web<span className="text-blue-600">vous</span>
          </Link>
          <nav className="hidden items-center gap-8 text-sm font-medium text-slate-600 md:flex">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="hover:text-slate-900">
                {link.label}
              </a>
            ))}
          </nav>
          <button className="rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm transition hover:border-slate-300 hover:text-slate-900 md:hidden">
            Menu
          </button>
        </div>
      </header>

      <main>
        <section className="mx-auto w-full max-w-6xl px-6 pb-16 pt-20 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-500/80">
            Agence Web Locale
          </p>
          <h1 className="mx-auto mt-6 max-w-4xl text-4xl font-semibold leading-tight text-slate-900 sm:text-5xl lg:text-6xl">
            Nous aidons les commerces locaux à obtenir{" "}
            <span className="font-[var(--font-display)] text-blue-600">
              plus de clients
            </span>{" "}
            grâce au web.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base text-slate-600 sm:text-lg">
            Création de site web • Référencement local • Marketing digital
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <button className="rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-700">
              Réserver un appel gratuit
            </button>
            <button className="rounded-full border border-blue-200 bg-white px-6 py-3 text-sm font-semibold text-blue-700 shadow-sm transition hover:border-blue-300 hover:text-blue-800">
              Demander un devis
            </button>
          </div>
        </section>

        <section className="mx-auto w-full max-w-6xl px-6 pb-12">
          <div className="grid gap-6 rounded-3xl border border-slate-200 bg-white/80 p-8 text-center shadow-lg shadow-slate-200/40 md:grid-cols-3">
            <div className="space-y-3">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
                <svg viewBox="0 0 24 24" className="h-6 w-6">
                  <path
                    d="M12 2C7.6 2 4 5.6 4 10c0 5.6 8 12 8 12s8-6.4 8-12c0-4.4-3.6-8-8-8zm0 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"
                    fill="currentColor"
                  />
                </svg>
              </div>
              <p className="text-sm font-semibold text-slate-800">
                Votre commerce est invisible sur Google ?
              </p>
            </div>
            <div className="space-y-3">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
                <svg viewBox="0 0 24 24" className="h-6 w-6">
                  <path
                    d="M4 5h16a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1zm2 3h8v2H6V8zm0 4h6v2H6v-2z"
                    fill="currentColor"
                  />
                  <circle cx="18" cy="15" r="2" fill="currentColor" opacity="0.5" />
                </svg>
              </div>
              <p className="text-sm font-semibold text-slate-800">
                Votre site internet est dépassé ou absent ?
              </p>
            </div>
            <div className="space-y-3">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
                <svg viewBox="0 0 24 24" className="h-6 w-6">
                  <path
                    d="M12 3 2 20h20L12 3zm0 6a1 1 0 0 1 1 1v4a1 1 0 0 1-2 0v-4a1 1 0 0 1 1-1zm0 8a1.2 1.2 0 1 1 0-2.4 1.2 1.2 0 0 1 0 2.4z"
                    fill="currentColor"
                  />
                </svg>
              </div>
              <p className="text-sm font-semibold text-slate-800">
                Vous perdez des clients face à la concurrence ?
              </p>
            </div>
          </div>
          <p className="mt-6 text-center text-sm font-semibold text-slate-500">
            Nous avons la solution.
          </p>
        </section>

        <section id="services" className="mx-auto w-full max-w-6xl px-6 py-16">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-500/80">
              Nos Solutions
            </p>
            <h2 className="mt-4 text-3xl font-semibold text-slate-900">
              Des services pensés pour la visibilité locale
            </h2>
          </div>
          <div className="mt-10 grid gap-8 md:grid-cols-3">
            {solutions.map((solution) => (
              <div
                key={solution.title}
                className="rounded-3xl border border-slate-200 bg-white p-6 text-center shadow-lg shadow-slate-100 transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50">
                  {solution.icon}
                </div>
                <h3 className="mt-6 text-lg font-semibold text-slate-900">
                  {solution.title}
                </h3>
                <p className="mt-3 text-sm text-slate-600">{solution.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section
          id="realisations"
          className="mx-auto w-full max-w-6xl px-6 pb-16"
        >
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-500/80">
              Nos Réalisations
            </p>
            <h2 className="mt-4 text-3xl font-semibold text-slate-900">
              Des projets concrets qui font grandir les commerces locaux
            </h2>
          </div>
          <div className="relative mt-10 overflow-hidden">
            <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white via-white/80 to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white via-white/80 to-transparent" />
            <div className="flex w-max gap-6 animate-[marquee_22s_linear_infinite]">
              {[...demoWorks, ...demoWorks].map((work, index) => (
                <div
                  key={`${work.title}-${index}`}
                  className="w-72 rounded-3xl border border-slate-200 bg-white p-6 shadow-lg shadow-slate-100"
                >
                  <div className="h-40 w-full overflow-hidden rounded-2xl border border-slate-100 bg-slate-50">
                    {work.image}
                  </div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-500/80">
                    {work.category}
                  </p>
                  <h3 className="mt-4 text-lg font-semibold text-slate-900">
                    {work.title}
                  </h3>
                  <p className="mt-3 text-sm text-slate-600">{work.result}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="pourquoi" className="bg-slate-50">
          <div className="mx-auto w-full max-w-6xl px-6 py-16 text-center">
            <h2 className="text-3xl font-semibold text-slate-900">
              Pourquoi nous choisir ?
            </h2>
            <div className="mt-10 grid gap-6 md:grid-cols-4">
              {reasons.map((reason) => (
                <div
                  key={reason.label}
                  className="rounded-3xl border border-slate-200 bg-white px-4 py-6 shadow-sm"
                >
                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                    <svg viewBox="0 0 24 24" className="h-6 w-6">
                      <path
                        d="M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18zm-1 5h2v5h-2V8zm0 7h2v2h-2v-2z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                  <p className="text-sm font-semibold text-slate-700">
                    {reason.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto w-full max-w-5xl px-6 py-16 text-center">
          <div className="rounded-3xl border border-blue-100 bg-blue-50/80 px-6 py-12 shadow-lg shadow-blue-100/40">
            <h3 className="text-2xl font-semibold text-slate-900">
              Prêt à développer votre visibilité locale ?
            </h3>
            <p className="mt-3 text-sm text-slate-600">
              Planifions un appel rapide pour analyser votre potentiel.
            </p>
            <button className="mt-6 rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-700">
              Planifier un appel gratuit
            </button>
          </div>
        </section>
      </main>

      <footer
        id="contact"
        className="border-t border-slate-200 bg-white"
      >
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-6 py-10 text-sm text-slate-600 md:flex-row md:items-center md:justify-between">
          <div className="space-y-2">
            <p className="text-base font-semibold text-slate-800">Contactez-nous</p>
            <div className="flex flex-wrap gap-4 text-sm">
              <span>contact@webvous.fr</span>
              <span>01 23 45 67 89</span>
            </div>
          </div>
          <div className="flex gap-6 text-sm font-medium text-slate-500">
            <a href="#" className="hover:text-slate-800">
              Mentions légales
            </a>
            <a href="#" className="hover:text-slate-800">
              Politique de confidentialité
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
