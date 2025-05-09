import { Suspense } from "react"
import LoadingScreen from "@/components/loading-screen"
import Hero from "@/components/hero"
import TechStack from "@/components/tech-stack"
import Services from "@/components/services"
import CaseStudies from "@/components/case-studies"
import AboutMe from "@/components/about-me"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <main className="min-h-screen bg-[#f5f5f5]">
        <Hero />
        <TechStack />
        <Services />
        <CaseStudies />
        <AboutMe />
        <Contact />
        <Footer />
      </main>
    </Suspense>
  )
}
