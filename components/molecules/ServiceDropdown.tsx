"use client"

import type React from "react"

import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"

interface Service {
  id: number
  icon: React.ComponentType<{ className?: string }>
  title: string
  description: string
}

interface ServiceDropdownProps {
  service: Service
  isExpanded: boolean
  onToggle: () => void
  index: number
}

export function ServiceDropdown({ service, isExpanded, onToggle, index }: ServiceDropdownProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      viewport={{ once: true }}
      className="border-b border-gray-800 dark:border-gray-700 last:border-b-0"
    >
      <div className="py-4 cursor-pointer group" onClick={onToggle}>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <service.icon className="h-5 w-5 text-gray-400" />
            <h3 className="scroll-m-20 text-lg lg:text-xl font-semibold tracking-tight text-white group-hover:text-purple-400 transition-colors">
              {service.title}
            </h3>
          </div>
          <motion.div animate={{ rotate: isExpanded ? 180 : 0 }} transition={{ duration: 0.3, ease: "easeInOut" }}>
            <ChevronDown className="h-4 w-4 text-gray-400" />
          </motion.div>
        </div>

        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, height: 0, y: -10 }}
              animate={{ opacity: 1, height: "auto", y: 0 }}
              exit={{ opacity: 0, height: 0, y: -10 }}
              transition={{
                duration: 0.4,
                ease: [0.4, 0.0, 0.2, 1],
                opacity: { duration: 0.3 },
                height: { duration: 0.4 },
              }}
              className="overflow-hidden"
            >
              <div className="mt-3 pl-8">
                <p className="leading-7 text-gray-300 text-sm lg:text-base leading-relaxed">{service.description}</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  )
}
