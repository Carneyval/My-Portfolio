import { Github } from "lucide-react";
import {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger,
} from "@/components/ui/accordion";
import { useReveal } from "@/hooks/use-reveal";
import { cn } from "@/lib/utils";
import p1 from "@/assets/project1.png";
import p2 from "@/assets/dashboardHospitall.png";
import p3 from "@/assets/DashboardHR-Attrition.png";
import p4 from "@/assets/campaign.png";
import p5 from "@/assets/tiktokcluster.png";
import p6 from "@/assets/BoundByFate.png";
import p7 from "@/assets/ARwatch.png";

type Project = {
  title: string;
  summary: string;
  stack: string[];
  image: string;
  github: string;
  description: string;
  span: string;
};

const projects: Project[] = [
  {
    title: "Text-Based Stress Detection",
    summary: "Fine-tuned DeBERTa-v3 to classify stress and non-stress Reddit posts from the Dreaddit dataset, achieving 0.918 AUROC, 0.828 Macro-F1.",
    stack: ["Python", "Jupyter Notebook"],
    image: p1,
    github: "https://github.com/Carneyval/Text-Based-Stress-Detection",
    description:
      "A text classification research project that compares a transformer-based DeBERTa-v3 model with a classical TF-IDF LinearSVC approach for detecting stress in Reddit posts. The workflow includes data preprocessing, tokenization, model training, validation, and evaluation using Accuracy, Precision, Recall, F1-score, and AUROC. DeBERTa-v3 achieved the best performance with 0.830 Accuracy, 0.828 Macro-F1, and 0.918 AUROC, showing stronger ability to capture emotional and semantic context in text.",
    span: "lg:col-span-2 lg:row-span-2",
  },
  {
    title: "Hospital Operational Dashboard",
    summary: "Built an interactive hospital operational dashboard to monitor outpatient visits, payment methods, and clinic waiting time performance.",
    stack: ["Looker Studio", "Excel"],
    image: p2,
    github: "https://github.com/Carneyval/Hospital-Operational-Dashboard",
    description:
      "An interactive healthcare analytics dashboard designed to monitor outpatient service performance. The dashboard presents patient visit trends, payment method distribution, average waiting time by clinic, and operational KPIs through clear visual layouts and interactive filters. This project focuses on transforming raw outpatient data into practical insights to help identify service bottlenecks, monitor clinic performance, and support data-driven operational decision-making.",
    span: "lg:col-span-2 lg:row-span-2",
  },
  {
    title: "HR Attrition Risk Dashboard",
    summary: "Designed a Tableau dashboard to analyze employee attrition risk by department, job title, satisfaction score, and commute distance.",
    stack: ["Tableau", "Excel"],
    image: p3,
    github: "https://github.com/Carneyval/HR-Attrition-Risk-Dashboard",
    description:
      "An executive HR analytics dashboard built to analyze employee resignation risk using interactive Tableau visualizations. The dashboard highlights key metrics such as total employees, resigned employees, active employees, and attrition rate, while exploring attrition patterns across departments, job titles, satisfaction scores, and commute distance groups. This project focuses on identifying high-risk employee segments and presenting HR insights in a clean, business-friendly dashboard format.",
    span: "lg:col-span-2 lg:row-span-2",
  },
  {
    title: "Campaign Statistic Analysis",
    summary: "Performed statistical analysis to compare campaign revenue performance and estimate the impact of ad spend on daily traffic.",
    stack: ["Ipynb", "Excel", "Colab"],
    image: p4,
    github: "https://github.com/Carneyval/Campaign-Analysis",
    description:
      "A marketing statistics project that evaluates the performance of two promotional campaigns: 20% Discount and Rp50,000 Cashback. The analysis uses hypothesis testing to determine whether the difference in average transaction value is statistically significant, and regression analysis to estimate how additional ad spend affects daily traffic. The project focuses on translating statistical results into clear business recommendations for campaign budgeting and future marketing decisions.",
    span: "lg:col-span-2 lg:row-span-2",
  },
  {
    title: "Tiktok Comments Sentimen Clustering",
    summary: "Clustered 2,500 TikTok comments using Word2Vec and multiple clustering algorithms, with DBSCAN achieving the best separation.",
    stack: ["Python", "Colab"],
    image: p5,
    github: "https://github.com/Carneyval/Tiktok-Comments-Sentimen-Clustering",
    description:
      "An NLP clustering project that analyzes 2,500 TikTok comments scraped from MPL Indonesia to discover natural opinion patterns around the RRQ vs ONIC match discussion. The workflow includes text cleaning, slang normalization, tokenization, stopword removal, stemming, Word2Vec vectorization, and clustering using DBSCAN, Agglomerative Clustering, K-Means, and Fuzzy C-Means. DBSCAN achieved the best result with a 0.88 Silhouette Score and 0.07 Davies-Bouldin Index, showing strong cluster separation and the ability to detect noisy or sarcastic comments.",
    span: "lg:col-span-2 lg:row-span-2",
  },
  {
    title: "Bound By Fate: 2D Top-Down RPG Game",
    summary: "Developed a 2D top-down RPG adventure game concept featuring exploration, weapon switching, enemies, and fantasy-themed level progression.",
    stack: ["C#", "Unity"],
    image: p6,
    github: "https://github.com/Carneyval/Bound-By-Fate_2D-Top-Down-RPG-Game",
    description:
      "A 2D top-down RPG adventure game where players control Elric, a chosen hero destined to destroy the Crystal of Death and defeat the Shadow King. The game design includes exploration, enemy battles, weapon switching between sword, bow, and magic staff, health management, item collection, and progressive level challenges. The project covers game mechanics, story flow, character design, stage planning, UI assets, and player controls to create a structured fantasy adventure experience.",
    span: "lg:col-span-2 lg:row-span-2",
  },
  {
    title: "AR 3D Watch Mobile App",
    summary: "Built a marker-based AR mobile app that lets users try 3D watch models virtually through a smartphone camera.",
    stack: ["C#", "Unity"],
    image: p7,
    github: "https://github.com/Carneyval/AR-3D-Watch-Mobile-App",
    description:
      "A mobile augmented reality application that simulates virtual watch try-on using marker-based AR technology. Built with Unity, Vuforia SDK, and C#, the app allows users to scan a marker placed on their wrist, display 3D watch models in real time, switch between watch designs, view product information, and customize strap colors. The project focuses on improving online shopping interaction by providing a more immersive and realistic product visualization experience.",
    span: "lg:col-span-2 lg:row-span-2",
  },
];

export function Projects() {
  const ref = useReveal<HTMLElement>();
  return (
    <section ref={ref} id="projects" className="relative py-28">
      <div className="container mx-auto px-4 md:px-6">
        <div className="reveal flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div className="max-w-2xl">
            <p className="text-xs tracking-[0.3em] uppercase text-gold mb-4">Selected Work</p>
            <h2 className="font-display text-4xl md:text-5xl leading-tight">
              Past Project Experience, in a <span className="text-gradient-gold italic">Collage</span>.
            </h2>
          </div>
          {/* <p className="text-muted-foreground max-w-md">
            A curated set of work across data science, machine learning, NLP and visualization.
          </p> */}
        </div>

        <div className="reveal grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 auto-rows-[minmax(280px,auto)] gap-5">
          {projects.map((p, i) => (
            <article
              key={p.title}
              className={cn(
                "card-luxury hover-lift overflow-hidden group flex flex-col",
                p.span,
              )}
            >
              <div className="relative overflow-hidden aspect-[16/10] sm:aspect-auto sm:flex-1 sm:min-h-[180px]">
                <img
                  src={p.image}
                  alt={p.title}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-linear-to-t from-card via-card/30 to-transparent" />
                <a
                  href={p.github}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                  className="absolute top-3 right-3 h-9 w-9 grid place-items-center rounded-full glass hover:bg-gold hover:text-gold-foreground transition-colors"
                >
                  <Github size={15} />
                </a>
                <span className="absolute top-3 left-3 text-[10px] tracking-[0.25em] uppercase glass rounded-full px-3 py-1">
                  0{i + 1}
                </span>
              </div>

              <div className="p-5 md:p-6">
                <h3 className="font-display text-xl md:text-2xl leading-tight mb-2">
                  {p.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{p.summary}</p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {p.stack.map((t) => (
                    <span key={t} className="text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-full bg-muted text-muted-foreground border border-border">
                      {t}
                    </span>
                  ))}
                </div>

                <Accordion type="single" collapsible className="mt-3">
                  <AccordionItem value="desc" className="border-b-0">
                    <AccordionTrigger className="text-xs tracking-[0.2em] uppercase text-gold hover:no-underline py-2">
                      Description
                    </AccordionTrigger>
                    <AccordionContent className="text-sm text-muted-foreground leading-relaxed">
                      {p.description}
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
