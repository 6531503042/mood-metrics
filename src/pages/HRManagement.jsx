import React from 'react';
import { Card, CardHeader, CardBody, Button, Table, TableHeader, TableBody, TableColumn, TableRow, TableCell } from "@nextui-org/react";
import { Download, Users, Star, BarChart2, Brain, Bell, FileText, Filter } from 'lucide-react';
import AIAnalystSuggestions from '../components/AIAnalystSuggestions';
import ExportButton from '../components/ExportButton';
import { useFeedbackData } from '../hooks/useFeedbackData';
import { motion } from 'framer-motion';

const MetricCard = ({ title, value, icon, subtitle }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.3 }}
  >
    <Card className="bg-white dark:bg-gray-800 hover:scale-105 transition-transform duration-300">
      <CardBody className="flex flex-col items-center p-6">
        <div className="text-4xl text-blue-500 dark:text-blue-400 mb-4">{icon}</div>
        <p className="text-sm text-gray-600 dark:text-gray-300 text-center">{title}</p>
        <p className="text-2xl font-bold text-center mt-2 text-gray-800 dark:text-gray-100">{value}</p>
        {subtitle && <p className="text-xs text-gray-500 dark:text-gray-400 text-center mt-2">{subtitle}</p>}
      </CardBody>
    </Card>
  </motion.div>
);

const HRManagement = () => {
  const { feedbackData } = useFeedbackData();

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto p-6 space-y-6"
    >
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-100">HR Management Dashboard</h1>
          <p className="text-gray-600 dark:text-gray-300 mt-2">Monitor and manage employee feedback and engagement</p>
        </div>
        <div className="flex flex-wrap gap-4">
          <Button 
            color="primary" 
            variant="flat" 
            startContent={<Bell className="animate-pulse" />}
            className="bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300"
          >
            Notifications (3)
          </Button>
          <Button
            color="secondary"
            variant="flat"
            startContent={<Filter />}
            className="bg-gray-100 dark:bg-gray-800"
          >
            Filter Data
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

      <Card className="mt-8">
        <CardHeader className="flex justify-between items-center">
          <h2 className="text-xl font-semibold">Recent Feedback</h2>
          <Button
            color="primary"
            variant="flat"
            startContent={<FileText size={18} />}
            className="bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300"
          >
            Generate Report
          </Button>
        </CardHeader>
        <CardBody>
          <Table aria-label="Recent feedback">
            <TableHeader>
              <TableColumn>EMPLOYEE</TableColumn>
              <TableColumn>PROJECT</TableColumn>
              <TableColumn>SENTIMENT</TableColumn>
              <TableColumn>DATE</TableColumn>
              <TableColumn>PRIORITY</TableColumn>
            </TableHeader>
            <TableBody>
              {feedbackData.recentFeedback?.slice(0, 5).map((feedback, index) => (
                <TableRow key={index}>
                  <TableCell>{feedback.employee}</TableCell>
                  <TableCell>{feedback.project}</TableCell>
                  <TableCell>
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      feedback.sentiment === 'positive' ? 'bg-green-100 text-green-800' :
                      feedback.sentiment === 'negative' ? 'bg-red-100 text-red-800' :
                      'bg-yellow-100 text-yellow-800'
                    }`}>
                      {feedback.sentiment}
                    </span>
                  </TableCell>
                  <TableCell>{feedback.date}</TableCell>
                  <TableCell>
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      feedback.priority === 'high' ? 'bg-red-100 text-red-800' :
                      feedback.priority === 'medium' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-green-100 text-green-800'
                    }`}>
                      {feedback.priority}
                    </span>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardBody>
      </Card>
    </motion.div>
  );
};

export default HRManagement;