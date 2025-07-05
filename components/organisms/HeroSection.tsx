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
    <section className="relative overflow-hidden py-6 lg:py-8 bg-gray-950 dark:bg-gray-950 text-white">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-950 to-black" />

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-72 h-72 bg-green-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-center min-h-[70vh]">
          {/* Left Content */}
          <div className="lg:col-span-8 space-y-6">
            {/* Greeting */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex items-center space-x-2"
            >
              <span className="text-lg">👋</span>
              <p className="text-gray-400 text-sm text-muted-foreground">Hey! It's me Dimas,</p>
            </motion.div>

            {/* Main Heading */}
            <div className="space-y-3">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                <h1 className="scroll-m-20 text-2xl lg:text-4xl xl:text-5xl font-extrabold tracking-tight leading-tight">
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
                <h1 className="scroll-m-20 text-2xl lg:text-4xl xl:text-5xl font-extrabold tracking-tight leading-tight">
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
                <h1 className="scroll-m-20 text-2xl lg:text-4xl xl:text-5xl font-extrabold tracking-tight leading-tight">
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
                    className="group flex items-center space-x-2 text-gray-400 hover:text-green-400 transition-colors duration-300"
                  >
                    <span className="text-xs font-medium tracking-wider uppercase">{link.name}</span>
                    <ExternalLink className="h-3 w-3 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right Content */}
          <div className="lg:col-span-4 space-y-6">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.9, duration: 0.8 }}
              className="space-y-4"
            >
              <p className="leading-7 text-gray-300 text-sm lg:text-base leading-relaxed">
                I work with brands globally to build pixel-perfect, engaging, and accessible digital experiences that
                drive results and achieve business goals.
              </p>

              <Button
                asChild
                size="default"
                className="group bg-transparent border-2 border-gray-600 hover:border-green-400 hover:bg-green-400/10 text-white hover:text-green-400 transition-all duration-300 px-4 py-2 text-sm font-medium"
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
