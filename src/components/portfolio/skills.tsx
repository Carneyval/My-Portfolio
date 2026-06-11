import {
  Braces, BrainCircuit, MessageSquareText, BarChart3, Server, Layout, Palette,
  Code2, FileCode, BookOpen, FileSpreadsheet, LineChart, Github, Figma, Image as ImageIcon,
} from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";

const skills = [
  { name: "Python", icon: Braces },
  { name: "Machine Learning", icon: BrainCircuit },
  { name: "Natural Language Processing", icon: MessageSquareText },
  { name: "Data Visualization", icon: BarChart3 },
  { name: "Flask", icon: Server },
  { name: "Laravel", icon: Server },
  { name: "Bootstrap", icon: Layout },
];

const tools = [
  { name: "VS Code", icon: Code2 },
  { name: "Google Colab", icon: FileCode },
  { name: "Jupyter Notebook", icon: BookOpen },
  { name: "Excel", icon: FileSpreadsheet },
  { name: "Tableau", icon: LineChart },
  { name: "GitHub", icon: Github },
  { name: "Figma", icon: Figma },
  { name: "Canva", icon: Palette },
];

function Card({ name, Icon }: { name: string; Icon: typeof Braces }) {
  return (
    <div className="card-luxury hover-lift p-5 flex flex-col items-start gap-4 group cursor-default">
      <div className="h-11 w-11 rounded-xl grid place-items-center bg-gold/10 text-gold border border-gold/20 group-hover:bg-gold group-hover:text-gold-foreground transition-colors">
        <Icon size={20} />
      </div>
      <p className="text-sm font-medium leading-snug">{name}</p>
    </div>
  );
}

export function Skills() {
  const ref = useReveal<HTMLElement>();
  return (
    <section ref={ref} id="skills" className="relative py-28">
      <div className="container mx-auto px-4 md:px-6">
        <div className="reveal text-center max-w-2xl mx-auto mb-16">
          <p className="text-xs tracking-[0.3em] uppercase text-gold mb-4">Skills & Tools</p>
          <h2 className="font-display text-4xl md:text-5xl">
            A toolkit built for <span className="text-gradient-gold italic">clarity</span>.
          </h2>
        </div>

        <div className="reveal">
          <h3 className="text-xs tracking-[0.25em] uppercase text-muted-foreground mb-5">Skills</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-4">
            {skills.map((s) => <Card key={s.name} name={s.name} Icon={s.icon} />)}
          </div>
        </div>

        <div className="reveal mt-16">
          <h3 className="text-xs tracking-[0.25em] uppercase text-muted-foreground mb-5">Tools</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-8 gap-4">
            {tools.map((s) => <Card key={s.name} name={s.name} Icon={s.icon} />)}
          </div>
        </div>
      </div>
    </section>
  );
}
