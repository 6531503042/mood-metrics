import { Card, CardBody, Select, SelectItem } from "@nextui-org/react";
import { MessageSquare, Star, BarChart2, Brain } from 'lucide-react';
import ExportButton from '../ExportButton';
import { motion } from "framer-motion";

const MetricCard = ({ title, value, icon, subtitle, className }) => (
  <motion.div
    whileHover={{ scale: 1.02 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    <Card className={`bg-white dark:bg-gray-800 shadow-md hover:shadow-xl transition-shadow duration-300 ${className}`}>
      <CardBody className="flex flex-col items-center justify-center p-4">
        <div className="text-4xl text-indigo-500 dark:text-indigo-400 mb-4">{icon}</div>
        <p className="text-sm text-gray-500 dark:text-gray-400 text-center">{title}</p>
        <p className="text-2xl font-bold text-center dark:text-white">{value}</p>
        {subtitle && (
          <p className="text-xs text-gray-500 dark:text-gray-400 text-center mt-2">{subtitle}</p>
        )}
      </CardBody>
    </Card>
  </motion.div>
);

const MetricCards = ({ data = {}, selectedTeam, selectedProject, selectedDepartment }) => {
  // Filter metrics based on selections
  const filteredMetrics = {
    totalFeedback: data?.totalFeedback || 609,
    averageRating: typeof data?.averageRating === 'number' ? data.averageRating : 4.2,
    responseRate: typeof data?.responseRate === 'number' ? data.responseRate : 87.5,
    overallSentiment: typeof data?.overallSentiment === 'number' ? data.overallSentiment : 92.3,
    pendingActions: data?.pendingActions || 5
  };

  return (
    <div className="relative">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <MetricCard 
          className="w-full" 
          title="Total Feedback" 
          value={filteredMetrics.totalFeedback} 
          icon={<MessageSquare size={36} />} 
        />
        <MetricCard 
          className="w-full" 
          title="Average Rating" 
          value={Number(filteredMetrics.averageRating).toFixed(1)}
          icon={<Star size={36} />} 
        />
        <MetricCard 
          className="w-full" 
          title="Response Rate" 
          value={`${filteredMetrics.responseRate}%`} 
          icon={<BarChart2 size={36} />} 
        />
        <MetricCard 
          className="w-full" 
          title="Overall Sentiment" 
          value={`${filteredMetrics.overallSentiment}%`}
          subtitle={`${filteredMetrics.pendingActions} pending actions`}
          icon={<Brain size={36} />} 
        />
      </div>
    </div>
  );
};

export default MetricCards;