import { PROJECTS } from "../constants"
import { motion } from "framer-motion"

const Projects = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
        <motion.h2
            whileInView={{opacity: 1, y: 0}}
            initial={{opacity: 0, y: -100}}
            transition={{duration: 1}}
            className="my-20 text-center text-4xl">Projects
        </motion.h2>
        <div className="">
            {PROJECTS.map((projects, index)=>(
                <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
                    <motion.div
                        whileInView={{opacity: 1, x: 0}}
                        initial={{opacity: 0, x: -100}}
                        transition={{duration: 1}}
                        className="w-full lg:w-1/4">
                        <img 
                            src={projects.image}
                            width={150}
                            height={150}
                            alt={projects.title}
                            className="mb-6 rounded"
                            />
                    </motion.div>
                    <motion.div
                        whileInView={{opacity: 1, x: 0}}
                        initial={{opacity: 0, x: 100}}
                        opacity={{opacity: 0, x: 100}}
                        transition={{duration: 1}}
                        className="w-full max-w-xl lg:-3/4">
                        <h6 className="mb-2 font-semibold">{projects.title}</h6>
                        <p className="mb-4 text-neutral-400">{projects.description}</p>
                        {projects.technologies.map((tech, index)=>(
                            <span key={index} className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900">{tech}</span>
                        ))}
                        <a href={projects.github} className="block mt-4 text-cyan-700 font-mono">See more</a>
                    </motion.div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Projects