import { useState, useEffect } from "react";
import { Menu, X, Globe } from "lucide-react";
import BookingDialog from "./BookingDialog";
import { useLanguage } from "@/contexts/LanguageContext";

const Navbar = () => {
  const { lang, setLang, t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { label: t("nav.home"), href: "#hero" },
    { label: t("nav.amenities"), href: "#amenities" },
    { label: t("nav.suites"), href: "#suites" },
    { label: t("nav.reviews"), href: "#testimonials" },
    { label: t("nav.contact"), href: "#contact" },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = (href: string) => {
    setMobileOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  const toggleLang = () => setLang(lang === "en" ? "tr" : "en");

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "glass-nav shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4 sm:px-6 py-4">
        <a href="#hero" onClick={() => handleClick("#hero")} className="flex flex-col leading-none">
          <span className="font-serif text-xl md:text-2xl font-bold tracking-wide text-gold">
            Viyana Suit
          </span>
          <span className={`text-[10px] tracking-[0.25em] uppercase font-sans font-light ${scrolled ? "text-muted-foreground" : "text-primary-foreground/70"}`}>
            {t("nav.motto")}
          </span>
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleClick(link.href)}
              className={`text-sm font-sans font-medium tracking-wide transition-colors hover:text-gold ${
                scrolled ? "text-foreground" : "text-primary-foreground/90"
              }`}
            >
              {link.label}
            </button>
          ))}

          {/* Language Toggle */}
          <button
            onClick={toggleLang}
            className={`flex items-center gap-1.5 text-sm font-sans font-semibold tracking-wide px-3 py-1.5 rounded-full border transition-all duration-300 hover:scale-105 ${
              scrolled
                ? "border-gold/40 text-foreground hover:border-gold hover:text-gold"
                : "border-primary-foreground/30 text-primary-foreground/90 hover:border-gold hover:text-gold"
            }`}
          >
            <Globe size={14} />
            {lang === "en" ? "TR" : "EN"}
          </button>

          <BookingDialog>
            <button className="bg-gold text-foreground font-sans text-sm font-semibold px-5 py-2.5 rounded-lg gold-glow gold-glow-hover transition-all duration-300 hover:scale-105">
              {t("nav.book")}
            </button>
          </BookingDialog>
        </div>

        {/* Mobile toggle */}
        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={toggleLang}
            className={`flex items-center gap-1 text-xs font-sans font-semibold px-2.5 py-1.5 rounded-full border transition-colors ${
              scrolled
                ? "border-gold/40 text-foreground"
                : "border-primary-foreground/30 text-primary-foreground/90"
            }`}
          >
            <Globe size={12} />
            {lang === "en" ? "TR" : "EN"}
          </button>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`p-2 ${scrolled ? "text-foreground" : "text-primary-foreground"}`}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden glass-nav border-t border-border/50 animate-fade-in">
          <div className="flex flex-col px-6 py-4 gap-4">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleClick(link.href)}
                className="text-left font-sans text-sm font-medium text-foreground hover:text-gold transition-colors"
              >
                {link.label}
              </button>
            ))}
            <BookingDialog>
              <button className="bg-gold text-foreground font-sans text-sm font-semibold px-5 py-2.5 rounded-lg gold-glow text-center w-full">
                {t("nav.book")}
              </button>
            </BookingDialog>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
