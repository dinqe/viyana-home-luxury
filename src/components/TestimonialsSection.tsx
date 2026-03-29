import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    text: "I've stayed here for almost a month... great service, friendly and helpful staff, highly recommended, 10/10.",
    author: "M.m.",
  },
  {
    text: "The cleanliness and attention to detail were absolutely excellent. You feel like you're in your own home, not a hotel.",
    author: "Mine Ö.",
  },
  {
    text: "We stayed in an apartment with a pool and everything was perfect, the refreshments and service were excellent.",
    author: "Yusuf C.",
  },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="section-padding bg-emerald-brand relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-5" style={{ background: "hsl(40, 60%, 55%)", filter: "blur(120px)" }} />

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-16 animate-on-scroll">
          <p className="font-sans text-sm tracking-[0.2em] uppercase text-gold mb-3">
            Guest Reviews
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mb-4" style={{ color: "hsl(40, 30%, 95%)" }}>
            What Our Guests Say
          </h2>
          <div className="flex items-center justify-center gap-1 mb-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={22} className={`${i < 4 ? "fill-current" : "fill-current opacity-60"} text-gold`} />
            ))}
          </div>
          <p className="font-sans text-sm" style={{ color: "hsl(40, 20%, 75%)" }}>
            4.6 / 5 — Based on 200+ Google Reviews
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((t, idx) => (
            <div
              key={t.author}
              className="animate-on-scroll rounded-2xl p-8 border transition-all duration-500 hover:-translate-y-2"
              style={{
                transitionDelay: `${idx * 150}ms`,
                backgroundColor: "hsla(160, 30%, 28%, 0.6)",
                borderColor: "hsla(40, 60%, 55%, 0.2)",
              }}
            >
              <Quote size={32} className="text-gold/40 mb-4" />
              <p className="font-sans text-base leading-relaxed mb-6 italic" style={{ color: "hsl(40, 20%, 88%)" }}>
                "{t.text}"
              </p>
              <div className="flex items-center gap-2">
                <div className="w-8 h-0.5 bg-gold/50" />
                <span className="font-sans text-sm font-semibold text-gold">{t.author}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
