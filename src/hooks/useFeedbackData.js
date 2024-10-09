import { useState, useEffect } from 'react';

// Mock data for demonstration purposes
const mockFeedbackData = {
  totalFeedback: 100,
  averageRating: 4.2,
  responseRate: 0.85,
  categoryData: [
    { category: 'Work Environment', count: 30 },
    { category: 'Management', count: 25 },
    { category: 'Career Growth', count: 20 },
    { category: 'Work-Life Balance', count: 15 },
    { category: 'Team Collaboration', count: 10 },
  ],
  sentimentData: {
    positive: 60,
    neutral: 30,
    negative: 10,
  },
  trendData: [
    { date: '2023-01', averageRating: 3.8 },
    { date: '2023-02', averageRating: 4.0 },
    { date: '2023-03', averageRating: 4.2 },
    { date: '2023-04', averageRating: 4.1 },
    { date: '2023-05', averageRating: 4.3 },
  ],
  recentFeedback: [
    { id: 1, text: 'Great work environment!', sentiment: 'positive' },
    { id: 2, text: 'Need more career growth opportunities', sentiment: 'neutral' },
    { id: 3, text: 'Management could improve communication', sentiment: 'negative' },
  ],
  averageResponseTime: '2 days',
};

export const useFeedbackData = () => {
  const [feedbackData, setFeedbackData] = useState(mockFeedbackData);
  const [selectedTeam, setSelectedTeam] = useState('all');

  useEffect(() => {
    // In a real application, you would fetch data based on the selected team
    // For now, we'll just use the mock data
    console.log(`Team selected: ${selectedTeam}`);
  }, [selectedTeam]);

  return { feedbackData, selectedTeam, setSelectedTeam };
};