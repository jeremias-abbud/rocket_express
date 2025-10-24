import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { CheckCircle } from "lucide-react";

interface AdvantagesSectionProps {
  id: string;
}

const advantages = [
  {
    title: "Agilidade e Pontualidade",
    description: "Nossa frota e equipe são otimizadas para garantir que suas entregas cheguem sempre no prazo, com a máxima eficiência.",
  },
  {
    title: "Segurança Total",
    description: "Oferecemos monitoramento em tempo real e seguro completo para a tranquilidade de seus envios, do ponto de partida ao destino.",
  },
  {
    title: "Atendimento Personalizado",
    description: "Suporte dedicado para entender e atender às suas necessidades logísticas específicas, com soluções sob medida para seu negócio.",
  },
  {
    title: "Tecnologia de Ponta",
    description: "Utilizamos as melhores ferramentas e sistemas para otimizar rotas, rastrear suas encomendas e garantir a melhor experiência.",
  },
];

const AdvantagesSection: React.FC<AdvantagesSectionProps> = ({ id }) => {
  return (
    <section id={id} className="py-20 bg-black text-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-red-500">Por Que Escolher a Rocket Express?</h2>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {advantages.map((advantage, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b border-gray-800">
                <AccordionTrigger className="text-xl md:text-2xl text-left hover:no-underline text-red-400 hover:text-red-500 transition-colors">
                  <CheckCircle className="inline-block mr-3 text-red-500" size={24} />
                  {advantage.title}
                </AccordionTrigger>
                <AccordionContent className="text-gray-300 text-base md:text-lg text-left p-4">
                  {advantage.description}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default AdvantagesSection;