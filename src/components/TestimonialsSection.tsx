import { useEffect, useMemo, useState } from "react";
import { Star, Quote } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const TestimonialsSection = () => {
  const { t, getHotelReviews } = useLanguage();
  const [startIndex, setStartIndex] = useState(0);
  const [isSwitching, setIsSwitching] = useState(false);

  const hotelReviews = getHotelReviews();

  const visibleReviews = useMemo(() => {
    return Array.from({ length: 3 }, (_, idx) => {
      const reviewIndex = (startIndex + idx) % hotelReviews.length;
      return hotelReviews[reviewIndex];
    });
  }, [startIndex, hotelReviews]);

  useEffect(() => {
    let switchTimeout: ReturnType<typeof setTimeout> | undefined;

    const interval = setInterval(() => {
      setIsSwitching(true);
      switchTimeout = setTimeout(() => {
        setStartIndex((prev) => (prev + 3) % hotelReviews.length);
        requestAnimationFrame(() => setIsSwitching(false));
      }, 650);
    }, 7000);

    return () => {
      clearInterval(interval);
      if (switchTimeout) clearTimeout(switchTimeout);
    };
  }, [hotelReviews.length]);

  return (
    <section id="testimonials" className="section-padding py-16 md:py-20 bg-emerald-brand relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-5" style={{ background: "hsl(40, 60%, 55%)", filter: "blur(120px)" }} />

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-12 animate-on-scroll">
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 items-stretch">
          {visibleReviews.map((item, idx) => (
            <div
              key={`slot-${idx}`}
              className={`animate-on-scroll rounded-2xl p-6 border min-h-[320px] md:min-h-[340px] flex flex-col transition-all duration-700 ease-in-out hover:-translate-y-2 ${
                isSwitching ? "opacity-0 scale-95" : "opacity-100 scale-100"
              }`}
              style={{ backgroundColor: "hsla(160, 30%, 28%, 0.6)", borderColor: "hsla(40, 60%, 55%, 0.2)" }}
            >
              <Quote size={28} className="text-gold/40 mb-3" />
              <p className="font-sans text-base leading-relaxed mb-4 italic line-clamp-6 flex-1" style={{ color: "hsl(40, 20%, 88%)" }}>
                "{item.text}"
              </p>
              <div className="mt-auto">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, starIndex) => (
                    <Star
                      key={starIndex}
                      size={14}
                      className={starIndex < item.rating ? "fill-current text-gold" : "text-gold/30"}
                    />
                  ))}
                </div>
                <div className="flex items-center gap-2 min-h-6">
                  <div className="w-8 h-0.5 bg-gold/50" />
                  <span className="font-sans text-sm font-semibold text-gold">- {item.author}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
