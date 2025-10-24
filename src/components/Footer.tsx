import React from "react";

interface FooterProps {
  id: string;
}

const Footer: React.FC<FooterProps> = ({ id }) => {
  return (
    <footer id={id} className="py-8 bg-black text-gray-400 text-center border-t border-gray-800">
      <div className="container mx-auto px-6">
        <img
          src="/images/LOGO ROCKET EXPRESS BRANCA.png"
          alt="Rocket Express Logo"
          className="h-10 mx-auto mb-4"
        />
        <p className="mb-2">&copy; 2024 Rocket Express. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;