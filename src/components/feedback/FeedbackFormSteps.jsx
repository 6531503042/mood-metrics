import React from 'react';
import { Select, SelectItem, Input, Textarea, RadioGroup, Radio } from "@nextui-org/react";
import { categories, emojiRatings, teams } from '../../utils/feedbackUtils';
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
    <Input
      label="Project Name"
      placeholder="Enter the name of the project"
      value={formData.project}
      onChange={(e) => handleInputChange("project", e.target.value)}
    />
  </div>
);

export const Step2 = ({ formData, handleInputChange }) => (
  <Select 
    label="What specific area would you like to provide feedback on?" 
    placeholder="Choose a category"
    value={formData.category}
    onChange={(e) => handleInputChange("category", e.target.value)}
  >
    {categories.map((cat) => (
      <SelectItem key={cat.value} value={cat.value}>
        {cat.emoji} {cat.label}
      </SelectItem>
    ))}
  </Select>
);

export const Step3 = ({ formData, handleEmojiClick }) => (
  <div>
    <p className="mb-2 text-lg">How would you rate your experience in this area?</p>
    <div className="flex justify-between">
      {emojiRatings.map((item) => (
        <button
          key={item.value}
          type="button"
          onClick={() => handleEmojiClick(item.value)}
          className={`text-4xl transition-transform ${formData.rating === item.value ? 'scale-125' : ''}`}
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
  />
);

export const Step5 = ({ formData, handleInputChange }) => (
  <Textarea
    label="What improvements would you suggest?"
    placeholder="Your suggestions for enhancing our services"
    value={formData.improvement}
    onChange={(e) => handleInputChange("improvement", e.target.value)}
  />
);

export const Step6 = ({ formData, handleInputChange }) => (
  <RadioGroup
    label="How likely are you to recommend our company to a friend or colleague?"
    value={formData.recommendation}
    onChange={(value) => handleInputChange("recommendation", value)}
  >
    <Radio value="1">Not at all likely</Radio>
    <Radio value="2">Somewhat unlikely</Radio>
    <Radio value="3">Neutral</Radio>
    <Radio value="4">Somewhat likely</Radio>
    <Radio value="5">Very likely</Radio>
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