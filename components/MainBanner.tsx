"use client"

import React from 'react'
import { Icon } from '@iconify/react'
import { motion } from 'framer-motion'
import BannerPerson from '../public/images/bannerperson.png'
import Image from 'next/image'

const MainBanner = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: 0.8,
                staggerChildren: 0.2,
                ease: [0.25, 0.46, 0.45, 0.94]
            }
        }
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: [0.25, 0.46, 0.45, 0.94]
            }
        }
    }

    const socialIconVariants = {
        hover: {
            scale: 1.1,
            y: -3,
            transition: {
                duration: 0.3,
                ease: [0.25, 0.46, 0.45, 0.94]
            }
        }
    }

    return (
        <motion.div
            id="home"
            className="bg-white flex flex-col lg:flex-row items-stretch px-3 sm:px-6 md:px-12 lg:px-16 py-6 sm:py-8 md:py-6 relative mx-auto container overflow-hidden"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            {/* Image Section - First on Mobile/Tablet */}
            <motion.div
                className="w-full lg:flex-1 flex items-center justify-center relative mb-6 sm:mb-8 lg:mb-0 order-1 lg:order-2 h-auto lg:h-full"
                variants={itemVariants}
            >
                <div className="relative w-full h-auto max-w-xs sm:max-w-sm md:max-w-md lg:max-w-full flex items-center justify-center">
                    <Image
                        src={BannerPerson}
                        alt="Barath - Senior Software Engineer and Frontend Developer from Bangalore, India specializing in React.js and Next.js development"
                        width={1000}
                        height={1000}
                        className="w-full h-auto max-h-96 sm:max-h-full lg:max-h-full object-contain"
                        priority
                    />
                </div>
            </motion.div>

            {/* Content Section - Second on Mobile/Tablet */}
            <motion.div
                className="w-full lg:flex-1 flex flex-col justify-center lg:justify-between lg:pr-8 xl:pr-12 h-auto lg:h-full order-2 lg:order-1 relative max-w-full"
                variants={itemVariants}
            >
                {/* Background Accent Elements */}
                <div className="absolute top-8 left-0 w-12 h-12 sm:w-16 sm:h-16 bg-black rounded-full opacity-5 blur-xl"></div>
                <div className="absolute top-1/3 left-1 w-6 h-6 sm:w-8 sm:h-8 bg-gray-900 rounded-full opacity-10 blur-lg"></div>

                {/* Text Content */}
                <div className="flex flex-col justify-center text-center sm:text-left relative z-10 max-w-full overflow-hidden">
                    {/* Status Badge */}
                    <motion.div className="mb-4 sm:mb-3 flex justify-center sm:justify-start" variants={itemVariants}>
                        <div className="inline-flex items-center gap-2 bg-white border-2 border-black rounded-full px-4 py-2 sm:px-3 sm:py-1.5 max-w-fit shadow-sm">
                            <div className="w-2 h-2 bg-black rounded-full animate-pulse"></div>
                            <span className="text-sm sm:text-xs font-medium text-black">Available for new opportunities</span>
                        </div>
                    </motion.div>

                    {/* Main Headline */}
                    <motion.div className="mb-4 sm:mb-4 md:mb-6 max-w-full" variants={itemVariants}>
                        <h1 className="text-3xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl font-normal font-sans text-black leading-tight mb-2 sm:mb-4 break-words">
                            Hi, I&apos;m{' '}
                            <span className="text-black font-bold font-sans relative">
                                Barath
                                <div className="absolute -bottom-1 left-0 w-full h-2 sm:h-3 bg-black opacity-10 transform -skew-x-12"></div>
                            </span>
                        </h1>
                        <div className="relative max-w-full">
                            <p className="text-lg sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-medium font-sans mb-0 break-words">
                                <span className="text-black">Senior Software Engineer & </span>
                                <span className="text-black font-bold underline decoration-2 underline-offset-4">Frontend Specialist</span>
                            </p>
                        </div>
                    </motion.div>

                    {/* Subheading with Tech Stack */}
                    <motion.div className="mb-4 sm:mb-3 md:mb-4 max-w-full" variants={itemVariants}>
                        <h2 className="text-base sm:text-base md:text-lg lg:text-xl font-semibold font-sans text-gray-700 leading-relaxed mb-3 sm:mb-2 break-words">
                            Crafting Scalable, High-Performance Web Applications
                        </h2>
                        <div className="flex flex-wrap gap-2 sm:gap-2 mb-2 sm:mb-2 max-w-full justify-center sm:justify-start">
                            {['React.js', 'Next.js', 'TypeScript', 'Node.js'].map((tech) => (
                                <span key={tech} className="inline-flex items-center px-3 py-1 sm:px-2.5 sm:py-1 bg-white text-black text-sm sm:text-xs font-medium rounded-md border-2 border-black hover:bg-black hover:text-white transition-colors">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </motion.div>

                    {/* Key Statistics */}
                    <motion.div className="mb-5 sm:mb-4 md:mb-6 max-w-full" variants={itemVariants}>
                        <div className="grid grid-cols-3 gap-2 sm:gap-2 md:gap-3 mb-3 sm:mb-3 max-w-full">
                            <div className="text-center p-2 sm:p-2 border-2 border-black rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow">
                                <div className="text-lg sm:text-base md:text-lg lg:text-xl font-bold text-black">4+</div>
                                <div className="text-xs text-gray-600 break-words leading-tight">Years Experience</div>
                            </div>
                            <div className="text-center p-2 sm:p-2 border-2 border-black rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow">
                                <div className="text-lg sm:text-base md:text-lg lg:text-xl font-bold text-black">10+</div>
                                <div className="text-xs text-gray-600 break-words leading-tight">Projects Delivered</div>
                            </div>
                            <div className="text-center p-2 sm:p-2 border-2 border-black rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow">
                                <div className="text-lg sm:text-base md:text-lg lg:text-xl font-bold text-black">100%</div>
                                <div className="text-xs text-gray-600 break-words leading-tight">Client Satisfaction</div>
                            </div>
                        </div>
                    </motion.div>

                    {/* About Section */}
                    <motion.div className="mb-6 sm:mb-6 md:mb-8 max-w-full" variants={itemVariants}>
                        <p className="text-sm sm:text-sm md:text-base lg:text-lg text-gray-700 leading-relaxed break-words text-center sm:text-left">
                            I help startups and enterprises transform ideas into powerful, high-performing digital products. Specializing in scalable architecture, lightning-fast performance, and pixel-perfect design systems.{' '}
                            <span className="font-semibold text-black">My code doesn&apos;t just work — it converts, scales, and delights users.</span>
                        </p>
                    </motion.div>
                </div>

                {/* CTA Buttons - Bottom */}
                <motion.div
                    className="flex flex-col items-center sm:items-start sm:flex-row gap-4 sm:gap-3 justify-center sm:justify-start mt-6 sm:mt-auto relative z-10 max-w-full"
                    variants={itemVariants}
                >
                    {/* Primary CTA */}
                    <motion.a
                        href="#contact"
                        className="inline-flex items-center justify-center px-6 py-3 sm:px-4 sm:py-2.5 bg-black text-white font-semibold rounded-lg hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 hover:shadow-lg group w-full sm:w-auto sm:max-w-fit"
                        variants={socialIconVariants}
                        whileHover="hover"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                    >
                        <span className="text-sm sm:text-sm md:text-base whitespace-nowrap">Let&apos;s Work Together</span>
                        <Icon icon="material-symbols:arrow-forward-rounded" className="ml-2 sm:ml-2 text-base sm:text-base md:text-lg group-hover:translate-x-1 transition-transform" />
                    </motion.a>

                    {/* Social Icons */}
                    <div className="flex gap-3 sm:gap-2 items-center justify-center sm:justify-start">
                        {/* LinkedIn */}
                        <motion.a
                            href="https://www.linkedin.com/in/barath18"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-11 h-11 sm:w-10 sm:h-10 md:w-11 md:h-11 bg-white border-2 border-black rounded-lg flex items-center justify-center text-black hover:bg-black hover:text-white transition-all duration-300 hover:scale-110 hover:shadow-lg"
                            variants={socialIconVariants}
                            whileHover="hover"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.8 }}
                            title="Connect on LinkedIn"
                        >
                            <Icon icon="ri:linkedin-fill" className="text-lg sm:text-base md:text-lg" />
                        </motion.a>

                        {/* WhatsApp */}
                        <motion.a
                            href="https://wa.me/8072923619"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-11 h-11 sm:w-10 sm:h-10 md:w-11 md:h-11 bg-white border-2 border-black rounded-lg flex items-center justify-center text-black hover:bg-black hover:text-white transition-all duration-300 hover:scale-110 hover:shadow-lg"
                            variants={socialIconVariants}
                            whileHover="hover"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.9 }}
                            title="Chat on WhatsApp"
                        >
                            <Icon icon="ri:whatsapp-fill" className="text-lg sm:text-base md:text-lg" />
                        </motion.a>

                        {/* Mail */}
                        <motion.a
                            href="mailto:baratheabs4@gmail.com"
                            className="w-11 h-11 sm:w-10 sm:h-10 md:w-11 md:h-11 bg-white border-2 border-black rounded-lg flex items-center justify-center text-black hover:bg-black hover:text-white transition-all duration-300 hover:scale-110 hover:shadow-lg"
                            variants={socialIconVariants}
                            whileHover="hover"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1.0 }}
                            title="Send an Email"
                        >
                            <Icon icon="ic:round-email" className="text-lg sm:text-base md:text-lg" />
                        </motion.a>
                    </div>
                </motion.div>
            </motion.div>
        </motion.div>
    )
}

export default MainBanner
