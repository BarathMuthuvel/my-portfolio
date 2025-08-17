"use client"
import React, { useState, useRef } from 'react'
import { Icon } from '@iconify/react'
import Link from 'next/link'
import emailjs from '@emailjs/browser'

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    })
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
    const formRef = useRef<HTMLFormElement>(null)

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        if (!formData.name || !formData.email || !formData.message) {
            setSubmitStatus('error')
            return
        }

        setIsSubmitting(true)
        setSubmitStatus('idle')

        try {
            const result = await emailjs.sendForm(
                process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
                process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
                formRef.current!,
                process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
            )

            if (result.status === 200) {
                setSubmitStatus('success')
                setFormData({ name: '', email: '', message: '' })
            } else {
                setSubmitStatus('error')
            }
        } catch (error) {
            console.error('EmailJS error:', error)
            setSubmitStatus('error')
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <section id="contact" className="py-8 bg-white relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-7xl mx-auto">

                    {/* Catchy Header Section */}
                    <div className="text-center mb-8 animate-fade-in-up">
                        <h2 className="text-4xl lg:text-5xl font-normal font-sans text-black leading-tight">
                            Your <span className='font-bold'>Idea</span>, My <span className='font-bold'>Code</span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
                        {/* Left Column - Contact Form */}
                        <div className="bg-white rounded-2xl p-5 lg:p-6 shadow-2xl border border-gray-200 animate-fade-in-up">
                            <div className="mb-4">
                                <h3 className="text-2xl font-bold font-sans text-black mb-2">Get In Touch</h3>
                                <p className="text-gray-600">Tell me about your project and let&apos;s make magic happen!</p>
                            </div>

                            <form ref={formRef} onSubmit={handleSubmit} className="space-y-3">
                                <div className="group">
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        placeholder="Enter your full name"
                                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-black/10 focus:border-black transition-all duration-500 placeholder-gray-400 bg-white shadow-sm hover:shadow-lg hover:border-gray-300 transform hover:-translate-y-1"
                                        required
                                    />
                                </div>

                                <div className="group">
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">Email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        placeholder="Enter your email address"
                                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-black/10 focus:border-black transition-all duration-500 placeholder-gray-400 bg-white shadow-sm hover:shadow-lg hover:border-gray-300 transform hover:-translate-y-1"
                                        required
                                    />
                                </div>

                                <div className="group">
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">Message</label>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleInputChange}
                                        placeholder="Describe your project or idea..."
                                        rows={3}
                                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-black/10 focus:border-black transition-all duration-500 placeholder-gray-400 bg-white shadow-sm hover:shadow-lg hover:border-gray-300 transform hover:-translate-y-1 resize-none"
                                        required
                                    />
                                </div>

                                {/* Status Messages */}
                                {submitStatus === 'success' && (
                                    <div className="p-3 bg-green-50 border-2 border-green-200 text-green-800 rounded-xl shadow-lg animate-bounce-in">
                                        <div className="flex items-center gap-2">
                                            <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                                                <Icon icon="mdi:check" className="w-4 h-4 text-green-600" />
                                            </div>
                                            <span className="font-medium text-sm">Message sent successfully! I&apos;ll get back to you soon.</span>
                                        </div>
                                    </div>
                                )}
                                {submitStatus === 'error' && (
                                    <div className="p-3 bg-red-50 border-2 border-red-200 text-red-800 rounded-xl shadow-lg animate-bounce-in">
                                        <div className="flex items-center gap-2">
                                            <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center">
                                                <Icon icon="mdi:alert" className="w-4 h-4 text-red-600" />
                                            </div>
                                            <span className="font-medium text-sm">
                                                {isSubmitting ? 'Sending message...' : 'Failed to send message. Please try again.'}
                                            </span>
                                        </div>
                                    </div>
                                )}

                                {/* Submit Button */}
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full px-6 py-3 bg-black text-white font-bold rounded-xl hover:bg-gray-800 transition-all duration-500 disabled:opacity-50 disabled:cursor-not-allowed shadow-xl hover:shadow-2xl hover:shadow-black/30 transform hover:-translate-y-1 active:translate-y-0 flex items-center justify-center gap-2 group"
                                >
                                    {isSubmitting ? (
                                        <>
                                            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                            <span>Sending Message...</span>
                                        </>
                                    ) : (
                                        <>
                                            <span>Send Message</span>
                                            <Icon icon="mdi:paper-plane" className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                                        </>
                                    )}
                                </button>
                            </form>

                            {/* Social Icons - Moved from right column */}
                            <div className="mt-6 pt-3 border-t border-gray-200">
                                <h4 className="font-bold text-black mb-3">Connect With Me</h4>
                                <div className="flex gap-3">
                                    <Link
                                        href="https://www.linkedin.com/in/barath18/"
                                        target="_blank"
                                        className="w-12 h-12 bg-black text-white rounded-xl flex items-center justify-center hover:bg-gray-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 hover:scale-105 group"
                                    >
                                        <Icon icon="mdi:linkedin" className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                                    </Link>
                                    <Link
                                        href="https://wa.me/8072923619"
                                        target="_blank"
                                        className="w-12 h-12 bg-black text-white rounded-xl flex items-center justify-center hover:bg-gray-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 hover:scale-105 group"
                                    >
                                        <Icon icon="mdi:whatsapp" className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                                    </Link>
                                    <Link
                                        href="mailto:baratheabs4@gmail.com"
                                        target="_blank"
                                        className="w-12 h-12 bg-black text-white rounded-xl flex items-center justify-center hover:bg-gray-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 hover:scale-105 group"
                                    >
                                        <Icon icon="mdi:email" className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                                    </Link>
                                </div>
                            </div>
                        </div>

                        {/* Right Column - Portfolio & Achievements */}
                        <div className="animate-fade-in-up animation-delay-200">
                            <div className="bg-white rounded-2xl p-5 lg:p-6 shadow-2xl border border-gray-200 h-full">
                                <div className="mb-4">
                                    <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center mb-4">
                                        <Icon icon="mdi:trophy" className="w-6 h-6 text-white" />
                                    </div>
                                    <h3 className="text-2xl font-bold font-sans text-black mb-3">
                                        Why <span className="text-transparent bg-clip-text bg-gradient-to-r from-black to-gray-700">Choose Me</span>
                                    </h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        Proven track record of delivering exceptional results with cutting-edge technologies and innovative solutions.
                                    </p>
                                </div>

                                <div className="space-y-4">
                                    <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl hover:bg-white hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 group">
                                        <div className="w-10 h-10 bg-black rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                                            <Icon icon="mdi:code-braces" className="w-5 h-5 text-white" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-black font-sans mb-1">Full-Stack Expertise</h4>
                                            <p className="text-sm text-gray-600">React, Next.js, Node.js, TypeScript & modern web technologies</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl hover:bg-white hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 group">
                                        <div className="w-10 h-10 bg-black rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                                            <Icon icon="mdi:rocket" className="w-5 h-5 text-white" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-black font-sans mb-1">Portfolio Success</h4>
                                            <p className="text-sm text-gray-600">Multiple successful projects including specialized platforms & e-commerce solutions</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl hover:bg-white hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 group">
                                        <div className="w-10 h-10 bg-black rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                                            <Icon icon="mdi:clock-fast" className="w-5 h-5 text-white" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-black font-sans mb-1">Fast Delivery</h4>
                                            <p className="text-sm text-gray-600">Quick turnaround times without compromising on quality & performance</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl hover:bg-white hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 group">
                                        <div className="w-10 h-10 bg-black rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                                            <Icon icon="mdi:headphones" className="w-5 h-5 text-white" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-black font-sans mb-1">24/7 Support</h4>
                                            <p className="text-sm text-gray-600">Ongoing maintenance & support for all your development needs</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact
