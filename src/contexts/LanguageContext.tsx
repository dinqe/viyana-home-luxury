import { createContext, useContext, useState, ReactNode } from "react";

type Lang = "en" | "tr";

interface LanguageContextType {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: (key: string) => string;
}

const translations: Record<string, Record<Lang, string>> = {
  // Navbar
  "nav.home": { en: "Home", tr: "Ana Sayfa" },
  "nav.amenities": { en: "Amenities", tr: "Hizmetler" },
  "nav.suites": { en: "Suites", tr: "Odalar" },
  "nav.reviews": { en: "Reviews", tr: "Yorumlar" },
  "nav.contact": { en: "Contact", tr: "İletişim" },
  "nav.book": { en: "Book Your Stay", tr: "Rezervasyon Yap" },
  "nav.motto": { en: "Like Your Own Home", tr: "Eviniz Gibi" },

  // Hero
  "hero.tagline": { en: "Gaziosmanpaşa's Premier Boutique Hotel", tr: "Gaziosmanpaşa'nın En Seçkin Butik Oteli" },
  "hero.title1": { en: "Experience Luxury", tr: "Lüksü Deneyimleyin" },
  "hero.title2": { en: "Like Your Own Home", tr: "Eviniz Gibi" },
  "hero.subtitle": {
    en: "Welcome to Viyana Suit, Gaziosmanpaşa's premier destination for unmatched hygiene, comfort, and sincere Turkish hospitality.",
    tr: "Viyana Suit'e hoş geldiniz — Gaziosmanpaşa'nın eşsiz hijyen, konfor ve samimi Türk misafirperverliği için en seçkin adresi.",
  },
  "hero.cta": { en: "Check Availability", tr: "Müsaitlik Kontrolü" },
  "hero.reviews": { en: "Based on", tr: "Toplam" },
  "hero.reviewsEnd": { en: "Guest Reviews", tr: "Misafir Değerlendirmesi" },
  "hero.200": { en: "200+", tr: "200+" },

  // Amenities
  "amenities.tagline": { en: "What Makes Us Special", tr: "Bizi Özel Kılan" },
  "amenities.title": { en: "Our Signature Hospitality", tr: "İmza Misafirperverliğimiz" },
  "amenities.clean.title": { en: "Spotless & Ultra-Hygienic Rooms", tr: "Tertemiz & Ultra Hijyenik Odalar" },
  "amenities.clean.desc": {
    en: "Every room is meticulously cleaned and sanitized to the highest standards — because your comfort starts with cleanliness.",
    tr: "Her oda en yüksek standartlarda titizlikle temizlenir ve dezenfekte edilir — çünkü konforunuz temizlikle başlar.",
  },
  "amenities.treats.title": { en: "Complimentary Signature Treats", tr: "Ücretsiz İkramlar" },
  "amenities.treats.desc": {
    en: "Enjoy free fruit platters, snack plates, cookies, and unlimited tea & coffee delivered directly to your room.",
    tr: "Odanıza ücretsiz meyve tabakları, atıştırmalık tabakları, kurabiyeler ve sınırsız çay & kahve servisi.",
  },
  "amenities.service.title": { en: "24/7 Premium Room Service", tr: "7/24 Premium Oda Servisi" },
  "amenities.service.desc": {
    en: "Whatever you need, whenever you need it. Our dedicated team is always just a call away, day or night.",
    tr: "Ne zaman ihtiyacınız olursa, ekibimiz gece gündüz sadece bir telefon kadar yakınınızda.",
  },
  "amenities.family.title": { en: "Family-Friendly & Secure", tr: "Aile Dostu & Güvenli" },
  "amenities.family.desc": {
    en: "A warm, welcoming environment designed for families, couples, and solo travelers — safe, secure, and always comfortable.",
    tr: "Aileler, çiftler ve bireysel gezginler için sıcak, güvenli ve her zaman konforlu bir ortam.",
  },

  // Suites
  "suites.tagline": { en: "Accommodation", tr: "Konaklama" },
  "suites.title": { en: "Our Suites", tr: "Odalarımız" },
  "suites.deluxe.title": { en: "Deluxe Standard Suites", tr: "Deluxe Standart Süitler" },
  "suites.deluxe.desc": { en: "Comfortable, modern, and perfectly pristine.", tr: "Konforlu, modern ve kusursuz temizlikte." },
  "suites.honeymoon.title": { en: "Honeymoon Suites", tr: "Balayı Süitleri" },
  "suites.honeymoon.desc": { en: "Meticulously decorated for your most special days.", tr: "En özel günleriniz için özenle dekore edilmiştir." },
  "suites.jacuzzi.title": { en: "Jacuzzi Suites", tr: "Jakuzi Süitleri" },
  "suites.jacuzzi.desc": { en: "Unwind in luxury with your private in-room jacuzzi.", tr: "Özel jakuzinizle lüks içinde rahatlayın." },
  "suites.pool.title": { en: "Private Pool Apartments", tr: "Özel Havuzlu Daireler" },
  "suites.pool.desc": { en: "Exclusive heated pools with unlimited VIP treats.", tr: "Sınırsız VIP ikramlarla özel ısıtmalı havuzlar." },
  "suites.viewDetails": { en: "View Details →", tr: "Detayları Gör →" },

  // Testimonials
  "testimonials.tagline": { en: "Guest Reviews", tr: "Misafir Yorumları" },
  "testimonials.title": { en: "What Our Guests Say", tr: "Misafirlerimiz Ne Diyor" },
  "testimonials.rating": { en: "4.6 / 5 — Based on 200+ Google Reviews", tr: "4.6 / 5 — 200+ Google Değerlendirmesine Dayanmaktadır" },
  "testimonials.1": {
    en: "I've stayed here for almost a month... great service, friendly and helpful staff, highly recommended, 10/10.",
    tr: "Yaklaşık bir ay burada kaldım... harika hizmet, güler yüzlü ve yardımsever personel, kesinlikle tavsiye ederim, 10/10.",
  },
  "testimonials.2": {
    en: "The cleanliness and attention to detail were absolutely excellent. You feel like you're in your own home, not a hotel.",
    tr: "Temizlik ve detaylara gösterilen özen kesinlikle mükemmeldi. Kendinizi bir otelde değil, evinizde gibi hissediyorsunuz.",
  },
  "testimonials.3": {
    en: "We stayed in an apartment with a pool and everything was perfect, the refreshments and service were excellent.",
    tr: "Havuzlu bir dairede kaldık ve her şey mükemmeldi, ikramlar ve hizmet harikaydı.",
  },

  // Team
  "team.title": { en: "Meet Our Team", tr: "Ekibimizle Tanışın" },
  "team.text1": { en: "Our dedicated team, including our beloved guest coordinators", tr: "Sevgili misafir koordinatörlerimiz" },
  "team.text2": { en: "are here 24/7 to ensure your stay is flawless. At Viyana Suit, you're not just a guest — you're family.", tr: "dahil tüm ekibimiz, kalışınızın kusursuz olması için 7/24 burada. Viyana Suit'te sadece bir misafir değilsiniz — ailesiniz." },

  // Footer
  "footer.tagline": { en: "Ready to Book?", tr: "Rezervasyon Yapmaya Hazır mısınız?" },
  "footer.title": { en: "Start Your Stay Today", tr: "Konaklamanıza Bugün Başlayın" },
  "footer.subtitle": { en: "Call us directly or send a message — we'd love to welcome you home.", tr: "Bizi doğrudan arayın veya mesaj gönderin — sizi evimize davet etmekten mutluluk duyarız." },
  "footer.brand": { en: "Gaziosmanpaşa's premier boutique hotel — where luxury meets the warmth of home.", tr: "Gaziosmanpaşa'nın en seçkin butik oteli — lüksün evin sıcaklığıyla buluştuğu yer." },
  "footer.quickLinks": { en: "Quick Links", tr: "Hızlı Linkler" },
  "footer.contact": { en: "Contact", tr: "İletişim" },
  "footer.rights": { en: "All rights reserved.", tr: "Tüm hakları saklıdır." },
  "footer.ourSuites": { en: "Our Suites", tr: "Odalarımız" },
  "footer.amenities": { en: "Amenities", tr: "Hizmetler" },
  "footer.guestReviews": { en: "Guest Reviews", tr: "Misafir Yorumları" },
  "footer.privacy": { en: "Privacy Policy", tr: "Gizlilik Politikası" },
  "footer.terms": { en: "Booking Terms", tr: "Rezervasyon Koşulları" },

  // Booking Dialog
  "booking.title": { en: "Reserve Your Suite", tr: "Süitinizi Ayırtın" },
  "booking.subtitle": { en: "Fill in your details and we'll confirm your booking within 24 hours.", tr: "Bilgilerinizi doldurun, 24 saat içinde rezervasyonunuzu onaylayalım." },
  "booking.firstName": { en: "First Name *", tr: "Ad *" },
  "booking.lastName": { en: "Last Name *", tr: "Soyad *" },
  "booking.email": { en: "Email", tr: "E-posta" },
  "booking.phone": { en: "Phone *", tr: "Telefon *" },
  "booking.suiteType": { en: "Suite Type *", tr: "Süit Tipi *" },
  "booking.selectSuite": { en: "Select your suite", tr: "Süitinizi seçin" },
  "booking.deluxe": { en: "Deluxe Standard Suite", tr: "Deluxe Standart Süit" },
  "booking.honeymoon": { en: "Honeymoon Suite", tr: "Balayı Süiti" },
  "booking.jacuzzi": { en: "Jacuzzi Suite", tr: "Jakuzi Süiti" },
  "booking.pool": { en: "Private Pool Apartment", tr: "Özel Havuzlu Daire" },
  "booking.checkIn": { en: "Check-in *", tr: "Giriş *" },
  "booking.checkOut": { en: "Check-out *", tr: "Çıkış *" },
  "booking.selectDate": { en: "Select date", tr: "Tarih seçin" },
  "booking.adults": { en: "Adults *", tr: "Yetişkin *" },
  "booking.children": { en: "Children", tr: "Çocuk" },
  "booking.adult": { en: "Adult", tr: "Yetişkin" },
  "booking.adultsPlural": { en: "Adults", tr: "Yetişkin" },
  "booking.child": { en: "Child", tr: "Çocuk" },
  "booking.childrenPlural": { en: "Children", tr: "Çocuk" },
  "booking.specialRequests": { en: "Special Requests", tr: "Özel İstekler" },
  "booking.specialPlaceholder": { en: "Airport transfer, extra bed, early check-in, dietary needs...", tr: "Havalimanı transferi, ekstra yatak, erken giriş, diyet ihtiyaçları..." },
  "booking.submit": { en: "Request Reservation", tr: "Rezervasyon Talep Et" },
  "booking.note": { en: "Our team will confirm availability and contact you within 24 hours.", tr: "Ekibimiz müsaitlik durumunu onaylayıp 24 saat içinde sizinle iletişime geçecektir." },
  "booking.error": { en: "Please fill in all required fields", tr: "Lütfen tüm zorunlu alanları doldurun" },
  "booking.success": { en: "Reservation Request Sent!", tr: "Rezervasyon Talebiniz Gönderildi!" },
  "booking.successDesc": { en: "Our team will contact you shortly to confirm your booking.", tr: "Ekibimiz rezervasyonunuzu onaylamak için kısa süre içinde sizinle iletişime geçecektir." },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Lang>("en");

  const t = (key: string): string => {
    return translations[key]?.[lang] || key;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used within LanguageProvider");
  return context;
};
