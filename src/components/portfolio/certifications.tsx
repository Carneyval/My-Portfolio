import { ExternalLink } from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";
import c1 from "@/assets/SertifBNSP1.jpeg";
import c2 from "@/assets/DataAnalystVINIX7_page-0001.jpg";
import c3 from "@/assets/TOEFL-Like.jpg";
import c4 from "@/assets/SertifNVIDIA.png";
import c5 from "@/assets/SertifBASS.png";

const certs = [
  { title: "Certification Scheme of Associate Data Scientist", issuer: "BADAN NASIONAL SERTIFIKASI PROFESI", date: "April 2026", image: c1, href: "/SertifBNSP.pdf" },
  { title: "Internship Data Analyst PT VINIX7 AURUM", issuer: "PT VINIX SEVEN AURUM", date: "June 2026", image: c2, href: "/DataAnalystVINIX7.pdf" },
  { title: "TOEFL Like", issuer: "Center for Foreign Language Training", date: "Jan 2026", image: c3, href: "/TOEFL-Like.pdf" },
  { title: "Getting Started with Deep Learning", issuer: "NVIDIA", date: "June 2025", image: c4, href: "https://learn.nvidia.com/certificates?id=XWFS15aMTGuiIVE3LUOVdg" },
  { title: "AI Literacy for Everyone: Understand, Apply, Create", issuer: "BASS", date: "Oct 2025", image: c5, href: "CERT-EA7F7RU4QPSF.pdf" },
];

export function Certifications() {
  const ref = useReveal<HTMLElement>();
  return (
    <section ref={ref} id="certifications" className="relative py-28">
      <div className="container mx-auto px-4 md:px-6">
        <div className="reveal flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div className="max-w-2xl">
            <p className="text-xs tracking-[0.3em] uppercase text-gold mb-4">Certifications</p>
            <h2 className="font-display text-4xl md:text-5xl leading-tight">
              Always <span className="text-gradient-gold italic">learning</span>.
            </h2>
          </div>
          {/* <p className="text-muted-foreground max-w-md">
            Selected credentials from programs that shaped how I think about data.
          </p> */}
        </div>

        <div className="reveal grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certs.map((c) => (
            <article key={c.title} className="card-luxury overflow-hidden group hover-lift flex flex-col">
              <div className="relative aspect-[4/3] overflow-hidden border-b border-border">
                <img src={c.image} alt={c.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-linear-to-t from-card/60 via-transparent to-transparent" />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <p className="text-[11px] tracking-[0.25em] uppercase text-gold">{c.date}</p>
                <h3 className="font-display text-xl mt-2 leading-snug">{c.title}</h3>
                <p className="text-sm text-muted-foreground mt-1">{c.issuer}</p>
                <a
                  href={c.href}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-gold group/link"
                >
                  View Certificate
                  <ExternalLink size={14} className="transition-transform group-hover/link:translate-x-0.5" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
