export default function ConstructionPage() {
  return (
    <main className="min-h-screen bg-white flex flex-col items-center justify-center p-4 md:p-8 text-stone-900 overflow-hidden">
      {/* 1. Use a responsive grid background that hides on very small screens if too busy */}
      <div className="absolute inset-0 z-0 opacity-[0.02] md:opacity-[0.03] pointer-events-none [background-image:linear-gradient(#000_1px,transparent_1px),linear-gradient(90deg,#000_1px,transparent_1px)] [background-size:20px_20px] md:background-size-[40px_40px]" />

      <div className="relative z-10 w-full max-w-4xl mx-auto">
        {/* 2. Use flex-col for mobile, flex-row for tablet+ */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-24">
          
          {/* Visual Element: Scaled down for mobile */}
          <div className="relative w-48 h-48 md:w-64 md:h-64 flex items-center justify-center shrink-0">
            <div className="absolute inset-0 border-[1px] border-stone-100 rounded-full" />
            <div 
              className="absolute inset-0 border-[3px] border-t-orange-500 border-r-transparent border-b-transparent border-l-transparent rounded-full animate-spin" 
              style={{ animationDuration: '3s' }}
            />
            
            <div className="text-center">
              <span className="block text-4xl md:text-5xl mb-2">🧂</span>
              <span className="text-[10px] md:text-xs font-bold tracking-[0.2em] text-stone-400 uppercase">Batch 01</span>
            </div>
            
            <div className="absolute -bottom-2 md:-bottom-4 bg-stone-900 text-white px-3 py-1 md:px-4 md:py-1 rounded-full text-xs md:text-sm font-mono whitespace-nowrap">
              10% Prepped
            </div>
          </div>

          {/* Text Content: Centered on mobile, left-aligned on desktop */}
          <div className="flex-1 text-center lg:text-left px-2">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extralight tracking-tight mb-6 leading-[1.1]">
              A fresh <span className="font-semibold block sm:inline">recipe</span> <br className="hidden sm:block" />
              is in the works.
            </h1>
            
            <div className="h-[2px] w-12 bg-orange-500 mb-8 mx-auto lg:mx-0" />
            
            <p className="text-stone-500 text-base md:text-lg leading-relaxed max-w-sm mx-auto lg:mx-0">
              We are currently at the <span className="text-stone-900 font-medium">sourcing stage</span>. 
              The kitchen is being prepped for something special.
            </p>

            {/* Ingredient List: Stays clean on mobile */}
            <ul className="mt-8 md:mt-10 space-y-4 inline-block text-left">
              <li className="flex items-center gap-4">
                <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-orange-500 shrink-0" />
                <span className="text-xs md:text-sm font-medium tracking-wide">
                  Sourcing Interface Ingredients
                </span>
              </li>
              <li className="flex items-center gap-4 opacity-30">
                <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-stone-300 shrink-0" />
                <span className="text-xs md:text-sm font-medium tracking-wide">
                  Whisking the Experience
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer: Positioned relatively on short screens to avoid overlap */}
      <footer className="mt-16 lg:absolute lg:bottom-12 w-full text-center">
        <div className="inline-flex flex-col items-center">
          <div className="w-1 h-6 md:h-8 bg-gradient-to-b from-orange-500 to-transparent mb-4" />
          <p className="text-[9px] md:text-[10px] font-bold uppercase tracking-[0.4em] text-stone-400">
            Chef Mind Kitchen
          </p>
        </div>
      </footer>
    </main>
  );
}