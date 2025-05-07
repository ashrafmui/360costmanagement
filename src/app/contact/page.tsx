"use client"

import type React from "react"

import { useState } from "react"
import {PhoneIcon, MailIcon, ClockIcon, CheckCircleIcon, PrinterIcon} from "lucide-react"

export default function ContactPage() {
  const [formState, setFormState] = useState<"idle" | "submitting" | "success" | "error">("idle")
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setFormState("submitting")

    // Simulate form submission
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500))
      setFormState("success")
      // Reset form after successful submission
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      })
    } catch (error) {
      setFormState("error")
    }
  }

  return (
    <main className="flex min-h-screen flex-col items-center">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-[#f8ffcc]">
        <div className="container px-4 md:px-6 mx-auto text-center">
          <div className="flex flex-col items-center space-y-4">
            <h1 className="text-5xl font-bold tracking-tighter sm:text-6xl">Contact Us</h1>
            <p className="max-w-[700px] text-xl text-gray-700 md:text-2xl">Get in touch with our financial experts</p>
            <p className="max-w-[700px] text-gray-600 md:text-lg">
              We&apos;re here to answer your questions and help your business thrive.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form and Info Section */}
      <section className="w-full py-12 md:py-24">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {/* Contact Form */}
            <div className="rounded-lg border bg-card p-8">
              <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>

              {formState === "success" ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="rounded-full bg-green-100 p-3 mb-4">
                    <CheckCircleIcon className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Message Sent Successfully!</h3>
                  <p className="text-gray-600 mb-6">
                    Thank you for reaching out. One of our team members will get back to you shortly.
                  </p>
                  <button
                    onClick={() => setFormState("idle")}
                    className="inline-flex h-10 items-center justify-center rounded-md bg-[#f8ffcc] px-8 text-sm font-medium text-gray-900 shadow transition-colors hover:bg-[#e6f0b0] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <div className="space-y-2">
                      <label
                        htmlFor="name"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Full Name
                      </label>
                      <input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="John Doe"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="email"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Email
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="john.doe@example.com"
                        required
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <div className="space-y-2">
                      <label
                        htmlFor="phone"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Phone Number
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="(555) 123-4567"
                      />
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="subject"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Subject
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        required
                      >
                        <option value="" disabled>
                          Select a subject
                        </option>
                        <option value="Revenue and Expenses Analysis">Revenue and Expenses Analysis</option>
                        <option value="Cost Control and Budgeting">Cost Control and Budgeting</option>
                        <option value="Financial Reporting">Financial Reporting</option>
                        <option value="Payroll Preparation">Payroll Preparation</option>
                        <option value="Financial Health Evaluation">Financial Health Evaluation</option>
                        <option value="Tax Planning">Tax Planning</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="message"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="How can we help you?"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={formState === "submitting"}
                    className="inline-flex h-10 items-center justify-center rounded-md bg-[#f8ffcc] px-8 text-sm font-medium text-gray-900 shadow transition-colors hover:bg-[#e6f0b0] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:opacity-50"
                  >
                    {formState === "submitting" ? "Sending..." : "Send Message"}
                  </button>
                </form>
              )}
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <PrinterIcon className="h-5 w-5 mr-3 text-gray-600 mt-0.5" />
                    <div>
                      <h3 className="font-medium">Fax</h3>
                      <p className="text-gray-600">(929) 296-7431</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <PhoneIcon className="h-5 w-5 mr-3 text-gray-600 mt-0.5" />
                    <div>
                        <h3 className="font-medium">Phone</h3>
                        <p className="text-gray-600">(347) 785-9125</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <MailIcon className="h-5 w-5 mr-3 text-gray-600 mt-0.5" />
                    <div>
                      <h3 className="font-medium">Email</h3>
                      <p className="text-gray-600">info@360costmanagement.com</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <ClockIcon className="h-5 w-5 mr-3 text-gray-600 mt-0.5" />
                    <div>
                      <h3 className="font-medium">Business Hours</h3>
                      <p className="text-gray-600">Monday - Friday: 9:00 AM - 5:00 PM</p>
                      <p className="text-gray-600">Saturday - Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="w-full py-12 md:py-24 bg-gray-50">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center space-y-4 text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Frequently Asked Questions</h2>
            <p className="max-w-[700px] text-gray-600 md:text-lg">
              Find answers to common questions about our services
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg border bg-card p-6">
              <h3 className="text-lg font-bold mb-2">How quickly can you start working with my business?</h3>
              <p className="text-gray-600">
                We can typically begin working with new clients within 1-2 weeks of our initial consultation, depending
                on the complexity of your needs.
              </p>
            </div>
            <div className="rounded-lg border bg-card p-6">
              <h3 className="text-lg font-bold mb-2">Do you work with businesses of all sizes?</h3>
              <p className="text-gray-600">
                Yes, we provide services to businesses of all sizes, from startups to established enterprises, and
                tailor our approach to meet your specific needs.
              </p>
            </div>
            <div className="rounded-lg border bg-card p-6">
              <h3 className="text-lg font-bold mb-2">What industries do you specialize in?</h3>
              <p className="text-gray-600">
                We have experience across multiple industries including retail, technology, healthcare, manufacturing,
                and professional services.
              </p>
            </div>
            <div className="rounded-lg border bg-card p-6">
              <h3 className="text-lg font-bold mb-2">How much do your services cost?</h3>
              <p className="text-gray-600">
                Our pricing varies based on the services required and the size of your business. We offer customized
                packages and would be happy to provide a quote.
              </p>
            </div>
            <div className="rounded-lg border bg-card p-6">
              <h3 className="text-lg font-bold mb-2">Do you offer virtual consultations?</h3>
              <p className="text-gray-600">
                Yes, we offer both in-person and virtual consultations to accommodate your preferences and location.
              </p>
            </div>
            <div className="rounded-lg border bg-card p-6">
              <h3 className="text-lg font-bold mb-2">How do I get started?</h3>
              <p className="text-gray-600">
                Simply fill out our contact form or give us a call, and one of our financial experts will reach out to
                schedule an initial consultation.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}