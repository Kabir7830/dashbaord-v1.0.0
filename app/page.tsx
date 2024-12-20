import { QuickLinks } from "@/app/components/dashboard/quick-links"
import { AttendanceLog } from "@/app/components/dashboard/attendance-log"
import { Announcements } from "@/app/components/dashboard/announcements"

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <QuickLinks />
      <div className="grid gap-6 md:grid-cols-2">
        <div className="space-y-6">
          <div className="rounded-lg border bg-blue-500 p-4 text-white">
            <h2 className="text-lg font-semibold mb-3">Important Message</h2>
            <div className="space-y-2">
              <p className="text-sm">
                Total leaves pending: <span className="font-semibold">1</span> for approval.
              </p>
              <a 
                href="#" 
                className="inline-block text-sm bg-white text-blue-500 px-3 py-1 rounded-full hover:bg-blue-100 transition-colors">
                Click to approve
              </a>
            </div>
            <div className="mt-3 text-xs">
              <span className="font-semibold">From:</span> Administrator
            </div>
            <div className="text-xs">
              <span className="font-semibold">Date:</span> Dec 18 2024, 2:28 PM
            </div>
          </div>
          <AttendanceLog />
        </div>
        <div className="space-y-6">
          <div className="rounded-lg border bg-pink-500 p-4 text-white">
            <h2 className="text-lg font-semibold">My Question Or Queries</h2>
            <div className="mt-4 grid grid-cols-3 gap-4 text-center">
              <div>
                <div className="font-semibold">Total</div>
                <div>0</div>
              </div>
              <div>
                <div className="font-semibold">Closed</div>
                <div>0</div>
              </div>
              <div>
                <div className="font-semibold">Open</div>
                <div>0</div>
              </div>
            </div>
          </div>
          <Announcements />
        </div>
      </div>
    </div>
  )
}

