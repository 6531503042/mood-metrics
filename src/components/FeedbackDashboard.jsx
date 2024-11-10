import React, { useState } from 'react';
import { Card, CardHeader, CardBody } from "@nextui-org/react";
import MetricCards from "./dashboard/MetricCards";
import CombinedSatisfactionView from "./dashboard/CombinedSatisfactionView";
import FeedbackTrends from "./dashboard/FeedbackTrends";
import RecentFeedback from "./dashboard/RecentFeedback";
import AIAnalystSuggestions from "./AIAnalystSuggestions";
import UserSegmentation from "./dashboard/UserSegmentation";
import AreasForImprovement from "./dashboard/AreasForImprovement";
import FloatingFilterBar from "./FloatingFilterBar";
import { useFeedbackData } from "../hooks/useFeedbackData";
import AdvancedAnalytics from "./dashboard/AdvancedAnalytics";

const FeedbackDashboard = () => {
  const { 
    feedbackData, 
    selectedTeam, 
    setSelectedTeam,
    selectedProject,
    setSelectedProject,
    teams,
    projects,
    aiSuggestions,
  } = useFeedbackData();

  const [feedbackFilter, setFeedbackFilter] = useState('all');

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <FloatingFilterBar
        selectedTeam={selectedTeam}
        setSelectedTeam={setSelectedTeam}
        selectedProject={selectedProject}
        setSelectedProject={setSelectedProject}
        feedbackFilter={feedbackFilter}
        setFeedbackFilter={setFeedbackFilter}
        teams={teams}
        projects={projects}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

        <div className="mb-8">
          <AIAnalystSuggestions suggestions={aiSuggestions} />
        </div>

        <div className="mb-8">
          <MetricCards 
            data={feedbackData} 
            selectedTeam={selectedTeam}
            selectedProject={selectedProject}
          />
        </div>

        <div className="mb-8">
          <AdvancedAnalytics />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <UserSegmentation 
            selectedTeam={selectedTeam}
            selectedProject={selectedProject}
          />
          <AreasForImprovement data={feedbackData.areasForImprovement} />
        </div>

        <div className="mb-8">
          <CombinedSatisfactionView data={feedbackData} />
        </div>

        <div className="mb-8">
          <FeedbackTrends data={feedbackData.trendData} />
        </div>
      </div>

      <Card className="mb-8">
          <CardHeader>
            <h2 className="text-2xl font-semibold text-purple-700">Recent Feedback</h2>
          </CardHeader>
          <CardBody>
            <RecentFeedback 
              data={feedbackData.recentFeedback} 
              filter={feedbackFilter} 
              team={selectedTeam} 
              project={selectedProject} 
            />
          </CardBody>
        </Card>
    </div>
  );
};

export default FeedbackDashboard;
