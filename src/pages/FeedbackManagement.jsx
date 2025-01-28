import { useState } from 'react';
import { Tabs, Tab, Card } from "@nextui-org/react";
import FeedbackForm from '../components/FeedbackForm';
import FeedbackDashboard from '../components/FeedbackDashboard';
import FeedbackList from '../components/feedback/FeedbackList';
import FormEditor from '../components/feedback/FormEditor';

const FeedbackManagement = () => {
  const [activeTab, setActiveTab] = useState('dashboard');

  return (
    <div className="container mx-auto p-4 space-y-6">
      <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
        Feedback Management System
      </h1>
      
      <Card className="bg-white dark:bg-gray-800 shadow-xl rounded-xl overflow-hidden">
        <Tabs 
          selectedKey={activeTab} 
          onSelectionChange={setActiveTab}
          className="p-4"
          variant="underlined"
          aria-label="Feedback Management Tabs"
        >
          <Tab 
            key="dashboard" 
            title="Dashboard"
            className="p-4"
          >
            <FeedbackDashboard />
          </Tab>
          <Tab 
            key="feedback-list" 
            title="Feedback List"
            className="p-4"
          >
            <FeedbackList />
          </Tab>
          <Tab 
            key="submit-feedback" 
            title="Submit Feedback"
            className="p-4"
          >
            <div className="max-w-4xl mx-auto">
              <p className="text-gray-600 dark:text-gray-300 text-center mb-8">
                Submit new feedback to help us improve.
              </p>
              <FeedbackForm />
            </div>
          </Tab>
          <Tab 
            key="form-editor" 
            title="Form Editor"
            className="p-4"
          >
            <FormEditor />
          </Tab>
        </Tabs>
      </Card>
    </div>
  );
};

export default FeedbackManagement;