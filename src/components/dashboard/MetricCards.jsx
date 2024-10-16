import React from 'react';
import { Card, CardBody } from "@nextui-org/react";
import { MessageSquare, Star, BarChart2 } from 'lucide-react';

const MetricCard = ({ title, value, icon }) => (
  <Card className="bg-white shadow-md hover:shadow-xl transition-shadow duration-300">
    <CardBody className="flex items-center justify-between p-4">
      <div>
        <p className="text-sm text-gray-500">{title}</p>
        <p className="text-2xl font-bold">{value}</p>
      </div>
      <div className="text-3xl text-indigo-500">{icon}</div>
    </CardBody>
  </Card>
);

const MetricCards = ({ data }) => {
  return (
    <>
      <MetricCard title="Total Feedback" value={data.totalFeedback} icon={<MessageSquare size={24} />} />
      <MetricCard title="Average Rating" value={data.averageRating.toFixed(1)} icon={<Star size={24} />} />
      <MetricCard title="Response Rate" value={`${(data.responseRate * 100).toFixed(1)}%`} icon={<BarChart2 size={24} />} />
    </>
  );
};

export default MetricCards;