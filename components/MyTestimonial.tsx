"use client"
import React from 'react'

const MyTestimonial = () => {
    const linkedInPosts = [
        {
            id: 1,
            title: "LinkedIn Post 1",
            iframeSrc: "https://www.linkedin.com/embed/feed/update/urn:li:share:7350514886902235136"
        },
        {
            id: 2,
            title: "LinkedIn Post 2",
            iframeSrc: "https://www.linkedin.com/embed/feed/update/urn:li:share:7076512555396960256"
        }
    ];

    return (
        <section id="testimonials" className="py-8 sm:py-12 md:py-16 bg-white">
            <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Section Title */}
                <div className="text-center mb-8 sm:mb-12 md:mb-16">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal font-sans text-center text-black mb-6 sm:mb-8 md:mb-10 lg:mb-12">
                        My <span className='font-bold'>Testimonials</span>
                    </h2>
                </div>

                {/* LinkedIn Post Embeds */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 justify-items-center">
                    {linkedInPosts.map((post, index) => (
                        <div
                            key={post.id}
                            className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl"
                            style={{
                                animationDelay: `${index * 200}ms`
                            }}
                        >
                            {/* Card Container */}
                            <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg sm:shadow-2xl border border-gray-200 sm:border-2 sm:border-black overflow-hidden">
                                {/* Card Header */}
                                <div className="bg-black text-white px-3 sm:px-4 py-3 sm:py-4">
                                    <div className="flex items-center space-x-2 sm:space-x-3">
                                        <div className="w-2 h-2 sm:w-3 sm:h-3 bg-red-500 rounded-full"></div>
                                        <div className="w-2 h-2 sm:w-3 sm:h-3 bg-yellow-500 rounded-full"></div>
                                        <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-500 rounded-full"></div>
                                    </div>
                                </div>

                                {/* Card Content */}
                                <div className="p-1 bg-gradient-to-r from-gray-100 to-gray-200">
                                    <iframe
                                        src={post.iframeSrc}
                                        height="300"
                                        width="100%"
                                        frameBorder="0"
                                        allowFullScreen={true}
                                        title={post.title}
                                        className="w-full h-60 sm:h-72 md:h-80 rounded-lg sm:rounded-xl bg-white"
                                        style={{
                                            animation: 'fadeInUp 0.8s ease-out forwards',
                                            opacity: 0,
                                            animationDelay: `${index * 200 + 400}ms`
                                        }}
                                    />
                                </div>

                                {/* Card Footer */}
                                <div className="bg-gray-900 text-white px-4 sm:px-6 py-2 sm:py-3">
                                    <div className="flex items-center justify-between">
                                        <span className="text-xs sm:text-sm font-medium">Testimonial</span>
                                        <div className="flex space-x-1 sm:space-x-2">
                                            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white rounded-full opacity-60"></div>
                                            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white rounded-full opacity-40"></div>
                                            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white rounded-full opacity-20"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default MyTestimonial
