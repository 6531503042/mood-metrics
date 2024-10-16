import React from 'react';
import { Select, SelectItem } from "@nextui-org/react";

const ProjectSelector = ({ projects, selectedProject, setSelectedProject }) => {
  return (
    <Select
      label="Select Project"
      placeholder="Choose a project"
      value={selectedProject}
      onChange={(e) => setSelectedProject(e.target.value)}
      className="max-w-xs mb-4"
    >
      {projects.map((project) => (
        <SelectItem key={project.id} value={project.id}>
          {project.name}
        </SelectItem>
      ))}
    </Select>
  );
};

export default ProjectSelector;