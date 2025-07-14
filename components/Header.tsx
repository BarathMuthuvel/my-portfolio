import React from 'react'
import { FiDownload } from 'react-icons/fi'

const Header = () => {
  return (
    <header className="w-full flex items-center justify-between px-8 py-4 bg-white shadow-sm">
      {/* Left: Logo and Personal */}
      <div className="flex items-center gap-2">
        {/* Placeholder for logo */}
        <p className="text-2xl font-bold text-black">Barath Muthuvel</p>
      </div>
      {/* Center: Navigation */}
      <nav className="flex gap-8">
        <a href="#about" className="font-semibold hover:text-gray-600">About Me</a>
        <a href="#skills" className="font-semibold hover:text-gray-600">Skills</a>
        <a href="#projects" className="font-semibold hover:text-gray-600">Project</a>
        <a href="#contact" className="font-semibold hover:text-gray-600">Contact Me</a>
      </nav>
      {/* Right: Resume Button */}
      <a href="/resume.pdf" download className="flex items-center gap-2 bg-black text-white px-5 py-2 rounded-md font-semibold hover:bg-gray-800 transition">
        Resume <FiDownload />
      </a>
    </header>
  )
}

export default Header
