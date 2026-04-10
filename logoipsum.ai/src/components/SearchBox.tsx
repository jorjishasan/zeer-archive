import { ArrowUp, Paperclip, Mic, Search, Sparkles } from 'lucide-react';

export default function SearchBox() {
  return (
    <div className="mx-auto w-full max-w-[728px] rounded-2xl border border-white/10 bg-black/35 p-4 shadow-[0_20px_50px_rgba(0,0,0,0.25)] backdrop-blur-xl sm:p-5">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-wrap items-center gap-2 font-[var(--font-schibsted)] text-[11px] font-medium text-white sm:text-xs">
          <span className="whitespace-nowrap opacity-95">60/450 credits</span>
          <button
            type="button"
            className="rounded-full bg-[rgba(90,225,76,0.89)] px-3 py-1 text-[11px] font-semibold text-black transition-opacity hover:opacity-90 sm:text-xs"
          >
            Upgrade
          </button>
        </div>
        <div className="flex items-center gap-1 text-[11px] text-white/90 sm:text-xs">
          <Sparkles className="h-3.5 w-3.5 shrink-0" aria-hidden />
          <span className="leading-tight">
            <span className="hidden min-[380px]:inline">Powered by </span>GPT-4o
          </span>
        </div>
      </div>

      <div className="relative mt-3 flex min-h-[52px] w-full items-center overflow-hidden rounded-xl bg-white px-3 shadow-inner sm:mt-4 sm:h-16 sm:px-4">
        <input
          type="text"
          placeholder="Type question..."
          className="font-[var(--font-schibsted)] min-h-[48px] w-full flex-1 bg-transparent py-2 text-[15px] text-black outline-none placeholder:text-black/55 sm:min-h-0 sm:text-base"
        />
        <button
          type="button"
          className="ml-2 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-black text-white transition-colors hover:bg-black/85 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/60 sm:h-[38px] sm:w-[38px]"
          aria-label="Send"
        >
          <ArrowUp className="h-5 w-5" strokeWidth={2} />
        </button>
      </div>

      <div className="mt-3 flex flex-col gap-3 sm:mt-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-wrap items-center gap-2">
          <button
            type="button"
            className="flex items-center gap-1.5 rounded-lg bg-[#f8f8f8] px-2.5 py-1.5 font-[var(--font-schibsted)] text-xs font-medium text-gray-700 transition-colors hover:bg-gray-200 sm:px-3 sm:text-[13px]"
          >
            <Paperclip className="h-4 w-4 shrink-0" aria-hidden />
            Attach
          </button>
          <button
            type="button"
            className="flex items-center gap-1.5 rounded-lg bg-[#f8f8f8] px-2.5 py-1.5 font-[var(--font-schibsted)] text-xs font-medium text-gray-700 transition-colors hover:bg-gray-200 sm:px-3 sm:text-[13px]"
          >
            <Mic className="h-4 w-4 shrink-0" aria-hidden />
            Voice
          </button>
          <button
            type="button"
            className="flex items-center gap-1.5 rounded-lg bg-[#f8f8f8] px-2.5 py-1.5 font-[var(--font-schibsted)] text-xs font-medium text-gray-700 transition-colors hover:bg-gray-200 sm:px-3 sm:text-[13px]"
          >
            <Search className="h-4 w-4 shrink-0" aria-hidden />
            Prompts
          </button>
        </div>
        <p className="font-[var(--font-schibsted)] text-center text-[11px] text-gray-300 sm:text-left sm:text-xs">
          0/3,000
        </p>
      </div>
    </div>
  );
}
