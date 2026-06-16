import { ArrowDown, Download, Instagram, Linkedin, Mail, Sparkles } from "lucide-react";
import portrait from "@/assets/wajah.png";
import { useTyper } from "@/hooks/use-typer";

export function Hero() {
  const role = useTyper(
    ["Data Scientist", "Data Analyst", "Machine Learning Enthusiast", "NLP Enthusiast", "Web Developer"],
    { typeSpeed: 75, deleteSpeed: 35, pause: 1600 },
  );

  return (
    <section id="home" className="relative min-h-screen pt-32 pb-16 overflow-hidden">
      {/* Background ambience */}
      <div className="absolute inset-0 grid-pattern opacity-60 pointer-events-none" />
      <div className="orb bg-gold w-[420px] h-[420px] -top-20 -right-20 animate-pulse-glow" />
      <div className="orb bg-glow w-[480px] h-[480px] bottom-0 -left-32 animate-pulse-glow" style={{ animationDelay: "1.5s" }} />

      <div className="container mx-auto px-4 md:px-6 relative">
        <div className="grid lg:grid-cols-[1.15fr_1fr] gap-12 lg:gap-16 items-center">
          {/* Left */}
          <div className="reveal in-view">
            <div className="inline-flex items-center gap-2 text-xs font-medium tracking-[0.2em] uppercase text-gold mb-6 px-3 py-1.5 rounded-full glass">
              <Sparkles size={12} />
              <span>Portfolio · 2026</span>
            </div>

            <p className="text-muted-foreground mb-3 text-lg">Hi, I'm</p>
            <h1 className="font-display text-[clamp(2.6rem,7vw,5.5rem)] leading-[0.95] font-semibold">
              <span className="text-gradient-luxury">Pramudia</span>
              <br />
              <span className="text-gradient-luxury">Ramadhan</span>
            </h1>
            <p className="mt-4 text-muted-foreground text-base md:text-lg">
              You can call me <span className="text-foreground font-medium">Rama</span>.
            </p>

            <div className="mt-8 flex items-baseline gap-3 text-xl md:text-2xl font-display">
              <span className="text-muted-foreground text-base">I am a</span>
              <span className="text-gold min-h-[1.5em] inline-flex items-center">
                {role}
                <span className="ml-1 inline-block w-[2px] h-[1.1em] bg-gold animate-blink" />
              </span>
            </div>


            <div className="mt-10 flex flex-wrap gap-3">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 h-12 px-6 rounded-full gradient-gold text-gold-foreground font-medium text-sm hover:opacity-90 transition-all hover-lift"
              >
                View Projects <ArrowDown size={16} />
              </a>
              <a
                href="/resume.pdf"
                target="_blank" className="inline-flex items-center gap-2 h-12 px-6 rounded-full border border-gold/40 text-foreground font-medium text-sm hover:bg-gold/10 hover:border-gold transition-all"
              >
                <Download size={16} /> Download CV
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 h-12 px-6 rounded-full border border-border text-muted-foreground hover:text-foreground hover:border-foreground/30 font-medium text-sm transition-all"
              >
                Contact Me
              </a>
            </div>

            <div className="mt-10 flex items-center gap-4 text-muted-foreground">
              <span className="text-xs tracking-[0.25em] uppercase">Find me</span>
              <span className="h-px w-10 bg-border" />
              {[
                { icon: Mail, href: "pramudia.ramadhan.r@gmail.com", label: "Email" },
                { icon: Linkedin, href: "https://linkedin.com/in/pramudia-r", label: "LinkedIn" },
                { icon: Instagram, href: "https://instagram.com/ramaa4a", label: "Instagram" },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noreferrer"
                  className="h-10 w-10 grid place-items-center rounded-full border border-border hover:border-gold hover:text-gold transition-colors"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Right visual */}
          <div className="reveal in-view relative">
            <div className="relative aspect-[4/5] max-w-md mx-auto">
              {/* Glow */}
              <div className="absolute inset-0 -m-6 rounded-[2.5rem] bg-linear-to-br from-gold/30 via-transparent to-glow/20 blur-2xl" />

              {/* Frame */}
              <div className="relative h-full w-full rounded-[2.2rem] overflow-hidden ring-gold-soft border border-border bg-card">
                <img
                  src={portrait}
                  alt="Pramudia Ramadhan"
                  width={768}
                  height={960}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-background/60 via-transparent to-transparent" />

                {/* Bottom stats */}
                <div className="absolute bottom-4 left-4 right-4 glass rounded-2xl p-4 flex items-center justify-between">
                  <div>
                    <p className="text-[10px] tracking-[0.25em] uppercase text-muted-foreground">Focus</p>
                    <p className="font-display text-sm">Data · ML · NLP</p>
                  </div>
                  <div className="text-right">
                    <p className="text-[10px] tracking-[0.25em] uppercase text-muted-foreground">Based in</p>
                    <p className="font-display text-sm">Indonesia</p>
                  </div>
                </div>
              </div>

              {/* Floating badges */}
              <div className="absolute -left-6 top-16 glass rounded-2xl px-4 py-3 animate-float shadow-xl hidden sm:block">
                <p className="font-display text-sm">Data Analyst</p>
              </div>
              <div className="absolute -right-4 top-1/3 glass rounded-2xl px-4 py-3 animate-float-slow shadow-xl">
                <div className="flex items-center gap-2">
                  <p className="text-xs">Data Scientist</p>
                </div>
              </div>
              <div className="absolute -left-2 bottom-24 glass rounded-2xl px-4 py-3 animate-float shadow-xl hidden sm:block" style={{ animationDelay: "1s" }}>
                <p className="text-[10px] tracking-[0.25em] uppercase text-muted-foreground">Interest</p>
                <p className="font-display text-sm">AI & Text Mining</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
