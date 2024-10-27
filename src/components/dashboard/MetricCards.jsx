import React from 'react';
import { Card, CardBody } from "@nextui-org/react";
import { MessageSquare, Star, BarChart2, Brain } from 'lucide-react';

const MetricCard = ({ title, value, icon, subtitle }) => (
  <Card className="bg-white dark:bg-gray-800 shadow-md hover:shadow-xl transition-shadow duration-300">
    <CardBody className="flex flex-col items-center justify-center p-4">
      <div className="text-4xl text-indigo-500 dark:text-indigo-400 mb-4">{icon}</div>
      <p className="text-sm text-gray-500 dark:text-gray-400 text-center">{title}</p>
      <p className="text-2xl font-bold text-center dark:text-white">{value}</p>
      {subtitle && (
        <p className="text-xs text-gray-500 dark:text-gray-400 text-center mt-2">{subtitle}</p>
      )}
    </CardBody>
  </Card>
);

const MetricCards = ({ data }) => {
  const formatValue = (value) => {
    if (typeof value === 'number' && !isNaN(value)) {
      return value.toFixed(1);
    }
    return 'N/A';
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      <MetricCard 
        className="w-full" 
        title="Total Feedback" 
        value={data.totalFeedback} 
        icon={<MessageSquare size={36} />} 
      />
      <MetricCard 
        className="w-full" 
        title="Average Rating" 
        value={formatValue(data.averageRating)} 
        icon={<Star size={36} />} 
      />
      <MetricCard 
        className="w-full" 
        title="Response Rate" 
        value={`${formatValue(data.responseRate)}%`} 
        icon={<BarChart2 size={36} />} 
      />
      <MetricCard 
        className="w-full" 
        title="Overall Sentiment" 
        value={`${formatValue(data.overallSentiment)}%`}
        subtitle={`${data.pendingActions || 0} pending actions`}
        icon={<Brain size={36} />} 
      />
    </div>
  );
};

export default MetricCards;