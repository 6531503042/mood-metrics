import React from 'react';
import { Card, CardHeader, CardBody, Button } from "@nextui-org/react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { Briefcase, MessageSquare, TrendingUp, Scale, Users, Crown, Download } from 'lucide-react';
import ExportButton from '../ExportButton';

const getIcon = (name) => {
  const icons = {
    'Work Environment': <Briefcase className="w-5 h-5" />,
    'Communication': <MessageSquare className="w-5 h-5" />,
    'Career Growth': <TrendingUp className="w-5 h-5" />,
    'Work-Life Balance': <Scale className="w-5 h-5" />,
    'Team Collaboration': <Users className="w-5 h-5" />,
    'Leadership Support': <Crown className="w-5 h-5" />
  };
  return icons[name] || null;
};

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
      <CardHeader className="flex justify-between items-center flex-wrap gap-2">
        <div>
          <h3 className="text-xl font-semibold text-purple-700">Areas for Improvement</h3>
          <p className="text-small text-default-500">Current performance vs target metrics</p>
        </div>
        <ExportButton data={chartData} filename="areas-for-improvement" />
      </CardHeader>
      <CardBody>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 mb-6">
          {chartData.map((item) => (
            <div key={item.name} className="flex flex-col items-center p-2 rounded-lg bg-gray-50 dark:bg-gray-800">
              {getIcon(item.name)}
              <span className="text-xs mt-2 text-center">{item.name}</span>
              <span className="text-sm font-semibold mt-1">{item.count}%</span>
            </div>
          ))}
        </div>
        <div className="h-[400px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={chartData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" angle={-45} textAnchor="end" height={80} interval={0} tick={{ fontSize: 12 }} />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="count" name="Current Score" fill="rgba(104, 109, 224, 0.8)" />
              <Bar dataKey="target" name="Target Score" fill="rgba(126, 214, 223, 0.8)" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardBody>
    </Card>
  );
};

export default AreasForImprovement;
