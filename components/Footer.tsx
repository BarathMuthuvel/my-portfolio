import React from 'react'
import { Icon } from '@iconify/react'

const Footer = () => {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="bg-black text-white py-8 border-t border-gray-800">
            <div className="container mx-auto px-8">
                <div className="flex items-center justify-between">
                    <div className="flex-1"></div>
                    <div className="flex items-center gap-2 text-gray-300">
                        <span className="text-sm">Made with</span>
                        <span className="text-white text-lg"><Icon  icon="noto:white-heart" className='w-5 h-5'/></span>
                        <span className="text-sm">by Barath</span>
                    </div>
                    <div className="flex-1 flex justify-end">
                        <p className="text-gray-400 text-sm">
                            © {currentYear} All rights reserved.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
