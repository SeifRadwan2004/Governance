"use client";

import { useState } from "react";
import {
  FileText,
  Upload,
  Download,
  Eye,
  Share,
  Trash2,
  Search,
  Filter,
  Plus,
  Folder,
  Calendar,
  User,
  Lock,
  Unlock,
  Star,
  MoreVertical,
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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useToast } from "@/hooks/use-toast";

export default function DocumentsPage() {
  const [activeTab, setActiveTab] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [filterCategory, setFilterCategory] = useState("all");
  const [viewMode, setViewMode] = useState("grid");
  const { toast } = useToast();

  // Mock documents data
  const documents = [
    {
      id: 1,
      name: "Q4 2024 Financial Report",
      type: "PDF",
      size: "2.4 MB",
      category: "Financial",
      uploadDate: "2025-01-15",
      uploadedBy: "CFO Sarah Johnson",
      isConfidential: false,
      downloadCount: 12,
      isStarred: true,
      tags: ["quarterly", "financial", "report"],
      description: "Comprehensive financial performance report for Q4 2024",
    },
    {
      id: 2,
      name: "Board Meeting Minutes - January 2025",
      type: "DOCX",
      size: "845 KB",
      category: "Meeting",
      uploadDate: "2025-01-20",
      uploadedBy: "Legal Robert Garcia",
      isConfidential: true,
      downloadCount: 8,
      isStarred: false,
      tags: ["meeting", "minutes", "board"],
      description: "Official minutes from January 2025 board meeting",
    },
    {
      id: 3,
      name: "ESG Compliance Policy 2025",
      type: "PDF",
      size: "1.8 MB",
      category: "Policy",
      uploadDate: "2025-01-18",
      uploadedBy: "Admin Alex Morgan",
      isConfidential: false,
      downloadCount: 25,
      isStarred: true,
      tags: ["esg", "policy", "compliance"],
      description:
        "Updated environmental, social, and governance compliance guidelines",
    },
    {
      id: 4,
      name: "Shareholder Agreement Amendment",
      type: "PDF",
      size: "3.2 MB",
      category: "Legal",
      uploadDate: "2025-01-10",
      uploadedBy: "Legal Robert Garcia",
      isConfidential: true,
      downloadCount: 6,
      isStarred: false,
      tags: ["shareholder", "agreement", "legal"],
      description:
        "Amendment to the shareholder agreement regarding voting rights",
    },
    {
      id: 5,
      name: "Annual Budget Proposal 2025",
      type: "XLSX",
      size: "1.1 MB",
      category: "Financial",
      uploadDate: "2025-01-05",
      uploadedBy: "CFO Sarah Johnson",
      isConfidential: false,
      downloadCount: 18,
      isStarred: true,
      tags: ["budget", "annual", "financial"],
      description: "Detailed budget proposal for fiscal year 2025",
    },
    {
      id: 6,
      name: "Risk Assessment Report",
      type: "PDF",
      size: "4.7 MB",
      category: "Risk",
      uploadDate: "2025-01-12",
      uploadedBy: "Risk Manager Lisa Chen",
      isConfidential: true,
      downloadCount: 9,
      isStarred: false,
      tags: ["risk", "assessment", "analysis"],
      description: "Comprehensive risk analysis and mitigation strategies",
    },
  ];

  const categories = [
    { value: "all", label: "All Categories", count: documents.length },
    {
      value: "Financial",
      label: "Financial",
      count: documents.filter((d) => d.category === "Financial").length,
    },
    {
      value: "Legal",
      label: "Legal",
      count: documents.filter((d) => d.category === "Legal").length,
    },
    {
      value: "Meeting",
      label: "Meeting",
      count: documents.filter((d) => d.category === "Meeting").length,
    },
    {
      value: "Policy",
      label: "Policy",
      count: documents.filter((d) => d.category === "Policy").length,
    },
    {
      value: "Risk",
      label: "Risk",
      count: documents.filter((d) => d.category === "Risk").length,
    },
  ];

  const handleUpload = () => {
    toast({
      title: "Upload Document",
      description: "Opening document upload dialog...",
    });
  };

  const handleDownload = (docId: number, docName: string) => {
    toast({
      title: "Download Started",
      description: `Downloading "${docName}"...`,
    });
  };

  const handleView = (docId: number, docName: string) => {
    toast({
      title: "Opening Document",
      description: `Opening "${docName}" in viewer...`,
    });
  };

  const handleShare = (docId: number, docName: string) => {
    toast({
      title: "Share Document",
      description: `Opening share options for "${docName}"...`,
    });
  };

  const handleDelete = (docId: number, docName: string) => {
    toast({
      title: "Delete Document",
      description: `"${docName}" has been moved to trash.`,
      variant: "destructive",
    });
  };

  const handleStar = (docId: number, docName: string) => {
    toast({
      title: "Document Starred",
      description: `"${docName}" added to favorites.`,
    });
  };

  const handleCreateFolder = () => {
    toast({
      title: "Create Folder",
      description: "Opening folder creation dialog...",
    });
  };

  const getFileIcon = (type: string) => {
    const iconClass = "h-8 w-8";
    switch (type.toLowerCase()) {
      case "pdf":
        return <FileText className={`${iconClass} text-red-600`} />;
      case "docx":
      case "doc":
        return <FileText className={`${iconClass} text-blue-600`} />;
      case "xlsx":
      case "xls":
        return <FileText className={`${iconClass} text-green-600`} />;
      default:
        return <FileText className={`${iconClass} text-gray-600`} />;
    }
  };

  const getCategoryBadge = (category: string) => {
    const colors = {
      Financial: "bg-green-100 text-green-800",
      Legal: "bg-blue-100 text-blue-800",
      Meeting: "bg-purple-100 text-purple-800",
      Policy: "bg-orange-100 text-orange-800",
      Risk: "bg-red-100 text-red-800",
    };
    return (
      <Badge
        className={
          colors[category as keyof typeof colors] || "bg-gray-100 text-gray-800"
        }
      >
        {category}
      </Badge>
    );
  };

  const filteredDocuments = documents.filter((doc) => {
    const matchesSearch =
      doc.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doc.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doc.tags.some((tag) =>
        tag.toLowerCase().includes(searchQuery.toLowerCase()),
      );
    const matchesCategory =
      filterCategory === "all" || doc.category === filterCategory;
    const matchesTab =
      activeTab === "all" ||
      (activeTab === "starred" && doc.isStarred) ||
      (activeTab === "confidential" && doc.isConfidential);

    return matchesSearch && matchesCategory && matchesTab;
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col lg:flex-row gap-4 justify-between items-start lg:items-center">
        <div>
          <h1 className="text-3xl font-bold text-corporate-800">
            Document Center
          </h1>
          <p className="text-muted-foreground">
            Access, manage, and collaborate on governance documents
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" onClick={handleCreateFolder}>
            <Folder className="mr-2 h-4 w-4" />
            New Folder
          </Button>
          <Button
            onClick={handleUpload}
            className="bg-corporate-600 hover:bg-corporate-700"
          >
            <Upload className="mr-2 h-4 w-4" />
            Upload Document
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Total Documents</p>
                <p className="text-2xl font-bold">{documents.length}</p>
              </div>
              <FileText className="h-8 w-8 text-blue-600" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Confidential</p>
                <p className="text-2xl font-bold">
                  {documents.filter((d) => d.isConfidential).length}
                </p>
              </div>
              <Lock className="h-8 w-8 text-red-600" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Starred</p>
                <p className="text-2xl font-bold">
                  {documents.filter((d) => d.isStarred).length}
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
                <p className="text-sm text-muted-foreground">This Month</p>
                <p className="text-2xl font-bold">
                  {documents.filter((d) => d.uploadDate >= "2025-01-01").length}
                </p>
              </div>
              <Calendar className="h-8 w-8 text-green-600" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Search and Filters */}
      <Card>
        <CardContent className="p-4">
          <div className="flex flex-col lg:flex-row gap-4 items-center">
            <div className="flex-1">
              <Input
                placeholder="Search documents..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full"
              />
            </div>
            <div className="flex gap-2">
              <Select value={filterCategory} onValueChange={setFilterCategory}>
                <SelectTrigger className="w-[160px]">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((cat) => (
                    <SelectItem key={cat.value} value={cat.value}>
                      {cat.label} ({cat.count})
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Button variant="outline" size="icon">
                <Filter className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Document Tabs */}
      <Tabs
        value={activeTab}
        onValueChange={setActiveTab}
        className="space-y-4"
      >
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="all">All Documents</TabsTrigger>
          <TabsTrigger value="starred">Starred</TabsTrigger>
          <TabsTrigger value="confidential">Confidential</TabsTrigger>
        </TabsList>

        <TabsContent value={activeTab} className="space-y-4">
          {filteredDocuments.length === 0 ? (
            <Card>
              <CardContent className="p-8 text-center">
                <FileText className="h-12 w-12 mx-auto mb-4 text-gray-400" />
                <h3 className="text-lg font-semibold mb-2">
                  No documents found
                </h3>
                <p className="text-muted-foreground">
                  Try adjusting your search criteria or upload a new document.
                </p>
              </CardContent>
            </Card>
          ) : (
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {filteredDocuments.map((doc) => (
                <Card
                  key={doc.id}
                  className="hover:shadow-md transition-shadow"
                >
                  <CardContent className="p-4">
                    <div className="space-y-3">
                      {/* Document Header */}
                      <div className="flex items-start justify-between">
                        <div className="flex items-center gap-3">
                          {getFileIcon(doc.type)}
                          <div className="flex-1 min-w-0">
                            <h3 className="font-semibold truncate">
                              {doc.name}
                            </h3>
                            <p className="text-sm text-muted-foreground">
                              {doc.type} • {doc.size}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center gap-1">
                          {doc.isStarred && (
                            <Star className="h-4 w-4 text-yellow-500 fill-current" />
                          )}
                          {doc.isConfidential && (
                            <Lock className="h-4 w-4 text-red-500" />
                          )}
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="ghost" size="sm">
                                <MoreVertical className="h-4 w-4" />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuItem
                                onClick={() => handleView(doc.id, doc.name)}
                              >
                                <Eye className="mr-2 h-4 w-4" />
                                View
                              </DropdownMenuItem>
                              <DropdownMenuItem
                                onClick={() => handleDownload(doc.id, doc.name)}
                              >
                                <Download className="mr-2 h-4 w-4" />
                                Download
                              </DropdownMenuItem>
                              <DropdownMenuItem
                                onClick={() => handleShare(doc.id, doc.name)}
                              >
                                <Share className="mr-2 h-4 w-4" />
                                Share
                              </DropdownMenuItem>
                              <DropdownMenuSeparator />
                              <DropdownMenuItem
                                onClick={() => handleStar(doc.id, doc.name)}
                              >
                                <Star className="mr-2 h-4 w-4" />
                                {doc.isStarred ? "Unstar" : "Star"}
                              </DropdownMenuItem>
                              <DropdownMenuItem
                                onClick={() => handleDelete(doc.id, doc.name)}
                                className="text-red-600"
                              >
                                <Trash2 className="mr-2 h-4 w-4" />
                                Delete
                              </DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </div>
                      </div>

                      {/* Category and Tags */}
                      <div className="space-y-2">
                        {getCategoryBadge(doc.category)}
                        <p className="text-sm text-muted-foreground line-clamp-2">
                          {doc.description}
                        </p>
                      </div>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-1">
                        {doc.tags.slice(0, 3).map((tag) => (
                          <Badge
                            key={tag}
                            variant="outline"
                            className="text-xs"
                          >
                            #{tag}
                          </Badge>
                        ))}
                        {doc.tags.length > 3 && (
                          <Badge variant="outline" className="text-xs">
                            +{doc.tags.length - 3}
                          </Badge>
                        )}
                      </div>

                      {/* Meta Info */}
                      <div className="text-xs text-muted-foreground space-y-1">
                        <div className="flex items-center gap-1">
                          <User className="h-3 w-3" />
                          <span>{doc.uploadedBy}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-1">
                            <Calendar className="h-3 w-3" />
                            <span>{doc.uploadDate}</span>
                          </div>
                          <span>{doc.downloadCount} downloads</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="p-4 pt-0">
                    <div className="flex gap-2 w-full">
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex-1"
                        onClick={() => handleView(doc.id, doc.name)}
                      >
                        <Eye className="mr-1 h-3 w-3" />
                        View
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex-1"
                        onClick={() => handleDownload(doc.id, doc.name)}
                      >
                        <Download className="mr-1 h-3 w-3" />
                        Download
                      </Button>
                    </div>
                  </CardFooter>
                </Card>
              ))}
            </div>
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
}
