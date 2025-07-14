"use client";

import { useState } from "react";
import { Vote, Save, X, Plus, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";

interface VotingCategoryFormProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (data: any) => void;
}

export function VotingCategoryForm({
  isOpen,
  onClose,
  onSave,
}: VotingCategoryFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    type: "",
    quorumPercentage: 50,
    approvalThreshold: 50,
    votingPeriodDays: 7,
    allowAbstention: true,
    requiresNotice: true,
    noticePeriodDays: 3,
    eligibleRoles: [] as string[],
    categories: [""],
    isActive: true,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
    onClose();
    // Reset form
    setFormData({
      name: "",
      description: "",
      type: "",
      quorumPercentage: 50,
      approvalThreshold: 50,
      votingPeriodDays: 7,
      allowAbstention: true,
      requiresNotice: true,
      noticePeriodDays: 3,
      eligibleRoles: [],
      categories: [""],
      isActive: true,
    });
  };

  const handleInputChange = (
    field: string,
    value: string | number | boolean,
  ) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleRoleToggle = (role: string, checked: boolean) => {
    setFormData((prev) => ({
      ...prev,
      eligibleRoles: checked
        ? [...prev.eligibleRoles, role]
        : prev.eligibleRoles.filter((r) => r !== role),
    }));
  };

  const addCategory = () => {
    setFormData((prev) => ({
      ...prev,
      categories: [...prev.categories, ""],
    }));
  };

  const updateCategory = (index: number, value: string) => {
    setFormData((prev) => ({
      ...prev,
      categories: prev.categories.map((cat, i) => (i === index ? value : cat)),
    }));
  };

  const removeCategory = (index: number) => {
    setFormData((prev) => ({
      ...prev,
      categories: prev.categories.filter((_, i) => i !== index),
    }));
  };

  const availableRoles = [
    "chairman",
    "ceo",
    "md",
    "bod",
    "committee",
    "legal",
    "shareholder",
    "assembly",
  ];

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[700px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center space-x-2">
            <Vote className="h-5 w-5" />
            <span>Add New Voting Category</span>
          </DialogTitle>
          <DialogDescription>
            Create a new voting category with specific rules and requirements.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid gap-4">
            {/* Basic Information */}
            <div className="space-y-3">
              <h3 className="text-lg font-medium">Basic Information</h3>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Category Name</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    placeholder="e.g., Strategic Decisions, Budget Approval"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description">Description</Label>
                  <Textarea
                    id="description"
                    value={formData.description}
                    onChange={(e) =>
                      handleInputChange("description", e.target.value)
                    }
                    placeholder="Describe what types of decisions fall under this category"
                    rows={3}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="type">Voting Type</Label>
                  <Select
                    value={formData.type}
                    onValueChange={(value) => handleInputChange("type", value)}
                    required
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select voting type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="simple-majority">
                        Simple Majority
                      </SelectItem>
                      <SelectItem value="super-majority">
                        Super Majority (2/3)
                      </SelectItem>
                      <SelectItem value="unanimous">Unanimous</SelectItem>
                      <SelectItem value="special-resolution">
                        Special Resolution
                      </SelectItem>
                      <SelectItem value="board-resolution">
                        Board Resolution
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>

            {/* Voting Rules */}
            <div className="space-y-3">
              <h3 className="text-lg font-medium">Voting Rules</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="quorumPercentage">Quorum Required (%)</Label>
                  <Input
                    id="quorumPercentage"
                    type="number"
                    min="1"
                    max="100"
                    value={formData.quorumPercentage}
                    onChange={(e) =>
                      handleInputChange(
                        "quorumPercentage",
                        parseInt(e.target.value),
                      )
                    }
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="approvalThreshold">
                    Approval Threshold (%)
                  </Label>
                  <Input
                    id="approvalThreshold"
                    type="number"
                    min="1"
                    max="100"
                    value={formData.approvalThreshold}
                    onChange={(e) =>
                      handleInputChange(
                        "approvalThreshold",
                        parseInt(e.target.value),
                      )
                    }
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="votingPeriodDays">Voting Period (Days)</Label>
                  <Input
                    id="votingPeriodDays"
                    type="number"
                    min="1"
                    max="365"
                    value={formData.votingPeriodDays}
                    onChange={(e) =>
                      handleInputChange(
                        "votingPeriodDays",
                        parseInt(e.target.value),
                      )
                    }
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="noticePeriodDays">Notice Period (Days)</Label>
                  <Input
                    id="noticePeriodDays"
                    type="number"
                    min="0"
                    max="30"
                    value={formData.noticePeriodDays}
                    onChange={(e) =>
                      handleInputChange(
                        "noticePeriodDays",
                        parseInt(e.target.value),
                      )
                    }
                    disabled={!formData.requiresNotice}
                  />
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="allowAbstention"
                    checked={formData.allowAbstention}
                    onCheckedChange={(checked) =>
                      handleInputChange("allowAbstention", checked as boolean)
                    }
                  />
                  <Label htmlFor="allowAbstention" className="text-sm">
                    Allow abstention votes
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="requiresNotice"
                    checked={formData.requiresNotice}
                    onCheckedChange={(checked) =>
                      handleInputChange("requiresNotice", checked as boolean)
                    }
                  />
                  <Label htmlFor="requiresNotice" className="text-sm">
                    Requires advance notice
                  </Label>
                </div>
              </div>
            </div>

            {/* Eligible Roles */}
            <div className="space-y-3">
              <h3 className="text-lg font-medium">Eligible Voters</h3>
              <div className="grid grid-cols-2 gap-4">
                {availableRoles.map((role) => (
                  <div key={role} className="flex items-center space-x-2">
                    <Checkbox
                      id={role}
                      checked={formData.eligibleRoles.includes(role)}
                      onCheckedChange={(checked) =>
                        handleRoleToggle(role, checked as boolean)
                      }
                    />
                    <Label htmlFor={role} className="text-sm capitalize">
                      {role
                        .replace(/([A-Z])/g, " $1")
                        .replace(/^./, (str) => str.toUpperCase())}
                    </Label>
                  </div>
                ))}
              </div>
            </div>

            {/* Sub-categories */}
            <div className="space-y-3">
              <h3 className="text-lg font-medium">Sub-categories</h3>
              <div className="space-y-2">
                {formData.categories.map((category, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <Input
                      value={category}
                      onChange={(e) => updateCategory(index, e.target.value)}
                      placeholder={`Sub-category ${index + 1}`}
                      className="flex-1"
                    />
                    {formData.categories.length > 1 && (
                      <Button
                        type="button"
                        variant="outline"
                        size="sm"
                        onClick={() => removeCategory(index)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    )}
                  </div>
                ))}
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  onClick={addCategory}
                  className="w-full"
                >
                  <Plus className="h-4 w-4 mr-2" />
                  Add Sub-category
                </Button>
              </div>
            </div>

            {/* Status */}
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="isActive"
                  checked={formData.isActive}
                  onCheckedChange={(checked) =>
                    handleInputChange("isActive", checked as boolean)
                  }
                />
                <Label htmlFor="isActive" className="text-sm">
                  Activate this voting category immediately
                </Label>
              </div>
            </div>
          </div>

          <DialogFooter className="flex justify-end space-x-2">
            <Button type="button" variant="outline" onClick={onClose}>
              <X className="mr-2 h-4 w-4" />
              Cancel
            </Button>
            <Button
              type="submit"
              className="bg-corporate-600 hover:bg-corporate-700"
            >
              <Save className="mr-2 h-4 w-4" />
              Create Category
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
