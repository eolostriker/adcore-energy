
import React from 'react';
import { motion } from 'motion/react';
import { Target, Eye, Heart, Leaf, ShieldCheck } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <div className="bg-slate-900">
      {/* Quem Somos Section Aligned Left */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-left space-y-12">
        <motion.div 
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="w-16 h-16 bg-emerald-950/30 rounded-3xl flex items-center justify-center text-emerald-400 mb-4 border border-emerald-900/50 shadow-lg"
        >
          <Leaf size={32} />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <h2 className="text-emerald-400 font-bold tracking-[0.3em] uppercase text-xs">A Empresa</h2>
          <h3 className="text-5xl font-extrabold text-white tracking-tight">ADCORE Energy</h3>
          
          <div className="space-y-8 text-xl text-slate-400 leading-relaxed max-w-4xl font-medium">
            <p>
              Somos uma empresa dedicada à <strong className="text-emerald-400">eficiência energética sustentável</strong>. Nosso trabalho une o melhor da engenharia brasileira com tecnologias globais de ponta.
            </p>
            <p>
              Nascemos com o propósito de liderar a transição energética, focando em entregar <strong className="text-white">qualidade técnica impecável</strong> e transparência total desde o primeiro projeto.
            </p>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="flex items-center gap-6 pt-8"
        >
          <div className="flex items-center gap-3 px-6 py-3 bg-slate-800 rounded-full border border-slate-700 text-emerald-400 text-sm font-bold">
            <ShieldCheck size={18} />
            Compromisso com Qualidade 100%
          </div>
          <div className="h-[2px] w-24 bg-slate-800 hidden sm:block"></div>
        </motion.div>
      </section>

      {/* MVV Aligned Left */}
      <section className="bg-slate-950 py-32 border-y border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-10">
            <div className="bg-slate-900 p-12 rounded-[3rem] shadow-sm text-left border border-slate-800">
              <div className="w-12 h-12 bg-slate-800 text-emerald-400 rounded-2xl flex items-center justify-center mb-8 border border-slate-700">
                <Target size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Missão</h3>
              <p className="text-slate-400 text-sm leading-relaxed font-medium">
                Garantir economia sustentável e independência energética com projetos de alta engenharia para todos.
              </p>
            </div>
            
            <div className="bg-slate-800 p-12 rounded-[3rem] shadow-xl border-2 border-emerald-500/30 text-left">
              <div className="w-12 h-12 bg-emerald-600 text-white rounded-2xl flex items-center justify-center mb-8">
                <Eye size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Visão</h3>
              <p className="text-slate-300 text-sm leading-relaxed font-medium">
                Ser a referência nacional em inovação e confiança no setor fotovoltaico emergente.
              </p>
            </div>

            <div className="bg-slate-900 p-12 rounded-[3rem] shadow-sm text-left border border-slate-800">
              <div className="w-12 h-12 bg-slate-800 text-emerald-400 rounded-2xl flex items-center justify-center mb-8 border border-slate-700">
                <Heart size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Valores</h3>
              <p className="text-slate-400 text-sm leading-relaxed font-medium">
                Ética solar, rigor técnico, transparência total e cuidado genuíno com a biodiversidade.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
