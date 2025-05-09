import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

import ionstech from "@/public/ionstech.png"
import proview from "@/public/proview.png"
import utils from "@/public/utils.png"

const caseStudies = [
  {
    title: "Ionstech Landingpage",
    description: "A landing page for a company specializing in system automation with RPA (Robotic Process Automation).",
    image: ionstech,
    tags: ["NextJs", "TailwindCSS", "Typescript"],
    link: "https://ionstechsolutions.com.br/"
  },
  {
    title: "Proview Corp website",
    description: "A portfolio website showcasing Proview Corp's construction expertise and completed projects. The site highlights the company's skills, past projects, and commitment to quality, providing potential clients with an overview of Proview's capabilities and attention to detail.",
    image: proview,
    tags: ["ViteJS", "TailwindCSS", "Sooner", "lucide-react"],
    link: "https://www.proviewcorp.com/"
  },
  {
    title: "Utilies App",
    description: "Productivity app that combines Eisenhower Matrix, Post-it style notepad and Pomodoro timer with notifications, helping to organize tasks by priority and urgency.",
    image: utils,
    tags: ["NextJS", "Typescript", "TailwindCSS", "Framer Motion", "DND kit", "Radix UI", "Shadcn UI", "date-fns", "next-themes", "Web notifications", "Session storage"],
    link: "https://v0-eisenhower-matrix-app.vercel.app/"
  },
]

export default function CaseStudies() {
  return (
    <section className="py-16 md:py-24 px-6 md:px-12 bg-white rounded-[60px]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Success Cases</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">Projects that made a difference</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((caseStudy, index) => (
            <Card key={index} className="overflow-hidden border-none shadow-lg">
              <div className="relative h-48 w-full">
                <Image
                  src={caseStudy.image || "/placeholder.svg"}
                  alt={caseStudy.title}
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">
                  <a href={caseStudy.link || "#"} target="_blank" rel="noopener noreferrer" className="hover:text-teal-700">
                  {caseStudy.title}
                  </a>
                </h3>
                <p className="text-gray-600 mb-4">{caseStudy.description}</p>
                <div className="flex flex-wrap gap-2">
                  {caseStudy.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="bg-gray-100 text-gray-800 text-xs px-3 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
