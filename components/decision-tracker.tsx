"use client";

import { useState } from "react";
import {
  CheckCircle,
  Clock,
  MoreHorizontal,
  Plus,
  Search,
  XCircle,
} from "lucide-react";
import { useRouter } from "next/navigation";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";

const decisions = [
  {
    id: 1,
    title: "Annual Budget Approval",
    description: "Approval of the fiscal year 2025 operating budget of $10.5M",
    category: "Finance",
    status: "Approved",
    dateSubmitted: "May 10, 2025",
    dateDecided: "May 15, 2025",
    submittedBy: {
      name: "Michael Chen",
      avatar: "/diverse-group-avatars.png",
      initials: "MC",
    },
    votes: {
      yes: 12,
      no: 1,
      abstain: 2,
    },
    implementation: {
      status: "In Progress",
      progress: 65,
      dueDate: "June 30, 2025",
      assignedTo: "Finance Department",
    },
  },
  {
    id: 2,
    title: "New Board Member Appointment",
    description: "Appointment of Dr. Emily Rodriguez to the Board of Directors",
    category: "Governance",
    status: "Approved",
    dateSubmitted: "April 25, 2025",
    dateDecided: "May 15, 2025",
    submittedBy: {
      name: "Sarah Williams",
      avatar: "/diverse-group-avatars.png",
      initials: "SW",
    },
    votes: {
      yes: 14,
      no: 0,
      abstain: 1,
    },
    implementation: {
      status: "Completed",
      progress: 100,
      dueDate: "May 20, 2025",
      assignedTo: "Governance Committee",
    },
  },
  {
    id: 3,
    title: "Strategic Plan Revision",
    description:
      "Revision of the 5-year strategic plan to include digital transformation initiatives",
    category: "Strategy",
    status: "Pending",
    dateSubmitted: "May 20, 2025",
    dateDecided: "",
    submittedBy: {
      name: "Robert Johnson",
      avatar: "/diverse-group-avatars.png",
      initials: "RJ",
    },
    votes: {
      yes: 0,
      no: 0,
      abstain: 0,
    },
    implementation: {
      status: "Not Started",
      progress: 0,
      dueDate: "",
      assignedTo: "",
    },
  },
  {
    id: 4,
    title: "Executive Compensation Package",
    description:
      "Approval of the revised executive compensation package for the CEO and CFO",
    category: "Compensation",
    status: "Pending",
    dateSubmitted: "May 18, 2025",
    dateDecided: "",
    submittedBy: {
      name: "Lisa Anderson",
      avatar: "/diverse-group-avatars.png",
      initials: "LA",
    },
    votes: {
      yes: 0,
      no: 0,
      abstain: 0,
    },
    implementation: {
      status: "Not Started",
      progress: 0,
      dueDate: "",
      assignedTo: "",
    },
  },
  {
    id: 5,
    title: "Sustainability Initiative",
    description:
      "Approval of the new sustainability initiative to reduce carbon footprint by 30% by 2030",
    category: "Strategy",
    status: "Approved",
    dateSubmitted: "April 10, 2025",
    dateDecided: "April 25, 2025",
    submittedBy: {
      name: "David Rodriguez",
      avatar: "/diverse-group-avatars.png",
      initials: "DR",
    },
    votes: {
      yes: 13,
      no: 1,
      abstain: 1,
    },
    implementation: {
      status: "In Progress",
      progress: 25,
      dueDate: "December 31, 2025",
      assignedTo: "Sustainability Committee",
    },
  },
  {
    id: 6,
    title: "Acquisition of XYZ Corp",
    description: "Approval of the acquisition of XYZ Corp for $25M",
    category: "Finance",
    status: "Rejected",
    dateSubmitted: "March 15, 2025",
    dateDecided: "April 5, 2025",
    submittedBy: {
      name: "Jennifer Kim",
      avatar: "/diverse-group-avatars.png",
      initials: "JK",
    },
    votes: {
      yes: 5,
      no: 8,
      abstain: 2,
    },
    implementation: {
      status: "Cancelled",
      progress: 0,
      dueDate: "",
      assignedTo: "",
    },
  },
  {
    id: 7,
    title: "Board Meeting Schedule 2026",
    description: "Approval of the board meeting schedule for 2026",
    category: "Governance",
    status: "Pending",
    dateSubmitted: "May 22, 2025",
    dateDecided: "",
    submittedBy: {
      name: "Thomas Wilson",
      avatar: "/diverse-group-avatars.png",
      initials: "TW",
    },
    votes: {
      yes: 0,
      no: 0,
      abstain: 0,
    },
    implementation: {
      status: "Not Started",
      progress: 0,
      dueDate: "",
      assignedTo: "",
    },
  },
];

export function DecisionTracker() {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState("");

  const handleCastVote = () => {
    router.push("/voting");
  };
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedStatus, setSelectedStatus] = useState("all");

  const filteredDecisions = decisions.filter((decision) => {
    const matchesSearch =
      decision.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      decision.description.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesCategory =
      selectedCategory === "all" || decision.category === selectedCategory;
    const matchesStatus =
      selectedStatus === "all" || decision.status === selectedStatus;

    return matchesSearch && matchesCategory && matchesStatus;
  });

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Decisions</h2>
          <p className="text-muted-foreground">
            Track and manage board decisions and their implementation
          </p>
        </div>
        <Dialog>
          <DialogTrigger asChild>
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              New Proposal
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[600px]">
            <DialogHeader>
              <DialogTitle>Submit New Proposal</DialogTitle>
              <DialogDescription>
                Create a new proposal for board consideration
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <Label htmlFor="title">Proposal Title</Label>
                <Input id="title" placeholder="Enter proposal title" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  placeholder="Enter proposal description"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="category">Category</Label>
                <Select>
                  <SelectTrigger id="category">
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="finance">Finance</SelectItem>
                    <SelectItem value="governance">Governance</SelectItem>
                    <SelectItem value="strategy">Strategy</SelectItem>
                    <SelectItem value="compensation">Compensation</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="supporting-docs">Supporting Documents</Label>
                <Input id="supporting-docs" type="file" />
              </div>
            </div>
            <DialogFooter>
              <Button type="submit">Submit Proposal</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
      <div className="flex flex-col gap-4 sm:flex-row">
        <div className="relative flex-1">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search decisions..."
            className="w-full pl-8"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <Select value={selectedCategory} onValueChange={setSelectedCategory}>
          <SelectTrigger className="w-full sm:w-[150px]">
            <SelectValue placeholder="Category" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Categories</SelectItem>
            <SelectItem value="Finance">Finance</SelectItem>
            <SelectItem value="Governance">Governance</SelectItem>
            <SelectItem value="Strategy">Strategy</SelectItem>
            <SelectItem value="Compensation">Compensation</SelectItem>
          </SelectContent>
        </Select>
        <Select value={selectedStatus} onValueChange={setSelectedStatus}>
          <SelectTrigger className="w-full sm:w-[150px]">
            <SelectValue placeholder="Status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Status</SelectItem>
            <SelectItem value="Approved">Approved</SelectItem>
            <SelectItem value="Rejected">Rejected</SelectItem>
            <SelectItem value="Pending">Pending</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <Tabs defaultValue="all" className="w-full">
        <TabsList className="mb-4">
          <TabsTrigger value="all">All Decisions</TabsTrigger>
          <TabsTrigger value="pending">Pending</TabsTrigger>
          <TabsTrigger value="approved">Approved</TabsTrigger>
          <TabsTrigger value="implementation">Implementation</TabsTrigger>
        </TabsList>
        <TabsContent value="all" className="w-full">
          <div className="rounded-md border">
            <div className="grid grid-cols-7 border-b px-4 py-3 font-medium">
              <div className="col-span-2">Decision</div>
              <div className="hidden sm:block">Category</div>
              <div className="hidden md:block">Status</div>
              <div className="hidden lg:block">Submitted</div>
              <div className="hidden lg:block">Implementation</div>
              <div className="text-right">Actions</div>
            </div>
            <div className="divide-y">
              {filteredDecisions.map((decision) => (
                <div
                  key={decision.id}
                  className="grid grid-cols-7 items-center px-4 py-3"
                >
                  <div className="col-span-2">
                    <div className="font-medium">{decision.title}</div>
                    <div className="text-xs text-muted-foreground sm:hidden">
                      {decision.category}
                    </div>
                  </div>
                  <div className="hidden sm:block">
                    <Badge variant="outline">{decision.category}</Badge>
                  </div>
                  <div className="hidden md:block">
                    <Badge
                      variant={
                        decision.status === "Approved"
                          ? "default"
                          : decision.status === "Rejected"
                            ? "destructive"
                            : "secondary"
                      }
                    >
                      {decision.status}
                    </Badge>
                  </div>
                  <div className="hidden lg:block text-sm">
                    <div>{decision.dateSubmitted}</div>
                    <div className="text-xs text-muted-foreground">
                      by {decision.submittedBy.name}
                    </div>
                  </div>
                  <div className="hidden lg:block">
                    {decision.implementation.status !== "Not Started" && (
                      <div className="flex flex-col gap-1">
                        <div className="text-xs flex justify-between">
                          <span>{decision.implementation.status}</span>
                          <span>{decision.implementation.progress}%</span>
                        </div>
                        <Progress
                          value={decision.implementation.progress}
                          className="h-2"
                        />
                      </div>
                    )}
                    {decision.implementation.status === "Not Started" && (
                      <span className="text-xs text-muted-foreground">
                        Not started
                      </span>
                    )}
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
                        {decision.status === "Pending" && (
                          <>
                            <DropdownMenuItem onClick={handleCastVote}>
                              Cast Vote
                            </DropdownMenuItem>
                            <DropdownMenuItem>Edit Proposal</DropdownMenuItem>
                          </>
                        )}
                        {decision.status === "Approved" &&
                          decision.implementation.status !== "Completed" && (
                            <DropdownMenuItem>
                              Update Implementation
                            </DropdownMenuItem>
                          )}
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>Download Details</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </TabsContent>
        <TabsContent value="pending" className="w-full">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {filteredDecisions
              .filter((decision) => decision.status === "Pending")
              .map((decision) => (
                <Card key={decision.id}>
                  <CardHeader>
                    <CardTitle>{decision.title}</CardTitle>
                    <CardDescription>{decision.category}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm">{decision.description}</p>
                    <div className="mt-4 flex items-center">
                      <Avatar className="h-8 w-8">
                        <AvatarImage
                          src={
                            decision.submittedBy.avatar || "/placeholder.svg"
                          }
                          alt={decision.submittedBy.name}
                        />
                        <AvatarFallback>
                          {decision.submittedBy.initials}
                        </AvatarFallback>
                      </Avatar>
                      <div className="ml-2">
                        <p className="text-sm font-medium">
                          {decision.submittedBy.name}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {decision.dateSubmitted}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button variant="outline" size="sm">
                      View Details
                    </Button>
                    <Button onClick={handleCastVote} size="sm">
                      Cast Vote
                    </Button>
                  </CardFooter>
                </Card>
              ))}
          </div>
        </TabsContent>
        <TabsContent value="approved" className="w-full">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {filteredDecisions
              .filter((decision) => decision.status === "Approved")
              .map((decision) => (
                <Card key={decision.id}>
                  <CardHeader className="pb-2">
                    <div className="flex justify-between">
                      <Badge className="mb-2" variant="default">
                        Approved
                      </Badge>
                      <Badge variant="outline">{decision.category}</Badge>
                    </div>
                    <CardTitle>{decision.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm">{decision.description}</p>
                    <div className="mt-4 space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Voting Results:</span>
                      </div>
                      <div className="flex gap-4 text-sm">
                        <div className="flex items-center gap-1">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span>{decision.votes.yes}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <XCircle className="h-4 w-4 text-red-500" />
                          <span>{decision.votes.no}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4 text-muted-foreground" />
                          <span>{decision.votes.abstain}</span>
                        </div>
                      </div>
                      <div className="text-xs text-muted-foreground">
                        Decision Date: {decision.dateDecided}
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" size="sm" className="w-full">
                      View Implementation
                    </Button>
                  </CardFooter>
                </Card>
              ))}
          </div>
        </TabsContent>
        <TabsContent value="implementation" className="w-full">
          <div className="rounded-md border">
            <div className="grid grid-cols-6 border-b px-4 py-3 font-medium">
              <div className="col-span-2">Decision</div>
              <div className="hidden sm:block">Status</div>
              <div className="hidden md:block">Progress</div>
              <div className="hidden lg:block">Due Date</div>
              <div className="text-right">Actions</div>
            </div>
            <div className="divide-y">
              {filteredDecisions
                .filter((decision) => decision.status === "Approved")
                .map((decision) => (
                  <div
                    key={decision.id}
                    className="grid grid-cols-6 items-center px-4 py-3"
                  >
                    <div className="col-span-2">
                      <div className="font-medium">{decision.title}</div>
                      <div className="text-xs text-muted-foreground">
                        Assigned to:{" "}
                        {decision.implementation.assignedTo || "Unassigned"}
                      </div>
                    </div>
                    <div className="hidden sm:block">
                      <Badge
                        variant={
                          decision.implementation.status === "Completed"
                            ? "default"
                            : decision.implementation.status === "Cancelled"
                              ? "destructive"
                              : "secondary"
                        }
                      >
                        {decision.implementation.status}
                      </Badge>
                    </div>
                    <div className="hidden md:block">
                      <div className="flex flex-col gap-1">
                        <div className="text-xs flex justify-between">
                          <span>{decision.implementation.progress}%</span>
                        </div>
                        <Progress
                          value={decision.implementation.progress}
                          className="h-2"
                        />
                      </div>
                    </div>
                    <div className="hidden lg:block text-sm">
                      {decision.implementation.dueDate || "Not set"}
                    </div>
                    <div className="text-right">
                      <Button variant="outline" size="sm">
                        Update
                      </Button>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
