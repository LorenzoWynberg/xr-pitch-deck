"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronUp, ChevronDown } from "lucide-react";

const slides = [
  { id: "hero", label: "Home" },
  { id: "who-we-are", label: "Who We Are" },
  { id: "brands", label: "Our Brands" },
  { id: "team", label: "Team" },
  { id: "calendar", label: "Calendar" },
  { id: "growth", label: "Growth" },
  { id: "funds", label: "Use of Funds" },
  { id: "sponsors", label: "Partners" },
  { id: "valuation", label: "Valuation" },
  { id: "financing", label: "Financing" },
  { id: "benefits", label: "Benefits" },
  { id: "summary", label: "Summary" },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSlide, setActiveSlide] = useState("hero");
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Hide nav on scroll down, show on scroll up
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setShowNav(false);
      } else {
        setShowNav(true);
      }
      setLastScrollY(currentScrollY);

      // Update active slide based on scroll position
      const sections = slides.map(s => document.getElementById(s.id)).filter(Boolean);
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSlide(slides[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const scrollToSlide = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  const currentIndex = slides.findIndex(s => s.id === activeSlide);

  const goToPrevious = () => {
    if (currentIndex > 0) {
      scrollToSlide(slides[currentIndex - 1].id);
    }
  };

  const goToNext = () => {
    if (currentIndex < slides.length - 1) {
      scrollToSlide(slides[currentIndex + 1].id);
    }
  };

  return (
    <>
      {/* Top navigation bar */}
      <motion.nav
        className="fixed top-0 left-0 right-0 z-50 px-6 py-4 bg-background/95 backdrop-blur-md md:bg-transparent md:backdrop-blur-none"
        initial={{ y: -100 }}
        animate={{ y: showNav ? 0 : -100 }}
        transition={{ duration: 0.3 }}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <motion.div
            className="font-black text-xl tracking-tighter"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <span className="text-gradient">XR Studio</span>
          </motion.div>

          {/* Progress indicator */}
          <div className="hidden md:flex items-center gap-2">
            {slides.map((slide, index) => (
              <button
                key={slide.id}
                onClick={() => scrollToSlide(slide.id)}
                className="group relative"
                title={slide.label}
              >
                <div
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    activeSlide === slide.id
                      ? "bg-purple-500 w-6"
                      : "bg-white/30 hover:bg-white/50"
                  }`}
                />
                <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  {slide.label}
                </span>
              </button>
            ))}
          </div>

          {/* Menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="glass rounded-full p-3 hover:bg-white/10 transition-colors"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </motion.nav>

      {/* Slide navigation (right side) */}
      <motion.div
        className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col items-center gap-4"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: showNav ? 1 : 0, x: showNav ? 0 : 50 }}
        transition={{ duration: 0.3 }}
      >
        <button
          onClick={goToPrevious}
          disabled={currentIndex === 0}
          className="glass rounded-full p-2 hover:bg-white/10 transition-colors disabled:opacity-30"
        >
          <ChevronUp className="w-4 h-4" />
        </button>

        <div className="glass rounded-full px-3 py-2 text-xs font-medium">
          {currentIndex + 1}/{slides.length}
        </div>

        <button
          onClick={goToNext}
          disabled={currentIndex === slides.length - 1}
          className="glass rounded-full p-2 hover:bg-white/10 transition-colors disabled:opacity-30"
        >
          <ChevronDown className="w-4 h-4" />
        </button>
      </motion.div>

      {/* Full screen menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-background/95 backdrop-blur-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="container mx-auto px-6 py-24 h-full flex items-center justify-center">
              <nav className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {slides.map((slide, index) => (
                  <motion.button
                    key={slide.id}
                    onClick={() => scrollToSlide(slide.id)}
                    className={`text-left p-6 rounded-2xl transition-all ${
                      activeSlide === slide.id
                        ? "glass border border-purple-500/50"
                        : "hover:bg-white/5"
                    }`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <span className="text-sm text-muted-foreground mb-2 block">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="text-xl font-bold">{slide.label}</span>
                  </motion.button>
                ))}
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
