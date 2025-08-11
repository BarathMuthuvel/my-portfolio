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
            className="bg-white flex flex-col lg:flex-row items-center px-4 sm:px-8 md:px-12 lg:px-16 py-8 md:py-12 relative mx-auto container"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            {/* Image Section - First on Mobile/Tablet */}
            <motion.div
                className="w-full lg:flex-1 flex items-center justify-center relative mb-8 lg:mb-0 order-1 lg:order-2"
                variants={itemVariants}
            >
                <div className="relative w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-4xl">
                    <Image
                        src={BannerPerson}
                        alt="Barath Muthuvel working on laptop"
                        width={1000}
                        height={1000}
                        className="w-full h-auto"
                        priority
                    />
                </div>
            </motion.div>

            {/* Content Section - Second on Mobile/Tablet */}
            <motion.div
                className="w-full lg:flex-1 flex flex-col justify-between lg:pr-12 h-full order-2 lg:order-1"
                variants={itemVariants}
            >
                {/* Text Content */}
                <div className="flex flex-col justify-center text-left">
                    {/* Main Headline */}
                    <motion.div className="mb-6 md:mb-8" variants={itemVariants}>
                        <h1 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black leading-tight mb-3 md:mb-4">
                            Hi, I&apos;m{' '}
                            <span className="text-black font-extrabold" style={{
                                WebkitTextStroke: '2px black',
                                color: 'transparent'
                            }}>Barath Muthuvel</span>
                        </h1>
                        <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-3 md:mb-4">
                            <span className="text-black">Senior Software Engineer & Frontend Specialist</span>
                        </h2>
                    </motion.div>

                    {/* Subheading */}
                    <motion.div className="mb-4 md:mb-6" variants={itemVariants}>
                        <h4 className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-gray-700 leading-relaxed max-w-2xl">
                            Crafting Scalable, High-Performance Web Applications with React.js, Next.js & TypeScript
                        </h4>
                    </motion.div>

                    {/* About Section */}
                    <motion.div className="mb-8 md:mb-12" variants={itemVariants}>
                        <p className="text-xs sm:text-sm md:text-base lg:text-lg text-black leading-relaxed max-w-2xl">
                            I help startups and enterprises transform ideas into powerful, high-performing digital products. With 4+ years of experience building enterprise-grade solutions, I specialize in scalable architecture, lightning-fast performance, and pixel-perfect design systems. My code doesn&apos;t just work — it converts, scales, and delights users.
                        </p>
                    </motion.div>
                </div>

                {/* CTA Buttons - Bottom */}
                <motion.div
                    className="flex gap-3 md:gap-4 justify-start mt-auto"
                    variants={itemVariants}
                >
                    {/* LinkedIn */}
                    <motion.a
                        href="https://www.linkedin.com/in/barath18"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 md:w-12 md:h-12 bg-white border-2 border-black rounded-lg flex items-center justify-center text-black hover:bg-black hover:text-white transition-all duration-300 hover:scale-110 hover:shadow-lg"
                        variants={socialIconVariants}
                        whileHover="hover"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8 }}
                        title="LinkedIn"
                    >
                        <Icon icon="ri:linkedin-fill" className="text-lg md:text-xl" />
                    </motion.a>

                    {/* WhatsApp */}
                    <motion.a
                        href="https://wa.me/8072923619"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 md:w-12 md:h-12 bg-white border-2 border-black rounded-lg flex items-center justify-center text-black hover:bg-black hover:text-white transition-all duration-300 hover:scale-110 hover:shadow-lg"
                        variants={socialIconVariants}
                        whileHover="hover"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.9 }}
                        title="WhatsApp: 8072923619"
                    >
                        <Icon icon="ri:whatsapp-fill" className="text-lg md:text-xl" />
                    </motion.a>

                    {/* Mail */}
                    <motion.a
                        href="mailto:baratheabs4@gmail.com"
                        className="w-10 h-10 md:w-12 md:h-12 bg-white border-2 border-black rounded-lg flex items-center justify-center text-black hover:bg-black hover:text-white transition-all duration-300 hover:scale-110 hover:shadow-lg"
                        variants={socialIconVariants}
                        whileHover="hover"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.0 }}
                        title="Email: baratheabs4@gmail.com"
                    >
                        <Icon icon="ic:round-email" className="text-lg md:text-xl" />
                    </motion.a>
                </motion.div>
            </motion.div>
        </motion.div>
    )
}

export default MainBanner
