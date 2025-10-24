import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import FormatsSection from "@/components/FormatsSection";
import AdvantagesSection from "@/components/AdvantagesSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <main className="pt-[72px] md:pt-[80px]"> {/* Ajuste para a altura do cabeçalho fixo */}
        <HeroSection id="inicio" />
        <FormatsSection id="formatos" />
        <AdvantagesSection id="vantagens" />
        <ContactSection id="contato" />
      </main>
      <Footer id="footer" />
    </div>
  );
};

export default Index;