import { useState } from 'react';
import { Card, CardHeader, CardBody, Button, Progress } from "@nextui-org/react";
import { Send, ChevronLeft, ChevronRight } from 'lucide-react';
import FeedbackSuccessModal from './FeedbackSuccessModal';
// import IncentiveCard from './feedback/IncentiveCard';
import * as Steps from './feedback/FeedbackFormSteps';
// import RewardsStore from './feedback/RewardsStore';

const FeedbackForm = () => {
  const [step, setStep] = useState(1);
  // const [showStore, setShowStore] = useState(false);
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
  // const [credits, setCredits] = useState(50);

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleNext = () => setStep(prev => prev + 1);
  const handleBack = () => setStep(prev => prev - 1);

  const handleSubmit = (e) => {
    e.preventDefault();
    // setCredits(prev => prev + 10);
    setShowModal(true);
    setTimeout(() => {
      setStep(1);
      setFormData({
        category: "",
        team: "",
        project: "",
        rating: 0,
        feedback: "",
        improvement: "",
        recommendation: "",
        isAnonymous: true,
        privacyLevel: "",
      });
    }, 2000);
  };

  const handleEmojiClick = (value) => {
    handleInputChange("rating", value);
  };

  const renderStep = () => {
    const props = { formData, handleInputChange, handleEmojiClick };
    switch(step) {
      case 1: return <Steps.Step1 {...props} />;
      case 2: return <Steps.Step2 {...props} />;
      case 3: return <Steps.Step3 {...props} />;
      case 4: return <Steps.Step4 {...props} />;
      case 5: return <Steps.Step5 {...props} />;
      case 6: return <Steps.Step6 {...props} />;
      case 7: return <Steps.Step7 {...props} />;
      default: return null;
    }
  };

  return (
    <div className="space-y-6">
      {/* <IncentiveCard 
        credits={credits}
        onRedeem={() => setShowStore(true)}
      /> */}

      <Card className="w-full">
        <CardHeader className="border-b-2 border-purple-200 dark:border-purple-800">
          <div className="flex flex-col">
            <p className="text-2xl font-bold text-purple-600 dark:text-purple-400">
              Feedback Submission
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Step {step} of 7
            </p>
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
                  onClick={handleSubmit}
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

      <FeedbackSuccessModal 
        isOpen={showModal} 
        onClose={() => setShowModal(false)} 
      />

      {/* <RewardsStore 
        isOpen={showStore}
        onClose={() => setShowStore(false)}
        credits={credits}
        onRedeem={(cost) => setCredits(prev => prev - cost)}
      /> */}
    </div>
  );
};

export default FeedbackForm;