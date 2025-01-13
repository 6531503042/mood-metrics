import { Select, SelectItem } from "@nextui-org/react";
import { teams, projects } from '../../../utils/feedbackUtils';

const Step1 = ({ formData, handleInputChange }) => (
  <div className="space-y-4 max-w-full">
    <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg mb-6">
      <h3 className="text-lg font-semibold text-purple-700 mb-2">Privacy Notice</h3>
      <p className="text-sm text-purple-600">
        Your feedback helps us improve our workplace. This data will be used for:
        - Team performance analysis
        - Workplace improvement initiatives
        - Career development planning
        - Company culture enhancement
      </p>
    </div>
    <Select 
      label="Which team are you providing feedback for?" 
      placeholder="Select a team"
      value={formData.team}
      onChange={(e) => handleInputChange("team", e.target.value)}
      className="max-w-full"
    >
      {teams.map((team) => (
        <SelectItem key={team.value} value={team.value}>
          {team.label}
        </SelectItem>
      ))}
    </Select>
    <Select
      label="Project Name"
      placeholder="Select a project"
      value={formData.project}
      onChange={(e) => handleInputChange("project", e.target.value)}
      className="max-w-full"
    >
      {projects.map((project) => (
        <SelectItem key={project.value} value={project.value}>
          {project.label}
        </SelectItem>
      ))}
    </Select>
  </div>
);

export default Step1;