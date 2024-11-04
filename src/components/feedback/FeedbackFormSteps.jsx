import { useState } from 'react';
import { Select, SelectItem, Textarea, RadioGroup, Radio } from "@nextui-org/react";
import { categories, emojiRatings, teams, projects } from '../../utils/feedbackUtils';
import FeedbackPrivacySelector from '../FeedbackPrivacySelector';

const FeedbackFormSteps = () => {
  const [formData, setFormData] = useState({
    team: '',
    displayTeam: '',
    project: '',
    displayProject: '',
    category: '',
    displayCategory: '',
    rating: '',
    displayRating: '',
    feedback: '',
    improvement: '',
    recommendation: '',
    displayRecommendation: '',
    isAnonymous: false,
    privacyLevel: ''
  });

  const handleInputChange = (field, value) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [field]: value,
    }));
  };

  const handleEmojiClick = (value) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      rating: value,
      displayRating: emojiRatings.find((emoji) => emoji.value === value).label,
    }));
  };

  return (
    <div className="space-y-4">
      {/* Step 1 */}
      <Select 
        label="Which team are you providing feedback for?" 
        placeholder="Select a team"
        value={formData.team}
        onChange={(e) => {
          handleInputChange("team", e.target.value);
          handleInputChange("displayTeam", e.target.value); // Display selection in answer box
        }}
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
          handleInputChange("displayProject", e.target.value); // Display selection in answer box
        }}
      >
        {projects.map((project) => (
          <SelectItem key={project.value} value={project.value}>
            {project.label}
          </SelectItem>
        ))}
      </Select>

      {/* Step 2 */}
      <Select 
        label="What specific area would you like to provide feedback on?" 
        placeholder="Choose a category"
        value={formData.category}
        onChange={(e) => {
          handleInputChange("category", e.target.value);
          handleInputChange("displayCategory", e.target.value); // Display selection in answer box
        }}
      >
        {categories.map((cat) => (
          <SelectItem key={cat.value} value={cat.value}>
            {cat.emoji} {cat.label}
          </SelectItem>
        ))}
      </Select>

      {/* Step 3 */}
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

      {/* Step 4 */}
      <Textarea
        label="Please describe your experience in detail"
        placeholder="What specific aspects influenced your rating?"
        value={formData.feedback}
        onChange={(e) => handleInputChange("feedback", e.target.value)}
        className="transition-shadow focus:shadow-lg focus:border-blue-500"
      />

      {/* Step 5 */}
      <Textarea
        label="What specific changes or improvements would you suggest for our services?"
        placeholder="Your suggestions for enhancing our offerings or addressing any issues"
        value={formData.improvement}
        onChange={(e) => handleInputChange("improvement", e.target.value)}
        className="transition-shadow focus:shadow-lg focus:border-blue-500"
      />

      {/* Step 6 */}
      <RadioGroup
        label="How likely are you to recommend our company to a friend or colleague?"
        value={formData.recommendation}
        onChange={(value) => {
          handleInputChange("recommendation", value);
          handleInputChange("displayRecommendation", value); // Display selection in answer box
        }}
      >
        <Radio value="1">Not at all likely</Radio>
        <Radio value="2">Somewhat unlikely</Radio>
        <Radio value="3">Neutral</Radio>
        <Radio value="4">Somewhat likely</Radio>
        <Radio value="5">Very likely</Radio>
      </RadioGroup>

      {/* Step 7 */}
      <FeedbackPrivacySelector
        isAnonymous={formData.isAnonymous}
        setIsAnonymous={(value) => handleInputChange("isAnonymous", value)}
        privacyLevel={formData.privacyLevel}
        setPrivacyLevel={(value) => handleInputChange("privacyLevel", value)}
      />
    </div>
  );
};

export default FeedbackFormSteps;
