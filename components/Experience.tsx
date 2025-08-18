import React from 'react'

const Experience = () => {
    const experiences = [
        {
            title: "Senior Software Engineer – Kenshi Labs Consultancy Pvt Ltd",
            dates: "Jul 2024 – Present",
            description: "At Kenshi Labs, I lead the architecture, development, and optimization of enterprise-grade web applications using React.js, Next.js, and TypeScript. Designed and implemented a reusable component library with Tailwind CSS, cutting UI build time by 30% across projects. Improved Core Web Vitals and Time to Interactive through advanced performance strategies like memoization, code-splitting, and selective re-rendering. Standardized state management with Redux Toolkit, enabling predictable and scalable applications. Actively mentor developers, lead code reviews, and align technical execution with business objectives to ensure on-time, high-quality delivery."
        },
        {
            title: "Senior Frontend Developer – Independent Software Consultant",
            dates: "Oct 2023 – Jun 2024",
            description: "Delivered scalable, high-performance, SEO-optimized applications using React.js, Next.js, and Tailwind CSS. Conducted in-depth frontend architecture audits, reducing bundle sizes and improving maintainability. Implemented Server-Side Rendering (SSR) to boost search rankings and organic traffic. Developed modular, reusable UI components and hooks to accelerate feature delivery across multiple projects. Collaborated directly with stakeholders to translate business requirements into seamless, engaging user experiences."
        },
        {
            title: "Software Engineer UI – Mastek",
            dates: "Jun 2021 – Oct 2023",
            description: "Migrated legacy systems to React.js and integrated with Oracle Commerce Cloud for large-scale e-commerce platforms. Enhanced application responsiveness through caching strategies and optimized API calls, significantly improving user satisfaction. Established unit testing standards with Jest and React Testing Library, cutting production issues by 25%. Led UI refactoring initiatives, applying code-splitting and modern design patterns for faster load speeds and better scalability. Partnered with product managers, designers, and backend teams to deliver features on schedule while maintaining exceptional code quality and performance benchmarks."
        }
    ]

    return (
        <section id="experience" className="py-8 sm:py-12 md:py-16 lg:py-20 bg-black">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-normal font-sans text-center text-white mb-6 sm:mb-8 md:mb-10 lg:mb-12">
                    My <span className='font-bold tracking-wide'>Experience</span>
                </h2>
                <div className="space-y-4 sm:space-y-6 lg:space-y-8 max-w-7xl mx-auto">
                    {experiences.map((experience, index) => (
                        <div
                            key={index}
                            className="border border-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 hover:border-gray-400 transition-all duration-700 ease-out shadow-lg group relative overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-transparent group-hover:bg-[var(--Zinc-800,#27272A)] transition-all duration-700 ease-out"></div>
                            <div className="relative z-10">
                                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-3 sm:gap-0 mb-3 sm:mb-4 lg:mb-6">
                                    <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold font-sans text-white group-hover:text-white transition-colors duration-700 leading-tight">
                                        {experience.title}
                                    </h3>
                                    <span className="text-gray-400 text-xs sm:text-sm lg:text-base font-medium group-hover:text-gray-300 transition-colors duration-700 whitespace-nowrap">
                                        {experience.dates}
                                    </span>
                                </div>
                                <p className="text-gray-300 text-sm sm:text-base lg:text-lg leading-relaxed group-hover:text-white transition-colors duration-700">
                                    {experience.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Experience
