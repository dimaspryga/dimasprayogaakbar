"use client"

import { motion } from "framer-motion"
import { Code, Palette, Zap } from "lucide-react"
import Image from "next/image"
import { useState } from "react"
import { CardStack } from "@/components/react-bits/card-stack"
import { ScrollVelocity } from "@/components/react-bits/scroll-velocity"
import { GradientText } from "@/components/react-bits/gradient-text"
import { Marquee } from "@/components/react-bits/marquee"
import { HeroSection } from "@/components/organisms/HeroSection"
import { SectionHeader } from "@/components/atoms/SectionHeader"
import { AnimatedButton } from "@/components/atoms/AnimatedButton"
import { ServiceDropdown } from "@/components/molecules/ServiceDropdown"

export default function Home() {
  const [expandedService, setExpandedService] = useState<number | null>(null)

  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Next.js",
    "Tailwind CSS",
    "TypeScript",
    "Node.js",
    "Framer Motion",
    "Figma",
    "Git",
    "Responsive Design",
    "UI/UX Design",
    "Performance Optimization",
  ]

  const techStackLogos = [
    { name: "HTML", icon: "🌐", color: "#E34F26" },
    { name: "CSS", icon: "🎨", color: "#1572B6" },
    { name: "JavaScript", icon: "⚡", color: "#F7DF1E" },
    { name: "React", icon: "⚛️", color: "#61DAFB" },
    { name: "Next.js", icon: "▲", color: "#000000" },
    { name: "Tailwind", icon: "💨", color: "#06B6D4" },
    { name: "TypeScript", icon: "📘", color: "#3178C6" },
    { name: "Node.js", icon: "🟢", color: "#339933" },
    { name: "Figma", icon: "🎯", color: "#F24E1E" },
    { name: "Git", icon: "📦", color: "#F05032" },
    { name: "Framer", icon: "🎭", color: "#0055FF" },
    { name: "Vite", icon: "⚡", color: "#646CFF" },
  ]

  const services = [
    {
      id: 1,
      icon: Code,
      title: "Front-End Development",
      description:
        "I create responsive and interactive web applications using modern technologies like React, Next.js, and TypeScript. I focus on performance optimization, accessibility, and creating seamless user experiences across all devices.",
    },
    {
      id: 2,
      icon: Palette,
      title: "UI/UX Design",
      description:
        "I design intuitive and visually appealing interfaces that prioritize user experience. Using tools like Figma, I create wireframes, prototypes, and design systems that bring ideas to life with beautiful and functional designs.",
    },
    {
      id: 3,
      icon: Zap,
      title: "Performance Optimization",
      description:
        "I optimize web applications for speed and performance using best practices like code splitting, lazy loading, and modern build tools. I ensure your website loads fast and provides an excellent user experience.",
    },
  ]

  const projectCards = [
    { id: 1, label: "Customizable" },
    { id: 2, label: "Reliable" },
    { id: 3, label: "Smooth" },
    { id: 4, label: "Modern" },
  ]

  const handleServiceToggle = (serviceId: number) => {
    setExpandedService(expandedService === serviceId ? null : serviceId)
  }

  return (
    <div className="min-h-screen pt-16 bg-background font-inter">
      <HeroSection />

      {/* Technologies Section */}
      <section className="py-16 bg-muted/30">
        <div className="w-full">
          <ScrollVelocity velocity={1} className="font-bold tracking-[-0.02em] drop-shadow-sm">
            {skills.map((skill, index) => (
              <span
                key={index}
                className="mx-6 text-2xl transition-colors lg:text-4xl text-muted-foreground/60 hover:text-primary/80"
              >
                {skill}
              </span>
            ))}
          </ScrollVelocity>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-16 lg:py-20 bg-background">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <SectionHeader badge="PORTFOLIO" title="Featured Projects" />

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <CardStack title="Projects have never looked so good" subtitle="Just look at it go!" cards={projectCards} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <AnimatedButton
              href="/projects"
              variant="outline"
              className="px-6 py-2 text-sm font-medium bg-transparent border-primary/20 hover:bg-primary/10 hover:border-primary/40"
            >
              View All Projects
            </AnimatedButton>
          </motion.div>
        </div>
      </section>

      {/* Areas of Expertise */}
      <section className="py-16 text-white bg-gray-900 dark:bg-gray-950">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <SectionHeader badge="SPECIALITY" title="Areas of Expertise" badgeColor="text-purple-400" />

          <div className="grid items-start gap-12 lg:grid-cols-2">
            {/* Left Side - Services */}
            <div className="space-y-3">
              {services.map((service, index) => (
                <ServiceDropdown
                  key={service.id}
                  service={service}
                  isExpanded={expandedService === service.id}
                  onToggle={() => handleServiceToggle(service.id)}
                  index={index}
                />
              ))}
            </div>

            {/* Right Side - Fixed Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="relative lg:sticky lg:top-8"
            >
              <div className="relative overflow-hidden rounded-2xl">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-07-05%20145357-IfacaMR6bjnUgpJQvj4qxaaVsebqoq.png"
                  alt="Workspace with laptop showing code"
                  width={600}
                  height={400}
                  className="object-cover w-full h-auto"
                />
              </div>
            </motion.div>
          </div>

          {/* Tech Stack Logos Marquee */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="mt-12"
          >
            <Marquee speed={30} className="py-3">
              {techStackLogos.map((tech, index) => (
                <div key={index} className="flex items-center mx-4 space-x-2 whitespace-nowrap">
                  <div
                    className="flex items-center justify-center w-6 h-6 text-xs font-medium text-white rounded-full"
                    style={{ backgroundColor: tech.color }}
                  >
                    {tech.icon}
                  </div>
                  <span className="text-sm font-medium text-gray-300">{tech.name}</span>
                </div>
              ))}
            </Marquee>
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-background">
        <div className="max-w-4xl px-4 mx-auto text-center sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <SectionHeader badge="GET IN TOUCH" title="" />
            <h1 className="text-2xl font-extrabold leading-tight tracking-tight scroll-m-20 lg:text-4xl">
              Ready to Start Your Next{" "}
              <GradientText colors={["#8B5CF6", "#A855F7", "#C084FC", "#DDD6FE"]} animationSpeed={2} showBorder={false}>
                Project?
              </GradientText>
            </h1>
            <p className="max-w-2xl mx-auto text-base text-xl text-muted-foreground lg:text-lg">
              Let's work together to bring your ideas to life with cutting-edge technology and exceptional design.
            </p>
            <AnimatedButton href="/contact" className="px-6 py-2 text-sm font-medium group">
              Get In Touch
            </AnimatedButton>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
