import { useEffect, useState } from "react";
import { Menu, Moon, Sun, X } from "lucide-react";
import { useTheme } from "@/components/theme-provider";
import { cn } from "@/lib/utils";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#certifications", label: "Certifications" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const { theme, toggle } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-500",
        scrolled ? "py-3" : "py-5",
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <nav
          className={cn(
            "flex items-center justify-between rounded-full px-4 md:px-6 py-2.5 transition-all duration-500",
            scrolled ? "glass shadow-[0_10px_40px_-20px_rgba(0,0,0,0.4)]" : "bg-transparent",
          )}
        >
          <a href="#home" className="flex items-center gap-2 group">
            <span className="grid place-items-center h-9 w-9 rounded-full gradient-gold text-gold-foreground font-display font-bold text-lg shadow-lg">
              R
            </span>
            <span className="font-display text-base tracking-wide hidden sm:block">
              Rama<span className="text-gold">.</span>
            </span>
          </a>

          <ul className="hidden lg:flex items-center gap-1">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="px-3 py-2 text-sm text-muted-foreground hover:text-foreground rounded-full transition-colors relative group"
                >
                  {l.label}
                  <span className="absolute left-3 right-3 -bottom-0.5 h-px bg-gold scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <button
              onClick={toggle}
              aria-label="Toggle theme"
              className="h-9 w-9 grid place-items-center rounded-full border border-border/60 hover:border-gold/60 hover:text-gold transition-colors"
            >
              {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
            </button>
            <a
              href="#contact"
              className="hidden md:inline-flex items-center gap-1.5 text-xs font-medium px-4 h-9 rounded-full gradient-gold text-gold-foreground hover:opacity-90 transition-opacity"
            >
              Let's Talk
            </a>
            <button
              onClick={() => setOpen((o) => !o)}
              className="lg:hidden h-9 w-9 grid place-items-center rounded-full border border-border/60"
              aria-label="Menu"
            >
              {open ? <X size={16} /> : <Menu size={16} />}
            </button>
          </div>
        </nav>

        {open && (
          <div className="lg:hidden mt-3 glass rounded-3xl p-4 animate-in fade-in slide-in-from-top-2">
            <ul className="flex flex-col gap-1">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block px-4 py-2.5 rounded-full text-sm hover:bg-muted/60"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </header>
  );
}
