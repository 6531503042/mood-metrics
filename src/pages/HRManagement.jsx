import React from 'react';
import { Card, CardHeader, CardBody, Button } from "@nextui-org/react";
import { Download, Users, Star, BarChart2, Brain, Bell } from 'lucide-react';
import AIAnalystSuggestions from '../components/AIAnalystSuggestions';
import ExportButton from '../components/ExportButton';
import { useFeedbackData } from '../hooks/useFeedbackData';

const MetricCard = ({ title, value, icon, subtitle }) => (
  <Card className="bg-white dark:bg-gray-800 hover:scale-105 transition-transform duration-300">
    <CardBody className="flex flex-col items-center p-6">
      <div className="text-4xl text-purple-500 mb-4">{icon}</div>
      <p className="text-sm text-gray-500 text-center">{title}</p>
      <p className="text-2xl font-bold text-center mt-2">{value}</p>
      {subtitle && <p className="text-xs text-gray-500 text-center mt-2">{subtitle}</p>}
    </CardBody>
  </Card>
);

const HRManagement = () => {
  const { feedbackData } = useFeedbackData();

  return (
    <div className="container mx-auto p-6 space-y-6">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-purple-800">HR Management Dashboard</h1>
        <div className="flex gap-4">
          <Button 
            color="primary" 
            variant="flat" 
            startContent={<Bell className="animate-bounce" />}
          >
            Notifications (3)
          </Button>
          <ExportButton data={feedbackData} filename="hr-feedback-report" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <MetricCard 
          title="Total Feedback" 
          value="1,017" 
          icon={<Users size={36} />} 
        />
        <MetricCard 
          title="Average Rating" 
          value="4.5" 
          icon={<Star size={36} />} 
        />
        <MetricCard 
          title="Response Rate" 
          value="85%" 
          icon={<BarChart2 size={36} />} 
        />
        <MetricCard 
          title="Overall Sentiment" 
          value="78%" 
          subtitle="2 pending actions"
          icon={<Brain size={36} />} 
        />
      </div>

      <AIAnalystSuggestions suggestions={feedbackData.aiSuggestions} />
    </div>
  );
};

export default HRManagement;