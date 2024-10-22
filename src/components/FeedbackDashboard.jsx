import React, { useState } from 'react';
import { Card, CardHeader, CardBody, Container, Grid } from "@nextui-org/react";
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
import FloatingFilterBar from "./FloatingFilterBar";

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
    <div className="min-h-screen bg-gray-50">
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

      <Container lg className="py-8">
        <h1 className="text-4xl font-bold mb-8 text-purple-800">Feedback Dashboard</h1>
        
        <AIAnalystSuggestions suggestions={aiSuggestions} />

        <Grid.Container gap={2} className="mb-8">
          <Grid xs={12}>
            <MetricCards data={feedbackData} />
          </Grid>
        </Grid.Container>

        <Grid.Container gap={2} className="mb-8">
          <Grid xs={12} md={6}>
            <Card className="w-full h-full">
              <CardHeader>
                <h2 className="text-2xl font-semibold text-purple-700">Category Distribution</h2>
              </CardHeader>
              <CardBody>
                <CategoryOverview data={feedbackData.categoryData} />
              </CardBody>
            </Card>
          </Grid>
          <Grid xs={12} md={6}>
            <Card className="w-full h-full">
              <CardHeader>
                <h2 className="text-2xl font-semibold text-purple-700">Sentiment Analysis</h2>
              </CardHeader>
              <CardBody>
                <SentimentOverview data={feedbackData.sentimentData} />
              </CardBody>
            </Card>
          </Grid>
        </Grid.Container>

        <Grid.Container gap={2} className="mb-8">
          <Grid xs={12} md={6}>
            <Card className="w-full h-full">
              <CardHeader>
                <h2 className="text-2xl font-semibold text-purple-700">Emoji Feedback Distribution</h2>
              </CardHeader>
              <CardBody>
                <EmojiFeedbackDistribution data={feedbackData.sentimentData} />
              </CardBody>
            </Card>
          </Grid>
          <Grid xs={12} md={6}>
            <Card className="w-full h-full">
              <CardHeader>
                <h2 className="text-2xl font-semibold text-purple-700">Feedback Trends</h2>
              </CardHeader>
              <CardBody>
                <FeedbackTrends data={feedbackData.trendData} />
              </CardBody>
            </Card>
          </Grid>
        </Grid.Container>

        <Card className="mb-8">
          <CardHeader>
            <h2 className="text-2xl font-semibold text-purple-700">Employee Segmentation</h2>
          </CardHeader>
          <CardBody>
            <EmployeeSegmentation data={feedbackData.employeeSegmentation} />
          </CardBody>
        </Card>

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

        <Grid.Container gap={2}>
          <Grid xs={12} md={4}>
            <Card className="w-full h-full">
              <CardHeader>
                <h2 className="text-xl font-semibold text-purple-700">Available Data Tables</h2>
              </CardHeader>
              <CardBody>
                <AvailableDataTables data={feedbackData.availableDataTables} />
              </CardBody>
            </Card>
          </Grid>
          <Grid xs={12} md={4}>
            <Card className="w-full h-full">
              <CardHeader>
                <h2 className="text-xl font-semibold text-purple-700">Performance Metrics</h2>
              </CardHeader>
              <CardBody>
                <PerformanceMetrics data={feedbackData.performanceMetrics} />
              </CardBody>
            </Card>
          </Grid>
          <Grid xs={12} md={4}>
            <Card className="w-full h-full">
              <CardHeader>
                <h2 className="text-xl font-semibold text-purple-700">Analyses Run</h2>
              </CardHeader>
              <CardBody>
                <AnalysesRun data={feedbackData.analysesRun} />
              </CardBody>
            </Card>
          </Grid>
        </Grid.Container>
      </Container>
    </div>
  );
};

export default FeedbackDashboard;