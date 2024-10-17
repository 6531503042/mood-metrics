import React from 'react';
import { Card, CardHeader, CardBody } from "@nextui-org/react";
import { Database, Users, BarChart2, Brain } from 'lucide-react';
import MetricCards from "./dashboard/MetricCards";
import CategoryOverview from "./dashboard/CategoryOverview";
import SentimentOverview from "./dashboard/SentimentOverview";
import EmojiFeedbackDistribution from "./dashboard/EmojiFeedbackDistribution";
import FeedbackTrends from "./dashboard/FeedbackTrends";
import RecentFeedback from "./dashboard/RecentFeedback";
import ResponseTime from "./dashboard/ResponseTime";
import TeamSelector from "./TeamSelector";
import ProjectSelector from "./ProjectSelector";
import RoleSelector from "./RoleSelector";
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
    roles,
    selectedRole,
    setSelectedRole,
    aiSuggestions,
    dataTables,
    employeeSegments,
    performanceMetrics,
    analysesRun
  } = useFeedbackData();

  return (
    <div className="p-8 bg-gradient-to-br from-blue-50 to-indigo-100 min-h-screen">
      <h1 className="text-5xl font-bold mb-8 text-center text-indigo-800">SEEZ's Feedback System</h1>
      
      {/* Selector Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <TeamSelector selectedTeam={selectedTeam} setSelectedTeam={setSelectedTeam} />
        <ProjectSelector projects={projects} selectedProject={selectedProject} setSelectedProject={setSelectedProject} />
        <RoleSelector roles={roles} selectedRole={selectedRole} setSelectedRole={setSelectedRole} />
      </div>
      
      {/* AI Suggestions */}
      <AIAnalyst suggestions={aiSuggestions} />

       {/* Centered grid with full-width MetricCards */}
<div className="grid grid-cols-1 gap-12 mb-8 justify-items-center"> {/* Center the grid items and increase spacing */}
  <div className="w-full max-w-6xl"> {/* Set max width for the container */}
    <MetricCards data={feedbackData} />
  </div>
</div>


      {/* Data Tables and Employee Segmentation */}
<div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8"> {/* Changed to lg:grid-cols-2 */}
  {/* Data Tables */}
  <Card className="shadow-lg transition-transform transform hover:scale-105 duration-300 w-full"> {/* Added w-full */}
    <CardHeader className="pb-0 pt-4 px-4 flex-col items-start">
      <h4 className="font-bold text-lg flex items-center">
        <Database className="mr-2" /> Available Data Tables
      </h4>
    </CardHeader>
    <CardBody className="overflow-visible py-2">
      <DataTables data={dataTables} />
    </CardBody>
  </Card>

  {/* Employee Segmentation */}
  <Card className="shadow-lg transition-transform transform hover:scale-105 duration-300 w-full"> {/* Added w-full */}
    <CardHeader className="pb-0 pt-4 px-4 flex-col items-start">
      <h4 className="font-bold text-lg flex items-center">
        <Users className="mr-2" /> Employee Segmentation
      </h4>
    </CardHeader>
    <CardBody className="overflow-visible py-2">
      <EmployeeSegmentation data={employeeSegments} />
    </CardBody>
  </Card>
</div>


      {/* Performance Metrics and Analyses Run */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <Card className="shadow-lg transition-transform transform hover:scale-105 duration-300">
          <CardHeader className="pb-0 pt-4 px-4 flex-col items-start">
            <h4 className="font-bold text-lg flex items-center">
              <BarChart2 className="mr-2" /> Performance Metrics
            </h4>
          </CardHeader>
          <CardBody className="overflow-visible py-2">
            <PerformanceMetrics data={performanceMetrics} />
          </CardBody>
        </Card>
        <Card className="shadow-lg transition-transform transform hover:scale-105 duration-300">
          <CardHeader className="pb-0 pt-4 px-4 flex-col items-start">
            <h4 className="font-bold text-lg flex items-center">
              <Brain className="mr-2" /> Analyses Run
            </h4>
          </CardHeader>
          <CardBody className="overflow-visible py-2">
            <AnalysesRun data={analysesRun} />
          </CardBody>
        </Card>
      </div>

      {/* Category and Sentiment Overview */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <Card className="shadow-lg transition-transform transform hover:scale-105 duration-300">
          <CardHeader className="pb-0 pt-4 px-4 flex-col items-start">
            <h4 className="font-bold text-lg">Category Distribution</h4>
          </CardHeader>
          <CardBody className="overflow-visible py-2">
            <CategoryOverview data={feedbackData.categoryData} />
          </CardBody>
        </Card>
        <Card className="shadow-lg transition-transform transform hover:scale-105 duration-300">
          <CardHeader className="pb-0 pt-4 px-4 flex-col items-start">
            <h4 className="font-bold text-lg">Sentiment Analysis</h4>
          </CardHeader>
          <CardBody className="overflow-visible py-2">
            <SentimentOverview data={feedbackData.sentimentData} />
          </CardBody>
        </Card>
      </div>

      {/* Emoji Feedback Distribution and Feedback Trends */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <Card className="shadow-lg transition-transform transform hover:scale-105 duration-300">
          <CardHeader className="pb-0 pt-4 px-4 flex-col items-start">
            <h4 className="font-bold text-lg">Emoji Feedback Distribution</h4>
          </CardHeader>
          <CardBody className="overflow-visible py-2">
            <EmojiFeedbackDistribution data={feedbackData.sentimentData} />
          </CardBody>
        </Card>
        <Card className="shadow-lg transition-transform transform hover:scale-105 duration-300">
          <CardHeader className="pb-0 pt-4 px-4 flex-col items-start">
            <h4 className="font-bold text-lg">Feedback Trends</h4>
          </CardHeader>
          <CardBody className="overflow-visible py-2">
            <FeedbackTrends data={feedbackData.trendData} />
          </CardBody>
        </Card>
      </div>

      {/* Recent Feedback Card */}
      <div className="grid grid-cols-1 gap-6 mb-8">
        <Card className="shadow-lg transition-transform transform hover:scale-105 duration-300">
          <CardHeader className="pb-0 pt-4 px-4 flex-col items-start">
            <h4 className="font-bold text-lg">Recent Feedback</h4>
          </CardHeader>
          <CardBody className="overflow-visible py-2">
            <RecentFeedback data={feedbackData.recentFeedback} />
          </CardBody>
        </Card>
      </div>

      {/* Response Time */}
      <div className="mt-6">
        <ResponseTime averageTime={feedbackData.averageResponseTime} />
      </div>
    </div>
  );
};

export default FeedbackDashboard;
