
import { Select, SelectItem } from "@nextui-org/react";

const RoleSelector = ({ roles, selectedRole, setSelectedRole }) => {
  return (
    <Select
      label="Select Role"
      placeholder="Choose a role"
      value={selectedRole}
      onChange={(e) => setSelectedRole(e.target.value)}
      className="max-w-xs mb-4"
    >
      {roles.map((role) => (
        <SelectItem key={role.id} value={role.id}>
          {role.name}
        </SelectItem>
      ))}
    </Select>
  );
};

export default RoleSelector;