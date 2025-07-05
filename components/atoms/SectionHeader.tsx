"use client"

import { motion } from "framer-motion"

interface SectionHeaderProps {
  badge: string
  title: string
  subtitle?: string
  badgeColor?: string
}

export function SectionHeader({ badge, title, subtitle, badgeColor = "text-primary" }: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="text-center mb-12"
    >
      <div className="flex items-center justify-center mb-3">
        <span className={`${badgeColor} mr-2`}>✦</span>
        <p className={`${badgeColor} text-xs font-medium tracking-wider uppercase text-muted-foreground`}>{badge}</p>
      </div>
      <h2 className="scroll-m-20 text-2xl lg:text-3xl font-semibold tracking-tight mb-2">{title}</h2>
      {subtitle && <p className="text-sm lg:text-base text-muted-foreground">{subtitle}</p>}
    </motion.div>
  )
}
