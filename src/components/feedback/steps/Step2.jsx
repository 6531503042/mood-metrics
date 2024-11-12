import { Select, SelectItem } from "@nextui-org/react";
import { categories } from '../../../utils/feedbackUtils';

const Step2 = ({ formData, handleInputChange }) => {
  const handleChange = (value) => {
    handleInputChange("category", value);
    const selectedCategory = categories.find(cat => cat.value === value);
    handleInputChange("displayCategory", selectedCategory ? `${selectedCategory.emoji} ${selectedCategory.label}` : "");
  };

  return (
    <div>
      <Select
        label="What specific area would you like to provide feedback on?"
        placeholder="Choose a category"
        value={formData.category}
        onChange={(e) => handleChange(e.target.value)}
      >
        <SelectItem key="work_environment" value="work_environment">
          🏢 Work Environment
        </SelectItem>
        <SelectItem key="management" value="management">
          👔 Management
        </SelectItem>
        <SelectItem key="career_growth" value="career_growth">
          📈 Career Growth
        </SelectItem>
        <SelectItem key="work_life_balance" value="work_life_balance">
          ⚖️ Work-Life Balance
        </SelectItem>
        <SelectItem key="team_collaboration" value="team_collaboration">
          🤝 Team Collaboration
        </SelectItem>
        <SelectItem key="company_culture" value="company_culture">
          🌟 Company Culture
        </SelectItem>
      </Select>
    </div>
  );
};

export default Step2;