import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Prepping | Chef Mind',
  description: 'Currently sourcing the finest ingredients for our new digital home.',
};

export default function ConstructionPage() {
  return (
    <main className="min-h-screen bg-white flex flex-col items-center justify-center p-6 text-stone-900">
      {/* Subtle Grid Background for a "Blueprint" feel */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none [background-image:linear-gradient(#000_1px,transparent_1px),linear-gradient(90deg,#000_1px,transparent_1px)] [background-size:40px_40px]" />

      <div className="relative z-10 w-full max-w-4xl">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-24">
          
          {/* Left Side: Creative Visual */}
          <div className="relative w-64 h-64 flex items-center justify-center">
            {/* Rotating border representing the process */}
            <div className="absolute inset-0 border-[1px] border-stone-100 rounded-full" />
            <div 
              className="absolute inset-0 border-[3px] border-t-orange-500 border-r-transparent border-b-transparent border-l-transparent rounded-full animate-spin" 
              style={{ animationDuration: '3s' }}
            />
            
            <div className="text-center">
              <span className="block text-5xl mb-2">🧂</span>
              <span className="text-xs font-bold tracking-[0.2em] text-stone-400 uppercase">Batch 01</span>
            </div>
            
            {/* The 10% Marker */}
            <div className="absolute -bottom-4 bg-stone-900 text-white px-4 py-1 rounded-full text-sm font-mono tracking-tighter">
              10% Prepped
            </div>
          </div>

          {/* Right Side: Copywriting */}
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-5xl md:text-6xl font-extralight tracking-tight mb-6">
              A fresh <span className="font-semibold">recipe</span> <br />
              is in the works.
            </h1>
            
            <div className="h-[2px] w-12 bg-orange-500 mb-8 mx-auto md:mx-0" />
            
            <p className="text-stone-500 text-lg leading-relaxed max-w-sm">
              We are currently at the <span className="text-stone-900 font-medium">sourcing stage</span>. 
              Checking the pantry and perfecting the base for a brand new Chef Mind experience.
            </p>

            {/* Creative Ingredient List */}
            <ul className="mt-10 space-y-4">
              <li className="flex items-center gap-4 group">
                <div className="w-2 h-2 rounded-full bg-orange-500" />
                <span className="text-sm font-medium tracking-wide group-hover:translate-x-1 transition-transform cursor-default">
                  Sourcing Interface Ingredients
                </span>
              </li>
              <li className="flex items-center gap-4 opacity-30">
                <div className="w-2 h-2 rounded-full bg-stone-300" />
                <span className="text-sm font-medium tracking-wide">
                  Whisking the Experience
                </span>
              </li>
              <li className="flex items-center gap-4 opacity-30">
                <div className="w-2 h-2 rounded-full bg-stone-300" />
                <span className="text-sm font-medium tracking-wide">
                  Final Garnish & Tasting
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Minimal Bottom Branding */}
      <footer className="absolute bottom-12 w-full text-center">
        <div className="inline-flex flex-col items-center">
          <div className="w-1 h-8 bg-gradient-to-b from-orange-500 to-transparent mb-4" />
          <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-stone-400">
            Chef Mind Kitchen
          </p>
        </div>
      </footer>
    </main>
  );
}