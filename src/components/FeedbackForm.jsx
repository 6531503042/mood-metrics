import React, { useState } from 'react';
import { Card, CardHeader, CardBody, Input, Textarea, Button, Select, SelectItem, Switch, Progress, Radio, RadioGroup } from "@nextui-org/react";

const categories = [
  { value: "work_environment", label: "Work Environment" },
  { value: "management", label: "Management" },
  { value: "career_growth", label: "Career Growth" },
  { value: "work_life_balance", label: "Work-Life Balance" },
  { value: "team_collaboration", label: "Team Collaboration" },
  { value: "company_culture", label: "Company Culture" },
];

const emojiRatings = [
  { value: 1, emoji: "😞", label: "Very Dissatisfied" },
  { value: 2, emoji: "🙁", label: "Dissatisfied" },
  { value: 3, emoji: "😐", label: "Neutral" },
  { value: 4, emoji: "🙂", label: "Satisfied" },
  { value: 5, emoji: "😄", label: "Very Satisfied" },
];

const FeedbackForm = () => {
  const [step, setStep] = useState(1);
  const [category, setCategory] = useState("");
  const [rating, setRating] = useState(0);
  const [feedback, setFeedback] = useState("");
  const [isAnonymous, setIsAnonymous] = useState(false);
  const [privacyLevel, setPrivacyLevel] = useState("");
  const [improvement, setImprovement] = useState("");
  const [recommendation, setRecommendation] = useState("");

  const handleNext = () => {
    setStep(step + 1);
  };

  const handleBack = () => {
    setStep(step - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log({ category, rating, feedback, isAnonymous, privacyLevel, improvement, recommendation });
    // Reset form after submission
    setStep(1);
    setCategory("");
    setRating(0);
    setFeedback("");
    setIsAnonymous(false);
    setPrivacyLevel("");
    setImprovement("");
    setRecommendation("");
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
            {step === 1 && (
              <Select 
                label="What area would you like to provide feedback on?" 
                placeholder="Select a category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                {categories.map((cat) => (
                  <SelectItem key={cat.value} value={cat.value}>
                    {cat.label}
                  </SelectItem>
                ))}
              </Select>
            )}

            {step === 2 && (
              <div>
                <p className="mb-2">How would you rate your experience in this area?</p>
                <div className="flex justify-between">
                  {emojiRatings.map((item) => (
                    <button
                      key={item.value}
                      type="button"
                      onClick={() => setRating(item.value)}
                      className={`text-4xl ${rating === item.value ? 'scale-125' : ''} transition-transform`}
                      title={item.label}
                    >
                      {item.emoji}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {step === 3 && (
              <Textarea
                label="Please provide more details about your experience"
                placeholder="What specific aspects influenced your rating?"
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
              />
            )}

            {step === 4 && (
              <Textarea
                label="What improvements would you suggest?"
                placeholder="Your ideas for making things better"
                value={improvement}
                onChange={(e) => setImprovement(e.target.value)}
              />
            )}

            {step === 5 && (
              <RadioGroup
                label="How likely are you to recommend our company to others?"
                value={recommendation}
                onChange={setRecommendation}
              >
                <Radio value="1">Not at all likely</Radio>
                <Radio value="2">Somewhat unlikely</Radio>
                <Radio value="3">Neutral</Radio>
                <Radio value="4">Somewhat likely</Radio>
                <Radio value="5">Very likely</Radio>
              </RadioGroup>
            )}

            {step === 6 && (
              <>
                <div className="flex items-center space-x-2">
                  <Switch
                    checked={isAnonymous}
                    onChange={(e) => setIsAnonymous(e.target.checked)}
                  />
                  <span>Submit anonymously</span>
                </div>

                <Select 
                  label="Who should see this feedback?" 
                  placeholder="Select privacy level"
                  value={privacyLevel}
                  onChange={(e) => setPrivacyLevel(e.target.value)}
                >
                  <SelectItem key="public" value="public">Entire Company</SelectItem>
                  <SelectItem key="team" value="team">My Team Only</SelectItem>
                  <SelectItem key="private" value="private">Management Only</SelectItem>
                </Select>
              </>
            )}

            <div className="flex justify-between">
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