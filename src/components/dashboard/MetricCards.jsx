import React from 'react';
import { Card, CardBody } from "@nextui-org/react";
import { MessageSquare, Star, BarChart2 } from 'lucide-react';

const MetricCard = ({ title, value, icon }) => (
  <Card className="bg-white shadow-md hover:shadow-xl transition-shadow duration-300">
    <CardBody className="flex flex-col items-center justify-center p-4">
      <div className="text-4xl text-indigo-500 mb-4">{icon}</div>
      <p className="text-sm text-gray-500 text-center">{title}</p>
      <p className="text-2xl font-bold text-center">{value}</p>
    </CardBody>
  </Card>
);

const MetricCards = ({ data }) => {
  // Function to safely format the average rating
  const formatAverageRating = (rating) => {
    return typeof rating === 'number' ? rating.toFixed(1) : 'N/A';
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <MetricCard className="w-full" title="Total Feedback" value={data.totalFeedback} icon={<MessageSquare size={36} />} />
      <MetricCard className="w-full" title="Average Rating" value={formatAverageRating(data.averageRating)} icon={<Star size={36} />} />
      <MetricCard className="w-full" title="Response Rate" value={`${(data.responseRate * 100).toFixed(1)}%`} icon={<BarChart2 size={36} />} />
    </div>
  );
};

export default MetricCards;