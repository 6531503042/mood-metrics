import React from 'react';
import { Select, SelectItem } from "@nextui-org/react";
import { Users, Projector, Filter } from 'lucide-react';

const SelectFilter = ({ 
  selectedTeam, 
  setSelectedTeam, 
  selectedProject, 
  setSelectedProject, 
  feedbackFilter, 
  setFeedbackFilter, 
  teams = [], 
  projects = [],
  compact = false 
}) => {
  const selectClass = compact ? "w-32 text-sm" : "w-full md:w-1/3";

  return (
    <div className={`flex ${compact ? 'space-x-2' : 'space-x-4 flex-wrap'}`}>
      {teams.length > 0 && (
        <Select
          label="Team"
          placeholder="Choose a team"
          selectedKeys={[selectedTeam]}
          onChange={(e) => setSelectedTeam(e.target.value)}
          className={selectClass}
          startContent={<Users size={18} />}
        >
          {teams.map((team) => (
            <SelectItem key={team} value={team}>
              {team}
            </SelectItem>
          ))}
        </Select>
      )}

      {projects.length > 0 && (
        <Select
          label="Project"
          placeholder="Choose a project"
          selectedKeys={[selectedProject]}
          onChange={(e) => setSelectedProject(e.target.value)}
          className={selectClass}
          startContent={<Projector size={18} />}
        >
          {projects.map((project) => (
            <SelectItem key={project} value={project}>
              {project}
            </SelectItem>
          ))}
        </Select>
      )}

      {setFeedbackFilter && (
        <Select
          label="Filter"
          placeholder="Filter feedback"
          selectedKeys={[feedbackFilter]}
          onChange={(e) => setFeedbackFilter(e.target.value)}
          className={selectClass}
          startContent={<Filter size={18} />}
        >
          <SelectItem key="all" value="all">All</SelectItem>
          <SelectItem key="positive" value="positive">Positive</SelectItem>
          <SelectItem key="neutral" value="neutral">Neutral</SelectItem>
          <SelectItem key="negative" value="negative">Negative</SelectItem>
        </Select>
      )}
    </div>
  );
};

export default SelectFilter;