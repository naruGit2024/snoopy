import { Header } from "./components/header";
import { Hero } from "./components/hero";
import { AboutSection } from "./components/about-section";
import { PersonasSection } from "./components/personas-section";
import { GallerySection } from "./components/gallery-section";
import { FunFactsSection } from "./components/fun-facts-section";
import { Footer } from "./components/footer";

export default function App() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <AboutSection />
        <PersonasSection />
        <GallerySection />
        <FunFactsSection />
      </main>
      <Footer />
    </div>
  );
}