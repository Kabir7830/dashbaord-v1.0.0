"use client"

import React, { useState, useMemo } from 'react'
import { Card, Input, Select } from "../ui/simple-components"

// Sample announcement data
const sampleAnnouncements = [
  {
    id: 1,
    title: "NEW ARRIVALS 2024( 9TH DEC TO 15 DEC, 2024)",
    date: "2024-12-18T13:00:14",
  },
  {
    id: 2,
    title: "Campus Closure for Winter Break",
    date: "2024-12-15T10:30:00",
  },
  {
    id: 3,
    title: "Spring Semester Registration Open",
    date: "2024-12-10T09:15:00",
  },
  {
    id: 4,
    title: "New Online Learning Resources Available",
    date: "2024-12-05T14:45:00",
  },
]

export function Announcements() {
  const [searchTerm, setSearchTerm] = useState("")
  const [sortOrder, setSortOrder] = useState("newest")

  const filteredAndSortedAnnouncements = useMemo(() => {
    return sampleAnnouncements
      .filter((announcement) =>
        announcement.title.toLowerCase().includes(searchTerm.toLowerCase())
      )
      .sort((a, b) => {
        if (sortOrder === "newest") {
          return new Date(b.date).getTime() - new Date(a.date).getTime()
        } else {
          return new Date(a.date).getTime() - new Date(b.date).getTime()
        }
      })
  }, [searchTerm, sortOrder])

  return (
    <Card className="p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Announcements</h2>
        <div className="flex items-center gap-2">
          <Input
            placeholder="Search Announcement"
            className="max-w-[130px]"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Select
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
            className="w-[100px]"
          >
            <option value="newest">Newest</option>
            <option value="oldest">Oldest</option>
          </Select>
        </div>
      </div>
      <div className="space-y-4">
        {filteredAndSortedAnnouncements.map((announcement) => (
          <div key={announcement.id} className="border rounded p-4">
            <h3 className="font-semibold text-blue-600">{announcement.title}</h3>
            <div className="mt-2 text-sm text-gray-600">
              {new Date(announcement.date).toLocaleString()}
            </div>
          </div>
        ))}
        {filteredAndSortedAnnouncements.length === 0 && (
          <div className="text-center text-gray-600">
            No announcements found.
          </div>
        )}
      </div>
    </Card>
  )
}

