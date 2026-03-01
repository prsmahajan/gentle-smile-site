import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Section, FadeIn, SectionHeader } from "@/components/ui-sections";
import { Star, Calendar, ArrowRight, Quote } from "lucide-react";

const reviews = [
  {
    name: "Long-term Patient",
    years: "26 years",
    text: "Dr. Schult is the most patient and gentle dentist I've ever had. I've been going to her for 26 years and wouldn't dream of going anywhere else. She truly cares about her patients.",
    highlight: "Patient and gentle — 26 years and counting",
  },
  {
    name: "Anxiety Recovery",
    years: "8 years",
    text: "I hadn't been to a dentist in over 10 years because of severe anxiety. Dr. Schult completely changed my relationship with dental care. She never once made me feel judged or rushed. I actually look forward to my appointments now.",
    highlight: "From 10 years of avoidance to looking forward to visits",
  },
  {
    name: "Family Patient",
    years: "15 years",
    text: "Our whole family — three generations — sees Dr. Schult. She is amazing with my kids and even my elderly mother feels comfortable with her. The office atmosphere is calm and welcoming.",
    highlight: "Three generations of trust",
  },
  {
    name: "Nervous Patient",
    years: "5 years",
    text: "I used to cancel appointments at the last minute because I was so nervous. Dr. Schult sat with me and talked me through everything before touching a single instrument. That changed everything for me.",
    highlight: "From canceling to committed — patience that changed everything",
  },
  {
    name: "New to Wausau",
    years: "3 years",
    text: "When I moved to Wausau, I was dreading finding a new dentist. Dr. Schult came highly recommended and I can see why. She's thorough, gentle, and genuinely kind. Best dental experience I've ever had.",
    highlight: "The best dental experience — worth every recommendation",
  },
];

const Reviews = () => {
  return (
    <>
      <section className="pt-28 pb-16 lg:pt-36 lg:pb-24 bg-accent">
        <div className="container mx-auto px-4 lg:px-8 text-center max-w-3xl">
          <FadeIn>
            <div className="flex items-center justify-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <h1 className="text-4xl lg:text-5xl font-display font-bold text-foreground mb-4">
              5.0 Star Rating
            </h1>
            <p className="text-lg text-muted-foreground">
              Don't just take our word for it. Here's what our patients have to say about their experiences with Dr. Schult.
            </p>
          </FadeIn>
        </div>
      </section>

      <Section>
        <div className="space-y-8 max-w-3xl mx-auto">
          {reviews.map((review, i) => (
            <FadeIn key={i} delay={i * 0.08}>
              <div className="bg-card rounded-xl p-8 border border-border">
                <Quote className="w-8 h-8 text-primary/20 mb-4" />
                <blockquote className="text-lg text-foreground leading-relaxed mb-4">
                  {review.text}
                </blockquote>
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <div className="text-sm">
                    <span className="font-medium text-foreground">{review.name}</span>
                    <span className="text-muted-foreground"> · {review.years} with Dr. Schult</span>
                  </div>
                  <span className="text-xs bg-sage text-sage-foreground px-3 py-1 rounded-full font-medium">
                    {review.highlight}
                  </span>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>

      <Section className="bg-primary">
        <div className="text-center max-w-xl mx-auto">
          <FadeIn>
            <h2 className="text-3xl font-display font-semibold text-primary-foreground mb-4">
              Ready to Experience It Yourself?
            </h2>
            <p className="text-primary-foreground/80 mb-6">
              Join the growing family of patients who've found their dental home.
            </p>
            <Button size="lg" variant="secondary" asChild>
              <Link to="/contact">
                Schedule Your Visit <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </FadeIn>
        </div>
      </Section>
    </>
  );
};

export default Reviews;
