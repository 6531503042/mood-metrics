import React, { useMemo } from 'react';
import { Card, CardHeader, CardBody, Progress, Chip } from "@nextui-org/react";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, BarChart, Bar, XAxis, YAxis } from 'recharts';
import { Activity, Users, ThumbsUp, TrendingUp, Clock } from 'lucide-react';
import { categories, emojiRatings, mockFeedbackData } from '../utils/feedbackUtils';

const FeedbackDashboard = () => {
  const feedbackData = useMemo(() => {
    const categoryData = categories.map(cat => ({
      category: cat.label,
      value: mockFeedbackData.filter(f => f.category === cat.value).length,
      emoji: cat.emoji
    }));

    const sentimentData = emojiRatings.map(rating => ({
      name: rating.label,
      value: mockFeedbackData.filter(f => f.rating === rating.value).length,
      emoji: rating.emoji
    }));

    const recentFeedback = mockFeedbackData
      .sort((a, b) => new Date(b.date) - new Date(a.date))
      .slice(0, 5)
      .map(f => ({
        ...f,
        category: categories.find(c => c.value === f.category).label,
        sentiment: emojiRatings.find(r => r.value === f.rating).label
      }));

    return { categoryData, sentimentData, recentFeedback };
  }, []);

  const totalFeedback = mockFeedbackData.length;
  const participationRate = (totalFeedback / 100 * 100).toFixed(0);
  const averageSatisfaction = (mockFeedbackData.reduce((acc, curr) => acc + curr.rating, 0) / totalFeedback).toFixed(1);

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-8 text-center">Feedback Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <MetricCard icon={<Activity size={40} />} value={totalFeedback} label="Feedback Submitted" />
        <MetricCard icon={<Users size={40} />} value={`${participationRate}%`} label="Participation Rate" />
        <MetricCard icon={<ThumbsUp size={40} />} value={`${averageSatisfaction}/5`} label="Average Satisfaction" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <CategoryOverview data={feedbackData.categoryData} />
        <SentimentOverview data={feedbackData.sentimentData} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <EmojiFeedbackDistribution data={feedbackData.sentimentData} />
        <FeedbackTrends />
      </div>

      <RecentFeedback data={feedbackData.recentFeedback} />

      <Card className="mt-8">
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

const MetricCard = ({ icon, value, label }) => (
  <Card>
    <CardBody className="flex flex-col items-center justify-center">
      {React.cloneElement(icon, { className: "text-primary mb-2" })}
      <p className="text-2xl font-bold">{value}</p>
      <p className="text-sm text-gray-500">{label}</p>
    </CardBody>
  </Card>
);

const CategoryOverview = ({ data }) => (
  <Card>
    <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
      <p className="text-lg font-bold">Feedback Category Overview</p>
      <small className="text-default-500">Distribution by category</small>
    </CardHeader>
    <CardBody>
      {data.map((item) => (
        <div key={item.category} className="mb-4">
          <div className="flex justify-between items-center mb-1">
            <span>{item.emoji} {item.category}</span>
            <span className="font-semibold">{item.value}</span>
          </div>
          <Progress value={item.value} color="success" className="h-2" />
        </div>
      ))}
    </CardBody>
  </Card>
);

const SentimentOverview = ({ data }) => (
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
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={80}
              paddingAngle={5}
              dataKey="value"
              label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={`hsl(${index * 60}, 70%, 60%)`} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </CardBody>
  </Card>
);

const EmojiFeedbackDistribution = ({ data }) => (
  <Card>
    <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
      <p className="text-lg font-bold">Emoji Feedback Distribution</p>
      <small className="text-default-500">User reactions at a glance</small>
    </CardHeader>
    <CardBody>
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <XAxis dataKey="emoji" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="value" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </CardBody>
  </Card>
);

const FeedbackTrends = () => (
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
);

const RecentFeedback = ({ data }) => (
  <Card>
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
              <th className="px-4 py-2 text-left">Feedback</th>
              <th className="px-4 py-2 text-left">Date</th>
            </tr>
          </thead>
          <tbody>
            {data.map((feedback) => (
              <tr key={feedback.id} className="border-b">
                <td className="px-4 py-2">{feedback.category}</td>
                <td className="px-4 py-2">
                  <Chip color={feedback.sentiment === 'Very Satisfied' ? 'success' : feedback.sentiment === 'Neutral' ? 'warning' : 'danger'}>
                    {feedback.sentiment}
                  </Chip>
                </td>
                <td className="px-4 py-2">{feedback.feedback}</td>
                <td className="px-4 py-2">{feedback.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </CardBody>
  </Card>
);

export default FeedbackDashboard;