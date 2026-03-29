import heroImg from "@/assets/hero-hotel.jpg";
import BookingDialog from "./BookingDialog";

const HeroSection = () => {
  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <img
        src={heroImg}
        alt="Luxurious Viyana Suit hotel room"
        className="absolute inset-0 w-full h-full object-cover"
        width={1920}
        height={1080}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 text-center max-w-4xl">
        <p
          className="font-sans text-sm md:text-base tracking-[0.3em] uppercase text-gold mb-6 animate-fade-up"
          style={{ animationDelay: "0.2s" }}
        >
          Gaziosmanpaşa's Premier Boutique Hotel
        </p>
        <h1
          className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 opacity-0 animate-fade-up"
          style={{ animationDelay: "0.4s", color: "hsl(40, 30%, 95%)" }}
        >
          Experience Luxury
          <br />
          <span className="italic font-medium text-gold">Like Your Own Home</span>
        </h1>
        <p
          className="font-sans text-base md:text-lg max-w-2xl mx-auto mb-10 opacity-0 animate-fade-up"
          style={{ animationDelay: "0.6s", color: "hsl(40, 20%, 85%)" }}
        >
          Welcome to Viyana Suit, Gaziosmanpaşa's premier destination for unmatched
          hygiene, comfort, and sincere Turkish hospitality.
        </p>
        <BookingDialog>
          <button
            className="bg-gold text-foreground font-sans font-semibold text-base md:text-lg px-8 py-4 rounded-xl gold-glow gold-glow-hover transition-all duration-300 hover:scale-105 opacity-0 animate-fade-up"
            style={{ animationDelay: "0.8s" }}
          >
            Check Availability
          </button>
        </BookingDialog>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce opacity-60">
        <div className="w-6 h-10 border-2 rounded-full flex items-start justify-center p-1" style={{ borderColor: "hsl(40, 60%, 55%)" }}>
          <div className="w-1.5 h-2.5 rounded-full bg-gold animate-fade-in" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
