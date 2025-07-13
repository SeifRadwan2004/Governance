"use client"

import { useState } from "react"
import {
  CalendarDays,
  ChevronLeft,
  ChevronRight,
  Download,
  MoreHorizontal,
  Plus,
  Search,
  Upload,
  Users,
} from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"

const meetings = [
  {
    id: 1,
    title: "Board Meeting",
    date: "June 15, 2025",
    time: "10:00 AM - 12:00 PM",
    location: "Conference Room A",
    type: "In-person",
    status: "Scheduled",
    attendees: 12,
    documents: [
      { id: 1, name: "Agenda.pdf", type: "agenda" },
      { id: 2, name: "Q2_Financial_Report.pdf", type: "report" },
    ],
  },
  {
    id: 2,
    title: "Finance Committee",
    date: "June 20, 2025",
    time: "2:00 PM - 3:30 PM",
    location: "Virtual",
    type: "Virtual",
    status: "Scheduled",
    attendees: 6,
    documents: [
      { id: 3, name: "Finance_Committee_Agenda.pdf", type: "agenda" },
      { id: 4, name: "Budget_Review.xlsx", type: "report" },
    ],
  },
  {
    id: 3,
    title: "Strategic Planning",
    date: "June 25, 2025",
    time: "9:00 AM - 4:00 PM",
    location: "Offsite - Grand Hotel",
    type: "In-person",
    status: "Scheduled",
    attendees: 8,
    documents: [
      { id: 5, name: "Strategic_Planning_Agenda.pdf", type: "agenda" },
      { id: 6, name: "5_Year_Plan_Draft.pptx", type: "presentation" },
    ],
  },
  {
    id: 4,
    title: "Governance Committee",
    date: "July 5, 2025",
    time: "1:00 PM - 2:30 PM",
    location: "Conference Room B",
    type: "In-person",
    status: "Scheduled",
    attendees: 5,
    documents: [{ id: 7, name: "Governance_Committee_Agenda.pdf", type: "agenda" }],
  },
  {
    id: 5,
    title: "Audit Committee",
    date: "July 10, 2025",
    time: "11:00 AM - 12:30 PM",
    location: "Virtual",
    type: "Virtual",
    status: "Scheduled",
    attendees: 4,
    documents: [
      { id: 8, name: "Audit_Committee_Agenda.pdf", type: "agenda" },
      { id: 9, name: "Internal_Audit_Report.pdf", type: "report" },
    ],
  },
  {
    id: 6,
    title: "Executive Committee",
    date: "July 15, 2025",
    time: "9:00 AM - 10:30 AM",
    location: "Conference Room A",
    type: "In-person",
    status: "Scheduled",
    attendees: 4,
    documents: [{ id: 10, name: "Executive_Committee_Agenda.pdf", type: "agenda" }],
  },
  {
    id: 7,
    title: "Q2 Board Meeting",
    date: "May 15, 2025",
    time: "10:00 AM - 12:00 PM",
    location: "Conference Room A",
    type: "In-person",
    status: "Completed",
    attendees: 15,
    documents: [
      { id: 11, name: "Q2_Board_Meeting_Agenda.pdf", type: "agenda" },
      { id: 12, name: "Q2_Board_Meeting_Minutes.pdf", type: "minutes" },
      { id: 13, name: "Q2_Financial_Report.pdf", type: "report" },
    ],
  },
]

export function MeetingScheduler() {
  const [date, setDate] = useState<Date | undefined>(new Date())
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedType, setSelectedType] = useState("all")
  const [selectedStatus, setSelectedStatus] = useState("all")

  const filteredMeetings = meetings.filter((meeting) => {
    const matchesSearch = meeting.title.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesType = selectedType === "all" || meeting.type === selectedType
    const matchesStatus = selectedStatus === "all" || meeting.status === selectedStatus

    return matchesSearch && matchesType && matchesStatus
  })

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Meetings</h2>
          <p className="text-muted-foreground">Schedule and manage board and committee meetings</p>
        </div>
        <Dialog>
          <DialogTrigger asChild>
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              Schedule Meeting
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[600px]">
            <DialogHeader>
              <DialogTitle>Schedule New Meeting</DialogTitle>
              <DialogDescription>Create a new meeting and notify all participants</DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <Label htmlFor="title">Meeting Title</Label>
                <Input id="title" placeholder="Enter meeting title" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="date">Date</Label>
                  <Input id="date" type="date" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="time">Time</Label>
                  <Input id="time" type="time" />
                </div>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="location">Location</Label>
                <Input id="location" placeholder="Enter meeting location" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="type">Meeting Type</Label>
                <Select>
                  <SelectTrigger id="type">
                    <SelectValue placeholder="Select meeting type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="in-person">In-person</SelectItem>
                    <SelectItem value="virtual">Virtual</SelectItem>
                    <SelectItem value="hybrid">Hybrid</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="description">Description</Label>
                <Textarea id="description" placeholder="Enter meeting description" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="attendees">Attendees</Label>
                <Select>
                  <SelectTrigger id="attendees">
                    <SelectValue placeholder="Select attendees" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all-board">All Board Members</SelectItem>
                    <SelectItem value="executive">Executive Committee</SelectItem>
                    <SelectItem value="finance">Finance Committee</SelectItem>
                    <SelectItem value="governance">Governance Committee</SelectItem>
                    <SelectItem value="audit">Audit Committee</SelectItem>
                    <SelectItem value="custom">Custom Selection</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <DialogFooter>
              <Button type="submit">Schedule Meeting</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
      <div className="flex flex-col gap-4 sm:flex-row">
        <div className="relative flex-1">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search meetings..."
            className="w-full pl-8"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <Select value={selectedType} onValueChange={setSelectedType}>
          <SelectTrigger className="w-full sm:w-[150px]">
            <SelectValue placeholder="Type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Types</SelectItem>
            <SelectItem value="In-person">In-person</SelectItem>
            <SelectItem value="Virtual">Virtual</SelectItem>
            <SelectItem value="Hybrid">Hybrid</SelectItem>
          </SelectContent>
        </Select>
        <Select value={selectedStatus} onValueChange={setSelectedStatus}>
          <SelectTrigger className="w-full sm:w-[150px]">
            <SelectValue placeholder="Status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Status</SelectItem>
            <SelectItem value="Scheduled">Scheduled</SelectItem>
            <SelectItem value="Completed">Completed</SelectItem>
            <SelectItem value="Cancelled">Cancelled</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <Tabs defaultValue="list" className="w-full">
        <TabsList className="mb-4">
          <TabsTrigger value="list">List View</TabsTrigger>
          <TabsTrigger value="calendar">Calendar View</TabsTrigger>
        </TabsList>
        <TabsContent value="list" className="w-full">
          <div className="rounded-md border">
            <div className="grid grid-cols-7 border-b px-4 py-3 font-medium">
              <div className="col-span-2">Meeting</div>
              <div className="hidden sm:block">Date & Time</div>
              <div className="hidden md:block">Location</div>
              <div className="hidden lg:block">Type</div>
              <div className="hidden lg:block">Attendees</div>
              <div className="text-right">Actions</div>
            </div>
            <div className="divide-y">
              {filteredMeetings.map((meeting) => (
                <div key={meeting.id} className="grid grid-cols-7 items-center px-4 py-3">
                  <div className="col-span-2">
                    <div className="font-medium">{meeting.title}</div>
                    <div className="text-xs text-muted-foreground sm:hidden">{meeting.date}</div>
                  </div>
                  <div className="hidden sm:block">
                    <div className="text-sm">{meeting.date}</div>
                    <div className="text-xs text-muted-foreground">{meeting.time}</div>
                  </div>
                  <div className="hidden md:block text-sm">{meeting.location}</div>
                  <div className="hidden lg:block">
                    <Badge variant={meeting.type === "Virtual" ? "outline" : "default"}>{meeting.type}</Badge>
                  </div>
                  <div className="hidden lg:flex items-center">
                    <Users className="mr-2 h-4 w-4 text-muted-foreground" />
                    <span>{meeting.attendees}</span>
                  </div>
                  <div className="text-right">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon">
                          <MoreHorizontal className="h-4 w-4" />
                          <span className="sr-only">Open menu</span>
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>View Details</DropdownMenuItem>
                        <DropdownMenuItem>Edit Meeting</DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>
                          <Upload className="mr-2 h-4 w-4" />
                          <span>Upload Documents</span>
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className="text-destructive">Cancel Meeting</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </TabsContent>
        <TabsContent value="calendar" className="w-full">
          <div className="grid gap-4 md:grid-cols-7">
            <Card className="md:col-span-5">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Meeting Calendar</CardTitle>
                  <div className="flex items-center gap-2">
                    <Button variant="outline" size="icon">
                      <ChevronLeft className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="icon">
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <Calendar mode="single" selected={date} onSelect={setDate} className="rounded-md border" />
              </CardContent>
            </Card>
            <Card className="md:col-span-2">
              <CardHeader>
                <CardTitle>Upcoming Meetings</CardTitle>
                <CardDescription>Next 30 days</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {meetings
                    .filter((meeting) => meeting.status === "Scheduled")
                    .slice(0, 3)
                    .map((meeting) => (
                      <div key={meeting.id} className="flex flex-col space-y-1">
                        <div className="font-medium">{meeting.title}</div>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <CalendarDays className="mr-1 h-3 w-3" />
                          {meeting.date}
                        </div>
                        <div className="text-xs text-muted-foreground">{meeting.time}</div>
                      </div>
                    ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  View All
                </Button>
              </CardFooter>
            </Card>
          </div>
          <Card className="mt-4">
            <CardHeader>
              <CardTitle>Meeting Documents</CardTitle>
              <CardDescription>Agendas, minutes, and supporting materials</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="rounded-md border">
                <div className="grid grid-cols-4 border-b px-4 py-3 font-medium">
                  <div className="col-span-2">Document</div>
                  <div className="hidden sm:block">Meeting</div>
                  <div className="text-right">Actions</div>
                </div>
                <div className="divide-y">
                  {meetings
                    .flatMap((meeting) =>
                      meeting.documents.map((doc) => (
                        <div key={doc.id} className="grid grid-cols-4 items-center px-4 py-3">
                          <div className="col-span-2">
                            <div className="font-medium">{doc.name}</div>
                            <div className="text-xs text-muted-foreground capitalize">{doc.type}</div>
                          </div>
                          <div className="hidden sm:block text-sm">{meeting.title}</div>
                          <div className="text-right">
                            <Button variant="ghost" size="sm">
                              <Download className="mr-2 h-4 w-4" />
                              Download
                            </Button>
                          </div>
                        </div>
                      )),
                    )
                    .slice(0, 5)}
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">
                View All Documents
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
