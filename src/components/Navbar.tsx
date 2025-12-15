import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, GraduationCap } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Training Flow", href: "#training-flow" },
    { label: "Certificate", href: "#certificate" },
    { label: "How to Host", href: "#hosting" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-card/95 backdrop-blur-md shadow-soft border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all ${
              isScrolled ? "bg-navy" : "bg-primary-foreground/10"
            }`}>
              <GraduationCap className={`w-5 h-5 ${isScrolled ? "text-primary-foreground" : "text-gold"}`} />
            </div>
            <span className={`font-display font-bold text-lg hidden sm:block ${
              isScrolled ? "text-foreground" : "text-primary-foreground"
            }`}>
              Sakthi Learning
            </span>
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-gold ${
                  isScrolled ? "text-muted-foreground" : "text-primary-foreground/80"
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:block">
            <Button variant={isScrolled ? "gold" : "hero"} size="default" asChild>
              <a 
                href="https://sakthionlinelearning.moodlecloud.com/course/view.php?id=9" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Start Training
              </a>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className={isScrolled ? "text-foreground" : "text-primary-foreground"} />
            ) : (
              <Menu className={isScrolled ? "text-foreground" : "text-primary-foreground"} />
            )}
          </button>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-card rounded-xl shadow-elevated border border-border p-4 mb-4">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-foreground hover:text-gold py-2 px-4 rounded-lg hover:bg-secondary transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <Button variant="gold" className="mt-2" asChild>
                <a 
                  href="https://sakthionlinelearning.moodlecloud.com/course/view.php?id=9" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Start Training
                </a>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
