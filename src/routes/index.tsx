import { createFileRoute } from "@tanstack/react-router";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/portfolio/navbar";
import { Hero } from "@/components/portfolio/hero";
import { About } from "@/components/portfolio/about";
import { Skills } from "@/components/portfolio/skills";
import { Projects } from "@/components/portfolio/projects";
import { Experience } from "@/components/portfolio/experience";
import { Certifications } from "@/components/portfolio/certifications";
import { Contact } from "@/components/portfolio/contact";
import { Footer } from "@/components/portfolio/footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Pramudia Ramadhan — Data Scientist & ML Enthusiast" },
      {
        name: "description",
        content:
          "Portfolio of Pramudia Ramadhan (Rama) — a data scientist turning data into clear, actionable insights through machine learning, NLP, and elegant visualization.",
      },
      { property: "og:title", content: "Pramudia Ramadhan — Data Scientist Portfolio" },
      {
        property: "og:description",
        content:
          "Data science, machine learning, NLP and visualization work by Pramudia Ramadhan (Rama).",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background text-foreground antialiased overflow-x-hidden">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Certifications />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}
