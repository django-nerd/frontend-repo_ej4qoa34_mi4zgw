import { Rocket, BookOpen, Star, ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 text-white" id="accueil">
      <div className="absolute inset-0 opacity-30" aria-hidden>
        <div className="pointer-events-none absolute -top-40 left-1/2 h-80 w-[60rem] -translate-x-1/2 rounded-full bg-fuchsia-500 blur-[120px]" />
        <div className="pointer-events-none absolute -bottom-40 left-1/3 h-80 w-[50rem] -translate-x-1/2 rounded-full bg-indigo-500 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6 pt-24 pb-16 md:pt-28 md:pb-24">
        <div className="flex flex-col items-center text-center">
          <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1 text-sm font-medium backdrop-blur">
            <Rocket className="h-4 w-4 text-fuchsia-300" />
            Nouvelle édition 2025
          </span>
          <h1 className="font-manrope text-4xl font-extrabold leading-tight tracking-tight md:text-6xl">
            Vendez plus avec un ebook irrésistible
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-slate-300 md:text-xl">
            Un guide complet pour créer, lancer et automatiser la vente de votre ebook. Stratégies, templates et outils prêts à l'emploi.
          </p>

          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row">
            <a
              href="#acheter"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-fuchsia-500 px-6 py-3 text-base font-semibold text-white shadow-lg shadow-fuchsia-500/30 transition hover:bg-fuchsia-600 focus:outline-none focus:ring-2 focus:ring-fuchsia-400"
            >
              Acheter maintenant
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#extrait"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/20 px-6 py-3 text-base font-semibold text-white/90 transition hover:bg-white/10"
            >
              Voir un extrait
              <BookOpen className="h-4 w-4" />
            </a>
          </div>

          <div className="mt-8 flex items-center gap-4 text-sm text-slate-300">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span>4.9/5 basé sur 1 200+ lecteurs</span>
          </div>

          <div className="relative mt-14 w-full max-w-4xl">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-3 backdrop-blur">
              <img
                src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=1600&auto=format&fit=crop"
                alt="Couverture de l'ebook"
                className="h-auto w-full rounded-xl object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
