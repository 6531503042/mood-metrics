import { useState } from 'react';
import { Card, CardHeader, CardBody } from "@nextui-org/react";
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
import EmployeeSegmentation from "./dashboard/EmployeeSegmentation";
import { useFeedbackData } from "../hooks/useFeedbackData";
import SelectFilter from "./SelectFilter";

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
    <div className="space-y-8 p-8 bg-gradient-to-r from-purple-50 to-pink-50">
      <h1 className="text-4xl font-bold mb-8 text-purple-800">Feedback Dashboard</h1>
      
      {/* Sticky Select Options */}
      <div className="sticky top-0 z-10 bg-white p-4 rounded-lg shadow-md mb-8">
        <SelectFilter 
          selectedTeam={selectedTeam}
          setSelectedTeam={setSelectedTeam}
          selectedProject={selectedProject}
          setSelectedProject={setSelectedProject}
          feedbackFilter={feedbackFilter}
          setFeedbackFilter={setFeedbackFilter}
          teams={teams}
          projects={projects}
        />
      </div>

      {/* AI Suggestions */}
      <AIAnalystSuggestions suggestions={aiSuggestions} />

      {/* Metric Cards */}
      <MetricCards data={feedbackData} />

      {/* Category Distribution and Sentiment Analysis */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card className="bg-white shadow-xl rounded-lg">
          <CardHeader className="flex justify-between items-center">
            <h2 className="text-2xl font-semibold text-purple-700">Category Distribution</h2>
            <SelectFilter 
              selectedTeam={selectedTeam}
              setSelectedTeam={setSelectedTeam}
              selectedProject={selectedProject}
              setSelectedProject={setSelectedProject}
              compact={true}
            />
          </CardHeader>
          <CardBody>
            <CategoryOverview data={feedbackData.categoryData} />
          </CardBody>
        </Card>

        <Card className="bg-white shadow-xl rounded-lg">
          <CardHeader className="flex justify-between items-center">
            <h2 className="text-2xl font-semibold text-purple-700">Sentiment Analysis</h2>
            <SelectFilter 
              selectedTeam={selectedTeam}
              setSelectedTeam={setSelectedTeam}
              selectedProject={selectedProject}
              setSelectedProject={setSelectedProject}
              compact={true}
            />
          </CardHeader>
          <CardBody>
            <SentimentOverview data={feedbackData.sentimentData} />
          </CardBody>
        </Card>
      </div>

      {/* Emoji Feedback and Feedback Trends */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card className="bg-white shadow-xl rounded-lg">
          <CardHeader>
            <h2 className="text-2xl font-semibold text-purple-700">Emoji Feedback Distribution</h2>
          </CardHeader>
          <CardBody>
            <EmojiFeedbackDistribution data={feedbackData.sentimentData} />
          </CardBody>
        </Card>

        <Card className="bg-white shadow-xl rounded-lg">
          <CardHeader className="flex justify-between items-center">
            <h2 className="text-2xl font-semibold text-purple-700">Feedback Trends</h2>
            <SelectFilter 
              selectedTeam={selectedTeam}
              setSelectedTeam={setSelectedTeam}
              selectedProject={selectedProject}
              setSelectedProject={setSelectedProject}
              compact={true}
            />
          </CardHeader>
          <CardBody>
            <FeedbackTrends data={feedbackData.trendData} />
          </CardBody>
        </Card>
      </div>

      {/* Employee Segmentation */}
      <Card className="bg-white shadow-xl rounded-lg">
        <CardHeader className="flex justify-between items-center">
          <h2 className="text-2xl font-semibold text-purple-700">Employee Segmentation</h2>
          <SelectFilter 
            selectedTeam={selectedTeam}
            setSelectedTeam={setSelectedTeam}
            selectedProject={selectedProject}
            setSelectedProject={setSelectedProject}
            compact={true}
          />
        </CardHeader>
        <CardBody>
          <EmployeeSegmentation data={feedbackData.employeeSegmentation} />
        </CardBody>
      </Card>

      {/* Recent Feedback */}
      <Card className="bg-white shadow-xl rounded-lg">
        <CardHeader className="flex justify-between items-center">
          <h2 className="text-2xl font-semibold text-purple-700">Recent Feedback</h2>
          <SelectFilter 
            selectedTeam={selectedTeam}
            setSelectedTeam={setSelectedTeam}
            selectedProject={selectedProject}
            setSelectedProject={setSelectedProject}
            feedbackFilter={feedbackFilter}
            setFeedbackFilter={setFeedbackFilter}
            compact={true}
          />
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

      {/* Available Data Tables, Performance Metrics, and Analyses Run */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <Card className="bg-white shadow-xl rounded-lg">
          <CardHeader>
            <h2 className="text-xl font-semibold text-purple-700">Available Data Tables</h2>
          </CardHeader>
          <CardBody>
            <AvailableDataTables data={feedbackData.availableDataTables} />
          </CardBody>
        </Card>

        <Card className="bg-white shadow-xl rounded-lg">
          <CardHeader>
            <h2 className="text-xl font-semibold text-purple-700">Performance Metrics</h2>
          </CardHeader>
          <CardBody>
            <PerformanceMetrics data={feedbackData.performanceMetrics} />
          </CardBody>
        </Card>

        <Card className="bg-white shadow-xl rounded-lg">
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