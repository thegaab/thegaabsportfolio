"use client"

import { Button } from "@/components/ui/button"
import { Mail } from "lucide-react"
import Image from "next/image"

import me from "@/public/me.png"

export default function Contact() {
  const handleEmailClick = () => {
    window.location.href = "mailto:your.email@example.com?subject=New Project Inquiry";
  };

  const handleWhatsAppClick = () => {
    window.open("https://wa.me/11950202293?text=Hi, I'd like to discuss a new project!", "_blank");
  };

  return (
    <section className="py-16 md:py-24 px-6 md:px-12 bg-white rounded-t-[60px]">
      <div className="max-w-7xl mx-auto text-center">
        <div className="mb-8">
          <Image
            src={me}
            alt="Handshake icon"
            width={60}
            height={60}
            className="mx-auto"
          />
        </div>

        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8">Tell me about your next project</h2>

        <div className="flex flex-wrap justify-center gap-4 mt-8">
          <Button 
            className="rounded-full bg-black text-white hover:bg-gray-800 px-8"
            onClick={handleEmailClick}
          >
            <Mail className="mr-2 h-4 w-4" /> Email Me
          </Button>
          <Button 
            variant="outline" 
            className="rounded-full"
            onClick={handleWhatsAppClick}
          >
            WhatsApp
          </Button>
        </div>
      </div>
    </section>
  )
}