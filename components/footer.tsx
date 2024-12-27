import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-gray-100">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">The Giving Project</h3>
            <p className="text-sm text-gray-600">Inspiring hope and fostering community through the power of giving.</p>
          </div>
          <div>
            <h4 className="text-md font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="text-sm text-gray-600 hover:text-orange-500">Home</Link></li>
              <li><Link href="/donate" className="text-sm text-gray-600 hover:text-orange-500">Donate</Link></li>
              <li><Link href="/about" className="text-sm text-gray-600 hover:text-orange-500">About Us</Link></li>
              <li><Link href="/contact" className="text-sm text-gray-600 hover:text-orange-500">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-md font-semibold mb-4">Get Involved</h4>
            <ul className="space-y-2">
              <li><Link href="/events" className="text-sm text-gray-600 hover:text-orange-500">Events</Link></li>
              <li><Link href="/volunteer" className="text-sm text-gray-600 hover:text-orange-500">Volunteer</Link></li>
              <li><Link href="/partners" className="text-sm text-gray-600 hover:text-orange-500">Partners</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-md font-semibold mb-4">Connect With Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-orange-500"><Facebook size={20} /></a>
              <a href="#" className="text-gray-600 hover:text-orange-500"><Twitter size={20} /></a>
              <a href="#" className="text-gray-600 hover:text-orange-500"><Instagram size={20} /></a>
              <a href="#" className="text-gray-600 hover:text-orange-500"><Linkedin size={20} /></a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200 text-center">
          <p className="text-sm text-gray-600">&copy; 2023 The Giving Project. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

