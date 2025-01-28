import FeedbackForm from '../components/FeedbackForm';
import { Card } from "@nextui-org/react";

const FeedbackManagement = () => {
  return (
    <div className="container mx-auto p-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-center text-purple-800 dark:text-purple-400">
          Share Your Feedback
        </h1>
        <Card className="bg-white dark:bg-gray-800 shadow-xl rounded-xl overflow-hidden">
          <div className="p-6">
            <p className="text-gray-600 dark:text-gray-300 text-center mb-8">
              Your feedback helps us improve and create a better workplace for everyone.
            </p>
            <FeedbackForm />
          </div>
        </Card>
      </div>
    </div>
  );
};

export default FeedbackManagement;