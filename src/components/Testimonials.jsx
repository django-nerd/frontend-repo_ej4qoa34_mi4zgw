import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Amine B.",
    role: "Coach business",
    text:
      "Grâce à ce guide j'ai lancé mon premier ebook en 10 jours et j'ai fait 4 300€ le premier mois.",
  },
  {
    name: "Sarah L.",
    role: "Créatrice de contenu",
    text:
      "Les templates m'ont fait gagner un temps fou. Tout est clair et actionnable.",
  },
  {
    name: "Yacine M.",
    role: "Freelance",
    text:
      "J'utilise les stratégies d'email décrites et mes ventes sont enfin régulières.",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-slate-50" id="temoignages">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold text-slate-900 md:text-4xl">Ils ont déjà des résultats</h2>
          <p className="mt-3 text-slate-600">Des centaines de créateurs ont utilisé ce guide pour vendre plus.</p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure key={t.name} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <Quote className="h-6 w-6 text-fuchsia-500" />
              <blockquote className="mt-3 text-slate-700">{t.text}</blockquote>
              <figcaption className="mt-4 text-sm font-medium text-slate-900">
                {t.name}
                <span className="ml-2 font-normal text-slate-500">• {t.role}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
