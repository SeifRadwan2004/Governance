"use client"

import { Calendar, CheckCircle, Clock, FileText, Users } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function AssemblyDashboard() {
  return (
    <div className="flex flex-col gap-4">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card className="border-corporate-100">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Next Assembly</CardTitle>
            <Calendar className="h-4 w-4 text-corporate-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-corporate-800">Jun 1, 2025</div>
            <p className="text-xs text-muted-foreground">10:00 AM - Virtual</p>
          </CardContent>
        </Card>
        <Card className="border-corporate-100">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Open Proposals</CardTitle>
            <FileText className="h-4 w-4 text-corporate-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-corporate-800">3</div>
            <p className="text-xs text-muted-foreground">Requiring your vote</p>
          </CardContent>
        </Card>
        <Card className="border-corporate-100">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Attendance Rate</CardTitle>
            <Users className="h-4 w-4 text-corporate-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-corporate-800">92%</div>
            <p className="text-xs text-muted-foreground">Last 3 meetings</p>
          </CardContent>
        </Card>
        <Card className="border-corporate-100">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Resolutions Passed</CardTitle>
            <CheckCircle className="h-4 w-4 text-corporate-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-corporate-800">7</div>
            <p className="text-xs text-muted-foreground">This year</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="upcoming" className="w-full">
        <TabsList className="mb-4 bg-corporate-50">
          <TabsTrigger value="upcoming" className="data-[state=active]:bg-corporate-600 data-[state=active]:text-white">
            Upcoming Meetings
          </TabsTrigger>
          <TabsTrigger
            value="proposals"
            className="data-[state=active]:bg-corporate-600 data-[state=active]:text-white"
          >
            Active Proposals
          </TabsTrigger>
          <TabsTrigger value="minutes" className="data-[state=active]:bg-corporate-600 data-[state=active]:text-white">
            Meeting Minutes
          </TabsTrigger>
        </TabsList>

        <TabsContent value="upcoming" className="w-full">
          <Card className="border-corporate-100">
            <CardHeader>
              <CardTitle>Upcoming General Assembly Meetings</CardTitle>
              <CardDescription>Schedule and details for upcoming meetings</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="flex flex-col space-y-2 rounded-lg border border-corporate-100 p-4">
                  <div className="flex items-center justify-between">
                    <div className="font-semibold text-corporate-800">Annual General Assembly</div>
                    <Badge className="bg-corporate-100 text-corporate-700">Upcoming</Badge>
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="mr-2 h-4 w-4" />
                    <span>June 1, 2025 • 10:00 AM - 12:00 PM</span>
                  </div>
                  <div className="text-sm text-muted-foreground">Virtual Meeting (Zoom)</div>
                  <div className="mt-2 text-sm">
                    <span className="font-medium">Agenda:</span>
                    <ul className="ml-5 mt-1 list-disc text-muted-foreground">
                      <li>Annual Financial Report</li>
                      <li>Dividend Declaration</li>
                      <li>Board Member Election</li>
                      <li>Strategic Plan Approval</li>
                    </ul>
                  </div>
                  <div className="mt-2 flex gap-2">
                    <Button size="sm" className="bg-corporate-600 hover:bg-corporate-700">
                      RSVP
                    </Button>
                    <Button size="sm" variant="outline">
                      View Details
                    </Button>
                  </div>
                </div>

                <div className="flex flex-col space-y-2 rounded-lg border border-corporate-100 p-4">
                  <div className="flex items-center justify-between">
                    <div className="font-semibold text-corporate-800">Extraordinary General Assembly</div>
                    <Badge className="bg-corporate-100 text-corporate-700">Upcoming</Badge>
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="mr-2 h-4 w-4" />
                    <span>July 15, 2025 • 2:00 PM - 3:30 PM</span>
                  </div>
                  <div className="text-sm text-muted-foreground">Conference Room A</div>
                  <div className="mt-2 text-sm">
                    <span className="font-medium">Agenda:</span>
                    <ul className="ml-5 mt-1 list-disc text-muted-foreground">
                      <li>Proposed Merger Discussion</li>
                      <li>Capital Increase Approval</li>
                      <li>Bylaw Amendments</li>
                    </ul>
                  </div>
                  <div className="mt-2 flex gap-2">
                    <Button size="sm" className="bg-corporate-600 hover:bg-corporate-700">
                      RSVP
                    </Button>
                    <Button size="sm" variant="outline">
                      View Details
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">
                View All Meetings
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="proposals" className="w-full">
          <Card className="border-corporate-100">
            <CardHeader>
              <CardTitle>Active Proposals</CardTitle>
              <CardDescription>Proposals requiring your vote</CardDescription>
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
                      Vote Now
                    </Button>
                    <Button size="sm" variant="outline">
                      View Details
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
                      Vote Now
                    </Button>
                    <Button size="sm" variant="outline">
                      View Details
                    </Button>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="font-semibold text-corporate-800">Dividend Declaration</div>
                    <Badge className="bg-amber-100 text-amber-700">Voting Open</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Approval of a dividend of $2.75 per share, representing a 10% increase from the previous dividend,
                    to be paid on July 30, 2025.
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
                      Vote Now
                    </Button>
                    <Button size="sm" variant="outline">
                      View Details
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">
                Submit New Proposal
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="minutes" className="w-full">
          <Card className="border-corporate-100">
            <CardHeader>
              <CardTitle>Meeting Minutes</CardTitle>
              <CardDescription>Records of past General Assembly meetings</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between rounded-lg border border-corporate-100 p-4">
                  <div className="flex items-start space-x-4">
                    <FileText className="mt-1 h-5 w-5 text-corporate-500" />
                    <div>
                      <div className="font-medium">Q1 General Assembly Meeting</div>
                      <div className="text-sm text-muted-foreground">March 15, 2025</div>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">
                    Download
                  </Button>
                </div>

                <div className="flex items-center justify-between rounded-lg border border-corporate-100 p-4">
                  <div className="flex items-start space-x-4">
                    <FileText className="mt-1 h-5 w-5 text-corporate-500" />
                    <div>
                      <div className="font-medium">Extraordinary General Assembly</div>
                      <div className="text-sm text-muted-foreground">February 10, 2025</div>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">
                    Download
                  </Button>
                </div>

                <div className="flex items-center justify-between rounded-lg border border-corporate-100 p-4">
                  <div className="flex items-start space-x-4">
                    <FileText className="mt-1 h-5 w-5 text-corporate-500" />
                    <div>
                      <div className="font-medium">Annual General Assembly</div>
                      <div className="text-sm text-muted-foreground">December 5, 2024</div>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">
                    Download
                  </Button>
                </div>

                <div className="flex items-center justify-between rounded-lg border border-corporate-100 p-4">
                  <div className="flex items-start space-x-4">
                    <FileText className="mt-1 h-5 w-5 text-corporate-500" />
                    <div>
                      <div className="font-medium">Q3 General Assembly Meeting</div>
                      <div className="text-sm text-muted-foreground">September 20, 2024</div>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">
                    Download
                  </Button>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">
                View All Minutes
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
