import React, { useState } from 'react';
import { Card, CardHeader, CardBody, Select, SelectItem } from "@nextui-org/react";
import MetricCards from "./dashboard/MetricCards";
import CategoryOverview from "./dashboard/CategoryOverview";
import SentimentOverview from "./dashboard/SentimentOverview";
import EmojiFeedbackDistribution from "./dashboard/EmojiFeedbackDistribution";
import FeedbackTrends from "./dashboard/FeedbackTrends";
import RecentFeedback from "./dashboard/RecentFeedback";
import AIAnalystSuggestions from "./AIAnalystSuggestions";
import AvailableDataTables from "./dashboard/AvailableDataTables";
import PerformanceMetrics from "./dashboard/PerformanceMetrics";
import AnalysesRun from "./dashboard/AnalysesRun";
import { useFeedbackData } from "../hooks/useFeedbackData";

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
    <div className="space-y-6 p-6 bg-gradient-to-r from-purple-50 to-pink-50">
      <h1 className="text-4xl font-bold mb-8 text-purple-800">Feedback Dashboard</h1>
      
      <div className="flex space-x-4 mb-6">
        <Select 
          label="Select Team" 
          placeholder="Choose a team"
          selectedKeys={[selectedTeam]}
          onChange={(e) => setSelectedTeam(e.target.value)}
          className="w-1/3"
        >
          {teams.map((team) => (
            <SelectItem key={team} value={team}>
              {team}
            </SelectItem>
          ))}
        </Select>
        <Select 
          label="Select Project" 
          placeholder="Choose a project"
          selectedKeys={[selectedProject]}
          onChange={(e) => setSelectedProject(e.target.value)}
          className="w-1/3"
        >
          {projects.map((project) => (
            <SelectItem key={project} value={project}>
              {project}
            </SelectItem>
          ))}
        </Select>
        <Select 
          label="Filter Feedback" 
          placeholder="Filter by sentiment"
          selectedKeys={[feedbackFilter]}
          onChange={(e) => setFeedbackFilter(e.target.value)}
          className="w-1/3"
        >
          <SelectItem key="all" value="all">All</SelectItem>
          <SelectItem key="positive" value="positive">Positive</SelectItem>
          <SelectItem key="neutral" value="neutral">Neutral</SelectItem>
          <SelectItem key="negative" value="negative">Negative</SelectItem>
        </Select>
      </div>
      
      <AIAnalystSuggestions suggestions={aiSuggestions} />

      <MetricCards data={feedbackData} />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="bg-white shadow-xl rounded-xl">
          <CardHeader>
            <h2 className="text-2xl font-semibold text-purple-700">Category Distribution</h2>
          </CardHeader>
          <CardBody>
            <CategoryOverview data={feedbackData.categoryData} />
          </CardBody>
        </Card>
        <Card className="bg-white shadow-xl rounded-xl">
          <CardHeader>
            <h2 className="text-2xl font-semibold text-purple-700">Sentiment Analysis</h2>
          </CardHeader>
          <CardBody>
            <SentimentOverview data={feedbackData.sentimentData} />
          </CardBody>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="bg-white shadow-xl rounded-xl">
          <CardHeader>
            <h2 className="text-2xl font-semibold text-purple-700">Emoji Feedback Distribution</h2>
          </CardHeader>
          <CardBody>
            <EmojiFeedbackDistribution data={feedbackData.sentimentData} />
          </CardBody>
        </Card>
        <Card className="bg-white shadow-xl rounded-xl">
          <CardHeader>
            <h2 className="text-2xl font-semibold text-purple-700">Feedback Trends</h2>
          </CardHeader>
          <CardBody>
            <FeedbackTrends data={feedbackData.trendData} />
          </CardBody>
        </Card>
      </div>

      <Card className="bg-white shadow-xl rounded-xl">
        <CardHeader>
          <h2 className="text-2xl font-semibold text-purple-700">Recent Feedback</h2>
        </CardHeader>
        <CardBody>
          <RecentFeedback data={feedbackData.recentFeedback} filter={feedbackFilter} team={selectedTeam} project={selectedProject} />
        </CardBody>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="bg-white shadow-xl rounded-xl">
          <CardHeader>
            <h2 className="text-xl font-semibold text-purple-700">Available Data Tables</h2>
          </CardHeader>
          <CardBody>
            <AvailableDataTables data={feedbackData.availableDataTables} />
          </CardBody>
        </Card>

        <Card className="bg-white shadow-xl rounded-xl">
          <CardHeader>
            <h2 className="text-xl font-semibold text-purple-700">Performance Metrics</h2>
          </CardHeader>
          <CardBody>
            <PerformanceMetrics data={feedbackData.performanceMetrics} />
          </CardBody>
        </Card>

        <Card className="bg-white shadow-xl rounded-xl">
          <CardHeader>
            <h2 className="text-xl font-semibold text-purple-700">Analyses Run</h2>
          </CardHeader>
          <CardBody>
            <AnalysesRun data={feedbackData.analysesRun} />
          </CardBody>
        </Card>
      </div>
    </div>
  );
};

export default FeedbackDashboard;