import { Sparkles, Coffee, Clock, ShieldCheck } from "lucide-react";

const amenities = [
  {
    icon: Sparkles,
    title: "Spotless & Ultra-Hygienic Rooms",
    description: "Every room is meticulously cleaned and sanitized to the highest standards — because your comfort starts with cleanliness.",
  },
  {
    icon: Coffee,
    title: "Complimentary Signature Treats",
    description: "Enjoy free fruit platters, snack plates, cookies, and unlimited tea & coffee delivered directly to your room.",
  },
  {
    icon: Clock,
    title: "24/7 Premium Room Service",
    description: "Whatever you need, whenever you need it. Our dedicated team is always just a call away, day or night.",
  },
  {
    icon: ShieldCheck,
    title: "Family-Friendly & Secure",
    description: "A warm, welcoming environment designed for families, couples, and solo travelers — safe, secure, and always comfortable.",
  },
];

const AmenitiesSection = () => {
  return (
    <section id="amenities" className="section-padding bg-cream">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-on-scroll">
          <p className="font-sans text-sm tracking-[0.2em] uppercase text-gold mb-3">
            What Makes Us Special
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Our Signature Hospitality
          </h2>
          <div className="w-16 h-0.5 bg-gold mx-auto" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {amenities.map((item, idx) => (
            <div
              key={item.title}
              className="animate-on-scroll group bg-card rounded-2xl p-8 text-center shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border border-border/50"
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                <item.icon size={28} className="text-gold group-hover:text-primary-foreground transition-colors duration-300" />
              </div>
              <h3 className="font-serif text-lg font-semibold text-foreground mb-3">
                {item.title}
              </h3>
              <p className="font-sans text-sm text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AmenitiesSection;
