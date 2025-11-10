"use client"

import type * as React from "react"
import { Button } from "./button"
import { useState } from "react"

export function ContactForm() {
  const [isLoading, setIsLoading] = useState(false)
  const [message, setMessage] = useState("")

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)
    try {
      const formData = new FormData(e.currentTarget)
      const response = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify(Object.fromEntries(formData)),
      })
      if (response.ok) {
        setMessage("Thank you! We'll be in touch soon.")
        e.currentTarget.reset()
      }
    } catch (error) {
      setMessage("Error submitting form. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-lg mx-auto">
      <div>
        <label className="block text-sm font-medium mb-2">Name</label>
        <input
          name="name"
          required
          className="w-full px-4 py-2 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
          placeholder="Your name"
        />
      </div>
      <div>
        <label className="block text-sm font-medium mb-2">Email</label>
        <input
          name="email"
          type="email"
          required
          className="w-full px-4 py-2 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
          placeholder="your@email.com"
        />
      </div>
      <div>
        <label className="block text-sm font-medium mb-2">Message</label>
        <textarea
          name="message"
          required
          rows={4}
          className="w-full px-4 py-2 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
          placeholder="Your message"
        />
      </div>
      {message && (
        <p className={`text-sm ${message.includes("Thank you") ? "text-green-600" : "text-red-600"}`}>{message}</p>
      )}
      <Button type="submit" disabled={isLoading} className="w-full">
        {isLoading ? "Sending..." : "Send Message"}
      </Button>
    </form>
  )
}
