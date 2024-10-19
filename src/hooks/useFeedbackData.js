import { useState, useEffect } from 'react';

const mockTeams = ['Overall', 'Frontend', 'Backend', 'DevOps', 'Design', 'Product'];
const mockProjects = ['Overall', 'Alpha', 'Beta', 'Gamma', 'Delta'];

const generateMockData = (teamName, projectName) => {
  return {
    totalFeedback: Math.floor(Math.random() * 1000),
    averageRating: (Math.random() * 5).toFixed(1),
    responseRate: (Math.random() * 100).toFixed(1),
    categoryData: [
      { category: 'Work Environment', count: Math.floor(Math.random() * 100) },
      { category: 'Management', count: Math.floor(Math.random() * 100) },
      { category: 'Career Growth', count: Math.floor(Math.random() * 100) },
      { category: 'Work-Life Balance', count: Math.floor(Math.random() * 100) },
      { category: 'Team Collaboration', count: Math.floor(Math.random() * 100) },
    ],
    sentimentData: {
      positive: Math.floor(Math.random() * 100),
      neutral: Math.floor(Math.random() * 50),
      negative: Math.floor(Math.random() * 30),
    },
    trendData: Array.from({ length: 6 }, (_, i) => ({
      date: `2023-${i + 1}`,
      averageRating: (Math.random() * 5).toFixed(1),
    })),
    recentFeedback: [
      { id: 1, text: `Great work environment in ${teamName} for ${projectName}!`, sentiment: 'positive' },
      { id: 2, text: `Need more career growth opportunities in ${teamName} for ${projectName}`, sentiment: 'neutral' },
      { id: 3, text: `${teamName} management could improve communication for ${projectName}`, sentiment: 'negative' },
    ],
    averageResponseTime: `${Math.floor(Math.random() * 5) + 1} days`,
    availableDataTables: [
      { id: 1, name: 'Employee Feedback', description: 'Contains all employee feedback data', lastUpdated: '2023-06-15' },
      { id: 2, name: 'Project Metrics', description: 'Project-specific performance metrics', lastUpdated: '2023-06-14' },
      { id: 3, name: 'Team Analytics', description: 'Team-level analytics and insights', lastUpdated: '2023-06-13' },
    ],
    performanceMetrics: [
      { name: 'Productivity', value: Math.floor(Math.random() * 100) },
      { name: 'Quality', value: Math.floor(Math.random() * 100) },
      { name: 'Efficiency', value: Math.floor(Math.random() * 100) },
      { name: 'Innovation', value: Math.floor(Math.random() * 100) },
    ],
    analysesRun: [
      { id: 1, name: 'Sentiment Analysis', dateRun: '2023-06-15', status: 'Completed' },
      { id: 2, name: 'Trend Analysis', dateRun: '2023-06-14', status: 'In Progress' },
      { id: 3, name: 'Predictive Analysis', dateRun: '2023-06-13', status: 'Completed' },
    ],
  };
};

const mockAISuggestions = [
  { category: 'performance', suggestion: "Implement daily stand-ups to improve team coordination." },
  { category: 'performance', suggestion: "Introduce peer code reviews to enhance code quality." },
  { category: 'engagement', suggestion: "Organize monthly team-building activities to boost morale." },
  { category: 'engagement', suggestion: "Implement a recognition program for outstanding contributions." },
  { category: 'improvement', suggestion: "Provide more learning and development opportunities." },
  { category: 'improvement', suggestion: "Conduct regular one-on-one meetings to address individual concerns." },
];

export const useFeedbackData = () => {
  const [selectedTeam, setSelectedTeam] = useState(mockTeams[0]);
  const [selectedProject, setSelectedProject] = useState(mockProjects[0]);
  const [feedbackData, setFeedbackData] = useState(generateMockData(selectedTeam, selectedProject));
  const [aiSuggestions, setAISuggestions] = useState(mockAISuggestions);

  useEffect(() => {
    setFeedbackData(generateMockData(selectedTeam, selectedProject));
  }, [selectedTeam, selectedProject]);

  return { 
    feedbackData, 
    selectedTeam, 
    setSelectedTeam,
    selectedProject,
    setSelectedProject,
    teams: mockTeams,
    projects: mockProjects,
    aiSuggestions,
  };
};