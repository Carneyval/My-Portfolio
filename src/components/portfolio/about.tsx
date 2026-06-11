import { Download } from "lucide-react";
import portrait from "@/assets/wajah.png";
import { useReveal } from "@/hooks/use-reveal";

const chips = ["Data Science", "Machine Learning", "NLP", "Visualization", "Storytelling", "Python"];

export function About() {
  const ref = useReveal<HTMLElement>();
  return (
    <section ref={ref} id="about" className="relative py-28">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-[1fr_1.3fr] gap-12 lg:gap-20 items-center">
          <div className="reveal relative">
            <div className="relative aspect-square max-w-sm mx-auto">
              <div className="absolute -inset-4 rounded-[2rem] border border-gold/30" />
              <div className="absolute -inset-8 rounded-[2.5rem] border border-border" />
              <div className="relative h-full w-full rounded-[1.75rem] overflow-hidden card-luxury">
                <img src={portrait} alt="Rama" loading="lazy" className="h-full w-full object-cover" />
              </div>
              <div className="absolute -bottom-6 -right-6 glass rounded-2xl px-5 py-4 shadow-xl">
                <p className="font-display text-3xl text-gold leading-none">Focus</p>
                <p className="text-[11px] tracking-[0.25em] uppercase text-muted-foreground mt-1">Data Analytics</p>
              </div>
            </div>
          </div>

          <div className="reveal">
            <p className="text-xs tracking-[0.3em] uppercase text-gold mb-4">About</p>
            <h2 className="font-display text-4xl md:text-5xl leading-tight mb-6">
              A <span className="text-gradient-gold italic">data enthusiast</span> Finding clarity through data.
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I’m Rama, a Computer Science student and data enthusiast interested in data analytics, machine learning, natural language processing, and visualization. I enjoy turning raw data into clear insights through analysis, dashboards, and practical data-driven solutions.
              </p>
              <p>
                My work combines technical exploration with visual storytelling, using tools like Python, Tableau, Looker Studio, and Excel to make complex information easier to understand and act on.
              </p>
            </div>

            <a
              href="public/Resume.pdf"
              className="mt-10 inline-flex items-center gap-2 h-12 px-6 rounded-full gradient-gold text-gold-foreground font-medium text-sm hover-lift"
            >
              <Download size={16} /> Download CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
