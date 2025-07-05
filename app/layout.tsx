import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { LoadingProgress } from "@/components/loading-progress"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  preload: true,
})

export const metadata: Metadata = {
  title: "Dimas Prayoga Akbar - Front-End Developer Portfolio",
  description:
    "Front-End Developer & UI/UX Designer Portfolio - Creating exceptional user experiences with modern web technologies",
  keywords: [
    "Dimas Prayoga Akbar",
    "Portfolio",
    "Front-End Developer",
    "UI/UX Designer",
    "React",
    "Next.js",
    "JavaScript",
  ],
  authors: [{ name: "Dimas Prayoga Akbar" }],
  openGraph: {
    title: "Dimas Prayoga Akbar - Front-End Developer Portfolio",
    description:
      "Front-End Developer & UI/UX Designer Portfolio - Creating exceptional user experiences with modern web technologies",
    type: "website",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className={inter.variable}>
      <body className={`${inter.className} font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange={false}>
          <div className="min-h-screen bg-background">
            <LoadingProgress />
            <Navbar />
            <main className="relative">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
