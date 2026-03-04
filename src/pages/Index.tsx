import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Section, FadeIn, SectionHeader } from "@/components/ui-sections";
import { Star, Heart, Shield, Clock, Phone, Calendar, Smile, ArrowRight, Sparkles, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import heroImage from "@/assets/hero-dental.jpg";
import drSchult from "@/assets/dr-schult.jpg";

const testimonials = [
  {
    name: "Long-term Patient",
    years: "26 years",
    text: "Dr. Schult is the most patient and gentle dentist I've ever had. I used to dread appointments, but now I actually look forward to them.",
  },
  {
    name: "Anxiety Patient",
    years: "8 years",
    text: "I hadn't been to a dentist in over 10 years because of my anxiety. Dr. Schult changed everything — zero judgment, just kindness.",
  },
  {
    name: "Family Patient",
    years: "15 years",
    text: "My whole family sees Dr. Schult. She's incredible with kids and has this calm presence that makes everyone feel at ease.",
  },
];

const services = [
  { icon: Shield, title: "Preventive Care", desc: "Cleanings, exams, and X-rays to keep your smile healthy" },
  { icon: Sparkles, title: "Restorative", desc: "Fillings, crowns, and bridges to restore your teeth" },
  { icon: Smile, title: "Cosmetic", desc: "Whitening and bonding for a brighter, confident smile" },
  { icon: Heart, title: "Anxiety-Friendly", desc: "A calm, patient approach for nervous visitors" },
];

const Index = () => {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-screen overflow-hidden">
        {/* Background image with overlay */}
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Calming dental office interior"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/75 to-foreground/40" />
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="flex flex-col justify-center min-h-screen max-w-2xl py-24">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <div className="flex items-center gap-2 mb-6">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="text-sm text-primary-foreground/60">5.0 Rating · Wausau, WI</span>
              </div>

              <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-primary-foreground leading-[1.08] mb-6">
                Gentle,{" "}
                <span className="text-primary italic">Judgment-Free</span>{" "}
                Dental Care
              </h1>

              <p className="text-lg md:text-xl text-primary-foreground/70 mb-10 leading-relaxed max-w-lg">
                Serving families with compassion for over 25 years. A calm, welcoming space where your comfort always comes first.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 mb-12">
                <Button size="lg" asChild className="text-base">
                  <Link to="/contact">
                    <Calendar className="w-5 h-5 mr-2" />
                    Schedule Appointment
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild className="text-base border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 bg-transparent">
                  <a href="tel:+17158489100">
                    <Phone className="w-5 h-5 mr-2" />
                    (715) 848-9100
                  </a>
                </Button>
              </div>

              <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-primary-foreground/50">
                <span className="flex items-center gap-1.5">
                  <CheckCircle className="w-3.5 h-3.5 text-primary" /> 26+ Years Experience
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle className="w-3.5 h-3.5 text-primary" /> Anxiety-Friendly
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle className="w-3.5 h-3.5 text-primary" /> Accepting New Patients
                </span>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Floating testimonial card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="absolute bottom-12 right-8 lg:right-16 bg-card/95 backdrop-blur-sm rounded-2xl p-5 shadow-xl border border-border max-w-xs hidden md:block z-10"
        >
          <div className="flex gap-0.5 mb-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
            ))}
          </div>
          <p className="text-sm text-foreground italic leading-relaxed">
            "The most patient and gentle dentist I've ever had."
          </p>
          <p className="text-xs text-muted-foreground mt-2">— Patient for 26 years</p>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
        >
          <span className="text-xs text-primary-foreground/40 tracking-widest uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            className="w-5 h-8 rounded-full border-2 border-primary-foreground/30 flex items-start justify-center pt-1.5"
          >
            <div className="w-1 h-1.5 rounded-full bg-primary-foreground/60" />
          </motion.div>
        </motion.div>
      </section>

      {/* Trust Bar */}
      <section className="bg-card border-b border-border">
        <div className="container mx-auto px-4 lg:px-8 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { value: "26+", label: "Years of Service" },
              { value: "5.0", label: "Star Rating" },
              { value: "100%", label: "Judgment-Free" },
              { value: "∞", label: "Patient Patience" },
            ].map((stat, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="text-2xl lg:text-3xl font-display font-bold text-primary">{stat.value}</div>
                <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Anxiety Section */}
      <Section className="bg-warm">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <FadeIn>
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-primary mb-3">
              You're Not Alone
            </span>
            <h2 className="text-3xl lg:text-4xl font-display font-semibold text-foreground mb-6">
              Afraid of the Dentist? We Understand.
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Dental anxiety affects millions of people. If you've been putting off dental care because of fear, embarrassment, or a bad past experience — you've found your safe space.
            </p>
            <ul className="space-y-3 mb-8">
              {[
                "No shaming, no judgment — ever",
                "We go at your pace, not ours",
                "Calm, relaxing atmosphere",
                "Gentle techniques that minimize discomfort",
                "Open communication every step of the way",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-foreground">
                  <CheckCircle className="w-5 h-5 text-primary shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <Button asChild>
              <Link to="/new-patients">
                Learn About Your First Visit
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </FadeIn>
          <FadeIn delay={0.2} className="relative">
            <div className="bg-card rounded-2xl p-8 shadow-lg border border-border">
              <blockquote className="text-lg italic text-foreground leading-relaxed mb-4">
                "I hadn't been to a dentist in 12 years. Dr. Schult made me feel so comfortable, I actually cried tears of relief after my first visit. No judgment. Just kindness."
              </blockquote>
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-sm text-muted-foreground mt-2">— Anxiety Patient, 8 years with Dr. Schult</p>
            </div>
          </FadeIn>
        </div>
      </Section>

      {/* Services */}
      <Section>
        <SectionHeader
          label="What We Offer"
          title="Comprehensive Dental Services"
          description="From routine cleanings to complete smile restoration, all delivered with the gentle care you deserve."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <Link
                to="/services"
                className="group block bg-card rounded-xl p-6 border border-border hover:border-primary/30 hover:shadow-md transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center mb-4 group-hover:bg-primary/10 transition-colors">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">{service.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{service.desc}</p>
                <span className="inline-flex items-center gap-1 text-sm text-primary mt-3 group-hover:gap-2 transition-all">
                  Learn more <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </Link>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* About Preview */}
      <Section className="bg-sage">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <FadeIn className="order-2 lg:order-1">
            <img
              src={drSchult}
              alt="Dr. Sara L. Schult"
              className="rounded-2xl shadow-lg w-full max-w-md mx-auto"
            />
          </FadeIn>
          <FadeIn delay={0.15} className="order-1 lg:order-2">
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-primary mb-3">
              Meet Your Dentist
            </span>
            <h2 className="text-3xl lg:text-4xl font-display font-semibold text-foreground mb-6">
              Dr. Sara L. Schult
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              With over 25 years of experience, Dr. Schult has built her practice on one simple belief: every patient deserves care that's gentle, honest, and free of judgment.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Her patients describe her as patient, encouraging, and exceptionally gentle — qualities that have earned her lasting relationships spanning decades. Many of her patients have been coming back for over 20 years.
            </p>
            <Button variant="outline" asChild>
              <Link to="/about">
                More About Dr. Schult
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </FadeIn>
        </div>
      </Section>

      {/* Testimonials */}
      <Section>
        <SectionHeader
          label="Patient Stories"
          title="What Our Patients Say"
          description="Don't just take our word for it — hear from patients whose lives have been changed."
        />
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div className="bg-card rounded-xl p-6 border border-border h-full flex flex-col">
                <div className="flex gap-0.5 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <blockquote className="text-foreground leading-relaxed flex-1 mb-4">
                  "{t.text}"
                </blockquote>
                <div className="text-sm text-muted-foreground">
                  <span className="font-medium text-foreground">{t.name}</span>
                  <span className="mx-1">·</span>
                  <span>{t.years}</span>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
        <FadeIn className="text-center mt-8">
          <Button variant="outline" asChild>
            <Link to="/reviews">
              Read All Reviews
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </FadeIn>
      </Section>

      {/* Insurance */}
      <Section className="bg-accent">
        <div className="text-center max-w-2xl mx-auto">
          <FadeIn>
            <h2 className="text-3xl lg:text-4xl font-display font-semibold text-foreground mb-4">
              Insurance & Payment
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              We accept most major dental insurance plans and offer flexible payment options to make quality dental care accessible for everyone.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button asChild>
                <Link to="/new-patients">View Payment Options</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link to="/contact">Verify Your Insurance</Link>
              </Button>
            </div>
          </FadeIn>
        </div>
      </Section>

      {/* Final CTA */}
      <Section className="bg-primary">
        <div className="text-center max-w-2xl mx-auto">
          <FadeIn>
            <h2 className="text-3xl lg:text-4xl font-display font-semibold text-primary-foreground mb-4">
              Ready for a Gentle Dental Experience?
            </h2>
            <p className="text-lg text-primary-foreground/80 mb-8">
              Take the first step toward a healthier smile in a space where your comfort comes first. We can't wait to meet you.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button size="lg" variant="secondary" asChild className="text-base">
                <Link to="/contact">
                  <Calendar className="w-5 h-5 mr-2" />
                  Schedule Your Visit
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="text-base border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 bg-transparent">
                <a href="tel:+17158489100">
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now
                </a>
              </Button>
            </div>
          </FadeIn>
        </div>
      </Section>
    </>
  );
};

export default Index;