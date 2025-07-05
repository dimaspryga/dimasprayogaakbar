"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

interface Project {
  title: string
  description: string
  image: string
  technologies: string[]
  category: string
  github: string
  demo: string
}

interface ProjectCardProps {
  project: Project
  index: number
  variant?: "featured" | "grid"
}

export function ProjectCard({ project, index, variant = "grid" }: ProjectCardProps) {
  const isFeatured = variant === "featured"

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      viewport={{ once: true }}
      layout
    >
      <Card className={`overflow-hidden hover:shadow-xl transition-shadow group ${isFeatured ? "" : "h-full"}`}>
        <div className="relative overflow-hidden">
          <Image
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            width={400}
            height={300}
            className={`w-full object-cover group-hover:scale-105 transition-transform duration-300 ${
              isFeatured ? "h-40" : "h-32"
            }`}
          />
          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center space-x-3">
            <Button size="sm" variant="secondary" asChild>
              <Link href={project.github} target="_blank">
                <Github className="h-4 w-4 mr-2" />
                {isFeatured && "Code"}
              </Link>
            </Button>
            <Button size="sm" asChild>
              <Link href={project.demo} target="_blank">
                <ExternalLink className="h-4 w-4 mr-2" />
                {isFeatured && "Demo"}
              </Link>
            </Button>
          </div>
        </div>
        <div className={`${isFeatured ? "p-5" : "p-4"} flex flex-col h-full`}>
          <div className="flex items-center justify-between mb-2">
            <h3 className={`scroll-m-20 font-semibold tracking-tight ${isFeatured ? "text-lg" : "text-base"}`}>
              {project.title}
            </h3>
            <Badge variant={isFeatured ? "secondary" : "outline"} className="text-xs">
              {project.category}
            </Badge>
          </div>
          <p className={`text-muted-foreground mb-3 flex-grow leading-7 ${isFeatured ? "text-sm" : "text-xs"}`}>
            {project.description}
          </p>
          <div className="flex flex-wrap gap-1">
            {(isFeatured ? project.technologies : project.technologies.slice(0, 3)).map((tech) => (
              <Badge key={tech} variant={isFeatured ? "outline" : "secondary"} className="text-xs">
                {tech}
              </Badge>
            ))}
            {!isFeatured && project.technologies.length > 3 && (
              <Badge variant="secondary" className="text-xs">
                +{project.technologies.length - 3}
              </Badge>
            )}
          </div>
        </div>
      </Card>
    </motion.div>
  )
}
