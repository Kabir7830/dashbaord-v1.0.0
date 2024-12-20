import type { Metadata } from "next"
import { Inter } from 'next/font/google'
import "./globals.css"
import { Header } from "@/app/components/layout/header"
import { Sidebar } from "@/app/components/layout/sidebar"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "CU IMS Dashboard",
  description: "Modern dashboard for CU IMS",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex flex-col min-h-screen bg-white text-black">
          <Header />
          <div className="flex flex-1">
            <Sidebar />
            <main className="flex-1 p-4 lg:p-6">{children}</main>
          </div>
        </div>
      </body>
    </html>
  )
}

