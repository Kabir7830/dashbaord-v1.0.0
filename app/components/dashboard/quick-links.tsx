import { Bell, LinkIcon, Video } from 'lucide-react'
import Link from "next/link"

export function QuickLinks() {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
      <Link
        href="#"
        className="flex items-center gap-2 rounded-lg border p-4 hover:bg-accent"
      >
        <LinkIcon className="h-5 w-5 text-primary" />
        <span className="font-medium">Important Links</span>
      </Link>
      <Link
        href="#"
        className="flex items-center gap-2 rounded-lg border p-4 hover:bg-accent"
      >
        <Bell className="h-5 w-5 text-pink-500" />
        <span className="font-medium">Feedback</span>
      </Link>
      <Link
        href="#"
        className="flex items-center gap-2 rounded-lg border p-4 hover:bg-accent"
      >
        <Video className="h-5 w-5 text-blue-500" />
        <span className="font-medium">CU Live</span>
      </Link>
    </div>
  )
}

