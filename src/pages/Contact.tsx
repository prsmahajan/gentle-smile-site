import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Section, FadeIn } from "@/components/ui-sections";
import { Phone, MapPin, Clock, Mail, Calendar, AlertTriangle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const response = await fetch("https://sheetdb.io/api/v1/ucatmmzoa8zcz", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          data: {
            name: form.name.trim(),
            email: form.email.trim(),
            phone: form.phone.trim(),
            message: form.message.trim(),
            submitted_at: new Date().toISOString(),
          },
        }),
      });
      if (!response.ok) throw new Error("Failed to submit");
      toast({
        title: "Message Sent!",
        description: "Thank you! We'll get back to you within one business day.",
      });
      setForm({ name: "", email: "", phone: "", message: "" });
    } catch {
      toast({
        title: "Something went wrong",
        description: "Please try again or call us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <section className="pt-28 pb-16 lg:pt-36 lg:pb-24 bg-sage">
        <div className="container mx-auto px-4 lg:px-8 text-center max-w-3xl">
          <FadeIn>
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-primary mb-3">
              Get In Touch
            </span>
            <h1 className="text-4xl lg:text-5xl font-display font-bold text-foreground mb-6">
              Schedule Your Appointment
            </h1>
            <p className="text-lg text-muted-foreground">
              Ready to experience gentle, judgment-free dental care? Reach out — we'd love to hear from you.
            </p>
          </FadeIn>
        </div>
      </section>

      <Section>
        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Form */}
          <FadeIn className="lg:col-span-3">
            <div className="bg-card rounded-xl p-8 border border-border">
              <h2 className="font-display text-2xl font-semibold text-foreground mb-6">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1.5 block">Full Name *</label>
                    <Input
                      required
                      maxLength={100}
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1.5 block">Phone</label>
                    <Input
                      type="tel"
                      maxLength={20}
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      placeholder="(715) 555-0123"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">Email *</label>
                  <Input
                    required
                    type="email"
                    maxLength={255}
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="you@email.com"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">Message *</label>
                  <Textarea
                    required
                    maxLength={1000}
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Tell us what you need — whether it's a cleaning, a concern, or just a question. We're here to help."
                  />
                </div>
                <Button type="submit" size="lg" className="w-full sm:w-auto" disabled={isSubmitting}>
                  <Calendar className="w-4 h-4 mr-2" />
                  {isSubmitting ? "Sending..." : "Request Appointment"}
                </Button>
              </form>
            </div>
          </FadeIn>

          {/* Sidebar */}
          <FadeIn delay={0.2} className="lg:col-span-2 space-y-6">
            <div className="bg-card rounded-xl p-6 border border-border">
              <h3 className="font-display text-lg font-semibold text-foreground mb-4">Contact Information</h3>
              <div className="space-y-4">
                <a href="tel:+17158489100" className="flex items-start gap-3 group">
                  <Phone className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-foreground group-hover:text-primary transition-colors">(715) 848-9100</p>
                    <p className="text-sm text-muted-foreground">Call to schedule</p>
                  </div>
                </a>
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-foreground">Wausau, Wisconsin</p>
                    <p className="text-sm text-muted-foreground">Serving the greater Wausau area</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-foreground">Email Us</p>
                    <p className="text-sm text-muted-foreground">We respond within 1 business day</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-xl p-6 border border-border">
              <h3 className="font-display text-lg font-semibold text-foreground mb-4">Office Hours</h3>
              <div className="space-y-2 text-sm">
                {[
                  { day: "Monday", hours: "8:00 AM – 5:00 PM" },
                  { day: "Tuesday", hours: "8:00 AM – 5:00 PM" },
                  { day: "Wednesday", hours: "8:00 AM – 5:00 PM" },
                  { day: "Thursday", hours: "8:00 AM – 5:00 PM" },
                  { day: "Friday", hours: "8:00 AM – 12:00 PM" },
                  { day: "Saturday", hours: "Closed" },
                  { day: "Sunday", hours: "Closed" },
                ].map((item) => (
                  <div key={item.day} className="flex justify-between">
                    <span className="text-muted-foreground">{item.day}</span>
                    <span className="font-medium text-foreground">{item.hours}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-warm rounded-xl p-6 border border-border">
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-warm-foreground shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-display text-base font-semibold text-foreground mb-1">Dental Emergency?</h3>
                  <p className="text-sm text-muted-foreground mb-2">
                    If you're experiencing a dental emergency during office hours, call us immediately. We'll do our best to see you the same day.
                  </p>
                  <a href="tel:+17158489100" className="text-sm font-medium text-primary hover:underline">
                    Call (715) 848-9100
                  </a>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </Section>

      {/* Google Maps Section */}
      <Section className="bg-accent pt-0">
        <FadeIn>
          <div className="text-center mb-8">
            <h2 className="text-2xl lg:text-3xl font-display font-semibold text-foreground mb-2">
              Find Our Office
            </h2>
            <p className="text-muted-foreground">Conveniently located in Wausau, Wisconsin</p>
          </div>
          <div className="rounded-xl overflow-hidden border border-border shadow-sm">
            <iframe
              title="Dr. Sara L. Schult office location in Wausau, Wisconsin"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d45636.86848498889!2d-89.6709!3d44.9591!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88003de1eecbb5bb%3A0xb11e51f2e0ad9b25!2sWausau%2C%20WI!5e0!3m2!1sen!2sus!4v1700000000000"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full"
            />
          </div>
        </FadeIn>
      </Section>
    </>
  );
};

export default Contact;
