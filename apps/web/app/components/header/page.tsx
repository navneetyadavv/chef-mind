'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/80 backdrop-blur-md shadow-sm border-b border-slate-100' 
          : 'bg-white/40 backdrop-blur-[2px] border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex items-center justify-between transition-all duration-500 ${
          isScrolled ? 'h-16' : 'h-24'
        }`}>
          
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-xl font-black tracking-tighter text-gray-900 uppercase">
              Chef<span className="text-orange-600">Mind</span>
            </Link>
          </div>

          {/* Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1">
            {[
              { name: 'Recipes', href: '/recipes' },
              { name: 'Shopping', href: '/shopping' },
              { name: 'Meal Planner', href: '/meal-planner' },
              { name: 'Communities', href: '/communities' },
              { name: 'Blog', href: '/blog' },
              { name: 'Food+', href: '/food-plus' },
            ].map((link) => (
              <Link 
                key={link.name}
                href={link.href} 
                className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-black transition-colors rounded-lg hover:bg-black/5"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Right side buttons */}
          <div className="flex items-center space-x-3">
            <Link 
              href="/login" 
              className="text-sm font-semibold text-gray-700 hover:text-black px-4 py-2 transition-all"
            >
              Log In
            </Link>
            <Link 
              href="/app" 
              className="bg-black text-white px-5 py-2.5 rounded-xl hover:bg-orange-600 transition-all text-sm font-bold shadow-lg shadow-black/5"
            >
              Use App
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}