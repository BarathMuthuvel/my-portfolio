"use client"
import React from 'react'
import { Icon } from '@iconify/react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import Image from 'next/image'

const Footer = () => {
    const currentYear = new Date().getFullYear()

    const quickLinks = [
        { href: "#home", text: "Home" },
        { href: "#about", text: "About Me" },
        { href: "#skills", text: "Skills" },
        { href: "#projects", text: "Projects" },
        { href: "#contact", text: "Contact" }
    ]

    const socialLinks = [
        {
            href: "https://www.linkedin.com/in/barath18/",
            icon: "mdi:linkedin",
            label: "LinkedIn",
            color: "hover:bg-blue-600"
        },
        {
            href: "https://wa.me/8072923619",
            icon: "mdi:whatsapp",
            label: "WhatsApp",
            color: "hover:bg-green-600"
        },
        {
            href: "mailto:baratheabs4@gmail.com",
            icon: "mdi:email",
            label: "Email",
            color: "hover:bg-red-600"
        }
    ]

    const handleSmoothScroll = (href: string) => {
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
        }
    };

    const linkVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.3,
                ease: "easeOut"
            }
        },
        hover: {
            x: 5,
            transition: {
                duration: 0.2,
                ease: "easeOut"
            }
        }
    };

    const socialVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.3,
                ease: "easeOut"
            }
        },
        hover: {
            scale: 1.1,
            y: -5,
            transition: {
                duration: 0.2,
                ease: "easeOut"
            }
        }
    };

    return (
        <footer className="bg-black text-white relative overflow-hidden">

            <div className="container mx-auto max-w-7xl px-8 relative z-10">
                {/* Main Footer Content */}
                <div className="py-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {/* Brand Section */}
                        <motion.div
                            className="lg:col-span-2"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            <div className="flex items-center gap-3 mb-6">
                                <Image
                                    src="/images/blogo.png"
                                    alt="logo"
                                    width={60}
                                    height={60}
                                    className="rounded-full hover:scale-110 transition-transform duration-300"
                                    unoptimized={true}
                                />
                                <div>
                                    <h3 className="text-2xl font-bold font-work-sans-bold">Barath</h3>
                                    <p className="text-sm">Senior Software Engineer</p>
                                </div>
                            </div>
                            <p className="text-gray-300 leading-relaxed mb-6 max-w-md">
                                Turning ideas into reality with clean code and beautiful designs.
                                Let&apos;s build something amazing together! 🚀
                            </p>
                            <div className="flex gap-4">
                                {socialLinks.map((social, index) => (
                                    <motion.div
                                        key={social.href}
                                        variants={socialVariants}
                                        initial="hidden"
                                        whileInView="visible"
                                        whileHover="hover"
                                        transition={{ delay: index * 0.1 }}
                                        viewport={{ once: true }}
                                    >
                                        <Link
                                            href={social.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={`w-12 h-12 bg-gray-800 text-white rounded-xl flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 hover:scale-105 ${social.color}`}
                                            aria-label={social.label}
                                        >
                                            <Icon icon={social.icon} className="w-5 h-5" />
                                        </Link>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Quick Links */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            viewport={{ once: true }}
                        >
                            <h4 className="text-lg font-bold mb-6 text-white">Quick Links</h4>
                            <ul className="space-y-3">
                                {quickLinks.map((link, index) => (
                                    <motion.li
                                        key={link.href}
                                        variants={linkVariants}
                                        initial="hidden"
                                        whileInView="visible"
                                        whileHover="hover"
                                        transition={{ delay: index * 0.1 }}
                                        viewport={{ once: true }}
                                    >
                                        <button
                                            onClick={() => handleSmoothScroll(link.href)}
                                            className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center gap-2 group text-left w-full"
                                        >
                                            <Icon
                                                icon="mdi:chevron-right"
                                                className="w-4 h-4 text-gray-500 group-hover:text-white transition-colors duration-300"
                                            />
                                            {link.text}
                                        </button>
                                    </motion.li>
                                ))}
                            </ul>
                        </motion.div>

                        {/* Contact Info */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            viewport={{ once: true }}
                        >
                            <h4 className="text-lg font-bold mb-6 text-white">Get In Touch</h4>
                            <div className="space-y-4">
                                <div className="flex items-center gap-3 text-gray-300">
                                    <Icon icon="mdi:email-outline" className="w-5 h-5 text-gray-400" />
                                    <span className="text-sm">baratheabs4@gmail.com</span>
                                </div>
                                <div className="flex items-center gap-3 text-gray-300">
                                    <Icon icon="mdi:map-marker-outline" className="w-5 h-5 text-gray-400" />
                                    <span className="text-sm">Bangalore, India</span>
                                </div>
                                <div className="flex items-center gap-3 text-gray-300">
                                    <Icon icon="mdi:clock-outline" className="w-5 h-5 text-gray-400" />
                                    <span className="text-sm">Available for projects</span>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <motion.div
                    className="border-t border-gray-800 py-6"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    viewport={{ once: true }}
                >
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                        <div className="flex items-center gap-2 text-gray-400">
                            <span className="text-sm">Made with</span>
                            <span className="text-red-400 animate-pulse">
                                <Icon icon="noto:red-heart" className='w-5 h-5' />
                            </span>
                            <span className="text-sm">by Barath</span>
                        </div>

                        <div className="flex items-center gap-6 text-sm text-gray-400">
                            <span>© {currentYear} All rights reserved.</span>
                        </div>
                    </div>
                </motion.div>
            </div>


        </footer>
    )
}

export default Footer
