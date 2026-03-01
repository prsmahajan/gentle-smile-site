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

const DentalCrowns = () => (
  <>
    <section className="pt-28 pb-16 lg:pt-36 lg:pb-24 bg-sage">
      <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
        <FadeIn>
          <Link to="/services" className="inline-flex items-center gap-1 text-sm text-primary hover:underline mb-6">
            <ArrowLeft className="w-4 h-4" /> All Services
          </Link>
          <span className="block text-xs font-semibold tracking-widest uppercase text-primary mb-3">Restorative Dentistry</span>
          <h1 className="text-4xl lg:text-5xl font-display font-bold text-foreground mb-6">
            Dental Crowns in Wausau
          </h1>
          <p className="text-lg text-muted-foreground">
            Custom-made crowns to restore strength, function, and beauty to damaged teeth — crafted with precision and placed with gentle care.
          </p>
        </FadeIn>
      </div>
    </section>

    <Section>
      <div className="max-w-3xl mx-auto">
        <FadeIn>
          <h2 className="text-2xl font-display font-semibold text-foreground mb-4">What Is a Dental Crown?</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            A dental crown is a custom-fitted cap that covers a damaged or weakened tooth, restoring its shape, size, strength, and appearance. Modern crowns are made from tooth-colored materials that look and feel like natural teeth.
          </p>
          <h2 className="text-2xl font-display font-semibold text-foreground mb-4">When You Might Need a Crown</h2>
          <ul className="space-y-3 mb-8">
            {[
              "Cracked or fractured tooth",
              "Large cavity too big for a filling",
              "After root canal treatment",
              "Severely worn or weakened teeth",
              "Cosmetic improvement of misshapen teeth",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-foreground">
                <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <h2 className="text-2xl font-display font-semibold text-foreground mb-4">The Process</h2>
          <p className="text-muted-foreground leading-relaxed mb-8">
            Getting a crown typically requires two visits. During the first visit, Dr. Schult prepares the tooth, takes precise impressions, and places a comfortable temporary crown. At your second visit, the custom permanent crown is fitted and bonded into place. We ensure your bite is perfect and the crown matches your natural teeth.
          </p>
        </FadeIn>

        <FadeIn>
          <h2 className="text-2xl font-display font-semibold text-foreground mb-4">Frequently Asked Questions</h2>
          <Accordion type="single" collapsible className="mb-8">
            <AccordionItem value="how-long">
              <AccordionTrigger>How long do crowns last?</AccordionTrigger>
              <AccordionContent>With proper care and regular dental visits, crowns can last 10-15 years or longer. We'll monitor your crown at every checkup.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="painful">
              <AccordionTrigger>Is the procedure painful?</AccordionTrigger>
              <AccordionContent>The area is thoroughly numbed, so you won't feel pain during the procedure. Some patients experience mild sensitivity afterward, which resolves quickly.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="cost">
              <AccordionTrigger>Does insurance cover crowns?</AccordionTrigger>
              <AccordionContent>Most dental insurance plans cover a portion of crown costs. We'll verify your benefits and discuss payment options before any treatment begins.</AccordionContent>
            </AccordionItem>
          </Accordion>
        </FadeIn>

        <FadeIn className="text-center">
          <Button size="lg" asChild>
            <Link to="/contact">
              <Calendar className="w-4 h-4 mr-2" />
              Schedule a Consultation
            </Link>
          </Button>
        </FadeIn>
      </div>
    </Section>
  </>
);

export default DentalCrowns;
