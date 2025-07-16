"use client";

import { useState } from "react";
import { Edit, Save, X } from "lucide-react";
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

interface EditVotingRuleFormProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (data: any) => void;
  ruleType: string;
}

export function EditVotingRuleForm({
  isOpen,
  onClose,
  onSave,
  ruleType,
}: EditVotingRuleFormProps) {
  // Default data based on rule type
  const getDefaultData = (type: string) => {
    const defaults = {
      "Standard Resolution": {
        name: "Standard Resolution",
        description:
          "Regular business matters requiring simple majority approval",
        quorumPercentage: 50,
        approvalThreshold: 50,
        votingPeriodDays: 7,
        noticePeriodDays: 3,
        allowAbstention: true,
        requiresNotice: true,
        eligibleRoles: ["chairman", "bod", "committee"],
        voteWeighting: "equal",
        delegationAllowed: true,
      },
      "Special Resolution": {
        name: "Special Resolution",
        description: "Important matters requiring super majority approval",
        quorumPercentage: 75,
        approvalThreshold: 67,
        votingPeriodDays: 14,
        noticePeriodDays: 7,
        allowAbstention: true,
        requiresNotice: true,
        eligibleRoles: ["chairman", "ceo", "md", "bod"],
        voteWeighting: "equal",
        delegationAllowed: false,
      },
      "Board Resolution": {
        name: "Board Resolution",
        description: "Board-specific decisions and governance matters",
        quorumPercentage: 60,
        approvalThreshold: 60,
        votingPeriodDays: 5,
        noticePeriodDays: 2,
        allowAbstention: true,
        requiresNotice: true,
        eligibleRoles: ["chairman", "ceo", "md", "bod"],
        voteWeighting: "position-based",
        delegationAllowed: true,
      },
      "Constitutional Amendment": {
        name: "Constitutional Amendment",
        description: "Changes to fundamental company structure and bylaws",
        quorumPercentage: 90,
        approvalThreshold: 75,
        votingPeriodDays: 21,
        noticePeriodDays: 14,
        allowAbstention: false,
        requiresNotice: true,
        eligibleRoles: ["chairman", "ceo", "md", "bod", "shareholder"],
        voteWeighting: "shareholding",
        delegationAllowed: false,
      },
    };
    return (
      defaults[type as keyof typeof defaults] || defaults["Standard Resolution"]
    );
  };

  const [formData, setFormData] = useState(getDefaultData(ruleType));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
    onClose();
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
      <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center space-x-2">
            <Edit className="h-5 w-5" />
            <span>Edit {ruleType}</span>
          </DialogTitle>
          <DialogDescription>
            Modify the voting rules and requirements for{" "}
            {ruleType.toLowerCase()}.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid gap-4">
            {/* Basic Information */}
            <div className="space-y-3">
              <h3 className="text-lg font-medium">Basic Information</h3>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Rule Name</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
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
                    rows={3}
                    required
                  />
                </div>
              </div>
            </div>

            {/* Voting Requirements */}
            <div className="space-y-3">
              <h3 className="text-lg font-medium">Voting Requirements</h3>
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

              <div className="space-y-2">
                <Label htmlFor="voteWeighting">Vote Weighting Method</Label>
                <Select
                  value={formData.voteWeighting}
                  onValueChange={(value) =>
                    handleInputChange("voteWeighting", value)
                  }
                  required
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select weighting method" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="equal">
                      Equal Weight (One Person, One Vote)
                    </SelectItem>
                    <SelectItem value="position-based">
                      Position-Based Weight
                    </SelectItem>
                    <SelectItem value="shareholding">
                      Shareholding-Based Weight
                    </SelectItem>
                    <SelectItem value="committee-specific">
                      Committee-Specific Weight
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Options */}
            <div className="space-y-3">
              <h3 className="text-lg font-medium">Options</h3>
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
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="delegationAllowed"
                    checked={formData.delegationAllowed}
                    onCheckedChange={(checked) =>
                      handleInputChange("delegationAllowed", checked as boolean)
                    }
                  />
                  <Label htmlFor="delegationAllowed" className="text-sm">
                    Allow vote delegation
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
              Save Changes
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
