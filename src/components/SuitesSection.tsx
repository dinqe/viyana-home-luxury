import roomDeluxe from "@/assets/room-deluxe.jpg";
import roomHoneymoon from "@/assets/room-honeymoon.jpg";
import roomJacuzzi from "@/assets/room-jacuzzi.jpg";
import roomPool from "@/assets/room-pool.jpg";
import { useLanguage } from "@/contexts/LanguageContext";

const SuitesSection = () => {
  const { t } = useLanguage();

  const suites = [
    { image: roomDeluxe, title: t("suites.deluxe.title"), description: t("suites.deluxe.desc") },
    { image: roomHoneymoon, title: t("suites.honeymoon.title"), description: t("suites.honeymoon.desc") },
    { image: roomJacuzzi, title: t("suites.jacuzzi.title"), description: t("suites.jacuzzi.desc") },
    { image: roomPool, title: t("suites.pool.title"), description: t("suites.pool.desc") },
  ];

  return (
    <section id="suites" className="section-padding">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-on-scroll">
          <p className="font-sans text-sm tracking-[0.2em] uppercase text-gold mb-3">{t("suites.tagline")}</p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">{t("suites.title")}</h2>
          <div className="w-16 h-0.5 bg-gold mx-auto" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
          {suites.map((suite, idx) => (
            <div
              key={idx}
              className="animate-on-scroll group relative overflow-hidden rounded-2xl"
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              <div className="aspect-[4/3] overflow-hidden rounded-2xl">
                <img src={suite.image} alt={suite.title} loading="lazy" width={800} height={600} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent rounded-2xl" />
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                <h3 className="font-serif text-xl md:text-2xl font-bold mb-1" style={{ color: "hsl(40, 30%, 95%)" }}>{suite.title}</h3>
                <p className="font-sans text-sm" style={{ color: "hsl(40, 20%, 75%)" }}>{suite.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SuitesSection;
