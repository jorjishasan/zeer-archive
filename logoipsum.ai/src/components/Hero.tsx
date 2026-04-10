import { Star } from 'lucide-react';
import SearchBox from './SearchBox';

export default function Hero() {
  return (
    <div className="relative z-10 mx-auto flex w-full max-w-[1600px] flex-col items-center px-4 pb-16 pt-6 sm:px-6 sm:pb-20 sm:pt-8 md:px-8 md:pt-10 lg:-mt-8 lg:px-12 lg:pt-14 xl:mt-[-50px] xl:px-[120px] xl:pt-[60px]">
      <div className="mb-6 flex max-w-full items-center gap-2 rounded-full border border-black/[0.06] bg-white/90 py-1 pl-1 pr-3 shadow-[0_8px_30px_rgba(0,0,0,0.06)] backdrop-blur-sm sm:mb-8 sm:pr-4">
        <div className="flex shrink-0 items-center gap-1.5 rounded-full bg-[#0e1311] px-2.5 py-1 text-xs font-medium text-white sm:px-3">
          <Star className="h-3.5 w-3.5 fill-current" aria-hidden />
          New
        </div>
        <span className="font-[var(--font-inter)] text-xs text-gray-800 sm:text-sm">
          Discover what&apos;s possible
        </span>
      </div>

      <h1 className="font-[var(--font-fustat)] text-center text-[clamp(2.25rem,6vw+1rem,5rem)] font-bold leading-[1.02] tracking-[-0.045em] text-black">
        Transform Data Quickly
      </h1>

      <p className="font-[var(--font-fustat)] mt-5 max-w-[736px] text-center text-base font-medium leading-snug tracking-[-0.02em] text-[#505050] sm:mt-6 sm:text-lg md:text-xl lg:mt-8">
        Upload your information and get powerful insights right away. Work smarter and achieve goals effortlessly.
      </p>

      <div className="mt-8 w-full sm:mt-10 lg:mt-11">
        <SearchBox />
      </div>
    </div>
  );
}
