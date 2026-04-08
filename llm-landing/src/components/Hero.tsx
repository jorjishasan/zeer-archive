import { Star } from 'lucide-react';
import SearchBox from './SearchBox';

export default function Hero() {
  return (
    <div className="relative z-10 w-full flex flex-col items-center mt-[-50px] px-[120px] pt-[60px]">
      
      {/* Badge Component */}
      <div className="flex items-center gap-2 bg-white/90 backdrop-blur-sm p-1 pr-4 rounded-full shadow-sm mb-[34px]">
        <div className="bg-[#0e1311] text-white flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium">
          <Star className="w-3.5 h-3.5 fill-current" />
          New
        </div>
        <span className="font-[var(--font-inter)] text-[14px] text-gray-800">
          Discover what's possible
        </span>
      </div>

      {/* Main Headline */}
      <h1 className="font-[var(--font-fustat)] font-bold text-[80px] leading-none tracking-[-4.8px] text-[#000000] text-center mb-[34px]">
        Transform Data Quickly
      </h1>

      {/* Subtitle */}
      <p className="font-[var(--font-fustat)] font-medium text-[20px] tracking-[-0.4px] text-[#505050] text-center max-w-[736px] w-[542px] mb-[44px]">
        Upload your information and get powerful insights right away. Work smarter and achieve goals effortlessly.
      </p>

      {/* Search Input Box */}
      <SearchBox />

    </div>
  );
}
