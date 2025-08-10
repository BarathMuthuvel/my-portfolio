"use client"
import React from 'react'
import { Icon } from '@iconify/react'

const Contact = () => {

    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4 flex justify-center">
                <div className="max-w-6xl w-full">
                    {/* Contact Me Heading */}
                    <div className="text-center mb-16">
                        <h1 className="text-5xl lg:text-6xl font-bold text-black">
                            Contact Me
                        </h1>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        {/* Left Column - Contact Form */}
                        <div className="space-y-6">
                            <form className="space-y-4">
                                <div>
                                    <input
                                        type="text"
                                        placeholder="Your name"
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent placeholder-gray-400"
                                    />
                                </div>
                                <div>
                                    <input
                                        type="email"
                                        placeholder="Email"
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent placeholder-gray-400"
                                    />
                                </div>
                                <div>
                                    <textarea
                                        placeholder="How can I help?*"
                                        rows={4}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent placeholder-gray-400 resize-none"
                                    />
                                </div>

                                {/* Buttons Row */}
                                <div className="flex items-center gap-4">
                                    <button
                                        type="submit"
                                        className="px-8 py-3 bg-black text-white font-semibold rounded-lg hover:bg-gray-800 transition-colors"
                                    >
                                        Get In Touch
                                    </button>

                                    {/* Contact Icons */}
                                    <div className="flex gap-2">
                                        <button className="w-12 h-12 bg-black text-white rounded-lg flex items-center justify-center hover:bg-gray-800 transition-colors">
                                            <Icon icon="mdi:linkedin" className="w-5 h-5" />
                                        </button>
                                        <button className="w-12 h-12 bg-black text-white rounded-lg flex items-center justify-center hover:bg-gray-800 transition-colors">
                                            <Icon icon="mdi:whatsapp" className="w-5 h-5" />
                                        </button>
                                        <button className="w-12 h-12 bg-black text-white rounded-lg flex items-center justify-center hover:bg-gray-800 transition-colors">
                                            <Icon icon="mdi:email" className="w-5 h-5" />
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>

                        {/* Right Column - Contact Information */}
                        <div className="space-y-6">
                            <div>
                                <h2 className="text-4xl lg:text-5xl font-bold text-black mb-2">
                                    Let&apos;s{' '}
                                    <span className="text-black font-normal" style={{
                                        WebkitTextStroke: '2px black',
                                        color: 'transparent'
                                    }}>talk</span>
                                    {' '}for
                                </h2>
                                <h3 className="text-4xl lg:text-5xl font-bold text-black">
                                    Something special
                                </h3>
                            </div>

                            <p className="text-lg text-gray-600 leading-relaxed max-w-md">
                                I seek to push the limits of creativity to create high-engaging, user-friendly, and memorable interactive experiences.
                            </p>

                            <div className="space-y-2">
                                <p className="text-lg font-bold text-black">
                                    Youremail@gmail.com
                                </p>
                                <p className="text-lg font-bold text-black">
                                    1234567890
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact
