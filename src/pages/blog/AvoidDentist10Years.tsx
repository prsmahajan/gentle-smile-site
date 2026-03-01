import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Section, FadeIn } from "@/components/ui-sections";
import { ArrowLeft, Calendar } from "lucide-react";

const AvoidDentist10Years = () => (
  <>
    <section className="pt-28 pb-16 lg:pt-36 lg:pb-24 bg-sage">
      <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
        <FadeIn>
          <Link to="/blog" className="inline-flex items-center gap-1 text-sm text-primary hover:underline mb-6">
            <ArrowLeft className="w-4 h-4" /> Back to Blog
          </Link>
          <span className="block text-xs font-semibold tracking-widest uppercase text-primary mb-3">Education</span>
          <h1 className="text-4xl lg:text-5xl font-display font-bold text-foreground mb-4">
            What Happens If You Avoid the Dentist for 10 Years?
          </h1>
          <p className="text-sm text-muted-foreground">January 28, 2026 · 5 min read</p>
        </FadeIn>
      </div>
    </section>

    <Section>
      <article className="max-w-3xl mx-auto prose-custom">
        <FadeIn>
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            Life gets busy. Maybe you had a bad experience. Maybe you just kept putting it off. Whatever the reason, if you haven't seen a dentist in a decade, you're not alone — and it's never too late to start again.
          </p>

          <h2 className="text-2xl font-display font-semibold text-foreground mb-4">What Can Happen Over 10 Years</h2>
          <div className="space-y-4 mb-8">
            {[
              { title: "Plaque & Tartar Buildup", desc: "Without professional cleanings, plaque hardens into tartar that can only be removed by a dental professional. This buildup leads to cavities and gum irritation." },
              { title: "Gum Disease", desc: "Gingivitis (early gum disease) can progress to periodontitis, causing gum recession, bone loss, and eventually tooth loss if untreated." },
              { title: "Hidden Cavities", desc: "Small cavities that could have been treated with a simple filling may grow into larger problems requiring crowns or root canals." },
              { title: "Tooth Loss", desc: "Advanced decay and gum disease are the leading causes of tooth loss in adults. Early intervention prevents this." },
              { title: "Overall Health Effects", desc: "Research links poor oral health to heart disease, diabetes complications, and other systemic health issues." },
            ].map((item, i) => (
              <div key={i} className="bg-card rounded-lg p-4 border border-border">
                <h3 className="font-display font-semibold text-foreground mb-1">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-display font-semibold text-foreground mb-4">The Good News: It's Never Too Late</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            No matter how long it's been, modern dentistry can help restore your oral health. The first step is the hardest — walking through the door. At our Wausau practice, Dr. Schult has welcomed countless patients who haven't seen a dentist in years.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-8">
            There's no judgment here. Just a calm, gentle assessment of where things are and a step-by-step plan to get your smile back on track — at your pace.
          </p>
        </FadeIn>

        <FadeIn className="text-center">
          <Button size="lg" asChild>
            <Link to="/contact">
              <Calendar className="w-4 h-4 mr-2" />
              Take the First Step
            </Link>
          </Button>
        </FadeIn>
      </article>
    </Section>
  </>
);

export default AvoidDentist10Years;
