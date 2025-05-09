import Image from "next/image"

import umc from "@/public/icons/umc.png"
import fiap from "@/public/icons/fiap.png"

export default function AboutMe() {
  return (
    <section className="py-16 md:py-24 px-6 md:px-12 rounded-b-[70px]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">About Me</h2>
            <p className="text-gray-600 mb-4">
            Software Engineer with experience in the entire software development lifecycle.
            Intermediate in JavaScript, TypeScript, Node.js, Java Spring Boot, and PHP, with
            expertise in web development using React.js, Next.js, HTML, CSS, and Tailwind CSS.
            </p>
            <p className="text-gray-600 mb-4">
            Skilled in both back-end and front-end development, focusing on scalable and intuitive
            solutions while integrating UX/UI practices to ensure functional experiences.
            </p>
            <p className="text-gray-600 mb-4">
            As a professional, I strive to deeply understand challenges and deliver innovative
            solutions, whether in system architecture or technical problem-solving. I value
            teamwork and delivering robust results aligned with client needs.
            </p>

            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4">Skills</h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "JavaScript",
                  "TypeScript",
                  "React",
                  "Next.js",
                  "Node.js",
                  "UI/UX Design",
                  "Figma",
                  "User Research",
                  "Responsive Design",
                  "Accessibility",
                ].map((skill, index) => (
                  <span key={index} className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Professional Experience</h2>
            <p className="text-gray-600 mb-4">
              <span className="font-semibold">Synth Hub, Full Stack Developer</span> (2024 - ongoing)<br />
              Currently ongoing assignment, where he develops technological solutions ranging from business management systems to landing pages for small and medium-sized enterprises.
            </p>
            <p className="text-gray-600 mb-4">
              <span className="font-semibold">Movida Aluguel de veículos, Full Stack Developer</span> (2022 - 2024)<br />
              Worked on developing solutions for the company's financial sector, focusing on payment methods, billing, credit and fraud, and invoicing.
            </p>

            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4">Education</h3>
              <div className="flex flex-wrap gap-2">
                {[
                  { logo: umc, text: "Systems Analysis and Development, Universidade Mogi das Cruzes, Brazil" },
                  { logo: fiap, text: "Full Stack Development, Postgraduate Degree, FIAP, Brazil" },
                ].map((education, index) => (
                  <span key={index} className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm flex items-center gap-2">
                    <Image
                      src={education.logo}
                      alt={`${education.text.split(' - ')[0]} logo`}
                      width={60}
                      height={60}
                      className="object-contain"
                    />
                    {education.text}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}