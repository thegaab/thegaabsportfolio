"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"

import me from "@/public/me.png"

export default function Hero() {
  const scrollToTechStack = () => {
    const techStackSection = document.getElementById("tech-stack")
    if (techStackSection) {
      techStackSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="py-16 md:py-24 px-6 md:px-12 bg-[#f5f5f5] rounded-b-[70px]">
      <div className="max-w-7xl mx-auto text-center">
        <div className="mb-8 relative inline-block">
          <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden mx-auto relative">
            <Image
              src={me}
              alt="Tiago Gabriel"
              width={128}
              height={128}
              className="object-cover"
            />
          </div>
          <div className="absolute -right-24 top-2 bg-white px-2 py-1 rounded-full text-sm font-medium">
            Tiago Gabriel 👋
          </div>
        </div>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold max-w-3xl mx-auto leading-tight">
          Building <span className="text-gray-600">digital</span> products,{" "}
          <span className="text-gray-600">brands</span>, and <span className="text-gray-600">experience</span>.
        </h1>

        <div className="mt-10">
          <Button onClick={scrollToTechStack} className="rounded-full bg-black text-white hover:bg-gray-800 px-8 py-6">
            Learn More <ChevronDown className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}
