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

        <div
          className="flex flex-col items-center gap-1.5 mt-6 opacity-0 animate-fade-up"
          style={{ animationDelay: "1s" }}
        >
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-5 h-5 text-gold" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <p className="font-sans text-sm tracking-wide" style={{ color: "hsl(40, 50%, 80%)" }}>
            Based on <span className="font-semibold text-gold">200+</span> Guest Reviews
          </p>
        </div>
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
