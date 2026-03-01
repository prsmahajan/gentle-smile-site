import { Link } from "react-router-dom";
import { Section, FadeIn, SectionHeader } from "@/components/ui-sections";
import { ArrowRight, Clock } from "lucide-react";

const blogPosts = [
  {
    slug: "how-to-overcome-dental-anxiety",
    title: "How to Overcome Dental Anxiety",
    excerpt: "Dental anxiety is more common than you think. Learn practical strategies to manage your fear and find a dentist who truly understands.",
    date: "February 15, 2026",
    readTime: "6 min read",
    category: "Anxiety",
  },
  {
    slug: "what-happens-if-you-avoid-the-dentist",
    title: "What Happens If You Avoid the Dentist for 10 Years?",
    excerpt: "Skipping dental visits can have serious consequences. Here's what can happen — and why it's never too late to start again.",
    date: "January 28, 2026",
    readTime: "5 min read",
    category: "Education",
  },
  {
    slug: "how-often-should-you-get-a-cleaning",
    title: "How Often Should You Get a Dental Cleaning?",
    excerpt: "Is twice a year really enough? We break down the recommended cleaning schedule and who might need more frequent visits.",
    date: "January 10, 2026",
    readTime: "4 min read",
    category: "Preventive Care",
  },
];

const Blog = () => (
  <>
    <section className="pt-28 pb-16 lg:pt-36 lg:pb-24 bg-sage">
      <div className="container mx-auto px-4 lg:px-8 text-center max-w-3xl">
        <FadeIn>
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-primary mb-3">
            Dental Health Blog
          </span>
          <h1 className="text-4xl lg:text-5xl font-display font-bold text-foreground mb-6">
            Tips, Guides & Insights
          </h1>
          <p className="text-lg text-muted-foreground">
            Helpful articles from Dr. Schult's team to keep you informed, comfortable, and smiling.
          </p>
        </FadeIn>
      </div>
    </section>

    <Section>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {blogPosts.map((post, i) => (
          <FadeIn key={post.slug} delay={i * 0.1}>
            <Link
              to={`/blog/${post.slug}`}
              className="group block bg-card rounded-xl border border-border overflow-hidden hover:shadow-md transition-shadow h-full"
            >
              <div className="p-6 flex flex-col h-full">
                <span className="inline-block text-xs font-semibold tracking-wide uppercase text-primary mb-3">
                  {post.category}
                </span>
                <h2 className="font-display text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {post.title}
                </h2>
                <p className="text-sm text-muted-foreground leading-relaxed flex-1 mb-4">{post.excerpt}</p>
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <span>{post.date}</span>
                  <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {post.readTime}</span>
                </div>
              </div>
            </Link>
          </FadeIn>
        ))}
      </div>
    </Section>
  </>
);

export default Blog;
