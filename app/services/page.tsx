const services = [
  {
    title: "Développement Web",
    icon: "terminal",
    description:
      "Des sites performants conçus avec les technologies les plus récentes (Next.js, React) pour une expérience utilisateur fluide et sécurisée.",
    tags: ["E-commerce", "SaaS", "PWA"],
    highlight: true,
  },
  {
    title: "SEO & Visibilité",
    icon: "analytics",
    description:
      "Atteignez la première page des résultats de recherche grâce à nos audits techniques et nos stratégies de contenu ciblées.",
    checklist: [
      "Optimisation Sémantique",
      "Netlinking Stratégique",
      "Suivi Data & Reporting",
    ],
    highlight: false,
  },
  {
    title: "Publicité Ads",
    icon: "ads_click",
    description:
      "Gestion de vos campagnes Google Ads et Social Ads pour un ROI maximal.",
    highlight: false,
  },
  {
    title: "Design UI/UX",
    icon: "draw",
    description:
      "Des interfaces modernes, intuitives et pensées pour la conversion utilisateur.",
    highlight: false,
  },
];

const processSteps = [
  {
    phase: "Phase 01",
    title: "Stratégie & Conseil",
    text:
      "Analyse de vos besoins, audit de l'existant et définition d'une roadmap stratégique alignée avec vos objectifs business.",
    position: "left",
  },
  {
    phase: "Phase 02",
    title: "Design & Prototypage",
    text:
      "Conception des maquettes haute-fidélité et prototypage interactif pour valider l'expérience utilisateur avant le développement.",
    position: "right",
  },
  {
    phase: "Phase 03",
    title: "Développement Agile",
    text:
      "Codage itératif avec des points réguliers. Nous utilisons les technologies les plus stables pour assurer la pérennité de votre outil.",
    position: "left",
    muted: true,
  },
  {
    phase: "Phase 04",
    title: "Lancement & Suivi",
    text:
      "Déploiement en production, formation de vos équipes et accompagnement post-lancement pour optimiser les performances.",
    position: "right",
    muted: true,
  },
];

const footerLinks = [
  "Confidentialité",
  "Mentions Légales",
  "LinkedIn",
  "Contact",
];

export default function ServicesPage() {
  return (
    <div className="bg-white text-slate-900 antialiased">
      <main className="mx-auto max-w-7xl px-6 py-16 lg:py-28">
        <section className="mb-20 max-w-4xl lg:mb-28">
          <span className="mb-8 inline-flex items-center gap-2 rounded-full border border-blue-600/10 bg-indigo-50 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-blue-600">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-600 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-600" />
            </span>
            Expertise &amp; Digitalisation
          </span>
          <h2 className="mb-8 text-5xl font-extrabold leading-[1.1] tracking-tight text-slate-900 lg:text-7xl">
            Propulser votre marque par le{" "}
            <span className="text-blue-600">design et la technique.</span>
          </h2>
          <p className="max-w-2xl text-xl leading-relaxed text-slate-500">
            Nous accompagnons les entreprises françaises dans leur
            transformation numérique avec des solutions sur-mesure, de la
            conception à la performance SEO.
          </p>
        </section>

        <section
          id="services"
          className="mb-40 grid h-auto grid-cols-1 gap-6 md:grid-cols-3 md:grid-rows-2 lg:h-[850px]"
        >
          <div className="bento-card relative overflow-hidden rounded-2xl p-10 md:col-span-2 md:row-span-1">
            <div className="relative z-10 flex h-full flex-col">
              <div className="mb-8 flex size-14 items-center justify-center rounded-xl bg-indigo-50 text-blue-600 transition-colors group-hover:bg-blue-600 group-hover:text-white">
                <span className="material-symbols-outlined text-3xl">
                  {services[0].icon}
                </span>
              </div>
              <h3 className="mb-4 text-3xl font-extrabold text-slate-900">
                {services[0].title}
              </h3>
              <p className="max-w-md text-lg leading-relaxed text-slate-500">
                {services[0].description}
              </p>
              <div className="mt-auto flex flex-wrap gap-3 pt-8">
                {services[0].tags?.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-slate-100 bg-slate-50 px-4 py-1.5 text-xs font-bold text-slate-600"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="pointer-events-none absolute -bottom-4 -right-4 opacity-5 transition-transform group-hover:scale-110">
              <pre className="text-sm leading-tight text-blue-600">
                {`interface Service {
  title: "Web Dev";
  performance: 100;
  seo_ready: true;
}`}
              </pre>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-2xl bg-slate-900 p-10 text-white shadow-2xl md:col-span-1 md:row-span-2">
            <div className="relative z-10 flex h-full flex-col">
              <div className="mb-8 flex size-14 items-center justify-center rounded-xl bg-white/10">
                <span className="material-symbols-outlined text-3xl text-blue-600">
                  {services[1].icon}
                </span>
              </div>
              <h3 className="mb-6 text-3xl font-extrabold">
                {services[1].title}
              </h3>
              <p className="mb-10 text-lg leading-relaxed text-slate-300">
                {services[1].description}
              </p>
              <ul className="space-y-6">
                {services[1].checklist?.map((item) => (
                  <li key={item} className="flex items-center gap-4">
                    <span className="flex size-6 items-center justify-center rounded-full bg-blue-600/20">
                      <span className="material-symbols-outlined text-xs font-bold text-blue-400">
                        check
                      </span>
                    </span>
                    <span className="text-base font-medium">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-auto pt-12">
                <div className="flex h-20 items-end gap-2">
                  <div className="h-[30%] w-full rounded-t-lg bg-white/5 transition-all duration-700 group-hover:h-[50%]" />
                  <div className="h-[60%] w-full rounded-t-lg bg-white/10 transition-all delay-100 duration-700 group-hover:h-[80%]" />
                  <div className="h-[45%] w-full rounded-t-lg bg-blue-600/40 transition-all delay-200 duration-700 group-hover:h-[65%]" />
                  <div className="h-[90%] w-full rounded-t-lg bg-blue-600 transition-all delay-300 duration-700 group-hover:h-[100%]" />
                </div>
              </div>
            </div>
          </div>

          {services.slice(2).map((service) => (
            <div
              key={service.title}
              className="bento-card relative overflow-hidden rounded-2xl p-10 md:col-span-1 md:row-span-1"
            >
              <div className="relative z-10">
                <div className="mb-6 flex size-14 items-center justify-center rounded-xl bg-indigo-50 text-blue-600 transition-colors group-hover:bg-blue-600 group-hover:text-white">
                  <span className="material-symbols-outlined text-3xl">
                    {service.icon}
                  </span>
                </div>
                <h3 className="mb-4 text-2xl font-extrabold text-slate-900">
                  {service.title}
                </h3>
                <p className="text-base leading-relaxed text-slate-500">
                  {service.description}
                </p>
              </div>
              {service.title === "Design UI/UX" && (
                <div className="absolute bottom-0 right-0 p-4 opacity-10 transition-opacity group-hover:opacity-20">
                  <span className="material-symbols-outlined text-8xl text-blue-600">
                    auto_awesome
                  </span>
                </div>
              )}
            </div>
          ))}
        </section>

        <section id="process" className="relative py-12">
          <div className="mb-28 text-center">
            <h2 className="mb-6 text-4xl font-extrabold tracking-tight text-slate-900 lg:text-5xl">
              Notre Processus
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-slate-500">
              Une méthodologie rigoureuse pour garantir le succès de vos projets
              digitaux du début à la fin.
            </p>
          </div>
          <div className="relative mx-auto max-w-5xl">
            <div className="absolute bottom-0 left-1/2 top-0 w-0.5 -translate-x-1/2 overflow-hidden rounded-full bg-slate-100">
              <div className="process-line-active w-full" />
            </div>
            <div className="relative space-y-40">
              {processSteps.map((step, index) => {
                const isLeft = step.position === "left";
                const isMuted = step.muted;
                return (
                  <div
                    key={step.phase}
                    className="flex flex-col items-center gap-12 md:flex-row md:gap-0"
                  >
                    <div
                      className={`order-2 w-full text-center md:w-1/2 ${
                        isLeft
                          ? "md:order-1 md:pr-24 md:text-right"
                          : "md:order-3 md:pl-24 md:text-left"
                      }`}
                    >
                      <div className="mb-4 inline-block rounded-md bg-indigo-50 px-3 py-1 text-xs font-bold uppercase tracking-wider text-blue-600">
                        {step.phase}
                      </div>
                      <h4 className="mb-4 text-2xl font-extrabold text-slate-900">
                        {step.title}
                      </h4>
                      <p className="leading-relaxed text-slate-500">
                        {step.text}
                      </p>
                    </div>
                    <div
                      className={`order-1 flex size-14 items-center justify-center rounded-full border-4 ${
                        isMuted
                          ? "border-slate-200 bg-white text-slate-400"
                          : "border-white bg-blue-600 text-white shadow-xl shadow-blue-600/30"
                      } font-extrabold md:order-2`}
                    >
                      {index + 1}
                    </div>
                    <div
                      className={`order-3 hidden w-1/2 md:block ${
                        isLeft ? "md:pl-24" : "md:pr-24"
                      }`}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="relative mt-48 overflow-hidden rounded-[2.5rem] bg-slate-900 p-12 shadow-2xl lg:p-24">
          <div className="pointer-events-none absolute right-0 top-0 h-full w-1/3 opacity-10">
            <svg className="h-full w-full text-blue-600" viewBox="0 0 100 100">
              <circle cx="100" cy="0" r="60" fill="currentColor" />
              <circle
                cx="100"
                cy="0"
                r="80"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.5"
              />
              <circle
                cx="100"
                cy="0"
                r="100"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.5"
              />
            </svg>
          </div>
          <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center text-center">
            <h2 className="mb-8 text-4xl font-extrabold leading-[1.2] text-white lg:text-6xl">
              Prêt à lancer votre projet digital ?
            </h2>
            <p className="mb-12 max-w-2xl text-xl text-slate-400">
              Collaborons ensemble pour créer une expérience numérique qui
              génère de la valeur réelle pour votre entreprise.
            </p>
            <div className="flex flex-col gap-6 sm:flex-row">
              <button className="rounded-2xl bg-blue-600 px-10 py-5 text-lg font-bold text-white shadow-xl shadow-blue-600/25 transition-all hover:bg-blue-600/90">
                Demander un devis gratuit
              </button>
              <button className="rounded-2xl border border-white/10 bg-white/5 px-10 py-5 text-lg font-bold text-white backdrop-blur-md transition-all hover:bg-white/10">
                Voir nos références
              </button>
            </div>
          </div>
        </section>
      </main>

      <footer
        id="contact"
        className="border-t border-slate-100 bg-slate-50/50 py-16"
      >
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 flex flex-col items-start justify-between gap-10 md:flex-row md:items-center">
            <div className="flex items-center gap-2">
              <div className="flex size-8 items-center justify-center rounded bg-blue-600 text-white">
                <span className="material-symbols-outlined text-lg">
                  grid_view
                </span>
              </div>
              <h1 className="text-lg font-extrabold tracking-tight text-slate-900">
                WEB<span className="text-blue-600">CARRÉ</span>
              </h1>
            </div>
            <div className="flex flex-wrap gap-x-12 gap-y-4 text-sm font-semibold text-slate-500">
              {footerLinks.map((link) => (
                <a
                  key={link}
                  className="transition-colors hover:text-blue-600"
                  href="#"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>
          <div className="flex flex-col items-center justify-between gap-6 border-t border-slate-200 pt-8 md:flex-row">
            <p className="text-sm text-slate-400">
              © 2024 Web Carré Agence Digitale. Tous droits réservés.
            </p>
            <div className="flex items-center gap-2">
              <span className="size-2 rounded-full bg-green-500" />
              <span className="text-xs font-bold uppercase tracking-widest text-slate-400">
                Disponibles pour de nouveaux projets
              </span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
