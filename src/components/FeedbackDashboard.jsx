import React from 'react';
import { Card, CardHeader, CardBody, Progress } from "@nextui-org/react";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import { Activity, Users, ThumbsUp } from 'lucide-react';

const mockData = [
  { category: 'Work Environment', value: 92, emoji: '🏢' },
  { category: 'Management', value: 85, emoji: '👔' },
  { category: 'Career Growth', value: 78, emoji: '📈' },
  { category: 'Work-Life Balance', value: 65, emoji: '⚖️' },
  { category: 'Team Collaboration', value: 88, emoji: '🤝' },
  { category: 'Company Culture', value: 80, emoji: '🌟' },
];

const sentimentData = [
  { name: 'Positive', value: 70, color: '#4ade80' },
  { name: 'Neutral', value: 20, color: '#facc15' },
  { name: 'Negative', value: 10, color: '#f87171' },
];

const FeedbackDashboard = () => {
  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-8 text-center">Feedback Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card>
          <CardBody className="flex flex-col items-center justify-center">
            <Activity size={40} className="text-primary mb-2" />
            <p className="text-2xl font-bold">120</p>
            <p className="text-sm text-gray-500">Feedback Submitted</p>
          </CardBody>
        </Card>
        <Card>
          <CardBody className="flex flex-col items-center justify-center">
            <Users size={40} className="text-primary mb-2" />
            <p className="text-2xl font-bold">85%</p>
            <p className="text-sm text-gray-500">Participation Rate</p>
          </CardBody>
        </Card>
        <Card>
          <CardBody className="flex flex-col items-center justify-center">
            <ThumbsUp size={40} className="text-primary mb-2" />
            <p className="text-2xl font-bold">7.8/10</p>
            <p className="text-sm text-gray-500">Average Satisfaction</p>
          </CardBody>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
            <p className="text-lg font-bold">Feedback Category Overview</p>
            <small className="text-default-500">Satisfaction score by category</small>
          </CardHeader>
          <CardBody>
            {mockData.map((item) => (
              <div key={item.category} className="mb-4">
                <div className="flex justify-between items-center mb-1">
                  <span>{item.emoji} {item.category}</span>
                  <span className="font-semibold">{item.value}%</span>
                </div>
                <Progress value={item.value} color="success" className="h-2" />
              </div>
            ))}
          </CardBody>
        </Card>

        <Card>
          <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
            <p className="text-lg font-bold">Sentiment Overview</p>
            <small className="text-default-500">Distribution of feedback sentiment</small>
          </CardHeader>
          <CardBody>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={sentimentData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={80}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {sentimentData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="flex justify-center mt-4">
              {sentimentData.map((entry) => (
                <div key={entry.name} className="flex items-center mx-2">
                  <div className="w-3 h-3 rounded-full mr-1" style={{ backgroundColor: entry.color }}></div>
                  <span className="text-sm">{entry.name}</span>
                </div>
              ))}
            </div>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};

export default FeedbackDashboard;