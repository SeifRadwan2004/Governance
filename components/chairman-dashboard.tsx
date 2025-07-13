"use client"

import { Calendar, Clock, FileText, MessageSquare, Plus, Users, Vote } from "lucide-react"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
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
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Progress } from "@/components/ui/progress"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"

export function ChairmanDashboard() {
  return (
    <div className="flex flex-col gap-4">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card className="border-corporate-100">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pending Approvals</CardTitle>
            <Clock className="h-4 w-4 text-corporate-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-corporate-800">4</div>
            <p className="text-xs text-muted-foreground">Requiring your attention</p>
          </CardContent>
        </Card>
        <Card className="border-corporate-100">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Next Meeting</CardTitle>
            <Calendar className="h-4 w-4 text-corporate-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-corporate-800">Jun 1, 2025</div>
            <p className="text-xs text-muted-foreground">General Assembly</p>
          </CardContent>
        </Card>
        <Card className="border-corporate-100">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Votes</CardTitle>
            <Vote className="h-4 w-4 text-corporate-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-corporate-800">3</div>
            <p className="text-xs text-muted-foreground">In progress</p>
          </CardContent>
        </Card>
        <Card className="border-corporate-100">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Board Members</CardTitle>
            <Users className="h-4 w-4 text-corporate-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-corporate-800">9</div>
            <p className="text-xs text-muted-foreground">2 seats up for election</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-7">
        <Card className="md:col-span-4 border-corporate-100">
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle>Chairman's Control Panel</CardTitle>
              <CardDescription>Manage meetings, agendas, and approvals</CardDescription>
            </div>
            <Dialog>
              <DialogTrigger asChild>
                <Button className="bg-corporate-600 hover:bg-corporate-700">
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
                    <Label htmlFor="meeting-type">Meeting Type</Label>
                    <Select>
                      <SelectTrigger id="meeting-type">
                        <SelectValue placeholder="Select meeting type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="general-assembly">General Assembly</SelectItem>
                        <SelectItem value="board">Board of Directors</SelectItem>
                        <SelectItem value="committee">Committee</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
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
                    <Select>
                      <SelectTrigger id="location">
                        <SelectValue placeholder="Select location" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="virtual">Virtual (Zoom)</SelectItem>
                        <SelectItem value="conference-a">Conference Room A</SelectItem>
                        <SelectItem value="conference-b">Conference Room B</SelectItem>
                        <SelectItem value="offsite">Offsite Location</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="agenda">Agenda Items</Label>
                    <Textarea id="agenda" placeholder="Enter agenda items" />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="participants">Participants</Label>
                    <Select>
                      <SelectTrigger id="participants">
                        <SelectValue placeholder="Select participants" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all-shareholders">All Shareholders</SelectItem>
                        <SelectItem value="all-board">All Board Members</SelectItem>
                        <SelectItem value="executive">Executive Committee</SelectItem>
                        <SelectItem value="finance">Finance Committee</SelectItem>
                        <SelectItem value="custom">Custom Selection</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <DialogFooter>
                  <Button type="submit" className="bg-corporate-600 hover:bg-corporate-700">
                    Schedule Meeting
                  </Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="rounded-lg border border-corporate-100 p-4">
                <h3 className="font-semibold text-corporate-800">Pending Approvals</h3>
                <div className="mt-3 space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <FileText className="h-5 w-5 text-corporate-500" />
                      <div>
                        <div className="font-medium">Q2 Financial Report</div>
                        <div className="text-xs text-muted-foreground">Submitted by David Rodriguez, MD</div>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline" className="text-red-500 border-red-200 hover:bg-red-50">
                        Reject
                      </Button>
                      <Button size="sm" className="bg-corporate-600 hover:bg-corporate-700">
                        Approve
                      </Button>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <FileText className="h-5 w-5 text-corporate-500" />
                      <div>
                        <div className="font-medium">Strategic Expansion Proposal</div>
                        <div className="text-xs text-muted-foreground">Submitted by David Rodriguez, MD</div>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline" className="text-red-500 border-red-200 hover:bg-red-50">
                        Reject
                      </Button>
                      <Button size="sm" className="bg-corporate-600 hover:bg-corporate-700">
                        Approve
                      </Button>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Calendar className="h-5 w-5 text-corporate-500" />
                      <div>
                        <div className="font-medium">Extraordinary Board Meeting</div>
                        <div className="text-xs text-muted-foreground">Requested by Finance Committee</div>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline" className="text-red-500 border-red-200 hover:bg-red-50">
                        Reject
                      </Button>
                      <Button size="sm" className="bg-corporate-600 hover:bg-corporate-700">
                        Approve
                      </Button>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Vote className="h-5 w-5 text-corporate-500" />
                      <div>
                        <div className="font-medium">New Dividend Policy</div>
                        <div className="text-xs text-muted-foreground">Submitted by Finance Committee</div>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline" className="text-red-500 border-red-200 hover:bg-red-50">
                        Reject
                      </Button>
                      <Button size="sm" className="bg-corporate-600 hover:bg-corporate-700">
                        Approve
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-lg border border-corporate-100 p-4">
                <h3 className="font-semibold text-corporate-800">Upcoming Meetings</h3>
                <div className="mt-3 space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Calendar className="h-5 w-5 text-corporate-500" />
                      <div>
                        <div className="font-medium">Annual General Assembly</div>
                        <div className="text-xs text-muted-foreground">June 1, 2025 • 10:00 AM</div>
                      </div>
                    </div>
                    <Button size="sm" variant="outline">
                      Manage
                    </Button>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Calendar className="h-5 w-5 text-corporate-500" />
                      <div>
                        <div className="font-medium">Board of Directors Meeting</div>
                        <div className="text-xs text-muted-foreground">May 25, 2025 • 2:00 PM</div>
                      </div>
                    </div>
                    <Button size="sm" variant="outline">
                      Manage
                    </Button>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Calendar className="h-5 w-5 text-corporate-500" />
                      <div>
                        <div className="font-medium">Executive Committee</div>
                        <div className="text-xs text-muted-foreground">May 20, 2025 • 9:00 AM</div>
                      </div>
                    </div>
                    <Button size="sm" variant="outline">
                      Manage
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full">
              View All Items
            </Button>
          </CardFooter>
        </Card>

        <Card className="md:col-span-3 border-corporate-100">
          <CardHeader>
            <CardTitle>Communication Center</CardTitle>
            <CardDescription>Send announcements and messages</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="rounded-lg border border-corporate-100 p-4">
                <h3 className="font-semibold text-corporate-800">New Announcement</h3>
                <div className="mt-3 space-y-3">
                  <div className="grid gap-2">
                    <Label htmlFor="announcement-title">Title</Label>
                    <Input id="announcement-title" placeholder="Enter announcement title" />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="announcement-content">Content</Label>
                    <Textarea id="announcement-content" placeholder="Enter announcement content" rows={4} />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="announcement-audience">Audience</Label>
                    <Select>
                      <SelectTrigger id="announcement-audience">
                        <SelectValue placeholder="Select audience" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Users</SelectItem>
                        <SelectItem value="shareholders">Shareholders</SelectItem>
                        <SelectItem value="board">Board Members</SelectItem>
                        <SelectItem value="management">Management Team</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <Button className="w-full bg-corporate-600 hover:bg-corporate-700">
                    <MessageSquare className="mr-2 h-4 w-4" />
                    Send Announcement
                  </Button>
                </div>
              </div>

              <div className="rounded-lg border border-corporate-100 p-4">
                <h3 className="font-semibold text-corporate-800">Recent Communications</h3>
                <div className="mt-3 space-y-3">
                  <div className="flex items-start space-x-3">
                    <Avatar className="mt-1">
                      <AvatarImage src="/avatars/sarah.png" />
                      <AvatarFallback className="bg-corporate-100 text-corporate-700">SJ</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-medium">Q2 Financial Results</div>
                      <p className="text-sm text-muted-foreground">
                        Announcement to all shareholders regarding the Q2 financial results and dividend declaration.
                      </p>
                      <div className="mt-1 text-xs text-muted-foreground">Sent on May 15, 2025</div>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Avatar className="mt-1">
                      <AvatarImage src="/avatars/sarah.png" />
                      <AvatarFallback className="bg-corporate-100 text-corporate-700">SJ</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-medium">Board Meeting Reminder</div>
                      <p className="text-sm text-muted-foreground">
                        Reminder to all board members about the upcoming meeting on May 25, 2025.
                      </p>
                      <div className="mt-1 text-xs text-muted-foreground">Sent on May 10, 2025</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full">
              View All Communications
            </Button>
          </CardFooter>
        </Card>
      </div>

      <Card className="border-corporate-100">
        <CardHeader>
          <CardTitle>Active Votes & Resolutions</CardTitle>
          <CardDescription>Monitor ongoing votes and approve resolutions</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="font-semibold text-corporate-800">Annual Budget Approval</div>
                <Badge className="bg-amber-100 text-amber-700">Voting Open</Badge>
              </div>
              <p className="text-sm text-muted-foreground">
                Approval of the fiscal year 2026 operating budget of $125M, representing a 12% increase from the
                previous year to support expansion initiatives.
              </p>
              <div className="flex items-center text-xs text-muted-foreground">
                <Clock className="mr-1 h-3 w-3" />
                <span>Voting closes in 5 days</span>
              </div>
              <Progress value={65} className="h-2 bg-corporate-100">
                <div className="h-full bg-corporate-500 rounded-full" />
              </Progress>
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>65% voted</span>
                <span>35% remaining</span>
              </div>
              <div className="flex gap-2">
                <Button size="sm" className="bg-corporate-600 hover:bg-corporate-700">
                  View Results
                </Button>
                <Button size="sm" variant="outline">
                  Close Voting
                </Button>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="font-semibold text-corporate-800">Board Member Election</div>
                <Badge className="bg-amber-100 text-amber-700">Voting Open</Badge>
              </div>
              <p className="text-sm text-muted-foreground">
                Election of two new board members to replace retiring directors. Candidates include Jane Smith
                (Technology), Mark Johnson (Finance), and Elena Rodriguez (Operations).
              </p>
              <div className="flex items-center text-xs text-muted-foreground">
                <Clock className="mr-1 h-3 w-3" />
                <span>Voting closes in 3 days</span>
              </div>
              <Progress value={78} className="h-2 bg-corporate-100">
                <div className="h-full bg-corporate-500 rounded-full" />
              </Progress>
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>78% voted</span>
                <span>22% remaining</span>
              </div>
              <div className="flex gap-2">
                <Button size="sm" className="bg-corporate-600 hover:bg-corporate-700">
                  View Results
                </Button>
                <Button size="sm" variant="outline">
                  Close Voting
                </Button>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="font-semibold text-corporate-800">Dividend Declaration</div>
                <Badge className="bg-amber-100 text-amber-700">Voting Open</Badge>
              </div>
              <p className="text-sm text-muted-foreground">
                Approval of a dividend of $2.75 per share, representing a 10% increase from the previous dividend, to be
                paid on July 30, 2025.
              </p>
              <div className="flex items-center text-xs text-muted-foreground">
                <Clock className="mr-1 h-3 w-3" />
                <span>Voting closes in 7 days</span>
              </div>
              <Progress value={42} className="h-2 bg-corporate-100">
                <div className="h-full bg-corporate-500 rounded-full" />
              </Progress>
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>42% voted</span>
                <span>58% remaining</span>
              </div>
              <div className="flex gap-2">
                <Button size="sm" className="bg-corporate-600 hover:bg-corporate-700">
                  View Results
                </Button>
                <Button size="sm" variant="outline">
                  Close Voting
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button variant="outline" className="w-full">
            Create New Resolution
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}
