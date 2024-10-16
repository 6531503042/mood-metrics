import React from 'react';
import { Select, SelectItem } from "@nextui-org/react";

const teams = ['All Teams', 'Backend', 'Frontend', 'DevOps', 'Design', 'Product'];

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
          <SelectItem key={team.toLowerCase()} value={team.toLowerCase()}>
            {team}
          </SelectItem>
        ))}
      </Select>
    </div>
  );
};

export default TeamSelector;