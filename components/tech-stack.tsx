"use client"

import { useRef, useEffect } from "react"
import Image from "next/image"

import zero from "@/public/icons/0.svg"
import one from "@/public/icons/1.svg"
import three from "@/public/icons/3.svg"
import four from "@/public/icons/4.svg"
import five from "@/public/icons/5.svg"
import six from "@/public/icons/6.svg"
import seven from "@/public/icons/7.svg"
import eight from "@/public/icons/8.svg"
import nine from "@/public/icons/9.svg"
import ten from "@/public/icons/10.svg"
import eleven from "@/public/icons/11.svg"
import twelve from "@/public/icons/12.svg"
import thirteen from "@/public/icons/13.svg"
import fourteen from "@/public/icons/14.svg"
import fifteen from "@/public/icons/15.svg"
import sixteen from "@/public/icons/16.svg"
import seventeen from "@/public/icons/17.svg"
import eighteen from "@/public/icons/18.svg"
import nineteen from "@/public/icons/19.svg"
import twenty from "@/public/icons/20.svg"
import twentyOne from "@/public/icons/21.svg"
import twentyTwo from "@/public/icons/22.svg"
import twentyThree from "@/public/icons/23.svg"

const technologies = [
  { name: "React", logo: zero },
  { name: "Next.js", logo: one },
  { name: "Node.js", logo: three },
  { name: "Tailwind CSS", logo: four },
  { name: "Figma", logo: five },
  { name: "AWS", logo: six },
  { name: "Docker", logo: seven },
  { name: "GraphQL", logo: eight },
  { name: "MongoDB", logo: nine },
  { name: "PostgreSQL", logo: ten },
  { name: "Kubernetes", logo: eleven },
  { name: "Jest", logo: twelve },
  { name: "Cypress", logo: thirteen },
  { name: "Redux", logo: fourteen },
  { name: "Webpack", logo: fifteen },
  { name: "Babel", logo: sixteen },
  { name: "ESLint", logo: seventeen },
  { name: "Prettier", logo: eighteen },
  { name: "Storybook", logo: nineteen },
  { name: "Vercel", logo: twenty },
  { name: "GitHub Actions", logo: twentyOne },
  { name: "Sentry", logo: twentyTwo },
  { name: "Stripe", logo: twentyThree },
]

export default function TechStack() {
  const carouselRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleAutoScroll = () => {
      if (carouselRef.current) {
        carouselRef.current.scrollLeft += 2
        if (carouselRef.current.scrollLeft >= carouselRef.current.scrollWidth / 2) {
          carouselRef.current.scrollLeft = 0
        }
      }
    }

    const interval = setInterval(handleAutoScroll, 30)
    return () => clearInterval(interval)
  }, [])

  return (
    <section
      id="tech-stack"
      className="relative py-8 md:py-20 px-0 md:px-0 bg-white w-full"
      style={{
        borderBottomLeftRadius: "60px",
        borderBottomRightRadius: "60px",
      }}
    >
      <div
        className="absolute top-0 left-0 w-full h-12 bg-[#f5f5f5]"
        style={{
          borderBottomLeftRadius: "70px",
          borderBottomRightRadius: "70px",
        }}
      />
      <div className="relative w-full p-6 md:p-8">
        <div ref={carouselRef} className="overflow-x-hidden whitespace-nowrap" style={{ scrollBehavior: "smooth" }}>
          <div className="inline-flex space-x-8 md:space-x-12">
            {technologies.concat(technologies).map((tech, index) => (
              <div key={index} className="inline-block min-w-[100px] md:min-w-[150px]">
                <Image
                  src={tech.logo || "/placeholder.svg"}
                  alt={tech.name}
                  width={150}
                  height={60}
                  className="object-contain grayscale hover:grayscale-0 transition-all duration-300 w-[100px] md:w-[150px] h-[40px] md:h-[60px]"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}