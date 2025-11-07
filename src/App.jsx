import Hero from "./components/Hero";
import Features from "./components/Features";
import Testimonials from "./components/Testimonials";
import Pricing from "./components/Pricing";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-slate-900/70 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 text-white">
          <a href="#accueil" className="font-manrope text-lg font-extrabold tracking-tight">Ebook Pro</a>
          <nav className="hidden items-center gap-6 text-sm text-slate-200 md:flex">
            <a href="#features" className="hover:text-white">Fonctionnalités</a>
            <a href="#temoignages" className="hover:text-white">Témoignages</a>
            <a href="#acheter" className="hover:text-white">Prix</a>
            <a href="#acheter" className="rounded-md bg-fuchsia-600 px-4 py-2 font-semibold text-white hover:bg-fuchsia-700">Acheter</a>
          </nav>
        </div>
      </header>

      <main className="pt-16">
        <Hero />
        <Features />
        <Testimonials />
        <Pricing />
      </main>

      <Footer />
    </div>
  );
}

export default App;
