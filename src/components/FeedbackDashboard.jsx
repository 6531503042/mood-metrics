import React from 'react';
import { Card, CardHeader, CardBody, Divider } from "@nextui-org/react";
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
    <div className="p-6 bg-gradient-to-br from-blue-50 to-indigo-100 min-h-screen">
      <h1 className="text-4xl font-bold mb-6 text-center text-indigo-800">Feedback Insights</h1>
      <TeamSelector selectedTeam={selectedTeam} setSelectedTeam={setSelectedTeam} />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <MetricCards data={feedbackData} />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <Card className="shadow-lg">
          <CardHeader className="pb-0 pt-4 px-4 flex-col items-start">
            <h4 className="font-bold text-large">Category Distribution</h4>
          </CardHeader>
          <CardBody className="overflow-visible py-2">
            <CategoryOverview data={feedbackData.categoryData} />
          </CardBody>
        </Card>
        <Card className="shadow-lg">
          <CardHeader className="pb-0 pt-4 px-4 flex-col items-start">
            <h4 className="font-bold text-large">Sentiment Analysis</h4>
          </CardHeader>
          <CardBody className="overflow-visible py-2">
            <SentimentOverview data={feedbackData.sentimentData} />
          </CardBody>
        </Card>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <Card className="shadow-lg">
          <CardHeader className="pb-0 pt-4 px-4 flex-col items-start">
            <h4 className="font-bold text-large">Emoji Feedback Distribution</h4>
          </CardHeader>
          <CardBody className="overflow-visible py-2">
            <EmojiFeedbackDistribution data={feedbackData.sentimentData} />
          </CardBody>
        </Card>
        <Card className="shadow-lg">
          <CardHeader className="pb-0 pt-4 px-4 flex-col items-start">
            <h4 className="font-bold text-large">Feedback Trends</h4>
          </CardHeader>
          <CardBody className="overflow-visible py-2">
            <FeedbackTrends data={feedbackData.trendData} />
          </CardBody>
        </Card>
      </div>
      <div className="grid grid-cols-1 gap-6">
        <Card className="shadow-lg">
          <CardHeader className="pb-0 pt-4 px-4 flex-col items-start">
            <h4 className="font-bold text-large">Recent Feedback</h4>
          </CardHeader>
          <CardBody className="overflow-visible py-2">
            <RecentFeedback data={feedbackData.recentFeedback} />
          </CardBody>
        </Card>
      </div>
      <div className="mt-6">
        <ResponseTime averageTime={feedbackData.averageResponseTime} />
      </div>
    </div>
  );
};

export default FeedbackDashboard;