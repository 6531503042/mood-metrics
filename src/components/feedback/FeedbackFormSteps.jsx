import { Select, SelectItem, Textarea, RadioGroup, Radio } from "@nextui-org/react";
import { SmilePlus, Meh, Frown } from 'lucide-react';
import FeedbackPrivacySelector from '../FeedbackPrivacySelector';
import { categories, teams, projects } from '../../utils/feedbackUtils';

export const Step1 = ({ formData, handleInputChange }) => (
  <div className="space-y-4 max-w-full">
    <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg mb-6">
      <h3 className="text-lg font-semibold text-purple-700 mb-2">Privacy Notice</h3>
      <p className="text-sm text-purple-600">
        Your feedback helps us improve our workplace. This data will be used for:
        - Team performance analysis
        - Workplace improvement initiatives
        - Career development planning
        - Company culture enhancement
      </p>
    </div>
    <Select 
      label="Which team are you providing feedback for?" 
      placeholder="Select a team"
      value={formData.team}
      onChange={(e) => handleInputChange("team", e.target.value)}
      className="max-w-full"
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
        handleInputChange("displayProject", e.target.value);
      }}
      className="max-w-full"
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

export const Step3 = ({ formData, handleEmojiClick }) => {
  const sentiments = [
    { value: -1, label: "Needs Improvement", icon: <Frown className="w-8 h-8 text-red-500" /> },
    { value: 0, label: "Meeting Expectations", icon: <Meh className="w-8 h-8 text-yellow-500" /> },
    { value: 1, label: "Exceeding Expectations", icon: <SmilePlus className="w-8 h-8 text-green-500" /> }
  ];

  return (
    <div className="space-y-6">
      <p className="text-lg font-semibold text-gray-700 dark:text-gray-300">
        How would you rate your experience in this category?
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {sentiments.map((item) => (
          <button
            key={item.value}
            type="button"
            onClick={() => handleEmojiClick(item.value)}
            className={`flex flex-col items-center justify-center p-4 rounded-lg border-2 transition-all duration-200 ${
              formData.rating === item.value 
                ? 'border-purple-500 bg-purple-50 dark:bg-purple-900/20' 
                : 'border-gray-200 hover:border-purple-300 dark:border-gray-700'
            }`}
          >
            {item.icon}
            <span className="mt-2 text-sm font-medium text-gray-600 dark:text-gray-300">
              {item.label}
            </span>
          </button>
        ))}
      </div>
      
      <div className="mt-6">
        <Textarea
          label="Please explain your rating"
          placeholder="What specific aspects influenced your rating? Your detailed feedback helps us improve."
          value={formData.ratingExplanation || ''}
          onChange={(e) => handleInputChange("ratingExplanation", e.target.value)}
          className="min-h-[100px]"
        />
      </div>
    </div>
  );
};

export const Step4 = ({ formData, handleInputChange }) => (
  <div className="space-y-6">
    <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg mb-4">
      <h3 className="text-lg font-semibold text-purple-700 mb-2">Critical Feedback Section</h3>
      <p className="text-sm text-purple-600 mb-4">
        Your honest feedback helps us identify areas for improvement and take actionable steps.
      </p>
    </div>
    <Textarea
      label="What specific challenges or obstacles have you encountered?"
      placeholder="Please describe any difficulties or barriers you've faced in detail."
      value={formData.challenges || ''}
      onChange={(e) => handleInputChange("challenges", e.target.value)}
      className="min-h-[100px] w-full"
    />
    <Textarea
      label="How has this impacted your work or team's performance?"
      placeholder="Please explain the effects on productivity, morale, or collaboration."
      value={formData.impact || ''}
      onChange={(e) => handleInputChange("impact", e.target.value)}
      className="min-h-[100px] w-full"
    />
    <Textarea
      label="What specific metrics or KPIs have been affected?"
      placeholder="Please mention any measurable impacts on deadlines, quality, or efficiency."
      value={formData.metrics || ''}
      onChange={(e) => handleInputChange("metrics", e.target.value)}
      className="min-h-[100px] w-full"
    />
  </div>
);

export const Step5 = ({ formData, handleInputChange }) => (
  <div className="space-y-6">
    <Textarea
      label="What specific solutions or improvements would you suggest?"
      placeholder="Share your ideas for addressing the challenges mentioned."
      value={formData.improvement}
      onChange={(e) => handleInputChange("improvement", e.target.value)}
      className="min-h-[100px]"
    />
    <Textarea
      label="What resources or support would help implement these improvements?"
      placeholder="What tools, training, or assistance would be beneficial?"
      value={formData.resources}
      onChange={(e) => handleInputChange("resources", e.target.value)}
      className="min-h-[100px]"
    />
  </div>
);

export const Step6 = ({ formData, handleInputChange }) => (
  <div className="space-y-6">
    <p className="text-lg font-semibold text-gray-700 dark:text-gray-300">
      Long-term Impact & Strategic Alignment
    </p>
    <Textarea
      label="How do you think these changes would benefit the company long-term?"
      placeholder="Consider impacts on efficiency, innovation, culture, and growth."
      value={formData.longTermImpact}
      onChange={(e) => handleInputChange("longTermImpact", e.target.value)}
      className="min-h-[100px]"
    />
    <Textarea
      label="How does this align with our company's goals and values?"
      placeholder="Explain how your suggestions support our organizational objectives."
      value={formData.alignment}
      onChange={(e) => handleInputChange("alignment", e.target.value)}
      className="min-h-[100px]"
    />
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
