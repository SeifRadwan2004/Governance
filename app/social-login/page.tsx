import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Heart, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function SocialLogin() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-purple-50 via-white to-purple-100 p-4">
      <div className="w-full max-w-md">
        <div className="mb-8 text-center">
          <div className="mb-4 flex justify-center">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-purple-600 shadow-lg">
              <Heart className="h-10 w-10 text-white" />
            </div>
          </div>
          <h1 className="text-3xl font-bold text-purple-800">
            Social Governance
          </h1>
          <p className="mt-2 text-purple-600">Coming Soon</p>
        </div>

        <Card className="border-purple-200 shadow-xl">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl text-purple-800">
              Platform Under Development
            </CardTitle>
            <CardDescription>
              The Social Governance platform is currently being developed.
              Please check back soon for community-driven governance tools.
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-6">
            <div className="rounded-lg bg-purple-50 p-4 border border-purple-200">
              <h3 className="font-medium text-purple-800 mb-2">
                Coming Features:
              </h3>
              <ul className="space-y-1 text-sm text-purple-600">
                <li>• Community member management</li>
                <li>• Participatory decision making</li>
                <li>• Social impact tracking</li>
                <li>• Volunteer coordination</li>
                <li>• Transparency tools</li>
              </ul>
            </div>

            <Link href="/">
              <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Platform Selection
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
