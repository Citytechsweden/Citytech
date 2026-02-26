import { Header } from "@/app/components/Header";
import { Hero } from "@/app/components/Hero";
import { Services } from "@/app/components/Services";
import { Portfolio } from "@/app/components/Portfolio";
import { Technologies } from "@/app/components/Technologies";
import { About } from "@/app/components/About";
import { Contact } from "@/app/components/Contact";
import { Footer } from "@/app/components/Footer";

export function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Services />
        <Portfolio />
        <Technologies />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
