"use client"

import type React from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

interface AnimatedButtonProps {
  href: string
  children: React.ReactNode
  variant?: "default" | "outline" | "ghost"
  size?: "default" | "sm" | "lg"
  className?: string
  showArrow?: boolean
}

export function AnimatedButton({
  href,
  children,
  variant = "default",
  size = "default",
  className = "",
  showArrow = true,
}: AnimatedButtonProps) {
  return (
    <Button
      asChild
      variant={variant}
      size={size}
      className={`group ${variant === "default" ? "bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-700 hover:to-purple-600" : ""} ${className}`}
    >
      <Link href={href}>
        {children}
        {showArrow && (
          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
        )}
      </Link>
    </Button>
  )
}
