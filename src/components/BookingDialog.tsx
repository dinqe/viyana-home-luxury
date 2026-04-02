import { useState } from "react";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useLanguage } from "@/contexts/LanguageContext";

interface BookingDialogProps {
  children: React.ReactNode;
}

const BookingDialog = ({ children }: BookingDialogProps) => {
  const { toast } = useToast();
  const { t } = useLanguage();
  const [open, setOpen] = useState(false);
  const [checkIn, setCheckIn] = useState<Date>();
  const [checkOut, setCheckOut] = useState<Date>();
  const [formData, setFormData] = useState({
    firstName: "", lastName: "", email: "", phone: "",
    roomType: "", adults: "", children: "", specialRequests: "",
  });

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.firstName || !formData.lastName || !formData.phone || !formData.roomType || !checkIn || !checkOut || !formData.adults) {
      toast({ title: t("booking.error"), variant: "destructive" });
      return;
    }

    const WHATSAPP_PHONE = "905320615996"; // WhatsApp expects digits only (no "+")
    const suiteLabelByValue: Record<string, string> = {
      deluxe: t("booking.deluxe"),
      honeymoon: t("booking.honeymoon"),
      jacuzzi: t("booking.jacuzzi"),
      pool: t("booking.pool"),
    };

    const suiteType = suiteLabelByValue[formData.roomType] ?? formData.roomType;
    const childrenValue = formData.children ? formData.children : "0";
    const specialRequests = formData.specialRequests?.trim() || "None";

    const message = [
      "Viyana Suit - Booking Request",
      `Name: ${formData.firstName} ${formData.lastName}`,
      `Email: ${formData.email || "N/A"}`,
      `Phone: ${formData.phone}`,
      `Suite Type: ${suiteType}`,
      `Check-in: ${format(checkIn, "PP")}`,
      `Check-out: ${format(checkOut, "PP")}`,
      `Adults: ${formData.adults}`,
      `Children: ${childrenValue}`,
      `Special Requests: ${specialRequests}`,
    ].join("\n");

    const waUrl = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(message)}`;

    // Open WhatsApp with the pre-filled booking message.
    window.open(waUrl, "_blank", "noopener,noreferrer");

    toast({ title: t("booking.success"), description: t("booking.successDesc") });
    setOpen(false);
    setFormData({ firstName: "", lastName: "", email: "", phone: "", roomType: "", adults: "", children: "", specialRequests: "" });
    setCheckIn(undefined);
    setCheckOut(undefined);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[540px] max-h-[90vh] overflow-y-auto bg-background border-gold/20">
        <DialogHeader>
          <DialogTitle className="font-serif text-2xl text-foreground">{t("booking.title")}</DialogTitle>
          <p className="text-sm text-muted-foreground font-sans">{t("booking.subtitle")}</p>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-5 mt-2">
          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-1.5">
              <Label className="text-xs font-sans uppercase tracking-wider text-muted-foreground">{t("booking.firstName")}</Label>
              <Input value={formData.firstName} onChange={(e) => handleChange("firstName", e.target.value)} maxLength={50} className="border-border/60 focus-visible:ring-gold/40" />
            </div>
            <div className="space-y-1.5">
              <Label className="text-xs font-sans uppercase tracking-wider text-muted-foreground">{t("booking.lastName")}</Label>
              <Input value={formData.lastName} onChange={(e) => handleChange("lastName", e.target.value)} maxLength={50} className="border-border/60 focus-visible:ring-gold/40" />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-1.5">
              <Label className="text-xs font-sans uppercase tracking-wider text-muted-foreground">{t("booking.email")}</Label>
              <Input type="email" value={formData.email} onChange={(e) => handleChange("email", e.target.value)} maxLength={100} className="border-border/60 focus-visible:ring-gold/40" />
            </div>
            <div className="space-y-1.5">
              <Label className="text-xs font-sans uppercase tracking-wider text-muted-foreground">{t("booking.phone")}</Label>
              <Input type="tel" placeholder="+90 5XX XXX XX XX" value={formData.phone} onChange={(e) => handleChange("phone", e.target.value)} maxLength={20} className="border-border/60 focus-visible:ring-gold/40" />
            </div>
          </div>

          <div className="space-y-1.5">
            <Label className="text-xs font-sans uppercase tracking-wider text-muted-foreground">{t("booking.suiteType")}</Label>
            <Select value={formData.roomType} onValueChange={(v) => handleChange("roomType", v)}>
              <SelectTrigger className="border-border/60 focus:ring-gold/40">
                <SelectValue placeholder={t("booking.selectSuite")} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="deluxe">{t("booking.deluxe")}</SelectItem>
                <SelectItem value="honeymoon">{t("booking.honeymoon")}</SelectItem>
                <SelectItem value="jacuzzi">{t("booking.jacuzzi")}</SelectItem>
                <SelectItem value="pool">{t("booking.pool")}</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-1.5">
              <Label className="text-xs font-sans uppercase tracking-wider text-muted-foreground">{t("booking.checkIn")}</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="outline" className={cn("w-full justify-start text-left font-normal border-border/60", !checkIn && "text-muted-foreground")}>
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {checkIn ? format(checkIn, "PP") : t("booking.selectDate")}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar mode="single" selected={checkIn} onSelect={setCheckIn} disabled={(date) => date < new Date()} initialFocus className="p-3 pointer-events-auto" />
                </PopoverContent>
              </Popover>
            </div>
            <div className="space-y-1.5">
              <Label className="text-xs font-sans uppercase tracking-wider text-muted-foreground">{t("booking.checkOut")}</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="outline" className={cn("w-full justify-start text-left font-normal border-border/60", !checkOut && "text-muted-foreground")}>
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {checkOut ? format(checkOut, "PP") : t("booking.selectDate")}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar mode="single" selected={checkOut} onSelect={setCheckOut} disabled={(date) => date < (checkIn || new Date())} initialFocus className="p-3 pointer-events-auto" />
                </PopoverContent>
              </Popover>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-1.5">
              <Label className="text-xs font-sans uppercase tracking-wider text-muted-foreground">{t("booking.adults")}</Label>
              <Select value={formData.adults} onValueChange={(v) => handleChange("adults", v)}>
                <SelectTrigger className="border-border/60 focus:ring-gold/40">
                  <SelectValue placeholder={t("booking.adultsPlural")} />
                </SelectTrigger>
                <SelectContent>
                  {[1, 2, 3, 4, 5, 6].map((n) => (
                    <SelectItem key={n} value={String(n)}>{n} {n === 1 ? t("booking.adult") : t("booking.adultsPlural")}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-1.5">
              <Label className="text-xs font-sans uppercase tracking-wider text-muted-foreground">{t("booking.children")}</Label>
              <Select value={formData.children} onValueChange={(v) => handleChange("children", v)}>
                <SelectTrigger className="border-border/60 focus:ring-gold/40">
                  <SelectValue placeholder={t("booking.childrenPlural")} />
                </SelectTrigger>
                <SelectContent>
                  {[0, 1, 2, 3, 4].map((n) => (
                    <SelectItem key={n} value={String(n)}>{n} {n === 1 ? t("booking.child") : t("booking.childrenPlural")}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-1.5">
            <Label className="text-xs font-sans uppercase tracking-wider text-muted-foreground">{t("booking.specialRequests")}</Label>
            <Textarea placeholder={t("booking.specialPlaceholder")} value={formData.specialRequests} onChange={(e) => handleChange("specialRequests", e.target.value)} maxLength={500} className="border-border/60 focus-visible:ring-gold/40 resize-none h-20" />
          </div>

          <Button type="submit" className="w-full bg-gold text-foreground font-sans font-semibold text-base py-6 rounded-xl gold-glow gold-glow-hover transition-all duration-300 hover:scale-[1.02] hover:bg-gold/90">
            {t("booking.submit")}
          </Button>

          <p className="text-xs text-center text-muted-foreground font-sans">{t("booking.note")}</p>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default BookingDialog;
