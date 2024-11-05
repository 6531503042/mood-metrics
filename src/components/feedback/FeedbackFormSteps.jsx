import { Select, SelectItem, Textarea, RadioGroup, Radio } from "@nextui-org/react";
import { categories, emojiRatings, teams, projects } from '../../utils/feedbackUtils';
import FeedbackPrivacySelector from '../FeedbackPrivacySelector';

export const Step1 = ({ formData, handleInputChange }) => (
  <div className="space-y-4">
    <h3 className="text-lg font-semibold mb-2">Overall Experience</h3>
    <div className="space-y-4">
      <div className="flex justify-center space-x-4">
        {emojiRatings.map((rating) => (
          <button
            key={rating.value}
            onClick={() => handleInputChange("rating", rating.value)}
            className={`text-4xl transition-transform ${
              formData.rating === rating.value ? 'scale-125' : 'hover:scale-110'
            }`}
            title={rating.label}
          >
            {rating.emoji}
          </button>
        ))}
      </div>
      <Textarea
        label="What specific factors contributed to your rating?"
        placeholder="Please share your thoughts..."
        value={formData.experienceDetails}
        onChange={(e) => handleInputChange("experienceDetails", e.target.value)}
        className="w-full"
      />
    </div>
  </div>
);

export const Step2 = ({ formData, handleInputChange }) => (
  <div className="space-y-4">
    <h3 className="text-lg font-semibold mb-2">Successes and Challenges</h3>
    <Textarea
      label="What aspects of this project worked particularly well?"
      placeholder="Share the project's successes..."
      value={formData.successes}
      onChange={(e) => handleInputChange("successes", e.target.value)}
      className="w-full"
    />
    <Textarea
      label="What were the biggest challenges, and how could they be addressed?"
      placeholder="Describe challenges and potential solutions..."
      value={formData.challenges}
      onChange={(e) => handleInputChange("challenges", e.target.value)}
      className="w-full"
    />
  </div>
);

export const Step3 = ({ formData, handleInputChange }) => (
  <div className="space-y-4">
    <h3 className="text-lg font-semibold mb-2">Team Collaboration</h3>
    <Textarea
      label="How effective was communication and collaboration within the team?"
      placeholder="Share your thoughts on team dynamics..."
      value={formData.teamCollaboration}
      onChange={(e) => handleInputChange("teamCollaboration", e.target.value)}
      className="w-full"
    />
    <Textarea
      label="What changes would you recommend for future projects?"
      placeholder="Suggest improvements for team collaboration..."
      value={formData.collaborationSuggestions}
      onChange={(e) => handleInputChange("collaborationSuggestions", e.target.value)}
      className="w-full"
    />
  </div>
);

export const Step4 = ({ formData, handleInputChange }) => (
  <div className="space-y-4">
    <h3 className="text-lg font-semibold mb-2">Role and Responsibilities</h3>
    <RadioGroup
      value={formData.roleClarity}
      onChange={(e) => handleInputChange("roleClarity", e.target.value)}
      label="Were your role and responsibilities clear throughout the project?"
    >
      <Radio value="yes">Yes, completely clear</Radio>
      <Radio value="somewhat">Somewhat clear</Radio>
      <Radio value="no">No, needed more clarity</Radio>
    </RadioGroup>
    <Textarea
      label="How could we improve role clarity in the future?"
      placeholder="Share your suggestions..."
      value={formData.roleImprovement}
      onChange={(e) => handleInputChange("roleImprovement", e.target.value)}
      className="w-full"
    />
  </div>
);

export const Step5 = ({ formData, handleInputChange }) => (
  <div className="space-y-4">
    <h3 className="text-lg font-semibold mb-2">Resources and Support</h3>
    <Textarea
      label="Did you have the resources and support needed to complete your work effectively?"
      placeholder="Describe your experience with available resources..."
      value={formData.resourceSupport}
      onChange={(e) => handleInputChange("resourceSupport", e.target.value)}
      className="w-full"
    />
    <Textarea
      label="What additional resources would have helped?"
      placeholder="Suggest helpful resources..."
      value={formData.resourceSuggestions}
      onChange={(e) => handleInputChange("resourceSuggestions", e.target.value)}
      className="w-full"
    />
  </div>
);

export const Step6 = ({ formData, handleInputChange }) => (
  <div className="space-y-4">
    <h3 className="text-lg font-semibold mb-2">Timeline and Workload</h3>
    <RadioGroup
      value={formData.workloadManageable}
      onChange={(e) => handleInputChange("workloadManageable", e.target.value)}
      label="Was the project timeline and workload manageable?"
    >
      <Radio value="yes">Yes, very manageable</Radio>
      <Radio value="somewhat">Somewhat manageable</Radio>
      <Radio value="no">No, too demanding</Radio>
    </RadioGroup>
    <Textarea
      label="How could project scheduling be improved?"
      placeholder="Share your suggestions for better workload management..."
      value={formData.workloadSuggestions}
      onChange={(e) => handleInputChange("workloadSuggestions", e.target.value)}
      className="w-full"
    />
  </div>
);

export const Step7 = ({ formData, handleInputChange }) => (
  <div className="space-y-4">
    <h3 className="text-lg font-semibold mb-2">Learning and Growth</h3>
    <Textarea
      label="What new skills or knowledge did you gain from this project?"
      placeholder="Share your learning experiences..."
      value={formData.learningGrowth}
      onChange={(e) => handleInputChange("learningGrowth", e.target.value)}
      className="w-full"
    />
    <Textarea
      label="If you could change one thing about this project, what would it be and why?"
      placeholder="Share your thoughts on potential improvements..."
      value={formData.improvement}
      onChange={(e) => handleInputChange("improvement", e.target.value)}
      className="w-full"
    />
    <FeedbackPrivacySelector
      isAnonymous={formData.isAnonymous}
      setIsAnonymous={(value) => handleInputChange("isAnonymous", value)}
      privacyLevel={formData.privacyLevel}
      setPrivacyLevel={(value) => handleInputChange("privacyLevel", value)}
    />
  </div>
);