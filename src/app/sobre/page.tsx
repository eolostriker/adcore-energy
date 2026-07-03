'use client';

import { motion } from 'motion/react';
import { About } from '../../components/About';

export default function Sobre() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-20"
    >
      <About />
    </motion.div>
  );
}
