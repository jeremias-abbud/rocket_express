import React from "react";
import { Button } from "@/components/ui/button";

interface HeroSectionProps {
  id: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ id }) => {
  return (
    <section
      id={id}
      className="relative h-screen flex items-center justify-center text-center text-white overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/Gemini_Generated_Image_2enjmi2enjmi2enj.webp')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent opacity-90"></div>
      </div>
      <div className="relative z-10 p-6 max-w-4xl mx-auto">
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold leading-tight mb-4 animate-fade-in-slide-up" style={{ animationDelay: '0.2s' }}>
          PARE DE PERDER LUCRO. ASSUMA O CONTROLE TOTAL DAS SUAS ENTREGAS.
        </h1>
        <p className="text-base sm:text-lg md:text-xl mb-8 animate-fade-in-slide-up" style={{ animationDelay: '0.4s' }}>
          O seu negócio merece mais lucratividade. A Rocket Express transforma a logística de um custo alto em sua vantagem competitiva. Somos a plataforma que conecta sua empresa a uma rede de entregadores autônomos, focada em segurança, agilidade e, o mais importante, na sua economia.
        </p>
        <Button
          asChild
          className="bg-red-600 hover:bg-red-700 text-white text-lg px-8 py-6 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 animate-fade-in-slide-up animate-pulse-glow"
          style={{ animationDelay: '0.6s' }}
        >
          <a href="#contato">QUERO CADASTRAR MINHA EMPRESA E LUCRAR MAIS</a>
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;