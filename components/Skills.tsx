'use client'

import { FC } from 'react';
import { motion } from 'framer-motion';

const skills = [
  'HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'React.js', 'Next.js',
  'Redux', 'Tailwind CSS', 'Bootstrap', 'Git', 'RESTful APIs',
  'Jest', 'Webpack', 'Responsive Design', 'Cross-browser Compatibility',
];

const Skills: FC = () => {
  return (
    <section id="skills" className="py-20">
      <h2 className="text-3xl font-bold mb-8">Skills</h2>
      <div className="flex flex-wrap gap-4">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
            className="bg-gray-800 px-4 py-2 rounded-full"
          >
            {skill}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;