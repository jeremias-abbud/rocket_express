import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

const navItems = [
  { name: "Início", href: "#inicio" },
  { name: "Formatos", href: "#formatos" },
  { name: "Vantagens", href: "#vantagens" },
  { name: "Contato", href: "#contato" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavLinkClick = () => {
    setIsOpen(false); // Fecha o menu mobile ao clicar em um link
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black bg-opacity-90 backdrop-blur-sm py-4 px-6 border-b border-gray-800 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="#inicio" className="flex items-center" onClick={handleNavLinkClick}>
          <img
            src="/images/LOGO ROCKET EXPRESS BRANCA.png"
            alt="Rocket Express Logo"
            className="h-8 md:h-10"
          />
        </Link>

        {/* Desktop Navigation */}
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>
            {navItems.map((item) => (
              <NavigationMenuItem key={item.name}>
                <NavigationMenuLink
                  asChild
                  className={cn(navigationMenuTriggerStyle(), "bg-transparent text-white hover:text-red-500")}
                >
                  <a href={item.href} onClick={handleNavLinkClick}>
                    {item.name}
                  </a>
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        {/* Mobile Navigation */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" className="text-white">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Abrir menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="bg-gray-950 text-white border-gray-800">
            <div className="flex flex-col items-start space-y-4 pt-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={handleNavLinkClick}
                  className="text-lg font-medium hover:text-red-500 transition-colors"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Header;