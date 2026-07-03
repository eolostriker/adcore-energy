'use client';

import { motion } from 'motion/react';
import Link from 'next/link';
import { Services } from '../../components/Services';

export default function Solucoes() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-20 bg-white min-h-screen"
    >
      <Services />
      <div className="bg-slate-900 py-32 relative overflow-hidden border-t border-slate-800">
        <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/5 blur-[100px] rounded-full translate-x-1/2 -translate-y-1/2"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left space-y-10 relative z-10">
          <h3 className="text-3xl md:text-5xl font-extrabold text-white leading-tight">Sua empresa merece <br/> o melhor da engenharia solar.</h3>
          <Link 
            href="/contato"
            className="bg-emerald-600 hover:bg-emerald-50 text-white px-12 py-5 rounded-full font-black text-lg transition-all shadow-2xl shadow-emerald-950/20 hover:-translate-y-1 inline-block"
          >
            Falar com Engenheiro Senior
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
