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
        <div className="absolute inset-0 bg-black opacity-70"></div>
      </div>
      <div className="relative z-10 p-6 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4 animate-fade-in-up">
          Rocket Express: Sua Entrega Rápida e Confiável
        </h1>
        <p className="text-lg md:text-xl mb-8 animate-fade-in-up delay-200">
          Soluções logísticas inovadoras para o seu negócio, com agilidade e segurança em cada envio.
        </p>
        <Button
          asChild
          className="bg-red-600 hover:bg-red-700 text-white text-lg px-8 py-6 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 animate-fade-in-up delay-400"
        >
          <a href="#formatos">Conheça Nossos Serviços</a>
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;