import { Textarea } from "@nextui-org/react";
import { Frown, Meh, SmilePlus } from 'lucide-react';

const Step3 = ({ formData, handleInputChange, handleEmojiClick }) => {
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

export default Step3;