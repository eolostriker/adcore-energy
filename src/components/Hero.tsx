
import React from 'react';
import Link from 'next/link';
import { motion } from 'motion/react';
import { ArrowRight, Sun, Zap, ShieldCheck } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-44 pb-24 bg-white overflow-hidden border-b border-slate-50">
      {/* Soft background accents */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute top-0 left-0 w-[800px] h-[400px] bg-emerald-50/40 blur-[120px] rounded-full -z-10"
      ></motion.div>
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 text-left">
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-50 border border-slate-200 text-slate-500 text-xs font-bold uppercase tracking-widest"
        >
          <Sun size={14} className="text-emerald-600" />
          Sustentabilidade e Engenharia
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-5xl md:text-7xl font-extrabold text-slate-900 leading-[1.1] tracking-tight"
        >
          Transforme a luz solar em <br />
          <span className="text-emerald-600">liberdade financeira.</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-lg md:text-xl text-slate-500 max-w-2xl leading-relaxed font-medium"
        >
          A ADCORE Energy projeta o futuro da sua economia hoje. Reduza sua fatura de energia e valorize seu imóvel com soluções fotovoltaicas de alta tecnologia.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="flex flex-col sm:flex-row items-start justify-start gap-4 pt-4"
        >
          <Link 
            href="/contato"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-emerald-600 hover:bg-emerald-700 text-white px-10 py-5 rounded-full font-bold text-lg transition-all shadow-xl shadow-emerald-100 hover:-translate-y-1"
          >
            Quero Economizar Agora
            <ArrowRight size={22} />
          </Link>
          <Link 
            href="/solucoes"
            className="w-full sm:w-auto inline-flex items-center justify-center bg-white border-2 border-slate-100 hover:border-slate-900 text-slate-900 px-10 py-5 rounded-full font-bold text-lg transition-all"
          >
            Nossas Soluções
          </Link>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-10 pt-24 border-t border-slate-50"
        >
          <div className="flex flex-col items-start group">
            <div className="w-14 h-14 bg-emerald-50 rounded-2xl flex items-center justify-center text-emerald-600 mb-4 transition-all duration-300 group-hover:bg-emerald-600 group-hover:text-white">
              <Zap size={28} />
            </div>
            <h4 className="font-bold text-slate-900 mb-1">Eficiência</h4>
            <p className="text-sm text-slate-500 font-medium">Máxima geração por m²</p>
          </div>
          <div className="flex flex-col items-start group">
            <div className="w-14 h-14 bg-emerald-50 rounded-2xl flex items-center justify-center text-emerald-600 mb-4 transition-all duration-300 group-hover:bg-emerald-600 group-hover:text-white">
              <ShieldCheck size={28} />
            </div>
            <h4 className="font-bold text-slate-900 mb-1">Confiança</h4>
            <p className="text-sm text-slate-500 font-medium">Suporte técnico permanente</p>
          </div>
          <div className="flex flex-col items-start group">
            <div className="w-14 h-14 bg-emerald-50 rounded-2xl flex items-center justify-center text-emerald-600 mb-4 transition-all duration-300 group-hover:bg-emerald-600 group-hover:text-white">
              <Sun size={28} />
            </div>
            <h4 className="font-bold text-slate-900 mb-1">Impacto</h4>
            <p className="text-sm text-slate-500 font-medium">Energia 100% limpa</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
