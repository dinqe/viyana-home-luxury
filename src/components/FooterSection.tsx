import { MapPin, Phone, Mail, Instagram, Facebook } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const FooterSection = () => {
  const { t } = useLanguage();

  const quickLinks = [
    t("footer.ourSuites"),
    t("footer.amenities"),
    t("footer.guestReviews"),
    t("footer.privacy"),
    t("footer.terms"),
  ];

  return (
    <footer id="contact" className="bg-emerald-brand">
      <div className="section-padding border-b" style={{ borderColor: "hsla(40, 60%, 55%, 0.15)" }}>
        <div className="container mx-auto max-w-4xl text-center animate-on-scroll">
          <p className="font-sans text-sm tracking-[0.2em] uppercase text-gold mb-3">{t("footer.tagline")}</p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mb-6" style={{ color: "hsl(40, 30%, 95%)" }}>
            {t("footer.title")}
          </h2>
          <p className="font-sans text-base mb-8" style={{ color: "hsl(40, 20%, 75%)" }}>{t("footer.subtitle")}</p>
          <a
            href="tel:+905320615996"
            className="inline-flex items-center gap-3 bg-gold text-foreground font-sans font-semibold text-lg px-8 py-4 rounded-xl gold-glow gold-glow-hover transition-all duration-300 hover:scale-105"
          >
            <Phone size={20} />
            +90 532 061 59 96
          </a>
        </div>
      </div>

      <div className="px-4 sm:px-6 lg:px-8 py-12">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div>
              <span className="font-serif text-xl font-bold text-gold">Viyana Suit</span>
              <p className="font-sans text-sm mt-3 leading-relaxed" style={{ color: "hsl(40, 20%, 70%)" }}>
                {t("footer.brand")}
              </p>
            </div>

            <div>
              <h4 className="font-sans text-sm font-semibold uppercase tracking-wider text-gold mb-4">{t("footer.quickLinks")}</h4>
              <ul className="space-y-2">
                {quickLinks.map((link) => (
                  <li key={link}>
                    <span className="font-sans text-sm cursor-pointer hover:text-gold transition-colors" style={{ color: "hsl(40, 20%, 70%)" }}>
                      {link}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-sans text-sm font-semibold uppercase tracking-wider text-gold mb-4">{t("footer.contact")}</h4>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <MapPin size={16} className="text-gold mt-0.5 shrink-0" />
                  <a
                    href="https://maps.app.goo.gl/SBEdD1wykRVxne117"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-sans text-sm hover:text-gold transition-colors"
                    style={{ color: "hsl(40, 20%, 70%)" }}
                  >
                    Bağlarbaşı, Küçükköy Yolu Cd. No : 34, 34250 Gaziosmanpaşa/İstanbul
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Phone size={16} className="text-gold shrink-0" />
                  <a href="tel:+905320615996" className="font-sans text-sm hover:text-gold transition-colors" style={{ color: "hsl(40, 20%, 70%)" }}>
                    +90 532 061 59 96
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Mail size={16} className="text-gold shrink-0" />
                  <a href="mailto:info@viyanasuit.com" className="font-sans text-sm hover:text-gold transition-colors" style={{ color: "hsl(40, 20%, 70%)" }}>
                    info@viyanasuit.com
                  </a>
                </div>
                <div className="flex items-center gap-4 mt-4">
                  <a
                    href="https://www.instagram.com/viyanasuit/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gold/60 hover:text-gold transition-colors"
                    aria-label="Instagram"
                  >
                    <Instagram size={20} />
                  </a>
                  <a
                    href="https://www.facebook.com/p/Viyana-Suit-61568387053792/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gold/60 hover:text-gold transition-colors"
                    aria-label="Facebook"
                  >
                    <Facebook size={20} />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 pt-8 text-center" style={{ borderTop: "1px solid hsla(40, 60%, 55%, 0.1)" }}>
            <p className="font-sans text-xs" style={{ color: "hsl(40, 20%, 55%)" }}>
              © {new Date().getFullYear()} Viyana Suit. {t("footer.rights")}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
