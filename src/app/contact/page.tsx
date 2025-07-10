"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin, Github, Linkedin, Instagram } from "lucide-react"
import Link from "next/link"
import { ContactForm } from "@/components/molecules/ContactForm"

export default function Contact() {
  const contactInfo = [
    { icon: Mail, title: "Email", value: "dimaspryga9@gmail.com", href: "mailto:dimaspryga9@gmail.com" },
    // { icon: Phone, title: "Phone", value: "+62 812-3456-7890", href: "tel:+6281234567890" },
    { icon: MapPin, title: "Location", value: "Bogor, Indonesia", href: "#" },
  ]

  const socialLinks = [
    { icon: Github, href: "https://github.com/dimaspryga", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/dimasprayogaakbar/", label: "LinkedIn" },
    { icon: Instagram, href: "https://Instagram.com/dimaspryga.a", label: "Instagram" },
  ]

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
              Get In <span className="gradient-text">Touch</span>
            </h1>
            <p className="max-w-2xl mx-auto text-base text-xl text-muted-foreground lg:text-lg">
              Have a project in mind or want to collaborate? I'd love to hear from you. Let's create something amazing
              together.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <ContactForm />
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div>
                <h2 className="mb-4 text-xl font-bold tracking-tight scroll-m-20 lg:text-2xl">Contact Information</h2>
                <div className="space-y-3">
                  {contactInfo.map((info, index) => (
                    <motion.div
                      key={info.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <Card className="p-4 transition-shadow hover:shadow-md">
                        <div className="flex items-center space-x-3">
                          <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary/10">
                            <info.icon className="w-4 h-4 text-primary" />
                          </div>
                          <div>
                            <h3 className="text-base font-semibold tracking-tight scroll-m-20">{info.title}</h3>
                            {info.href !== "#" ? (
                              <Link
                                href={info.href}
                                className="text-sm transition-colors text-muted-foreground hover:text-primary"
                              >
                                {info.value}
                              </Link>
                            ) : (
                              <p className="text-sm leading-7 text-muted-foreground">{info.value}</p>
                            )}
                          </div>
                        </div>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="mb-3 text-lg font-semibold tracking-tight scroll-m-20">Follow Me</h3>
                <div className="flex space-x-3">
                  {socialLinks.map((link, index) => (
                    <motion.div
                      key={link.label}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.8, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <Button variant="outline" size="icon" asChild>
                        <Link href={link.href} target="_blank" rel="noopener noreferrer" aria-label={link.label}>
                          <link.icon className="w-4 h-4" />
                        </Link>
                      </Button>
                    </motion.div>
                  ))}
                </div>
              </div>

              <Card className="p-5 border-blue-200 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 dark:border-blue-800">
                <h3 className="mb-2 text-base font-semibold tracking-tight scroll-m-20">Let's Work Together</h3>
                <p className="mb-3 text-sm leading-7 text-muted-foreground">
                  I'm always interested in new opportunities and exciting projects. Whether you have a specific project
                  in mind or just want to connect, I'd love to hear from you.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 text-xs rounded bg-white/50 dark:bg-black/20">
                    Available for freelance
                  </span>
                  <span className="px-2 py-1 text-xs rounded bg-white/50 dark:bg-black/20">Remote work</span>
                  <span className="px-2 py-1 text-xs rounded bg-white/50 dark:bg-black/20">
                    Full-time opportunities
                  </span>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
