import { Star, Quote } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const TestimonialsSection = () => {
  const { t } = useLanguage();

  const testimonials = [
    { text: t("testimonials.1"), author: "M.m." },
    { text: t("testimonials.2"), author: "Mine Ö." },
    { text: t("testimonials.3"), author: "Yusuf C." },
  ];

  return (
    <section id="testimonials" className="section-padding bg-emerald-brand relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-5" style={{ background: "hsl(40, 60%, 55%)", filter: "blur(120px)" }} />

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-16 animate-on-scroll">
          <p className="font-sans text-sm tracking-[0.2em] uppercase text-gold mb-3">{t("testimonials.tagline")}</p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mb-4" style={{ color: "hsl(40, 30%, 95%)" }}>
            {t("testimonials.title")}
          </h2>
          <div className="flex items-center justify-center gap-1 mb-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={22} className={`${i < 4 ? "fill-current" : "fill-current opacity-60"} text-gold`} />
            ))}
          </div>
          <p className="font-sans text-sm" style={{ color: "hsl(40, 20%, 75%)" }}>{t("testimonials.rating")}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((item, idx) => (
            <div
              key={item.author}
              className="animate-on-scroll rounded-2xl p-8 border transition-all duration-500 hover:-translate-y-2"
              style={{ transitionDelay: `${idx * 150}ms`, backgroundColor: "hsla(160, 30%, 28%, 0.6)", borderColor: "hsla(40, 60%, 55%, 0.2)" }}
            >
              <Quote size={32} className="text-gold/40 mb-4" />
              <p className="font-sans text-base leading-relaxed mb-6 italic" style={{ color: "hsl(40, 20%, 88%)" }}>
                "{item.text}"
              </p>
              <div className="flex items-center gap-2">
                <div className="w-8 h-0.5 bg-gold/50" />
                <span className="font-sans text-sm font-semibold text-gold">{item.author}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
