"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Filter } from "lucide-react"
import { SectionHeader } from "@/components/atoms/SectionHeader"
import { ProjectCard } from "@/components/molecules/ProjectCard"
import { useFilter } from "@/hooks/useFilter"

export default function Projects() {
  const projects = [
    {
      title: "Kelana App",
      description:
        "Online Travel Booking Platform solution with React, Next.js, and Tailwind CSS. Features include product management, cart functionality, and transaction processing with payment methods.",
      image: "/kelana-app.png?height=300&width=400",
      technologies: ["Next.js", "React", "Tailwind CSS", "Node.js"],
      category: "Frontend",
      github: "#",
      demo: "https://kelana-app.vercel.app",
      featured: true,
    },
    {
      title: "Pabos Adventure",
      description:
        "Company Profile Website for Pabos Adventure, built with vanilla JavaScript, HTML, and CSS. Features include a responsive design, interactive elements, and a modern layout.",
      image: "/pabos.png?height=300&width=400",
      technologies: ["JavaScript", "HTML", "CSS"],
      category: "Frontend",
      github: "#",
      demo: "#",
      featured: true,
    },
    {
      title: "Portfolio Website",
      description:
        "A modern portfolio website built with Next.js, featuring smooth animations, dark mode, and responsive design.",
      image: "/porto-dimas.png?height=300&width=400",
      technologies: ["Next.js", "Tailwind CSS", "Framer Motion"],
      category: "Frontend",
      github: "#",
      demo: "https://dimasprayogaakbar.vercel.app",
      featured: false,
    },
  ]

  const categories = ["All", "Full Stack", "Frontend", "Design"]
  const featuredProjects = projects.filter((project) => project.featured)

  const {
    filter,
    setFilter,
    filteredItems: filteredProjects,
  } = useFilter(projects, (project, filterValue) => project.category === filterValue)

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-blue-950/20 dark:via-indigo-950/20 dark:to-purple-950/20">
        <div className="px-4 mx-auto text-center max-w-7xl sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-4"
          >
            <h1 className="text-2xl font-extrabold tracking-tight scroll-m-20 lg:text-4xl">
              My <span className="gradient-text">Projects</span>
            </h1>
            <p className="max-w-2xl mx-auto text-base text-xl text-muted-foreground lg:text-lg">
              A collection of projects that showcase my skills in front-end development, UI/UX design, and
              problem-solving abilities.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-16">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <SectionHeader
            badge="FEATURED"
            title="Featured Projects"
            subtitle="Some of my most impactful and challenging projects."
          />

          <div className="grid gap-6 lg:grid-cols-2">
            {featuredProjects.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} variant="featured" />
            ))}
          </div>
        </div>
      </section>

      {/* All Projects */}
      <section className="py-16 bg-muted/30">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <SectionHeader
            badge="ALL PROJECTS"
            title="All Projects"
            subtitle="Explore all my projects across different categories."
          />

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {categories.map((category) => (
              <Button
                key={category}
                variant={filter === category ? "default" : "outline"}
                size="sm"
                onClick={() => setFilter(category)}
                className="mb-2 text-xs"
              >
                <Filter className="w-3 h-3 mr-2" />
                {category}
              </Button>
            ))}
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} variant="grid" />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
