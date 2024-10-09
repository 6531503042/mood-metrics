import React from 'react';
import { Card, CardHeader, CardBody } from "@nextui-org/react";
import MetricCards from "./dashboard/MetricCards";
import CategoryOverview from "./dashboard/CategoryOverview";
import SentimentOverview from "./dashboard/SentimentOverview";
import EmojiFeedbackDistribution from "./dashboard/EmojiFeedbackDistribution";
import FeedbackTrends from "./dashboard/FeedbackTrends";
import RecentFeedback from "./dashboard/RecentFeedback";
import ResponseTime from "./dashboard/ResponseTime";
import TeamSelector from "./TeamSelector";
import { useFeedbackData } from "../hooks/useFeedbackData";

const FeedbackDashboard = () => {
  const { feedbackData, selectedTeam, setSelectedTeam } = useFeedbackData();

  return (
    <div className="p-4 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-4 text-center">Feedback Dashboard</h1>
      <TeamSelector selectedTeam={selectedTeam} setSelectedTeam={setSelectedTeam} />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
        <MetricCards data={feedbackData} />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <CategoryOverview data={feedbackData.categoryData} />
        <SentimentOverview data={feedbackData.sentimentData} />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <EmojiFeedbackDistribution data={feedbackData.sentimentData} />
        <FeedbackTrends data={feedbackData.trendData} />
      </div>
      <RecentFeedback data={feedbackData.recentFeedback} />
      <ResponseTime averageTime={feedbackData.averageResponseTime} />
    </div>
  );
};

export default FeedbackDashboard;