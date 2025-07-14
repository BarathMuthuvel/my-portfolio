'use client'

import { FC } from 'react';
import { motion } from 'framer-motion';

const experiences = [
  {
    company: 'Kenshi Labs Consultancy Pvt. Ltd.',
    position: 'Software Engineer',
    period: 'July 2024 – Present',
    description: 'Working on SMEExclusive and the company\'s own website, utilizing Next.js, Tailwind CSS, and TypeScript to create modern, responsive web applications.',
  },
  {
    company: 'Apex Infralink Limited',
    position: 'Freelance Frontend Developer',
    period: 'October 2023 - June 2024',
    description: 'Developed custom frontend solutions for various clients, focusing on responsive design and optimal user experience.',
  },
  {
    company: 'Mastek',
    position: 'UI Engineer',
    period: 'June 2021 – October 2023',
    description: 'Worked on major projects including Specialized Bicycle, Things Remembered, Gear Coop, and Color Street, implementing modern frontend technologies and best practices.',
  },
];

const Experience: FC = () => {
  return (
    <section id="experience" className="py-20">
      <h2 className="text-3xl font-bold mb-8">Work Experience</h2>
      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-gray-800 p-6 rounded-lg"
          >
            <h3 className="text-xl font-semibold">{exp.position}</h3>
            <p className="text-blue-400">{exp.company}</p>
            <p className="text-gray-400">{exp.period}</p>
            <p className="mt-2">{exp.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;