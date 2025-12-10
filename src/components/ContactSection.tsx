import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin } from "lucide-react"; // Removido Whatsapp, usando Phone
import { showError } from "@/utils/toast";

interface ContactSectionProps {
  id: string;
}

const ContactSection: React.FC<ContactSectionProps> = ({ id }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) {
      showError("Por favor, preencha todos os campos do formulário.");
      return;
    }

    const whatsappNumber = "554195226184"; // Número sem o '+'
    const prefilledMessage = `Olá, meu nome é ${name} e meu email é ${email}. Tenho uma mensagem para vocês: ${message}`;
    const encodedMessage = encodeURIComponent(prefilledMessage);
    
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, "_blank");

    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <section id={id} className="py-20 bg-gray-950 text-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-red-500 animate-fade-in-slide-up">Entre em Contato</h2>
        <p className="text-lg md:text-xl mb-12 text-gray-300 max-w-4xl mx-auto animate-fade-in-slide-up" style={{ animationDelay: '0.2s' }}>
          SUA DECISÃO MAIS LUCRATIVA É AGORA. SEM MENSALIDADE. SEM PEGADINHAS. VOCÊ SÓ PAGA PELA ENTREGA. Não perca mais tempo repassando sua margem de lucro. Cadastre sua empresa em minutos e comece a economizar e ter controle total sobre seu delivery imediatamente com a Rocket Express.
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Informações de Contato */}
          <div className="text-left bg-gray-900 p-8 rounded-lg shadow-lg border border-gray-800 animate-fade-in-slide-up" style={{ animationDelay: '0.4s' }}>
            <h3 className="text-3xl font-semibold mb-6 text-red-400">Fale Conosco</h3>
            <p className="text-lg mb-4 flex items-center">
              <Mail className="mr-3 text-red-500" size={24} />
              contato@rocketexpress.com.br
            </p>
            <p className="text-lg mb-4 flex items-center">
              <Phone className="mr-3 text-red-500" size={24} /> {/* Usando Phone para o WhatsApp */}
              +55 (41) 9522-6184
            </p>
            <p className="text-lg mb-4 flex items-start">
              <MapPin className="mr-3 text-red-500 flex-shrink-0" size={24} />
              Rua Exemplo, 123, Curitiba - Paraná
            </p>
            <p className="text-gray-400 mt-8">
              Estamos prontos para atender suas necessidades de transporte e logística.
              Envie-nos uma mensagem ou entre em contato pelos canais acima.
            </p>
          </div>

          {/* Formulário de Contato */}
          <div className="text-left bg-gray-900 p-8 rounded-lg shadow-lg border border-gray-800 animate-fade-in-slide-up" style={{ animationDelay: '0.6s' }}>
            <h3 className="text-3xl font-semibold mb-6 text-red-400">Envie uma Mensagem</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="name" className="text-lg text-gray-300">Nome</Label>
                <Input
                  id="name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="mt-2 bg-gray-800 border-gray-700 text-white placeholder:text-gray-500 focus:border-red-500 focus:ring-red-500 focus:ring-2 transition-all duration-200"
                  placeholder="Seu nome"
                />
              </div>
              <div>
                <Label htmlFor="email" className="text-lg text-gray-300">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="mt-2 bg-gray-800 border-gray-700 text-white placeholder:text-gray-500 focus:border-red-500 focus:ring-red-500 focus:ring-2 transition-all duration-200"
                  placeholder="seu.email@exemplo.com"
                />
              </div>
              <div>
                <Label htmlFor="message" className="text-lg text-gray-300">Mensagem</Label>
                <Textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="mt-2 bg-gray-800 border-gray-700 text-white placeholder:text-gray-500 focus:border-red-500 focus:ring-red-500 focus:ring-2 transition-all duration-200 min-h-[120px]"
                  placeholder="Sua mensagem..."
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-red-600 hover:bg-red-700 text-white text-base lg:text-lg py-3 lg:py-4 rounded-md transition-colors duration-300 shadow-md hover:shadow-red-500/50 whitespace-normal"
              >
                ENVIAR MENSAGEM VIA WHATSAPP
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;