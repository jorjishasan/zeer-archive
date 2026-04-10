import { useState } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Platform', hasChevron: false },
  { label: 'Features', hasChevron: true },
  { label: 'Projects', hasChevron: false },
  { label: 'Community', hasChevron: false },
  { label: 'Contact', hasChevron: false },
] as const;

export default function NavBar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="relative z-20 w-full border-b border-black/[0.06] bg-white/80 backdrop-blur-md supports-[backdrop-filter]:bg-white/65">
      <div className="mx-auto flex max-w-[1600px] items-center justify-between px-4 py-3 sm:px-6 md:px-8 lg:px-12 xl:px-[120px] lg:py-4">
        <div className="font-[var(--font-schibsted)] text-lg font-semibold tracking-[-0.06em] text-black sm:text-xl md:text-2xl">
          Logoipsum
        </div>

        <ul className="hidden items-center gap-6 text-[15px] font-medium tracking-[-0.0125em] text-black/90 lg:flex xl:gap-8">
          {navLinks.map(({ label, hasChevron }) => (
            <li key={label}>
              <button
                type="button"
                className="flex cursor-pointer items-center gap-1 rounded-md px-1 py-0.5 transition-colors hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black/40"
              >
                {label}
                {hasChevron ? <ChevronDown className="h-4 w-4 opacity-70" aria-hidden /> : null}
              </button>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 font-[var(--font-schibsted)] text-[15px] font-medium tracking-[-0.0125em] sm:gap-4 lg:flex">
          <button
            type="button"
            className="h-10 min-w-[5.125rem] rounded-full border border-black/10 bg-transparent px-5 transition-colors hover:bg-black/[0.04] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black/40"
          >
            Sign Up
          </button>
          <button
            type="button"
            className="h-10 min-w-[6.25rem] rounded-full bg-black px-5 text-white transition-colors hover:bg-black/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black/50"
          >
            Log In
          </button>
        </div>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-full text-black transition-colors hover:bg-black/[0.06] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black/40 lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" strokeWidth={2} /> : <Menu className="h-5 w-5" strokeWidth={2} />}
        </button>
      </div>

      <div
        id="mobile-nav"
        className={`border-t border-black/[0.06] bg-white/95 backdrop-blur-md transition-[grid-template-rows] duration-200 ease-out lg:hidden ${
          open ? 'grid grid-rows-[1fr]' : 'grid grid-rows-[0fr]'
        }`}
      >
        <div className="min-h-0 overflow-hidden">
          <div className="flex flex-col gap-1 px-4 py-4 sm:px-6">
            {navLinks.map(({ label, hasChevron }) => (
              <button
                key={label}
                type="button"
                className="flex w-full items-center justify-between rounded-xl px-3 py-3 text-left text-[15px] font-medium text-black/90 transition-colors hover:bg-black/[0.04]"
                onClick={() => setOpen(false)}
              >
                {label}
                {hasChevron ? <ChevronDown className="h-4 w-4 opacity-60" aria-hidden /> : null}
              </button>
            ))}
            <div className="mt-3 flex flex-col gap-2 border-t border-black/[0.06] pt-4 sm:flex-row">
              <button
                type="button"
                className="h-11 flex-1 rounded-full border border-black/10 font-[var(--font-schibsted)] text-[15px] font-medium transition-colors hover:bg-black/[0.04]"
                onClick={() => setOpen(false)}
              >
                Sign Up
              </button>
              <button
                type="button"
                className="h-11 flex-1 rounded-full bg-black font-[var(--font-schibsted)] text-[15px] font-medium text-white transition-colors hover:bg-black/90"
                onClick={() => setOpen(false)}
              >
                Log In
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
