"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

// Import AdminDashboard as a default import
import AdminDashboard from "@/components/admin-dashboard";
import { AssemblyDashboard } from "@/components/assembly-dashboard";
import { BODDashboard } from "@/components/bod-dashboard";
import { CEODashboard } from "@/components/ceo-dashboard";
import { ChairmanDashboard } from "@/components/chairman-dashboard";
import { CommitteeDashboard } from "@/components/committee-dashboard";
import { LegalDashboard } from "@/components/legal-dashboard";
import { MDDashboard } from "@/components/md-dashboard";
import { ShareholderDashboard } from "@/components/shareholder-dashboard";

export default function DashboardPage() {
  const [userRole, setUserRole] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    try {
      // Get user role from localStorage
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
      // Set a default role for demo purposes
      setUserRole("shareholder");
    } finally {
      setLoading(false);
    }
  }, [router]);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-[80vh]">
        Loading dashboard...
      </div>
    );
  }

  // Render the appropriate dashboard based on user role
  switch (userRole) {
    case "admin":
      return <AdminDashboard />;
    case "shareholder":
      return <ShareholderDashboard />;
    case "assembly":
      return <AssemblyDashboard />;
    case "chairman":
      return <ChairmanDashboard />;
    case "md":
      return <MDDashboard />;
    case "bod":
      return <BODDashboard />;
    case "ceo":
      return <CEODashboard />;
    case "committee":
      return <CommitteeDashboard />;
    case "legal":
      return <LegalDashboard />;
    // Social platform roles
    case "bod-candidate":
      return <BODCandidateDashboard />;
    case "company-recruiter":
      return <CompanyRecruiterDashboard />;
    case "investment-analyst":
      return <InvestmentAnalystDashboard />;
    case "community-member":
      return <CommunityMemberDashboard />;
    default:
      return <ShareholderDashboard />;
  }
}
