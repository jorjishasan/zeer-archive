import { ArrowUp, Paperclip, Mic, Search, Sparkles } from 'lucide-react';

export default function SearchBox() {
  return (
    <div className="w-full max-w-[728px] h-[200px] rounded-[18px] backdrop-blur-xl bg-black/24 p-5 flex flex-col justify-between shadow-2xl mx-auto">
      {/* Top Row */}
      <div className="flex items-center justify-between font-[var(--font-schibsted)] font-medium text-[12px] text-white">
        <div className="flex items-center gap-3">
          <span>60/450 credits</span>
          <button className="bg-[rgba(90,225,76,0.89)] text-black px-3 py-1 rounded-full hover:opacity-90 transition-opacity font-semibold">
            Upgrade
          </button>
        </div>
        <div className="flex items-center gap-1 opacity-90">
          <Sparkles className="w-3.5 h-3.5" />
          Powered by GPT-4o
        </div>
      </div>

      {/* Main Input */}
      <div className="relative w-full bg-white rounded-[12px] h-[64px] shadow-inner flex items-center px-4 overflow-hidden mt-3 mb-auto">
        <input 
          type="text" 
          placeholder="Type question..." 
          className="w-full h-full outline-none text-[16px] text-black bg-transparent font-[var(--font-schibsted)] placeholder:text-black/60"
        />
        <button className="w-[36px] h-[36px] bg-black text-white rounded-full flex items-center justify-center hover:bg-black/80 transition-colors ml-3 shrink-0">
          <ArrowUp className="w-5 h-5" />
        </button>
      </div>

      {/* Bottom Row */}
      <div className="flex items-center justify-between mt-4">
        <div className="flex items-center gap-2">
          <button className="flex items-center gap-1.5 bg-[#f8f8f8] text-gray-700 px-3 py-1.5 rounded-[6px] text-[13px] font-[var(--font-schibsted)] font-medium hover:bg-gray-200 transition-colors">
            <Paperclip className="w-4 h-4" />
            Attach
          </button>
          <button className="flex items-center gap-1.5 bg-[#f8f8f8] text-gray-700 px-3 py-1.5 rounded-[6px] text-[13px] font-[var(--font-schibsted)] font-medium hover:bg-gray-200 transition-colors">
            <Mic className="w-4 h-4" />
            Voice
          </button>
          <button className="flex items-center gap-1.5 bg-[#f8f8f8] text-gray-700 px-3 py-1.5 rounded-[6px] text-[13px] font-[var(--font-schibsted)] font-medium hover:bg-gray-200 transition-colors">
            <Search className="w-4 h-4" />
            Prompts
          </button>
        </div>
        <div className="text-[12px] text-gray-300 font-[var(--font-schibsted)]">
          0/3,000
        </div>
      </div>
    </div>
  );
}
