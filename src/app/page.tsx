'use client'

import { useState, useEffect, useRef } from 'react';
import Head from 'next/head';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { FaReact, FaJs, FaHtml5, FaCss3, FaGitAlt, FaLinkedin, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';
import { SiNextdotjs, SiTailwindcss, SiRedux, SiGraphql, SiJest, SiTypescript, SiOracle } from 'react-icons/si';

export default function Home() {
  const [activeSection, setActiveSection] = useState('home');
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const headerBackground = useTransform(
    scrollYProgress,
    [0, 0.2, 0.4, 0.6, 0.8],
    [
      "linear-gradient(45deg, #ff9a9e 0%, #fad0c4 99%, #fad0c4 100%)",
      "linear-gradient(to top, #a18cd1 0%, #fbc2eb 100%)",
      "linear-gradient(to right, #ffecd2 0%, #fcb69f 100%)",
      "linear-gradient(to right, #ff8177 0%, #ff867a 0%, #ff8c7f 21%, #f99185 52%, #cf556c 78%, #b12a5b 100%)",
      "linear-gradient(to top, #30cfd0 0%, #330867 100%)"
    ]
  );

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'experience', 'skills', 'projects'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom > 100;
        }
        return false;
      });
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const experiences = [
    {
      company: "Kenshi Labs Consultancy Pvt. Ltd.",
      role: "Software Engineer",
      period: "July 2024 - Present",
      location: "Bangalore",
      responsibilities: [
        "Lead development of complex web applications using React.js and Next.js",
        "Architect advanced state management solutions with Redux Toolkit",
        "Implement Tailwind CSS across projects for consistent UI",
        "Mentor junior developers and conduct code reviews",
        "Collaborate with product managers on technical specifications"
      ]
    },
    {
      company: "Freelance Frontend Developer",
      role: "Self-Employed",
      period: "Oct 2023 - Jun 2024",
      location: "Chennai",
      responsibilities: [
        "Develop SPAs using React.js and RESTful APIs",
        "Implement performance optimization techniques",
        "Design accessible user interfaces adhering to WCAG guidelines",
        "Utilize Next.js for server-side rendering and improved SEO",
        "Manage entire project lifecycles independently"
      ]
    },
    {
      company: "Mastek",
      role: "Software Engineer - UI",
      period: "Jun 2021 - Oct 2023",
      location: "Chennai",
      responsibilities: [
        "Develop and maintain components for e-commerce platforms",
        "Work with React.js, Redux, and Oracle Commerce Cloud",
        "Implement caching strategies and optimize API calls",
        "Contribute to company-wide component library development",
        "Introduce unit and integration testing with Jest"
      ]
    }
  ];

  const projects = [
    {
      name: "Specialized Bicycle",
      url: "https://www.specialized.com/us/en",
      description: "E-commerce platform for high-performance bicycles",
      details: "Developed user-friendly interfaces with Tailwind, React.js, and Redux Toolkit"
    },
    {
      name: "ColorStreet",
      url: "https://www.colorstreet.com/",
      description: "Direct sales platform for nail fashion products",
      details: "Implemented complex features using React.js and integrated with Oracle Commerce"
    },
    {
      name: "ThingsRemembered",
      url: "https://www.thingsremembered.com/",
      description: "E-commerce platform for personalized gifts",
      details: "Enhanced user experience and optimized performance for high-traffic periods"
    },
    {
      name: "SMEExclusive",
      url: "https://www.smexclusive.com/",
      description: "B2B e-commerce platform for small and medium enterprises",
      details: "Developed responsive designs and implemented efficient state management"
    }
  ];

  const skills = [
    { name: "React", icon: <FaReact />, level: 95 },
    { name: "JavaScript", icon: <FaJs />, level: 90 },
    { name: "HTML5", icon: <FaHtml5 />, level: 95 },
    { name: "CSS3", icon: <FaCss3 />, level: 90 },
    { name: "Next.js", icon: <SiNextdotjs />, level: 85 },
    { name: "Tailwind CSS", icon: <SiTailwindcss />, level: 90 },
    { name: "Redux", icon: <SiRedux />, level: 85 },
    { name: "TypeScript", icon: <SiTypescript />, level: 80 },
    { name: "GraphQL", icon: <SiGraphql />, level: 75 },
    { name: "Jest", icon: <SiJest />, level: 80 },
    { name: "Git", icon: <FaGitAlt />, level: 90 },
    { name: "Oracle Commerce Cloud", icon: <SiOracle />, level: 85 }
  ];

  return (
    <div ref={containerRef} className="min-h-screen text-white">
      <Head>
        <title>Barath Muthuvel - Frontend Developer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <motion.header 
        className="fixed top-0 left-0 right-0 z-50 h-16 flex items-center justify-center"
        style={{ background: headerBackground }}
      >
        <nav>
          <ul className="flex space-x-6">
            {['Home', 'About', 'Experience', 'Skills', 'Projects'].map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className={`text-lg font-semibold transition-colors duration-300 ${
                    activeSection === item.toLowerCase() ? 'text-white' : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </motion.header>

      <main>
        <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
          <video
            autoPlay
            loop
            muted
            className="absolute w-full h-full object-cover"
            style={{ filter: 'brightness(50%)' }}
          >
            <source src="https://www.videvo.net/video/digital-technology-background/4506/" type="video/mp4" />
          </video>
          <div className="relative z-10 text-center">
            <motion.h1 
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="text-6xl font-bold mb-4"
            >
              Barath Muthuvel
            </motion.h1>
            <motion.h2 
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-3xl mb-8"
            >
              Frontend Developer
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl max-w-2xl mx-auto"
            >
              Crafting exceptional user experiences through innovative web solutions
            </motion.p>
          </div>
        </section>

        <section id="about" className="py-20 bg-gradient-to-r from-purple-900 to-indigo-900">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-8 text-center">About Me</h2>
            <div className="flex flex-col md:flex-row items-center justify-center">
              <motion.div 
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="md:w-1/2 mb-8 md:mb-0"
              >
                <img src="/path-to-your-image.jpg" alt="Barath Muthuvel" className="rounded-full w-64 h-64 object-cover mx-auto" />
              </motion.div>
              <motion.div 
                initial={{ x: 100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="md:w-1/2"
              >
                <p className="text-lg mb-4">
                  As a Frontend and Oracle Commerce Cloud Developer with 3.5 years of experience, I specialize in creating
                  responsive and high-performance e-commerce applications. My expertise lies in React.js, Next.js, and
                  modern CSS frameworks like Tailwind.
                </p>
                <p className="text-lg">
                  I'm passionate about solving complex problems and turning ideas into reality through elegant and efficient code.
                  My approach combines technical excellence with a keen eye for user experience, ensuring that the applications
                  I build are not only robust but also intuitive and enjoyable to use.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        <section id="experience" className="py-20 bg-gradient-to-r from-blue-900 to-teal-900">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-8 text-center">Work Experience</h2>
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="mb-8 bg-white bg-opacity-10 rounded-lg shadow-lg p-6 backdrop-filter backdrop-blur-lg"
              >
                <h3 className="text-2xl font-semibold mb-2">{exp.company}</h3>
                <p className="text-xl mb-2">{exp.role}</p>
                <p className="text-gray-400 mb-4">{exp.period} | {exp.location}</p>
                <ul className="list-disc pl-5 space-y-2">
                  {exp.responsibilities.map((resp, i) => (
                    <li key={i}>{resp}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </section>

        <section id="skills" className="py-20 bg-gradient-to-r from-pink-900 to-red-900">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-8 text-center">Skills</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ rotateY: 180, opacity: 0 }}
                  whileInView={{ rotateY: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-white bg-opacity-10 rounded-lg shadow-lg p-6 backdrop-filter backdrop-blur-lg flex flex-col items-center"
                >
                  <div className="text-4xl mb-4">{skill.icon}</div>
                  <p className="text-lg font-semibold mb-2">{skill.name}</p>
                  <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                    <motion.div
                      className="bg-blue-600 h-2.5 rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, ease: "easeOut" }}
                    ></motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="py-20 bg-gradient-to-r from-green-900 to-blue-900">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-8 text-center">Key Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="bg-white bg-opacity-10 rounded-lg shadow-lg p-6 backdrop-filter backdrop-blur-lg"
                >
                  <h3 className="text-2xl font-semibold mb-2">{project.name}</h3>
                  <p className="text-gray-300 mb-2">{project.description}</p>
                  <p className="text-sm text-gray-400 mb-4">{project.details}</p>
                  <a 
                    href={project.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-block bg-blue-500 text-white px-4 py-2 rounded-full font-bold text-sm hover:bg-blue-600 transition-colors duration-300"
                  >
                    View Project
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gradient-to-r from-gray-900 to-black py-8">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <p>&copy; 2024 Barath Muthuvel. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="tel:+918072923619" className="text-white hover:text-blue-400 transition-colors duration-300">
              <FaPhoneAlt />
            </a>
            <a href="mailto:baratheabs4@gmail.com" className="text-white hover:text-blue-400 transition-colors duration-300">
              <FaEnvelope />
            </a>
            <a href="https://www.linkedin.com/in/barath18/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400 transition-colors duration-300">
              <FaLinkedin />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}