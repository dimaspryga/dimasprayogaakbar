"use client"

import { motion } from "framer-motion"
import { ExternalLink } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { GradientText } from "@/components/react-bits/gradient-text"

const socialLinks = [
  { name: "LINKEDIN", href: "https://linkedin.com" },
  { name: "GITHUB", href: "https://github.com" },
  { name: "INSTAGRAM", href: "https://instagram.com" },
  { name: "GMAIL", href: "mailto:dimas@example.com" },
]

export function HeroSection() {
  return (
    <section className="relative py-6 overflow-hidden lg:py-8 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-gray-950 dark:to-black">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30 dark:opacity-10">
        <div className="absolute rounded-full top-20 left-20 w-72 h-72 bg-purple-500/20 dark:bg-purple-500/20 blur-3xl" />
        <div className="absolute rounded-full bottom-20 right-20 w-96 h-96 bg-blue-500/10 dark:bg-blue-500/10 blur-3xl" />
        <div className="absolute w-64 h-64 transform -translate-x-1/2 -translate-y-1/2 rounded-full top-1/2 left-1/2 bg-purple-500/10 dark:bg-purple-500/10 blur-3xl" />
      </div>

      <div className="relative px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-center min-h-[70vh]">
          {/* Left Content */}
          <div className="space-y-6 lg:col-span-8">
            {/* Greeting */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex items-center space-x-2"
            >
              <span className="text-lg">👋</span>
              <p className="text-sm text-slate-600 dark:text-gray-400">Hey! It's me Dimas,</p>
            </motion.div>

            {/* Main Heading */}
            <div className="space-y-3">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                <h1 className="text-2xl font-extrabold leading-tight tracking-tight scroll-m-20 lg:text-4xl xl:text-5xl text-slate-900 dark:text-white">
                  Crafting{" "}
                  <GradientText
                    colors={["#8B5CF6", "#A855F7", "#C084FC", "#DDD6FE"]}
                    animationSpeed={3}
                    showBorder={false}
                  >
                    purpose driven
                  </GradientText>
                </h1>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                <h1 className="text-2xl font-extrabold leading-tight tracking-tight scroll-m-20 lg:text-4xl xl:text-5xl text-slate-900 dark:text-white">
                  <GradientText
                    colors={["#8B5CF6", "#A855F7", "#C084FC", "#DDD6FE"]}
                    animationSpeed={3}
                    showBorder={false}
                  >
                    experiences
                  </GradientText>{" "}
                  that inspire
                </h1>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.8 }}
              >
                <h1 className="text-2xl font-extrabold leading-tight tracking-tight scroll-m-20 lg:text-4xl xl:text-5xl text-slate-900 dark:text-white">
                  & engage.
                </h1>
              </motion.div>
            </div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
              className="flex flex-wrap gap-4 pt-4"
            >
              {socialLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.3 + index * 0.1 }}
                >
                  <Link
                    href={link.href}
                    target="_blank"
                    className="flex items-center space-x-2 transition-colors duration-300 group text-slate-600 hover:text-purple-600 dark:text-gray-400 dark:hover:text-purple-400"
                  >
                    <span className="text-xs font-medium tracking-wider uppercase">{link.name}</span>
                    <ExternalLink className="w-3 h-3 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right Content */}
          <div className="space-y-6 lg:col-span-4">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.9, duration: 0.8 }}
              className="space-y-4"
            >
              <p className="text-sm leading-relaxed leading-7 text-slate-700 dark:text-gray-300 lg:text-base">
                I work with brands globally to build pixel-perfect, engaging, and accessible digital experiences that
                drive results and achieve business goals.
              </p>

              <Button
                asChild
                size="default"
                className="px-4 py-2 text-sm font-medium transition-all duration-300 bg-transparent border-2 group border-slate-300 hover:border-purple-500 hover:bg-purple-50 text-slate-700 hover:text-purple-600 dark:border-gray-600 dark:hover:border-purple-400 dark:hover:bg-purple-400/10 dark:text-white dark:hover:text-purple-400"
              >
                <Link href="/about">
                  Know me better
                  <motion.div className="ml-2" whileHover={{ x: 4 }} transition={{ duration: 0.3 }}>
                    →
                  </motion.div>
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
