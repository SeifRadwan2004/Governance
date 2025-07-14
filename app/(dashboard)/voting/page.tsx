"use client";

import { useState } from "react";
import {
  Vote,
  Plus,
  CheckCircle,
  XCircle,
  Clock,
  Users,
  Calendar,
  FileText,
  Eye,
  BarChart3,
  Filter,
  Search,
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
import { Progress } from "@/components/ui/progress";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

export default function VotingPage() {
  const [activeTab, setActiveTab] = useState("active");
  const [searchQuery, setSearchQuery] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");
  const { toast } = useToast();

  // Mock voting data
  const activeVotings = [
    {
      id: 1,
      title: "Budget Approval for Q2 2025",
      description:
        "Approve the quarterly budget allocation for operations and expansion",
      type: "Special Resolution",
      deadline: "2025-01-31",
      totalVoters: 12,
      votedCount: 8,
      yesCount: 6,
      noCount: 2,
      abstainCount: 0,
      status: "active",
      hasVoted: false,
      quorumRequired: 75,
      approvalThreshold: 67,
    },
    {
      id: 2,
      title: "New Board Member Appointment",
      description:
        "Approve the appointment of Dr. Emily Watson as Independent Director",
      type: "Standard Resolution",
      deadline: "2025-02-05",
      totalVoters: 8,
      votedCount: 5,
      yesCount: 4,
      noCount: 1,
      abstainCount: 0,
      status: "active",
      hasVoted: true,
      userVote: "yes",
      quorumRequired: 50,
      approvalThreshold: 50,
    },
    {
      id: 3,
      title: "ESG Policy Amendment",
      description:
        "Update environmental and sustainability governance policies",
      type: "Board Resolution",
      deadline: "2025-01-28",
      totalVoters: 6,
      votedCount: 2,
      yesCount: 2,
      noCount: 0,
      abstainCount: 0,
      status: "active",
      hasVoted: false,
      quorumRequired: 60,
      approvalThreshold: 60,
    },
  ];

  const completedVotings = [
    {
      id: 4,
      title: "Annual Executive Compensation",
      description: "Approve executive compensation package for 2025",
      type: "Special Resolution",
      completedDate: "2025-01-15",
      totalVoters: 12,
      yesCount: 9,
      noCount: 2,
      abstainCount: 1,
      status: "passed",
      result: "Approved",
    },
    {
      id: 5,
      title: "Merger with TechCorp Industries",
      description: "Strategic merger proposal with TechCorp Industries",
      type: "Constitutional Amendment",
      completedDate: "2025-01-10",
      totalVoters: 15,
      yesCount: 8,
      noCount: 7,
      abstainCount: 0,
      status: "failed",
      result: "Rejected",
    },
  ];

  const handleVote = (votingId: number, vote: "yes" | "no" | "abstain") => {
    toast({
      title: "Vote Submitted",
      description: `Your vote "${vote}" has been recorded successfully.`,
    });
  };

  const handleCreateVoting = () => {
    toast({
      title: "Create New Voting",
      description: "Opening voting creation form...",
    });
  };

  const handleViewDetails = (votingId: number) => {
    toast({
      title: "View Details",
      description: `Opening detailed view for voting ${votingId}...`,
    });
  };

  const handleViewResults = (votingId: number) => {
    toast({
      title: "View Results",
      description: `Opening results analysis for voting ${votingId}...`,
    });
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "active":
        return <Badge className="bg-blue-100 text-blue-800">Active</Badge>;
      case "passed":
        return <Badge className="bg-green-100 text-green-800">Passed</Badge>;
      case "failed":
        return <Badge className="bg-red-100 text-red-800">Failed</Badge>;
      default:
        return <Badge variant="outline">{status}</Badge>;
    }
  };

  const calculateProgress = (voted: number, total: number) => {
    return (voted / total) * 100;
  };

  const isQuorumMet = (voted: number, total: number, quorum: number) => {
    return (voted / total) * 100 >= quorum;
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col lg:flex-row gap-4 justify-between items-start lg:items-center">
        <div>
          <h1 className="text-3xl font-bold text-corporate-800">
            Voting Center
          </h1>
          <p className="text-muted-foreground">
            Participate in governance decisions and view voting history
          </p>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Active Votings</p>
                <p className="text-2xl font-bold">{activeVotings.length}</p>
              </div>
              <Vote className="h-8 w-8 text-blue-600" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">
                  Pending Your Vote
                </p>
                <p className="text-2xl font-bold">
                  {activeVotings.filter((v) => !v.hasVoted).length}
                </p>
              </div>
              <Clock className="h-8 w-8 text-orange-600" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">
                  Participation Rate
                </p>
                <p className="text-2xl font-bold">85%</p>
              </div>
              <Users className="h-8 w-8 text-green-600" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">This Month</p>
                <p className="text-2xl font-bold">12</p>
              </div>
              <BarChart3 className="h-8 w-8 text-purple-600" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Search and Filters */}
      <Card>
        <CardContent className="p-4">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-1">
              <Input
                placeholder="Search votings..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full"
              />
            </div>
            <div className="flex gap-2">
              <Select value={filterStatus} onValueChange={setFilterStatus}>
                <SelectTrigger className="w-[140px]">
                  <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="active">Active</SelectItem>
                  <SelectItem value="pending">Pending Vote</SelectItem>
                  <SelectItem value="completed">Completed</SelectItem>
                </SelectContent>
              </Select>
              <Button variant="outline" size="icon">
                <Filter className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Voting Tabs */}
      <Tabs
        value={activeTab}
        onValueChange={setActiveTab}
        className="space-y-4"
      >
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="active">Active Votings</TabsTrigger>
          <TabsTrigger value="completed">Completed Votings</TabsTrigger>
        </TabsList>

        <TabsContent value="active" className="space-y-4">
          {activeVotings.map((voting) => (
            <Card key={voting.id} className="hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="space-y-4">
                  {/* Header */}
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <h3 className="text-lg font-semibold">
                          {voting.title}
                        </h3>
                        {getStatusBadge(voting.status)}
                        <Badge variant="outline">{voting.type}</Badge>
                      </div>
                      <p className="text-muted-foreground">
                        {voting.description}
                      </p>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          <span>Deadline: {voting.deadline}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Users className="h-4 w-4" />
                          <span>
                            {voting.votedCount}/{voting.totalVoters} voted
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleViewDetails(voting.id)}
                      >
                        <Eye className="mr-1 h-3 w-3" />
                        Details
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleViewResults(voting.id)}
                      >
                        <BarChart3 className="mr-1 h-3 w-3" />
                        Results
                      </Button>
                    </div>
                  </div>

                  {/* Progress */}
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Voting Progress</span>
                      <span>
                        {Math.round(
                          calculateProgress(
                            voting.votedCount,
                            voting.totalVoters,
                          ),
                        )}
                        %
                      </span>
                    </div>
                    <Progress
                      value={calculateProgress(
                        voting.votedCount,
                        voting.totalVoters,
                      )}
                      className="h-2"
                    />
                    <div className="flex justify-between text-xs text-muted-foreground">
                      <span>
                        Quorum: {voting.quorumRequired}%
                        {isQuorumMet(
                          voting.votedCount,
                          voting.totalVoters,
                          voting.quorumRequired,
                        )
                          ? " ✓"
                          : " ✗"}
                      </span>
                      <span>Approval: {voting.approvalThreshold}%</span>
                    </div>
                  </div>

                  {/* Vote Counts */}
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div className="p-3 bg-green-50 rounded-lg">
                      <div className="text-2xl font-bold text-green-600">
                        {voting.yesCount}
                      </div>
                      <div className="text-sm text-green-600">Yes</div>
                    </div>
                    <div className="p-3 bg-red-50 rounded-lg">
                      <div className="text-2xl font-bold text-red-600">
                        {voting.noCount}
                      </div>
                      <div className="text-sm text-red-600">No</div>
                    </div>
                    <div className="p-3 bg-gray-50 rounded-lg">
                      <div className="text-2xl font-bold text-gray-600">
                        {voting.abstainCount}
                      </div>
                      <div className="text-sm text-gray-600">Abstain</div>
                    </div>
                  </div>

                  {/* Voting Actions */}
                  {!voting.hasVoted ? (
                    <div className="flex gap-2 pt-4 border-t">
                      <Button
                        onClick={() => handleVote(voting.id, "yes")}
                        className="flex-1 bg-green-600 hover:bg-green-700"
                      >
                        <CheckCircle className="mr-2 h-4 w-4" />
                        Vote Yes
                      </Button>
                      <Button
                        onClick={() => handleVote(voting.id, "no")}
                        variant="destructive"
                        className="flex-1"
                      >
                        <XCircle className="mr-2 h-4 w-4" />
                        Vote No
                      </Button>
                      <Button
                        onClick={() => handleVote(voting.id, "abstain")}
                        variant="outline"
                        className="flex-1"
                      >
                        Abstain
                      </Button>
                    </div>
                  ) : (
                    <div className="pt-4 border-t">
                      <div className="text-center p-3 bg-blue-50 rounded-lg">
                        <span className="text-blue-800">
                          ✓ You voted:{" "}
                          <strong className="capitalize">
                            {voting.userVote}
                          </strong>
                        </span>
                      </div>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        <TabsContent value="completed" className="space-y-4">
          {completedVotings.map((voting) => (
            <Card key={voting.id} className="hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="space-y-4">
                  {/* Header */}
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <h3 className="text-lg font-semibold">
                          {voting.title}
                        </h3>
                        {getStatusBadge(voting.status)}
                        <Badge variant="outline">{voting.type}</Badge>
                      </div>
                      <p className="text-muted-foreground">
                        {voting.description}
                      </p>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          <span>Completed: {voting.completedDate}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Users className="h-4 w-4" />
                          <span>{voting.totalVoters} total voters</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleViewDetails(voting.id)}
                      >
                        <FileText className="mr-1 h-3 w-3" />
                        View Report
                      </Button>
                    </div>
                  </div>

                  {/* Result */}
                  <div
                    className="p-4 rounded-lg"
                    style={{
                      backgroundColor:
                        voting.status === "passed" ? "#f0f9ff" : "#fef2f2",
                    }}
                  >
                    <div className="flex items-center gap-2">
                      {voting.status === "passed" ? (
                        <CheckCircle className="h-5 w-5 text-green-600" />
                      ) : (
                        <XCircle className="h-5 w-5 text-red-600" />
                      )}
                      <span
                        className="font-semibold"
                        style={{
                          color:
                            voting.status === "passed" ? "#166534" : "#dc2626",
                        }}
                      >
                        {voting.result}
                      </span>
                    </div>
                  </div>

                  {/* Final Vote Counts */}
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div className="p-3 bg-green-50 rounded-lg">
                      <div className="text-2xl font-bold text-green-600">
                        {voting.yesCount}
                      </div>
                      <div className="text-sm text-green-600">Yes</div>
                    </div>
                    <div className="p-3 bg-red-50 rounded-lg">
                      <div className="text-2xl font-bold text-red-600">
                        {voting.noCount}
                      </div>
                      <div className="text-sm text-red-600">No</div>
                    </div>
                    <div className="p-3 bg-gray-50 rounded-lg">
                      <div className="text-2xl font-bold text-gray-600">
                        {voting.abstainCount}
                      </div>
                      <div className="text-sm text-gray-600">Abstain</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>
      </Tabs>
    </div>
  );
}
