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
      degree: "Bachelor of Computer Science",
      institution: "University of Indonesia",
      period: "2017 - 2021",
      description: "Focused on software engineering, web development, and computer graphics. Graduated with honors.",
      gpa: "3.8/4.0",
    },
    {
      degree: "Full Stack Web Development Bootcamp",
      institution: "Hacktiv8 Indonesia",
      period: "2021",
      description:
        "Intensive 16-week program covering modern web technologies including React, Node.js, and databases.",
      gpa: "Distinction",
    },
    {
      degree: "UI/UX Design Certification",
      institution: "Google UX Design Certificate",
      period: "2022",
      description: "Comprehensive program covering user research, wireframing, prototyping, and usability testing.",
      gpa: "Certified",
    },
  ]

  const experience = [
    {
      title: "Senior Front-End Developer",
      company: "Tech Innovators Inc.",
      period: "2022 - Present",
      description:
        "Leading front-end development of scalable web applications using React, Next.js, and TypeScript. Mentoring junior developers and implementing modern UI/UX design patterns with focus on performance and accessibility.",
    },
    {
      title: "Front-End Developer",
      company: "Digital Solutions Ltd.",
      period: "2020 - 2022",
      description:
        "Developed and maintained responsive web applications using modern front-end technologies. Collaborated with design teams to implement pixel-perfect UIs and optimize user experience across multiple devices.",
    },
    {
      title: "Junior Front-End Developer",
      company: "StartupXYZ",
      period: "2019 - 2020",
      description:
        "Built responsive web applications and improved user interfaces. Worked with HTML, CSS, JavaScript, and React to create engaging user experiences and implement modern design systems.",
    },
  ]

  const achievements = [
    { icon: Award, title: 50, suffix: "+", description: "Projects completed", duration: 2.5 },
    { icon: Users, title: 30, suffix: "+", description: "Satisfied clients", duration: 2 },
    { icon: Calendar, title: 5, suffix: "+", description: "Years of experience", duration: 1.5 },
  ]

  const testimonials = [
    "Amazing developer with great attention to detail",
    "Delivered exceptional results on time",
    "Highly recommended for complex projects",
    "Professional and creative approach",
    "Outstanding communication skills",
  ]

  return (
    <div className="min-h-screen pt-16 bg-background font-inter">
      {/* Hero Section */}
      <section className="py-16 lg:py-20 relative overflow-hidden bg-background">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-blue-950/20 dark:via-indigo-950/20 dark:to-purple-950/20" />

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-blue-200/30 dark:bg-blue-800/30 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-purple-200/30 dark:bg-purple-800/30 rounded-full blur-xl animate-pulse delay-1000"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
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
                    <p className="text-primary text-xs font-medium tracking-wider uppercase text-muted-foreground">
                      ABOUT ME
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.8 }}
                >
                  <h1 className="scroll-m-20 text-2xl lg:text-4xl font-extrabold tracking-tight leading-tight">
                    Crafting Digital
                    <span className="block gradient-text">Experiences</span>
                  </h1>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                >
                  <p className="text-xl text-muted-foreground text-base lg:text-lg leading-relaxed">
                    I'm a passionate Front-End Developer and UI/UX Designer with over 5 years of experience creating
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
                    <MapPin className="h-4 w-4 mr-2 text-primary" />
                    Jakarta, Indonesia
                  </div>
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-2 text-primary" />
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
                  className="absolute -top-6 -left-6 z-10"
                >
                  <CircularText
                    text="FRONT-END DEVELOPER • UI/UX DESIGNER • CREATIVE THINKER • "
                    radius={120}
                    fontSize={10}
                    duration="45s"
                    className="text-primary/60"
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
                      src="/placeholder.svg?height=400&width=400"
                      alt="Dimas Prayoga Akbar"
                      width={400}
                      height={400}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>

                  {/* Floating Decorative Elements */}
                  <motion.div
                    animate={{ y: [-8, 8, -8] }}
                    transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                    className="absolute -top-3 -right-3 w-6 h-6 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full shadow-lg"
                  ></motion.div>
                  <motion.div
                    animate={{ y: [8, -8, 8] }}
                    transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 1 }}
                    className="absolute -bottom-3 -left-3 w-4 h-4 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full shadow-lg"
                  ></motion.div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="flex items-center justify-center mb-3">
              <span className="text-primary mr-2">✦</span>
              <p className="text-primary text-xs font-medium tracking-wider uppercase text-muted-foreground">
                ACHIEVEMENTS
              </p>
            </div>
            <h2 className="scroll-m-20 text-2xl lg:text-3xl font-semibold tracking-tight">My Journey in Numbers</h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.description}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 text-center hover:shadow-xl transition-all duration-300 group border-2 hover:border-primary/20">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="w-12 h-12 bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:from-primary/30 group-hover:to-primary/20 transition-colors"
                  >
                    <achievement.icon className="h-6 w-6 text-primary" />
                  </motion.div>
                  <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight mb-2">
                    <CountUp end={achievement.title} duration={achievement.duration} suffix={achievement.suffix} />
                  </h3>
                  <p className="leading-7 text-muted-foreground font-medium text-sm">{achievement.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-16 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="flex items-center justify-center mb-3">
              <span className="text-primary mr-2">✦</span>
              <p className="text-primary text-xs font-medium tracking-wider uppercase text-muted-foreground">
                EDUCATION
              </p>
            </div>
            <h2 className="scroll-m-20 text-2xl lg:text-3xl font-semibold tracking-tight">Educational Background</h2>
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
                <Card className="p-6 hover:shadow-xl transition-all duration-300 group border-2 hover:border-primary/20">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-primary/20 to-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:from-primary/30 group-hover:to-primary/20 transition-colors">
                      {index === 0 ? (
                        <GraduationCap className="h-5 w-5 text-primary" />
                      ) : (
                        <BookOpen className="h-5 w-5 text-primary" />
                      )}
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                        <div>
                          <h3 className="scroll-m-20 text-lg font-semibold tracking-tight mb-1">{edu.degree}</h3>
                          <p className="leading-7 text-primary font-medium text-sm">{edu.institution}</p>
                        </div>
                        <div className="flex flex-col md:items-end mt-2 md:mt-0">
                          <Badge variant="outline" className="mb-1 text-xs">
                            {edu.period}
                          </Badge>
                          <Badge variant="secondary" className="text-xs">
                            {edu.gpa}
                          </Badge>
                        </div>
                      </div>
                      <p className="leading-7 text-muted-foreground leading-relaxed text-sm">{edu.description}</p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Scroll */}
      <section className="py-12 bg-gray-900 dark:bg-gray-950 text-white">
        <div className="mb-6 text-center">
          <div className="flex items-center justify-center mb-3">
            <span className="text-green-400 mr-2">✦</span>
            <p className="text-green-400 text-xs font-medium tracking-wider uppercase text-muted-foreground">
              TESTIMONIALS
            </p>
          </div>
          <h3 className="scroll-m-20 text-xl font-bold tracking-tight text-white">What Clients Say</h3>
        </div>
        <ScrollVelocity velocity={10} className="flex items-center">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="mx-6 flex items-center space-x-3">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 fill-current" />
                ))}
              </div>
              <span className="text-sm text-gray-300 italic font-medium">"{testimonial}"</span>
            </div>
          ))}
        </ScrollVelocity>
      </section>

      {/* Skills */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="flex items-center justify-center mb-3">
              <span className="text-primary mr-2">✦</span>
              <p className="text-primary text-xs font-medium tracking-wider uppercase text-muted-foreground">SKILLS</p>
            </div>
            <h2 className="scroll-m-20 text-2xl lg:text-3xl font-semibold tracking-tight">Skills & Expertise</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="space-y-2"
              >
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-base">{skill.name}</span>
                  <p className="text-sm font-medium text-muted-foreground">{skill.level}%</p>
                </div>
                <Progress value={skill.level} className="h-2" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="flex items-center justify-center mb-3">
              <span className="text-primary mr-2">✦</span>
              <p className="text-primary text-xs font-medium tracking-wider uppercase text-muted-foreground">
                EXPERIENCE
              </p>
            </div>
            <h2 className="scroll-m-20 text-2xl lg:text-3xl font-semibold tracking-tight">Work Experience</h2>
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
                <Card className="p-6 hover:shadow-xl transition-all duration-300 group border-2 hover:border-primary/20">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="scroll-m-20 text-lg font-semibold tracking-tight mb-1">{exp.title}</h3>
                      <p className="leading-7 text-primary font-medium text-sm">{exp.company}</p>
                    </div>
                    <Badge variant="outline" className="mt-2 md:mt-0 font-medium text-xs">
                      {exp.period}
                    </Badge>
                  </div>
                  <p className="leading-7 text-muted-foreground leading-relaxed text-sm">{exp.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
