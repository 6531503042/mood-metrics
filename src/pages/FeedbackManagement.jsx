import { useState } from 'react';
import { Card, CardBody, Button, Chip } from "@nextui-org/react";
import FeedbackList from '../components/feedback/FeedbackList';
import FormEditor from '../components/feedback/FormEditor';
import { Check, X } from 'lucide-react';

const FeedbackManagement = () => {
  const [selectedFeedback, setSelectedFeedback] = useState(null);

  return (
    <div className="container mx-auto p-4 space-y-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
          Feedback Management
        </h1>
        <Button
          color="primary"
          variant="flat"
          onClick={() => setSelectedFeedback(null)}
        >
          View All Feedback
        </Button>
      </div>
      
      <Card className="bg-white dark:bg-gray-800 shadow-xl rounded-xl overflow-hidden">
        <CardBody className="p-0">
          {selectedFeedback ? (
            <div className="p-6 space-y-4">
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-semibold">Feedback Details</h2>
                <div className="flex gap-2">
                  <Button 
                    color="success" 
                    variant="flat"
                    startContent={<Check size={18} />}
                  >
                    Approve
                  </Button>
                  <Button 
                    color="danger" 
                    variant="flat"
                    startContent={<X size={18} />}
                  >
                    Reject
                  </Button>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <p className="text-sm text-gray-500">Team</p>
                  <p>{selectedFeedback.team}</p>
                </div>
                <div className="space-y-2">
                  <p className="text-sm text-gray-500">Project</p>
                  <p>{selectedFeedback.project}</p>
                </div>
                <div className="space-y-2">
                  <p className="text-sm text-gray-500">Sentiment</p>
                  <Chip 
                    color={selectedFeedback.sentiment === 'positive' ? 'success' : 
                           selectedFeedback.sentiment === 'negative' ? 'danger' : 'warning'}
                  >
                    {selectedFeedback.sentiment}
                  </Chip>
                </div>
                <div className="space-y-2">
                  <p className="text-sm text-gray-500">Date</p>
                  <p>{new Date(selectedFeedback.date).toLocaleDateString()}</p>
                </div>
              </div>

              <div className="space-y-2">
                <p className="text-sm text-gray-500">Feedback</p>
                <p className="text-gray-700 dark:text-gray-300">{selectedFeedback.text}</p>
              </div>

              <div className="space-y-2">
                <p className="text-sm text-gray-500">AI Analysis</p>
                <Card className="bg-purple-50 dark:bg-purple-900/20">
                  <CardBody>
                    <p className="text-sm">{selectedFeedback.aiAnalysis}</p>
                  </CardBody>
                </Card>
              </div>
            </div>
          ) : (
            <div className="divide-y dark:divide-gray-700">
              <div className="p-6">
                <FeedbackList onSelectFeedback={setSelectedFeedback} />
              </div>
              <div className="p-6">
                <FormEditor />
              </div>
            </div>
          )}
        </CardBody>
      </Card>
    </div>
  );
};

export default FeedbackManagement;