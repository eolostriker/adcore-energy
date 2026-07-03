
'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { AppView } from '../../types';
import { NAV_ITEMS } from '../../constants';
import { Logo } from './Logo';

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-emerald-600 border-b border-emerald-500 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="cursor-pointer brightness-0 invert" onClick={() => setIsMenuOpen(false)}>
            <Logo />
          </Link>

          <nav className="hidden md:flex items-center space-x-10">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={`text-sm font-bold transition-all hover:text-white ${
                  pathname === item.path ? 'text-white underline underline-offset-8 decoration-2' : 'text-emerald-100'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link 
              href="/contato"
              className="bg-white hover:bg-emerald-50 text-emerald-700 px-6 py-2.5 rounded-full text-sm font-black transition-all shadow-md active:scale-95"
            >
              Consultoria Grátis
            </Link>
          </nav>

          <button 
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-emerald-700 border-b border-emerald-600 animate-in slide-in-from-top duration-300">
          <div className="px-4 pt-2 pb-8 space-y-1">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                onClick={() => setIsMenuOpen(false)}
                className={`block w-full text-left px-3 py-5 text-base font-bold border-b border-emerald-600 ${
                  pathname === item.path ? 'text-white bg-emerald-800/30' : 'text-emerald-100'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link 
              href="/contato"
              onClick={() => setIsMenuOpen(false)}
              className="block w-full mt-6 bg-white text-emerald-700 px-3 py-4 rounded-2xl text-center font-black shadow-lg"
            >
              Falar com Especialista
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
