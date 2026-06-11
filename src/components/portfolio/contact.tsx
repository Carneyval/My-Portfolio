import { Instagram, Linkedin, Mail, ArrowUpRight } from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";

const channels = [
  { icon: Mail, label: "Email", value: "pramudia.ramadhan.r@gmail.com", href: "mailto:pramudia.ramadhan.r@gmail.com" },
  { icon: Linkedin, label: "LinkedIn", value: "Pramudia Ramadhan", href: "https://linkedin.com/in/pramudia-r" },
  { icon: Instagram, label: "Instagram", value: "@ramaa4a", href: "https://instagram.com/ramaa4a" },
];

export function Contact() {
  const ref = useReveal<HTMLElement>();
  return (
    <section ref={ref} id="contact" className="relative py-28">
      <div className="container mx-auto px-4 md:px-6">
        <div className="reveal card-luxury relative overflow-hidden p-10 md:p-16 ring-gold-soft">
          <div className="orb bg-gold w-[420px] h-[420px] -top-32 -right-32 animate-pulse-glow" />
          <div className="orb bg-glow w-[360px] h-[360px] -bottom-24 -left-24 animate-pulse-glow" style={{ animationDelay: "1s" }} />

          <div className="relative grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-xs tracking-[0.3em] uppercase text-gold mb-4">Contact</p>
              <h2 className="font-display text-4xl md:text-6xl leading-[1.02]">
                Let's build something <span className="text-gradient-gold italic">meaningful</span>.
              </h2>
              <p className="mt-6 text-muted-foreground max-w-md leading-relaxed">
                Open to data science, machine learning and analytics roles, as well as
                freelance projects. I'd love to hear what you're working on.
              </p>

              <a
                href="mailto:pramudia.ramadhan.r@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-2 h-12 px-6 rounded-full gradient-gold text-gold-foreground font-medium text-sm hover-lift"
              >
                <Mail size={16} /> Say hello
              </a>
            </div>

            <div className="space-y-3">
              {channels.map(({ icon: Icon, label, value, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center justify-between gap-4 p-5 rounded-2xl border border-border bg-card/60 hover:border-gold/60 hover:bg-card transition-all"
                >
                  <div className="flex items-center gap-4">
                    <span className="h-11 w-11 grid place-items-center rounded-xl bg-gold/10 text-gold border border-gold/20 group-hover:bg-gold group-hover:text-gold-foreground transition-colors">
                      <Icon size={18} />
                    </span>
                    <div>
                      <p className="text-[11px] tracking-[0.25em] uppercase text-muted-foreground">{label}</p>
                      <p className="font-medium">{value}</p>
                    </div>
                  </div>
                  <ArrowUpRight size={18} className="text-muted-foreground group-hover:text-gold group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
