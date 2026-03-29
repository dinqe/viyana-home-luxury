import { Heart } from "lucide-react";

const TeamSection = () => {
  return (
    <section className="section-padding bg-cream">
      <div className="container mx-auto max-w-3xl text-center animate-on-scroll">
        <Heart size={32} className="mx-auto text-gold mb-6" />
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
          Meet Our Team
        </h2>
        <p className="font-sans text-base md:text-lg text-muted-foreground leading-relaxed">
          Our dedicated team, including our beloved guest coordinators{" "}
          <span className="font-semibold text-foreground">Hatice</span>,{" "}
          <span className="font-semibold text-foreground">Irfan</span>, and{" "}
          <span className="font-semibold text-foreground">Enes</span>, are here
          24/7 to ensure your stay is flawless. At Viyana Suit, you're not just a
          guest — you're family.
        </p>
      </div>
    </section>
  );
};

export default TeamSection;
