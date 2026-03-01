import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Section, FadeIn } from "@/components/ui-sections";
import { Calendar, CheckCircle, ArrowLeft } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import JsonLd from "@/components/JsonLd";

const DentalFillings = () => (
  <>
    <JsonLd data={{
      "@context": "https://schema.org",
      "@type": "MedicalWebPage",
      "name": "Dental Fillings in Wausau | Sara L. Schult, D.D.S.",
      "description": "Natural-looking, tooth-colored fillings to repair cavities and restore your teeth.",
      "url": "https://www.drschultdds.com/services/dental-fillings",
      "mainEntity": {
        "@type": "MedicalProcedure",
        "name": "Tooth-Colored Dental Fillings",
        "procedureType": "https://schema.org/TherapeuticProcedure",
        "description": "Composite fillings matched to your natural tooth color",
      },
      "provider": { "@type": "Dentist", "name": "Sara L. Schult, D.D.S.", "telephone": "+1-715-848-9100" },
    }} />
    <section className="pt-28 pb-16 lg:pt-36 lg:pb-24 bg-sage">
      <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
        <FadeIn>
          <Link to="/services" className="inline-flex items-center gap-1 text-sm text-primary hover:underline mb-6">
            <ArrowLeft className="w-4 h-4" /> All Services
          </Link>
          <span className="block text-xs font-semibold tracking-widest uppercase text-primary mb-3">Restorative Dentistry</span>
          <h1 className="text-4xl lg:text-5xl font-display font-bold text-foreground mb-6">
            Dental Fillings in Wausau
          </h1>
          <p className="text-lg text-muted-foreground">
            Natural-looking, tooth-colored fillings to repair cavities and restore your teeth — delivered with the gentle care you deserve.
          </p>
        </FadeIn>
      </div>
    </section>

    <Section>
      <div className="max-w-3xl mx-auto">
        <FadeIn>
          <h2 className="text-2xl font-display font-semibold text-foreground mb-4">What Are Tooth-Colored Fillings?</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Composite (tooth-colored) fillings are used to repair teeth affected by decay, cracks, or fractures. The composite material is matched to your natural tooth color, so your filling blends seamlessly with your smile.
          </p>
          <h2 className="text-2xl font-display font-semibold text-foreground mb-4">Benefits of Tooth-Colored Fillings</h2>
          <ul className="space-y-3 mb-8">
            {[
              "Natural appearance — blends with your teeth",
              "Mercury-free and biocompatible",
              "Bonds directly to tooth structure for added strength",
              "Less tooth removal required than amalgam fillings",
              "Can replace old metal fillings for a cleaner look",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-foreground">
                <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <h2 className="text-2xl font-display font-semibold text-foreground mb-4">The Procedure</h2>
          <p className="text-muted-foreground leading-relaxed mb-8">
            The area is gently numbed for your comfort. Dr. Schult removes the decayed portion, cleans the area, and applies the composite in layers. A special light hardens each layer, and the filling is shaped and polished to match your natural bite. Most fillings take 30-60 minutes.
          </p>
        </FadeIn>

        <FadeIn>
          <h2 className="text-2xl font-display font-semibold text-foreground mb-4">Frequently Asked Questions</h2>
          <Accordion type="single" collapsible className="mb-8">
            <AccordionItem value="how-long">
              <AccordionTrigger>How long do fillings last?</AccordionTrigger>
              <AccordionContent>With proper care, composite fillings typically last 7-15 years. Regular checkups help us monitor their condition and replace them before any problems arise.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="painful">
              <AccordionTrigger>Is getting a filling painful?</AccordionTrigger>
              <AccordionContent>We use gentle numbing techniques so you shouldn't feel any pain during the procedure. Dr. Schult is known for her exceptionally gentle approach — especially with anxious patients.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="replace-metal">
              <AccordionTrigger>Can you replace my old metal fillings?</AccordionTrigger>
              <AccordionContent>Yes! We can safely remove old amalgam fillings and replace them with natural-looking composite material. Schedule a consultation to discuss your options.</AccordionContent>
            </AccordionItem>
          </Accordion>
        </FadeIn>

        <FadeIn className="text-center">
          <Button size="lg" asChild>
            <Link to="/contact">
              <Calendar className="w-4 h-4 mr-2" />
              Book a Consultation
            </Link>
          </Button>
        </FadeIn>
      </div>
    </Section>
  </>
);

export default DentalFillings;
