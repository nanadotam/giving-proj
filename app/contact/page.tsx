"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react'

export default function ContactPage() {
  const [inquiryType, setInquiryType] = useState("")

  return (
    <div className="min-h-screen py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8">Contact Us</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
              <form className="space-y-4">
                <div>
                  <Input placeholder="Your Name" />
                </div>
                <div>
                  <Input type="email" placeholder="Your Email" />
                </div>
                <div>
                  <Select onValueChange={setInquiryType}>
                    <SelectTrigger>
                      <SelectValue placeholder="Inquiry Type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="general">General</SelectItem>
                      <SelectItem value="partnership">Partnership</SelectItem>
                      <SelectItem value="support">Support</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Textarea placeholder="Your Message" rows={5} />
                </div>
                <Button type="submit" className="w-full">Send Message</Button>
              </form>
            </CardContent>
          </Card>
          <div>
            <Card className="mb-6">
              <CardContent className="p-6">
                <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <Mail size={20} />
                    <span>info@thegivingproject.org</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Phone size={20} />
                    <span>+1 (555) 123-4567</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <MapPin size={20} />
                    <span>123 Charity Lane, Giving City, GC 12345</span>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="mb-6">
              <CardContent className="p-6">
                <h2 className="text-2xl font-semibold mb-4">Follow Us</h2>
                <div className="flex space-x-4">
                  <a href="#" className="text-gray-600 hover:text-orange-500"><Facebook size={24} /></a>
                  <a href="#" className="text-gray-600 hover:text-orange-500"><Twitter size={24} /></a>
                  <a href="#" className="text-gray-600 hover:text-orange-500"><Instagram size={24} /></a>
                  <a href="#" className="text-gray-600 hover:text-orange-500"><Linkedin size={24} /></a>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-semibold mb-4">FAQ</h2>
                <Accordion type="single" collapsible>
                  <AccordionItem value="item-1">
                    <AccordionTrigger>How can I donate?</AccordionTrigger>
                    <AccordionContent>
                      You can donate through our website, by phone, or by mail. Visit our Donate page for more information.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger>Is my donation tax-deductible?</AccordionTrigger>
                    <AccordionContent>
                      Yes, all donations to The Giving Project are tax-deductible to the extent allowed by law.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3">
                    <AccordionTrigger>How can I volunteer?</AccordionTrigger>
                    <AccordionContent>
                      We have various volunteering opportunities. Please visit our Volunteer page or contact us directly for more information.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

