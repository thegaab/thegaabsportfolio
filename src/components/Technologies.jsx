import { RiReactjsLine, RiJavaLine } from "react-icons/ri";
import { TbBrandTypescript, TbBrandNodejs } from "react-icons/tb";
import { SiNestjs, SiSpringboot } from "react-icons/si";
import { FaLaravel } from "react-icons/fa";
import { motion } from "framer-motion";

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Technologies = () => {
  const techTooltips = {
    react: "React - A JavaScript library for building user interfaces.",
    typescript: "TypeScript - A typed superset of JavaScript that compiles to plain JavaScript.",
    nodejs: "Node.js - A runtime to build server-side applications with JavaScript.",
    nestjs: "NestJS - A progressive Node.js framework for building efficient server-side apps.",
    java: "Java - A versatile, object-oriented programming language.",
    springboot: "Spring Boot - A framework to simplify Java app development.",
    laravel: "Laravel - A PHP framework for web artisans.",
  };

  return (
    <div className="border-b border-neutral-800 pb-24">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1 }}
        className="my-20 text-center text-4xl"
      >
        Technologies
      </motion.h2>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-4"
      >
        <motion.div
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          className="relative rounded-2xl border-4 border-neutral-800 p-4 group"
        >
          <RiReactjsLine className="text-7xl text-cyan-400" />
          <span className="absolute left-1/2 w-44 transform -translate-x-1/2 bottom-full mb-2 hidden group-hover:block bg-white text-black  p-2 rounded-lg shadow-lg before:content-[''] before:absolute before:left-1/2 before:top-full before:-translate-x-1/2 before:border-8 before:border-t-white before:border-x-transparent before:border-b-transparent">
            {techTooltips.react}
          </span>
        </motion.div>

        <motion.div
          variants={iconVariants(3)}
          initial="initial"
          animate="animate"
          className="relative rounded-2xl border-4 border-neutral-800 p-4 group"
        >
          <TbBrandTypescript className="text-7xl text-white" />
          <span className="absolute left-1/2 w-44 transform -translate-x-1/2 bottom-full mb-2 hidden group-hover:block bg-white text-black text-sm p-2 rounded-lg shadow-lg before:content-[''] before:absolute before:left-1/2 before:top-full before:-translate-x-1/2 before:border-8 before:border-t-white before:border-x-transparent before:border-b-transparent">
            {techTooltips.typescript}
          </span>
        </motion.div>

        <motion.div
          variants={iconVariants(5)}
          initial="initial"
          animate="animate"
          className="relative rounded-2xl border-4 border-neutral-800 p-4 group"
        >
          <TbBrandNodejs className="text-7xl text-green-500" />
          <span className="absolute left-1/2 w-44 transform -translate-x-1/2 bottom-full mb-2 hidden group-hover:block bg-white text-black text-sm p-2 rounded-lg shadow-lg before:content-[''] before:absolute before:left-1/2 before:top-full before:-translate-x-1/2 before:border-8 before:border-t-white before:border-x-transparent before:border-b-transparent">
            {techTooltips.nodejs}
          </span>
        </motion.div>

        <motion.div
          variants={iconVariants(2)}
          initial="initial"
          animate="animate"
          className="relative rounded-2xl border-4 border-neutral-800 p-4 group"
        >
          <SiNestjs className="text-7xl text-pink-700" />
          <span className="absolute left-1/2 w-44 transform -translate-x-1/2 bottom-full mb-2 hidden group-hover:block bg-white text-black text-sm p-2 rounded-lg shadow-lg before:content-[''] before:absolute before:left-1/2 before:top-full before:-translate-x-1/2 before:border-8 before:border-t-white before:border-x-transparent before:border-b-transparent">
            {techTooltips.nestjs}
          </span>
        </motion.div>

        <motion.div
          variants={iconVariants(6)}
          initial="initial"
          animate="animate"
          className="relative rounded-2xl border-4 border-neutral-800 p-4 group"
        >
          <RiJavaLine className="text-7xl text-red-500" />
          <span className="absolute left-1/2 w-44 transform -translate-x-1/2 bottom-full mb-2 hidden group-hover:block bg-white text-black text-sm p-2 rounded-lg shadow-lg before:content-[''] before:absolute before:left-1/2 before:top-full before:-translate-x-1/2 before:border-8 before:border-t-white before:border-x-transparent before:border-b-transparent">
            {techTooltips.java}
          </span>
        </motion.div>

        <motion.div
          variants={iconVariants(4)}
          initial="initial"
          animate="animate"
          className="relative rounded-2xl border-4 border-neutral-800 p-4 group"
        >
          <SiSpringboot className="text-7xl text-green-500" />
          <span className="absolute left-1/2 w-44 transform -translate-x-1/2 bottom-full mb-2 hidden group-hover:block bg-white text-black text-sm p-2 rounded-lg shadow-lg before:content-[''] before:absolute before:left-1/2 before:top-full before:-translate-x-1/2 before:border-8 before:border-t-white before:border-x-transparent before:border-b-transparent">
            {techTooltips.springboot}
          </span>
        </motion.div>

        <motion.div
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          className="relative rounded-2xl border-4 border-neutral-800 p-4 group"
        >
          <FaLaravel className="text-7xl text-red-500" />
          <span className="absolute left-1/2 w-44 transform -translate-x-1/2 bottom-full mb-2 hidden group-hover:block bg-white text-black text-sm p-2 rounded-lg shadow-lg before:content-[''] before:absolute before:left-1/2 before:top-full before:-translate-x-1/2 before:border-8 before:border-t-white before:border-x-transparent before:border-b-transparent">
            {techTooltips.laravel}
          </span>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Technologies;