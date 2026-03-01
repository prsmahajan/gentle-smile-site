import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Section, FadeIn, SectionHeader } from "@/components/ui-sections";
import { Calendar, ArrowRight, CheckCircle, FileText, CreditCard, Heart, Clock } from "lucide-react";

const steps = [
  { icon: Calendar, title: "Schedule Your Visit", desc: "Call us or use our contact form. We'll find a time that works for you." },
  { icon: FileText, title: "Paperwork Made Easy", desc: "Fill out forms at your own pace before your visit — online or in-office." },
  { icon: Heart, title: "Meet Dr. Schult", desc: "She'll take time to listen to your concerns, answer questions, and understand your needs." },
  { icon: CheckCircle, title: "Gentle Exam", desc: "A thorough but comfortable examination with clear explanations every step of the way." },
];

const NewPatients = () => {
  return (
    <>
      <section className="pt-28 pb-16 lg:pt-36 lg:pb-24 bg-warm">
        <div className="container mx-auto px-4 lg:px-8 text-center max-w-3xl">
          <FadeIn>
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-primary mb-3">
              Welcome
            </span>
            <h1 className="text-4xl lg:text-5xl font-display font-bold text-foreground mb-6">
              Your First Visit
            </h1>
            <p className="text-lg text-muted-foreground">
              We know the first visit can feel overwhelming — especially if it's been a while. Here's exactly what to expect so there are no surprises.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Steps */}
      <Section>
        <SectionHeader label="What to Expect" title="Your First Visit, Step by Step" />
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center mx-auto mb-4">
                  <step.icon className="w-8 h-8 text-primary" />
                </div>
                <div className="text-sm font-semibold text-primary mb-1">Step {i + 1}</div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* Insurance */}
      <Section className="bg-card">
        <div className="grid lg:grid-cols-2 gap-12">
          <FadeIn>
            <SectionHeader title="Insurance & Payment" description="We believe finances shouldn't stand between you and quality dental care." center={false} />
            <ul className="space-y-3">
              {[
                "We accept most major dental insurance plans",
                "We'll help verify your coverage before your visit",
                "Flexible payment options available",
                "Transparent pricing — no hidden fees",
                "We'll help you maximize your benefits",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-foreground">
                  <CheckCircle className="w-5 h-5 text-primary shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className="bg-sage rounded-xl p-8">
              <h3 className="font-display text-xl font-semibold text-foreground mb-4">Office Policies</h3>
              <div className="space-y-4 text-sm text-muted-foreground">
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-foreground">Appointment Times</p>
                    <p>Please arrive 15 minutes early for your first visit to complete paperwork.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CreditCard className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-foreground">Payment</p>
                    <p>Payment is due at time of service. We accept cash, checks, and all major credit cards.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Calendar className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-foreground">Cancellations</p>
                    <p>Please give us 24 hours notice if you need to cancel or reschedule.</p>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </Section>

      <Section className="bg-primary">
        <div className="text-center max-w-xl mx-auto">
          <FadeIn>
            <h2 className="text-3xl font-display font-semibold text-primary-foreground mb-4">
              Ready to Book Your First Visit?
            </h2>
            <p className="text-primary-foreground/80 mb-6">
              We promise to make your first experience as comfortable and welcoming as possible.
            </p>
            <Button size="lg" variant="secondary" asChild>
              <Link to="/contact">
                Book Your First Visit <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </FadeIn>
        </div>
      </Section>
    </>
  );
};

export default NewPatients;
