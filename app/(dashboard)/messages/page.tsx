"use client";

import { useState } from "react";
import {
  Mail,
  Send,
  Reply,
  Forward,
  Trash2,
  Star,
  Archive,
  Search,
  Filter,
  Plus,
  Paperclip,
  MoreVertical,
  Circle,
  Users,
  Calendar,
  Clock,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

export default function MessagesPage() {
  const [activeTab, setActiveTab] = useState("inbox");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedMessage, setSelectedMessage] = useState<number | null>(null);
  const [isComposeOpen, setIsComposeOpen] = useState(false);
  const { toast } = useToast();

  // Mock messages data
  const messages = [
    {
      id: 1,
      from: "Sarah Johnson",
      fromEmail: "sarah.johnson@company.com",
      to: "Board Members",
      subject: "Q4 Board Meeting Agenda",
      preview:
        "Please find attached the agenda for our upcoming Q4 board meeting scheduled for...",
      content:
        "Dear Board Members,\n\nPlease find attached the agenda for our upcoming Q4 board meeting scheduled for January 30th, 2025.\n\nKey items include:\n- Q4 Financial Review\n- 2025 Budget Approval\n- Strategic Planning Discussion\n- Executive Compensation Review\n\nPlease review the materials in advance and let me know if you have any questions.\n\nBest regards,\nSarah Johnson\nChairman",
      timestamp: "2025-01-22 14:30",
      isRead: false,
      isStarred: true,
      hasAttachment: true,
      priority: "high",
      category: "meeting",
      avatar: "/avatars/sarah.png",
    },
    {
      id: 2,
      from: "Robert Garcia",
      fromEmail: "robert.garcia@company.com",
      to: "Legal Team, Board",
      subject: "Compliance Update - ESG Requirements",
      preview:
        "This is to inform you about the new ESG compliance requirements that will take effect...",
      content:
        "Dear Colleagues,\n\nThis is to inform you about the new ESG compliance requirements that will take effect from Q2 2025.\n\nKey changes include:\n- Enhanced sustainability reporting\n- Mandatory diversity metrics\n- Carbon footprint disclosure\n- Social impact assessment\n\nWe need to prepare for implementation by March 1st. Please review the attached guidelines.\n\nBest regards,\nRobert Garcia\nLegal Counsel",
      timestamp: "2025-01-22 10:15",
      isRead: true,
      isStarred: false,
      hasAttachment: true,
      priority: "medium",
      category: "legal",
      avatar: "/avatars/legal.png",
    },
    {
      id: 3,
      from: "Alex Morgan",
      fromEmail: "alex.morgan@company.com",
      to: "All Users",
      subject: "System Maintenance Notification",
      preview:
        "We will be performing scheduled maintenance on the governance platform...",
      content:
        "Dear Users,\n\nWe will be performing scheduled maintenance on the governance platform this weekend.\n\nMaintenance Window:\n- Start: January 25th, 2025 at 2:00 AM EST\n- End: January 25th, 2025 at 6:00 AM EST\n\nDuring this time, the platform will be temporarily unavailable. We apologize for any inconvenience.\n\nThank you for your understanding.\n\nBest regards,\nAlex Morgan\nSystem Administrator",
      timestamp: "2025-01-21 16:45",
      isRead: true,
      isStarred: false,
      hasAttachment: false,
      priority: "low",
      category: "system",
      avatar: "/avatars/admin.png",
    },
    {
      id: 4,
      from: "Emma Thompson",
      fromEmail: "emma.thompson@company.com",
      to: "Board Members",
      subject: "Shareholder Proposal - Review Required",
      preview:
        "A new shareholder proposal has been submitted for consideration at the annual meeting...",
      content:
        "Dear Board Members,\n\nA new shareholder proposal has been submitted for consideration at the annual meeting.\n\nProposal Summary:\n- Title: Enhanced Climate Risk Disclosure\n- Submitted by: Green Investment Fund\n- Requested action: Quarterly climate risk reporting\n- Supporting shareholders: 15%\n\nPlease review the full proposal and provide your recommendations by January 28th.\n\nBest regards,\nEmma Thompson\nShareholder Relations",
      timestamp: "2025-01-21 09:20",
      isRead: false,
      isStarred: true,
      hasAttachment: true,
      priority: "high",
      category: "shareholder",
      avatar: "/avatars/emma.png",
    },
    {
      id: 5,
      from: "James Wilson",
      fromEmail: "james.wilson@company.com",
      to: "Executive Team",
      subject: "Strategic Planning Session Results",
      preview:
        "Following our strategic planning session last week, I wanted to share the key outcomes...",
      content:
        "Dear Executive Team,\n\nFollowing our strategic planning session last week, I wanted to share the key outcomes and next steps.\n\nKey Decisions:\n- Market expansion into APAC region\n- Investment in AI technology platform\n- Sustainability initiative acceleration\n- Workforce development program\n\nNext Steps:\n- Department heads to submit implementation plans by February 5th\n- Budget allocations to be finalized by February 10th\n- Progress review meeting scheduled for February 15th\n\nPlease reach out if you have any questions.\n\nBest regards,\nJames Wilson\nCEO",
      timestamp: "2025-01-20 13:10",
      isRead: true,
      isStarred: false,
      hasAttachment: false,
      priority: "medium",
      category: "strategic",
      avatar: "/avatars/ceo.png",
    },
  ];

  const [composeForm, setComposeForm] = useState({
    to: "",
    subject: "",
    content: "",
    priority: "medium",
  });

  const handleSendMessage = () => {
    toast({
      title: "Message Sent",
      description: "Your message has been sent successfully.",
    });
    setIsComposeOpen(false);
    setComposeForm({ to: "", subject: "", content: "", priority: "medium" });
  };

  const handleReply = (messageId: number) => {
    const message = messages.find((m) => m.id === messageId);
    if (message) {
      setComposeForm({
        to: message.fromEmail,
        subject: `Re: ${message.subject}`,
        content: "",
        priority: "medium",
      });
      setIsComposeOpen(true);
    }
  };

  const handleForward = (messageId: number) => {
    const message = messages.find((m) => m.id === messageId);
    if (message) {
      setComposeForm({
        to: "",
        subject: `Fwd: ${message.subject}`,
        content: `\n\n--- Forwarded Message ---\nFrom: ${message.from}\nSubject: ${message.subject}\n\n${message.content}`,
        priority: "medium",
      });
      setIsComposeOpen(true);
    }
  };

  const handleStar = (messageId: number) => {
    toast({
      title: "Message Starred",
      description: "Message added to starred items.",
    });
  };

  const handleArchive = (messageId: number) => {
    toast({
      title: "Message Archived",
      description: "Message moved to archive.",
    });
  };

  const handleDelete = (messageId: number) => {
    toast({
      title: "Message Deleted",
      description: "Message moved to trash.",
      variant: "destructive",
    });
  };

  const getPriorityBadge = (priority: string) => {
    const colors = {
      high: "bg-red-100 text-red-800",
      medium: "bg-yellow-100 text-yellow-800",
      low: "bg-green-100 text-green-800",
    };
    return (
      <Badge className={colors[priority as keyof typeof colors]}>
        {priority.toUpperCase()}
      </Badge>
    );
  };

  const getCategoryBadge = (category: string) => {
    const colors = {
      meeting: "bg-blue-100 text-blue-800",
      legal: "bg-purple-100 text-purple-800",
      system: "bg-gray-100 text-gray-800",
      shareholder: "bg-green-100 text-green-800",
      strategic: "bg-orange-100 text-orange-800",
    };
    return (
      <Badge
        variant="outline"
        className={colors[category as keyof typeof colors]}
      >
        {category}
      </Badge>
    );
  };

  const filteredMessages = messages.filter((message) => {
    const matchesSearch =
      message.subject.toLowerCase().includes(searchQuery.toLowerCase()) ||
      message.from.toLowerCase().includes(searchQuery.toLowerCase()) ||
      message.content.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesTab =
      activeTab === "inbox" ||
      (activeTab === "starred" && message.isStarred) ||
      (activeTab === "unread" && !message.isRead);

    return matchesSearch && matchesTab;
  });

  const selectedMsg = selectedMessage
    ? messages.find((m) => m.id === selectedMessage)
    : null;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col lg:flex-row gap-4 justify-between items-start lg:items-center">
        <div>
          <h1 className="text-3xl font-bold text-corporate-800">Messages</h1>
          <p className="text-muted-foreground">
            Communicate with board members and stakeholders
          </p>
        </div>
        <Dialog open={isComposeOpen} onOpenChange={setIsComposeOpen}>
          <DialogTrigger asChild>
            <Button className="bg-corporate-600 hover:bg-corporate-700">
              <Plus className="mr-2 h-4 w-4" />
              Compose Message
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[600px]">
            <DialogHeader>
              <DialogTitle>Compose New Message</DialogTitle>
              <DialogDescription>
                Send a message to board members or stakeholders.
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="to">To</Label>
                <Input
                  id="to"
                  placeholder="Enter email addresses..."
                  value={composeForm.to}
                  onChange={(e) =>
                    setComposeForm({ ...composeForm, to: e.target.value })
                  }
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input
                    id="subject"
                    placeholder="Enter subject..."
                    value={composeForm.subject}
                    onChange={(e) =>
                      setComposeForm({
                        ...composeForm,
                        subject: e.target.value,
                      })
                    }
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="priority">Priority</Label>
                  <Select
                    value={composeForm.priority}
                    onValueChange={(value) =>
                      setComposeForm({ ...composeForm, priority: value })
                    }
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="low">Low</SelectItem>
                      <SelectItem value="medium">Medium</SelectItem>
                      <SelectItem value="high">High</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="content">Message</Label>
                <Textarea
                  id="content"
                  placeholder="Type your message..."
                  rows={6}
                  value={composeForm.content}
                  onChange={(e) =>
                    setComposeForm({ ...composeForm, content: e.target.value })
                  }
                />
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => setIsComposeOpen(false)}>
                Cancel
              </Button>
              <Button onClick={handleSendMessage}>
                <Send className="mr-2 h-4 w-4" />
                Send Message
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Total Messages</p>
                <p className="text-2xl font-bold">{messages.length}</p>
              </div>
              <Mail className="h-8 w-8 text-blue-600" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Unread</p>
                <p className="text-2xl font-bold">
                  {messages.filter((m) => !m.isRead).length}
                </p>
              </div>
              <Circle className="h-8 w-8 text-red-600" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Starred</p>
                <p className="text-2xl font-bold">
                  {messages.filter((m) => m.isStarred).length}
                </p>
              </div>
              <Star className="h-8 w-8 text-yellow-600" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">High Priority</p>
                <p className="text-2xl font-bold">
                  {messages.filter((m) => m.priority === "high").length}
                </p>
              </div>
              <Clock className="h-8 w-8 text-orange-600" />
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Messages List */}
        <div className="lg:col-span-1 space-y-4">
          {/* Search */}
          <Card>
            <CardContent className="p-4">
              <Input
                placeholder="Search messages..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full"
              />
            </CardContent>
          </Card>

          {/* Message Tabs */}
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="inbox">Inbox</TabsTrigger>
              <TabsTrigger value="starred">Starred</TabsTrigger>
              <TabsTrigger value="unread">Unread</TabsTrigger>
            </TabsList>

            <TabsContent value={activeTab} className="space-y-2 mt-4">
              {filteredMessages.map((message) => (
                <Card
                  key={message.id}
                  className={`cursor-pointer transition-colors ${
                    selectedMessage === message.id
                      ? "bg-blue-50 border-blue-200"
                      : "hover:bg-gray-50"
                  }`}
                  onClick={() => setSelectedMessage(message.id)}
                >
                  <CardContent className="p-4">
                    <div className="space-y-2">
                      <div className="flex items-start justify-between">
                        <div className="flex items-center gap-2">
                          <Avatar className="h-8 w-8">
                            <AvatarImage
                              src={message.avatar}
                              alt={message.from}
                            />
                            <AvatarFallback>
                              {message.from
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </AvatarFallback>
                          </Avatar>
                          <div className="flex-1 min-w-0">
                            <p
                              className={`text-sm font-medium truncate ${!message.isRead ? "font-semibold" : ""}`}
                            >
                              {message.from}
                            </p>
                            <p className="text-xs text-muted-foreground">
                              {message.timestamp}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center gap-1">
                          {!message.isRead && (
                            <Circle className="h-3 w-3 text-blue-600 fill-current" />
                          )}
                          {message.isStarred && (
                            <Star className="h-3 w-3 text-yellow-500 fill-current" />
                          )}
                          {message.hasAttachment && (
                            <Paperclip className="h-3 w-3 text-gray-500" />
                          )}
                        </div>
                      </div>
                      <div className="space-y-1">
                        <p
                          className={`text-sm truncate ${!message.isRead ? "font-semibold" : ""}`}
                        >
                          {message.subject}
                        </p>
                        <p className="text-xs text-muted-foreground line-clamp-2">
                          {message.preview}
                        </p>
                      </div>
                      <div className="flex items-center gap-2">
                        {getPriorityBadge(message.priority)}
                        {getCategoryBadge(message.category)}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>
          </Tabs>
        </div>

        {/* Message Detail */}
        <div className="lg:col-span-2">
          {selectedMsg ? (
            <Card>
              <CardHeader>
                <div className="space-y-4">
                  <div className="flex items-start justify-between">
                    <div className="space-y-2">
                      <h2 className="text-xl font-semibold">
                        {selectedMsg.subject}
                      </h2>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <Avatar className="h-6 w-6">
                            <AvatarImage
                              src={selectedMsg.avatar}
                              alt={selectedMsg.from}
                            />
                            <AvatarFallback>
                              {selectedMsg.from
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </AvatarFallback>
                          </Avatar>
                          <span>{selectedMsg.from}</span>
                        </div>
                        <span>to {selectedMsg.to}</span>
                        <span>{selectedMsg.timestamp}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      {getPriorityBadge(selectedMsg.priority)}
                      {getCategoryBadge(selectedMsg.category)}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleReply(selectedMsg.id)}
                    >
                      <Reply className="mr-1 h-3 w-3" />
                      Reply
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleForward(selectedMsg.id)}
                    >
                      <Forward className="mr-1 h-3 w-3" />
                      Forward
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleStar(selectedMsg.id)}
                    >
                      <Star className="mr-1 h-3 w-3" />
                      Star
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleArchive(selectedMsg.id)}
                    >
                      <Archive className="mr-1 h-3 w-3" />
                      Archive
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleDelete(selectedMsg.id)}
                    >
                      <Trash2 className="mr-1 h-3 w-3" />
                      Delete
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="prose max-w-none">
                  <pre className="whitespace-pre-wrap font-sans text-sm leading-relaxed">
                    {selectedMsg.content}
                  </pre>
                </div>

                {selectedMsg.hasAttachment && (
                  <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center gap-2 text-sm">
                      <Paperclip className="h-4 w-4" />
                      <span className="font-medium">Attachments:</span>
                    </div>
                    <div className="mt-2 space-y-2">
                      <div className="flex items-center justify-between p-2 bg-white rounded border">
                        <span className="text-sm">meeting-agenda.pdf</span>
                        <Button variant="outline" size="sm">
                          <Download className="mr-1 h-3 w-3" />
                          Download
                        </Button>
                      </div>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          ) : (
            <Card>
              <CardContent className="p-8 text-center">
                <Mail className="h-12 w-12 mx-auto mb-4 text-gray-400" />
                <h3 className="text-lg font-semibold mb-2">
                  No message selected
                </h3>
                <p className="text-muted-foreground">
                  Select a message from the list to view its contents.
                </p>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
}
