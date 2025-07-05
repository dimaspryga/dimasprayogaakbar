"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"

interface Card {
  id: number
  content: React.ReactNode
}

interface CardSwapProps {
  cards: Card[]
  autoSwap?: boolean
  swapInterval?: number
  className?: string
}

export function CardSwap({ cards, autoSwap = false, swapInterval = 4000, className = "" }: CardSwapProps) {
  const [currentIndex, setCurrentIndex] = React.useState(0)

  React.useEffect(() => {
    if (!autoSwap || cards.length <= 1) return

    const interval = setInterval(() => {
      React.startTransition(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length)
      })
    }, swapInterval)

    return () => clearInterval(interval)
  }, [autoSwap, swapInterval, cards.length])

  const nextCard = React.useCallback(() => {
    React.startTransition(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length)
    })
  }, [cards.length])

  const prevCard = React.useCallback(() => {
    React.startTransition(() => {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + cards.length) % cards.length)
    })
  }, [cards.length])

  const goToCard = React.useCallback((index: number) => {
    React.startTransition(() => {
      setCurrentIndex(index)
    })
  }, [])

  return (
    <div className={`relative w-full h-[600px] lg:h-[700px] ${className}`}>
      {/* Card Swap Container */}
      <div className="card-swap-container absolute bottom-0 right-0 translate-x-[5%] translate-y-[20%] origin-bottom-right overflow-visible sm:scale-75 sm:translate-x-[25%] sm:translate-y-[25%] xs:scale-[0.55]">
        <div className="relative w-[400px] h-[500px] lg:w-[500px] lg:h-[600px]" style={{ perspective: "900px" }}>
          <AnimatePresence mode="wait">
            {cards.map((card, index) => {
              const isActive = index === currentIndex
              const isPrev = index === (currentIndex - 1 + cards.length) % cards.length
              const isNext = index === (currentIndex + 1) % cards.length

              if (!isActive && !isPrev && !isNext) return null

              return (
                <motion.div
                  key={card.id}
                  className="card absolute top-1/2 left-1/2 w-[350px] h-[450px] lg:w-[400px] lg:h-[500px] rounded-xl border border-white/20 bg-black dark:bg-white dark:border-black/20"
                  style={{
                    transformStyle: "preserve-3d",
                    willChange: "transform",
                    backfaceVisibility: "hidden",
                  }}
                  initial={
                    isActive
                      ? {
                          x: "-50%",
                          y: "-50%",
                          rotateY: 0,
                          z: 0,
                          scale: 1,
                          opacity: 1,
                        }
                      : {
                          x: "-50%",
                          y: "-50%",
                          rotateY: isPrev ? -45 : 45,
                          z: -100,
                          scale: 0.8,
                          opacity: 0.7,
                        }
                  }
                  animate={
                    isActive
                      ? {
                          x: "-50%",
                          y: "-50%",
                          rotateY: 0,
                          z: 0,
                          scale: 1,
                          opacity: 1,
                        }
                      : {
                          x: "-50%",
                          y: "-50%",
                          rotateY: isPrev ? -45 : 45,
                          z: -100,
                          scale: 0.8,
                          opacity: 0.7,
                        }
                  }
                  exit={{
                    x: "-50%",
                    y: "-50%",
                    rotateY: isPrev ? 45 : -45,
                    z: -200,
                    scale: 0.6,
                    opacity: 0,
                  }}
                  transition={{
                    duration: 0.8,
                    ease: [0.4, 0.0, 0.2, 1],
                  }}
                >
                  <div className="w-full h-full overflow-hidden rounded-xl bg-white dark:bg-gray-900">
                    {card.content}
                  </div>
                </motion.div>
              )
            })}
          </AnimatePresence>
        </div>
      </div>

      {/* Content Area */}
      <div className="absolute left-0 top-0 w-full lg:w-1/2 h-full flex flex-col justify-center p-8 lg:p-12">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 50 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <div className="space-y-4">
            <h3 className="text-3xl lg:text-4xl font-bold">Featured Projects</h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Explore my latest work and see how I bring ideas to life through code and design.
            </p>
          </div>

          {/* Navigation Dots */}
          <div className="flex space-x-3">
            {cards.map((_, index) => (
              <button
                key={index}
                onClick={() => goToCard(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-primary scale-125 shadow-lg"
                    : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                }`}
                aria-label={`Go to project ${index + 1}`}
              />
            ))}
          </div>

          {/* Navigation Arrows */}
          <div className="flex space-x-4">
            <button
              onClick={prevCard}
              className="w-12 h-12 bg-primary/10 hover:bg-primary/20 rounded-full flex items-center justify-center transition-colors group"
              aria-label="Previous project"
            >
              <svg
                className="w-5 h-5 group-hover:-translate-x-0.5 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              onClick={nextCard}
              className="w-12 h-12 bg-primary/10 hover:bg-primary/20 rounded-full flex items-center justify-center transition-colors group"
              aria-label="Next project"
            >
              <svg
                className="w-5 h-5 group-hover:translate-x-0.5 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        .card-swap-container {
          perspective: 900px;
        }
        
        @media (max-width: 768px) {
          .card-swap-container {
            transform: scale(0.75) translate(25%, 25%);
          }
        }
        
        @media (max-width: 480px) {
          .card-swap-container {
            transform: scale(0.55) translate(25%, 25%);
          }
        }
      `}</style>
    </div>
  )
}
