import React, { useState } from 'react';
import { Card, CardHeader, CardBody, Input, Textarea, Button, Select, SelectItem, Switch, Progress, RadioGroup, Radio } from "@nextui-org/react";
import { categories, emojiRatings } from '../utils/feedbackUtils';

const FeedbackForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    category: "",
    rating: 0,
    feedback: "",
    improvement: "",
    recommendation: "",
    isAnonymous: false,
    privacyLevel: "",
  });

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleNext = () => setStep(prev => prev + 1);
  const handleBack = () => setStep(prev => prev - 1);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted feedback:", formData);
    // Here you would typically send the data to your backend
    alert("Thank you for your feedback!");
    setStep(1);
    setFormData({
      category: "",
      rating: 0,
      feedback: "",
      improvement: "",
      recommendation: "",
      isAnonymous: false,
      privacyLevel: "",
    });
  };

  const renderStep = () => {
    switch(step) {
      case 1:
        return (
          <Select 
            label="What area would you like to provide feedback on?" 
            placeholder="Select a category"
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
      case 2:
        return (
          <div>
            <p className="mb-2">How would you rate your experience in this area?</p>
            <div className="flex justify-between">
              {emojiRatings.map((item) => (
                <button
                  key={item.value}
                  type="button"
                  onClick={() => handleInputChange("rating", item.value)}
                  className={`text-4xl ${formData.rating === item.value ? 'scale-125' : ''} transition-transform`}
                  title={item.label}
                >
                  {item.emoji}
                </button>
              ))}
            </div>
          </div>
        );
      case 3:
        return (
          <Textarea
            label="Please provide more details about your experience"
            placeholder="What specific aspects influenced your rating?"
            value={formData.feedback}
            onChange={(e) => handleInputChange("feedback", e.target.value)}
          />
        );
      case 4:
        return (
          <Textarea
            label="What improvements would you suggest?"
            placeholder="Your ideas for making things better"
            value={formData.improvement}
            onChange={(e) => handleInputChange("improvement", e.target.value)}
          />
        );
      case 5:
        return (
          <RadioGroup
            label="How likely are you to recommend our company to others?"
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
      case 6:
        return (
          <>
            <div className="flex items-center space-x-2 mb-4">
              <Switch
                checked={formData.isAnonymous}
                onChange={(e) => handleInputChange("isAnonymous", e.target.checked)}
              />
              <span>Submit anonymously</span>
            </div>
            <Select 
              label="Who should see this feedback?" 
              placeholder="Select privacy level"
              value={formData.privacyLevel}
              onChange={(e) => handleInputChange("privacyLevel", e.target.value)}
            >
              <SelectItem key="public" value="public">Entire Company</SelectItem>
              <SelectItem key="team" value="team">My Team Only</SelectItem>
              <SelectItem key="private" value="private">Management Only</SelectItem>
            </Select>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div className="p-8 bg-gray-100 min-h-screen flex justify-center items-center">
      <Card className="w-full max-w-2xl">
        <CardHeader className="flex gap-3">
          <div className="flex flex-col">
            <p className="text-xl font-bold">Submit Feedback</p>
            <p className="text-small text-default-500">Step {step} of 6</p>
          </div>
        </CardHeader>
        <CardBody>
          <Progress value={(step / 6) * 100} className="mb-4" />
          <form onSubmit={handleSubmit} className="space-y-4">
            {renderStep()}
            <div className="flex justify-between mt-4">
              {step > 1 && (
                <Button color="secondary" onClick={handleBack}>
                  Back
                </Button>
              )}
              {step < 6 ? (
                <Button color="primary" onClick={handleNext}>
                  Next
                </Button>
              ) : (
                <Button color="success" type="submit">
                  Submit Feedback
                </Button>
              )}
            </div>
          </form>
        </CardBody>
      </Card>
    </div>
  );
};

export default FeedbackForm;