import Link from "next/link";

const navLinks = [
  { label: "Réalisations", href: "#realisations", active: true },
  { label: "Expertises", href: "/services" },
  { label: "Méthodologie", href: "/services#process" },
  { label: "Agence", href: "#agency" },
];

const filters = ["Tous", "Web", "SEO", "Marketing", "E-commerce"];

const projects = [
  {
    title: "Nexus Platform",
    category: "Web Design • SaaS",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA8JMJ0mROnr-RNIdL0pwxtJVvG2YvuJlyO7dqekrLt7kL6iGXAHKasTCM8XSVNRpLA_3oQY96y-JbC_mcMkZpFpoq8GqsNmwNes0sMJPU1cPbsEVXFEowicPEqMUnKTxxHOyAfFIUO2ms5mpUmPGv7RdgwOWrNfZj-0lKuUj3o599XOriXQvgMSbOkGHoNuWG3ddh2NLo8vtGLOQnvnKm2kg5HZZlO_iW6Pr1M8kWJLTYckfuddk1LLoVlHnr1TM9WI-hk1txPnWg",
    cta: "DÉCOUVRIR LE PROJET",
    size: "tall",
  },
  {
    title: "Vogue Boutique",
    category: "E-commerce • Mode",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDTWT22oEi2Hc4Z3JpS7Sjeus5uAMd_dINmqhSzRdJV_djhEtd1a4zFpXXjaRFckra5ccWoV63g4m_n_lftwFnM4C2aXx1hgKM84-vUeTewCZxhJ-LBvs2JcYeQ3dhyLoWsHTu9cRGUOaFlSkvbR9WjL81XteXZUVsQvQLmIHPrPYRi4HccSK8o7HbOWhS0T5Hq7MVOKBDJqgIKBpApXlsG4fIjEIswO2MAnejpIb7TZMQtyMXm6W_XfEo97nT62pJQt-VnZK6E-WY",
    cta: "DÉCOUVRIR LE PROJET",
    size: "wide",
  },
  {
    title: "Peak Visibility",
    category: "SEO • Strategy",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAsUKMPgMTGqRUUjYXLj9l5i1_5c8wZC8swXHIDTGXP9tUoNerJNBKngTTVQ39ZM1L3GK1xGS15QaXyu-rXux2kRRPoOALB8SMNDwYiDfFrcC6SYCgReuNAAKL0gJyevhhI6UKjDrUuZJerf_1-gs1sZlQgpA_-AXW7uq8RuPscy8HeQIOq7WaaxF0y9Gbzv8P5R8yOkCH_LzVqqfi32O76FlT77QxJOXqN5s23WhnvTTov9AXppQsDRYFt3ggBeHujfhk3i4NM38w",
    cta: "VOIR LES RÉSULTATS",
    size: "standard",
  },
  {
    title: "Aether System",
    category: "Marketing • Branding",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBj3lTjiOFIS9YO_-6sc7vtKDUARD2lcXZ29wkZrPlvx4-JCT7WZintsPxB2CL10RqS2v9tjszRveIUEQuJfmNlFdJCdbkhzKTkdrRw4webdGMsnE5DYSUCJJiCYRKoNaj41UX929UiolX5P8eR8v7ag6UFvwbBQDENHDLBWDZ-TJ0ICz57MrxWcd8rVfXdWUKyc10HjmiBWy_zkY7-IRlebR_0B6DVX52IisVyd2FHWyie2CpcWl3UpyvTTvmie6zEU3CDDbx_46o",
    cta: "EXPLORER LA MARQUE",
    size: "standard",
  },
  {
    title: "TeamFlow Tool",
    category: "Product • UX/UI",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBrd8wO6PXdOVRyMLvwWhDoUcbtrqzEaI4vZ4c99QG_1despf4nBWWXhkjgDlbvljey_3BZD2ZslWy8vTk4tj1pzm-cgTNYoqUZpayNqEYLcJDTZ__os3rrfBlg8Ci0Rc-6Ule73tkvNAxYDIQVSGMuRbMvrjvFhlUbFwAD4dYipCyti8q5c6Z7vH2rOQj4hrdK3RIugtMaTiyXpIUeI_TH39zAQH-a3A8GKZD8rObDnvGYdQbP3TqUGx_AOiAyMyCb6joYBPwBmG0",
    cta: "LIRE L'ÉTUDE DE CAS",
    size: "tall",
  },
  {
    title: "Viral Impact",
    category: "Social • Ads",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAhyH9uYWO3DuzMnzV7ei7eHJWH_434HV8CTujhsxjPTPdeV5E-KC1BRTYHjkuNC7sqGJxWDqtZtTDsJONFg-7NDKWb3GzqRv127E8Hkp7Fj4z7VTdmvyIX5c3hRr4u4TseMS4E83FCHNoIjVqS-9sikVoAp0LXrGK-ZK5Ytpb1OKbyR1poq9Eu9T_FWT8jdLeJGkvcPMtrWy7dKh_Jqn-BJ_6mL3EdgwQkwc_LQZLPOMX8-GqiRecWJsBYsTdCyYZAilUw9sPT7Zw",
    cta: "DÉCOUVRIR LE PROJET",
    size: "standard",
  },
];

const projectSizeClass = {
  tall: "card-tall",
  wide: "card-wide",
  standard: "card-standard",
};

const expertiseLinks = [
  "Création Web",
  "Optimisation SEO",
  "Identité de Marque",
  "Marketing Digital",
];

const socialIcons = ["public", "alternate_email", "share"];

const legalLinks = ["Mentions Légales", "Confidentialité"];

export default function PortfolioPage() {
  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden bg-white text-slate-900 transition-colors duration-300">
      <header className="sticky top-0 z-50 w-full border-b border-slate-100 bg-white/90 backdrop-blur-md">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
          <Link href="/" className="flex items-center gap-2">
            <div className="flex size-9 items-center justify-center rounded-lg bg-blue-600 text-white">
              <span className="material-symbols-outlined text-xl">grid_view</span>
            </div>
            <span className="text-xl font-extrabold tracking-tight text-slate-900">
              WEB<span className="text-blue-600">CARRÉ</span>
            </span>
          </Link>
          <nav className="hidden items-center gap-10 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.label}
                className={`text-sm font-bold transition-colors ${
                  link.active
                    ? "border-b-2 border-blue-600 pb-1 text-blue-600"
                    : "text-slate-600 hover:text-slate-900"
                }`}
                href={link.href}
              >
                {link.label}
              </a>
            ))}
          </nav>
          <button className="rounded-full bg-slate-900 px-6 py-2.5 text-sm font-bold text-white shadow-md transition-all hover:bg-slate-800 hover:shadow-lg active:scale-95">
            Parlez-nous de votre projet
          </button>
        </div>
      </header>

      <main className="mx-auto w-full max-w-7xl flex-1 px-6 py-12 md:py-20">
        <section className="mb-16">
          <div className="mb-12 max-w-4xl">
            <span className="mb-4 inline-block text-xs font-bold uppercase tracking-[0.2em] text-blue-600">
              Portfolio d&apos;excellence
            </span>
            <h1 className="mb-8 text-5xl font-extrabold leading-[0.9] tracking-tight text-slate-900 md:text-8xl">
              Nos projets <br />
              <span className="font-display italic font-light text-slate-400">
                marquants.
              </span>
            </h1>
            <p className="max-w-2xl text-xl font-medium leading-relaxed text-slate-500">
              Une sélection de nos meilleures collaborations. De la stratégie
              SEO pointue à la création de plateformes e-commerce haute
              performance.
            </p>
          </div>
          <div className="inline-flex gap-1 rounded-2xl bg-slate-100 p-1.5">
            {filters.map((filter, index) => (
              <button
                key={filter}
                className={`rounded-xl px-8 py-2.5 text-sm font-bold transition-all ${
                  index === 0 ? "filter-toggle-active" : "filter-toggle-inactive"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </section>

        <div id="realisations" className="masonry-grid pb-20">
          {projects.map((project) => (
            <div
              key={project.title}
              className={`project-card rounded-3xl ${
                projectSizeClass[project.size]
              }`}
            >
              <img
                alt={project.title}
                className="h-full w-full object-cover transition-transform duration-1000"
                src={project.image}
              />
              <div className="overlay absolute inset-0 flex flex-col justify-end bg-white/90 p-10 opacity-0 transition-opacity duration-500">
                <span className="mb-3 text-[10px] font-black uppercase tracking-[0.3em] text-blue-600">
                  {project.category}
                </span>
                <h3
                  className={`mb-6 font-display font-black text-slate-900 ${
                    project.size === "wide" ? "text-5xl" : "text-3xl"
                  }`}
                >
                  {project.title}
                </h3>
                <button className="group/btn flex w-fit items-center gap-3 text-sm font-black text-slate-900">
                  {project.cta}
                  <span className="material-symbols-outlined text-xl text-blue-600 transition-transform group-hover/btn:translate-x-2">
                    arrow_right_alt
                  </span>
                </button>
              </div>
            </div>
          ))}
        </div>

        <section className="relative mt-20 flex flex-col items-center overflow-hidden rounded-[3rem] bg-slate-900 p-12 text-center md:p-24">
          <div className="relative z-10 max-w-2xl">
            <h2 className="mb-8 text-4xl font-extrabold tracking-tight text-white md:text-6xl">
              Prêt à transformer votre présence digitale ?
            </h2>
            <p className="mb-12 text-xl text-slate-400">
              Discutons de votre prochain projet et voyons comment Web Carré
              peut accélérer votre croissance.
            </p>
            <button className="rounded-full bg-blue-600 px-12 py-5 text-lg font-black text-white shadow-2xl transition-all hover:bg-blue-500 hover:scale-105 active:scale-95">
              Démarrer une collaboration
            </button>
          </div>
          <div
            className="pointer-events-none absolute inset-0 opacity-10"
            style={{
              backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)",
              backgroundSize: "32px 32px",
            }}
          />
        </section>
      </main>

      <footer className="border-t border-slate-100 bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 gap-16 md:grid-cols-4">
            <div className="md:col-span-2">
              <div className="mb-8 flex items-center gap-2">
                <div className="flex size-8 items-center justify-center rounded bg-blue-600 text-white">
                  <span className="material-symbols-outlined text-lg">
                    grid_view
                  </span>
                </div>
                <span className="text-xl font-extrabold tracking-tight text-slate-900">
                  WEB<span className="text-blue-600">CARRÉ</span>
                </span>
              </div>
              <p
                id="agency"
                className="mb-10 max-w-sm text-lg leading-relaxed text-slate-500"
              >
                Artisans du numérique, nous concevons des expériences sur-mesure
                pour les marques audacieuses depuis 2018.
              </p>
              <div className="flex gap-4">
                {socialIcons.map((icon) => (
                  <a
                    key={icon}
                    className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-200 bg-white shadow-sm transition-all hover:bg-slate-900 hover:text-white"
                    href="#"
                  >
                    <span className="material-symbols-outlined text-lg">
                      {icon}
                    </span>
                  </a>
                ))}
              </div>
            </div>
            <div>
              <h4 className="mb-8 text-xs font-black uppercase tracking-widest text-slate-900">
                Expertises
              </h4>
              <ul className="space-y-4 text-sm font-bold text-slate-500">
                {expertiseLinks.map((link) => (
                  <li key={link}>
                    <a className="transition-colors hover:text-blue-600" href="#">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="mb-8 text-xs font-black uppercase tracking-widest text-slate-900">
                Contact
              </h4>
              <ul className="space-y-4 text-sm font-bold text-slate-500">
                <li>bonjour@webcarre.fr</li>
                <li>+33 (0)1 23 45 67 89</li>
                <li>42 Rue de l&apos;Innovation</li>
                <li>75002 Paris, France</li>
              </ul>
            </div>
          </div>
          <div className="mt-20 flex flex-col justify-between gap-4 border-t border-slate-200 pt-8 text-xs font-bold text-slate-400 md:flex-row">
            <p>© 2024 Web Carré. Tous droits réservés.</p>
            <div className="flex gap-8">
              {legalLinks.map((link) => (
                <a key={link} className="transition-colors hover:text-slate-900" href="#">
                  {link}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
