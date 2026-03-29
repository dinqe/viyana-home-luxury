import { useState } from "react";
import { format } from "date-fns";
import { CalendarIcon, Users, X } from "lucide-react";
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

interface BookingDialogProps {
  children: React.ReactNode;
}

const BookingDialog = ({ children }: BookingDialogProps) => {
  const { toast } = useToast();
  const [open, setOpen] = useState(false);
  const [checkIn, setCheckIn] = useState<Date>();
  const [checkOut, setCheckOut] = useState<Date>();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    roomType: "",
    adults: "",
    children: "",
    specialRequests: "",
  });

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.firstName || !formData.lastName || !formData.phone || !formData.roomType || !checkIn || !checkOut || !formData.adults) {
      toast({ title: "Please fill in all required fields", variant: "destructive" });
      return;
    }
    toast({
      title: "Reservation Request Sent!",
      description: "Our team will contact you shortly to confirm your booking.",
    });
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
          <DialogTitle className="font-serif text-2xl text-foreground">
            Reserve Your Suite
          </DialogTitle>
          <p className="text-sm text-muted-foreground font-sans">
            Fill in your details and we'll confirm your booking within 24 hours.
          </p>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-5 mt-2">
          {/* Name */}
          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-1.5">
              <Label className="text-xs font-sans uppercase tracking-wider text-muted-foreground">First Name *</Label>
              <Input
                placeholder="John"
                value={formData.firstName}
                onChange={(e) => handleChange("firstName", e.target.value)}
                maxLength={50}
                className="border-border/60 focus-visible:ring-gold/40"
              />
            </div>
            <div className="space-y-1.5">
              <Label className="text-xs font-sans uppercase tracking-wider text-muted-foreground">Last Name *</Label>
              <Input
                placeholder="Doe"
                value={formData.lastName}
                onChange={(e) => handleChange("lastName", e.target.value)}
                maxLength={50}
                className="border-border/60 focus-visible:ring-gold/40"
              />
            </div>
          </div>

          {/* Contact */}
          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-1.5">
              <Label className="text-xs font-sans uppercase tracking-wider text-muted-foreground">Email</Label>
              <Input
                type="email"
                placeholder="john@email.com"
                value={formData.email}
                onChange={(e) => handleChange("email", e.target.value)}
                maxLength={100}
                className="border-border/60 focus-visible:ring-gold/40"
              />
            </div>
            <div className="space-y-1.5">
              <Label className="text-xs font-sans uppercase tracking-wider text-muted-foreground">Phone *</Label>
              <Input
                type="tel"
                placeholder="+90 5XX XXX XX XX"
                value={formData.phone}
                onChange={(e) => handleChange("phone", e.target.value)}
                maxLength={20}
                className="border-border/60 focus-visible:ring-gold/40"
              />
            </div>
          </div>

          {/* Room Type */}
          <div className="space-y-1.5">
            <Label className="text-xs font-sans uppercase tracking-wider text-muted-foreground">Suite Type *</Label>
            <Select value={formData.roomType} onValueChange={(v) => handleChange("roomType", v)}>
              <SelectTrigger className="border-border/60 focus:ring-gold/40">
                <SelectValue placeholder="Select your suite" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="deluxe">Deluxe Standard Suite</SelectItem>
                <SelectItem value="honeymoon">Honeymoon Suite</SelectItem>
                <SelectItem value="jacuzzi">Jacuzzi Suite</SelectItem>
                <SelectItem value="pool">Private Pool Apartment</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Dates */}
          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-1.5">
              <Label className="text-xs font-sans uppercase tracking-wider text-muted-foreground">Check-in *</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn(
                      "w-full justify-start text-left font-normal border-border/60",
                      !checkIn && "text-muted-foreground"
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {checkIn ? format(checkIn, "PP") : "Select date"}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={checkIn}
                    onSelect={setCheckIn}
                    disabled={(date) => date < new Date()}
                    initialFocus
                    className="p-3 pointer-events-auto"
                  />
                </PopoverContent>
              </Popover>
            </div>
            <div className="space-y-1.5">
              <Label className="text-xs font-sans uppercase tracking-wider text-muted-foreground">Check-out *</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn(
                      "w-full justify-start text-left font-normal border-border/60",
                      !checkOut && "text-muted-foreground"
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {checkOut ? format(checkOut, "PP") : "Select date"}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={checkOut}
                    onSelect={setCheckOut}
                    disabled={(date) => date < (checkIn || new Date())}
                    initialFocus
                    className="p-3 pointer-events-auto"
                  />
                </PopoverContent>
              </Popover>
            </div>
          </div>

          {/* Guests */}
          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-1.5">
              <Label className="text-xs font-sans uppercase tracking-wider text-muted-foreground">Adults *</Label>
              <Select value={formData.adults} onValueChange={(v) => handleChange("adults", v)}>
                <SelectTrigger className="border-border/60 focus:ring-gold/40">
                  <SelectValue placeholder="Adults" />
                </SelectTrigger>
                <SelectContent>
                  {[1, 2, 3, 4, 5, 6].map((n) => (
                    <SelectItem key={n} value={String(n)}>{n} {n === 1 ? "Adult" : "Adults"}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-1.5">
              <Label className="text-xs font-sans uppercase tracking-wider text-muted-foreground">Children</Label>
              <Select value={formData.children} onValueChange={(v) => handleChange("children", v)}>
                <SelectTrigger className="border-border/60 focus:ring-gold/40">
                  <SelectValue placeholder="Children" />
                </SelectTrigger>
                <SelectContent>
                  {[0, 1, 2, 3, 4].map((n) => (
                    <SelectItem key={n} value={String(n)}>{n} {n === 1 ? "Child" : "Children"}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Special Requests */}
          <div className="space-y-1.5">
            <Label className="text-xs font-sans uppercase tracking-wider text-muted-foreground">Special Requests</Label>
            <Textarea
              placeholder="Airport transfer, extra bed, early check-in, dietary needs..."
              value={formData.specialRequests}
              onChange={(e) => handleChange("specialRequests", e.target.value)}
              maxLength={500}
              className="border-border/60 focus-visible:ring-gold/40 resize-none h-20"
            />
          </div>

          <Button
            type="submit"
            className="w-full bg-gold text-foreground font-sans font-semibold text-base py-6 rounded-xl gold-glow gold-glow-hover transition-all duration-300 hover:scale-[1.02] hover:bg-gold/90"
          >
            Request Reservation
          </Button>

          <p className="text-xs text-center text-muted-foreground font-sans">
            Our team will confirm availability and contact you within 24 hours.
          </p>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default BookingDialog;
