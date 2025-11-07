import { Shield, Clock, Sparkles, Download } from "lucide-react";

const features = [
  {
    icon: Sparkles,
    title: "Méthode pas-à-pas",
    desc: "Un plan clair de l'idée au lancement, avec des checklists à chaque étape.",
  },
  {
    icon: Shield,
    title: "Stratégies validées",
    desc: "Techniques de copywriting et de vente testées sur des milliers d'ebooks.",
  },
  {
    icon: Clock,
    title: "Gagnez du temps",
    desc: "Templates de pages, séquences email et posts prêts à adapter.",
  },
  {
    icon: Download,
    title: "Accès immédiat",
    desc: "Téléchargement instantané + mises à jour gratuites à vie.",
  },
];

export default function Features() {
  return (
    <section className="bg-white" id="features">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold text-slate-900 md:text-4xl">
            Tout ce qu'il faut pour vendre votre ebook
          </h2>
          <p className="mt-3 text-slate-600">
            Conçu pour transformer vos connaissances en revenus récurrents.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="inline-flex rounded-lg bg-fuchsia-50 p-3 text-fuchsia-600 ring-1 ring-fuchsia-100">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">{title}</h3>
              <p className="mt-2 text-sm text-slate-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
