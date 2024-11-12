import { Textarea } from "@nextui-org/react";

const Step6 = ({ formData, handleInputChange }) => (
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

export default Step6;