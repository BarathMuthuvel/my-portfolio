import React from 'react'
import Image from 'next/image'
import { FiExternalLink } from 'react-icons/fi'
import brma from '../public/images/brma.png'
import kenshilabs from '../public/images/kenshilabs.png'
import specialized from '../public/images/specialized.png'
import smejunction from '../public/images/smejunction.png'
import thinksremembered from '../public/images/thinksremembered.png'

const Projects = () => {
    const projects = [
        {
            id: 1,
            title: "Crypto Screener Application",
            description: "A comprehensive cryptocurrency screening platform built with React and Node.js. Features real-time price tracking, portfolio management, and advanced filtering options. Integrated with multiple crypto APIs for accurate market data and historical analysis.",
            image: kenshilabs,
            link: "#"
        },
        {
            id: 2,
            title: "Euphoria - Ecommerce Website Template",
            description: "A modern, responsive e-commerce website template designed for fashion and apparel businesses. Built with Next.js and Tailwind CSS, featuring product catalogs, shopping cart functionality, user authentication, and payment integration.",
            image: smejunction,
            link: "#"
        },
        {
            id: 3,
            title: "Blog Website Template",
            description: "A feature-rich blog platform template with modern design aesthetics. Includes content management system, SEO optimization, responsive design, and social media integration. Built for content creators and bloggers.",
            image: specialized,
            link: "#"
        },
        {
            id: 4,
            title: "Portfolio Management System",
            description: "A comprehensive portfolio management application for creative professionals. Features project showcase, client management, time tracking, and invoicing capabilities. Designed with modern UI/UX principles.",
            image: brma,
            link: "#"
        },
        {
            id: 5,
            title: "Task Management Dashboard",
            description: "An intuitive task management dashboard with team collaboration features. Includes project tracking, deadline management, progress visualization, and real-time notifications. Perfect for remote teams.",
            image: thinksremembered,
            link: "#"
        }
    ]

    return (
        <div className="bg-black min-h-screen py-16 px-4">
            <div className="max-w-7xl mx-auto">
                {/* Section Title */}
                <h2 className="text-white text-4xl md:text-5xl font-bold text-center mb-16">
                    My Projects
                </h2>

                {/* Projects */}
                {projects.map((project) => (
                    <div key={project.id} className="mb-24 flex flex-col lg:flex-row items-start gap-12">
                        {/* Left Side */}
                        <div className="lg:w-1/2 space-y-6">
                            {project.id % 2 === 1 ? (
                                // Image on left for odd IDs
                                <div className="relative w-full h-80">
                                    <div className="absolute inset-0  shadow-2xl">
                                        <Image
                                            src={project.image}
                                            alt={project.title}
                                            fill
                                            className="object-fill rounded-2xl"
                                        />
                                    </div>
                                </div>
                            ) : (
                                // Content on left for even IDs
                                <>
                                    <div className="text-6xl md:text-7xl font-bold text-white">0{project.id}</div>
                                    <h3 className="text-2xl md:text-3xl font-bold text-white">{project.title}</h3>
                                    <p className="text-gray-300 text-lg leading-relaxed">{project.description}</p>
                                    <div className="flex items-center gap-2 text-white transition-colors cursor-pointer">
                                        <FiExternalLink className="w-5 h-5" />
                                        <span className="text-sm font-medium">View Project</span>
                                    </div>
                                </>
                            )}
                        </div>

                        {/* Right Side */}
                        <div className="lg:w-1/2 space-y-6">
                            {project.id % 2 === 1 ? (
                                // Content on right for odd IDs
                                <>
                                    <div className="text-6xl md:text-7xl font-bold text-white">0{project.id}</div>
                                    <h3 className="text-2xl md:text-3xl font-bold text-white">{project.title}</h3>
                                    <p className="text-gray-300 text-lg leading-relaxed">{project.description}</p>
                                    <div className="flex items-center gap-2 text-white transition-colors cursor-pointer">
                                        <FiExternalLink className="w-5 h-5" />
                                        <span className="text-sm font-medium">View Project</span>
                                    </div>
                                </>
                            ) : (
                                // Image on right for even IDs
                                <div className="relative w-full h-80">
                                    <div className="absolute inset-0 shadow-2xl">
                                        <Image
                                            src={project.image}
                                            alt={project.title}
                                            fill
                                            className="object-fill rounded-2xl"
                                        />
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Projects
