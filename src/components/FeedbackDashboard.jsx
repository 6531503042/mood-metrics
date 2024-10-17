import React from 'react';
import { Card, CardHeader, CardBody, Select, SelectItem } from "@nextui-org/react";
import MetricCards from "./dashboard/MetricCards";
import CategoryOverview from "./dashboard/CategoryOverview";
import SentimentOverview from "./dashboard/SentimentOverview";
import EmojiFeedbackDistribution from "./dashboard/EmojiFeedbackDistribution";
import FeedbackTrends from "./dashboard/FeedbackTrends";
import RecentFeedback from "./dashboard/RecentFeedback";
import ResponseTime from "./dashboard/ResponseTime";
import AIAnalystSuggestions from "./AIAnalystSuggestions";
import { useFeedbackData } from "../hooks/useFeedbackData";

const FeedbackDashboard = () => {
  const { 
    feedbackData, 
    selectedTeam, 
    setSelectedTeam,
    teams,
    aiSuggestions,
  } = useFeedbackData();

  return (
    <div className="space-y-6">
      <h1 className="text-4xl font-bold mb-8">Feedback Dashboard</h1>
      
      <div className="flex space-x-4 mb-6">
        <Select 
          label="Select Team" 
          placeholder="Choose a team"
          selectedKeys={[selectedTeam]}
          onChange={(e) => setSelectedTeam(e.target.value)}
        >
          {teams.map((team) => (
            <SelectItem key={team} value={team}>
              {team}
            </SelectItem>
          ))}
        </Select>
      </div>
      
      <AIAnalystSuggestions suggestions={aiSuggestions} />

      <MetricCards data={feedbackData} />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <h2 className="text-2xl font-semibold">Category Distribution</h2>
          </CardHeader>
          <CardBody>
            <CategoryOverview data={feedbackData.categoryData} />
          </CardBody>
        </Card>
        <Card>
          <CardHeader>
            <h2 className="text-2xl font-semibold">Sentiment Analysis</h2>
          </CardHeader>
          <CardBody>
            <SentimentOverview data={feedbackData.sentimentData} />
          </CardBody>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <h2 className="text-2xl font-semibold">Emoji Feedback Distribution</h2>
          </CardHeader>
          <CardBody>
            <EmojiFeedbackDistribution data={feedbackData.sentimentData} />
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

      <Card>
        <CardHeader>
          <h2 className="text-2xl font-semibold">Recent Feedback</h2>
        </CardHeader>
        <CardBody>
          <RecentFeedback data={feedbackData.recentFeedback} />
        </CardBody>
      </Card>

      <ResponseTime averageTime={feedbackData.averageResponseTime} />
    </div>
  );
};

export default FeedbackDashboard;