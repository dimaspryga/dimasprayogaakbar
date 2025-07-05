"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Mail, Heart } from "lucide-react"
import Link from "next/link"

export function Footer() {
  const socialLinks = [
    { icon: Github, href: "https://github.com", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: Mail, href: "mailto:dimas@example.com", label: "Email" },
  ]

  return (
    <footer className="border-t border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <span>Made with</span>
            <Heart className="h-4 w-4 text-red-500 fill-current" />
            <span>by Dimas Prayoga Akbar</span>
          </div>

          <div className="flex items-center space-x-4">
            {socialLinks.map((link, index) => (
              <motion.div
                key={link.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full hover:bg-accent transition-colors"
                  aria-label={link.label}
                >
                  <link.icon className="h-4 w-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-4 pt-4 border-t border-border/40 text-center text-sm text-muted-foreground">
          <p>&copy; 2024 Dimas Prayoga Akbar. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
