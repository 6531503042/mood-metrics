import { Select, SelectItem, Textarea, RadioGroup, Radio } from "@nextui-org/react";
import { categories, emojiRatings, teams, projects } from '../../utils/feedbackUtils';
import FeedbackPrivacySelector from '../FeedbackPrivacySelector';

export const Step1 = ({ formData, handleInputChange }) => (
  <div className="space-y-4">
    <Select 
      label="Which team are you providing feedback for?" 
      placeholder="Select a team"
      value={formData.team}
      onChange={(e) => handleInputChange("team", e.target.value)}
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
      onChange={(e) => {
        handleInputChange("project", e.target.value);
        handleInputChange("displayProject", e.target.value); // Update display
      }}
    >
      {projects.map((project) => (
        <SelectItem key={project.value} value={project.value}>
          {project.label}
        </SelectItem>
      ))}
    </Select>
  </div>
);


export const Step2 = ({ formData, handleInputChange }) => {
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


export const Step3 = ({ formData, handleEmojiClick }) => (
  <div>
    <p className="mb-2 text-lg">How would you rate your experience in this area?</p>
    <div className="flex justify-between">
      {emojiRatings.map((item) => (
        <button
          key={item.value}
          type="button"
          onClick={() => handleEmojiClick(item.value)}
          className={`text-4xl transition-transform ${formData.rating === item.value ? 'scale-125 text-blue-600' : ''}`}
          title={item.label}
        >
          {item.emoji}
        </button>
      ))}
    </div>
  </div>
);

export const Step4 = ({ formData, handleInputChange }) => (
  <Textarea
    label="Please describe your experience in detail"
    placeholder="What specific aspects influenced your rating?"
    value={formData.feedback}
    onChange={(e) => handleInputChange("feedback", e.target.value)}
    className="transition-shadow focus:shadow-lg focus:border-blue-500"
  />
);

export const Step5 = ({ formData, handleInputChange }) => (
  <Textarea
    label="What specific changes or improvements would you suggest?"
    placeholder="Your suggestions for enhancing our offerings or addressing any issues"
    value={formData.improvement}
    onChange={(e) => handleInputChange("improvement", e.target.value)}
    className="transition-shadow focus:shadow-lg focus:border-blue-500"
  />
);

export const Step6 = ({ formData, handleEmojiClick }) => (
  <div className="p-4 max-w-lg mx-auto text-center">
    <p className="mb-2 text-lg font-semibold">
      Would you recommend our company to a friend or teammate?
    </p>
    <div className="flex justify-between space-x-4">
      {emojiRatings.map((item) => (
        <button
          key={item.value}
          type="button"
          onClick={() => handleEmojiClick(item.value)}
          className={`text-4xl transition-transform duration-200 ease-in-out transform ${
            formData.recommendation === item.value ? 'scale-125 text-blue-600' : 'hover:scale-110'
          }`}
          title={item.label}
          aria-label={item.label}
        >
          {item.emoji}
        </button>
      ))}
    </div>
  </div>
);


export const Step7 = ({ formData, handleInputChange }) => (
  <FeedbackPrivacySelector
    isAnonymous={formData.isAnonymous}
    setIsAnonymous={(value) => handleInputChange("isAnonymous", value)}
    privacyLevel={formData.privacyLevel}
    setPrivacyLevel={(value) => handleInputChange("privacyLevel", value)}
  />
);
