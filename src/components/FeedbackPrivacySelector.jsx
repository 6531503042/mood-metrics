import { Select, SelectItem, Switch } from "@nextui-org/react";
import { Eye, EyeOff, Lock } from 'lucide-react';

const FeedbackPrivacySelector = ({ isAnonymous, setIsAnonymous, privacyLevel, setPrivacyLevel }) => {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between p-4 rounded-lg bg-gray-50 dark:bg-gray-800">
        <div className="flex items-center gap-2">
          {isAnonymous ? <EyeOff className="text-purple-500" /> : <Eye className="text-purple-500" />}
          <span>Submit Anonymously</span>
        </div>
        <Switch
          checked={isAnonymous}
          onChange={(e) => setIsAnonymous(e.target.checked)}
          className="ml-4"
        />
      </div>

      <Select
        label="Who can view this feedback?"
        placeholder="Select privacy level"
        value={privacyLevel}
        onChange={(e) => setPrivacyLevel(e.target.value)}
        startContent={<Lock className="text-purple-500" />}
      >
        <SelectItem key="public" value="public">
          🌐 Entire Company
        </SelectItem>
        <SelectItem key="team" value="team">
          👥 My Team Only
        </SelectItem>
        <SelectItem key="management" value="management">
          🧑‍💼 Management Only
        </SelectItem>
        <SelectItem key="hr" value="hr">
          🔒 HR Only
        </SelectItem>
        <SelectItem key="private" value="private">
          🚫 No One
        </SelectItem>
      </Select>
    </div>
  );
};

export default FeedbackPrivacySelector;
