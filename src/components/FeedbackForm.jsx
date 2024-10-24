import React, { useState, useEffect } from 'react';
import { 
  Card, 
  CardHeader, 
  CardBody, 
  Input, 
  Textarea, 
  Button, 
  Select, 
  SelectItem, 
  Switch, 
  Progress, 
  RadioGroup, 
  Radio, 
  Modal 
} from "@nextui-org/react";
import { Smile, Send, ChevronLeft, ChevronRight } from 'lucide-react';
import { categories, emojiRatings, teams } from '../utils/feedbackUtils';

const FeedbackForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    category: "",
    team: "",
    project: "",
    rating: 0,
    feedback: "",
    improvement: "",
    recommendation: "",
    isAnonymous: false,
    privacyLevel: "",
  });
  const [showModal, setShowModal] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Detect dark mode preference
    const darkModePreference = window.matchMedia("(prefers-color-scheme: dark)").matches;
    setIsDarkMode(darkModePreference);

    const handleModeChange = (e) => {
      setIsDarkMode(e.matches);
    };

    // Update theme on change
    window.matchMedia("(prefers-color-scheme: dark)").addListener(handleModeChange);

    return () => {
      window.matchMedia("(prefers-color-scheme: dark)").removeListener(handleModeChange);
    };
  }, []);

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleNext = () => setStep(prev => prev + 1);
  const handleBack = () => setStep(prev => prev - 1);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted feedback:", formData);
    setShowModal(true);
    setStep(1);
    setFormData({
      category: "",
      team: "",
      project: "",
      rating: 0,
      feedback: "",
      improvement: "",
      recommendation: "",
      isAnonymous: false,
      privacyLevel: "",
    });
  };

  const handleEmojiClick = (value) => {
    handleInputChange("rating", value);
  };

  const renderStep = () => {
    switch(step) {
      case 1:
        return (
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
      case 2:
        return (
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
      case 3:
        return (
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
      case 4:
        return (
          <Textarea
            label="Please describe your experience in detail"
            placeholder="What specific aspects influenced your rating?"
            value={formData.feedback}
            onChange={(e) => handleInputChange("feedback", e.target.value)}
          />
        );
      case 5:
        return (
          <Textarea
            label="What improvements would you suggest?"
            placeholder="Your suggestions for enhancing our services"
            value={formData.improvement}
            onChange={(e) => handleInputChange("improvement", e.target.value)}
          />
        );
      case 6:
        return (
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
      case 7:
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
              label="Who should have access to this feedback?" 
              placeholder="Select a privacy level"
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
    <div className={`p-4 ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-black'} min-h-screen`}>
      <Card className={`w-full max-w-2xl mx-auto shadow-lg ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
        <CardHeader className="flex gap-3 border-b-2 border-blue-200">
          <div className="flex flex-col">
            <p className={`text-2xl font-bold ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`}>Feedback Submission</p>
            <p className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-500'}`}>Step {step} of 7</p>
          </div>
        </CardHeader>
        <CardBody>
          <Progress value={(step / 7) * 100} className="mb-4" />
          <form onSubmit={handleSubmit} className="space-y-4">
            {renderStep()}
            <div className="flex justify-between mt-4">
              {step > 1 && (
                <Button 
                  color="secondary" 
                  onClick={handleBack} 
                  startContent={<ChevronLeft size={18} />}
                  className="w-full mr-2"
                >
                  Back
                </Button>
              )}
              {step < 7 ? (
                <Button 
                  color="primary" 
                  onClick={handleNext} 
                  endContent={<ChevronRight size={18} />}
                  className="w-full"
                >
                  Next
                </Button>
              ) : (
                <Button 
                  color="success" 
                  type="submit" 
                  startContent={<Send size={18} />}
                  className="w-full"
                >
                  Submit Feedback
                </Button>
              )}
            </div>
          </form>
        </CardBody>
      </Card>
      
      <Modal open={showModal} onClose={() => setShowModal(false)}>
        <Modal.Header>
          <p className="text-lg font-semibold">Feedback Submitted!</p>
        </Modal.Header>
        <Modal.Body>
          <p>Thank you for your feedback!</p>
        </Modal.Body>
        <Modal.Footer>
          <Button auto onClick={() => setShowModal(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default FeedbackForm;
