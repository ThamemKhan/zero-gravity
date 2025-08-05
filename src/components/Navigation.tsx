import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "Amenities", href: "#amenities" },
    { name: "Features", href: "#features" },
    { name: "Plans", href: "#plans" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 right-0 z-50 p-6">
      <div className="flex items-center justify-end">
        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-8 bg-card/90 backdrop-blur-md rounded-full px-6 py-3 border border-border/50">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-foreground hover:text-gym-primary transition-colors duration-300 font-medium"
            >
              {item.name}
            </a>
          ))}
          <Button variant="gym" size="sm" className="ml-4">
            <a href="#enquire">Enquire Now</a>
          </Button>
        </div>

        {/* Mobile Navigation */}
        <div className="lg:hidden">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsOpen(!isOpen)}
            className="text-foreground"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden absolute top-16 right-0 bg-card/95 backdrop-blur-md rounded-lg border border-border/50 p-6 min-w-[200px]">
          <div className="flex flex-col space-y-4">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-foreground hover:text-gym-primary transition-colors duration-300 font-medium"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <Button variant="gym" size="sm" className="mt-4">
              <a href="#enquire">Enquire Now</a>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;