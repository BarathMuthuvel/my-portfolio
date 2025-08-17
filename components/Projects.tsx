import React from 'react'
import Image from 'next/image'
import { Icon } from '@iconify/react'
import brma from '../public/images/brma.jpg'
import kenshilabs from '../public/images/kenshilabs.jpg'
import specialized from '../public/images/specialized.png'
import smejunction from '../public/images/smejunction.png'
import thinksremembered from '../public/images/thinksremembered.png'
import Link from 'next/link'

const Projects = () => {
    const projects = [
        {
            id: 1,
            title: "Kenshi Labs",
            description: "Developed a high-performance, fully responsive website for Kenshi Labs with dynamic service and product modules, smooth page transitions, and lightning-fast load speeds. Integrated SEO-friendly SSR, optimized images for all devices, and implemented reusable components for consistent design. Enhanced user experience with interactive menus, mobile-first layouts, and performance boosts through code-splitting, lazy loading, and caching strategies.",
            image: kenshilabs,
            link: "https://www.kenshilabs.com/"
        },
        {
            id: 2,
            title: " SME Junction",
            description: "Developed a B2B marketplace platform with supplier onboarding workflows, buyer–supplier messaging system, and quotation management tools. Implemented product catalogs with bulk upload support, industry-specific category segmentation, and live stock status indicators. Integrated role-based dashboards for buyers and suppliers, enabling smooth order tracking, document sharing, and transaction history management.",
            image: smejunction,
            link: "https://www.smejunction.com/"
        },
        {
            id: 3,
            title: "Specialized",
            description: "Engineered an immersive e-commerce experience for Specialized by implementing real-time inventory updates, location-based store availability, and multi-currency support for global customers. Integrated advanced product zoom and 360° image view for detailed inspections, along with wishlist and quick-add-to-cart functionality. Enhanced checkout flow with flexible payment gateways like Affirm and Klarna, ensuring a smooth and premium purchasing journey.",
            image: specialized,
            link: "https://www.specialized.com/us/en"
        },
        {
            id: 4,
            title: "Bengal Rice Millers Association",
            description: "Developed a clean and responsive corporate website for Bengal Rice Millers Association with an easy-to-manage content structure for news, events, and member updates. Implemented a membership directory with search and filter options, downloadable resources section, and a contact portal for inquiries. Integrated a CMS for effortless content updates and ensured accessibility compliance for all users, including those on low-bandwidth connections.",
            image: brma,
            link: "https://www.bengalricemillers.com/"
        },
        {
            id: 5,
            title: "Things Remembered",
            description: "Built a personalized gifting platform with interactive product customization tools, including real-time engraving and embroidery previews. Integrated occasion-based gift recommendations, advanced search with category and price filters, and a multi-step checkout optimized for conversions. Enabled order tracking, gift wrapping options, and saved personalization history for repeat customers, creating a seamless and memorable shopping experience.",
            image: thinksremembered,
            link: "https://www.thingsremembered.com/"
        }
    ]

    return (
        <div id="projects" className="bg-black min-h-screen py-8 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                {/* Section Title */}
                <h2 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-normal font-sans text-center text-white mb-6 sm:mb-8 md:mb-10 lg:mb-12">
                    My <span className='font-bold tracking-wide'>Projects</span>
                </h2>

                {/* Projects */}
                {projects.map((project) => (
                    <div key={project.id} className="mb-16 sm:mb-20 md:mb-24">
                        {/* Mobile/Tablet Layout: Image at top, content below */}
                        <div className="block lg:hidden">
                            {/* Project Image */}
                            <div className="relative w-full h-48 sm:h-64 md:h-80 mb-6 sm:mb-8">
                                <div className="absolute inset-0 shadow-2xl">
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        className="object-cover rounded-lg"
                                    />
                                </div>
                            </div>

                            {/* Project Content */}
                            <div className="space-y-4 sm:space-y-6">
                                <div className="text-4xl sm:text-5xl md:text-6xl font-bold font-sans text-white">0{project.id}</div>
                                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold font-sans text-white">{project.title}</h3>
                                <p className="text-[#71717A] text-sm sm:text-base font-sans leading-relaxed">{project.description}</p>
                                <div className="flex items-center gap-2 text-white transition-colors cursor-pointer">
                                    <Icon icon="mdi:external-link" className="w-4 h-4 sm:w-5 sm:h-5" />
                                    <Link href={project.link} target='_blank' className="text-sm font-medium">View Project</Link>
                                </div>
                            </div>
                        </div>

                        {/* Desktop Layout: Alternating left-right layout */}
                        <div className="hidden lg:flex flex-row items-start gap-12">
                            {/* Left Side */}
                            <div className="w-1/2 space-y-4">
                                {project.id % 2 === 1 ? (
                                    // Image on left for odd IDs
                                    <div className="relative w-full h-80">
                                        <div className="absolute inset-0 shadow-2xl">
                                            <Image
                                                src={project.image}
                                                alt={project.title}
                                                fill
                                                className="object-cover rounded-2xl"
                                            />
                                        </div>
                                    </div>
                                ) : (
                                    // Content on left for even IDs
                                    <>
                                        <div className="text-6xl font-bold font-sans text-white">0{project.id}</div>
                                        <h3 className="text-3xl font-bold font-sans text-white">{project.title}</h3>
                                        <p className="text-[#71717A] text-base font-sans leading-relaxed">{project.description}</p>
                                        <div className="flex items-center gap-2 text-white transition-colors cursor-pointer">
                                            <Icon icon="mdi:external-link" className="w-5 h-5" />
                                            <Link href={project.link} target='_blank' className="text-sm font-medium">View Project</Link>
                                        </div>
                                    </>
                                )}
                            </div>

                            {/* Right Side */}
                            <div className="w-1/2 space-y-4">
                                {project.id % 2 === 1 ? (
                                    // Content on right for odd IDs
                                    <>
                                        <div className="text-6xl font-bold text-white">0{project.id}</div>
                                        <h3 className="text-3xl font-bold text-white">{project.title}</h3>
                                        <p className="text-[#71717A] text-base leading-relaxed font-sans">{project.description}</p>
                                        <div className="flex items-center gap-2 text-white transition-colors cursor-pointer">
                                            <Icon icon="mdi:external-link" className="w-5 h-5" />
                                            <Link href={project.link} target='_blank' className="text-sm font-medium">View Project</Link>
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
                                                className="object-cover rounded-2xl"
                                            />
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Projects
