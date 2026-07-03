'use client';

import { motion } from 'motion/react';
import { Hero } from '../components/Hero';
import { About } from '../components/About';
import { Services } from '../components/Services';
import { Contact } from '../components/Contact';

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Hero />
      <About />
      <Services />
      <Contact />
    </motion.div>
  );
}
