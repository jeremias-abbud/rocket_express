import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import HeroSlide from "./HeroSlide";

interface HeroSectionProps {
  id: string;
}

const slides = [
  {
    title: "PARE DE PERDER LUCRO. ASSUMA O CONTROLE TOTAL DAS SUAS ENTREGAS.",
    description:
      "O seu negócio merece mais lucratividade. A Rocket Express transforma a logística de um custo alto em sua vantagem competitiva. Somos a plataforma que conecta sua empresa a uma rede de entregadores autônomos, focada em segurança, agilidade e, o mais importante, na sua economia.",
    buttonText: "QUERO CADASTRAR MINHA EMPRESA E LUCRAR MAIS",
    buttonHref: "#contato",
    backgroundImage: "/images/Gemini_Generated_Image_2enjmi2enjmi2enj.webp",
  },
  {
    title: "Tecnologia de Gestão de Entregas: Mais Lucro e Velocidade para Seu Comércio",
    description:
      "Esta é uma solução de logística com alta tecnologia criada para dar ao seu comércio o controle total das suas entregas. O sistema usa algoritmos inteligentes para calcular as rotas mais rápidas e distribuir pedidos de forma otimizada, garantindo entregas mais velozes e a redução de custos. Oferecendo monitoramento em tempo real do pedido, você eleva a satisfação do cliente e constrói um serviço de delivery mais eficiente e lucrativo para o seu negócio.",
    buttonText: "QUERO CADASTRAR MINHA EMPRESA E LUCRAR MAIS",
    buttonHref: "#contato",
    backgroundImage: "/images/OKR0RO1-1-1024x619.webp",
  },
];

const HeroSection: React.FC<HeroSectionProps> = ({ id }) => {
  return (
    <section id={id} className="relative w-full">
      <Carousel className="w-full">
        <CarouselContent>
          {slides.map((slide, index) => (
            <CarouselItem key={index}>
              <HeroSlide {...slide} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 z-20 text-white bg-black/50 hover:bg-black/70 border-none" />
        <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 z-20 text-white bg-black/50 hover:bg-black/70 border-none" />
      </Carousel>
    </section>
  );
};

export default HeroSection;