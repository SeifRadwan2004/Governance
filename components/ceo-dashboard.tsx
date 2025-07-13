"use client"

import { BarChart3, CheckCircle, ClipboardList, FileText } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function CEODashboard() {
  return (
    <div className="flex flex-col gap-4">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card className="border-corporate-100">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Board Directives</CardTitle>
            <ClipboardList className="h-4 w-4 text-corporate-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-corporate-800">12</div>
            <p className="text-xs text-muted-foreground">Active directives</p>
          </CardContent>
        </Card>
        <Card className="border-corporate-100">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">KPI Status</CardTitle>
            <BarChart3 className="h-4 w-4 text-corporate-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-corporate-800">85%</div>
            <p className="text-xs text-muted-foreground">Overall completion</p>
          </CardContent>
        </Card>
        <Card className="border-corporate-100">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Reports Due</CardTitle>
            <FileText className="h-4 w-4 text-corporate-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-corporate-800">3</div>
            <p className="text-xs text-muted-foreground">For next board meeting</p>
          </CardContent>
        </Card>
        <Card className="border-corporate-100">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Completed Tasks</CardTitle>
            <CheckCircle className="h-4 w-4 text-corporate-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-corporate-800">28</div>
            <p className="text-xs text-muted-foreground">This quarter</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="directives" className="w-full">
        <TabsList className="mb-4 bg-corporate-50">
          <TabsTrigger
            value="directives"
            className="data-[state=active]:bg-corporate-600 data-[state=active]:text-white"
          >
            Board Directives
          </TabsTrigger>
          <TabsTrigger value="kpis" className="data-[state=active]:bg-corporate-600 data-[state=active]:text-white">
            My KPIs
          </TabsTrigger>
          <TabsTrigger value="reports" className="data-[state=active]:bg-corporate-600 data-[state=active]:text-white">
            Board Reports
          </TabsTrigger>
        </TabsList>

        <TabsContent value="directives" className="w-full">
          <Card className="border-corporate-100">
            <CardHeader>
              <CardTitle>Board Directives</CardTitle>
              <CardDescription>Track and implement board decisions</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="rounded-md border">
                  <div className="grid grid-cols-5 border-b px-4 py-3 font-medium">
                    <div className="col-span-2">Directive</div>
                    <div>Date Issued</div>
                    <div>Status</div>
                    <div className="text-right">Actions</div>
                  </div>
                  <div className="divide-y">
                    {[
                      {
                        title: "Implement Cost Reduction Strategy",
                        description: "10% reduction in operational expenses",
                        date: "Apr 15, 2023",
                        status: "In Progress",
                        progress: 60,
                      },
                      {
                        title: "Expand European Market Presence",
                        description: "Open offices in 3 new countries",
                        date: "Mar 10, 2023",
                        status: "In Progress",
                        progress: 40,
                      },
                      {
                        title: "Develop Sustainability Roadmap",
                        description: "Create 5-year sustainability plan",
                        date: "Feb 20, 2023",
                        status: "Completed",
                        progress: 100,
                      },
                      {
                        title: "Executive Team Restructuring",
                        description: "Optimize C-suite roles and responsibilities",
                        date: "Apr 5, 2023",
                        status: "In Progress",
                        progress: 75,
                      },
                      {
                        title: "Digital Transformation Initiative",
                        description: "Implement company-wide digital strategy",
                        date: "Jan 15, 2023",
                        status: "In Progress",
                        progress: 80,
                      },
                    ].map((directive, index) => (
                      <div key={index} className="px-4 py-3">
                        <div className="grid grid-cols-5 items-center">
                          <div className="col-span-2">
                            <div className="font-medium">{directive.title}</div>
                            <div className="text-xs text-muted-foreground">{directive.description}</div>
                          </div>
                          <div className="text-sm">{directive.date}</div>
                          <div>
                            <span
                              className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                                directive.status === "Completed"
                                  ? "bg-green-100 text-green-800"
                                  : "bg-yellow-100 text-yellow-800"
                              }`}
                            >
                              {directive.status}
                            </span>
                          </div>
                          <div className="text-right">
                            <Button variant="ghost" size="sm">
                              View Details
                            </Button>
                          </div>
                        </div>
                        <div className="mt-2">
                          <div className="flex items-center justify-between text-xs">
                            <span>Progress</span>
                            <span>{directive.progress}%</span>
                          </div>
                          <Progress value={directive.progress} className="h-2 mt-1" />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="kpis" className="w-full">
          <Card className="border-corporate-100">
            <CardHeader>
              <CardTitle>My Key Performance Indicators</CardTitle>
              <CardDescription>Track progress on board-approved KPIs</CardDescription>
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
                  <div className="mt-2 flex gap-2">
                    <Button size="sm" variant="outline">
                      View Details
                    </Button>
                    <Button size="sm" variant="outline">
                      Update Status
                    </Button>
                  </div>
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
                  <div className="mt-2 flex gap-2">
                    <Button size="sm" variant="outline">
                      View Details
                    </Button>
                    <Button size="sm" variant="outline">
                      Update Status
                    </Button>
                  </div>
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
                  <div className="mt-2 flex gap-2">
                    <Button size="sm" variant="outline">
                      View Details
                    </Button>
                    <Button size="sm" variant="outline">
                      Update Status
                    </Button>
                  </div>
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
                  <div className="mt-2 flex gap-2">
                    <Button size="sm" variant="outline">
                      View Details
                    </Button>
                    <Button size="sm" variant="outline">
                      Update Status
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="reports" className="w-full">
          <Card className="border-corporate-100">
            <CardHeader>
              <CardTitle>Board Reports</CardTitle>
              <CardDescription>Prepare and manage reports for the board</CardDescription>
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
                        name: "CEO Quarterly Update",
                        description: "Overview of company performance and strategic initiatives",
                        status: "Draft",
                        date: "Due: May 20, 2023",
                      },
                      {
                        name: "Strategic Plan Progress",
                        description: "Update on 5-year strategic plan implementation",
                        status: "In Progress",
                        date: "Due: May 15, 2023",
                      },
                      {
                        name: "Executive Team Assessment",
                        description: "Performance review of executive leadership team",
                        status: "Not Started",
                        date: "Due: June 1, 2023",
                      },
                      {
                        name: "Market Expansion Analysis",
                        description: "Feasibility study for new market entry",
                        status: "In Progress",
                        date: "Due: May 25, 2023",
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
                              report.status === "Draft"
                                ? "bg-yellow-100 text-yellow-800"
                                : report.status === "In Progress"
                                  ? "bg-blue-100 text-blue-800"
                                  : "bg-gray-100 text-gray-800"
                            }`}
                          >
                            {report.status}
                          </span>
                          <div className="text-xs text-muted-foreground mt-1">{report.date}</div>
                        </div>
                        <div className="text-right">
                          <Button variant="ghost" size="sm">
                            {report.status === "Not Started" ? "Start" : "Edit"}
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
