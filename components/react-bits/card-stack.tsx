"use client"

import type React from "react"

import { motion } from "framer-motion"
import { useState } from "react"

interface CardStackProps {
  title: string
  subtitle: string
  cards: Array<{
    id: number
    label: string
    content?: React.ReactNode
  }>
  className?: string
}

export function CardStack({ title, subtitle, cards, className = "" }: CardStackProps) {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  return (
    <div className={`relative w-full min-h-[600px] bg-gray-900 rounded-3xl p-8 lg:p-12 overflow-hidden ${className}`}>
      <div className="grid lg:grid-cols-2 gap-12 items-center h-full">
        {/* Left Content */}
        <div className="space-y-6">
          <div className="space-y-4">
            <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight">{title}</h2>
            <p className="text-gray-400 text-lg">{subtitle}</p>
          </div>
        </div>

        {/* Right Card Stack */}
        <div className="relative h-[400px] lg:h-[500px]">
          <div className="absolute inset-0 flex items-center justify-center">
            {cards.map((card, index) => (
              <motion.div
                key={card.id}
                className="absolute w-[300px] h-[200px] lg:w-[350px] lg:h-[250px] bg-gray-800 rounded-2xl border border-gray-700 cursor-pointer"
                style={{
                  zIndex: cards.length - index,
                }}
                initial={{
                  y: index * -15,
                  x: index * 5,
                  rotate: index * 2,
                }}
                animate={{
                  y: hoveredCard === card.id ? index * -25 : index * -15,
                  x: hoveredCard === card.id ? index * 10 : index * 5,
                  rotate: hoveredCard === card.id ? index * 3 : index * 2,
                  scale: hoveredCard === card.id ? 1.05 : 1,
                }}
                whileHover={{
                  y: index * -30,
                  x: index * 15,
                  rotate: index * 4,
                  scale: 1.1,
                }}
                onHoverStart={() => setHoveredCard(card.id)}
                onHoverEnd={() => setHoveredCard(null)}
                transition={{
                  duration: 0.3,
                  ease: "easeOut",
                }}
              >
                <div className="p-6 h-full flex flex-col justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-white font-medium">{card.label}</span>
                  </div>
                  {index === cards.length - 1 && (
                    <div className="mt-4">
                      <div className="w-full h-24 bg-gradient-to-br from-orange-400 to-yellow-500 rounded-lg flex items-center justify-center">
                        <div className="w-8 h-8 bg-blue-600 rounded transform rotate-45"></div>
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
