import React from 'react';
import { Card, CardHeader, CardBody } from "@nextui-org/react";
import PerformanceMetricsComponent from '../components/dashboard/PerformanceMetrics';
import FeedbackTrends from '../components/dashboard/FeedbackTrends';
import { useFeedbackData } from '../hooks/useFeedbackData';

const PerformanceMetrics = () => {
  const { feedbackData } = useFeedbackData();

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Performance Metrics</h1>
      <div className="grid gap-6">
        <Card>
          <CardHeader>
            <h2 className="text-2xl font-semibold">Performance Overview</h2>
          </CardHeader>
          <CardBody>
            <PerformanceMetricsComponent data={feedbackData.performanceMetrics} />
          </CardBody>
        </Card>
        <Card>
          <CardHeader>
            <h2 className="text-2xl font-semibold">Feedback Trends</h2>
          </CardHeader>
          <CardBody>
            <FeedbackTrends data={feedbackData.trendData} />
          </CardBody>
        </Card>
      </div>
    </div>
  );
};

export default PerformanceMetrics;