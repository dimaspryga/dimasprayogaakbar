"use client"

import * as React from "react"

interface GradientTextProps {
  children: React.ReactNode
  colors: string[]
  animationSpeed?: number
  showBorder?: boolean
  className?: string
}

export function GradientText({
  children,
  colors,
  animationSpeed = 2,
  showBorder = false,
  className = "",
}: GradientTextProps) {
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  const gradientStyle = React.useMemo(
    () => ({
      background: `linear-gradient(-45deg, ${colors.join(", ")})`,
      backgroundSize: "400% 400%",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      backgroundClip: "text",
      animation: `gradientShift ${animationSpeed}s ease infinite`,
    }),
    [colors, animationSpeed],
  )

  const borderStyle = React.useMemo(
    () =>
      showBorder
        ? {
            textShadow: `
          -1px -1px 0 ${colors[0]},
          1px -1px 0 ${colors[0]},
          -1px 1px 0 ${colors[0]},
          1px 1px 0 ${colors[0]}
        `,
          }
        : {},
    [showBorder, colors],
  )

  if (!mounted) {
    return <span className={className}>{children}</span>
  }

  return (
    <>
      <style jsx>{`
        @keyframes gradientShift {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
      `}</style>
      <span className={`inline-block ${className}`} style={{ ...gradientStyle, ...borderStyle }}>
        {children}
      </span>
    </>
  )
}
