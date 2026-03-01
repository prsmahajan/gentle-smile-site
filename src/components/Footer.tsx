import { Link } from "react-router-dom";
import { Phone, MapPin, Clock, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-primary-foreground">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <h3 className="font-display text-xl font-semibold mb-3">Sara L. Schult, D.D.S.</h3>
            <p className="text-primary-foreground/70 text-sm leading-relaxed mb-4">
              Gentle, judgment-free dental care for the whole family. Serving Wausau with compassion for over 25 years.
            </p>
            <div className="flex items-center gap-1 text-sm text-primary-foreground/60">
              <Heart className="w-3.5 h-3.5" />
              <span>Anxiety-Friendly Practice</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-base font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              {[
                { label: "About Dr. Schult", path: "/about" },
                { label: "Our Services", path: "/services" },
                { label: "New Patients", path: "/new-patients" },
                { label: "Reviews", path: "/reviews" },
                { label: "Contact Us", path: "/contact" },
              ].map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display text-base font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              {["Cleanings & Exams", "Fillings", "Crowns & Bridges", "Teeth Whitening", "Preventive Care"].map(
                (service) => (
                  <li key={service}>
                    <Link to="/services" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                      {service}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-base font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 mt-0.5 shrink-0" />
                <a href="tel:+17158489100" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  (715) 848-9100
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                <span className="text-primary-foreground/70">
                  Wausau, Wisconsin
                </span>
              </li>
              <li className="flex items-start gap-2">
                <Clock className="w-4 h-4 mt-0.5 shrink-0" />
                <div className="text-primary-foreground/70">
                  <p>Mon–Thu: 8am–5pm</p>
                  <p>Fri: 8am–12pm</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-12 pt-8 text-center text-sm text-primary-foreground/50">
          <p>© {new Date().getFullYear()} Sara L. Schult, D.D.S. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
