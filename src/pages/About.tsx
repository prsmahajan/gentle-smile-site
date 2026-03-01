import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Section, FadeIn, SectionHeader } from "@/components/ui-sections";
import { Heart, Award, Users, Calendar, ArrowRight, CheckCircle } from "lucide-react";
import drSchult from "@/assets/dr-schult.jpg";

const About = () => {
  return (
    <>
      {/* Hero */}
      <section className="pt-28 pb-16 lg:pt-36 lg:pb-24 bg-sage">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <FadeIn>
              <span className="inline-block text-xs font-semibold tracking-widest uppercase text-primary mb-3">
                About Dr. Schult
              </span>
              <h1 className="text-4xl lg:text-5xl font-display font-bold text-foreground mb-6">
                A Dentist Who Truly Cares
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Dr. Sara L. Schult has been providing gentle, compassionate dental care to the Wausau community for over 25 years. Her philosophy is simple: every patient deserves to feel safe, heard, and cared for.
              </p>
              <Button asChild>
                <Link to="/contact">
                  <Calendar className="w-4 h-4 mr-2" />
                  Schedule a Visit
                </Link>
              </Button>
            </FadeIn>
            <FadeIn delay={0.2}>
              <img src={drSchult} alt="Dr. Sara L. Schult" className="rounded-2xl shadow-lg w-full max-w-md mx-auto" />
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <Section>
        <SectionHeader
          label="Philosophy of Care"
          title="Why She Chose Dentistry"
          description="Dr. Schult didn't just choose dentistry — she chose to change how patients experience it."
        />
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { icon: Heart, title: "Compassion First", desc: "Every interaction is guided by empathy. Dr. Schult believes that understanding a patient's fears is the first step to helping them heal." },
            { icon: Users, title: "Lasting Relationships", desc: "Many patients have been with Dr. Schult for over 20 years. She builds trust through consistency, honesty, and genuine care." },
            { icon: Award, title: "Clinical Excellence", desc: "Continuing education and modern techniques ensure you receive the best possible care in a comfortable environment." },
          ].map((item, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div className="bg-card rounded-xl p-8 border border-border text-center">
                <div className="w-14 h-14 rounded-full bg-accent flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* Personal Touch */}
      <Section className="bg-warm">
        <div className="max-w-3xl mx-auto text-center">
          <FadeIn>
            <h2 className="text-3xl lg:text-4xl font-display font-semibold text-foreground mb-6">
              "I want every patient to leave feeling better than when they arrived — not just physically, but emotionally."
            </h2>
            <p className="text-lg text-muted-foreground mb-4">
              Dr. Schult specializes in caring for patients with dental anxiety. She understands the courage it takes to walk through those doors, and she honors that courage with patience, gentleness, and zero judgment.
            </p>
            <ul className="inline-flex flex-col items-start gap-2 mt-6 text-left">
              {["Anxiety-friendly techniques", "Patient-paced appointments", "Open and honest communication", "A team that genuinely cares"].map((item, i) => (
                <li key={i} className="flex items-center gap-2 text-foreground">
                  <CheckCircle className="w-5 h-5 text-primary shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </FadeIn>
        </div>
      </Section>

      {/* CTA */}
      <Section className="bg-primary">
        <div className="text-center max-w-xl mx-auto">
          <FadeIn>
            <h2 className="text-3xl font-display font-semibold text-primary-foreground mb-4">
              Experience the Difference
            </h2>
            <p className="text-primary-foreground/80 mb-6">
              Discover what gentle, judgment-free care feels like. Dr. Schult and her team can't wait to welcome you.
            </p>
            <Button size="lg" variant="secondary" asChild>
              <Link to="/contact">
                Book Your Appointment <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </FadeIn>
        </div>
      </Section>
    </>
  );
};

export default About;
