"use client"

import { useState } from "react"
import { Check, ChevronsUpDown, Plus, Save, Trash, UserPlus } from "lucide-react"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"

const users = [
  {
    id: 1,
    name: "Robert Johnson",
    email: "robert.johnson@example.com",
    role: "admin",
    avatar: "/diverse-group-avatars.png",
    initials: "RJ",
  },
  {
    id: 2,
    name: "Sarah Williams",
    email: "sarah.williams@example.com",
    role: "member",
    avatar: "/diverse-group-avatars.png",
    initials: "SW",
  },
  {
    id: 3,
    name: "Michael Chen",
    email: "michael.chen@example.com",
    role: "member",
    avatar: "/diverse-group-avatars.png",
    initials: "MC",
  },
  {
    id: 4,
    name: "Lisa Anderson",
    email: "lisa.anderson@example.com",
    role: "observer",
    avatar: "/diverse-group-avatars.png",
    initials: "LA",
  },
]

const committees = [
  { value: "executive", label: "Executive Committee" },
  { value: "finance", label: "Finance Committee" },
  { value: "governance", label: "Governance Committee" },
  { value: "audit", label: "Audit Committee" },
  { value: "nominating", label: "Nominating Committee" },
  { value: "strategic", label: "Strategic Planning Committee" },
]

export function Settings() {
  const [open, setOpen] = useState(false)
  const [value, setValue] = useState("")

  return (
    <div className="flex flex-col gap-4">
      <div>
        <h2 className="text-2xl font-bold tracking-tight">Settings</h2>
        <p className="text-muted-foreground">Manage your organization's governance settings</p>
      </div>
      <Tabs defaultValue="general" className="w-full">
        <TabsList className="mb-4">
          <TabsTrigger value="general">General</TabsTrigger>
          <TabsTrigger value="users">Users & Permissions</TabsTrigger>
          <TabsTrigger value="committees">Committees</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
        </TabsList>
        <TabsContent value="general" className="w-full">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <div className="md:col-span-2 lg:col-span-3">
              <Card>
                <CardHeader>
                  <CardTitle>Organization Information</CardTitle>
                  <CardDescription>Update your organization's basic information</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid gap-2">
                    <Label htmlFor="org-name">Organization Name</Label>
                    <Input id="org-name" defaultValue="Acme Corporation" />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="org-description">Description</Label>
                    <Textarea
                      id="org-description"
                      defaultValue="Acme Corporation is a multinational conglomerate that manufactures everything from anvils to rocket-powered roller skates."
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="org-website">Website</Label>
                    <Input id="org-website" defaultValue="https://acme.example.com" />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="org-email">Contact Email</Label>
                    <Input id="org-email" defaultValue="contact@acme.example.com" />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button>
                    <Save className="mr-2 h-4 w-4" />
                    Save Changes
                  </Button>
                </CardFooter>
              </Card>
            </div>
            <Card className="md:col-span-2">
              <CardHeader>
                <CardTitle>Governance Settings</CardTitle>
                <CardDescription>Configure your governance system settings</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Enable Electronic Voting</Label>
                    <p className="text-sm text-muted-foreground">Allow board members to cast votes electronically</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <Separator />
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Require Two-Factor Authentication</Label>
                    <p className="text-sm text-muted-foreground">Enhance security with two-factor authentication</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <Separator />
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Document Version Control</Label>
                    <p className="text-sm text-muted-foreground">Track changes to documents with version history</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <Separator />
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Anonymous Voting</Label>
                    <p className="text-sm text-muted-foreground">Hide individual votes from other board members</p>
                  </div>
                  <Switch />
                </div>
              </CardContent>
              <CardFooter>
                <Button>
                  <Save className="mr-2 h-4 w-4" />
                  Save Changes
                </Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Meeting Settings</CardTitle>
                <CardDescription>Configure default meeting settings</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid gap-2">
                  <Label htmlFor="default-duration">Default Meeting Duration</Label>
                  <Select defaultValue="60">
                    <SelectTrigger id="default-duration">
                      <SelectValue placeholder="Select duration" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="30">30 minutes</SelectItem>
                      <SelectItem value="60">1 hour</SelectItem>
                      <SelectItem value="90">1.5 hours</SelectItem>
                      <SelectItem value="120">2 hours</SelectItem>
                      <SelectItem value="180">3 hours</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="reminder-time">Default Reminder Time</Label>
                  <Select defaultValue="24">
                    <SelectTrigger id="reminder-time">
                      <SelectValue placeholder="Select reminder time" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">1 hour before</SelectItem>
                      <SelectItem value="3">3 hours before</SelectItem>
                      <SelectItem value="24">1 day before</SelectItem>
                      <SelectItem value="48">2 days before</SelectItem>
                      <SelectItem value="168">1 week before</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Automatic Minutes Generation</Label>
                    <p className="text-sm text-muted-foreground">Generate meeting minutes automatically</p>
                  </div>
                  <Switch defaultChecked />
                </div>
              </CardContent>
              <CardFooter>
                <Button>
                  <Save className="mr-2 h-4 w-4" />
                  Save Changes
                </Button>
              </CardFooter>
            </Card>
          </div>
        </TabsContent>
        <TabsContent value="users" className="w-full">
          <div className="flex flex-col gap-4">
            <div className="flex justify-between">
              <h3 className="text-lg font-medium">Users & Permissions</h3>
              <Dialog>
                <DialogTrigger asChild>
                  <Button>
                    <UserPlus className="mr-2 h-4 w-4" />
                    Add User
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Add New User</DialogTitle>
                    <DialogDescription>Invite a new user to the governance portal</DialogDescription>
                  </DialogHeader>
                  <div className="grid gap-4 py-4">
                    <div className="grid gap-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input id="name" placeholder="Enter full name" />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="Enter email address" />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="role">Role</Label>
                      <Select>
                        <SelectTrigger id="role">
                          <SelectValue placeholder="Select role" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="admin">Admin</SelectItem>
                          <SelectItem value="member">Board Member</SelectItem>
                          <SelectItem value="observer">Observer</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="grid gap-2">
                      <Label>Committees</Label>
                      <Popover open={open} onOpenChange={setOpen}>
                        <PopoverTrigger asChild>
                          <Button variant="outline" role="combobox" aria-expanded={open} className="justify-between">
                            {value
                              ? committees.find((committee) => committee.value === value)?.label
                              : "Select committee..."}
                            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="p-0">
                          <Command>
                            <CommandInput placeholder="Search committees..." />
                            <CommandList>
                              <CommandEmpty>No committee found.</CommandEmpty>
                              <CommandGroup>
                                {committees.map((committee) => (
                                  <CommandItem
                                    key={committee.value}
                                    value={committee.value}
                                    onSelect={(currentValue) => {
                                      setValue(currentValue === value ? "" : currentValue)
                                      setOpen(false)
                                    }}
                                  >
                                    <Check
                                      className={`mr-2 h-4 w-4 ${
                                        value === committee.value ? "opacity-100" : "opacity-0"
                                      }`}
                                    />
                                    {committee.label}
                                  </CommandItem>
                                ))}
                              </CommandGroup>
                            </CommandList>
                          </Command>
                        </PopoverContent>
                      </Popover>
                    </div>
                  </div>
                  <DialogFooter>
                    <Button type="submit">Invite User</Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </div>
            <Card>
              <CardContent className="p-0">
                <div className="rounded-md border">
                  <div className="grid grid-cols-5 border-b px-4 py-3 font-medium">
                    <div className="col-span-2">User</div>
                    <div className="hidden sm:block">Role</div>
                    <div className="hidden md:block">Status</div>
                    <div className="text-right">Actions</div>
                  </div>
                  <div className="divide-y">
                    {users.map((user) => (
                      <div key={user.id} className="grid grid-cols-5 items-center px-4 py-3">
                        <div className="col-span-2 flex items-center gap-3">
                          <Avatar className="h-9 w-9">
                            <AvatarImage src={user.avatar || "/placeholder.svg"} alt={user.name} />
                            <AvatarFallback>{user.initials}</AvatarFallback>
                          </Avatar>
                          <div>
                            <div className="font-medium">{user.name}</div>
                            <div className="text-xs text-muted-foreground">{user.email}</div>
                          </div>
                        </div>
                        <div className="hidden sm:block">
                          <Badge variant="outline" className="capitalize">
                            {user.role}
                          </Badge>
                        </div>
                        <div className="hidden md:block">
                          <Badge variant="default">Active</Badge>
                        </div>
                        <div className="text-right">
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="ghost" size="sm">
                                Actions
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuItem>Edit User</DropdownMenuItem>
                              <DropdownMenuItem>Change Role</DropdownMenuItem>
                              <DropdownMenuItem>Reset Password</DropdownMenuItem>
                              <DropdownMenuSeparator />
                              <DropdownMenuItem className="text-destructive">
                                <Trash className="mr-2 h-4 w-4" />
                                <span>Delete User</span>
                              </DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        <TabsContent value="committees" className="w-full">
          <div className="flex flex-col gap-4">
            <div className="flex justify-between">
              <h3 className="text-lg font-medium">Committees</h3>
              <Button>
                <Plus className="mr-2 h-4 w-4" />
                Add Committee
              </Button>
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {committees.map((committee) => (
                <Card key={committee.value}>
                  <CardHeader>
                    <CardTitle>{committee.label}</CardTitle>
                    <CardDescription>
                      {committee.value === "executive" && "Oversees operations between board meetings"}
                      {committee.value === "finance" && "Reviews financial performance and budgets"}
                      {committee.value === "governance" && "Ensures governance best practices"}
                      {committee.value === "audit" && "Oversees financial reporting and compliance"}
                      {committee.value === "nominating" && "Identifies and recruits board candidates"}
                      {committee.value === "strategic" && "Develops long-term strategic plans"}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {users.slice(0, committee.value === "executive" ? 2 : 3).map((user) => (
                        <Badge key={user.id} variant="secondary" className="flex items-center gap-1">
                          <Avatar className="h-4 w-4">
                            <AvatarImage src={user.avatar || "/placeholder.svg"} alt={user.name} />
                            <AvatarFallback className="text-[8px]">{user.initials}</AvatarFallback>
                          </Avatar>
                          <span>{user.name.split(" ")[0]}</span>
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button variant="outline" size="sm">
                      View
                    </Button>
                    <Button variant="outline" size="sm">
                      Edit
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </TabsContent>
        <TabsContent value="notifications" className="w-full">
          <Card>
            <CardHeader>
              <CardTitle>Notification Settings</CardTitle>
              <CardDescription>Configure when and how you receive notifications</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <h4 className="font-medium">Meeting Notifications</h4>
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Meeting Invitations</Label>
                    <p className="text-sm text-muted-foreground">Receive notifications for new meeting invitations</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Meeting Reminders</Label>
                    <p className="text-sm text-muted-foreground">Receive reminders before scheduled meetings</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Meeting Updates</Label>
                    <p className="text-sm text-muted-foreground">Receive notifications when meeting details change</p>
                  </div>
                  <Switch defaultChecked />
                </div>
              </div>
              <Separator />
              <div className="space-y-4">
                <h4 className="font-medium">Decision Notifications</h4>
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>New Proposals</Label>
                    <p className="text-sm text-muted-foreground">
                      Receive notifications for new proposals requiring your vote
                    </p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Voting Reminders</Label>
                    <p className="text-sm text-muted-foreground">Receive reminders for pending votes</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Decision Results</Label>
                    <p className="text-sm text-muted-foreground">Receive notifications when decisions are finalized</p>
                  </div>
                  <Switch defaultChecked />
                </div>
              </div>
              <Separator />
              <div className="space-y-4">
                <h4 className="font-medium">Document Notifications</h4>
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>New Documents</Label>
                    <p className="text-sm text-muted-foreground">
                      Receive notifications when new documents are uploaded
                    </p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Document Updates</Label>
                    <p className="text-sm text-muted-foreground">Receive notifications when documents are updated</p>
                  </div>
                  <Switch defaultChecked />
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button>
                <Save className="mr-2 h-4 w-4" />
                Save Preferences
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
