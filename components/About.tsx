import React from 'react'
import AboutMePerson from '../public/images/aboutmeperson.png'
import Image from 'next/image'

const About = () => {
    return (
        <section id="about" className="min-h-screen bg-gradient-to-br from-gray-50 to-white relative overflow-hidden py-8 sm:py-12 lg:py-16">
            {/* Background decorative elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-black/5 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-black/5 rounded-full blur-3xl"></div>
                {/* Mobile specific decorative elements */}
                <div className="absolute top-20 left-4 w-32 h-32 bg-black/3 rounded-full blur-2xl sm:hidden"></div>
                <div className="absolute bottom-20 right-4 w-32 h-32 bg-black/3 rounded-full blur-2xl sm:hidden"></div>
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-4 relative z-10 w-full flex items-center justify-center min-h-[calc(100vh-4rem)] sm:min-h-[calc(100vh-6rem)] lg:min-h-[calc(100vh-8rem)]">
                <div className="max-w-7xl mx-auto w-full">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-stretch">
                        {/* Left side - Illustration */}
                        <div className="flex justify-center order-2 lg:order-1">
                            <div className="relative group w-full max-w-sm sm:max-w-md lg:max-w-none lg:h-full flex items-center">
                                {/* Decorative border */}
                                <div className="absolute -inset-2 sm:-inset-4 bg-gradient-to-r from-black/10 to-black/5 rounded-2xl sm:rounded-3xl blur-lg sm:blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
                                <div className="relative bg-white rounded-xl sm:rounded-2xl p-3 sm:p-4 lg:p-6 shadow-xl sm:shadow-2xl border border-gray-100 group-hover:shadow-2xl sm:group-hover:shadow-3xl transition-all duration-300 w-full lg:h-full flex items-center justify-center">
                                    <Image
                                        src={AboutMePerson}
                                        alt="About Me Person"
                                        width={600}
                                        height={800}
                                        className="w-full h-auto max-h-[300px] sm:max-h-[400px] lg:h-full lg:max-h-full object-contain rounded-lg sm:rounded-xl"
                                        style={{ aspectRatio: 'auto' }}
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Right side - Text content */}
                        <div className="order-1 lg:order-2 flex flex-col justify-center px-2 sm:px-0">
                            {/* Header section */}
                            <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8 text-left">
                                <div className="flex items-center space-x-3 sm:space-x-4">
                                    <div className="w-8 sm:w-12 h-1 bg-black rounded-full"></div>
                                    <span className="text-xs sm:text-sm font-semibold text-gray-600 tracking-wider uppercase">Get to know me</span>
                                </div>
                                <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-normal  font-sans text-black leading-tight">

                                    About{' '}
                                    <span className="font-bold relative">
                                        Me
                                        <div className="absolute -bottom-1 left-0 w-full h-1 bg-black/20 rounded-full"></div>
                                    </span>
                                </h2>
                            </div>

                            {/* Content with enhanced styling */}
                            <div className="flex-1 flex flex-col justify-center space-y-4 sm:space-y-6">
                                <div className="bg-white/90 sm:bg-white/80 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-5 lg:p-6 border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 group">
                                    <div className="space-y-4 sm:space-y-5 text-gray-700 leading-relaxed">
                                        <p className="text-sm sm:text-base lg:text-lg font-medium text-gray-800 group-hover:text-black transition-colors duration-200 text-left">
                                            I&apos;m a results-oriented Senior Software Engineer driven by the challenge of turning complex problems into elegant, high-performance web solutions. With over 4 years of experience delivering enterprise-grade applications, I&apos;ve built my career on a foundation of scalable architecture, performance optimization, and seamless user experiences.
                                        </p>

                                        <div className="w-12 sm:w-16 h-px bg-gradient-to-r from-black to-transparent"></div>

                                        <p className="text-xs sm:text-sm lg:text-base leading-relaxed text-left">
                                            From modernizing large-scale e-commerce platforms to architecting reusable component libraries that cut development time by 30%, I&apos;ve consistently delivered solutions that boost efficiency, enhance user engagement, and align perfectly with business goals.
                                        </p>

                                        <div className="w-12 sm:w-16 h-px bg-gradient-to-r from-black to-transparent"></div>

                                        <p className="text-xs sm:text-sm lg:text-base leading-relaxed text-left">
                                            I believe great engineering is as much about collaboration and communication as it is about code. Whether mentoring junior developers or leading cross-functional initiatives, I focus on building systems — and teams — that scale.
                                        </p>
                                    </div>
                                </div>

                                {/* Stats or highlights section */}
                                <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:gap-6">
                                    <div className="text-center p-3 sm:p-4 lg:p-5 bg-black text-white rounded-lg sm:rounded-xl hover:bg-gray-800 transition-all duration-200 transform hover:scale-105 active:scale-95">
                                        <div className="text-lg sm:text-xl lg:text-2xl font-bold">4+</div>
                                        <div className="text-xs sm:text-sm text-gray-300 mt-1">Years Experience</div>
                                    </div>
                                    <div className="text-center p-3 sm:p-4 lg:p-5 bg-white border-2 border-black rounded-lg sm:rounded-xl hover:bg-gray-50 transition-all duration-200 transform hover:scale-105 active:scale-95">
                                        <div className="text-lg sm:text-xl lg:text-2xl font-bold text-black">30%</div>
                                        <div className="text-xs sm:text-sm text-gray-600 mt-1">Dev Time Reduction</div>
                                    </div>
                                </div>

                                {/* Mobile-specific call-to-action hint */}
                                <div className="sm:hidden text-center mt-6">
                                    <div className="inline-flex items-center space-x-2 text-xs text-gray-500">
                                        <span>Scroll down to see my work</span>
                                        <svg className="w-4 h-4 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                                        </svg>
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

export default About
