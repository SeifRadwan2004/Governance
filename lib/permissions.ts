// Role-based permissions system for corporate governance

export type UserRole =
  | "admin"
  | "chairman"
  | "ceo"
  | "shareholder"
  | "bod" // Board of Directors (non-executive)
  | "md" // Managing Director
  | "committee"
  | "legal"
  | "bod-candidate"
  | "company-recruiter"
  | "investment-analyst"
  | "community-member";

export type Permission =
  | "schedule_meetings"
  | "create_proposals"
  | "vote_on_decisions"
  | "manage_members"
  | "access_all_documents"
  | "access_board_documents"
  | "access_financial_reports"
  | "manage_system_settings"
  | "view_all_kpis"
  | "view_committee_info"
  | "schedule_committee_meetings"
  | "access_shareholder_info"
  | "manage_committees"
  | "view_member_profiles"
  | "edit_own_profile"
  | "access_admin_panel";

// Role-based permission matrix
const rolePermissions: Record<UserRole, Permission[]> = {
  admin: [
    "schedule_meetings",
    "create_proposals",
    "vote_on_decisions",
    "manage_members",
    "access_all_documents",
    "access_board_documents",
    "access_financial_reports",
    "manage_system_settings",
    "view_all_kpis",
    "view_committee_info",
    "schedule_committee_meetings",
    "access_shareholder_info",
    "manage_committees",
    "view_member_profiles",
    "edit_own_profile",
    "access_admin_panel",
  ],
  chairman: [
    "schedule_meetings",
    "create_proposals",
    "vote_on_decisions",
    "access_all_documents",
    "access_board_documents",
    "access_financial_reports",
    "view_all_kpis",
    "view_committee_info",
    "schedule_committee_meetings",
    "view_member_profiles",
    "edit_own_profile",
  ],
  ceo: [
    "create_proposals",
    "vote_on_decisions",
    "access_board_documents",
    "access_financial_reports",
    "view_all_kpis",
    "view_committee_info",
    "schedule_committee_meetings", // For executive committee
    "view_member_profiles",
    "edit_own_profile",
  ],
  md: [
    "create_proposals",
    "vote_on_decisions",
    "access_board_documents",
    "access_financial_reports",
    "view_all_kpis",
    "view_committee_info",
    "view_member_profiles",
    "edit_own_profile",
  ],
  bod: [
    "vote_on_decisions",
    "access_board_documents",
    "view_committee_info", // Only their committees
    "view_member_profiles",
    "edit_own_profile",
  ],
  committee: [
    "vote_on_decisions", // Only on committee matters
    "view_committee_info", // Only their committee
    "schedule_committee_meetings", // If committee chair
    "access_board_documents", // Limited access
    "edit_own_profile",
  ],
  legal: [
    "create_proposals", // Legal proposals only
    "vote_on_decisions",
    "access_all_documents", // Legal has broad document access
    "access_board_documents",
    "view_committee_info",
    "view_member_profiles",
    "edit_own_profile",
  ],
  shareholder: [
    "vote_on_decisions", // Only shareholder resolutions
    "access_financial_reports", // Public financial info only
    "access_shareholder_info",
    "edit_own_profile",
  ],
  "bod-candidate": ["access_financial_reports", "edit_own_profile"],
  "company-recruiter": [
    "view_member_profiles", // Limited view
    "edit_own_profile",
  ],
  "investment-analyst": [
    "access_financial_reports",
    "access_shareholder_info",
    "edit_own_profile",
  ],
  "community-member": ["edit_own_profile"],
};

// Committee positions that can schedule committee meetings
const committeeChairs = ["committee-chair", "committee-lead"];

export function hasPermission(
  userRole: UserRole,
  permission: Permission,
): boolean {
  const permissions = rolePermissions[userRole];
  return permissions ? permissions.includes(permission) : false;
}

export function canScheduleMeetings(userRole: UserRole): boolean {
  return hasPermission(userRole, "schedule_meetings");
}

export function canCreateProposals(userRole: UserRole): boolean {
  return hasPermission(userRole, "create_proposals");
}

export function canVoteOnDecisions(userRole: UserRole): boolean {
  return hasPermission(userRole, "vote_on_decisions");
}

export function canManageMembers(userRole: UserRole): boolean {
  return hasPermission(userRole, "manage_members");
}

export function canAccessAllDocuments(userRole: UserRole): boolean {
  return hasPermission(userRole, "access_all_documents");
}

export function canAccessBoardDocuments(userRole: UserRole): boolean {
  return hasPermission(userRole, "access_board_documents");
}

export function canViewAllKPIs(userRole: UserRole): boolean {
  return hasPermission(userRole, "view_all_kpis");
}

export function canManageSystemSettings(userRole: UserRole): boolean {
  return hasPermission(userRole, "manage_system_settings");
}

export function canAccessAdminPanel(userRole: UserRole): boolean {
  return hasPermission(userRole, "access_admin_panel");
}

export function getFilteredKPIs(userRole: UserRole) {
  const baseKPIs = ["meetings", "decisions", "members"];

  switch (userRole) {
    case "admin":
    case "chairman":
      return [
        "governance",
        "meetings",
        "decisions",
        "members",
        "security",
        "performance",
      ];
    case "ceo":
    case "md":
      return ["governance", "meetings", "decisions", "members", "performance"];
    case "bod":
    case "committee":
      return ["meetings", "decisions", "members"];
    case "legal":
      return ["governance", "meetings", "decisions", "security"];
    case "shareholder":
      return ["financial", "decisions"]; // Only shareholder-relevant KPIs
    default:
      return ["financial"]; // Minimal access
  }
}

export function getDocumentAccessLevel(
  userRole: UserRole,
): "all" | "board" | "financial" | "none" {
  if (hasPermission(userRole, "access_all_documents")) return "all";
  if (hasPermission(userRole, "access_board_documents")) return "board";
  if (hasPermission(userRole, "access_financial_reports")) return "financial";
  return "none";
}

export function getUserRoleDisplayName(role: UserRole): string {
  const roleNames: Record<UserRole, string> = {
    admin: "Administrator",
    chairman: "Chairman",
    ceo: "Chief Executive Officer",
    md: "Managing Director",
    bod: "Board of Directors",
    committee: "Committee Member",
    legal: "Legal Counsel",
    shareholder: "Shareholder",
    "bod-candidate": "Board Candidate",
    "company-recruiter": "Company Recruiter",
    "investment-analyst": "Investment Analyst",
    "community-member": "Community Member",
  };

  return roleNames[role] || role;
}

// Helper to get user role from localStorage (for client-side components)
export function getCurrentUserRole(): UserRole {
  if (typeof window !== "undefined") {
    const storedRole = localStorage.getItem("userRole");
    return (storedRole as UserRole) || "shareholder";
  }
  return "shareholder";
}
