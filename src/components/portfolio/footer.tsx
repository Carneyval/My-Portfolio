export function Footer() {
  return (
    <footer className="relative border-t border-border/60 mt-12">
      <div className="container mx-auto px-4 md:px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <div className="flex items-center gap-2">
          <span className="h-7 w-7 rounded-full gradient-gold grid place-items-center text-gold-foreground font-display text-xs">R</span>
          <span className="font-display">Pramudia Ramadhan</span>
        </div>
        <p className="text-center md:text-right">
          © 2026 Pramudia Ramadhan. Built with passion, data, and thoughtful design.
        </p>
      </div>
    </footer>
  );
}
