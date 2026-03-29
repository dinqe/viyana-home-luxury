import { Heart } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const TeamSection = () => {
  const { t } = useLanguage();

  return (
    <section className="section-padding bg-cream">
      <div className="container mx-auto max-w-3xl text-center animate-on-scroll">
        <Heart size={32} className="mx-auto text-gold mb-6" />
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
          {t("team.title")}
        </h2>
        <p className="font-sans text-base md:text-lg text-muted-foreground leading-relaxed">
          {t("team.text1")}{" "}
          <span className="font-semibold text-foreground">Hatice</span>,{" "}
          <span className="font-semibold text-foreground">Irfan</span>,{" "}
          <span className="font-semibold text-foreground">Enes</span>{" "}
          {t("team.text2")}
        </p>
      </div>
    </section>
  );
};

export default TeamSection;
