import React from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface HeroSlideProps {
  title: string;
  description: string;
  buttonText: string;
  buttonHref: string;
  backgroundImage: string;
  animationDelay?: string;
}

const HeroSlide: React.FC<HeroSlideProps> = ({
  title,
  description,
  buttonText,
  buttonHref,
  backgroundImage,
  animationDelay = '0s',
}) => {
  return (
    <div
      className="relative h-screen flex items-center justify-center text-center text-white overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url('${backgroundImage}')` }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent opacity-90"></div>
      </div>
      <div className="relative z-10 p-6 max-w-4xl mx-auto">
        <h1
          className="text-xl sm:text-3xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-4 animate-fade-in-slide-up"
          style={{ animationDelay: cn(animationDelay, '0.2s') }}
        >
          {title}
        </h1>
        <p
          className="text-sm sm:text-base md:text-lg lg:text-xl mb-8 animate-fade-in-slide-up"
          style={{ animationDelay: cn(animationDelay, '0.4s') }}
        >
          {description}
        </p>
        <Button
          asChild
          className="bg-red-600 hover:bg-red-700 text-white text-sm px-3 py-2 sm:px-6 sm:py-4 md:px-8 md:py-6 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 animate-fade-in-slide-up animate-pulse-glow w-full max-w-xs sm:max-w-none whitespace-normal"
          style={{ animationDelay: cn(animationDelay, '0.6s') }}
        >
          <a href={buttonHref}>{buttonText}</a>
        </Button>
      </div>
    </div>
  );
};

export default HeroSlide;