import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Industries } from "@/components/Industries";
import { CTASection, Footer } from "@/components/Footer";

export default function Index() {
  return (
    <div className="min-h-screen bg-primary-500">
      <Header />
      <Hero />
      <Services />
      <Industries />
      <CTASection />
      <Footer />
    </div>
  );
}
