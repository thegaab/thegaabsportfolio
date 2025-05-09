"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

export default function LoadingScreen() {
  const [text, setText] = useState("Software Engineer")
  const [showText, setShowText] = useState(false)

  useEffect(() => {
    // Show text after a small delay
    const showTextTimer = setTimeout(() => {
      setShowText(true)
    }, 500)

    // Toggle between Software Engineer and UX Engineer
    const textToggleTimer = setInterval(() => {
      setText((prev) => (prev === "Software Engineer" ? "UX Engineer" : "Software Engineer"))
    }, 3000)

    return () => {
      clearTimeout(showTextTimer)
      clearInterval(textToggleTimer)
    }
  }, [])

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black">
      {/* Blurred circles background */}
      <div
        className="blurred-circle"
        style={{
          width: "300px",
          height: "300px",
          backgroundColor: "#676765",
          top: "20%",
          left: "30%",
          animationDelay: "0s",
        }}
      />
      <div
        className="blurred-circle"
        style={{
          width: "250px",
          height: "250px",
          backgroundColor: "#E2E2E2",
          bottom: "30%",
          right: "20%",
          animationDelay: "2s",
        }}
      />
      <div
        className="blurred-circle"
        style={{
          width: "200px",
          height: "200px",
          backgroundColor: "#363636",
          top: "60%",
          left: "20%",
          animationDelay: "1s",
        }}
      />

      <div className="text-center z-10">
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-6xl font-bold text-white mb-4"
        >
          Tiago Gabriel
        </motion.h1>

        {showText && (
          <div className="h-10">
            <motion.p
              key={text}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="typewriter text-xl md:text-2xl text-white"
            >
              {text}
            </motion.p>
          </div>
        )}
      </div>
    </div>
  )
}
