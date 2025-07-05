"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { Menu, X, ArrowRight, Sparkles } from "lucide-react"
import Image from "next/image"  

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
]

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false)
  const [scrolled, setScrolled] = React.useState(false)
  const pathname = usePathname()

  React.useEffect(() => {
    const handleScroll = () => {
      React.startTransition(() => {
        setScrolled(window.scrollY > 50)
      })
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = React.useCallback(() => {
    React.startTransition(() => {
      setIsOpen((prev) => !prev)
    })
  }, [])

  const closeMenu = React.useCallback(() => {
    React.startTransition(() => {
      setIsOpen(false)
    })
  }, [])

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.6, -0.05, 0.01, 0.99] }}
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          scrolled ? "bg-background/80 backdrop-blur-xl border-b border-border/50 shadow-lg" : "bg-transparent"
        }`}
      >
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="flex-shrink-0">
              <Link href="/" className="flex items-center space-x-3 group">
                <div className="relative">
                  <motion.div
                    className="flex items-center justify-center w-16 h-10 transition-all duration-300"
                    whileHover={{ rotate: 180 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Image
                      src="/logo.png"
                      alt="Logo"
                      width={40}
                      height={40}
                      className="hidden w-16 h-10 sm:block" />
                  </motion.div>
                </div>
              </Link>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="items-center hidden space-x-1 md:flex">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.2 }}
                >
                  <Link
                    href={item.href}
                    className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg group ${
                      pathname === item.href ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    <span className="relative z-10">{item.name}</span>

                    {/* Active indicator */}
                    {pathname === item.href && (
                      <motion.div
                        layoutId="navbar-indicator"
                        className="absolute inset-0 border rounded-lg bg-primary/10 border-primary/20"
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}

                    {/* Hover effect */}
                    <div className="absolute inset-0 transition-opacity duration-200 rounded-lg opacity-0 bg-muted/50 group-hover:opacity-100" />
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Right side */}
            <div className="flex items-center space-x-4">
              <ThemeToggle />

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 }}
                className="hidden md:block"
              >
                <Button
                  asChild
                  size="sm"
                  className="relative overflow-hidden transition-all duration-300 border-0 shadow-lg group bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-700 hover:to-purple-600 hover:shadow-xl"
                >
                  <Link href="/contact">
                    <span className="relative z-10 flex items-center">
                      Let's Talk
                      <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-200 group-hover:translate-x-1" />
                    </span>
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-purple-700 to-purple-600"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: "0%" }}
                      transition={{ duration: 0.3 }}
                    />
                  </Link>
                </Button>
              </motion.div>

              {/* Mobile menu button */}
              <Button variant="ghost" size="sm" onClick={toggleMenu} className="relative w-10 h-10 p-0 md:hidden">
                <AnimatePresence mode="wait">
                  {isOpen ? (
                    <motion.div
                      key="close"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <X size={18} />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Menu size={18} />
                    </motion.div>
                  )}
                </AnimatePresence>
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="border-t md:hidden bg-background/95 backdrop-blur-xl border-border/50"
            >
              <div className="px-4 py-6 space-y-3">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      href={item.href}
                      onClick={closeMenu}
                      className={`block px-4 py-3 text-base font-medium transition-all duration-300 rounded-lg ${
                        pathname === item.href
                          ? "text-foreground bg-primary/10 border border-primary/20"
                          : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                      }`}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="pt-4 border-t border-border/50"
                >
                  <Button asChild className="w-full bg-gradient-to-r from-purple-600 to-purple-500">
                    <Link href="/contact" onClick={closeMenu}>
                      Let's Talk
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  )
}
