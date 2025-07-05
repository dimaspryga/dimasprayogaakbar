"use client"

import * as React from "react"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"

/**
 * Top-bar Loading indicator – React-19 safe
 */
export function LoadingProgress() {
  const pathname = usePathname()

  const [isLoading, setIsLoading] = React.useState(false)
  const [progress, setProgress] = React.useState(0)

  /* ------------------------------------------------------------------
   * Effect #1 – detect route change & start loading once
   * ---------------------------------------------------------------- */
  React.useEffect(() => {
    // kick off only on pathname change
    setIsLoading(true)
    setProgress(0)

    // complete after simulated fetch
    const completeTimer = setTimeout(() => {
      setProgress(100)
      // finish bar after a small delay
      const hideTimer = setTimeout(() => {
        setIsLoading(false)
        setProgress(0)
      }, 350)
      return () => clearTimeout(hideTimer)
    }, 1500)

    return () => clearTimeout(completeTimer)
  }, [pathname])

  /* ------------------------------------------------------------------
   * Effect #2 – animate progress while loading
   * ---------------------------------------------------------------- */
  React.useEffect(() => {
    if (!isLoading) return

    const phases = [20, 40, 60, 80, 95]
    let idx = 0

    const tick = () => {
      setProgress((prev) => {
        if (idx >= phases.length) return prev
        return phases[idx++]
      })
      if (idx < phases.length) timer = setTimeout(tick, 250)
    }

    let timer = setTimeout(tick, 200)
    return () => clearTimeout(timer)
  }, [isLoading])

  /* ------------------------------------------------------------------ */
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed top-0 left-0 right-0 z-[100] h-1 bg-transparent"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="h-full bg-gradient-to-r from-purple-500 via-purple-600 to-purple-400 shadow-lg relative overflow-hidden"
            style={{ width: `${progress}%` }}
            transition={{ ease: "linear", duration: 0.15 }}
          >
            {/* shimmer */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
              animate={{ x: ["-100%", "200%"] }}
              transition={{
                duration: 1.5,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
