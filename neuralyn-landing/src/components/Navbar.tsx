import { ChevronDown } from "lucide-react";

export const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-4 md:px-28 bg-black/50 backdrop-blur-md">
      <div className="flex items-center gap-12 md:gap-20">
        <div className="flex items-center gap-2">
          <img src="/logo.png" alt="Neuralyn Logo" className="w-8 h-8 object-contain" />
          <span className="text-xl font-bold tracking-tight">Neuralyn</span>
        </div>
        
        <div className="hidden md:flex items-center gap-1">
          <a href="#" className="px-3 py-2 text-sm font-medium hover:text-white/80 transition-colors">Home</a>
          <div className="group relative flex items-center gap-1 px-3 py-2 text-sm font-medium hover:text-white/80 cursor-pointer transition-colors">
            Services <ChevronDown className="w-4 h-4" />
          </div>
          <a href="#" className="px-3 py-2 text-sm font-medium hover:text-white/80 transition-colors">Reviews</a>
          <a href="#" className="px-3 py-2 text-sm font-medium hover:text-white/80 transition-colors">Contact us</a>
        </div>
      </div>

      <button className="bg-foreground text-background rounded-lg px-6 py-2 text-sm font-semibold hover:bg-foreground/90 transition-all">
        Sign In
      </button>
    </nav>
  );
};
