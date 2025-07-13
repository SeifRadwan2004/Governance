"use client"

import { BarChart3, CheckCircle, Clock, FileText } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function MDDashboard() {
  return (
    <div className="flex flex-col gap-4">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card className="border-corporate-100">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pending Tasks</CardTitle>
            <Clock className="h-4 w-4 text-corporate-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-corporate-800">8</div>
            <p className="text-xs text-muted-foreground">From recent board decisions</p>
          </CardContent>
        </Card>
        <Card className="border-corporate-100">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Completed Tasks</CardTitle>
            <CheckCircle className="h-4 w-4 text-corporate-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-corporate-800">24</div>
            <p className="text-xs text-muted-foreground">This quarter</p>
          </CardContent>
        </Card>
        <Card className="border-corporate-100">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Reports Due</CardTitle>
            <FileText className="h-4 w-4 text-corporate-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-corporate-800">3</div>
            <p className="text-xs text-muted-foreground">Next 7 days</p>
          </CardContent>
        </Card>
        <Card className="border-corporate-100">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">KPI Progress</CardTitle>
            <BarChart3 className="h-4 w-4 text-corporate-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-corporate-800">78%</div>
            <p className="text-xs text-muted-foreground">Overall completion</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="tasks" className="w-full">
        <TabsList className="mb-4 bg-corporate-50">
          <TabsTrigger value="tasks" className="data-[state=active]:bg-corporate-600 data-[state=active]:text-white">
            Tasks
          </TabsTrigger>
          <TabsTrigger value="kpis" className="data-[state=active]:bg-corporate-600 data-[state=active]:text-white">
            KPIs
          </TabsTrigger>
          <TabsTrigger value="reports" className="data-[state=active]:bg-corporate-600 data-[state=active]:text-white">
            Reports
          </TabsTrigger>
        </TabsList>

        <TabsContent value="tasks" className="w-full">
          <Card className="border-corporate-100">
            <CardHeader>
              <CardTitle>Task Management</CardTitle>
              <CardDescription>Track and manage tasks assigned from board decisions</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="rounded-lg border border-corporate-100 p-4">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-corporate-800">Implement New HR Policy</h3>
                    <span className="inline-flex items-center rounded-full bg-yellow-100 px-2.5 py-0.5 text-xs font-medium text-yellow-800">
                      In Progress
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">
                    Develop and implement the new employee wellness program as approved in the last board meeting.
                  </p>
                  <div className="mt-2">
                    <div className="flex items-center justify-between text-xs">
                      <span>Progress</span>
                      <span>65%</span>
                    </div>
                    <Progress value={65} className="h-2 mt-1" />
                  </div>
                  <div className="mt-3 text-xs text-muted-foreground">
                    <span className="font-medium">Due Date:</span> May 15, 2023
                  </div>
                </div>

                <div className="rounded-lg border border-corporate-100 p-4">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-corporate-800">Q2 Budget Allocation</h3>
                    <span className="inline-flex items-center rounded-full bg-red-100 px-2.5 py-0.5 text-xs font-medium text-red-800">
                      Urgent
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">
                    Finalize the Q2 budget allocation based on the approved financial strategy.
                  </p>
                  <div className="mt-2">
                    <div className="flex items-center justify-between text-xs">
                      <span>Progress</span>
                      <span>30%</span>
                    </div>
                    <Progress value={30} className="h-2 mt-1" />
                  </div>
                  <div className="mt-3 text-xs text-muted-foreground">
                    <span className="font-medium">Due Date:</span> April 30, 2023
                  </div>
                </div>

                <div className="rounded-lg border border-corporate-100 p-4">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-corporate-800">Vendor Contract Renewal</h3>
                    <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800">
                      Completed
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">
                    Review and renew the IT infrastructure vendor contracts as per board approval.
                  </p>
                  <div className="mt-2">
                    <div className="flex items-center justify-between text-xs">
                      <span>Progress</span>
                      <span>100%</span>
                    </div>
                    <Progress value={100} className="h-2 mt-1" />
                  </div>
                  <div className="mt-3 text-xs text-muted-foreground">
                    <span className="font-medium">Completed:</span> April 10, 2023
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="kpis" className="w-full">
          <Card className="border-corporate-100">
            <CardHeader>
              <CardTitle>Key Performance Indicators</CardTitle>
              <CardDescription>Track progress on board-approved KPIs</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="rounded-lg border border-corporate-100 p-4">
                  <h3 className="font-semibold text-corporate-800">Revenue Growth</h3>
                  <div className="mt-2">
                    <div className="flex items-center justify-between text-xs">
                      <span>Target: 15% YoY</span>
                      <span>Current: 12%</span>
                    </div>
                    <Progress value={80} className="h-2 mt-1" />
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">
                    On track to meet annual target. Q3 projections show accelerated growth.
                  </p>
                </div>

                <div className="rounded-lg border border-corporate-100 p-4">
                  <h3 className="font-semibold text-corporate-800">Operational Efficiency</h3>
                  <div className="mt-2">
                    <div className="flex items-center justify-between text-xs">
                      <span>Target: 8% cost reduction</span>
                      <span>Current: 5%</span>
                    </div>
                    <Progress value={62} className="h-2 mt-1" />
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">
                    Implementing new processes to achieve target by year-end.
                  </p>
                </div>

                <div className="rounded-lg border border-corporate-100 p-4">
                  <h3 className="font-semibold text-corporate-800">Customer Satisfaction</h3>
                  <div className="mt-2">
                    <div className="flex items-center justify-between text-xs">
                      <span>Target: 90% satisfaction</span>
                      <span>Current: 87%</span>
                    </div>
                    <Progress value={96} className="h-2 mt-1" />
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">
                    Nearly at target. Recent customer service improvements showing positive results.
                  </p>
                </div>

                <div className="rounded-lg border border-corporate-100 p-4">
                  <h3 className="font-semibold text-corporate-800">Employee Retention</h3>
                  <div className="mt-2">
                    <div className="flex items-center justify-between text-xs">
                      <span>Target: 85% retention</span>
                      <span>Current: 82%</span>
                    </div>
                    <Progress value={96} className="h-2 mt-1" />
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">
                    New wellness program expected to improve retention rates further.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="reports" className="w-full">
          <Card className="border-corporate-100">
            <CardHeader>
              <CardTitle>Reports</CardTitle>
              <CardDescription>Manage and prepare reports for the board</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-end">
                  <Button className="bg-corporate-600 hover:bg-corporate-700">Create New Report</Button>
                </div>

                <div className="rounded-md border">
                  <div className="grid grid-cols-4 border-b px-4 py-3 font-medium">
                    <div className="col-span-2">Report</div>
                    <div>Status</div>
                    <div className="text-right">Actions</div>
                  </div>
                  <div className="divide-y">
                    {[
                      {
                        name: "Q1 Financial Performance",
                        description: "Quarterly financial results and analysis",
                        status: "Completed",
                        date: "March 31, 2023",
                      },
                      {
                        name: "Strategic Initiative Progress",
                        description: "Status update on key strategic initiatives",
                        status: "In Progress",
                        date: "Due: May 5, 2023",
                      },
                      {
                        name: "Annual Compliance Review",
                        description: "Review of regulatory compliance status",
                        status: "Pending",
                        date: "Due: May 15, 2023",
                      },
                      {
                        name: "Market Analysis",
                        description: "Analysis of market trends and competitive landscape",
                        status: "In Progress",
                        date: "Due: May 10, 2023",
                      },
                    ].map((report, index) => (
                      <div key={index} className="grid grid-cols-4 items-center px-4 py-3">
                        <div className="col-span-2">
                          <div className="font-medium">{report.name}</div>
                          <div className="text-xs text-muted-foreground">{report.description}</div>
                        </div>
                        <div>
                          <span
                            className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                              report.status === "Completed"
                                ? "bg-green-100 text-green-800"
                                : report.status === "In Progress"
                                  ? "bg-yellow-100 text-yellow-800"
                                  : "bg-gray-100 text-gray-800"
                            }`}
                          >
                            {report.status}
                          </span>
                          <div className="text-xs text-muted-foreground mt-1">{report.date}</div>
                        </div>
                        <div className="text-right">
                          <Button variant="ghost" size="sm">
                            {report.status === "Completed" ? "View" : "Edit"}
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
      </Tabs>
    </div>
  )
}
