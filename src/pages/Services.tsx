import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Section, FadeIn, SectionHeader } from "@/components/ui-sections";
import { Shield, Sparkles, Smile, ArrowRight, Calendar } from "lucide-react";

const serviceCategories = [
  {
    icon: Shield,
    title: "Preventive Dentistry",
    description: "Keeping your smile healthy with proactive care",
    services: [
      { name: "Professional Cleanings", desc: "Thorough cleanings to remove plaque and tartar buildup, keeping your gums healthy.", who: "Everyone — recommended every 6 months" },
      { name: "Comprehensive Exams", desc: "Detailed examinations to catch potential issues early when they're easiest to treat.", who: "New and returning patients" },
      { name: "Digital X-Rays", desc: "Low-radiation digital imaging for accurate diagnosis with maximum comfort.", who: "As needed for accurate diagnosis" },
      { name: "Fluoride Treatments", desc: "Strengthening enamel to protect against decay, especially beneficial for cavity-prone patients.", who: "Children and cavity-prone adults" },
    ],
  },
  {
    icon: Sparkles,
    title: "Restorative Dentistry",
    description: "Repairing and rebuilding your natural smile",
    services: [
      { name: "Tooth-Colored Fillings", desc: "Natural-looking composite fillings that blend seamlessly with your teeth.", who: "Patients with cavities or old metal fillings" },
      { name: "Dental Crowns", desc: "Custom-made caps that restore strength and appearance to damaged teeth.", who: "Patients with cracked, weakened, or worn teeth" },
      { name: "Bridges", desc: "Fixed replacements for missing teeth that look and feel natural.", who: "Patients missing one or more teeth" },
    ],
  },
  {
    icon: Smile,
    title: "Cosmetic Dentistry",
    description: "Enhancing your confidence with a beautiful smile",
    services: [
      { name: "Teeth Whitening", desc: "Professional whitening for a brighter, more radiant smile.", who: "Anyone wanting a whiter smile" },
      { name: "Dental Bonding", desc: "Repairing chips, gaps, and discoloration with natural-looking composite resin.", who: "Patients with minor cosmetic concerns" },
    ],
  },
];

const Services = () => {
  return (
    <>
      <section className="pt-28 pb-16 lg:pt-36 lg:pb-24 bg-accent">
        <div className="container mx-auto px-4 lg:px-8 text-center max-w-3xl">
          <FadeIn>
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-primary mb-3">
              Our Services
            </span>
            <h1 className="text-4xl lg:text-5xl font-display font-bold text-foreground mb-6">
              Comprehensive Dental Care, Gently Delivered
            </h1>
            <p className="text-lg text-muted-foreground">
              Every service is provided with the patience and care you deserve. We take the time to explain each procedure and ensure your complete comfort.
            </p>
          </FadeIn>
        </div>
      </section>

      {serviceCategories.map((category, ci) => (
        <Section key={ci} className={ci % 2 === 1 ? "bg-card" : ""}>
          <SectionHeader
            title={category.title}
            description={category.description}
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {category.services.map((service, si) => (
              <FadeIn key={si} delay={si * 0.1}>
                <div className="bg-card rounded-xl p-6 border border-border h-full">
                  <h3 className="font-display text-lg font-semibold text-foreground mb-2">{service.name}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-3">{service.desc}</p>
                  <p className="text-xs text-primary font-medium">Best for: {service.who}</p>
                </div>
              </FadeIn>
            ))}
          </div>
          <FadeIn className="text-center mt-8">
            <Button asChild>
              <Link to="/contact">
                <Calendar className="w-4 h-4 mr-2" />
                Book Consultation
              </Link>
            </Button>
          </FadeIn>
        </Section>
      ))}

      <Section className="bg-primary">
        <div className="text-center max-w-xl mx-auto">
          <FadeIn>
            <h2 className="text-3xl font-display font-semibold text-primary-foreground mb-4">
              Not Sure What You Need?
            </h2>
            <p className="text-primary-foreground/80 mb-6">
              Schedule a consultation and we'll create a personalized care plan together — no pressure, no judgment.
            </p>
            <Button size="lg" variant="secondary" asChild>
              <Link to="/contact">
                Schedule Free Consultation <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </FadeIn>
        </div>
      </Section>
    </>
  );
};

export default Services;
