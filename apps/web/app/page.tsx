import {
  Search,
  Calendar,
  ShoppingCart,
  Bookmark,
  Clock,
  Flame,
  CheckCircle2,
  Sparkles,
  ChevronRight,
} from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FAFAFB] font-sans text-slate-900 overflow-x-hidden">
      {/* Background Glows */}
      <div className="fixed top-0 left-0 w-full h-full -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-orange-100/40 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-50/50 blur-[100px] rounded-full" />
      </div>

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 lg:pt-40 lg:pb-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 border border-orange-100 text-orange-600 text-xs font-bold mb-6 animate-fade-in">
                <Sparkles size={14} />
                <span>MEET CHEF MIND AI</span>
              </div>
              <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold tracking-tight leading-[0.95] mb-8 text-slate-900">
                Cook <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600">smarter,</span> <br />
                not harder.
              </h1>
              <p className="text-lg md:text-xl text-slate-500 leading-relaxed mb-10 max-w-xl">
                Chef Mind transforms your kitchen experience with AI-powered meal planning, effortless grocery syncing, and personalized nutrition.
              </p>

              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
                <button className="group w-full sm:w-auto bg-slate-900 text-white px-8 py-4 rounded-2xl font-semibold hover:bg-orange-600 transition-all active:scale-95 shadow-2xl shadow-slate-200 flex items-center justify-center gap-2">
                  Start Your Journey
                  <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>
                <div className="flex items-center gap-4">
                  <div className="flex -space-x-3">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-slate-200 shadow-sm" />
                    ))}
                  </div>
                  <p className="text-sm font-medium text-slate-600">
                    <span className="font-bold text-slate-900">12k+</span> chefs joined
                  </p>
                </div>
              </div>
            </div>

            {/* Right Side Visuals */}
            <div className="hidden lg:flex lg:col-span-5 relative">
              <div className="relative w-full aspect-square flex items-center justify-center">
                {/* Main Card */}
                <div className="relative z-10 w-full max-w-[400px] bg-white/80 backdrop-blur-xl rounded-[2.5rem] shadow-[0_40px_80px_-15px_rgba(0,0,0,0.08)] p-8 border border-white group transition-all duration-500 hover:-translate-y-2">
                  <div className="aspect-square bg-slate-100 rounded-3xl mb-6 overflow-hidden relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-orange-200 to-orange-400 opacity-20" />
                    <div className="absolute inset-0 flex items-center justify-center font-bold text-orange-200 text-8xl">CM</div>
                  </div>
                  
                  <h4 className="font-bold text-2xl mb-2">Harvest Quinoa Bowl</h4>
                  <div className="flex gap-4 mb-6">
                    <span className="flex items-center gap-1.5 text-xs font-bold text-slate-400 uppercase tracking-widest">
                      <Clock size={14} /> 20m
                    </span>
                    <span className="flex items-center gap-1.5 text-xs font-bold text-orange-500 uppercase tracking-widest">
                      <Flame size={14} /> 450 kcal
                    </span>
                  </div>

                  <div className="space-y-4">
                    <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                      <div className="h-full bg-orange-500 w-[65%]" />
                    </div>
                    <div className="flex justify-between items-center">
                        <span className="text-xs font-bold text-slate-400">CHEF MIND SCORE</span>
                        <span className="text-xs font-bold text-orange-600">A+</span>
                    </div>
                  </div>
                </div>

                {/* Floating Badge */}
                <div className="absolute -bottom-4 -left-8 z-20 bg-white rounded-2xl shadow-xl p-4 border border-slate-50 flex items-center gap-3 animate-bounce-slow">
                  <div className="w-10 h-10 bg-green-50 text-green-600 rounded-full flex items-center justify-center">
                    <CheckCircle2 size={20} />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-slate-400 uppercase leading-none mb-1">Status</p>
                    <p className="text-sm font-bold text-slate-900">Health Optimized</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bento Grid Section */}
      <section className="pb-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-4">
            {/* Featured Box */}
            <div className="md:col-span-2 md:row-span-2 bg-white rounded-[2rem] p-10 flex flex-col justify-between border border-slate-100 shadow-sm hover:shadow-xl hover:border-orange-100 transition-all group">
              <div className="w-14 h-14 bg-orange-50 rounded-2xl flex items-center justify-center text-orange-600 group-hover:scale-110 transition-transform">
                <Search size={28} />
              </div>
              <div>
                <h3 className="text-3xl font-bold mb-4">Intuitive Recipe Engine</h3>
                <p className="text-slate-500 text-lg leading-relaxed">
                  Chef Mind scans your pantry and suggests the perfect meal. No waste, just great taste.
                </p>
              </div>
            </div>

            {/* Accent Box */}
            <div className="md:col-span-2 bg-slate-900 rounded-[2rem] p-8 flex items-center justify-between text-white overflow-hidden relative group">
              <div className="relative z-10">
                <h3 className="text-xl font-bold mb-2">Weekly Mind-Set</h3>
                <p className="text-slate-400 text-sm">Automated scheduling for busy lifestyles.</p>
              </div>
              <Calendar size={40} className="text-orange-500/20 absolute -right-4 -bottom-4 rotate-12 group-hover:rotate-0 transition-transform duration-500" />
              <div className="relative z-10 w-12 h-12 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-md">
                <Calendar size={20} className="text-white" />
              </div>
            </div>

            {/* Small Boxes */}
            <div className="bg-orange-50 rounded-[2rem] p-8 border border-orange-100 flex flex-col justify-between hover:bg-orange-100 transition-colors">
              <ShoppingCart size={24} className="text-orange-600" />
              <p className="font-bold text-lg text-slate-900 leading-tight">Smart Cart <br/>Syncing</p>
            </div>

            <div className="bg-white rounded-[2rem] p-8 border border-slate-100 flex flex-col justify-between shadow-sm hover:shadow-md transition-all">
              <Bookmark size={24} className="text-slate-300" />
              <p className="font-bold text-lg text-slate-900 leading-tight">Save from <br/>Web</p>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof / Partners */}
      <section className="py-10 border-t border-slate-100 bg-white/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap justify-center lg:justify-between items-center gap-10 opacity-40">
             <span className="text-xs font-black uppercase tracking-[0.2em]">Chef Mind Labs</span>
             <span className="text-xs font-black uppercase tracking-[0.2em]">Open Kitchen AI</span>
             <span className="text-xs font-black uppercase tracking-[0.2em]">Global Flavor Index</span>
             <span className="text-xs font-black uppercase tracking-[0.2em]">Mindful Nutrition</span>
          </div>
        </div>
      </section>
    </main>
  );
}