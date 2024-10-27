import React from 'react';
import { Card, CardHeader, CardBody } from "@nextui-org/react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const FeedbackAnalytics = ({ data }) => {
  // Sample data structure for improvement areas
  const improvementAreas = [
    { area: 'Work-Life Balance', count: 45 },
    { area: 'Professional Growth', count: 38 },
    { area: 'Team Collaboration', count: 32 },
    { area: 'Management Support', count: 28 },
    { area: 'Office Environment', count: 25 },
    { area: 'Technical Resources', count: 22 },
  ];

  return (
    <Card className="w-full">
      <CardHeader>
        <h2 className="text-xl font-semibold">Areas for Improvement</h2>
      </CardHeader>
      <CardBody>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={improvementAreas}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="area" angle={-45} textAnchor="end" height={100} />
              <YAxis />
              <Tooltip />
              <Bar dataKey="count" fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardBody>
    </Card>
  );
};

export default FeedbackAnalytics;