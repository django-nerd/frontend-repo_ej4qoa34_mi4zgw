import { Check } from "lucide-react";

const benefits = [
  "Accès à vie et mises à jour",
  "Templates prêts à l'emploi (pages, emails, posts)",
  "Bonus: mini-cours vidéo lancement",
  "Support par email 7j/7",
];

export default function Pricing() {
  return (
    <section className="bg-white" id="acheter">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-extrabold text-slate-900 md:text-4xl">
              Obtenez l'ebook aujourd'hui
            </h2>
            <p className="mt-3 text-slate-600">
              Téléchargement instantané, accès à vie, et toutes les mises à jour incluses. Commencez à vendre dès cette semaine.
            </p>

            <ul className="mt-6 space-y-3">
              {benefits.map((b) => (
                <li key={b} className="flex items-start gap-3 text-slate-700">
                  <Check className="mt-1 h-5 w-5 text-green-600" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
            <div className="flex items-baseline justify-between">
              <div>
                <p className="text-sm uppercase tracking-wide text-slate-500">Pack Complet</p>
                <p className="mt-2 text-4xl font-extrabold text-slate-900">
                  29€ <span className="align-baseline text-base font-semibold text-slate-500 line-through">59€</span>
                </p>
              </div>
              <span className="rounded-full bg-green-600/10 px-3 py-1 text-xs font-semibold text-green-700 ring-1 ring-green-600/20">
                -50% aujourd'hui
              </span>
            </div>

            <a
              href="#paiement"
              className="mt-6 block rounded-lg bg-fuchsia-600 py-3 text-center font-semibold text-white shadow-lg shadow-fuchsia-500/30 transition hover:bg-fuchsia-700"
            >
              Procéder au paiement
            </a>
            <p className="mt-3 text-center text-sm text-slate-500">
              Paiement sécurisé. Remboursement 14 jours si vous n'êtes pas satisfait.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
