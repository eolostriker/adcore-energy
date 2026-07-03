'use client';

import { motion } from 'motion/react';
import { Contact } from '../../components/Contact';

export default function Contato() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="pt-20 bg-slate-950 min-h-screen"
    >
      <Contact />
    </motion.div>
  );
}
