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
      title: "E-Commerce Platform",
      description:
        "A full-stack e-commerce solution with React, Next.js, and Stripe integration. Features include product management, cart functionality, and secure payments.",
      image: "/placeholder.svg?height=300&width=400",
      technologies: ["Next.js", "React", "TypeScript", "Stripe", "PostgreSQL"],
      category: "Full Stack",
      github: "https://github.com",
      demo: "https://demo.com",
      featured: true,
    },
    {
      title: "Task Management App",
      description:
        "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      image: "/placeholder.svg?height=300&width=400",
      technologies: ["React", "Node.js", "Socket.io", "MongoDB"],
      category: "Full Stack",
      github: "https://github.com",
      demo: "https://demo.com",
      featured: true,
    },
    {
      title: "Portfolio Website",
      description:
        "A modern portfolio website built with Next.js, featuring smooth animations, dark mode, and responsive design.",
      image: "/placeholder.svg?height=300&width=400",
      technologies: ["Next.js", "Tailwind CSS", "Framer Motion"],
      category: "Frontend",
      github: "https://github.com",
      demo: "https://demo.com",
      featured: false,
    },
    {
      title: "Weather Dashboard",
      description:
        "A beautiful weather dashboard with location-based forecasts, interactive charts, and weather alerts.",
      image: "/placeholder.svg?height=300&width=400",
      technologies: ["React", "Chart.js", "Weather API"],
      category: "Frontend",
      github: "https://github.com",
      demo: "https://demo.com",
      featured: false,
    },
    {
      title: "Restaurant Management System",
      description:
        "A comprehensive restaurant management system with order tracking, inventory management, and analytics.",
      image: "/placeholder.svg?height=300&width=400",
      technologies: ["React", "Express.js", "MySQL", "JWT"],
      category: "Full Stack",
      github: "https://github.com",
      demo: "https://demo.com",
      featured: false,
    },
    {
      title: "Mobile Banking UI",
      description:
        "A modern mobile banking interface design with intuitive user experience and accessibility features.",
      image: "/placeholder.svg?height=300&width=400",
      technologies: ["Figma", "React Native", "UI/UX"],
      category: "Design",
      github: "https://github.com",
      demo: "https://demo.com",
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-4"
          >
            <h1 className="scroll-m-20 text-2xl lg:text-4xl font-extrabold tracking-tight">
              My <span className="gradient-text">Projects</span>
            </h1>
            <p className="text-xl text-muted-foreground text-base lg:text-lg max-w-2xl mx-auto">
              A collection of projects that showcase my skills in front-end development, UI/UX design, and
              problem-solving abilities.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="FEATURED"
            title="Featured Projects"
            subtitle="Some of my most impactful and challenging projects."
          />

          <div className="grid lg:grid-cols-2 gap-6">
            {featuredProjects.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} variant="featured" />
            ))}
          </div>
        </div>
      </section>

      {/* All Projects */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
                <Filter className="h-3 w-3 mr-2" />
                {category}
              </Button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} variant="grid" />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
