"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { ChevronDown, Menu, X } from 'lucide-react'
import { cn } from "@/app/lib/utils"

const menuItems = [
  {
    title: "Academics",
    icon: "📚",
    href: "/academics",
    subItems: [
      { title: "Courses", href: "/academics/courses" },
      { title: "Grades", href: "/academics/grades" },
      { title: "Schedule", href: "/academics/schedule" },
    ],
  },
  {
    title: "Accounts",
    icon: "💰",
    href: "/accounts",
    subItems: [
      { title: "Fees", href: "/accounts/fees" },
      { title: "Payments", href: "/accounts/payments" },
    ],
  },
  {
    title: "Administration",
    icon: "🏛️",
    href: "/administration",
    subItems: [
      { title: "Staff", href: "/administration/staff" },
      { title: "Departments", href: "/administration/departments" },
    ],
  },
  {
    title: "Admission",
    icon: "🎓",
    href: "/admission",
    subItems: [
      { title: "Apply", href: "/admission/apply" },
      { title: "Status", href: "/admission/status" },
    ],
  },
  {
    title: "Announcements",
    icon: "📢",
    href: "/announcements",
  },
  {
    title: "Club Activities",
    icon: "🎭",
    href: "/club-activities",
  },
  {
    title: "CRM",
    icon: "👥",
    href: "/crm",
    subItems: [
      { title: "Contacts", href: "/crm/contacts" },
      { title: "Leads", href: "/crm/leads" },
    ],
  },
]

export function Sidebar() {
  const [isOpen, setIsOpen] = React.useState(false)
  const pathname = usePathname()

  return (
    <>
      <button
        className="fixed top-4 left-4 z-50 lg:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>
      <div
        className={cn(
          "fixed inset-y-0 left-0 z-40 w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:w-64",
          isOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-center h-16 border-b">
            <Link href="/" className="flex items-center space-x-2">
              <img src="/logo/logo.png" alt="Logo" className="h-8 w-8" />
              <span className="font-bold">CU IMS</span>
            </Link>
          </div>
          <nav className="flex-1 overflow-y-auto">
            <ul className="py-4">
              {menuItems.map((item) => (
                <li key={item.href} className="px-4 py-2">
                  {item.subItems ? (
                    <details className="group">
                      <summary className="flex items-center cursor-pointer transition-all duration-300 ease-in-out hover:bg-gray-100 rounded-md p-2">
                        <span className="mr-2">{item.icon}</span>
                        {item.title}
                        <ChevronDown className="ml-auto h-4 w-4 transition-transform duration-300 ease-in-out group-open:rotate-180" />
                      </summary>
                      <ul className="pl-6 mt-2 space-y-1">
                        {item.subItems.map((subItem) => (
                          <li key={subItem.href}>
                            <Link
                              href={subItem.href}
                              className={cn(
                                "block py-1 px-2 rounded-md",
                                pathname === subItem.href
                                  ? "bg-gray-100 text-blue-600"
                                  : "hover:bg-gray-50"
                              )}
                            >
                              {subItem.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </details>
                  ) : (
                    <Link
                      href={item.href}
                      className={cn(
                        "flex items-center py-2 px-4 rounded-md",
                        pathname === item.href
                          ? "bg-gray-100 text-blue-600"
                          : "hover:bg-gray-50"
                      )}
                    >
                      <span className="mr-2">{item.icon}</span>
                      {item.title}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </>
  )
}

