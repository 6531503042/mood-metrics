import React from 'react';
import FeedbackDashboard from '../components/FeedbackDashboard';
import FeedbackForm from '../components/FeedbackForm';
import { Tabs, Tab } from "@nextui-org/react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Tabs aria-label="Feedback System" className="p-4">
        <Tab key="dashboard" title="Dashboard">
          <FeedbackDashboard />
        </Tab>
        <Tab key="submit" title="Submit Feedback">
          <FeedbackForm />
        </Tab>
      </Tabs>
    </div>
  );
};

export default Index;