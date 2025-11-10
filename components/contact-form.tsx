"use client"

import type * as React from "react"
import { useState } from "react"
import { Button } from "./button"

export function ContactForm() {
  const [isLoading, setIsLoading] = useState(false)
  const [message, setMessage] = useState("")

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    // Grab the form BEFORE any awaits
    const form = e.currentTarget

    setIsLoading(true)
    setMessage("")

    try {
      const formData = new FormData(form)
      const payload = {
        ...Object.fromEntries(formData),
        submittedAt: new Date().toISOString(),
        source: "PrimeSwipe Contact Form",
      }

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      })

      const result = await response.json().catch(() => null)
      console.log("Contact API result:", result)

      if (response.ok) {
        // treat any 2xx as success
        setMessage("Thank you! We'll be in touch soon.")
        form.reset()
      } else {
        // show server message if available
        setMessage(result?.message || "Error submitting form. Please try again.")
      }
    } catch (error) {
      console.error("Contact form webhook error:", error)
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
          className="w-full px-4 py-2 rounded-lg border border-input bg-white focus:outline-none focus:ring-2 focus:ring-primary"
          placeholder="Your name"
        />
      </div>
      <div>
        <label className="block text-sm font-medium mb-2">Email</label>
        <input
          name="email"
          type="email"
          required
          className="w-full px-4 py-2 rounded-lg border border-input bg-white focus:outline-none focus:ring-2 focus:ring-primary"
          placeholder="your@email.com"
        />
      </div>
      <div>
        <label className="block text-sm font-medium mb-2">Message</label>
        <textarea
          name="message"
          required
          rows={4}
          className="w-full px-4 py-2 rounded-lg border border-input bg-white focus:outline-none focus:ring-2 focus:ring-primary"
          placeholder="Your message"
        />
      </div>

      {message && (
        <p
          className={`text-sm ${
            message.includes("Thank you") ? "text-green-600" : "text-red-600"
          }`}
        >
          {message}
        </p>
      )}

      <Button
        type="submit"
        disabled={isLoading}
        className="
          w-full rounded-full
          bg-gradient-to-r from-[#0B4AA8] to-[#1F6AD8]
          text-sm font-semibold tracking-tight
          shadow-md hover:shadow-lg
          hover:brightness-110
          disabled:opacity-70 disabled:cursor-not-allowed
          transition-all
        "
      >
        {isLoading ? "Sending..." : "Send Message"}
      </Button>
    </form>
  )
}
