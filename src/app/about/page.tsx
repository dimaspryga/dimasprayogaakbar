"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Calendar, MapPin, Award, Users, Star, GraduationCap, BookOpen } from "lucide-react"
import Image from "next/image"
import { CountUp } from "@/components/react-bits/count-up"
import { CircularText } from "@/components/react-bits/circular-text"
import { ScrollVelocity } from "@/components/react-bits/scroll-velocity"

export default function About() {
  const skills = [
    { name: "React/Next.js", level: 95 },
    { name: "JavaScript/TypeScript", level: 92 },
    { name: "HTML/CSS", level: 98 },
    { name: "Tailwind CSS", level: 90 },
    { name: "UI/UX Design", level: 88 },
    { name: "Performance Optimization", level: 85 },
  ]

  const education = [
    {
      degree: "Front-End Web Development Bootcamp",
      institution: "Dibimbing.id",
      period: "2025",
      description:
        "Intensive 16-week program covering modern web technologies including React, Next.js, Tailwind CSS, and TypeScript.",
      gpa: "Distinction",
    },
        {
      degree: "Bachelor of Computer Science",
      institution: "Binaniaga University of Indonesia",
      period: "2018 - 2022",
      description: "Focused on software engineering, web development, and computer graphics. Graduated with honors.",
      gpa: "3.09/4.0",
    },
  ]

  const experience = [
    {
      title: "Technician",
      company: "Lantian Computer.",
      period: "Jul 2024 - Nov 2024",
      description:
        "Diagnose chromebook problems and fix them, Perform chromebook chip reset 100+ units / day, Check and perform maintenance and software updates regularly.",
    },
    {
      title: "Freelance Web Developer",
      company: "PABOS Adventure Bogor.",
      period: "Jan 2024 - May 2024",
      description:
        "Developed and maintained responsive web applications using modern front-end technologies. Collaborated with design teams to implement pixel-perfect UIs and optimize user experience across multiple devices.",
    },
  ]

  const achievements = [
    { icon: Award, title: 5, suffix: "+", description: "Projects completed", duration: 2.5 },
    { icon: Users, title: 30, suffix: "+", description: "Satisfied clients", duration: 2 },
    { icon: Calendar, title: 1, suffix: "+", description: "Years of experience", duration: 1.5 },
  ]


  return (
    <div className="min-h-screen pt-16 bg-background font-inter">
      {/* Hero Section */}
      <section className="relative py-16 overflow-hidden lg:py-20 bg-background">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-blue-950/20 dark:via-indigo-950/20 dark:to-purple-950/20" />

        {/* Floating Elements */}
        <div className="absolute w-20 h-20 rounded-full top-20 left-10 bg-blue-200/30 dark:bg-blue-800/30 blur-xl animate-pulse"></div>
        <div className="absolute w-32 h-32 delay-1000 rounded-full bottom-20 right-10 bg-purple-200/30 dark:bg-purple-800/30 blur-xl animate-pulse"></div>

        <div className="relative px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="space-y-6"
            >
              <div className="space-y-4">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                >
                  <div className="flex items-center mb-3">
                    <Star className="w-4 h-4 mr-2 text-primary" />
                    <p className="text-xs font-medium tracking-wider uppercase text-primary text-muted-foreground">
                      ABOUT ME
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.8 }}
                >
                  <h1 className="text-2xl font-extrabold leading-tight tracking-tight scroll-m-20 lg:text-4xl">
                    Crafting Digital
                    <span className="block gradient-text">Experiences</span>
                  </h1>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                >
                  <p className="text-base text-xl leading-relaxed text-muted-foreground lg:text-lg">
                    I'm a passionate Front-End Developer with over 1 years of experience creating
                    digital solutions that make a difference. I love turning complex problems into simple, beautiful,
                    and intuitive user interfaces using modern web technologies.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.8 }}
                  className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground"
                >
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-2 text-primary" />
                    Bogor, Indonesia
                  </div>
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-2 text-primary" />
                    Available for work
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Right Profile Image */}
            <motion.div
              initial={{ opacity: 0, x: 100, rotate: 10 }}
              animate={{ opacity: 1, x: 0, rotate: 0 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
              className="relative flex justify-center lg:justify-end"
            >
              <div className="relative">
                {/* Circular Text */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8, duration: 0.8 }}
                  className="absolute z-10 -top-6 -left-6"
                >
                  <CircularText
                    text="FRONT-END DEVELOPER • LET'S TALK • AVAILABLE FOR WORK •"
                    radius={71}
                    fontSize={12}
                    duration="45s"
                    className="text-primary"
                  />
                </motion.div>

                {/* Profile Image Container */}
                <motion.div
                  initial={{ scale: 0.8 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.6, duration: 0.8, type: "spring" }}
                  className="relative w-64 h-64 lg:w-80 lg:h-80"
                >
                  {/* Background Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-purple-600/20 rounded-[3rem] blur-2xl"></div>

                  {/* Main Image */}
                  <div className="relative w-full h-full rounded-[3rem] overflow-hidden shadow-2xl transform hover:rotate-2 transition-transform duration-500 group">
                    <Image
                      src="/dimas.png?height=400&width=400 || /placeholder.svg?height=400&width=400"
                      alt="Dimas Prayoga Akbar"
                      width={400}
                      height={400}
                      className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 transition-opacity duration-300 opacity-0 bg-gradient-to-t from-black/20 via-transparent to-transparent group-hover:opacity-100"></div>
                  </div>

                  {/* Floating Decorative Elements */}
                  <motion.div
                    animate={{ y: [-8, 8, -8] }}
                    transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                    className="absolute w-6 h-6 rounded-full shadow-lg -top-3 -right-3 bg-gradient-to-br from-blue-400 to-blue-600"
                  ></motion.div>
                  <motion.div
                    animate={{ y: [8, -8, 8] }}
                    transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 1 }}
                    className="absolute w-4 h-4 rounded-full shadow-lg -bottom-3 -left-3 bg-gradient-to-br from-purple-400 to-purple-600"
                  ></motion.div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-16 bg-muted/30">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <div className="flex items-center justify-center mb-3">
              <span className="mr-2 text-primary">✦</span>
              <p className="text-xs font-medium tracking-wider uppercase text-primary text-muted-foreground">
                ACHIEVEMENTS
              </p>
            </div>
            <h2 className="text-2xl font-semibold tracking-tight scroll-m-20 lg:text-3xl">My Journey in Numbers</h2>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-3">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.description}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 text-center transition-all duration-300 border-2 hover:shadow-xl group hover:border-primary/20">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="flex items-center justify-center w-12 h-12 mx-auto mb-4 transition-colors bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl group-hover:from-primary/30 group-hover:to-primary/20"
                  >
                    <achievement.icon className="w-6 h-6 text-primary" />
                  </motion.div>
                  <h3 className="mb-2 text-2xl font-semibold tracking-tight scroll-m-20">
                    <CountUp end={achievement.title} duration={achievement.duration} suffix={achievement.suffix} />
                  </h3>
                  <p className="text-sm font-medium leading-7 text-muted-foreground">{achievement.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-16 bg-background">
        <div className="max-w-4xl px-4 mx-auto sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <div className="flex items-center justify-center mb-3">
              <span className="mr-2 text-primary">✦</span>
              <p className="text-xs font-medium tracking-wider uppercase text-primary text-muted-foreground">
                EDUCATION
              </p>
            </div>
            <h2 className="text-2xl font-semibold tracking-tight scroll-m-20 lg:text-3xl">Educational Background</h2>
          </motion.div>

          <div className="space-y-6">
            {education.map((edu, index) => (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 transition-all duration-300 border-2 hover:shadow-xl group hover:border-primary/20">
                  <div className="flex items-start space-x-4">
                    <div className="flex items-center justify-center flex-shrink-0 w-10 h-10 transition-colors rounded-lg bg-gradient-to-br from-primary/20 to-primary/10 group-hover:from-primary/30 group-hover:to-primary/20">
                      {index === 0 ? (
                        <GraduationCap className="w-5 h-5 text-primary" />
                      ) : (
                        <BookOpen className="w-5 h-5 text-primary" />
                      )}
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col mb-3 md:flex-row md:items-center md:justify-between">
                        <div>
                          <h3 className="mb-1 text-lg font-semibold tracking-tight scroll-m-20">{edu.degree}</h3>
                          <p className="text-sm font-medium leading-7 text-primary">{edu.institution}</p>
                        </div>
                        <div className="flex flex-col mt-2 md:items-end md:mt-0">
                          <Badge variant="outline" className="mb-1 text-xs">
                            {edu.period}
                          </Badge>
                          <Badge variant="secondary" className="text-xs">
                            {edu.gpa}
                          </Badge>
                        </div>
                      </div>
                      <p className="text-sm leading-relaxed leading-7 text-muted-foreground">{edu.description}</p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* Experience */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-4xl px-4 mx-auto sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <div className="flex items-center justify-center mb-3">
              <span className="mr-2 text-primary">✦</span>
              <p className="text-xs font-medium tracking-wider uppercase text-primary text-muted-foreground">
                EXPERIENCE
              </p>
            </div>
            <h2 className="text-2xl font-semibold tracking-tight scroll-m-20 lg:text-3xl">Work Experience</h2>
          </motion.div>

          <div className="space-y-6">
            {experience.map((exp, index) => (
              <motion.div
                key={exp.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 transition-all duration-300 border-2 hover:shadow-xl group hover:border-primary/20">
                  <div className="flex flex-col mb-4 md:flex-row md:items-center md:justify-between">
                    <div>
                      <h3 className="mb-1 text-lg font-semibold tracking-tight scroll-m-20">{exp.title}</h3>
                      <p className="text-sm font-medium leading-7 text-primary">{exp.company}</p>
                    </div>
                    <Badge variant="outline" className="mt-2 text-xs font-medium md:mt-0">
                      {exp.period}
                    </Badge>
                  </div>
                  <p className="text-sm leading-relaxed leading-7 text-muted-foreground">{exp.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

            {/* Skills */}
      <section className="py-16 bg-background">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <div className="flex items-center justify-center mb-3">
              <span className="mr-2 text-primary">✦</span>
              <p className="text-xs font-medium tracking-wider uppercase text-primary text-muted-foreground">SKILLS</p>
            </div>
            <h2 className="text-2xl font-semibold tracking-tight scroll-m-20 lg:text-3xl">Skills & Expertise</h2>
          </motion.div>

          <div className="grid max-w-4xl gap-6 mx-auto md:grid-cols-2">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="space-y-2"
              >
                <div className="flex items-center justify-between">
                  <span className="text-base font-semibold">{skill.name}</span>
                  <p className="text-sm font-medium text-muted-foreground">{skill.level}%</p>
                </div>
                <Progress value={skill.level} className="h-2" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  )
}
