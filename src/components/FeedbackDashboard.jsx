import React from 'react';
import { Card, CardHeader, CardBody, Progress, Chip } from "@nextui-org/react";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, BarChart, Bar, XAxis, YAxis } from 'recharts';
import { Activity, Users, ThumbsUp, TrendingUp, Clock } from 'lucide-react';

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

const emojiFeedbackData = [
  { emoji: '😄', count: 45 },
  { emoji: '🙂', count: 30 },
  { emoji: '😐', count: 15 },
  { emoji: '🙁', count: 7 },
  { emoji: '😞', count: 3 },
];

const recentFeedbackData = [
  { id: 1, category: 'Work Environment', sentiment: 'Positive', comment: 'Great office space!', date: '2023-03-15' },
  { id: 2, category: 'Management', sentiment: 'Neutral', comment: 'Communication could be improved.', date: '2023-03-14' },
  { id: 3, category: 'Career Growth', sentiment: 'Positive', comment: 'Excellent training opportunities.', date: '2023-03-13' },
  { id: 4, category: 'Work-Life Balance', sentiment: 'Negative', comment: 'Too much overtime required.', date: '2023-03-12' },
  { id: 5, category: 'Team Collaboration', sentiment: 'Positive', comment: 'Great team spirit!', date: '2023-03-11' },
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

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
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

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <Card>
          <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
            <p className="text-lg font-bold">Emoji Feedback Distribution</p>
            <small className="text-default-500">User reactions at a glance</small>
          </CardHeader>
          <CardBody>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={emojiFeedbackData}>
                  <XAxis dataKey="emoji" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="count" fill="#8884d8" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardBody>
        </Card>

        <Card>
          <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
            <p className="text-lg font-bold">Feedback Trends</p>
            <small className="text-default-500">Weekly submission rate</small>
          </CardHeader>
          <CardBody className="flex flex-col items-center justify-center">
            <TrendingUp size={40} className="text-primary mb-2" />
            <p className="text-2xl font-bold">+15%</p>
            <p className="text-sm text-gray-500">Increase in submissions</p>
          </CardBody>
        </Card>
      </div>

      <Card className="mb-8">
        <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
          <p className="text-lg font-bold">Recent Feedback</p>
          <small className="text-default-500">Latest user comments</small>
        </CardHeader>
        <CardBody>
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead>
                <tr className="bg-gray-100">
                  <th className="px-4 py-2 text-left">Category</th>
                  <th className="px-4 py-2 text-left">Sentiment</th>
                  <th className="px-4 py-2 text-left">Comment</th>
                  <th className="px-4 py-2 text-left">Date</th>
                </tr>
              </thead>
              <tbody>
                {recentFeedbackData.map((feedback) => (
                  <tr key={feedback.id} className="border-b">
                    <td className="px-4 py-2">{feedback.category}</td>
                    <td className="px-4 py-2">
                      <Chip color={feedback.sentiment === 'Positive' ? 'success' : feedback.sentiment === 'Neutral' ? 'warning' : 'danger'}>
                        {feedback.sentiment}
                      </Chip>
                    </td>
                    <td className="px-4 py-2">{feedback.comment}</td>
                    <td className="px-4 py-2">{feedback.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardBody>
      </Card>

      <Card>
        <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
          <p className="text-lg font-bold">Response Time</p>
          <small className="text-default-500">Average time to address feedback</small>
        </CardHeader>
        <CardBody className="flex flex-col items-center justify-center">
          <Clock size={40} className="text-primary mb-2" />
          <p className="text-2xl font-bold">48 hours</p>
          <p className="text-sm text-gray-500">Average response time</p>
        </CardBody>
      </Card>
    </div>
  );
};

export default FeedbackDashboard;