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
    title: "LUCRO MÁXIMO",
    description: "Garantimos as melhores taxas do mercado, gerando economia imediata.",
  },
  {
    title: "TECNOLOGIA PARA VENDER MAIS",
    description: "Integração automática com seus principais canais de venda (Ex: iFood, Saipos, Cardapioweb, etc.), permitindo que você crie rotas inteligentes e envie rastreamento em tempo real para o cliente.",
  },
  {
    title: "CONTROLE É SEU",
    description: "Você escolhe: tenha o controle manual total de rotas e despachos ou deixe nosso sistema no modo automático, cuidando de toda a chamada do entregador até a entrega. Seu estabelecimento só se preocupa em preparar o pedido.",
  },
  {
    title: "SEGURANÇA JURÍDICA",
    description: "Nossa intermediação permite que você utilize entregadores autônomos sem criar vínculo trabalhista.",
  },
  {
    title: "GESTÃO COMPLETA",
    description: "Relatórios financeiros e operacionais detalhados para você saber exatamente onde seu dinheiro está sendo investido.",
  },
  {
    title: "SUPORTE DE VERDADE",
    description: "Equipe dedicada de atendimento de prontidão para solucionar qualquer problema, garantindo que sua operação nunca pare.",
  },
];

const AdvantagesSection: React.FC<AdvantagesSectionProps> = ({ id }) => {
  return (
    <section id={id} className="py-20 bg-black text-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-red-500 animate-fade-in-slide-up">O Pacote de Vantagens</h2>
        <p className="text-lg md:text-xl mb-12 text-gray-300 max-w-4xl mx-auto animate-fade-in-slide-up" style={{ animationDelay: '0.2s' }}>
          O QUE VOCÊ GANHA AO MIGRAR PARA A ROCKET EXPRESS.
        </p>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {advantages.map((advantage, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border-b border-gray-800 data-[state=open]:border-red-500 transition-all duration-300 animate-fade-in-slide-up"
                style={{ animationDelay: `${0.4 + index * 0.1}s` }}
              >
                <AccordionTrigger className="text-xl md:text-2xl text-left hover:no-underline text-red-400 hover:text-red-500 transition-colors flex items-center p-4">
                  <CheckCircle className="inline-block mr-3 text-red-500 flex-shrink-0" size={24} />
                  {advantage.title}
                </AccordionTrigger>
                <AccordionContent className="text-gray-300 text-base md:text-lg text-left p-4 bg-gray-900 border-t border-gray-800 data-[state=open]:border-red-500 transition-all duration-300">
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