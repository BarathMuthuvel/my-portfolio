'use client'

import { FC } from 'react';
import { motion } from 'framer-motion';

interface HeaderProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

const Header: FC<HeaderProps> = ({ activeSection, setActiveSection }) => {
  const navItems = ['home', 'about', 'experience', 'projects', 'skills', 'contact'];

  return (
    <header className="fixed top-0 left-0 right-0 bg-gray-800 z-50">
      <nav className="container mx-auto px-4 py-4">
        <ul className="flex justify-center space-x-6">
          {navItems.map((item) => (
            <motion.li
              key={item}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <a
                href={`#${item}`}
                className={`text-lg capitalize ${
                  activeSection === item ? 'text-blue-400' : 'text-gray-300'
                }`}
                onClick={() => setActiveSection(item)}
              >
                {item}
              </a>
            </motion.li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;