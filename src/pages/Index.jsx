import React from 'react';
import { Tabs, Tab } from "@nextui-org/react";
import FeedbackDashboard from '../components/FeedbackDashboard';
import FeedbackForm from '../components/FeedbackForm';
import DashboardLayout from '../components/DashboardLayout';

const Index = () => {
  return (
    <DashboardLayout>
      <Tabs aria-label="Feedback System" className="p-4">
        <Tab key="dashboard" title="Dashboard">
          <FeedbackDashboard />
        </Tab>
        <Tab key="submit" title="Submit Feedback">
          <FeedbackForm />
        </Tab>
      </Tabs>
    </DashboardLayout>
  );
};

export default Index;