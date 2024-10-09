import React from 'react';
import { Select, SelectItem } from "@nextui-org/react";
import { teams } from '../utils/feedbackUtils';

const TeamSelector = ({ selectedTeam, setSelectedTeam }) => {
  return (
    <div className="mb-4">
      <Select
        label="Select Team"
        placeholder="Choose a team to view feedback"
        value={selectedTeam}
        onChange={(e) => setSelectedTeam(e.target.value)}
        className="max-w-xs"
      >
        {teams.map((team) => (
          <SelectItem key={team.value} value={team.value}>
            {team.label}
          </SelectItem>
        ))}
      </Select>
    </div>
  );
};

export default TeamSelector;