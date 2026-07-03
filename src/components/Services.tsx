
import React from 'react';
import { motion } from 'motion/react';
import { Home, Building2, Factory, Activity, CheckCircle2 } from 'lucide-react';
import { SERVICES } from '../../constants';

const IconMap: Record<string, any> = {
  Home, Building2, Factory, Activity
};

export const Services: React.FC = () => {
  return (
    <section className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl text-left mb-20 space-y-4"
        >
          <h2 className="text-emerald-600 font-bold tracking-[0.25em] uppercase text-xs">Especialidades</h2>
          <p className="text-4xl font-extrabold text-slate-900">Nossas Soluções Solares</p>
          <div className="w-16 h-1.5 bg-emerald-600 rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SERVICES.map((service, index) => {
            const Icon = IconMap[service.icon];
            return (
              <motion.div 
                key={service.id} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-slate-50 p-10 rounded-[2.5rem] shadow-sm hover:shadow-xl hover:shadow-emerald-100/30 transition-all duration-500 group border border-slate-100 hover:border-emerald-200"
              >
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-emerald-600 mb-8 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300 shadow-sm">
                  <Icon size={28} />
                </div>
                <h3 className="text-xl font-bold mb-4 text-slate-900">{service.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-8 font-medium">
                  {service.description}
                </p>
                <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-emerald-600 border-t border-slate-200 pt-6">
                  <CheckCircle2 size={14} /> Solução de Elite
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
