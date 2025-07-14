'use client'

import { FC } from 'react';
import { motion } from 'framer-motion';

const Hero: FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <h1 className="text-5xl font-bold mb-4">Barath Muthuvel</h1>
        <h2 className="text-3xl text-blue-400 mb-8">Frontend Developer</h2>
        <p className="text-xl max-w-2xl mx-auto">
          Passionate about creating responsive and engaging web experiences with 3+ years of expertise in React, Next.js, and modern frontend technologies.
        </p>
      </motion.div>
    </section>
  );
};

export default Hero;