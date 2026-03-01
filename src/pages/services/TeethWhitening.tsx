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

const TeethWhitening = () => (
  <>
    <section className="pt-28 pb-16 lg:pt-36 lg:pb-24 bg-sage">
      <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
        <FadeIn>
          <Link to="/services" className="inline-flex items-center gap-1 text-sm text-primary hover:underline mb-6">
            <ArrowLeft className="w-4 h-4" /> All Services
          </Link>
          <span className="block text-xs font-semibold tracking-widest uppercase text-primary mb-3">Cosmetic Dentistry</span>
          <h1 className="text-4xl lg:text-5xl font-display font-bold text-foreground mb-6">
            Teeth Whitening in Wausau
          </h1>
          <p className="text-lg text-muted-foreground">
            Professional teeth whitening for a brighter, more confident smile — safe, effective, and tailored to your goals.
          </p>
        </FadeIn>
      </div>
    </section>

    <Section>
      <div className="max-w-3xl mx-auto">
        <FadeIn>
          <h2 className="text-2xl font-display font-semibold text-foreground mb-4">Why Professional Whitening?</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Over-the-counter whitening products can be inconsistent and may cause sensitivity. Professional whitening at our Wausau office delivers dramatically better results in less time, with custom-fitted trays and professional-grade products that protect your enamel.
          </p>
          <h2 className="text-2xl font-display font-semibold text-foreground mb-4">Benefits</h2>
          <ul className="space-y-3 mb-8">
            {[
              "Dramatically whiter teeth in less time",
              "Custom-fitted trays for even results",
              "Professional-grade whitening agents",
              "Minimized sensitivity with supervised treatment",
              "Long-lasting results with proper maintenance",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-foreground">
                <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </FadeIn>

        <FadeIn>
          <h2 className="text-2xl font-display font-semibold text-foreground mb-4">Frequently Asked Questions</h2>
          <Accordion type="single" collapsible className="mb-8">
            <AccordionItem value="how-long">
              <AccordionTrigger>How long do results last?</AccordionTrigger>
              <AccordionContent>Results can last 1-3 years depending on diet and habits. We provide touch-up kits to maintain your bright smile over time.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="sensitivity">
              <AccordionTrigger>Will it cause sensitivity?</AccordionTrigger>
              <AccordionContent>Some patients experience temporary sensitivity, but our professional approach minimizes this significantly compared to store-bought products.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="candidate">
              <AccordionTrigger>Am I a good candidate?</AccordionTrigger>
              <AccordionContent>Most adults with healthy teeth and gums are great candidates. We'll evaluate your teeth during a consultation and recommend the best approach for your situation.</AccordionContent>
            </AccordionItem>
          </Accordion>
        </FadeIn>

        <FadeIn className="text-center">
          <Button size="lg" asChild>
            <Link to="/contact">
              <Calendar className="w-4 h-4 mr-2" />
              Book a Whitening Consultation
            </Link>
          </Button>
        </FadeIn>
      </div>
    </Section>
  </>
);

export default TeethWhitening;
