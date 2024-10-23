import React from 'react';
import { Card, CardHeader, CardBody } from "@nextui-org/react";
import AnalysesRun from '../components/dashboard/AnalysesRun';
import { useFeedbackData } from '../hooks/useFeedbackData';

const ActionItems = () => {
  const { feedbackData } = useFeedbackData();

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Action Items</h1>
      <Card>
        <CardHeader>
          <h2 className="text-2xl font-semibold">Recent Analyses</h2>
        </CardHeader>
        <CardBody>
          <AnalysesRun data={feedbackData.analysesRun} />
        </CardBody>
      </Card>
    </div>
  );
};

export default ActionItems;