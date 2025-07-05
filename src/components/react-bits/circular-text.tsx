"use client"

import * as React from "react"

interface CircularTextProps {
  text: string
  radius?: number
  fontSize?: number
  className?: string
  duration?: string
}

export function CircularText({
  text,
  radius = 80,
  fontSize = 14,
  className = "",
  duration = "30s",
}: CircularTextProps) {
  const characters = React.useMemo(() => text.split(""), [text])
  const svgSize = React.useMemo(() => radius * 2, [radius])
  const pathRadius = React.useMemo(() => radius - 10, [radius])

  const pathD = React.useMemo(
    () =>
      `M ${radius}, ${radius} m -${pathRadius}, 0 a ${pathRadius},${pathRadius} 0 1,1 ${pathRadius * 2},0 a ${pathRadius},${pathRadius} 0 1,1 -${pathRadius * 2},0`,
    [radius, pathRadius],
  )

  return (
    <div className={`relative ${className}`} style={{ width: svgSize, height: svgSize }}>
      <svg
        width={svgSize}
        height={svgSize}
        className="animate-spin"
        style={{ animationDuration: duration, animationTimingFunction: "linear" }}
      >
        <defs>
          <path id="circle" d={pathD} />
        </defs>
        <text fontSize={fontSize} fill="currentColor" className="font-medium">
          <textPath href="#circle" startOffset="0%">
            {text}
          </textPath>
        </text>
      </svg>
    </div>
  )
}
