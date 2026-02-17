const trustLogos = [
  { icon: "architecture", label: "STRUCTURA" },
  { icon: "potted_plant", label: "FLORENCE" },
  { icon: "diamond", label: "LUXE.CO" },
  { icon: "grid_view", label: "MODULO" },
  { icon: "precision_manufacturing", label: "FABRIQUE" },
  { icon: "token", label: "VALEUR" },
];

const serviceCards = [
  {
    icon: "data_object",
    title: "Création de Sites Web",
    text:
      "Développement sur-mesure de plateformes performantes, sécurisées et optimisées pour la conversion.",
    bullets: ["Next.js / React", "UI/UX Minimaliste", "E-commerce Headless"],
  },
  {
    icon: "search_insights",
    title: "Stratégie SEO",
    text:
      "Positionnement durable sur les moteurs de recherche grâce à une expertise technique et sémantique rigoureuse.",
    bullets: ["Audit Technique", "Content Marketing", "Netlinking Qualitatif"],
  },
  {
    icon: "monitoring",
    title: "Growth Marketing",
    text:
      "Accélération de votre croissance via des campagnes d'acquisition ciblées et l'optimisation des performances.",
    bullets: ["Ads (SEA & Social)", "Optimisation CRO", "Data Analytics"],
  },
];

const footerColumns = [
  {
    title: "Agence",
    links: ["Expertises", "Réalisations", "Process", "Blog"],
  },
  {
    title: "Social",
    links: ["LinkedIn", "Instagram", "Malt"],
  },
];

export default function Home() {
  return (
    <div className="selection:bg-blue-600/10 selection:text-blue-600">
      <main>
        <section className="relative overflow-hidden bg-white pb-32 pt-48">
          <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 lg:grid-cols-12">
            <div className="fade-in-up flex flex-col gap-10 lg:col-span-7">
              <div className="inline-flex w-fit items-center gap-3 rounded-full border border-slate-200 bg-slate-50 px-4 py-1.5">
                <span className="relative flex h-2 w-2">
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-600" />
                </span>
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500">
                  Disponible pour de nouveaux projets
                </span>
              </div>
              <h1 className="text-6xl font-extrabold leading-[1.05] text-slate-900 md:text-8xl">
                L&apos;architecture{" "}
                <span className="font-light italic text-blue-600">digitale</span>{" "}
                de votre succès.
              </h1>
              <p className="max-w-xl text-xl font-light leading-relaxed text-slate-500">
                Webcarre accompagne les marques ambitieuses dans la création de
                sites web haute performance, le SEO et le marketing digital.
              </p>
              <div className="flex flex-wrap gap-5 pt-4">
                <button className="flex items-center gap-3 rounded-xl bg-blue-600 px-10 py-5 text-base font-bold text-white shadow-lg shadow-blue-600/20 transition-all hover:bg-blue-700">
                  Commencer un projet
                  <span className="material-symbols-outlined text-lg">
                    arrow_right_alt
                  </span>
                </button>
                <button className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-10 py-5 text-base font-bold text-slate-900 transition-all hover:border-blue-600 hover:text-blue-600">
                  Notre Portfolio
                </button>
              </div>
            </div>
            <div
              className="fade-in-up relative lg:col-span-5"
              style={{ animationDelay: "0.2s" }}
            >
              <div className="relative border border-slate-200 bg-slate-50 p-4 shadow-2xl">
                <div
                  className="aspect-[4/5] bg-cover bg-center grayscale transition-all duration-700 hover:grayscale-0"
                  style={{
                    backgroundImage:
                      'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDwSkW5zF2Wqo7tWrPUrMY5a-oIF8qI80lsXMzGNIA7-um1ym3vYmBr3CA_y9j9UgAcEaYtFbHlvjtd8Q-le_z54CnoVEg-gHnHNg0sVF-NFNgSBl0els5SUv4pDBLyKugbWJ_tDpJwaMdcgLtm9A2n4qvVklKcul3j3fIh88j3ex6TTtypU8k-zCPSd4rCeNk5-prfu8c1Cuq1lpsYfq34UAF0XV47fCIMIjazCqTx4wvHMDJG-7zKsh9cT90lw5TgO8pi_wkfYC4")',
                  }}
                />
                <div className="absolute -bottom-8 -left-8 max-w-[240px] border border-slate-200 bg-white p-6 shadow-xl">
                  <p className="mb-2 text-xs font-bold uppercase tracking-widest text-blue-600">
                    Expertise
                  </p>
                  <p className="text-sm italic leading-relaxed text-slate-600">
                    &quot;Une approche minimaliste et technique pour des
                    résultats concrets.&quot;
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-slate-200/60 bg-slate-50/60 py-20">
          <p className="mb-16 text-center text-[10px] font-bold uppercase tracking-[0.3em] text-slate-400">
            Ils nous font confiance
          </p>
          <div className="marquee">
            <div className="marquee-content animate-scroll">
              {trustLogos.map((logo) => (
                <div
                  key={`${logo.icon}-a`}
                  className="group flex cursor-pointer items-center gap-3 grayscale opacity-30 transition-all hover:opacity-100"
                >
                  <span className="material-symbols-outlined text-3xl text-slate-900">
                    {logo.icon}
                  </span>
                  <span className="text-xl font-bold tracking-tighter">
                    {logo.label}
                  </span>
                </div>
              ))}
            </div>
            <div
              aria-hidden="true"
              className="marquee-content animate-scroll"
            >
              {trustLogos.map((logo) => (
                <div
                  key={`${logo.icon}-b`}
                  className="group flex cursor-pointer items-center gap-3 grayscale opacity-30 transition-all hover:opacity-100"
                >
                  <span className="material-symbols-outlined text-3xl text-slate-900">
                    {logo.icon}
                  </span>
                  <span className="text-xl font-bold tracking-tighter">
                    {logo.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white px-6 py-32" id="services">
          <div className="mx-auto max-w-7xl">
            <div className="mb-24 flex flex-col justify-between gap-12 md:flex-row md:items-end">
              <div className="max-w-2xl">
                <h2 className="mb-6 text-xs font-bold uppercase tracking-[0.4em] text-blue-600">
                  Expertise &amp; Savoir-faire
                </h2>
                <h3 className="mb-8 text-4xl font-extrabold text-slate-900 md:text-5xl">
                  Solutions Digitales Premium
                </h3>
                <p className="text-lg font-light leading-relaxed text-slate-500">
                  Nous combinons design épuré et technologie de pointe pour
                  propulser votre présence en ligne.
                </p>
              </div>
              <a
                className="group flex items-center gap-3 border-b-2 border-slate-900 pb-1 font-bold text-slate-900 transition-all hover:border-blue-600 hover:text-blue-600"
                href="/services"
              >
                Tous nos services
                <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">
                  north_east
                </span>
              </a>
            </div>
            <div className="grid grid-cols-1 gap-0 border border-slate-200 md:grid-cols-3">
              {serviceCards.map((card, index) => (
                <div
                  key={card.title}
                  className={`group p-12 transition-all duration-500 hover:bg-slate-50 ${
                    index < serviceCards.length - 1
                      ? "border-b border-slate-200 md:border-b-0 md:border-r"
                      : ""
                  }`}
                >
                  <div className="mb-10 text-slate-900">
                    <span className="material-symbols-outlined text-4xl font-light">
                      {card.icon}
                    </span>
                  </div>
                  <h4 className="mb-6 text-2xl font-bold text-slate-900">
                    {card.title}
                  </h4>
                  <p className="mb-10 font-light leading-relaxed text-slate-500">
                    {card.text}
                  </p>
                  <ul className="flex flex-col gap-4 text-xs font-bold uppercase tracking-widest text-slate-400">
                    {card.bullets.map((bullet) => (
                      <li
                        key={bullet}
                        className="flex items-center gap-3 transition-colors group-hover:text-slate-900"
                      >
                        <span className="size-1.5 bg-blue-600" /> {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-slate-50 px-6 py-32" id="portfolio">
          <div className="mx-auto max-w-7xl">
            <div className="relative overflow-hidden rounded-[2.5rem] bg-slate-900 p-16 text-center md:p-32">
              <div className="relative z-10 mx-auto max-w-3xl">
                <h2 className="mb-10 text-4xl font-extrabold leading-tight tracking-tight text-white md:text-6xl">
                  Prêt à transformer votre présence digitale ?
                </h2>
                <p className="mb-14 text-xl font-light text-slate-300">
                  Collaborons pour bâtir un écosystème digital à la hauteur de
                  vos ambitions.
                </p>
                <div className="flex flex-wrap justify-center gap-6">
                  <button className="rounded-2xl bg-blue-600 px-12 py-5 text-base font-bold text-white shadow-xl transition-all hover:bg-blue-500">
                    Parlons de votre projet
                  </button>
                  <button className="rounded-2xl border border-white/20 bg-transparent px-12 py-5 text-base font-bold text-white transition-all hover:bg-white/10">
                    Études de cas
                  </button>
                </div>
              </div>
              <div className="pointer-events-none absolute inset-0 opacity-10">
                <div className="absolute left-0 top-0 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rotate-45 border border-white" />
                <div className="absolute bottom-0 right-0 h-96 w-96 translate-x-1/4 translate-y-1/4 rotate-12 border border-white" />
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-100 bg-white px-6 py-24" id="contact">
        <div className="mx-auto max-w-7xl">
          <div className="mb-24 grid grid-cols-1 gap-16 md:grid-cols-12">
            <div className="md:col-span-5">
              <div className="mb-8 flex items-center gap-2">
                <div className="flex size-8 items-center justify-center rounded bg-blue-600 text-white">
                  <span className="material-symbols-outlined text-lg">grid_view</span>
                </div>
                <span className="text-xl font-extrabold tracking-tight text-slate-900">
                  Webcarre
                </span>
              </div>
              <p className="max-w-sm text-base font-light leading-relaxed text-slate-500">
                Agence conseil en stratégie digitale. Nous créons des
                expériences numériques mémorables et efficaces pour les
                entreprises en quête d&apos;excellence.
              </p>
            </div>
            {footerColumns.map((column) => (
              <div key={column.title} className="md:col-span-2">
                <h5 className="mb-8 text-[10px] font-bold uppercase tracking-[0.3em] text-slate-900">
                  {column.title}
                </h5>
                <ul className="flex flex-col gap-4 text-sm font-medium text-slate-500">
                  {column.links.map((link) => (
                    <li key={link}>
                      <a className="transition-colors hover:text-blue-600" href="#">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <div className="md:col-span-3">
              <h5 className="mb-8 text-[10px] font-bold uppercase tracking-[0.3em] text-slate-900">
                Newsletter
              </h5>
              <p className="mb-6 text-xs font-light text-slate-500">
                Recevez nos dernières analyses sur le web.
              </p>
              <div className="flex flex-col gap-3">
                <input
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none focus:ring-1 focus:ring-blue-600"
                  placeholder="Votre email"
                  type="email"
                />
                <button className="rounded-xl bg-slate-900 py-3 text-xs font-bold uppercase tracking-widest text-white transition-colors hover:bg-blue-600">
                  S&apos;abonner
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-between gap-6 border-t border-slate-200 pt-10 text-[10px] font-bold uppercase tracking-widest text-slate-400 md:flex-row">
            <p>© 2024 Webcarre Digital. Basé à Paris, France.</p>
            <div className="flex gap-10">
              <a className="transition-colors hover:text-blue-600" href="#">
                Mentions Légales
              </a>
              <a className="transition-colors hover:text-blue-600" href="#">
                Confidentialité
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

