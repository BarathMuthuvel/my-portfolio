'use client'

import { FC } from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Specialized Bicycle',
    description: 'Developed a multi-language site for a globally recognized cycling brand using React.js, implementing modern frontend technologies and working with RESTful APIs.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'React.js'],
  },
  {
    title: 'Things Remembered',
    description: 'Enhanced the e-commerce website focusing on UI design and development, integrating with Oracle Commerce for real-time updates on products and orders.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'React.js', 'Tailwind CSS'],
  },
  {
    title: 'Gear Coop',
    description: 'Implemented advanced search capabilities and filters for an outdoor gear retailer, optimizing the e-commerce workflow and improving user experience.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'React.js'],
  },
  {
    title: 'Color Street',
    description: 'Developed a product customization feature and implemented Redux for state management in this beauty industry e-commerce platform.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'React.js', 'Redux'],
  },
];

const Projects: FC = () => {
  return (
    <section id="projects" className="py-20">
      <h2 className="text-3xl font-bold mb-8">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-gray-800 p-6 rounded-lg"
          >
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, techIndex) => (
                <span key={techIndex} className="bg-blue-500 text-white px-2 py-1 rounded text-sm">
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;