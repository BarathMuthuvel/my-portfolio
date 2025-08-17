import React from 'react'
import { Icon } from '@iconify/react'

const Skills = () => {
    const skills = [
        // Core Languages & Markup
        {
            name: 'HTML5',
            icon: 'flowbite:html-solid',
            color: 'hover:bg-black hover:text-white'
        },
        {
            name: 'CSS3',
            icon: 'flowbite:css-solid',
            color: 'hover:bg-black hover:text-white'
        },
        {
            name: 'JavaScript',
            icon: 'bi:javascript',
            color: 'hover:bg-black hover:text-white'
        },
        {
            name: 'TypeScript',
            icon: 'bi:typescript',
            color: 'hover:bg-black hover:text-white'
        },

        // Frontend Frameworks & Libraries
        {
            name: 'React.js',
            icon: 'teenyicons:react-solid',
            color: 'hover:bg-black hover:text-white'
        },
        {
            name: 'Next.js',
            icon: 'teenyicons:nextjs-outline',
            color: 'hover:bg-black hover:text-white'
        },
        {
            name: 'Redux',
            icon: 'tabler:brand-redux',
            color: 'hover:bg-black hover:text-white'
        },

        // Backend & Runtime
        {
            name: 'Node.js',
            icon: 'nonicons:node-16',
            color: 'hover:bg-black hover:text-white'
        },
        {
            name: 'Express.js',
            icon: 'skill-icons:expressjs-dark',
            color: 'hover:bg-black hover:text-white'
        },

        // Database
        {
            name: 'MongoDB',
            icon: 'bxl:mongodb',
            color: 'hover:bg-black hover:text-white'
        },

        // Styling & UI
        {
            name: 'Tailwind CSS',
            icon: 'file-icons:tailwind',
            color: 'hover:bg-black hover:text-white'
        },

        // APIs & Data
        {
            name: 'REST APIs',
            icon: 'dashicons:rest-api',
            color: 'hover:bg-black hover:text-white'
        },
        {
            name: 'GraphQL',
            icon: 'cib:graphql',
            color: 'hover:bg-black hover:text-white'
        },

        // Testing & Quality
        {
            name: 'Jest',
            icon: 'file-icons:jest',
            color: 'hover:bg-black hover:text-white'
        },

        // Development Tools
        {
            name: 'Git',
            icon: 'mdi:git',
            color: 'hover:bg-black hover:text-white'
        }
    ]

    return (
        <section id="skills" className="w-full py-8 sm:py-12 md:py-16 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal font-sans text-center text-black mb-8 sm:mb-10 md:mb-12">
                    My <span className='font-bold'>Skills</span>
                </h2>

                <div className="grid grid-cols-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4 md:gap-6 max-w-7xl mx-auto">
                    {skills.map((skill, index) => (
                        <div
                            key={index}
                            className={`
                flex flex-col items-center justify-center p-3 sm:p-4 md:p-6 
                border border-gray-300 lg:rounded-2xl rounded-lg  
                transition-all duration-300 ease-in-out 
                cursor-pointer group
                ${skill.color}
                hover:scale-105
                shadow-lg hover:shadow-2xl
                bg-white
                hover:border-gray-400
                backdrop-blur-sm
              `}
                        >
                            <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 flex items-center justify-center mb-2 sm:mb-3 md:mb-4 group-hover:text-white transition-colors duration-300">
                                <Icon
                                    icon={skill.icon}
                                    className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-black group-hover:text-white transition-colors duration-300"
                                />
                            </div>
                            <span className="text-xs sm:text-sm md:text-sm font-medium text-black group-hover:text-white transition-colors duration-300 text-center leading-tight">
                                {skill.name}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Skills
