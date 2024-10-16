import React from 'react';
import { Card, CardHeader, CardBody, Divider } from "@nextui-org/react";
import { Database, Users, BarChart2, Brain, ChevronRight, Lightbulb } from 'lucide-react';
import MetricCards from "./dashboard/MetricCards";
import CategoryOverview from "./dashboard/CategoryOverview";
import SentimentOverview from "./dashboard/SentimentOverview";
import EmojiFeedbackDistribution from "./dashboard/EmojiFeedbackDistribution";
import FeedbackTrends from "./dashboard/FeedbackTrends";
import RecentFeedback from "./dashboard/RecentFeedback";
import ResponseTime from "./dashboard/ResponseTime";
import TeamSelector from "./TeamSelector";
import ProjectSelector from "./ProjectSelector";
import AIAnalyst from "./AIAnalyst";
import DataTables from "./dashboard/DataTables";
import EmployeeSegmentation from "./dashboard/EmployeeSegmentation";
import PerformanceMetrics from "./dashboard/PerformanceMetrics";
import AnalysesRun from "./dashboard/AnalysesRun";
import { useFeedbackData } from "../hooks/useFeedbackData";

const FeedbackDashboard = () => {
  const { 
    feedbackData, 
    selectedTeam, 
    setSelectedTeam, 
    projects, 
    selectedProject, 
    setSelectedProject,
    aiSuggestions,
    dataTables,
    employeeSegments,
    performanceMetrics,
    analysesRun
  } = useFeedbackData();

  return (
    <div className="p-6 bg-gradient-to-br from-blue-50 to-indigo-100 min-h-screen">
      <h1 className="text-4xl font-bold mb-6 text-center text-indigo-800">Feedback Insights</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <TeamSelector selectedTeam={selectedTeam} setSelectedTeam={setSelectedTeam} />
        <ProjectSelector projects={projects} selectedProject={selectedProject} setSelectedProject={setSelectedProject} />
      </div>
      <AIAnalyst suggestions={aiSuggestions} />
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
        <MetricCards data={feedbackData} />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <Card className="shadow-lg">
          <CardHeader className="pb-0 pt-4 px-4 flex items-center">
            <Database className="mr-2" size={20} />
            <h4 className="font-bold text-large">Available Data Tables</h4>
          </CardHeader>
          <CardBody className="overflow-visible py-2">
            <DataTables data={dataTables} />
          </CardBody>
        </Card>
        <Card className="shadow-lg">
          <CardHeader className="pb-0 pt-4 px-4 flex items-center">
            <Users className="mr-2" size={20} />
            <h4 className="font-bold text-large">Employee Segmentation</h4>
          </CardHeader>
          <CardBody className="overflow-visible py-2">
            <EmployeeSegmentation data={employeeSegments} />
          </CardBody>
        </Card>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <Card className="shadow-lg">
          <CardHeader className="pb-0 pt-4 px-4 flex items-center">
            <BarChart2 className="mr-2" size={20} />
            <h4 className="font-bold text-large">Performance Metrics</h4>
          </CardHeader>
          <CardBody className="overflow-visible py-2">
            <PerformanceMetrics data={performanceMetrics} />
          </CardBody>
        </Card>
        <Card className="shadow-lg">
          <CardHeader className="pb-0 pt-4 px-4 flex items-center">
            <Brain className="mr-2" size={20} />
            <h4 className="font-bold text-large">Analyses Run</h4>
          </CardHeader>
          <CardBody className="overflow-visible py-2">
            <AnalysesRun data={analysesRun} />
          </CardBody>
        </Card>
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
