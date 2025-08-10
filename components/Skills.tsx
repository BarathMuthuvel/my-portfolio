import React from 'react'
import { Icon } from '@iconify/react'

const Skills = () => {
    const skills = [
        // Core Languages & Markup
        {
            name: 'HTML5',
            icon: 'vscode-icons:file-type-html',
            color: 'hover:bg-black hover:text-white'
        },
        {
            name: 'CSS3',
            icon: 'material-icon-theme:css',
            color: 'hover:bg-black hover:text-white'
        },
        {
            name: 'JavaScript',
            icon: 'logos:javascript',
            color: 'hover:bg-black hover:text-white'
        },
        {
            name: 'TypeScript',
            icon: 'logos:typescript-icon',
            color: 'hover:bg-black hover:text-white'
        },

        // Frontend Frameworks & Libraries
        {
            name: 'React.js',
            icon: 'logos:react',
            color: 'hover:bg-black hover:text-white'
        },
        {
            name: 'Next.js',
            icon: 'teenyicons:nextjs-outline',
            color: 'hover:bg-black hover:text-white'
        },
        {
            name: 'Redux',
            icon: 'logos:redux',
            color: 'hover:bg-black hover:text-white'
        },

        // Backend & Runtime
        {
            name: 'Node.js',
            icon: 'logos:nodejs-icon',
            color: 'hover:bg-black hover:text-white'
        },
        {
            name: 'Express.js',
            icon: 'skill-icons:expressjs-light',
            color: 'hover:bg-black hover:text-white'
        },

        // Database
        {
            name: 'MongoDB',
            icon: 'skill-icons:mongodb',
            color: 'hover:bg-black hover:text-white'
        },

        // Styling & UI
        {
            name: 'Tailwind CSS',
            icon: 'logos:tailwindcss-icon',
            color: 'hover:bg-black hover:text-white'
        },
        {
            name: 'Responsive UI',
            icon: 'mdi:responsive',
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
            icon: 'logos:graphql',
            color: 'hover:bg-black hover:text-white'
        },

        // Testing & Quality
        {
            name: 'Jest',
            icon: 'logos:jest',
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
        <section className="w-full py-16 bg-white"
        >
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center text-black mb-12">
                    My Skills
                </h2>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-7xl mx-auto">
                    {skills.map((skill, index) => (
                        <div
                            key={index}
                            className={`
                flex flex-col items-center justify-center p-6 
                border border-gray-300 rounded-lg 
                transition-all duration-300 ease-in-out 
                cursor-pointer group
                ${skill.color}
                hover:scale-105
              `}
                        >
                            <div className="w-16 h-16 flex items-center justify-center mb-4 group-hover:text-white transition-colors duration-300">
                                <Icon
                                    icon={skill.icon}
                                    className="w-12 h-12 text-black group-hover:text-white transition-colors duration-300"
                                />
                            </div>
                            <span className="text-sm font-medium text-black group-hover:text-white transition-colors duration-300 text-center">
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
