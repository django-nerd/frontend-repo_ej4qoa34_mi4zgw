export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-6xl px-6 py-10">
        <div className="flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
          <p className="text-sm text-slate-600">
            © {year} Votre Marque. Tous droits réservés.
          </p>
          <nav className="flex items-center gap-4 text-sm text-slate-600">
            <a href="#features" className="hover:text-slate-900">Fonctionnalités</a>
            <a href="#temoignages" className="hover:text-slate-900">Témoignages</a>
            <a href="#acheter" className="hover:text-slate-900">Acheter</a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
