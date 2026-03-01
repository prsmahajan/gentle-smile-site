import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Section, FadeIn } from "@/components/ui-sections";
import { ArrowLeft, Calendar, CheckCircle } from "lucide-react";

const HowOftenCleaning = () => (
  <>
    <section className="pt-28 pb-16 lg:pt-36 lg:pb-24 bg-sage">
      <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
        <FadeIn>
          <Link to="/blog" className="inline-flex items-center gap-1 text-sm text-primary hover:underline mb-6">
            <ArrowLeft className="w-4 h-4" /> Back to Blog
          </Link>
          <span className="block text-xs font-semibold tracking-widest uppercase text-primary mb-3">Preventive Care</span>
          <h1 className="text-4xl lg:text-5xl font-display font-bold text-foreground mb-4">
            How Often Should You Get a Dental Cleaning?
          </h1>
          <p className="text-sm text-muted-foreground">January 10, 2026 · 4 min read</p>
        </FadeIn>
      </div>
    </section>

    <Section>
      <article className="max-w-3xl mx-auto prose-custom">
        <FadeIn>
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            The standard recommendation is twice a year — but is that right for everyone? Let's break down how often you should really be visiting the dentist for professional cleanings.
          </p>

          <h2 className="text-2xl font-display font-semibold text-foreground mb-4">The General Rule: Every 6 Months</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            For most healthy adults, a professional cleaning every six months is sufficient. These visits allow your hygienist to remove plaque and tartar buildup, and give Dr. Schult the opportunity to catch any issues early — when they're simplest and least expensive to treat.
          </p>

          <h2 className="text-2xl font-display font-semibold text-foreground mb-4">Who Might Need More Frequent Cleanings?</h2>
          <ul className="space-y-3 mb-8">
            {[
              "Patients with a history of gum disease (periodontitis)",
              "Smokers or former smokers",
              "People with diabetes or other systemic conditions",
              "Patients who are cavity-prone",
              "Pregnant women (hormonal changes affect gum health)",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-foreground">
                <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <h2 className="text-2xl font-display font-semibold text-foreground mb-4">What Happens During a Cleaning?</h2>
          <p className="text-muted-foreground leading-relaxed mb-8">
            A professional cleaning includes scaling (removing tartar), polishing your teeth, flossing, and often a fluoride treatment. Dr. Schult will also perform an examination, checking for cavities, gum disease, and oral cancer. The whole visit typically takes about 45-60 minutes.
          </p>
        </FadeIn>

        <FadeIn className="text-center">
          <Button size="lg" asChild>
            <Link to="/contact">
              <Calendar className="w-4 h-4 mr-2" />
              Schedule Your Cleaning
            </Link>
          </Button>
        </FadeIn>
      </article>
    </Section>
  </>
);

export default HowOftenCleaning;
