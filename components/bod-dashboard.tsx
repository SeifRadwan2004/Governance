"use client"

import { CheckCircle, ClipboardList, FileText, Users } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function BODDashboard() {
  return (
    <div className="flex flex-col gap-4">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card className="border-corporate-100">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Resolutions Passed</CardTitle>
            <CheckCircle className="h-4 w-4 text-corporate-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-corporate-800">18</div>
            <p className="text-xs text-muted-foreground">This fiscal year</p>
          </CardContent>
        </Card>
        <Card className="border-corporate-100">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pending Items</CardTitle>
            <ClipboardList className="h-4 w-4 text-corporate-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-corporate-800">7</div>
            <p className="text-xs text-muted-foreground">For next meeting</p>
          </CardContent>
        </Card>
        <Card className="border-corporate-100">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Committee Reports</CardTitle>
            <FileText className="h-4 w-4 text-corporate-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-corporate-800">4</div>
            <p className="text-xs text-muted-foreground">Pending review</p>
          </CardContent>
        </Card>
        <Card className="border-corporate-100">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Board Attendance</CardTitle>
            <Users className="h-4 w-4 text-corporate-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-corporate-800">92%</div>
            <p className="text-xs text-muted-foreground">Average this year</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="kpis" className="w-full">
        <TabsList className="mb-4 bg-corporate-50">
          <TabsTrigger value="kpis" className="data-[state=active]:bg-corporate-600 data-[state=active]:text-white">
            CEO KPIs
          </TabsTrigger>
          <TabsTrigger
            value="resolutions"
            className="data-[state=active]:bg-corporate-600 data-[state=active]:text-white"
          >
            Resolutions
          </TabsTrigger>
          <TabsTrigger
            value="committees"
            className="data-[state=active]:bg-corporate-600 data-[state=active]:text-white"
          >
            Committees
          </TabsTrigger>
        </TabsList>

        <TabsContent value="kpis" className="w-full">
          <Card className="border-corporate-100">
            <CardHeader>
              <CardTitle>CEO Key Performance Indicators</CardTitle>
              <CardDescription>Track progress on CEO performance metrics</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="rounded-lg border border-corporate-100 p-4">
                  <h3 className="font-semibold text-corporate-800">Financial Performance</h3>
                  <div className="mt-2">
                    <div className="flex items-center justify-between text-xs">
                      <span>Target: 20% EBITDA growth</span>
                      <span>Current: 18%</span>
                    </div>
                    <Progress value={90} className="h-2 mt-1" />
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">
                    Strong performance in core markets driving growth. On track to meet annual target.
                  </p>
                </div>

                <div className="rounded-lg border border-corporate-100 p-4">
                  <h3 className="font-semibold text-corporate-800">Strategic Plan Implementation</h3>
                  <div className="mt-2">
                    <div className="flex items-center justify-between text-xs">
                      <span>Target: 100% completion</span>
                      <span>Current: 75%</span>
                    </div>
                    <Progress value={75} className="h-2 mt-1" />
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">
                    Key initiatives progressing as planned. International expansion slightly behind schedule.
                  </p>
                </div>

                <div className="rounded-lg border border-corporate-100 p-4">
                  <h3 className="font-semibold text-corporate-800">Organizational Development</h3>
                  <div className="mt-2">
                    <div className="flex items-center justify-between text-xs">
                      <span>Target: Leadership bench strength</span>
                      <span>Current: 85%</span>
                    </div>
                    <Progress value={85} className="h-2 mt-1" />
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">
                    Succession planning for key positions well-developed. Two executive positions still need backup.
                  </p>
                </div>

                <div className="rounded-lg border border-corporate-100 p-4">
                  <h3 className="font-semibold text-corporate-800">Innovation Pipeline</h3>
                  <div className="mt-2">
                    <div className="flex items-center justify-between text-xs">
                      <span>Target: 5 new products</span>
                      <span>Current: 3 launched, 2 in development</span>
                    </div>
                    <Progress value={70} className="h-2 mt-1" />
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">
                    Product development on track. R&D investments yielding promising results.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="resolutions" className="w-full">
          <Card className="border-corporate-100">
            <CardHeader>
              <CardTitle>Resolution Tracking</CardTitle>
              <CardDescription>Monitor implementation of board resolutions</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="rounded-md border">
                  <div className="grid grid-cols-5 border-b px-4 py-3 font-medium">
                    <div className="col-span-2">Resolution</div>
                    <div>Date Passed</div>
                    <div>Status</div>
                    <div className="text-right">Actions</div>
                  </div>
                  <div className="divide-y">
                    {[
                      {
                        title: "Approval of Expansion Plan",
                        description: "Expansion into Asian markets",
                        date: "Feb 15, 2023",
                        status: "In Progress",
                      },
                      {
                        title: "Executive Compensation Review",
                        description: "Annual review of C-suite compensation",
                        date: "Mar 10, 2023",
                        status: "Completed",
                      },
                      {
                        title: "Sustainability Initiative",
                        description: "Carbon neutrality by 2025",
                        date: "Jan 20, 2023",
                        status: "In Progress",
                      },
                      {
                        title: "Dividend Declaration",
                        description: "Q1 dividend of $0.25 per share",
                        date: "Apr 5, 2023",
                        status: "Completed",
                      },
                      {
                        title: "Technology Infrastructure Upgrade",
                        description: "Approval of $2M budget for IT upgrades",
                        date: "Mar 25, 2023",
                        status: "In Progress",
                      },
                    ].map((resolution, index) => (
                      <div key={index} className="grid grid-cols-5 items-center px-4 py-3">
                        <div className="col-span-2">
                          <div className="font-medium">{resolution.title}</div>
                          <div className="text-xs text-muted-foreground">{resolution.description}</div>
                        </div>
                        <div className="text-sm">{resolution.date}</div>
                        <div>
                          <span
                            className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                              resolution.status === "Completed"
                                ? "bg-green-100 text-green-800"
                                : "bg-yellow-100 text-yellow-800"
                            }`}
                          >
                            {resolution.status}
                          </span>
                        </div>
                        <div className="text-right">
                          <Button variant="ghost" size="sm">
                            View Details
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="committees" className="w-full">
          <Card className="border-corporate-100">
            <CardHeader>
              <CardTitle>Committee Management</CardTitle>
              <CardDescription>Oversee board committees and their activities</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="rounded-lg border border-corporate-100 p-4">
                  <h3 className="font-semibold text-corporate-800">Audit Committee</h3>
                  <div className="mt-1 text-sm">
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">Chair: Robert Chen</span>
                      <span className="text-xs bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full">
                        Meeting: May 12, 2023
                      </span>
                    </div>
                  </div>
                  <div className="mt-2 text-sm">
                    <span className="font-medium">Current Focus:</span> Q1 Financial Review, Risk Assessment
                  </div>
                  <div className="mt-2 flex gap-2">
                    <Button size="sm" variant="outline">
                      View Reports
                    </Button>
                    <Button size="sm" variant="outline">
                      Meeting Minutes
                    </Button>
                  </div>
                </div>

                <div className="rounded-lg border border-corporate-100 p-4">
                  <h3 className="font-semibold text-corporate-800">Compensation Committee</h3>
                  <div className="mt-1 text-sm">
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">Chair: Sarah Johnson</span>
                      <span className="text-xs bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full">
                        Meeting: May 18, 2023
                      </span>
                    </div>
                  </div>
                  <div className="mt-2 text-sm">
                    <span className="font-medium">Current Focus:</span> Executive Compensation Review, Incentive Plans
                  </div>
                  <div className="mt-2 flex gap-2">
                    <Button size="sm" variant="outline">
                      View Reports
                    </Button>
                    <Button size="sm" variant="outline">
                      Meeting Minutes
                    </Button>
                  </div>
                </div>

                <div className="rounded-lg border border-corporate-100 p-4">
                  <h3 className="font-semibold text-corporate-800">Governance Committee</h3>
                  <div className="mt-1 text-sm">
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">Chair: James Wilson</span>
                      <span className="text-xs bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full">
                        Meeting: May 25, 2023
                      </span>
                    </div>
                  </div>
                  <div className="mt-2 text-sm">
                    <span className="font-medium">Current Focus:</span> Board Composition, Succession Planning
                  </div>
                  <div className="mt-2 flex gap-2">
                    <Button size="sm" variant="outline">
                      View Reports
                    </Button>
                    <Button size="sm" variant="outline">
                      Meeting Minutes
                    </Button>
                  </div>
                </div>

                <div className="rounded-lg border border-corporate-100 p-4">
                  <h3 className="font-semibold text-corporate-800">Strategic Planning Committee</h3>
                  <div className="mt-1 text-sm">
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">Chair: Michael Lee</span>
                      <span className="text-xs bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full">
                        Meeting: June 2, 2023
                      </span>
                    </div>
                  </div>
                  <div className="mt-2 text-sm">
                    <span className="font-medium">Current Focus:</span> 5-Year Strategic Plan, Market Analysis
                  </div>
                  <div className="mt-2 flex gap-2">
                    <Button size="sm" variant="outline">
                      View Reports
                    </Button>
                    <Button size="sm" variant="outline">
                      Meeting Minutes
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
