import { useState } from 'react';
import { Card, CardHeader, CardBody, Button, Progress } from "@nextui-org/react";
import { Send, ChevronLeft, ChevronRight } from 'lucide-react';
import FeedbackSuccessModal from './FeedbackSuccessModal';
import * as Steps from './feedback/FeedbackFormSteps';
import { motion, AnimatePresence } from 'framer-motion';

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

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleNext = () => setStep(prev => prev + 1);
  const handleBack = () => setStep(prev => prev - 1);

  const handleSubmit = (e) => {
    e.preventDefault();
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

  const progressValue = (step / 7) * 100;

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <Card className="w-full bg-white dark:bg-gray-800 shadow-xl">
        <CardHeader className="border-b-2 border-purple-200 dark:border-purple-800 px-6 py-4">
          <div className="flex flex-col">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
              Feedback Submission
            </h1>
            <div className="flex items-center gap-2 mt-2">
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Step {step} of 7: {getStepTitle(step)}
              </p>
              <div className="flex-1 max-w-[200px]">
                <Progress 
                  value={progressValue} 
                  className="h-2"
                  color={progressValue === 100 ? "success" : "primary"}
                />
              </div>
            </div>
          </div>
        </CardHeader>
        <CardBody className="p-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={step}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.2 }}
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                {renderStep()}
                <div className="flex justify-between mt-8">
                  {step > 1 && (
                    <Button 
                      color="secondary" 
                      variant="flat"
                      onClick={handleBack} 
                      startContent={<ChevronLeft size={18} />}
                      className="w-32"
                    >
                      Back
                    </Button>
                  )}
                  {step < 7 ? (
                    <Button 
                      color="primary" 
                      onClick={handleNext} 
                      endContent={<ChevronRight size={18} />}
                      className={`w-32 ${step === 1 ? 'ml-auto' : ''}`}
                    >
                      Next
                    </Button>
                  ) : (
                    <Button 
                      color="success" 
                      onClick={handleSubmit}
                      startContent={<Send size={18} />}
                      className="w-32 ml-auto"
                    >
                      Submit
                    </Button>
                  )}
                </div>
              </form>
            </motion.div>
          </AnimatePresence>
        </CardBody>
      </Card>

      <FeedbackSuccessModal 
        isOpen={showModal} 
        onClose={() => setShowModal(false)} 
      />
    </div>
  );
};

const getStepTitle = (step) => {
  const titles = {
    1: "Basic Information",
    2: "Team Selection",
    3: "Project Details",
    4: "Rating",
    5: "Detailed Feedback",
    6: "Suggestions",
    7: "Privacy Settings"
  };
  return titles[step] || "";
};

export default FeedbackForm;