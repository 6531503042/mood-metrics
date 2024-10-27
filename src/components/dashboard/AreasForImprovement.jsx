import React from 'react';
import { Card, CardHeader, CardBody } from "@nextui-org/react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

const AreasForImprovement = ({ data }) => {
  const chartData = [
    { name: 'Work Environment', count: data?.workEnvironment || 45, target: 80 },
    { name: 'Communication', count: data?.communication || 65, target: 90 },
    { name: 'Career Growth', count: data?.careerGrowth || 55, target: 85 },
    { name: 'Work-Life Balance', count: data?.workLifeBalance || 70, target: 85 },
    { name: 'Team Collaboration', count: data?.teamCollaboration || 75, target: 90 },
    { name: 'Leadership Support', count: data?.leadershipSupport || 60, target: 85 },
  ];

  return (
    <Card className="w-full">
      <CardHeader className="flex justify-between items-center">
        <div>
          <h3 className="text-xl font-semibold text-purple-700">Areas for Improvement</h3>
          <p className="text-small text-default-500">Current performance vs target metrics</p>
        </div>
      </CardHeader>
      <CardBody>
        <div className="h-[400px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={chartData}
              margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" angle={-45} textAnchor="end" height={80} />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="count" name="Current Score" fill="#8884d8" />
              <Bar dataKey="target" name="Target Score" fill="#82ca9d" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardBody>
    </Card>
  );
};

export default AreasForImprovement;