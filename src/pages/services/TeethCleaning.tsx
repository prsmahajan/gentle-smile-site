import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Section, FadeIn, SectionHeader } from "@/components/ui-sections";
import { Calendar, CheckCircle, ArrowLeft } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import JsonLd from "@/components/JsonLd";

const TeethCleaning = () => (
  <>
    <JsonLd data={{
      "@context": "https://schema.org",
      "@type": "MedicalWebPage",
      "name": "Teeth Cleaning in Wausau | Sara L. Schult, D.D.S.",
      "description": "Professional dental cleanings at our Wausau office help prevent cavities, gum disease, and keep your smile bright.",
      "url": "https://www.drschultdds.com/services/teeth-cleaning",
      "mainEntity": {
        "@type": "MedicalProcedure",
        "name": "Professional Teeth Cleaning",
        "procedureType": "https://schema.org/TherapeuticProcedure",
        "description": "Thorough cleaning to remove plaque and tartar buildup",
        "howPerformed": "Scaling, polishing, and fluoride treatment",
        "preparation": "No special preparation needed",
      },
      "provider": { "@type": "Dentist", "name": "Sara L. Schult, D.D.S.", "telephone": "+1-715-848-9100" },
    }} />
    <section className="pt-28 pb-16 lg:pt-36 lg:pb-24 bg-sage">
      <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
        <FadeIn>
          <Link to="/services" className="inline-flex items-center gap-1 text-sm text-primary hover:underline mb-6">
            <ArrowLeft className="w-4 h-4" /> All Services
          </Link>
          <span className="block text-xs font-semibold tracking-widest uppercase text-primary mb-3">Preventive Dentistry</span>
          <h1 className="text-4xl lg:text-5xl font-display font-bold text-foreground mb-6">
            Teeth Cleaning in Wausau
          </h1>
          <p className="text-lg text-muted-foreground">
            Professional dental cleanings at our Wausau office help prevent cavities, gum disease, and keep your smile bright — all in a gentle, anxiety-friendly environment.
          </p>
        </FadeIn>
      </div>
    </section>

    <Section>
      <div className="max-w-3xl mx-auto">
        <FadeIn>
          <h2 className="text-2xl font-display font-semibold text-foreground mb-4">What Is a Professional Teeth Cleaning?</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            A professional cleaning (prophylaxis) removes plaque and tartar buildup that regular brushing and flossing can't reach. Our hygienists use gentle techniques to thoroughly clean your teeth while keeping you comfortable throughout the entire process.
          </p>
          <h2 className="text-2xl font-display font-semibold text-foreground mb-4">Why Regular Cleanings Matter</h2>
          <ul className="space-y-3 mb-8">
            {[
              "Prevents cavities and tooth decay",
              "Reduces risk of gum disease",
              "Removes surface stains for a brighter smile",
              "Allows early detection of dental problems",
              "Freshens breath and improves oral health",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-foreground">
                <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <h2 className="text-2xl font-display font-semibold text-foreground mb-4">What to Expect</h2>
          <p className="text-muted-foreground leading-relaxed mb-8">
            Your cleaning appointment typically takes 45-60 minutes. We start with a gentle examination, followed by careful scaling to remove buildup, polishing to smooth and brighten teeth, and a fluoride treatment if needed. Dr. Schult will review your results and discuss any findings with you — no surprises, no pressure.
          </p>
        </FadeIn>

        <FadeIn>
          <h2 className="text-2xl font-display font-semibold text-foreground mb-4">Frequently Asked Questions</h2>
          <Accordion type="single" collapsible className="mb-8">
            <AccordionItem value="how-often">
              <AccordionTrigger>How often should I get a cleaning?</AccordionTrigger>
              <AccordionContent>Most patients benefit from cleanings every 6 months. Patients with gum disease or higher risk may need more frequent visits. We'll recommend a schedule tailored to your needs.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="painful">
              <AccordionTrigger>Are dental cleanings painful?</AccordionTrigger>
              <AccordionContent>Professional cleanings should not be painful. You may feel some pressure or sensitivity, but Dr. Schult's team uses gentle techniques. If you're anxious, let us know — we'll go at your pace.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="insurance">
              <AccordionTrigger>Does insurance cover cleanings?</AccordionTrigger>
              <AccordionContent>Most dental insurance plans cover two preventive cleanings per year. Contact us and we'll verify your coverage before your visit.</AccordionContent>
            </AccordionItem>
          </Accordion>
        </FadeIn>

        <FadeIn className="text-center">
          <Button size="lg" asChild>
            <Link to="/contact">
              <Calendar className="w-4 h-4 mr-2" />
              Schedule Your Cleaning
            </Link>
          </Button>
        </FadeIn>
      </div>
    </Section>
  </>
);

export default TeethCleaning;
