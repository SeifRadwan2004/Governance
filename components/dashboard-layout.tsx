"use client";

import type React from "react";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  Bell,
  Building2,
  Calendar,
  ChevronDown,
  FileText,
  Home,
  LayoutDashboard,
  Mail,
  Settings,
  Vote,
  Users,
  UserCheck,
  Briefcase,
  Shield,
} from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarRail,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { ThemeToggle } from "@/components/theme-toggle";
import { Notification } from "@/components/notification";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const userProfiles = {
  admin: {
    name: "Alex Morgan",
    avatar: "/avatars/admin.png",
    initials: "AM",
  },
  shareholder: {
    name: "Emma Thompson",
    avatar: "/avatars/emma.png",
    initials: "ET",
  },
  assembly: {
    name: "Michael Chen",
    avatar: "/avatars/michael.png",
    initials: "MC",
  },
  chairman: {
    name: "Sarah Johnson",
    avatar: "/avatars/sarah.png",
    initials: "SJ",
  },
  md: {
    name: "David Rodriguez",
    avatar: "/avatars/david.png",
    initials: "DR",
  },
  bod: {
    name: "Olivia Williams",
    avatar: "/avatars/olivia.png",
    initials: "OW",
  },
  ceo: {
    name: "James Wilson",
    avatar: "/avatars/ceo.png",
    initials: "JW",
  },
  committee: {
    name: "Sophia Lee",
    avatar: "/avatars/committee.png",
    initials: "SL",
  },
  legal: {
    name: "Robert Garcia",
    avatar: "/avatars/legal.png",
    initials: "RG",
  },
  // Social platform roles
  "bod-candidate": {
    name: "Sarah Elizabeth Johnson",
    avatar: "/avatars/sarah-johnson.png",
    initials: "SJ",
  },
  "company-recruiter": {
    name: "Michael Thompson",
    avatar: "/avatars/michael-recruiter.png",
    initials: "MT",
  },
  "investment-analyst": {
    name: "Jessica Chen",
    avatar: "/avatars/jessica-analyst.png",
    initials: "JC",
  },
  "community-member": {
    name: "David Rodriguez",
    avatar: "/avatars/david-community.png",
    initials: "DR",
  },
};

export function DashboardLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const [userRole, setUserRole] = useState<string>("");
  const [showNotification, setShowNotification] = useState(false);

  useEffect(() => {
    // Get user role from localStorage with a try-catch to handle errors
    try {
      const storedRole = localStorage.getItem("userRole");
      if (storedRole) {
        setUserRole(storedRole);
      } else {
        // Default to shareholder if no role is set
        setUserRole("shareholder");
        localStorage.setItem("userRole", "shareholder");
      }
    } catch (error) {
      console.error("Error accessing localStorage:", error);
      // Set a default role for demo purposes if localStorage fails
      setUserRole("shareholder");
    }

    // Show notification after a delay
    const timer = setTimeout(() => {
      setShowNotification(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleRoleChange = (newRole: string) => {
    try {
      localStorage.setItem("userRole", newRole);
      setUserRole(newRole);
      router.push("/dashboard");
    } catch (error) {
      console.error("Error setting role:", error);
    }
  };

  const handleLogout = () => {
    router.push("/");
  };

  const userProfile = userRole
    ? userProfiles[userRole as keyof typeof userProfiles]
    : { name: "User", avatar: "", initials: "U" };

  if (!userRole) return null;

  // Determine sidebar items based on role
  const getSidebarItems = () => {
    const items = [
      {
        href: "/dashboard",
        icon: <LayoutDashboard className="mr-2 h-4 w-4" />,
        label: "Dashboard",
        roles: [
          "admin",
          "shareholder",
          "assembly",
          "chairman",
          "md",
          "bod",
          "ceo",
          "committee",
          "legal",
        ],
      },
      {
        href: "/meetings",
        icon: <Calendar className="mr-2 h-4 w-4" />,
        label: "Meetings",
        roles: [
          "admin",
          "shareholder",
          "assembly",
          "chairman",
          "md",
          "bod",
          "ceo",
          "committee",
          "legal",
        ],
      },
      {
        href: "/voting",
        icon: <Vote className="mr-2 h-4 w-4" />,
        label: "Voting",
        roles: [
          "admin",
          "shareholder",
          "assembly",
          "chairman",
          "md",
          "bod",
          "legal",
        ],
      },
      {
        href: "/documents",
        icon: <FileText className="mr-2 h-4 w-4" />,
        label: "Documents",
        roles: [
          "admin",
          "shareholder",
          "assembly",
          "chairman",
          "md",
          "bod",
          "ceo",
          "committee",
          "legal",
        ],
      },
      {
        href: "/messages",
        icon: <Mail className="mr-2 h-4 w-4" />,
        label: "Messages",
        roles: [
          "admin",
          "shareholder",
          "assembly",
          "chairman",
          "md",
          "bod",
          "ceo",
          "committee",
          "legal",
        ],
      },
      {
        href: "/shareholders",
        icon: <Users className="mr-2 h-4 w-4" />,
        label: "Shareholders",
        roles: ["admin", "chairman", "legal"],
      },
      {
        href: "/board",
        icon: <UserCheck className="mr-2 h-4 w-4" />,
        label: "Board",
        roles: ["admin", "chairman", "md", "bod", "ceo", "legal"],
      },
      {
        href: "/kpis",
        icon: <Briefcase className="mr-2 h-4 w-4" />,
        label: "KPIs",
        roles: ["chairman", "md", "bod", "ceo"],
      },
      {
        href: "/settings",
        icon: <Settings className="mr-2 h-4 w-4" />,
        label: "Settings",
        roles: ["admin", "chairman", "md", "legal"],
      },
      {
        href: "/admin",
        icon: <Shield className="mr-2 h-4 w-4" />,
        label: "Admin Panel",
        roles: ["admin"],
      },
    ];

    return items.filter((item) => item.roles.includes(userRole));
  };

  const sidebarItems = getSidebarItems();

  return (
    <SidebarProvider>
      <div className="flex min-h-screen">
        <Sidebar className="border-r border-corporate-100">
          <SidebarHeader className="border-b border-corporate-100 p-4">
            <div className="flex items-center gap-2">
              <div className="rounded-md bg-corporate-600 p-1">
                <Building2 className="h-6 w-6 text-white" />
              </div>
              <div className="font-semibold text-corporate-800">
                GovernancePro
              </div>
            </div>
          </SidebarHeader>
          <SidebarContent>
            <SidebarMenu>
              {sidebarItems.map((item) => (
                <SidebarMenuItem key={item.href}>
                  <SidebarMenuButton asChild isActive={pathname === item.href}>
                    <Link href={item.href}>
                      {item.icon}
                      <span>{item.label}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarContent>
          <SidebarFooter className="border-t border-corporate-100 p-4">
            <div className="flex items-center justify-between">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    className="flex items-center gap-2 p-2"
                  >
                    <Avatar className="h-8 w-8">
                      <AvatarImage
                        src={userProfile.avatar || "/placeholder.svg"}
                        alt={userProfile.name}
                      />
                      <AvatarFallback className="bg-corporate-100 text-corporate-700">
                        {userProfile.initials}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex flex-col items-start text-sm">
                      <span className="font-medium">{userProfile.name}</span>
                      <span className="text-xs text-muted-foreground capitalize">
                        {userRole === "assembly"
                          ? "General Assembly"
                          : userRole === "bod"
                            ? "BOD Member"
                            : userRole === "md"
                              ? "Managing Director"
                              : userRole === "ceo"
                                ? "CEO"
                                : userRole === "committee"
                                  ? "Committee Member"
                                  : userRole === "legal"
                                    ? "Legal Consultant"
                                    : userRole}
                      </span>
                    </div>
                    <ChevronDown className="ml-auto h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Profile</DropdownMenuItem>
                  <DropdownMenuItem>
                    <ThemeToggle />
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={handleLogout}>
                    <Home className="mr-2 h-4 w-4" />
                    <span>Back to Demo Home</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </SidebarFooter>
          <SidebarRail />
        </Sidebar>
        <div className="flex-1">
          <header className="flex h-14 items-center justify-between border-b border-corporate-100 bg-background px-4 lg:h-[60px] lg:px-6">
            <div className="flex items-center gap-4">
              <SidebarTrigger />
              <div className="font-semibold text-corporate-800">
                {pathname === "/dashboard" && "Dashboard"}
                {pathname === "/meetings" && "Meetings"}
                {pathname === "/voting" && "Voting"}
                {pathname === "/documents" && "Documents"}
                {pathname === "/messages" && "Messages"}
                {pathname === "/shareholders" && "Shareholders"}
                {pathname === "/board" && "Board"}
                {pathname === "/kpis" && "KPIs"}
                {pathname === "/settings" && "Settings"}
                {pathname === "/admin" && "Admin Panel"}
              </div>
            </div>
            <div className="flex items-center gap-4">
              {/* Role Switcher */}
              <div className="hidden md:flex items-center gap-2">
                <span className="text-sm text-muted-foreground">
                  Demo Role:
                </span>
                <Select value={userRole} onValueChange={handleRoleChange}>
                  <SelectTrigger className="w-[180px] h-9 border-corporate-200">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="admin">Admin</SelectItem>
                    <SelectItem value="shareholder">Shareholder</SelectItem>
                    <SelectItem value="assembly">General Assembly</SelectItem>
                    <SelectItem value="chairman">Chairman</SelectItem>
                    <SelectItem value="md">Managing Director</SelectItem>
                    <SelectItem value="bod">Board Member</SelectItem>
                    <SelectItem value="ceo">CEO</SelectItem>
                    <SelectItem value="committee">Committee Member</SelectItem>
                    <SelectItem value="legal">Legal Consultant</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="icon" className="relative">
                    <Bell className="h-4 w-4" />
                    <Badge className="absolute -right-1 -top-1 h-4 w-4 p-0 flex items-center justify-center bg-corporate-600">
                      3
                    </Badge>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-80">
                  <DropdownMenuLabel>Notifications</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <div className="max-h-80 overflow-auto">
                    <DropdownMenuItem className="cursor-pointer flex flex-col items-start p-3">
                      <div className="font-medium">
                        New General Assembly Meeting
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Scheduled for June 1, 2025
                      </div>
                      <div className="text-xs text-muted-foreground mt-1">
                        2 hours ago
                      </div>
                    </DropdownMenuItem>
                    <DropdownMenuItem className="cursor-pointer flex flex-col items-start p-3">
                      <div className="font-medium">
                        Quarterly Financial Report
                      </div>
                      <div className="text-sm text-muted-foreground">
                        New document available for review
                      </div>
                      <div className="text-xs text-muted-foreground mt-1">
                        Yesterday
                      </div>
                    </DropdownMenuItem>
                    <DropdownMenuItem className="cursor-pointer flex flex-col items-start p-3">
                      <div className="font-medium">Voting Reminder</div>
                      <div className="text-sm text-muted-foreground">
                        Budget approval voting closes in 2 days
                      </div>
                      <div className="text-xs text-muted-foreground mt-1">
                        2 days ago
                      </div>
                    </DropdownMenuItem>
                  </div>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem className="cursor-pointer text-center text-corporate-600">
                    View all notifications
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </header>
          <main className="flex-1 p-4 lg:p-6">{children}</main>
        </div>
      </div>
      {showNotification && (
        <Notification
          title="New General Assembly Meeting"
          description="Scheduled for June 1, 2025"
          onClose={() => setShowNotification(false)}
        />
      )}
    </SidebarProvider>
  );
}
