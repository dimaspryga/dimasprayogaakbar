"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from "lucide-react"
import Link from "next/link"
import { ContactForm } from "@/components/molecules/ContactForm"

export default function Contact() {
  const contactInfo = [
    { icon: Mail, title: "Email", value: "dimas@example.com", href: "mailto:dimas@example.com" },
    { icon: Phone, title: "Phone", value: "+62 812-3456-7890", href: "tel:+6281234567890" },
    { icon: MapPin, title: "Location", value: "Jakarta, Indonesia", href: "#" },
  ]

  const socialLinks = [
    { icon: Github, href: "https://github.com", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
  ]

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
              Get In <span className="gradient-text">Touch</span>
            </h1>
            <p className="text-xl text-muted-foreground text-base lg:text-lg max-w-2xl mx-auto">
              Have a project in mind or want to collaborate? I'd love to hear from you. Let's create something amazing
              together.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
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
                <h2 className="scroll-m-20 text-xl lg:text-2xl font-bold tracking-tight mb-4">Contact Information</h2>
                <div className="space-y-3">
                  {contactInfo.map((info, index) => (
                    <motion.div
                      key={info.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <Card className="p-4 hover:shadow-md transition-shadow">
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                            <info.icon className="h-4 w-4 text-primary" />
                          </div>
                          <div>
                            <h3 className="scroll-m-20 text-base font-semibold tracking-tight">{info.title}</h3>
                            {info.href !== "#" ? (
                              <Link
                                href={info.href}
                                className="text-muted-foreground hover:text-primary transition-colors text-sm"
                              >
                                {info.value}
                              </Link>
                            ) : (
                              <p className="leading-7 text-muted-foreground text-sm">{info.value}</p>
                            )}
                          </div>
                        </div>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="scroll-m-20 text-lg font-semibold tracking-tight mb-3">Follow Me</h3>
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
                          <link.icon className="h-4 w-4" />
                        </Link>
                      </Button>
                    </motion.div>
                  ))}
                </div>
              </div>

              <Card className="p-5 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 border-blue-200 dark:border-blue-800">
                <h3 className="scroll-m-20 text-base font-semibold tracking-tight mb-2">Let's Work Together</h3>
                <p className="leading-7 text-muted-foreground mb-3 text-sm">
                  I'm always interested in new opportunities and exciting projects. Whether you have a specific project
                  in mind or just want to connect, I'd love to hear from you.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs bg-white/50 dark:bg-black/20 px-2 py-1 rounded">
                    Available for freelance
                  </span>
                  <span className="text-xs bg-white/50 dark:bg-black/20 px-2 py-1 rounded">Remote work</span>
                  <span className="text-xs bg-white/50 dark:bg-black/20 px-2 py-1 rounded">
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
