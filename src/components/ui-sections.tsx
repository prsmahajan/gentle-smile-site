import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

export const Section = ({ children, className = "", id }: SectionProps) => (
  <section id={id} className={`py-16 lg:py-24 ${className}`}>
    <div className="container mx-auto px-4 lg:px-8">{children}</div>
  </section>
);

export const FadeIn = ({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.5, delay, ease: "easeOut" }}
    className={className}
  >
    {children}
  </motion.div>
);

export const SectionHeader = ({
  label,
  title,
  description,
  center = true,
}: {
  label?: string;
  title: string;
  description?: string;
  center?: boolean;
}) => (
  <FadeIn className={`mb-12 lg:mb-16 ${center ? "text-center max-w-2xl mx-auto" : ""}`}>
    {label && (
      <span className="inline-block text-xs font-semibold tracking-widest uppercase text-primary mb-3">
        {label}
      </span>
    )}
    <h2 className="text-3xl lg:text-4xl font-display font-semibold text-foreground text-balance">
      {title}
    </h2>
    {description && (
      <p className="mt-4 text-lg text-muted-foreground text-balance">{description}</p>
    )}
  </FadeIn>
);
