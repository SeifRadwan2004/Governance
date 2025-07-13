"use client"

import { FileCheck, FileText, Scale, ShieldAlert } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function LegalDashboard() {
  return (
    <div className="flex flex-col gap-4">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card className="border-corporate-100">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Governance Documents</CardTitle>
            <FileText className="h-4 w-4 text-corporate-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-corporate-800">24</div>
            <p className="text-xs text-muted-foreground">Total documents</p>
          </CardContent>
        </Card>
        <Card className="border-corporate-100">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Compliance Status</CardTitle>
            <FileCheck className="h-4 w-4 text-corporate-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">Compliant</div>
            <p className="text-xs text-muted-foreground">All requirements met</p>
          </CardContent>
        </Card>
        <Card className="border-corporate-100">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Legal Reviews</CardTitle>
            <Scale className="h-4 w-4 text-corporate-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-corporate-800">5</div>
            <p className="text-xs text-muted-foreground">Pending reviews</p>
          </CardContent>
        </Card>
        <Card className="border-corporate-100">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Risk Alerts</CardTitle>
            <ShieldAlert className="h-4 w-4 text-corporate-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-corporate-800">2</div>
            <p className="text-xs text-muted-foreground">Require attention</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="documents" className="w-full">
        <TabsList className="mb-4 bg-corporate-50">
          <TabsTrigger
            value="documents"
            className="data-[state=active]:bg-corporate-600 data-[state=active]:text-white"
          >
            Documents
          </TabsTrigger>
          <TabsTrigger
            value="compliance"
            className="data-[state=active]:bg-corporate-600 data-[state=active]:text-white"
          >
            Compliance
          </TabsTrigger>
          <TabsTrigger value="reviews" className="data-[state=active]:bg-corporate-600 data-[state=active]:text-white">
            Legal Reviews
          </TabsTrigger>
        </TabsList>

        <TabsContent value="documents" className="w-full">
          <Card className="border-corporate-100">
            <CardHeader>
              <CardTitle>Governance Documents</CardTitle>
              <CardDescription>Manage and access governance documents</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-end">
                  <Button className="bg-corporate-600 hover:bg-corporate-700">Upload Document</Button>
                </div>

                <div className="rounded-md border">
                  <div className="grid grid-cols-4 border-b px-4 py-3 font-medium">
                    <div className="col-span-2">Document</div>
                    <div>Last Updated</div>
                    <div className="text-right">Actions</div>
                  </div>
                  <div className="divide-y">
                    {[
                      {
                        name: "Articles of Association",
                        description: "Company's constitutional document",
                        date: "Jan 15, 2023",
                      },
                      {
                        name: "Board Charter",
                        description: "Roles and responsibilities of the board",
                        date: "Feb 10, 2023",
                      },
                      {
                        name: "Code of Conduct",
                        description: "Ethical standards for the organization",
                        date: "Mar 5, 2023",
                      },
                      {
                        name: "Delegation of Authority",
                        description: "Authority matrix for decision-making",
                        date: "Apr 20, 2023",
                      },
                      {
                        name: "Conflict of Interest Policy",
                        description: "Guidelines for managing conflicts of interest",
                        date: "Mar 15, 2023",
                      },
                    ].map((document, index) => (
                      <div key={index} className="grid grid-cols-4 items-center px-4 py-3">
                        <div className="col-span-2">
                          <div className="font-medium">{document.name}</div>
                          <div className="text-xs text-muted-foreground">{document.description}</div>
                        </div>
                        <div className="text-sm">{document.date}</div>
                        <div className="text-right">
                          <Button variant="ghost" size="sm">
                            View
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

        <TabsContent value="compliance" className="w-full">
          <Card className="border-corporate-100">
            <CardHeader>
              <CardTitle>Compliance Management</CardTitle>
              <CardDescription>Track and manage compliance requirements</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="rounded-lg border border-corporate-100 p-4">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-corporate-800">Annual General Meeting</h3>
                    <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800">
                      Compliant
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">
                    Annual general meeting held within required timeframe.
                  </p>
                  <div className="mt-3 text-xs text-muted-foreground">
                    <span className="font-medium">Last Completed:</span> Mar 15, 2023
                  </div>
                  <div className="mt-3 text-xs text-muted-foreground">
                    <span className="font-medium">Next Due:</span> Mar 15, 2024
                  </div>
                </div>

                <div className="rounded-lg border border-corporate-100 p-4">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-corporate-800">Board Composition</h3>
                    <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800">
                      Compliant
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">
                    Board composition meets regulatory requirements for independence and diversity.
                  </p>
                  <div className="mt-3 text-xs text-muted-foreground">
                    <span className="font-medium">Last Reviewed:</span> Apr 10, 2023
                  </div>
                </div>

                <div className="rounded-lg border border-corporate-100 p-4">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-corporate-800">Financial Reporting</h3>
                    <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800">
                      Compliant
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">
                    Financial statements prepared and filed within required timeframes.
                  </p>
                  <div className="mt-3 text-xs text-muted-foreground">
                    <span className="font-medium">Last Filed:</span> Mar 31, 2023
                  </div>
                  <div className="mt-3 text-xs text-muted-foreground">
                    <span className="font-medium">Next Due:</span> Jun 30, 2023
                  </div>
                </div>

                <div className="rounded-lg border border-corporate-100 p-4">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-corporate-800">Insider Trading Policy</h3>
                    <span className="inline-flex items-center rounded-full bg-yellow-100 px-2.5 py-0.5 text-xs font-medium text-yellow-800">
                      Review Required
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">
                    Policy requires annual review and update to reflect regulatory changes.
                  </p>
                  <div className="mt-3 text-xs text-muted-foreground">
                    <span className="font-medium">Last Updated:</span> May 5, 2022
                  </div>
                  <div className="mt-3 text-xs text-muted-foreground">
                    <span className="font-medium">Review Due:</span> May 5, 2023
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="reviews" className="w-full">
          <Card className="border-corporate-100">
            <CardHeader>
              <CardTitle>Legal Reviews</CardTitle>
              <CardDescription>Manage and track legal reviews</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="rounded-md border">
                  <div className="grid grid-cols-4 border-b px-4 py-3 font-medium">
                    <div className="col-span-2">Review Item</div>
                    <div>Status</div>
                    <div className="text-right">Actions</div>
                  </div>
                  <div className="divide-y">
                    {[
                      {
                        name: "Board Meeting Minutes",
                        description: "Legal review of April board meeting minutes",
                        status: "Pending",
                        date: "Due: May 10, 2023",
                      },
                      {
                        name: "Executive Employment Contract",
                        description: "Review of new CFO employment contract",
                        status: "In Progress",
                        date: "Due: May 15, 2023",
                      },
                      {
                        name: "Shareholder Agreement Amendment",
                        description: "Review of proposed amendments to shareholder agreement",
                        status: "Pending",
                        date: "Due: May 20, 2023",
                      },
                      {
                        name: "Regulatory Compliance Report",
                        description: "Review of quarterly regulatory compliance report",
                        status: "In Progress",
                        date: "Due: May 12, 2023",
                      },
                      {
                        name: "Vendor Contract",
                        description: "Review of IT infrastructure vendor contract",
                        status: "Pending",
                        date: "Due: May 18, 2023",
                      },
                    ].map((review, index) => (
                      <div key={index} className="grid grid-cols-4 items-center px-4 py-3">
                        <div className="col-span-2">
                          <div className="font-medium">{review.name}</div>
                          <div className="text-xs text-muted-foreground">{review.description}</div>
                        </div>
                        <div>
                          <span
                            className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                              review.status === "Pending"
                                ? "bg-yellow-100 text-yellow-800"
                                : "bg-blue-100 text-blue-800"
                            }`}
                          >
                            {review.status}
                          </span>
                          <div className="text-xs text-muted-foreground mt-1">{review.date}</div>
                        </div>
                        <div className="text-right">
                          <Button variant="ghost" size="sm">
                            {review.status === "Pending" ? "Start Review" : "Continue Review"}
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
