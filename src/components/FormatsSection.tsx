import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface FormatsSectionProps {
  id: string;
}

const formats = [
  {
    title: "NUVEM (Sob Demanda)",
    description: "Zero ociosidade. Acione um motoboy apenas quando o pedido estiver pronto. Pague por uso, sem compromisso.",
    image: "/images/Gemini_Generated_Image_sqi13csqi13csqi1.webp",
  },
  {
    title: "ENTREGADORES DEDICADOS EXCLUSIVOS",
    description: "Garanta uma equipe fixa no seu estabelecimento, com o mesmo alto padrão de sempre, sem o risco de vínculo trabalhista.",
    image: "/images/Gemini_Generated_Image_xt0by6xt0by6xt0b.webp",
  },
  {
    title: "MODO HÍBRIDO (A FÓRMULA DO SUCESSO)",
    description: "Sua solução definitiva. Use seus dedicados no pico e acione o modo Nuvem para cobrir a demanda extra. Logística perfeita, custo otimizado e lucratividade máxima.",
    image: "/images/Gemini_Generated_Image_eu0p8meu0p8meu0p.webp",
  },
];

const FormatsSection: React.FC<FormatsSectionProps> = ({ id }) => {
  return (
    <section id={id} className="py-20 bg-gray-950 text-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-red-500">Vantagem Competitiva e Modelos de Entrega</h2>
        <p className="text-lg md:text-xl mb-12 text-gray-300 max-w-4xl mx-auto">
          A DECISÃO INTELIGENTE: LUCRE ATÉ 50% MAIS E TENHA LOGÍSTICA FEITA PARA VOCÊ. Chega de perder margem. Se você vende em Marketplaces, a Rocket não apenas corta seu custo de entrega em 30% a 50%, como também lhe entrega o controle operacional que o seu negócio implora. Tome as rédeas do seu delivery com as únicas modalidades 100% flexíveis do mercado. Sua vida de empresário muito mais fácil e lucrativa:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {formats.map((format, index) => (
            <Card key={index} className="bg-gray-900 border-gray-800 text-white shadow-lg hover:shadow-red-500/30 transition-shadow duration-300">
              <CardHeader>
                <img
                  src={format.image}
                  alt={format.title}
                  className="w-full h-48 object-cover rounded-t-lg mb-4"
                />
                <CardTitle className="text-2xl font-semibold text-red-400">{format.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-300 text-base">
                  {format.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FormatsSection;