'use client'

import { FC } from 'react';
import { motion } from 'framer-motion';

const About: FC = () => {
  return (
    <section id="about" className="py-20">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl font-bold mb-8">About Me</h2>
        <p className="text-lg mb-4">
          I'm a highly skilled and motivated Frontend Developer with over 3 years of experience in designing and developing responsive web applications. My journey in tech started with a Bachelor's degree in Mechanical Engineering, but my passion for creating user-friendly interfaces led me to pursue a career in frontend development.
        </p>
        <p className="text-lg">
          I specialize in React.js and Next.js, and I'm always eager to learn and apply new technologies to solve complex problems. My goal is to contribute my technical expertise and creative problem-solving skills to innovative projects that make a real impact.
        </p>
      </motion.div>
    </section>
  );
};

export default About;