"use client"

import type * as React from "react"
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
      className="border-b border-slate-200 dark:border-gray-800 last:border-b-0"
    >
      <div className="py-4 cursor-pointer group" onClick={onToggle}>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <service.icon className="w-5 h-5 text-slate-500 dark:text-gray-400" />
            <h3 className="text-lg font-semibold tracking-tight transition-colors scroll-m-20 lg:text-xl text-slate-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400">
              {service.title}
            </h3>
          </div>
          <motion.div animate={{ rotate: isExpanded ? 180 : 0 }} transition={{ duration: 0.3, ease: "easeInOut" }}>
            <ChevronDown className="w-4 h-4 text-slate-500 dark:text-gray-400" />
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
              <div className="pl-8 mt-3">
                <p className="text-sm leading-relaxed leading-7 text-slate-600 dark:text-gray-300 lg:text-base">
                  {service.description}
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  )
}
