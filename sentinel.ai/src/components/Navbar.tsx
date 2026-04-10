import { Button } from './ui/button';

const navLinks = ["Services", "About Us", "Projects", "Team", "Contacts"];

export const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-between px-8 lg:px-16 py-5">
      <div className="flex items-center">
        <span className="text-foreground text-xl font-semibold tracking-tight">SENTINEL</span>
      </div>
      
      <div className="hidden md:flex items-center gap-8">
        {navLinks.map((link) => (
          <a
            key={link}
            href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}
            className="text-sm text-muted-foreground hover:text-foreground transition-colors uppercase tracking-widest"
          >
            {link}
          </a>
        ))}
      </div>

      <div className="flex items-center">
        <Button variant="navCta" size="lg" className="hidden md:inline-flex text-xs px-6">
          Get Quote
        </Button>
      </div>
    </nav>
  );
};
