"use client"

import * as React from "react"
import { motion } from "framer-motion"

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
  const [hoveredCard, setHoveredCard] = React.useState<number | null>(null)

  return (
    <div
      className={`relative w-full min-h-[600px] bg-slate-100 dark:bg-gray-900 rounded-3xl p-8 lg:p-12 overflow-hidden border border-slate-200 dark:border-gray-800 ${className}`}
    >
      <div className="grid items-center h-full gap-12 lg:grid-cols-2">
        {/* Left Content */}
        <div className="space-y-6">
          <div className="space-y-4">
            <h2 className="text-4xl font-bold leading-tight lg:text-5xl text-slate-900 dark:text-white">{title}</h2>
            <p className="text-lg text-slate-600 dark:text-gray-400">{subtitle}</p>
          </div>
        </div>

        {/* Right Card Stack */}
        <div className="relative h-[400px] lg:h-[500px]">
          <div className="absolute inset-0 flex items-center justify-center">
            {cards.map((card, index) => (
              <motion.div
                key={card.id}
                className="absolute w-[300px] h-[200px] lg:w-[350px] lg:h-[250px] bg-white dark:bg-gray-800 rounded-2xl border border-slate-200 dark:border-gray-700 cursor-pointer shadow-lg dark:shadow-gray-900/20"
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
                <div className="flex flex-col justify-between h-full p-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="font-medium text-slate-900 dark:text-white">{card.label}</span>
                  </div>
                  {index === cards.length - 1 && (
                    <div className="mt-4">
                      <div className="flex items-center justify-center w-full h-24 rounded-lg bg-gradient-to-br from-orange-400 to-yellow-500">
                        <div className="w-8 h-8 transform rotate-45 bg-blue-600 rounded"></div>
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
