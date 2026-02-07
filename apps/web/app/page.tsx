import { Search, Calendar, ShoppingCart, Bookmark } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-white font-sans text-slate-900">
      {/* Hero Section - Text Focused */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <h1 className="text-6xl lg:text-8xl font-semibold tracking-tight leading-[1.05] mb-8">
              The smarter way <br />
              to <span className="text-orange-500 italic">cook.</span>
            </h1>
            <p className="text-xl text-slate-500 leading-relaxed mb-10 max-w-xl">
              From discovering new flavors to organized grocery runs, 
              Samsung Food simplifies every step of your culinary journey.
            </p>
            <div className="flex items-center gap-6">
              <button className="bg-slate-900 text-white px-8 py-4 rounded-xl font-medium hover:bg-orange-600 transition-all active:scale-95">
                Start Planning
              </button>
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-slate-100 flex items-center justify-center text-xs font-bold">
                    U{i}
                  </div>
                ))}
                <span className="pl-6 text-sm font-medium text-slate-400 self-center">+12k active cooks</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Grid Section - Replacing Hero Image */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 h-auto md:h-[500px]">
            
            {/* Box 1: Large Feature */}
            <div className="md:col-span-2 md:row-span-2 bg-slate-50 rounded-3xl p-8 flex flex-col justify-between border border-slate-100 group hover:border-orange-200 transition-colors">
              <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm text-orange-500">
                <Search size={24} />
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-2">Smart Recipe Search</h3>
                <p className="text-slate-500">Filter by diet, ingredients, or what’s left in your fridge.</p>
              </div>
            </div>

            {/* Box 2: Medium Feature */}
            <div className="md:col-span-2 bg-orange-50 rounded-3xl p-8 flex items-center gap-6 border border-orange-100">
              <div className="w-12 h-12 bg-orange-500 rounded-2xl flex items-center justify-center text-white shrink-0">
                <Calendar size={24} />
              </div>
              <div>
                <h3 className="text-xl font-semibold">Weekly Planner</h3>
                <p className="text-orange-900/60 text-sm">Automated meal schedules tailored to you.</p>
              </div>
            </div>

            {/* Box 3: Small Feature */}
            <div className="bg-slate-900 rounded-3xl p-8 text-white flex flex-col justify-between">
              <ShoppingCart size={24} className="text-orange-400" />
              <p className="font-medium">Instant Grocery Lists</p>
            </div>

            {/* Box 4: Small Feature */}
            <div className="bg-white border border-slate-100 rounded-3xl p-8 flex flex-col justify-between hover:bg-slate-50 transition-colors">
              <Bookmark size={24} className="text-slate-400" />
              <p className="font-medium text-slate-900">Save from anywhere</p>
            </div>

          </div>
        </div>
      </section>

      {/* Minimal Social Proof / Stats */}
      <section className="py-12 border-t border-slate-50">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-between gap-8 opacity-40">
           <div className="text-xs font-bold uppercase tracking-widest">Global Recipe Library</div>
           <div className="text-xs font-bold uppercase tracking-widest">AI-Driven Nutrition</div>
           <div className="text-xs font-bold uppercase tracking-widest">Seamless Sync</div>
           <div className="text-xs font-bold uppercase tracking-widest">Samsung Health Connect</div>
        </div>
      </section>
    </main>
  );
}