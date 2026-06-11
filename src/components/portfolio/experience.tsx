import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useReveal } from "@/hooks/use-reveal";

const items = [
  {
    period: "Feb 2025 — Present",
    role: "Data Analyst Intern",
    company: "PT Vinix Seven Aurum",
    description:
      "Conducted market research, cleaned and analyzed datasets, performed statistical analysis and predictive modeling using Python, and built dashboards in Looker Studio and Tableau to support business and operational decision-making.",
  },
  {
    period: "July 2025 — Oct 2025",
    role: "IT Support Intern",
    company: "Lembaga Pendidikan Islam Hidayatullah",
    description:
      "Supported IT infrastructure maintenance, handled hardware and network-related tasks, optimized CCTV connectivity, and developed a web-based employee attendance interface.",
  },
  {
    period: "Oct 2023 — May 2025",
    role: "Public Relations",
    company: "Dian Nuswantoro Computer Club",
    description:
      "Managed communication, coordinated external relations, and supported event promotion through clear information delivery and audience engagement.",
  },
  // {
  //   period: "Sep 2023 — Feb 2024",
  //   role: "Teaching Assistant — Statistics",
  //   company: "University Course",
  //   description:
  //     "Led weekly tutorials on inferential statistics and Python data wrangling for 60+ undergraduate students.",
  // },
];

export function Experience() {
  const ref = useReveal<HTMLElement>();
  return (
    <section ref={ref} id="experience" className="relative py-28">
      <div className="container mx-auto px-4 md:px-6">
        <div className="reveal max-w-2xl mb-14">
          <p className="text-xs tracking-[0.3em] uppercase text-gold mb-4">Experience</p>
          <h2 className="font-display text-4xl md:text-5xl leading-tight">
            A timeline of <span className="text-gradient-gold italic">craft</span>.
          </h2>
        </div>

        <div className="reveal relative max-w-3xl mx-auto">
          <div className="absolute left-3 md:left-1/2 top-0 bottom-0 w-[2px] -translate-x-1/2 bg-gradient-to-b from-transparent via-gold/70 to-transparent" />

          <div className="space-y-10">
            {items.map((it, i) => {
              const right = i % 2 === 1;
              return (
                <div key={it.role} className="relative md:grid md:grid-cols-2 md:gap-10 pl-10 md:pl-0">
                  <span className="absolute left-3 md:left-1/2 top-6 -translate-x-1/2 h-3 w-3 rounded-full bg-gold ring-4 ring-background shadow-[0_0_0_2px_color-mix(in_oklab,var(--gold)_40%,transparent)]" />

                  <div className={right ? "md:col-start-2 md:pl-10" : "md:pr-10 md:text-right"}>
                    <div className="card-luxury p-6 hover-lift">
                      <p className="text-[11px] tracking-[0.25em] uppercase text-gold">{it.period}</p>
                      <h3 className="font-display text-xl mt-2">{it.role}</h3>
                      <p className="text-sm text-muted-foreground">{it.company}</p>

                      <Accordion type="single" collapsible className="mt-3 text-left">
                        <AccordionItem value="d" className="border-b-0">
                          <AccordionTrigger className="text-xs tracking-[0.2em] uppercase text-foreground/80 hover:no-underline py-2">
                            Description
                          </AccordionTrigger>
                          <AccordionContent className="text-sm text-muted-foreground leading-relaxed">
                            {it.description}
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
