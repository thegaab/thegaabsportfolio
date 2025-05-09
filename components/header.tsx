"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useLoading } from "./loading-provider"
import { Linkedin, Github, Instagram } from "lucide-react"

export default function Header() {
  const { isLoading } = useLoading()

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("tiagogabrieldev@outlook.com")
      .then(() => {
        alert("Email copied to clipboard!");
      })
      .catch(() => {
        alert("Failed to copy email.");
      });
  };

  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = "/CV-Tiago_Gabriel.pdf"; // Updated to correct path from public directory
    link.download = "CV-Tiago_Gabriel.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  if (isLoading) return null

  return (
    <header className="w-full py-4 px-6 md:px-12 bg-[#f5f5f5]">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center">
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

        <div className="flex items-center space-x-4">
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
      </div>
    </header>
  )
}