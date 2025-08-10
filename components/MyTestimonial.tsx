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
        <section className="py-20 bg-white">
            <div className="container mx-auto max-w-7xl px-4">
                {/* Section Title */}
                <div className="text-center mb-16">
                    <h2 className="text-5xl font-black text-black mb-4 tracking-tight">
                        My Testimonials
                    </h2>
                </div>

                {/* LinkedIn Post Embeds */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 justify-items-center">
                    {linkedInPosts.map((post, index) => (
                        <div
                            key={post.id}
                            className="w-full max-w-lg"
                            style={{
                                animationDelay: `${index * 200}ms`
                            }}
                        >
                            {/* Card Container */}
                            <div className="bg-white rounded-2xl shadow-2xl border-2 border-black overflow-hidden">
                                {/* Card Header */}
                                <div className="bg-black text-white px-4 py-4">
                                    <div className="flex items-center space-x-3">
                                        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                                        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                                    </div>
                                </div>

                                {/* Card Content */}
                                <div className="p-1 bg-gradient-to-r from-gray-100 to-gray-200">
                                    <iframe
                                        src={post.iframeSrc}
                                        height="400"
                                        width="100%"
                                        frameBorder="0"
                                        allowFullScreen={true}
                                        title={post.title}
                                        className="w-full h-80 rounded-xl bg-white"
                                        style={{
                                            animation: 'fadeInUp 0.8s ease-out forwards',
                                            opacity: 0,
                                            animationDelay: `${index * 200 + 400}ms`
                                        }}
                                    />
                                </div>

                                {/* Card Footer */}
                                <div className="bg-gray-900 text-white px-6 py-3">
                                    <div className="flex items-center justify-between">
                                        <span className="text-sm font-medium">Testimonial</span>
                                        <div className="flex space-x-2">
                                            <div className="w-2 h-2 bg-white rounded-full opacity-60"></div>
                                            <div className="w-2 h-2 bg-white rounded-full opacity-40"></div>
                                            <div className="w-2 h-2 bg-white rounded-full opacity-20"></div>
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
