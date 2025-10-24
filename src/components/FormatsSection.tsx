import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface FormatsSectionProps {
  id: string;
}

const formats = [
  {
    title: "Entrega Expressa",
    description: "Ideal para urgências, garantimos a chegada do seu pacote no menor tempo possível, com rastreamento em tempo real.",
    image: "/images/Gemini_Generated_Image_sqi13csqi13csqi1.webp",
  },
  {
    title: "Entrega Programada",
    description: "Flexibilidade para agendar suas entregas, adaptando-se à sua necessidade e conveniência, sem abrir mão da pontualidade.",
    image: "/images/Gemini_Generated_Image_xt0by6xt0by6xt0b.webp",
  },
  {
    title: "Cargas Especiais",
    description: "Transporte seguro para itens sensíveis, de grande volume ou que exigem manuseio especializado, com equipe treinada.",
    image: "/images/Gemini_Generated_Image_eu0p8meu0p8meu0p.webp",
  },
];

const FormatsSection: React.FC<FormatsSectionProps> = ({ id }) => {
  return (
    <section id={id} className="py-20 bg-gray-950 text-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-red-500">Nossos Formatos de Entrega</h2>
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