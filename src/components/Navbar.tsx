"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Anasayfa", href: "/" },
    { name: "Eşsiz Performans", href: "/#performance" },
    { name: "Fiyatlandırma", href: "/#pricing" },
    { name: "İletişim", href: "/contact" },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-black/90 backdrop-blur-md py-4 border-b border-gray-800" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-3 group">
          <div className="relative w-10 h-10 overflow-hidden rounded-lg border border-primary/20 group-hover:border-primary/50 transition-colors">
            <img 
              src="/logo.png" 
              alt="Servet Akademisi Logo" 
              className="w-full h-full object-cover"
            />
          </div>
          <span className="text-xl md:text-2xl font-serif font-bold text-primary tracking-tighter">
            Servet<span className="text-white">Akademisi</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm uppercase tracking-widest text-gray-400 hover:text-primary transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/#pricing"
            className="bg-primary text-black px-6 py-2 rounded-full text-sm font-bold hover:shadow-gold-glow transition-all"
          >
            BAŞLA
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-gray-900 border-b border-gray-800"
          >
            <div className="container mx-auto px-6 py-8 flex flex-col space-y-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-lg uppercase tracking-widest text-gray-300 hover:text-primary"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                href="/#pricing"
                className="bg-primary text-black px-6 py-3 rounded-full text-center font-bold"
                onClick={() => setIsOpen(false)}
              >
                HEMEN BAŞLA
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
