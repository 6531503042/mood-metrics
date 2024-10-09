import React from 'react';
import { Tabs, Tab } from "@nextui-org/react";
import DashboardLayout from '../components/DashboardLayout';
import FeedbackForm from '../components/FeedbackForm';

const Index = () => {
  return (
    <DashboardLayout>
      <Tabs aria-label="Feedback System" className="p-4">
        <Tab key="dashboard" title="Dashboard">
          <DashboardLayout />
        </Tab>
        <Tab key="submit" title="Submit Feedback">
          <FeedbackForm />
        </Tab>
      </Tabs>
    </DashboardLayout>
  );
};

export default Index;