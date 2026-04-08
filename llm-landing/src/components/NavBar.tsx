import { ChevronDown } from 'lucide-react';

export default function NavBar() {
  return (
    <nav className="relative z-10 w-full flex items-center justify-between px-[120px] py-[16px] text-black">
      {/* Logo */}
      <div className="font-[var(--font-schibsted)] font-semibold text-[24px] tracking-[-1.44px]">
        Logoipsum
      </div>

      {/* Menu Items */}
      <ul className="flex items-center gap-[34px] font-[var(--font-schibsted)] font-medium text-[16px] tracking-[-0.2px]">
        <li className="cursor-pointer hover:opacity-80 transition-opacity">Platform</li>
        <li className="cursor-pointer hover:opacity-80 transition-opacity flex items-center gap-1">
          Features <ChevronDown className="w-4 h-4" />
        </li>
        <li className="cursor-pointer hover:opacity-80 transition-opacity">Projects</li>
        <li className="cursor-pointer hover:opacity-80 transition-opacity">Community</li>
        <li className="cursor-pointer hover:opacity-80 transition-opacity">Contact</li>
      </ul>

      {/* Action Buttons */}
      <div className="flex items-center gap-4 font-[var(--font-schibsted)] font-medium text-[16px] tracking-[-0.2px]">
        <button className="w-[82px] h-[40px] flex items-center justify-center bg-transparent border border-black/10 rounded-full hover:bg-black/5 transition-colors">
          Sign Up
        </button>
        <button className="w-[101px] h-[40px] flex items-center justify-center bg-black text-white rounded-full hover:bg-black/90 transition-colors">
          Log In
        </button>
      </div>
    </nav>
  );
}
