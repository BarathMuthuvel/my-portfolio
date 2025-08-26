"use client"
import React, { useState } from 'react'
import { Icon } from '@iconify/react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import Image from 'next/image'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleDownload = () => {
    // Open PDF in a new tab
    window.open("/resume/BarathResume.pdf", "_blank");
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleSmoothScroll = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  const navigationLinks = [
    { href: "#home", text: "Home" },
    { href: "#about", text: "About Me" },
    { href: "#skills", text: "Skills" },
    { href: "#projects", text: "Project" },
    { href: "#contact", text: "Contact Me" }
  ];

  const navItemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    },
    hover: {
      y: -2,
      transition: {
        duration: 0.2,
        ease: "easeOut"
      }
    }
  };

  return (
    <header className="w-full bg-white top-0 z-50 p-2 lg:p-4">
      <div className="container mx-auto px-4 sm:px-6 lg:px-6 rounded-full lg:border lg:border-gray-200 lg:shadow-lg">
        <div className="flex items-center justify-between py-2 lg:py-3">
          {/* Left: Logo and Personal Name */}
          <motion.div
            className="flex items-center gap-1"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              href="https://www.linkedin.com/in/barath18/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg sm:text-xl lg:text-2xl font-bold font-sans text-black hover:text-black transition-all duration-300 cursor-pointer hover:scale-105"
            >
              <Image
                src="/images/blogo.png"
                alt="logo"
                width={60}
                height={60}
                className="rounded-full hover:scale-110 transition-transform duration-300"
                unoptimized={true}
              />
            </Link>
          </motion.div>

          {/* Desktop Navigation - Hidden on mobile/tablet */}
          <nav className="hidden lg:flex gap-8">
            {navigationLinks.map((link, index) => (
              <motion.div
                key={link.href}
                variants={navItemVariants}
                initial="hidden"
                animate="visible"
                whileHover="hover"
                transition={{ delay: index * 0.1 }}
              >
                <button
                  onClick={() => handleSmoothScroll(link.href)}
                  className="font-semibold text-black cursor-pointer relative px-3 py-1 rounded-lg overflow-hidden group"
                >
                  <span className="relative z-10 group-hover:text-white font-semibold font-work-sans-semi-bold transition-colors duration-300">
                    {link.text}
                  </span>
                  <div className="absolute inset-0 bg-black transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
                </button>
              </motion.div>
            ))}
          </nav>

          {/* Desktop Resume Button - Hidden on mobile/tablet */}
          <motion.button
            onClick={handleDownload}
            className="hidden lg:flex items-center gap-3 bg-black text-white px-6 py-3 rounded-xl font-semibold hover:bg-gray-800 transition-all duration-500 ease-out relative overflow-hidden group"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10">
              Resume
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-gray-800 via-black to-gray-800 opacity-0 group-hover:opacity-100 transition-transform duration-700 ease-out" />
            <div className="relative z-10">
              <Icon icon="line-md:downloading-loop" className="text-2xl" />
            </div>
          </motion.button>

          {/* Mobile Menu Button - Visible only on mobile/tablet */}
          <motion.button
            onClick={toggleMenu}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-300"
            aria-label="Toggle menu"
            whileTap={{ scale: 0.9 }}
          >
            <Icon
              icon={isMenuOpen ? "ci:close-big" : "ci:menu-alt-05"}
              className="text-2xl text-black"
            />
          </motion.button>
        </div>

        {/* Mobile Menu - Collapsible */}
        <motion.div
          className={`lg:hidden transition-all duration-300 ease-in-out overflow-hidden ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
          initial={false}
          animate={isMenuOpen ? { maxHeight: "24rem", opacity: 1 } : { maxHeight: 0, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <div className="py-4 space-y-4 border-t border-gray-200">
            {/* Mobile Navigation Links */}
            <nav className="flex flex-col space-y-3">
              {navigationLinks.map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <button
                    onClick={() => {
                      handleSmoothScroll(link.href);
                      setIsMenuOpen(false);
                    }}
                    className="font-semibold text-black cursor-pointer px-4 py-3 rounded-lg hover:bg-gray-100 transition-all duration-300 text-left w-full"
                  >
                    {link.text}
                  </button>
                </motion.div>
              ))}
            </nav>

            {/* Mobile Resume Button */}
            <motion.div
              className="pt-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <button
                onClick={() => {
                  handleDownload();
                  setIsMenuOpen(false);
                }}
                className="w-full flex items-center justify-center gap-3 bg-black text-white px-6 py-3 rounded-xl font-semibold hover:bg-gray-800 transition-all duration-500 ease-out"
              >
                <span>Resume</span>
                <Icon icon="line-md:downloading-loop" className="text-xl" />
              </button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </header>
  )
}

export default Header
