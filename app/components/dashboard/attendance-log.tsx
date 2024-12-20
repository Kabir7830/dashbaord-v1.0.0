import { Card } from "../ui/simple-components"

const attendanceData = [
  {
    date: "18 Dec 24",
    day: "Wed",
    inTime: "09:13:32",
    outTime: "X",
    status: "-",
  },
  {
    date: "17 Dec 24",
    day: "Tue",
    inTime: "09:15:09",
    outTime: "17:36:44",
    status: "Present",
  },
  {
    date: "16 Dec 24",
    day: "Mon",
    inTime: "X",
    outTime: "X",
    status: "LWP",
  },
]

export function AttendanceLog() {
  return (
    <Card className="p-4">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold">Attendance Log</h2>
        <button className="px-3 py-1 text-sm bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors">
          View More
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-gray-100">
              <th className="p-2 text-left">Date</th>
              <th className="p-2 text-left">Day</th>
              <th className="p-2 text-left">In Time</th>
              <th className="p-2 text-left">Out Time</th>
              <th className="p-2 text-left">Status</th>
            </tr>
          </thead>
          <tbody>
            {attendanceData.map((row, index) => (
              <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                <td className="p-2">{row.date}</td>
                <td className="p-2">{row.day}</td>
                <td className="p-2">{row.inTime}</td>
                <td className="p-2">{row.outTime}</td>
                <td className={`p-2 ${
                  row.status === "Present" ? "text-green-600" :
                  row.status === "LWP" ? "text-red-600" :
                  ""
                }`}>
                  {row.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  )
}

