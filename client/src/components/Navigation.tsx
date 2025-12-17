import { useState, useEffect } from "react";
import { Link } from "wouter";
import { cn } from "@/lib/utils";
import { Menu, X, Globe } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: t.nav.biography, href: "#biography" },
    { name: t.nav.statistics, href: "#statistics" },
    { name: t.nav.awards, href: "#awards" },
    { name: t.nav.teams, href: "#teams" },
  ];

  const toggleLanguage = () => {
    setLanguage(language === "pt" ? "en" : "pt");
  };

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300 px-6 py-4 md:px-12 md:py-6 flex justify-between items-center",
        isScrolled ? "bg-black/80 backdrop-blur-md border-b border-white/10" : "bg-transparent"
      )}
    >
      {/* Logo Area */}
      <div className="flex items-center gap-2 z-50">
        <Link href="/">
          <div className="cursor-pointer group">
            <span className="font-display text-2xl md:text-3xl text-white tracking-wider group-hover:text-jordan-red transition-colors duration-300">
              SM<span className="text-jordan-red">9</span>
            </span>
          </div>
        </Link>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center gap-8 lg:gap-12">
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className="text-sm uppercase tracking-[0.2em] text-gray-400 hover:text-white transition-colors duration-300 relative group"
          >
            {link.name}
            <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-jordan-red transition-all duration-300 group-hover:w-full"></span>
          </a>
        ))}
        
        {/* Language Toggle */}
        <button
          onClick={toggleLanguage}
          className="flex items-center gap-2 text-sm uppercase tracking-[0.2em] text-gray-400 hover:text-white transition-colors duration-300 relative group"
        >
          <Globe size={16} />
          <span>{language === "pt" ? "EN" : "PT"}</span>
          <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-jordan-red transition-all duration-300 group-hover:w-full"></span>
        </button>
      </div>

      {/* Mobile Menu Toggle */}
      <div className="md:hidden flex items-center gap-4 z-50">
        <button
          onClick={toggleLanguage}
          className="text-white flex items-center gap-1"
        >
          <Globe size={18} />
          <span className="text-xs uppercase">{language === "pt" ? "EN" : "PT"}</span>
        </button>
        <button 
          className="text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div 
        className={cn(
          "fixed inset-0 bg-black z-40 flex flex-col justify-center items-center gap-8 transition-all duration-500 md:hidden",
          isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
      >
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            onClick={() => setIsMobileMenuOpen(false)}
            className="font-display text-4xl text-white hover:text-jordan-red transition-colors uppercase tracking-widest"
          >
            {link.name}
          </a>
        ))}
      </div>
    </nav>
  );
}
