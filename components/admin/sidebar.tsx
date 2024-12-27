"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { LayoutDashboard, DollarSign, Users, Flag, Settings } from 'lucide-react'

const sidebarItems = [
  { icon: LayoutDashboard, label: "Dashboard", href: "/admin" },
  { icon: DollarSign, label: "Donations", href: "/admin/donations" },
  { icon: Users, label: "Users", href: "/admin/users" },
  { icon: Flag, label: "Campaigns", href: "/admin/campaigns" },
  { icon: Settings, label: "Settings", href: "/admin/settings" },
]

export function Sidebar() {
  const pathname = usePathname()

  return (
    <div className="flex flex-col h-full bg-white border-r w-64">
      <div className="flex items-center justify-center h-16 border-b">
        <span className="text-2xl font-semibold text-primary">Admin Panel</span>
      </div>
      <nav className="flex-1 overflow-y-auto">
        <ul className="p-4 space-y-2">
          {sidebarItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={cn(
                  "flex items-center space-x-3 px-4 py-2 rounded-lg text-gray-700 hover:bg-gray-100",
                  pathname === item.href && "bg-primary text-white hover:bg-primary/90"
                )}
              >
                <item.icon className="h-5 w-5" />
                <span>{item.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}

