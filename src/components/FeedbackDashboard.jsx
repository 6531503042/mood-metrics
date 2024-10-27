import React, { useState } from 'react';
import { Card, CardHeader, CardBody, Button } from "@nextui-org/react";
import { Download } from 'lucide-react';
import MetricCards from "./dashboard/MetricCards";
import CategoryOverview from "./dashboard/CategoryOverview";
import SentimentOverview from "./dashboard/SentimentOverview";
import EmojiFeedbackDistribution from "./dashboard/EmojiFeedbackDistribution";
import FeedbackTrends from "./dashboard/FeedbackTrends";
import RecentFeedback from "./dashboard/RecentFeedback";
import AIAnalystSuggestions from "./AIAnalystSuggestions";
import UserSegmentation from "./dashboard/UserSegmentation";
import SatisfactionMeter from "./dashboard/SatisfactionMeter";
import FeedbackAnalytics from "./dashboard/FeedbackAnalytics";
import FloatingFilterBar from "./FloatingFilterBar";
import { useFeedbackData } from "../hooks/useFeedbackData";
import * as XLSX from 'xlsx';

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

  const exportToExcel = () => {
    const ws = XLSX.utils.json_to_sheet(feedbackData.recentFeedback);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Feedback Data");
    XLSX.writeFile(wb, "feedback-report.xlsx");
  };

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
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold text-purple-800 dark:text-purple-400">
            Feedback Dashboard
          </h1>
          <Button
            color="primary"
            startContent={<Download size={16} />}
            onClick={exportToExcel}
          >
            Export Report
          </Button>
        </div>
        
        <AIAnalystSuggestions suggestions={aiSuggestions} />

        <div className="mb-8">
          <MetricCards data={feedbackData} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <UserSegmentation />
          <SatisfactionMeter />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
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

        <div className="mb-8">
          <FeedbackAnalytics data={feedbackData} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <Card className="w-full h-full">
            <CardHeader>
              <h2 className="text-2xl font-semibold">Emoji Feedback Distribution</h2>
            </CardHeader>
            <CardBody>
              <EmojiFeedbackDistribution data={feedbackData.sentimentData} />
            </CardBody>
          </Card>
          <Card className="w-full h-full">
            <CardHeader>
              <h2 className="text-2xl font-semibold">Feedback Trends</h2>
            </CardHeader>
            <CardBody>
              <FeedbackTrends data={feedbackData.trendData} />
            </CardBody>
          </Card>
        </div>

        <Card className="mb-8">
          <CardHeader>
            <h2 className="text-2xl font-semibold">Recent Feedback</h2>
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
    </div>
  );
};

export default FeedbackDashboard;