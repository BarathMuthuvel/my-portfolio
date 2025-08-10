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
            className="bg-white flex items-center px-12 py-12 relative mx-auto container"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            {/* Left Section - Text and Social Media */}
            <motion.div
                className="flex-1 flex flex-col justify-between pr-12 h-full"
                variants={itemVariants}
            >
                {/* Text Content */}
                <div className="flex flex-col justify-center">
                    {/* Main Headline */}
                    <motion.div className="mb-8" variants={itemVariants}>
                        <h1 className="text-6xl font-bold text-black leading-tight mb-4">
                            Hello I&apos;am{' '}
                            <span className="text-black font-black">Evren Shah.</span>
                        </h1>
                        <h2 className="text-5xl font-bold mb-4">
                            <span className="text-black">Frontend</span>{' '}
                            <span className="text-black font-normal" style={{
                                WebkitTextStroke: '2px black',
                                color: 'transparent'
                            }}>Developer</span>
                        </h2>
                        <h3 className="text-4xl font-bold text-black">
                            Based In India.
                        </h3>
                    </motion.div>

                    {/* About Section */}
                    <motion.div className="mb-12" variants={itemVariants}>
                        <p className="text-lg text-black leading-relaxed max-w-lg">
                            I&apos;m Evren Shah Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown
                            printer took a galley of type and scrambled it to specimen book.
                        </p>
                    </motion.div>
                </div>

                {/* Social Media Icons - Bottom */}
                <motion.div
                    className="flex gap-4 mt-auto"
                    variants={itemVariants}
                >
                    {/* LinkedIn */}
                    <motion.a
                        href="#"
                        className="w-12 h-12 bg-white border-2 border-black rounded-lg flex items-center justify-center text-black hover:bg-black hover:text-white transition-all duration-300 hover:scale-110 hover:shadow-lg"
                        variants={socialIconVariants}
                        whileHover="hover"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8 }}
                    >
                        <Icon icon="ri:linkedin-fill" className="text-xl" />
                    </motion.a>

                    {/* WhatsApp */}
                    <motion.a
                        href="#"
                        className="w-12 h-12 bg-white border-2 border-black rounded-lg flex items-center justify-center text-black hover:bg-black hover:text-white transition-all duration-300 hover:scale-110 hover:shadow-lg"
                        variants={socialIconVariants}
                        whileHover="hover"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.9 }}
                    >
                        <Icon icon="ri:whatsapp-fill" className="text-xl" />
                    </motion.a>

                    {/* Mail */}
                    <motion.a
                        href="#"
                        className="w-12 h-12 bg-white border-2 border-black rounded-lg flex items-center justify-center text-black hover:bg-black hover:text-white transition-all duration-300 hover:scale-110 hover:shadow-lg"
                        variants={socialIconVariants}
                        whileHover="hover"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.0 }}
                    >
                        <Icon icon="ic:round-email" className="text-xl" />
                    </motion.a>
                </motion.div>
            </motion.div>

            {/* Right Section - Illustration */}
            <motion.div
                className="flex-1 flex items-center justify-center relative"
                variants={itemVariants}
            >
                <div className="relative w-full max-w-4xl">
                    <Image
                        src={BannerPerson}
                        alt="Evren Shah working on laptop"
                        width={1000}
                        height={1000}
                        className="w-full h-auto"
                        priority
                    />
                </div>
            </motion.div>
        </motion.div>
    )
}

export default MainBanner
