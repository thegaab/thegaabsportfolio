import { RiReactjsLine, RiJavaLine } from "react-icons/ri"
import { TbBrandTypescript, TbBrandNodejs } from "react-icons/tb"
import { SiNestjs, SiSpringboot } from "react-icons/si";
import { FaLaravel } from "react-icons/fa";
import { motion } from "framer-motion";

const iconVariants = (duration) => ({
  initial: {y: -10},
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse"
    }
  }
})

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pc-24">
        <motion.h2
          whileInView={{opacity: 1, y: 0}}
          initial={{opacity: 0, y: -100}}
          transition={{duration: 1}}
          className="my-20 text-center text-4xl">Technologies
        </motion.h2>
        <motion.div
        whileInView={{opacity: 1, x: 0}}
        initial={{opacity: 0, x: -100}}
        transition={{duration: 1.5}}
        className="flex mb-40 flex-wrap items-center justify-center gap-4">
          <motion.div
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4">
            <RiReactjsLine className="text-7xl text-cyan-400"/>
          </motion.div>

          <motion.div
          variants={iconVariants(3)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4">
            <TbBrandTypescript className="text-7xl text-white"/>
          </motion.div>

          <motion.div
          variants={iconVariants(5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4">
            <TbBrandNodejs className="text-7xl text-green-500"/>
          </motion.div>
          
          <motion.div
          variants={iconVariants(2)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4">
            <SiNestjs className="text-7xl text-pink-700"/>
          </motion.div>

          <motion.div
          variants={iconVariants(6)}
          initial="initial"
          animate="animate"className="rounded-2xl border-4 border-neutral-800 p-4">
            <RiJavaLine className="text-7xl text-red-500"/>
          </motion.div>

          <motion.div
          variants={iconVariants(4)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4">
            <SiSpringboot className="text-7xl text-green-500"/>
          </motion.div>

          <motion.div
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4">
            <FaLaravel className="text-7xl text-red-500"/>
          </motion.div>
        </motion.div>
    </div>
  )
}

export default Technologies