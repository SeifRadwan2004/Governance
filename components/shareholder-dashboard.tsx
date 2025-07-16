"use client";

import {
  Calendar,
  DollarSign,
  PieChart,
  TrendingUp,
  Users,
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
import { Progress } from "@/components/ui/progress";

export function ShareholderDashboard() {
  const router = useRouter();

  const handleCastVote = () => {
    router.push("/voting");
  };
  return (
    <div className="flex flex-col gap-4">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card className="border-corporate-100">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Your Shares</CardTitle>
            <PieChart className="h-4 w-4 text-corporate-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-corporate-800">5.2%</div>
            <div className="flex items-center text-xs text-muted-foreground">
              <TrendingUp className="mr-1 h-3 w-3 text-green-500" />
              <span className="text-green-500 font-medium">+0.3%</span>
              <span className="ml-1">since last quarter</span>
            </div>
          </CardContent>
        </Card>
        <Card className="border-corporate-100">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Voting Rights</CardTitle>
            <Users className="h-4 w-4 text-corporate-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-corporate-800">
              52 votes
            </div>
            <p className="text-xs text-muted-foreground">
              Based on your shareholding
            </p>
          </CardContent>
        </Card>
        <Card className="border-corporate-100">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Last Dividend</CardTitle>
            <DollarSign className="h-4 w-4 text-corporate-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-corporate-800">
              $2.50/share
            </div>
            <div className="flex items-center text-xs text-muted-foreground">
              <TrendingUp className="mr-1 h-3 w-3 text-green-500" />
              <span className="text-green-500 font-medium">+8.7%</span>
              <span className="ml-1">from previous</span>
            </div>
          </CardContent>
        </Card>
        <Card className="border-corporate-100">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Next Meeting</CardTitle>
            <Calendar className="h-4 w-4 text-corporate-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-corporate-800">
              Jun 1, 2025
            </div>
            <p className="text-xs text-muted-foreground">General Assembly</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-7">
        <Card className="md:col-span-4 border-corporate-100">
          <CardHeader>
            <CardTitle>Share Performance</CardTitle>
            <CardDescription>
              Stock price over the last 12 months
            </CardDescription>
          </CardHeader>
          <CardContent className="h-[300px] flex items-center justify-center">
            <div className="w-full h-full bg-corporate-50 rounded-md flex items-center justify-center text-corporate-500">
              Stock Chart Placeholder
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <div className="text-sm text-muted-foreground">
              Current Price: $78.35
            </div>
            <Button variant="outline" size="sm" className="text-corporate-600">
              View Details
            </Button>
          </CardFooter>
        </Card>

        <Card className="md:col-span-3 border-corporate-100">
          <CardHeader>
            <CardTitle>Upcoming Votes</CardTitle>
            <CardDescription>Resolutions requiring your vote</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="font-medium">Annual Budget Approval</div>
                  <Badge className="bg-corporate-100 text-corporate-700 hover:bg-corporate-200">
                    Open
                  </Badge>
                </div>
                <div className="text-sm text-muted-foreground">
                  Closes in 5 days
                </div>
                <Progress value={65} className="h-2 bg-corporate-100">
                  <div className="h-full bg-corporate-500 rounded-full" />
                </Progress>
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>65% voted</span>
                  <span>35% remaining</span>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="font-medium">Board Member Election</div>
                  <Badge className="bg-corporate-100 text-corporate-700 hover:bg-corporate-200">
                    Open
                  </Badge>
                </div>
                <div className="text-sm text-muted-foreground">
                  Closes in 3 days
                </div>
                <Progress value={78} className="h-2 bg-corporate-100">
                  <div className="h-full bg-corporate-500 rounded-full" />
                </Progress>
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>78% voted</span>
                  <span>22% remaining</span>
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button
              onClick={handleCastVote}
              className="w-full bg-corporate-600 hover:bg-corporate-700"
            >
              Cast Your Vote
            </Button>
          </CardFooter>
        </Card>
      </div>

      <Card className="border-corporate-100">
        <CardHeader>
          <CardTitle>Recent Announcements</CardTitle>
          <CardDescription>Latest updates from the company</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-start space-x-4">
              <Avatar className="mt-1">
                <AvatarImage src="/avatars/sarah.png" />
                <AvatarFallback className="bg-corporate-100 text-corporate-700">
                  SJ
                </AvatarFallback>
              </Avatar>
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <h4 className="font-semibold">Q2 Financial Results</h4>
                  <Badge variant="outline">Financial</Badge>
                </div>
                <p className="text-sm text-muted-foreground">
                  We are pleased to announce strong Q2 results with revenue
                  growth of 15% year-over-year. The board has approved a
                  dividend of $2.50 per share, payable on July 15, 2025.
                </p>
                <div className="flex items-center text-xs text-muted-foreground">
                  <span>Posted by Sarah Johnson, Chairman</span>
                  <span className="mx-2">•</span>
                  <span>May 15, 2025</span>
                </div>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Avatar className="mt-1">
                <AvatarImage src="/avatars/david.png" />
                <AvatarFallback className="bg-corporate-100 text-corporate-700">
                  DR
                </AvatarFallback>
              </Avatar>
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <h4 className="font-semibold">
                    Strategic Acquisition Completed
                  </h4>
                  <Badge variant="outline">Strategic</Badge>
                </div>
                <p className="text-sm text-muted-foreground">
                  We have successfully completed the acquisition of XYZ
                  Technologies, which will strengthen our position in the market
                  and expand our product offerings.
                </p>
                <div className="flex items-center text-xs text-muted-foreground">
                  <span>Posted by David Rodriguez, Managing Director</span>
                  <span className="mx-2">•</span>
                  <span>May 10, 2025</span>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button variant="outline" className="w-full">
            View All Announcements
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
