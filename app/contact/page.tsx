"use client";

import Image from "next/image";
import { useState } from "react";

const socialIcons = ["brand_awareness", "language", "group"];

const serviceOptions = ["Création de site", "Référencement", "Identité visuelle","Supports de communication","CRM", "Application mobile", "Réseaux sociaux", "Autre"];

const faqs = [
  {
    question: "Quels sont vos délais de réalisation ?",
    answer:
      "Pour un site vitrine, comptez généralement 4 à 6 semaines. Un projet e-commerce complexe peut nécessiter 10 à 16 semaines. Nous définissons ensemble un planning précis dès le lancement de la phase de conception.",
    open: true,
  },
  {
    question: "Accompagnez-vous les clients sur le long terme ?",
    answer:
      "Absolument. La mise en ligne n'est que le début. Nous proposons des forfaits de maintenance, d'optimisation SEO continue et de stratégie marketing pour assurer la croissance de votre plateforme.",
  },
  {
    question: "Comment se déroule le pa kiement ?",
    answer:
      "Nos conditions standards prévoient un acompte de 40% à la commande, 30% après validation des maquettes graphiques et 30% lors de la livraison finale. Des facilités de paiement peuvent être discutées pour les projets d'envergure.",
  },
  {
    question: "Le site m'appartient-il totalement ?",
    answer:
      "Oui, vous êtes l'unique propriétaire de votre nom de domaine, de l'hébergement et du code source. Nous prônons la transparence totale et l'indépendance de nos clients.",
  },
];

const footerLinks = ["Mentions Légales", "Confidentialité"];

export default function ContactPage() {
  const [fullName, setFullName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [services, setServices] = useState<string[]>([]);
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle",
  );

  const handleServiceToggle = (option: string) => {
    setServices((prev) =>
      prev.includes(option)
        ? prev.filter((item) => item !== option)
        : [...prev, option],
    );
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName,
          firstName,
          phone,
          email,
          services,
          message,
        }),
      });

      if (!response.ok) {
        throw new Error("Request failed");
      }

      setStatus("success");
      setFullName("");
      setFirstName("");
      setPhone("");
      setEmail("");
      setServices([]);
      setMessage("");
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <div className="bg-white text-slate-900 antialiased selection:bg-blue-600/10 selection:text-blue-600">
      <main className="mx-auto max-w-7xl px-6 py-16 md:py-24">
        <div className="grid grid-cols-1 items-start gap-20 lg:grid-cols-12">
          <div className="space-y-12 lg:col-span-5">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-slate-600">
                <span className="size-1.5 rounded-full bg-emerald-500" />
                Disponibles pour de nouveaux défis
              </div>
              <h1 className="text-5xl font-extrabold leading-[1.1] tracking-tight text-slate-900 md:text-6xl">
                Parlons de votre prochain{" "}
                <span className="text-blue-600">succès digital.</span>
              </h1>
              <p className="max-w-md text-lg leading-relaxed text-slate-500">
                Vous avez une idée ? Nous avons l&apos;expertise. Remplissez le
                formulaire et recevez une proposition personnalisée sous 48h.
              </p>
            </div>
            <div className="space-y-8 border-t border-slate-100 pt-8">
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
                <div className="space-y-3">
                  <p className="text-[11px] font-bold uppercase tracking-widest text-slate-400">
                    Écrivez-nous
                  </p>
                  <a
                    className="text-lg font-bold transition-colors hover:text-blue-600"
                    href="mailto:contact@webcarre.fr"
                  >
                    contact@webcarre.fr
                  </a>
                </div>
                <div className="space-y-3">
                  <p className="text-[11px] font-bold uppercase tracking-widest text-slate-400">
                    Suivez-nous
                  </p>
                  <div className="flex gap-4">
                    {socialIcons.map((icon) => (
                      <a
                        key={icon}
                        className="text-slate-400 transition-colors hover:text-slate-900"
                        href="#"
                      >
                        <span className="material-symbols-outlined">{icon}</span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <div className="rounded-xl border border-slate-200/60 bg-slate-50 p-6">
                <div className="mb-4 flex items-center gap-4">
                  <div className="flex -space-x-2">
                    <Image
                      alt="Client 1"
                      className="size-8 rounded-full border-2 border-white object-cover"
                      height={32}
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuAcnHZVrRUO-aWcxQ_MZLeKSEoJuy_b41MTamSuwdmiOcYxD1iUK5v710vfVdbTmuNqL47l-s2wzRNjK9CjZRdkbNJeRIONdvEyFobBvyi-4rTD15_8RybzVd1yFqA-3CVfI4uKBV0o-4dnLFXskNrDGth_RUJJ_kj8vMGxsmtglHDxrLlpLPBP2ZrRxU9Dcf1pfYh2BmW4ulNlffZSrhS0eF8J30nC3h4qblSZg0xJ5_EwTwjnLdqdx8daFxJmeu0pRqnCYHfcONc"
                      width={32}
                    />
                    <Image
                      alt="Client 2"
                      className="size-8 rounded-full border-2 border-white object-cover"
                      height={32}
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuCBNrttgkjnhsBYPi3A6raBiNcRNOJsZ7oDlREs8WRaEpWTcbjjlwkL2oDcJ1O90nrK-NIbOoZLRt2EaxRckFADtjgMy_80oaKLHLWsOd012pLGPHR0bJklC3F8naTaYZxh-Q-oFgceyfP7knsYJaZfw9YQb55i-qb0bk9pkd3WB8zJRIIihVsd1RpqXLnZLJRhvEQ_ChCAfAhdcDoQpuanEqmk5V9Ce48sssqOICG6gi8EDzYfmP2vQpvkjtkp55mflnw8MzymsDo"
                      width={32}
                    />
                    <Image
                      alt="Client 3"
                      className="size-8 rounded-full border-2 border-white object-cover"
                      height={32}
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuD0pYiBiVABqeDTiNIlWKOz3kGsTeBWbYwsYI27g2RfHHaBdcnFtpvOr0ePY-r6Y_guxZjf2aNFUsnG3JE7sYnaHFdSKz-L_nZy1qeSStc3UoFdkVlVLD3rVJqr-SSL_Z6rKRYYDph5mYZpgah-UWZ317zoeNcOtLcokU9aKp12QbcbvjpijaHO6CC1BDOuzPa0tJtgFA-_hG2leUTIcBP2tb1vVCT7ft2yn2ycbkBFz8adaXB7pHpDIcpXLRjYxRwxmFstf9ocTbg"
                      width={32}
                    />
                  </div>
                  <p className="text-xs font-bold uppercase tracking-wide text-slate-600">
                    Accompagnement premium
                  </p>
                </div>
                <p className="text-sm italic leading-relaxed text-slate-500">
                  &quot;L&apos;équipe de Web carré a su transformer notre vision en une
                  plateforme performante. Un professionnalisme rare sur le
                  marché français.&quot;
                </p>
                <div className="mt-4 flex gap-1 text-amber-400">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <span key={index} className="material-symbols-outlined text-sm">
                      star
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div
              id="formulaire"
              className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm md:p-10"
            >
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-500">
                      Nom complet
                    </label>
                    <input
                      className="form-input-focus w-full rounded border border-slate-200 bg-slate-50/30 px-4 py-3.5 text-sm text-slate-900 placeholder:text-slate-400 transition-all"
                      placeholder="Ex: Jean"
                      type="text"
                      value={fullName}
                      onChange={(event) => setFullName(event.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-500">
                      Prénom
                    </label>
                    <input
                      className="form-input-focus w-full rounded border border-slate-200 bg-slate-50/30 px-4 py-3.5 text-sm text-slate-900 placeholder:text-slate-400 transition-all"
                      placeholder="Ex:Dupont"
                      type="text"
                      value={firstName}
                      onChange={(event) => setFirstName(event.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-500">
                      Téléphone
                    </label>
                    <input
                      className="form-input-focus w-full rounded border border-slate-200 bg-slate-50/30 px-4 py-3.5 text-sm text-slate-900 placeholder:text-slate-400 transition-all"
                      placeholder="Ex: 0x xx xx xx xx"
                      type="text"
                      value={phone}
                      onChange={(event) => setPhone(event.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-500">
                      Email professionnel
                    </label>
                    <input
                      className="form-input-focus w-full rounded border border-slate-200 bg-slate-50/30 px-4 py-3.5 text-sm text-slate-900 placeholder:text-slate-400 transition-all"
                      placeholder="jean@entreprise.fr"
                      type="email"
                      value={email}
                      onChange={(event) => setEmail(event.target.value)}
                      required
                    />
                  </div>
                </div>
                <div className="space-y-4">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    Type de service souhaité
                  </label>
                  <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                    {serviceOptions.map((option) => (
                      <label key={option} className="cursor-pointer">
                        <input
                          className="peer hidden"
                          checked={services.includes(option)}
                          name="service"
                          type="checkbox"
                          onChange={() => handleServiceToggle(option)}
                        />
                        <div className="rounded border border-slate-200 px-3 py-3 text-center text-xs font-semibold text-slate-500 transition-all peer-checked:border-blue-600 peer-checked:bg-blue-600/5 peer-checked:text-blue-600">
                          {option}
                        </div>
                      </label>
                    ))}
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    Votre projet en quelques mots
                  </label>
                  <textarea
                    className="form-input-focus w-full resize-none rounded border border-slate-200 bg-slate-50/30 px-4 py-3.5 text-sm text-slate-900 placeholder:text-slate-400 transition-all"
                    placeholder="Objectifs, délais, contraintes particulières..."
                    rows={4}
                    value={message}
                    onChange={(event) => setMessage(event.target.value)}
                    required
                  />
                </div>
                <button
                  className="flex w-full items-center justify-center gap-2 rounded bg-blue-600 py-4 text-sm font-bold text-white shadow-lg shadow-blue-600/20 transition-all hover:bg-blue-700"
                  type="submit"
                  disabled={status === "loading"}
                >
                  {status === "loading" ? "Envoi en cours..." : "Envoyer ma demande"}{" "}
                  <span className="material-symbols-outlined text-base">
                    arrow_forward
                  </span>
                </button>
                {status === "success" ? (
                  <p className="rounded border border-emerald-100 bg-emerald-50 px-4 py-3 text-center text-xs font-semibold text-emerald-600">
                    Merci ! Votre demande a bien été envoyée.
                  </p>
                ) : null}
                {status === "error" ? (
                  <p className="rounded border border-rose-100 bg-rose-50 px-4 py-3 text-center text-xs font-semibold text-rose-600">
                    Une erreur est survenue. Merci de réessayer.
                  </p>
                ) : null}
                <p className="px-8 text-center text-[10px] leading-relaxed text-slate-400">
                  En envoyant ce formulaire, vous acceptez que vos données
                  soient traitées conformément à notre politique de
                  confidentialité pour la gestion de votre demande.
                </p>
              </form>
            </div>
          </div>
        </div>

        <section id="faq" className="mx-auto mt-32 max-w-4xl">
          <div className="mb-16 space-y-4 text-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900">
              Questions Fréquentes
            </h2>
            <p className="text-slate-500">
              Tout ce qu&apos;il faut savoir pour démarrer sereinement.
            </p>
          </div>
          <div className="space-y-3">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group overflow-hidden rounded-lg border border-slate-100 bg-white transition-all"
                open={faq.open}
              >
                <summary className="list-none cursor-pointer p-6 transition-colors hover:bg-slate-50">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-slate-700">
                      {faq.question}
                    </span>
                    <span className="material-symbols-outlined text-slate-400 transition-transform group-open:rotate-180">
                      add
                    </span>
                  </div>
                </summary>
                <div className="border-t border-slate-50 p-6 pt-0 text-sm leading-relaxed text-slate-500">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </section>
      </main>

      <footer className="mt-24 border-t border-slate-100 bg-white py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
            <div className="flex items-center gap-2">
              <div className="flex size-8 items-center justify-center rounded bg-blue-600 text-white">
                <span className="material-symbols-outlined text-lg">grid_view</span>
              </div>
              <span className="text-sm font-extrabold tracking-tight text-slate-900">
                WEB<span className="text-blue-600">CARRÉ</span>
              </span>
            </div>
            <p className="text-[11px] font-bold uppercase tracking-widest text-slate-400">
              © 2024 Web carré — Créateurs d&apos;expériences digitales
            </p>
            <div className="flex gap-8">
              {footerLinks.map((link) => (
                <a
                  key={link}
                  className="text-[11px] font-bold uppercase tracking-widest text-slate-400 transition-colors hover:text-blue-600"
                  href="#"
                >
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
