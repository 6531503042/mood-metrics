import { Select, SelectItem, Input, Textarea, RadioGroup, Radio } from "@nextui-org/react";
import { categories, emojiRatings, teams } from '../../utils/feedbackUtils';
import FeedbackPrivacySelector from '../FeedbackPrivacySelector';

export const Step1 = ({ formData, handleInputChange }) => (
  <div className="space-y-4">
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
    <Input
      label="Project Name"
      placeholder="Enter the name of the project"
      value={formData.project}
      onChange={(e) => handleInputChange("project", e.target.value)}
    />
    <p className="text-gray-600">{formData.displayTeam && `Selected Team: ${formData.displayTeam}`}</p> {/* Display selected team */}
  </div>
);

export const Step2 = ({ formData, handleInputChange }) => (
  <div>
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
    <p className="text-gray-600">{formData.displayCategory && `Selected Category: ${formData.displayCategory}`}</p> {/* Display selected category */}
  </div>
);

export const Step3 = ({ formData, handleEmojiClick, handleInputChange }) => (
  <div>
    <p className="mb-2 text-lg">How would you rate your experience in this area?</p>
    <div className="flex justify-between">
      {emojiRatings.map((item) => (
        <button
          key={item.value}
          type="button"
          onClick={() => {
            handleEmojiClick(item.value);
            handleInputChange("displayRating", item.label); // Display selection in answer box
          }}
          className={`text-4xl transition-transform ${formData.rating === item.value ? 'scale-125 text-blue-600' : ''}`}
          title={item.label}
        >
          {item.emoji}
        </button>
      ))}
    </div>
    <p className="text-gray-600">{formData.displayRating && `Selected Rating: ${formData.displayRating}`}</p> {/* Display selected rating */}
  </div>
);

export const Step4 = ({ formData, handleInputChange }) => (
  <Textarea
    label="Please describe your experience in detail"
    placeholder="What specific aspects influenced your rating?"
    value={formData.feedback}
    onChange={(e) => handleInputChange("feedback", e.target.value)}
    className="transition-shadow focus:shadow-lg focus:border-blue-500" // Styled effect
  />
);

export const Step5 = ({ formData, handleInputChange }) => (
  <Textarea
    label="What specific changes or improvements would you suggest for our services?"
    placeholder="Your suggestions for enhancing our offerings or addressing any issues"
    value={formData.improvement}
    onChange={(e) => handleInputChange("improvement", e.target.value)}
    className="transition-shadow focus:shadow-lg focus:border-blue-500" // Styled effect
  />
);


export const Step6 = ({ formData, handleInputChange }) => (
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
    <p className="text-gray-600">{formData.displayRecommendation && `Selected Recommendation: ${formData.displayRecommendation}`}</p> {/* Display selected recommendation */}
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
