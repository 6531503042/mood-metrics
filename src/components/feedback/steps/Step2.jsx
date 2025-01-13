import { Select, SelectItem } from "@nextui-org/react";
import { categories } from '../../../utils/feedbackUtils';

const Step2 = ({ formData, handleInputChange }) => {
  const handleChange = (values) => {
    const selectedCategories = Array.from(values);
    handleInputChange("categories", selectedCategories);
    
    const selectedDisplayCategories = selectedCategories.map(value => {
      const category = categories.find(cat => cat.value === value);
      return category ? `${category.emoji} ${category.label}` : "";
    });
    handleInputChange("displayCategories", selectedDisplayCategories);
  };

  return (
    <div>
      <Select
        label="What specific areas would you like to provide feedback on?"
        placeholder="Choose categories"
        selectionMode="multiple"
        value={formData.categories}
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
        <SelectItem key="tools_resources" value="tools_resources">
          🛠️ Tools & Resources
        </SelectItem>
        <SelectItem key="communication" value="communication">
          💬 Communication
        </SelectItem>
        <SelectItem key="training_development" value="training_development">
          📚 Training & Development
        </SelectItem>
      </Select>
    </div>
  );
};

export default Step2;