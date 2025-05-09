"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useLoading } from "./loading-provider"
import { Linkedin, Github, Instagram, Menu, X } from "lucide-react"
import { useState } from "react"

export default function Header() {
  const { isLoading } = useLoading()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("tiagogabrieldev@outlook.com")
      .then(() => {
        alert("Email copied to clipboard!")
      })
      .catch(() => {
        alert("Failed to copy email.")
      })
  }

  const handleDownloadCV = () => {
    const link = document.createElement("a")
    link.href = "/CV-Tiago_Gabriel.pdf"
    link.download = "CV-Tiago_Gabriel.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  if (isLoading) return null

  return (
    <header className="w-full py-4 px-6 md:px-12 bg-[#f5f5f5] relative">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Desktop Left Section */}
        <div className="hidden md:flex items-center">
          <p className="text-sm text-gray-600 mr-6">tiagogabrieldev@outlook.com</p>
          <div className="space-x-2">
            <Button 
              variant="outline" 
              size="sm" 
              className="rounded-full"
              onClick={handleCopyEmail}
            >
              Copy
            </Button>
            <Button 
              variant="outline" 
              size="sm" 
              className="rounded-full"
              onClick={handleDownloadCV}
            >
              CV
            </Button>
          </div>
        </div>

        {/* Desktop Social Links */}
        <div className="hidden md:flex items-center space-x-4">
          <Link href="https://www.linkedin.com/in/tiagogab/" target="_blank" className="text-gray-600 hover:text-gray-900">
            <Linkedin size={18} />
            <span className="sr-only">LinkedIn</span>
          </Link>
          <Link href="https://github.com/thegaab" target="_blank" className="text-gray-600 hover:text-gray-900">
            <Github size={18} />
            <span className="sr-only">GitHub</span>
          </Link>
          <Link href="https://www.instagram.com/_tgaab/" target="_blank" className="text-gray-600 hover:text-gray-900">
            <Instagram size={18} />
            <span className="sr-only">Instagram</span>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-600 hover:text-gray-900"
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-[#f5f5f5] flex flex-col items-center justify-center z-50">
          <button 
            className="absolute top-4 right-6 text-gray-600 hover:text-gray-900"
            onClick={toggleMenu}
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
          <div className="flex flex-col items-center space-y-6">
            <p className="text-sm text-gray-600">tiagogabrieldev@outlook.com</p>
            <div className="flex space-x-4">
              <Button 
                variant="outline" 
                size="sm" 
                className="rounded-full"
                onClick={handleCopyEmail}
              >
                Copy
              </Button>
              <Button 
                variant="outline" 
                size="sm" 
                className="rounded-full"
                onClick={handleDownloadCV}
              >
                CV
              </Button>
            </div>
            <div className="flex space-x-6">
              <Link 
                href="https://www.linkedin.com/in/tiagogab/" 
                target="_blank" 
                className="text-gray-600 hover:text-gray-900"
                onClick={toggleMenu}
              >
                <Linkedin size={24} />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link 
                href="https://github.com/thegaab" 
                target="_blank" 
                className="text-gray-600 hover:text-gray-900"
                onClick={toggleMenu}
              >
                <Github size={24} />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link 
                href="https://www.instagram.com/_tgaab/" 
                target="_blank" 
                className="text-gray-600 hover:text-gray-900"
                onClick={toggleMenu}
              >
                <Instagram size={24} />
                <span className="sr-only">Instagram</span>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}