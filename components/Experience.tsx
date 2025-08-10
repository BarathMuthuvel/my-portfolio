import React from 'react'

const Experience = () => {
    const experiences = [
        {
            title: "Lead Software Engineer at Google",
            dates: "Nov 2019 - Present",
            description: "As a Senior Software Engineer at Google, I played a pivotal role in developing innovative solutions for Google's core search algorithms. Collaborating with a dynamic team of engineers, I contributed to the enhancement of search accuracy and efficiency, optimizing user experiences for millions of users worldwide."
        },
        {
            title: "Software Engineer at Youtube",
            dates: "Jan 2017 - Oct 2019",
            description: "At Youtube, I served as a Software Engineer, focusing on the design and implementation of backend systems for the social media giant's dynamic platform. Working on projects that involved large-scale data processing and user engagement features, I leveraged my expertise to ensure seamless functionality and scalability."
        },
        {
            title: "Junior Software Engineer at Apple",
            dates: "Jan 2016 - Dec 2017",
            description: "During my tenure at Apple, I held the role of Software Architect, where I played a key role in shaping the architecture of mission-critical software projects. Responsible for designing scalable and efficient systems, I provided technical leadership to a cross-functional team."
        }
    ]

    return (
        <section className="py-16 bg-black">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-white text-center mb-12">
                    My Experience
                </h2>

                <div className="space-y-6 max-w-7xl mx-auto">
                    {experiences.map((experience, index) => (
                        <div
                            key={index}
                            className="border border-white rounded-xl p-6 hover:border-gray-400 transition-colors duration-300"
                        >
                            <div className="flex justify-between items-start mb-4">
                                <h3 className="text-xl font-semibold text-white">
                                    {experience.title}
                                </h3>
                                <span className="text-gray-400 text-sm font-medium">
                                    {experience.dates}
                                </span>
                            </div>
                            <p className="text-gray-300 leading-relaxed">
                                {experience.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Experience
