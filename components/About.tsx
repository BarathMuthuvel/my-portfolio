import React from 'react'
import AboutMePerson from '../public/images/aboutmeperson.png'
import Image from 'next/image'

const About = () => {
    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        {/* Left side - Illustration */}
                        <div className="flex justify-center lg:justify-start">
                            <Image
                                src={AboutMePerson}
                                alt="About Me Person"
                                width={600}
                                height={800}
                                className="w-full h-full max-h-[600px] object-contain"
                            />
                        </div>

                        {/* Right side - Text content */}
                        <div className="space-y-6">
                            <h2 className="text-4xl sm:text-3xl md:text-4xl lg:text-5xl font-normal text-left text-black">
                                About <span className='font-bold'>Me</span>
                            </h2>

                            <div className="space-y-4 lg:text-lg xl:text-xl text-md text-gray-700 leading-relaxed">
                                <p>
                                    I&apos;m a results-oriented Senior Software Engineer driven by the challenge of turning complex problems into elegant, high-performance web solutions. With over 4 years of experience delivering enterprise-grade applications, I&apos;ve built my career on a foundation of scalable architecture, performance optimization, and seamless user experiences.
                                </p>

                                <p>
                                    From modernizing large-scale e-commerce platforms to architecting reusable component libraries that cut development time by 30%, I&apos;ve consistently delivered solutions that boost efficiency, enhance user engagement, and align perfectly with business goals. My approach blends technical excellence with strategic thinking, ensuring every project not only works flawlessly but also drives measurable impact.
                                </p>

                                <p>
                                    I believe great engineering is as much about collaboration and communication as it is about code. Whether mentoring junior developers, leading cross-functional initiatives, or streamlining workflows, I focus on building systems — and teams — that scale.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
