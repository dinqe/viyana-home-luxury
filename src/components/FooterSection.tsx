import { MapPin, Phone, Mail, Instagram, Facebook } from "lucide-react";

const FooterSection = () => {
  return (
    <footer id="contact" className="bg-emerald-brand">
      {/* Contact CTA */}
      <div className="section-padding border-b" style={{ borderColor: "hsla(40, 60%, 55%, 0.15)" }}>
        <div className="container mx-auto max-w-4xl text-center animate-on-scroll">
          <p className="font-sans text-sm tracking-[0.2em] uppercase text-gold mb-3">
            Ready to Book?
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mb-6" style={{ color: "hsl(40, 30%, 95%)" }}>
            Start Your Stay Today
          </h2>
          <p className="font-sans text-base mb-8" style={{ color: "hsl(40, 20%, 75%)" }}>
            Call us directly or send a message — we'd love to welcome you home.
          </p>
          <a
            href="tel:+905320615996"
            className="inline-flex items-center gap-3 bg-gold text-foreground font-sans font-semibold text-lg px-8 py-4 rounded-xl gold-glow gold-glow-hover transition-all duration-300 hover:scale-105"
          >
            <Phone size={20} />
            +90 532 061 59 96
          </a>
        </div>
      </div>

      {/* Footer links */}
      <div className="px-4 sm:px-6 lg:px-8 py-12">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Brand */}
            <div>
              <span className="font-serif text-xl font-bold text-gold">Viyana Suit</span>
              <p className="font-sans text-sm mt-3 leading-relaxed" style={{ color: "hsl(40, 20%, 70%)" }}>
                Gaziosmanpaşa's premier boutique hotel — where luxury meets the warmth of home.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-sans text-sm font-semibold uppercase tracking-wider text-gold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {["Our Suites", "Amenities", "Guest Reviews", "Privacy Policy", "Booking Terms"].map((link) => (
                  <li key={link}>
                    <span className="font-sans text-sm cursor-pointer hover:text-gold transition-colors" style={{ color: "hsl(40, 20%, 70%)" }}>
                      {link}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-sans text-sm font-semibold uppercase tracking-wider text-gold mb-4">Contact</h4>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <MapPin size={16} className="text-gold mt-0.5 shrink-0" />
                  <span className="font-sans text-sm" style={{ color: "hsl(40, 20%, 70%)" }}>
                    Gaziosmanpaşa, Istanbul, Türkiye
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone size={16} className="text-gold shrink-0" />
                  <a href="tel:+905320615996" className="font-sans text-sm hover:text-gold transition-colors" style={{ color: "hsl(40, 20%, 70%)" }}>
                    +90 532 061 59 96
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Mail size={16} className="text-gold shrink-0" />
                  <span className="font-sans text-sm" style={{ color: "hsl(40, 20%, 70%)" }}>
                    info@viyanasuit.com
                  </span>
                </div>
                <div className="flex items-center gap-4 mt-4">
                  <a href="#" className="text-gold/60 hover:text-gold transition-colors"><Instagram size={20} /></a>
                  <a href="#" className="text-gold/60 hover:text-gold transition-colors"><Facebook size={20} /></a>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 pt-8 text-center" style={{ borderTop: "1px solid hsla(40, 60%, 55%, 0.1)" }}>
            <p className="font-sans text-xs" style={{ color: "hsl(40, 20%, 55%)" }}>
              © {new Date().getFullYear()} Viyana Suit. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
