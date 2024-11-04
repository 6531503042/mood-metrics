import { Select, SelectItem, Textarea, RadioGroup, Radio } from "@nextui-org/react";
import { categories, emojiRatings, teams, projects, emoji } from '../../utils/feedbackUtils';
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
    // Update the selected category
    handleInputChange("category", value);

    // Find the selected category based on the value
    const selectedCategory = categories.find(cat => cat.value === value);

    // Update displayCategory to include emoji and label
    if (selectedCategory) {
      handleInputChange("displayCategory", `${selectedCategory.emoji} ${selectedCategory.label}`);
    } else {
      handleInputChange("displayCategory", ""); // Clear if no category is selected
    }
  };

  return (
    <div>
      <Select 
        label="What specific area would you like to provide feedback on?" 
        placeholder="Choose a category"
        value={formData.category}
        onChange={(e) => handleChange(e.target.value)} 
      >
        {categories.map((cat) => (
          <SelectItem key={cat.value} value={cat.value}>
            {emoji[cat.value]} {cat.label} {/* Use emojis from the utility */}
          </SelectItem>
        ))}
      </Select>

      <div className="answer-box">
        {formData.displayCategory || "No category selected."} {/* Display selected category or fallback text */}
      </div>
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

export const Step6 = ({ formData, handleInputChange }) => (
  <RadioGroup
    label="How likely are you to recommend our company to a friend or colleague?"
    value={formData.recommendation}
    onChange={(value) => {
      handleInputChange("recommendation", value);
    }}
  >
    <Radio className="nextui-radio" value="1">Not at all likely</Radio>
    <Radio className="nextui-radio" value="2">Somewhat unlikely</Radio>
    <Radio className="nextui-radio" value="3">Neutral</Radio>
    <Radio className="nextui-radio" value="4">Somewhat likely</Radio>
    <Radio className="nextui-radio" value="5">Very likely</Radio>
  </RadioGroup>
);


export const Step7 = ({ formData, handleInputChange }) => (
  <FeedbackPrivacySelector
    isAnonymous={formData.isAnonymous}
    setIsAnonymous={(value) => handleInputChange("isAnonymous", value)}
    privacyLevel={formData.privacyLevel}
    setPrivacyLevel={(value) => handleInputChange("privacyLevel", value)}
  />
);
