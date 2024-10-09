import React from 'react';
import { Card, CardHeader, CardBody, Divider, Progress } from "@nextui-org/react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { Activity, Users, ThumbsUp } from 'lucide-react';

const mockData = [
  { category: 'Work Environment', value: 92 },
  { category: 'Management', value: 85 },
  { category: 'Career Growth', value: 78 },
  { category: 'Work-Life Balance', value: 65 },
  { category: 'Team Collaboration', value: 88 },
  { category: 'Company Culture', value: 80 },
];

const sentimentData = [
  { name: 'Positive', value: 70 },
  { name: 'Neutral', value: 20 },
  { name: 'Negative', value: 10 },
];

const COLORS = ['#4ade80', '#facc15', '#f87171'];

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
        <Card className="col-span-full">
          <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
            <p className="text-lg font-bold">Feedback Category Breakdown</p>
            <small className="text-default-500">Satisfaction score by category</small>
          </CardHeader>
          <CardBody className="overflow-visible py-2">
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={mockData} layout="vertical">
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis type="number" domain={[0, 100]} />
                <YAxis dataKey="category" type="category" width={150} />
                <Tooltip />
                <Bar dataKey="value" fill="#4ade80" />
              </BarChart>
            </ResponsiveContainer>
          </CardBody>
        </Card>

        <Card>
          <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
            <p className="text-lg font-bold">Sentiment Overview</p>
            <small className="text-default-500">Distribution of feedback sentiment</small>
          </CardHeader>
          <CardBody>
            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie
                  data={sentimentData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {sentimentData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
            <div className="flex justify-center mt-4">
              {sentimentData.map((entry, index) => (
                <div key={entry.name} className="flex items-center mx-2">
                  <div className="w-3 h-3 rounded-full mr-1" style={{ backgroundColor: COLORS[index] }}></div>
                  <span className="text-sm">{entry.name}</span>
                </div>
              ))}
            </div>
          </CardBody>
        </Card>

        <Card>
          <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
            <p className="text-lg font-bold">Top Performing Areas</p>
            <small className="text-default-500">Highest rated categories</small>
          </CardHeader>
          <CardBody>
            {mockData.slice(0, 3).map((item, index) => (
              <div key={item.category} className="mb-4">
                <div className="flex justify-between mb-1">
                  <span>{item.category}</span>
                  <span>{item.value}%</span>
                </div>
                <Progress value={item.value} color="success" className="h-2" />
              </div>
            ))}
          </CardBody>
        </Card>
      </div>
    </div>
  );
};

export default FeedbackDashboard;