"use client"

import type React from "react"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Send } from "lucide-react"
import { useFormData } from "@/hooks/useFormData"

const initialFormData = {
  name: "",
  email: "",
  subject: "",
  message: "",
}

export function ContactForm() {
  const { data: formData, handleChange } = useFormData(initialFormData)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
  }

  return (
    <Card className="p-6">
      <h2 className="scroll-m-20 text-xl lg:text-2xl font-bold tracking-tight mb-4">Send Me a Message</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-sm">
              Name
            </Label>
            <Input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your name"
              required
              className="text-sm"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email" className="text-sm">
              Email
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="your@email.com"
              required
              className="text-sm"
            />
          </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="subject" className="text-sm">
            Subject
          </Label>
          <Input
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="Project inquiry"
            required
            className="text-sm"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="message" className="text-sm">
            Message
          </Label>
          <Textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell me about your project..."
            rows={5}
            required
            className="text-sm"
          />
        </div>
        <Button type="submit" size="default" className="w-full group text-sm">
          <Send className="h-4 w-4 mr-2 group-hover:translate-x-1 transition-transform" />
          Send Message
        </Button>
      </form>
    </Card>
  )
}
