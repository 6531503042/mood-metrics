import { Textarea } from "@nextui-org/react";

const Step4 = ({ formData, handleInputChange }) => (
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

export default Step4;