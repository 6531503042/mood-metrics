import { Textarea } from "@nextui-org/react";

const Step5 = ({ formData, handleInputChange }) => (
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

export default Step5;