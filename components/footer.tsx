import Link from "next/link"
import { Linkedin, Github, Instagram } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-black text-white py-8 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm mb-4 md:mb-0">© {new Date().getFullYear()} All rights reserved.</p>

          <div className="flex items-center space-x-6">
            <Link href="https://www.linkedin.com/in/tiagogab/" target="_blank" className="text-white hover:text-gray-300">
              <Linkedin size={18} />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link href="https://github.com/thegaab" target="_blank" className="text-white hover:text-gray-300">
              <Github size={18} />
              <span className="sr-only">Github</span>
            </Link>
            <Link href="https://www.instagram.com/_tgaab/" target="_blank" className="text-white hover:text-gray-300">
              <Instagram size={18} />
              <span className="sr-only">Instagram</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
