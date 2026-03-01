import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Section, FadeIn } from "@/components/ui-sections";
import { ArrowLeft, Calendar, CheckCircle } from "lucide-react";

const OvercomeDentalAnxiety = () => (
  <>
    <section className="pt-28 pb-16 lg:pt-36 lg:pb-24 bg-sage">
      <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
        <FadeIn>
          <Link to="/blog" className="inline-flex items-center gap-1 text-sm text-primary hover:underline mb-6">
            <ArrowLeft className="w-4 h-4" /> Back to Blog
          </Link>
          <span className="block text-xs font-semibold tracking-widest uppercase text-primary mb-3">Anxiety</span>
          <h1 className="text-4xl lg:text-5xl font-display font-bold text-foreground mb-4">
            How to Overcome Dental Anxiety
          </h1>
          <p className="text-sm text-muted-foreground">February 15, 2026 · 6 min read</p>
        </FadeIn>
      </div>
    </section>

    <Section>
      <article className="max-w-3xl mx-auto prose-custom">
        <FadeIn>
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            If the thought of visiting the dentist makes your heart race, you're not alone. Studies suggest that 36% of people experience dental anxiety, and up to 12% have an extreme fear. The good news? There are proven strategies to help — and finding the right dentist makes all the difference.
          </p>

          <h2 className="text-2xl font-display font-semibold text-foreground mb-4">Why Does Dental Anxiety Happen?</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Dental anxiety often stems from past negative experiences, fear of pain, feeling out of control, or embarrassment about the state of your teeth. Whatever the cause, it's valid — and a compassionate dentist will never judge you for it.
          </p>

          <h2 className="text-2xl font-display font-semibold text-foreground mb-4">Practical Strategies That Help</h2>
          <ul className="space-y-3 mb-8">
            {[
              "Choose a dentist who specializes in anxious patients — look for words like 'gentle' and 'judgment-free'",
              "Communicate openly about your fears before your appointment",
              "Agree on a hand signal to pause treatment anytime",
              "Practice deep breathing or bring headphones with calming music",
              "Start with a simple visit — just a consultation, no treatment",
              "Bring a supportive friend or family member",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-foreground">
                <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <h2 className="text-2xl font-display font-semibold text-foreground mb-4">You Deserve Gentle Care</h2>
          <p className="text-muted-foreground leading-relaxed mb-8">
            At our Wausau office, Dr. Schult has spent over 25 years helping anxious patients feel safe and comfortable. Many of her patients hadn't seen a dentist in years before finding her — and now they actually look forward to their appointments. If you've been putting off dental care, know that you'll be welcomed here without judgment.
          </p>
        </FadeIn>

        <FadeIn className="text-center">
          <Button size="lg" asChild>
            <Link to="/contact">
              <Calendar className="w-4 h-4 mr-2" />
              Schedule a Gentle Visit
            </Link>
          </Button>
        </FadeIn>
      </article>
    </Section>
  </>
);

export default OvercomeDentalAnxiety;
