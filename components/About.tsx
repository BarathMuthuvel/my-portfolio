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
                            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
                                About Me
                            </h2>

                            <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                                <p>
                                    I&apos;m a passionate, self-proclaimed designer who specializes in full stack development
                                    (React.js & Node.js). I am very enthusiastic about bringing the technical and visual
                                    aspects of digital products to life. User experience, pixel perfect design, and writing
                                    clear, readable, highly performant code matters to me a lot.
                                </p>

                                <p>
                                    I started my journey as a web developer in 2015, and I am currently in my early thirties,
                                    7 years after starting my web development journey. I am currently building cutting-edge
                                    web applications using modern technologies such as Next.js, TypeScript, Nestjs, Tailwindcss,
                                    Supabase and much more.
                                </p>

                                <p>
                                    I am always interested in hearing about new projects and opportunities. When I&apos;m not in
                                    full-on developer mode, you can find me hovering around on twitter or on indie hacker,
                                    witnessing the journey of early startups or enjoying some free time. You can follow me
                                    on Twitter where I share tech-related bites and build in public, or you can follow me on GitHub.
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
