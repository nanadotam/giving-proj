"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from 'lucide-react'

const navItems = [
  { href: "/", label: "Home" },
  { href: "/donate", label: "Donate" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/events", label: "Events" },
  { href: "/blog", label: "Blog" },
]

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 bg-background border-b border-border z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-primary">
          The Giving Project
        </Link>
        <nav className="hidden md:block">
          <ul className="flex space-x-4">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-muted-foreground hover:text-primary transition-colors">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="hidden md:block">
          <Button variant="default" className="bg-primary hover:bg-primary/90 text-primary-foreground">
            Donate Now
          </Button>
        </div>
        <div className="md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col space-y-4 mt-4">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
                <Button variant="default" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  Donate Now
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}

