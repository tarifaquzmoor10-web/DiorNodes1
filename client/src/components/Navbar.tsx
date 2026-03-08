import { useState, useEffect } from "react";
import { Link } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Server } from "lucide-react";
import { cn } from "@/lib/utils";

const links = [
  { name: "Home", href: "#home" },
  { name: "Plans", href: "#plans" },
  { name: "Features", href: "#features" },
  { name: "Support", href: "#support" },
  { name: "Discord", href: "https://discord.gg/PghzUW3cvJ", external: true },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        setMobileMenuOpen(false);
      }
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 sm:px-6 lg:px-8",
          scrolled ? "py-4" : "py-6"
        )}
      >
        <div className={cn(
          "max-w-7xl mx-auto flex items-center justify-between rounded-2xl transition-all duration-300",
          scrolled ? "glass-panel px-6 py-3" : "px-2 py-2"
        )}>
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-[#00F0FF] to-[#8A2BE2] shadow-[0_0_20px_rgba(0,240,255,0.4)] group-hover:shadow-[0_0_25px_rgba(138,43,226,0.6)] transition-all duration-300">
              <Server className="w-5 h-5 text-white" />
            </div>
            <span className="font-display font-bold text-xl sm:text-2xl tracking-wide text-white">
              Dior <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00F0FF] to-[#8A2BE2]">Nodes</span>
            </span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                className="text-sm font-medium text-white/70 hover:text-white transition-colors duration-200 relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#00F0FF] to-[#8A2BE2] transition-all duration-300 group-hover:w-full rounded-full"></span>
              </a>
            ))}
          </div>

          {/* Action Button & Mobile Toggle */}
          <div className="flex items-center gap-4">
            <a 
              href="https://panel.diornodes.cloud"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center justify-center px-6 py-2.5 text-sm font-bold text-white rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 hover:scale-105 transition-all duration-300 backdrop-blur-md"
            >
              Client Panel
            </a>
            
            <button 
              className="md:hidden p-2 text-white/80 hover:text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-[#05050A]/95 backdrop-blur-xl pt-28 px-6 flex flex-col gap-6"
          >
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                className="text-2xl font-display font-semibold text-white/90 hover:text-white border-b border-white/10 pb-4"
              >
                {link.name}
              </a>
            ))}
            <a 
              href="https://panel.diornodes.cloud"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 flex items-center justify-center px-6 py-4 text-lg font-bold text-white rounded-xl bg-gradient-to-r from-[#00F0FF] to-[#8A2BE2] shadow-[0_0_30px_rgba(138,43,226,0.3)]"
            >
              Client Panel
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
