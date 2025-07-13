"use client"

import { useState } from "react"
import { Download, MoreHorizontal, Plus, Search } from "lucide-react"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const boardMembers = [
  {
    id: 1,
    name: "Robert Johnson",
    role: "Chairperson",
    email: "robert.johnson@example.com",
    phone: "+1 (555) 123-4567",
    termStart: "Jan 2023",
    termEnd: "Dec 2025",
    committees: ["Executive", "Finance"],
    avatar: "/diverse-person-portrait.png",
    initials: "RJ",
  },
  {
    id: 2,
    name: "Sarah Williams",
    role: "Vice Chair",
    email: "sarah.williams@example.com",
    phone: "+1 (555) 234-5678",
    termStart: "Jan 2022",
    termEnd: "Dec 2024",
    committees: ["Executive", "Governance"],
    avatar: "/diverse-group-conversation.png",
    initials: "SW",
  },
  {
    id: 3,
    name: "Michael Chen",
    role: "Treasurer",
    email: "michael.chen@example.com",
    phone: "+1 (555) 345-6789",
    termStart: "Jan 2024",
    termEnd: "Dec 2026",
    committees: ["Finance", "Audit"],
    avatar: "/diverse-group-meeting.png",
    initials: "MC",
  },
  {
    id: 4,
    name: "Lisa Anderson",
    role: "Secretary",
    email: "lisa.anderson@example.com",
    phone: "+1 (555) 456-7890",
    termStart: "Jan 2023",
    termEnd: "Dec 2025",
    committees: ["Governance", "Nominating"],
    avatar: "/diverse-group-meeting.png",
    initials: "LA",
  },
  {
    id: 5,
    name: "David Rodriguez",
    role: "Board Member",
    email: "david.rodriguez@example.com",
    phone: "+1 (555) 567-8901",
    termStart: "Jan 2022",
    termEnd: "Dec 2024",
    committees: ["Audit", "Strategic Planning"],
    avatar: "/diverse-group-five.png",
    initials: "DR",
  },
  {
    id: 6,
    name: "Jennifer Kim",
    role: "Board Member",
    email: "jennifer.kim@example.com",
    phone: "+1 (555) 678-9012",
    termStart: "Jan 2024",
    termEnd: "Dec 2026",
    committees: ["Strategic Planning", "Nominating"],
    avatar: "/diverse-group-meeting.png",
    initials: "JK",
  },
  {
    id: 7,
    name: "Thomas Wilson",
    role: "Board Member",
    email: "thomas.wilson@example.com",
    phone: "+1 (555) 789-0123",
    termStart: "Jan 2023",
    termEnd: "Dec 2025",
    committees: ["Finance", "Strategic Planning"],
    avatar: "/diverse-group-meeting.png",
    initials: "TW",
  },
  {
    id: 8,
    name: "Maria Garcia",
    role: "Board Member",
    email: "maria.garcia@example.com",
    phone: "+1 (555) 890-1234",
    termStart: "Jan 2022",
    termEnd: "Dec 2024",
    committees: ["Governance", "Audit"],
    avatar: "/diverse-group-meeting.png",
    initials: "MG",
  },
]

export function MemberDirectory() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCommittee, setSelectedCommittee] = useState("all")

  const filteredMembers = boardMembers.filter((member) => {
    const matchesSearch =
      member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      member.role.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesCommittee = selectedCommittee === "all" || member.committees.includes(selectedCommittee)

    return matchesSearch && matchesCommittee
  })

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Board Members</h2>
          <p className="text-muted-foreground">Manage and view all board members and their details</p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Add Member
        </Button>
      </div>
      <div className="flex flex-col gap-4 sm:flex-row">
        <div className="relative flex-1">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search members..."
            className="w-full pl-8"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <Select value={selectedCommittee} onValueChange={setSelectedCommittee}>
          <SelectTrigger className="w-full sm:w-[180px]">
            <SelectValue placeholder="Committee" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Committees</SelectItem>
            <SelectItem value="Executive">Executive</SelectItem>
            <SelectItem value="Finance">Finance</SelectItem>
            <SelectItem value="Governance">Governance</SelectItem>
            <SelectItem value="Audit">Audit</SelectItem>
            <SelectItem value="Nominating">Nominating</SelectItem>
            <SelectItem value="Strategic Planning">Strategic Planning</SelectItem>
          </SelectContent>
        </Select>
        <Button variant="outline" className="gap-2">
          <Download className="h-4 w-4" />
          Export
        </Button>
      </div>
      <Tabs defaultValue="grid" className="w-full">
        <TabsList className="mb-4">
          <TabsTrigger value="grid">Grid View</TabsTrigger>
          <TabsTrigger value="list">List View</TabsTrigger>
        </TabsList>
        <TabsContent value="grid" className="w-full">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredMembers.map((member) => (
              <Card key={member.id} className="overflow-hidden">
                <CardHeader className="p-0">
                  <div className="relative h-40 bg-muted">
                    <div className="absolute inset-0 flex items-center justify-center bg-muted">
                      <Avatar className="h-40 w-40 rounded-none">
                        <AvatarImage src={member.avatar || "/placeholder.svg"} alt={member.name} />
                        <AvatarFallback className="rounded-none text-4xl">{member.initials}</AvatarFallback>
                      </Avatar>
                    </div>
                    <div className="absolute right-2 top-2">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon" className="rounded-full bg-background/80">
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem>View Profile</DropdownMenuItem>
                          <DropdownMenuItem>Edit Member</DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem className="text-destructive">Remove Member</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-4">
                  <div className="space-y-2">
                    <h3 className="font-semibold">{member.name}</h3>
                    <p className="text-sm text-muted-foreground">{member.role}</p>
                    <div className="flex flex-wrap gap-1">
                      {member.committees.map((committee) => (
                        <Badge key={committee} variant="outline">
                          {committee}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="border-t p-4">
                  <div className="flex w-full justify-between text-xs text-muted-foreground">
                    <span>
                      Term: {member.termStart} - {member.termEnd}
                    </span>
                    <Button variant="link" size="sm" className="h-auto p-0 text-xs">
                      Details
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="list">
          <div className="rounded-md border">
            <div className="grid grid-cols-6 border-b px-4 py-3 font-medium">
              <div className="col-span-2">Member</div>
              <div className="hidden sm:block">Role</div>
              <div className="hidden md:block">Term</div>
              <div className="hidden lg:block">Committees</div>
              <div className="text-right">Actions</div>
            </div>
            <div className="divide-y">
              {filteredMembers.map((member) => (
                <div key={member.id} className="grid grid-cols-6 items-center px-4 py-3">
                  <div className="col-span-2 flex items-center gap-3">
                    <Avatar className="h-9 w-9">
                      <AvatarImage src={member.avatar || "/placeholder.svg"} alt={member.name} />
                      <AvatarFallback>{member.initials}</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-medium">{member.name}</div>
                      <div className="text-xs text-muted-foreground sm:hidden">{member.role}</div>
                    </div>
                  </div>
                  <div className="hidden sm:block">{member.role}</div>
                  <div className="hidden md:block text-sm">
                    {member.termStart} - {member.termEnd}
                  </div>
                  <div className="hidden lg:block">
                    <div className="flex flex-wrap gap-1">
                      {member.committees.map((committee) => (
                        <Badge key={committee} variant="outline" className="text-xs">
                          {committee}
                        </Badge>
                      ))}
                    </div>
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
                        <DropdownMenuItem>View Profile</DropdownMenuItem>
                        <DropdownMenuItem>Edit Member</DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className="text-destructive">Remove Member</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
