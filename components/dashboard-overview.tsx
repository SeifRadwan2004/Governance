"use client"

import { CalendarDays, CheckCircle, Clock, Users } from "lucide-react"
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

const data = [
  {
    name: "Jan",
    total: 12,
  },
  {
    name: "Feb",
    total: 8,
  },
  {
    name: "Mar",
    total: 15,
  },
  {
    name: "Apr",
    total: 10,
  },
  {
    name: "May",
    total: 18,
  },
  {
    name: "Jun",
    total: 14,
  },
]

const recentActivity = [
  {
    id: 1,
    type: "decision",
    title: "Budget Approval",
    status: "Approved",
    time: "2 hours ago",
    user: {
      name: "Robert Johnson",
      avatar: "/diverse-group-avatars.png",
      initials: "RJ",
    },
  },
  {
    id: 2,
    type: "meeting",
    title: "Q2 Strategy Meeting",
    status: "Scheduled",
    time: "Yesterday",
    user: {
      name: "Sarah Williams",
      avatar: "/diverse-group-avatars.png",
      initials: "SW",
    },
  },
  {
    id: 3,
    type: "document",
    title: "Annual Report",
    status: "Uploaded",
    time: "2 days ago",
    user: {
      name: "Michael Chen",
      avatar: "/diverse-group-avatars.png",
      initials: "MC",
    },
  },
  {
    id: 4,
    type: "member",
    title: "New Board Member",
    status: "Added",
    time: "1 week ago",
    user: {
      name: "Lisa Anderson",
      avatar: "/diverse-group-avatars.png",
      initials: "LA",
    },
  },
]

const upcomingMeetings = [
  {
    id: 1,
    title: "Board Meeting",
    date: "June 15, 2025",
    time: "10:00 AM - 12:00 PM",
    location: "Conference Room A",
    attendees: 12,
  },
  {
    id: 2,
    title: "Finance Committee",
    date: "June 20, 2025",
    time: "2:00 PM - 3:30 PM",
    location: "Virtual",
    attendees: 6,
  },
  {
    id: 3,
    title: "Strategic Planning",
    date: "June 25, 2025",
    time: "9:00 AM - 4:00 PM",
    location: "Offsite",
    attendees: 8,
  },
]

export function DashboardOverview() {
  return (
    <div className="flex flex-col gap-4">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Board Members</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">15</div>
            <p className="text-xs text-muted-foreground">3 committees</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Upcoming Meetings</CardTitle>
            <CalendarDays className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">7</div>
            <p className="text-xs text-muted-foreground">Next: June 15, 2025</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pending Decisions</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">5</div>
            <p className="text-xs text-muted-foreground">2 require immediate action</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Completed Actions</CardTitle>
            <CheckCircle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">28</div>
            <p className="text-xs text-muted-foreground">This quarter</p>
          </CardContent>
        </Card>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle>Governance Activity</CardTitle>
          </CardHeader>
          <CardContent className="pl-2">
            <ResponsiveContainer width="100%" height={350}>
              <BarChart data={data}>
                <XAxis dataKey="name" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
                <YAxis
                  stroke="#888888"
                  fontSize={12}
                  tickLine={false}
                  axisLine={false}
                  tickFormatter={(value) => `${value}`}
                />
                <Bar dataKey="total" fill="currentColor" radius={[4, 4, 0, 0]} className="fill-primary" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
        <Card className="col-span-3">
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>Latest governance activities</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivity.map((activity) => (
                <div key={activity.id} className="flex items-center">
                  <Avatar className="h-9 w-9">
                    <AvatarImage src={activity.user.avatar || "/placeholder.svg"} alt={activity.user.name} />
                    <AvatarFallback>{activity.user.initials}</AvatarFallback>
                  </Avatar>
                  <div className="ml-4 space-y-1">
                    <p className="text-sm font-medium leading-none">{activity.title}</p>
                    <p className="text-sm text-muted-foreground">
                      {activity.status} by {activity.user.name}
                    </p>
                  </div>
                  <div className="ml-auto text-xs text-muted-foreground">{activity.time}</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle>Upcoming Meetings</CardTitle>
            <CardDescription>Next scheduled board and committee meetings</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {upcomingMeetings.map((meeting) => (
                <div key={meeting.id} className="flex flex-col space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="font-medium">{meeting.title}</div>
                    <div className="text-sm text-muted-foreground">{meeting.attendees} attendees</div>
                  </div>
                  <div className="flex items-center text-sm">
                    <CalendarDays className="mr-2 h-4 w-4 text-muted-foreground" />
                    <span>
                      {meeting.date} • {meeting.time}
                    </span>
                  </div>
                  <div className="text-sm text-muted-foreground">{meeting.location}</div>
                </div>
              ))}
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full">
              View All Meetings
            </Button>
          </CardFooter>
        </Card>
        <Card className="col-span-3">
          <CardHeader>
            <CardTitle>Strategic Plan Progress</CardTitle>
            <CardDescription>Current progress on key initiatives</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <div className="font-medium">Digital Transformation</div>
                  <div>75%</div>
                </div>
                <Progress value={75} />
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <div className="font-medium">Sustainability Goals</div>
                  <div>42%</div>
                </div>
                <Progress value={42} />
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <div className="font-medium">Market Expansion</div>
                  <div>89%</div>
                </div>
                <Progress value={89} />
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <div className="font-medium">Talent Development</div>
                  <div>63%</div>
                </div>
                <Progress value={63} />
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full">
              View Strategic Plan
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}
