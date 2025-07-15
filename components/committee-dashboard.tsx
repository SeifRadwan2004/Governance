"use client";

import { Calendar, CheckCircle, FileText, Users } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function CommitteeDashboard() {
  return (
    <div className="flex flex-col gap-4">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card className="border-corporate-100">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Committee Meetings
            </CardTitle>
            <Calendar className="h-4 w-4 text-corporate-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-corporate-800">3</div>
            <p className="text-xs text-muted-foreground">Upcoming this month</p>
          </CardContent>
        </Card>
        <Card className="border-corporate-100">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Tasks</CardTitle>
            <CheckCircle className="h-4 w-4 text-corporate-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-corporate-800">8</div>
            <p className="text-xs text-muted-foreground">Pending completion</p>
          </CardContent>
        </Card>
        <Card className="border-corporate-100">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Reports</CardTitle>
            <FileText className="h-4 w-4 text-corporate-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-corporate-800">2</div>
            <p className="text-xs text-muted-foreground">Due this month</p>
          </CardContent>
        </Card>
        <Card className="border-corporate-100">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Committee Members
            </CardTitle>
            <Users className="h-4 w-4 text-corporate-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-corporate-800">7</div>
            <p className="text-xs text-muted-foreground">Active members</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="meetings" className="w-full">
        <TabsList className="mb-4 bg-corporate-50">
          <TabsTrigger
            value="meetings"
            className="data-[state=active]:bg-corporate-600 data-[state=active]:text-white"
          >
            Meetings
          </TabsTrigger>
          <TabsTrigger
            value="tasks"
            className="data-[state=active]:bg-corporate-600 data-[state=active]:text-white"
          >
            Tasks
          </TabsTrigger>
          <TabsTrigger
            value="reports"
            className="data-[state=active]:bg-corporate-600 data-[state=active]:text-white"
          >
            Reports
          </TabsTrigger>
        </TabsList>

        <TabsContent value="meetings" className="w-full">
          <Card className="border-corporate-100">
            <CardHeader>
              <CardTitle>Committee Meetings</CardTitle>
              <CardDescription>
                Schedule and manage committee meetings
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="rounded-md border">
                  <div className="grid grid-cols-4 border-b px-4 py-3 font-medium">
                    <div className="col-span-2">Meeting</div>
                    <div>Date & Time</div>
                    <div className="text-right">Actions</div>
                  </div>
                  <div className="divide-y">
                    {[
                      {
                        title: "Audit Committee Meeting",
                        description: "Quarterly financial review",
                        date: "May 15, 2023",
                        time: "10:00 AM - 12:00 PM",
                      },
                      {
                        title: "Governance Committee Meeting",
                        description: "Board composition review",
                        date: "May 20, 2023",
                        time: "2:00 PM - 4:00 PM",
                      },
                      {
                        title: "Compensation Committee Meeting",
                        description: "Executive compensation review",
                        date: "May 25, 2023",
                        time: "9:00 AM - 11:00 AM",
                      },
                    ].map((meeting, index) => (
                      <div
                        key={index}
                        className="grid grid-cols-4 items-center px-4 py-3"
                      >
                        <div className="col-span-2">
                          <div className="font-medium">{meeting.title}</div>
                          <div className="text-xs text-muted-foreground">
                            {meeting.description}
                          </div>
                        </div>
                        <div>
                          <div className="text-sm">{meeting.date}</div>
                          <div className="text-xs text-muted-foreground">
                            {meeting.time}
                          </div>
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

        <TabsContent value="tasks" className="w-full">
          <Card className="border-corporate-100">
            <CardHeader>
              <CardTitle>Committee Tasks</CardTitle>
              <CardDescription>
                Track and manage committee tasks
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="rounded-lg border border-corporate-100 p-4">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-corporate-800">
                      Prepare Quarterly Audit Report
                    </h3>
                    <span className="inline-flex items-center rounded-full bg-yellow-100 px-2.5 py-0.5 text-xs font-medium text-yellow-800">
                      In Progress
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">
                    Review financial statements and prepare audit report for
                    board review.
                  </p>
                  <div className="mt-2">
                    <div className="flex items-center justify-between text-xs">
                      <span>Progress</span>
                      <span>70%</span>
                    </div>
                    <Progress value={70} className="h-2 mt-1" />
                  </div>
                  <div className="mt-3 text-xs text-muted-foreground">
                    <span className="font-medium">Due Date:</span> May 10, 2023
                  </div>
                </div>

                <div className="rounded-lg border border-corporate-100 p-4">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-corporate-800">
                      Board Composition Analysis
                    </h3>
                    <span className="inline-flex items-center rounded-full bg-yellow-100 px-2.5 py-0.5 text-xs font-medium text-yellow-800">
                      In Progress
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">
                    Analyze current board composition and identify gaps in
                    skills and diversity.
                  </p>
                  <div className="mt-2">
                    <div className="flex items-center justify-between text-xs">
                      <span>Progress</span>
                      <span>50%</span>
                    </div>
                    <Progress value={50} className="h-2 mt-1" />
                  </div>
                  <div className="mt-3 text-xs text-muted-foreground">
                    <span className="font-medium">Due Date:</span> May 18, 2023
                  </div>
                </div>

                <div className="rounded-lg border border-corporate-100 p-4">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-corporate-800">
                      Executive Compensation Benchmarking
                    </h3>
                    <span className="inline-flex items-center rounded-full bg-yellow-100 px-2.5 py-0.5 text-xs font-medium text-yellow-800">
                      In Progress
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">
                    Conduct industry benchmarking for executive compensation
                    packages.
                  </p>
                  <div className="mt-2">
                    <div className="flex items-center justify-between text-xs">
                      <span>Progress</span>
                      <span>40%</span>
                    </div>
                    <Progress value={40} className="h-2 mt-1" />
                  </div>
                  <div className="mt-3 text-xs text-muted-foreground">
                    <span className="font-medium">Due Date:</span> May 22, 2023
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="reports" className="w-full">
          <Card className="border-corporate-100">
            <CardHeader>
              <CardTitle>Committee Reports</CardTitle>
              <CardDescription>
                Manage and prepare committee reports
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-end">
                  <Button className="bg-corporate-600 hover:bg-corporate-700">
                    Create New Report
                  </Button>
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
                        name: "Q1 Audit Committee Report",
                        description: "Financial review and risk assessment",
                        status: "Draft",
                        date: "Due: May 12, 2023",
                      },
                      {
                        name: "Board Composition Recommendations",
                        description:
                          "Analysis and recommendations for board composition",
                        status: "Not Started",
                        date: "Due: May 20, 2023",
                      },
                      {
                        name: "Executive Compensation Review",
                        description:
                          "Annual review of executive compensation packages",
                        status: "In Progress",
                        date: "Due: May 23, 2023",
                      },
                    ].map((report, index) => (
                      <div
                        key={index}
                        className="grid grid-cols-4 items-center px-4 py-3"
                      >
                        <div className="col-span-2">
                          <div className="font-medium">{report.name}</div>
                          <div className="text-xs text-muted-foreground">
                            {report.description}
                          </div>
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
                          <div className="text-xs text-muted-foreground mt-1">
                            {report.date}
                          </div>
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
  );
}
