'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Menu, X, ChevronRight, UtensilsCrossed } from 'lucide-react';

const navLinks = [
  { name: 'Recipes', href: '/recipes' },
  { name: 'Shopping', href: '/shopping' },
  { name: 'Meal Planner', href: '/meal-planner' },
  { name: 'Communities', href: '/communities' },
  { name: 'Blog', href: '/blog' },
  { name: 'Food+', href: '/food-plus' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : 'unset';
  }, [mobileMenuOpen]);

  useEffect(() => setMobileMenuOpen(false), [pathname]);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/80 backdrop-blur-md shadow-sm border-b border-gray-200/50' 
          : 'bg-[#FAFAFB] border-b border-transparent' // FIX: Removed border when no scroll
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex items-center justify-between transition-all duration-300 ${
          isScrolled ? 'h-14' : 'h-16'
        }`}>
          
          {/* Logo */}
          <Link href="/" className="group flex items-center space-x-2">
            <UtensilsCrossed className="w-6 h-6 text-orange-600 transition-transform group-hover:rotate-12" />
            <span className="text-lg font-bold tracking-tight text-gray-900 uppercase">
              Chef<span className="text-orange-600">Mind</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link 
                  key={link.name}
                  href={link.href} 
                  className={`px-4 py-2 text-sm font-medium transition-colors rounded-lg ${
                    isActive 
                      ? 'text-orange-600 bg-orange-50' 
                      : 'text-gray-600 hover:text-orange-600 hover:bg-black/5'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-3">
            <Link href="/login" className="px-4 py-2 text-sm font-semibold text-gray-700 hover:text-orange-600">
              Log In
            </Link>
            <Link href="/app" className="bg-orange-600 text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-orange-700 transition-all shadow-sm">
              Get Started
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="lg:hidden p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div 
        className={`lg:hidden fixed inset-0 z-40 transition-transform duration-300 ease-in-out transform ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } h-screen w-full bg-white`} // Mobile drawer remains solid white for clean scrolling
        style={{ top: isScrolled ? '56px' : '64px' }}
      >
        <nav className="flex flex-col p-4 space-y-1 h-full overflow-y-auto bg-white">
          {navLinks.map((link) => (
            <Link 
              key={link.name}
              href={link.href}
              className="flex items-center justify-between text-base font-semibold text-gray-800 p-4 hover:bg-orange-50 rounded-xl transition-all"
            >
              {link.name}
              <ChevronRight className="text-gray-300" size={18} />
            </Link>
          ))}
          
          <div className="pt-8 px-4 flex flex-col space-y-3 pb-24">
            <Link href="/app" className="w-full bg-orange-600 text-white text-center py-4 rounded-xl font-semibold text-base shadow-lg shadow-orange-100">
              Open App
            </Link>
            <Link href="/login" className="w-full bg-gray-50 text-gray-700 text-center py-4 rounded-xl font-semibold text-base">
              Log In
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}