
import React from 'react';
import Link from 'next/link';
import { Logo } from './Logo';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full">
      {/* Top Part: White Background */}
      <div className="bg-white pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center space-y-10">
          <Logo />
          <p className="text-slate-400 max-w-xl text-sm leading-relaxed font-medium">
            Engenharia sustentável para um amanhã livre de contas abusivas. <br />
            ADCORE Energy: do telhado para o planeta, transformando sol em prosperidade e independência.
          </p>
          
          <nav className="flex flex-wrap justify-center gap-10 text-[10px] font-black uppercase tracking-widest text-slate-900">
            <Link href="/" className="hover:text-emerald-600 transition-colors">Início</Link>
            <Link href="/quem-somos" className="hover:text-emerald-600 transition-colors">Quem Somos</Link>
            <Link href="/solucoes" className="hover:text-emerald-600 transition-colors">Soluções</Link>
            <Link href="/contato" className="hover:text-emerald-600 transition-colors">Contato</Link>
          </nav>
        </div>
      </div>

      {/* Bottom Part: Emerald Green Background */}
      <div className="bg-emerald-600 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-center items-center gap-8 text-[10px] font-bold text-emerald-50 uppercase tracking-widest">
            <p>© 2026 ADCORE Energy. Sustentabilidade e Engenharia.</p>
            <div className="flex gap-10">
              <a href="#" className="hover:text-white transition-colors">Política de Privacidade</a>
              <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
