"use client";

import { useState } from "react";
import { Shield, Settings, Users, Vote } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CompanyConfigForm } from "@/components/admin/company-config-form";
import { AddUserForm } from "@/components/admin/add-user-form";
import { VotingCategoryForm } from "@/components/admin/voting-category-form";
import { EditVotingRuleForm } from "@/components/admin/edit-voting-rule-form";

// Change to default export
export default function AdminDashboard() {
  const { toast } = useToast();

  // Modal states
  const [isCompanyConfigOpen, setIsCompanyConfigOpen] = useState(false);
  const [isAddUserOpen, setIsAddUserOpen] = useState(false);
  const [isVotingCategoryOpen, setIsVotingCategoryOpen] = useState(false);
  const [isEditVotingRuleOpen, setIsEditVotingRuleOpen] = useState(false);
  const [currentVotingRule, setCurrentVotingRule] = useState("");

  const handleConfigure = (section: string) => {
    if (section === "Company Information") {
      setIsCompanyConfigOpen(true);
    } else {
      toast({
        title: "Configuration",
        description: `Opening ${section} configuration panel...`,
      });
    }
  };

  const handleEditVotingRule = (ruleType: string) => {
    setCurrentVotingRule(ruleType);
    setIsEditVotingRuleOpen(true);
  };

  const handleAddVotingCategory = () => {
    setIsVotingCategoryOpen(true);
  };

  const handleAddUser = () => {
    setIsAddUserOpen(true);
  };

  const handleEditUser = (userId: string) => {
    toast({
      title: "Edit User",
      description: `Opening edit form for user ${userId}...`,
    });
  };

  const handleViewAllUsers = () => {
    toast({
      title: "View All Users",
      description: "Opening comprehensive user management panel...",
    });
  };

  const handleViewLogs = () => {
    toast({
      title: "System Logs",
      description: "Opening system logs viewer...",
    });
  };

  // Form submission handlers
  const handleSaveCompanyConfig = (data: any) => {
    toast({
      title: "Configuration Saved",
      description: "Company information has been updated successfully.",
    });
    console.log("Company config saved:", data);
  };

  const handleSaveUser = (data: any) => {
    toast({
      title: "User Created",
      description: `User ${data.firstName} ${data.lastName} has been created successfully.`,
    });
    console.log("User created:", data);
  };

  const handleSaveVotingCategory = (data: any) => {
    toast({
      title: "Voting Category Created",
      description: `"${data.name}" voting category has been created successfully.`,
    });
    console.log("Voting category created:", data);
  };

  const handleSaveVotingRule = (data: any) => {
    toast({
      title: "Voting Rule Updated",
      description: `"${data.name}" has been updated successfully.`,
    });
    console.log("Voting rule updated:", data);
  };
  return (
    <div className="flex flex-col gap-4">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card className="border-corporate-100">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Organization Settings
            </CardTitle>
            <Settings className="h-4 w-4 text-corporate-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-corporate-800">12</div>
            <p className="text-xs text-muted-foreground">
              Configuration modules
            </p>
          </CardContent>
        </Card>
        <Card className="border-corporate-100">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Voting Rules</CardTitle>
            <Vote className="h-4 w-4 text-corporate-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-corporate-800">5</div>
            <p className="text-xs text-muted-foreground">
              Active rule categories
            </p>
          </CardContent>
        </Card>
        <Card className="border-corporate-100">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Users</CardTitle>
            <Users className="h-4 w-4 text-corporate-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-corporate-800">48</div>
            <p className="text-xs text-muted-foreground">Across all roles</p>
          </CardContent>
        </Card>
        <Card className="border-corporate-100">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">System Status</CardTitle>
            <Shield className="h-4 w-4 text-corporate-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">Active</div>
            <p className="text-xs text-muted-foreground">
              All systems operational
            </p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="organization" className="w-full">
        <TabsList className="mb-4 bg-corporate-50">
          <TabsTrigger
            value="organization"
            className="data-[state=active]:bg-corporate-600 data-[state=active]:text-white"
          >
            Organization
          </TabsTrigger>
          <TabsTrigger
            value="voting"
            className="data-[state=active]:bg-corporate-600 data-[state=active]:text-white"
          >
            Voting Rules
          </TabsTrigger>
          <TabsTrigger
            value="users"
            className="data-[state=active]:bg-corporate-600 data-[state=active]:text-white"
          >
            User Management
          </TabsTrigger>
          <TabsTrigger
            value="system"
            className="data-[state=active]:bg-corporate-600 data-[state=active]:text-white"
          >
            System Settings
          </TabsTrigger>
        </TabsList>

        <TabsContent value="organization" className="w-full">
          <Card className="border-corporate-100">
            <CardHeader>
              <CardTitle>Organization Configuration</CardTitle>
              <CardDescription>
                Configure your organization's structure and settings
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="rounded-lg border border-corporate-100 p-4">
                  <h3 className="font-semibold text-corporate-800">
                    Company Information
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    Configure basic company information, legal structure, and
                    registration details.
                  </p>
                  <Button
                    size="sm"
                    className="mt-2 bg-corporate-600 hover:bg-corporate-700"
                    onClick={() => handleConfigure("Company Information")}
                  >
                    Configure
                  </Button>
                </div>

                <div className="rounded-lg border border-corporate-100 p-4">
                  <h3 className="font-semibold text-corporate-800">
                    Governance Framework
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    Set up governance policies, bylaws, and compliance
                    requirements.
                  </p>
                  <Button
                    size="sm"
                    className="mt-2 bg-corporate-600 hover:bg-corporate-700"
                  >
                    Configure
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="voting" className="w-full">
          <Card className="border-corporate-100">
            <CardHeader>
              <CardTitle>Voting Rules Configuration</CardTitle>
              <CardDescription>
                Define and manage voting categories and rules
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="rounded-lg border border-corporate-100 p-4">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-corporate-800">
                      Standard Resolution
                    </h3>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() =>
                        handleEditVotingRule("Standard Resolution")
                      }
                    >
                      Edit
                    </Button>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">
                    Simple majority ({">"}50%) of votes cast required for
                    approval.
                  </p>
                  <div className="mt-2 text-xs text-muted-foreground">
                    <span className="font-medium">Quorum Required:</span> 25% of
                    total voting rights
                  </div>
                </div>

                <div className="rounded-lg border border-corporate-100 p-4">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-corporate-800">
                      Special Resolution
                    </h3>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => handleEditVotingRule("Special Resolution")}
                    >
                      Edit
                    </Button>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">
                    75% majority of votes cast required for approval.
                  </p>
                  <div className="mt-2 text-xs text-muted-foreground">
                    <span className="font-medium">Quorum Required:</span> 50% of
                    total voting rights
                  </div>
                </div>

                <div className="rounded-lg border border-corporate-100 p-4">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-corporate-800">
                      Board Resolution
                    </h3>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => handleEditVotingRule("Board Resolution")}
                    >
                      Edit
                    </Button>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">
                    Simple majority ({">"}50%) of board members present required
                    for approval.
                  </p>
                  <div className="mt-2 text-xs text-muted-foreground">
                    <span className="font-medium">Quorum Required:</span>{" "}
                    Majority of board members
                  </div>
                </div>

                <div className="rounded-lg border border-corporate-100 p-4">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-corporate-800">
                      Constitutional Amendment
                    </h3>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() =>
                        handleEditVotingRule("Constitutional Amendment")
                      }
                    >
                      Edit
                    </Button>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">
                    90% majority of votes cast required for approval.
                  </p>
                  <div className="mt-2 text-xs text-muted-foreground">
                    <span className="font-medium">Quorum Required:</span> 75% of
                    total voting rights
                  </div>
                </div>

                <div className="rounded-lg border border-dashed border-corporate-200 p-4 flex items-center justify-center">
                  <Button
                    className="bg-corporate-600 hover:bg-corporate-700"
                    onClick={handleAddVotingCategory}
                  >
                    Add New Voting Category
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="users" className="w-full">
          <Card className="border-corporate-100">
            <CardHeader>
              <CardTitle>User Management</CardTitle>
              <CardDescription>Manage users and their roles</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-end">
                  <Button
                    className="bg-corporate-600 hover:bg-corporate-700"
                    onClick={handleAddUser}
                  >
                    Add New User
                  </Button>
                </div>

                <div className="rounded-md border">
                  <div className="grid grid-cols-5 border-b px-4 py-3 font-medium">
                    <div className="col-span-2">User</div>
                    <div>Role</div>
                    <div>Status</div>
                    <div className="text-right">Actions</div>
                  </div>
                  <div className="divide-y">
                    {[
                      {
                        name: "Emma Thompson",
                        email: "emma@example.com",
                        role: "Shareholder",
                        status: "Active",
                      },
                      {
                        name: "Michael Chen",
                        email: "michael@example.com",
                        role: "General Assembly",
                        status: "Active",
                      },
                      {
                        name: "Sarah Johnson",
                        email: "sarah@example.com",
                        role: "Chairman",
                        status: "Active",
                      },
                      {
                        name: "David Rodriguez",
                        email: "david@example.com",
                        role: "Managing Director",
                        status: "Active",
                      },
                      {
                        name: "Olivia Williams",
                        email: "olivia@example.com",
                        role: "BOD Member",
                        status: "Active",
                      },
                    ].map((user, index) => (
                      <div
                        key={index}
                        className="grid grid-cols-5 items-center px-4 py-3"
                      >
                        <div className="col-span-2">
                          <div className="font-medium">{user.name}</div>
                          <div className="text-xs text-muted-foreground">
                            {user.email}
                          </div>
                        </div>
                        <div>{user.role}</div>
                        <div>
                          <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800">
                            {user.status}
                          </span>
                        </div>
                        <div className="text-right">
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => handleEditUser(user.email)}
                          >
                            Edit
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button
                variant="outline"
                className="w-full"
                onClick={handleViewAllUsers}
              >
                View All Users
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="system" className="w-full">
          <Card className="border-corporate-100">
            <CardHeader>
              <CardTitle>System Settings</CardTitle>
              <CardDescription>
                Configure system-wide settings and preferences
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="rounded-lg border border-corporate-100 p-4">
                  <h3 className="font-semibold text-corporate-800">
                    Security Settings
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    Configure password policies, two-factor authentication, and
                    session timeouts.
                  </p>
                  <Button
                    size="sm"
                    className="mt-2 bg-corporate-600 hover:bg-corporate-700"
                  >
                    Configure
                  </Button>
                </div>

                <div className="rounded-lg border border-corporate-100 p-4">
                  <h3 className="font-semibold text-corporate-800">
                    Email Notifications
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    Configure email templates, notification frequency, and
                    delivery settings.
                  </p>
                  <Button
                    size="sm"
                    className="mt-2 bg-corporate-600 hover:bg-corporate-700"
                  >
                    Configure
                  </Button>
                </div>

                <div className="rounded-lg border border-corporate-100 p-4">
                  <h3 className="font-semibold text-corporate-800">
                    Data Retention
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    Configure data retention policies, backup schedules, and
                    archiving rules.
                  </p>
                  <Button
                    size="sm"
                    className="mt-2 bg-corporate-600 hover:bg-corporate-700"
                  >
                    Configure
                  </Button>
                </div>

                <div className="rounded-lg border border-corporate-100 p-4">
                  <h3 className="font-semibold text-corporate-800">
                    System Logs
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    View system logs, audit trails, and activity history.
                  </p>
                  <Button
                    size="sm"
                    className="mt-2 bg-corporate-600 hover:bg-corporate-700"
                  >
                    View Logs
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Modal Components */}
      <CompanyConfigForm
        isOpen={isCompanyConfigOpen}
        onClose={() => setIsCompanyConfigOpen(false)}
        onSave={handleSaveCompanyConfig}
      />

      <AddUserForm
        isOpen={isAddUserOpen}
        onClose={() => setIsAddUserOpen(false)}
        onSave={handleSaveUser}
      />

      <VotingCategoryForm
        isOpen={isVotingCategoryOpen}
        onClose={() => setIsVotingCategoryOpen(false)}
        onSave={handleSaveVotingCategory}
      />

      <EditVotingRuleForm
        isOpen={isEditVotingRuleOpen}
        onClose={() => setIsEditVotingRuleOpen(false)}
        onSave={handleSaveVotingRule}
        ruleType={currentVotingRule}
      />
    </div>
  );
}
