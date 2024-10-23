import React from 'react';
import { Card, CardHeader, CardBody } from "@nextui-org/react";
import SentimentOverview from '../components/dashboard/SentimentOverview';
import EmojiFeedbackDistribution from '../components/dashboard/EmojiFeedbackDistribution';
import { useFeedbackData } from '../hooks/useFeedbackData';

const SentimentAnalysis = () => {
  const { feedbackData } = useFeedbackData();

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Sentiment Analysis</h1>
      <div className="grid gap-6">
        <Card>
          <CardHeader>
            <h2 className="text-2xl font-semibold">Sentiment Overview</h2>
          </CardHeader>
          <CardBody>
            <SentimentOverview data={feedbackData.sentimentData} />
          </CardBody>
        </Card>
        <Card>
          <CardHeader>
            <h2 className="text-2xl font-semibold">Emoji Feedback Distribution</h2>
          </CardHeader>
          <CardBody>
            <EmojiFeedbackDistribution data={feedbackData.sentimentData} />
          </CardBody>
        </Card>
      </div>
    </div>
  );
};

export default SentimentAnalysis;