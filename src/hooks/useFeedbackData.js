import { useState, useEffect } from 'react';

const generateMockData = (teamName) => {
  return {
    totalFeedback: Math.floor(Math.random() * 1000),
    averageRating: (Math.random() * 5).toFixed(1),
    responseRate: Math.random().toFixed(2),
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
      { id: 1, text: `Great work environment in ${teamName}!`, sentiment: 'positive' },
      { id: 2, text: `Need more career growth opportunities in ${teamName}`, sentiment: 'neutral' },
      { id: 3, text: `${teamName} management could improve communication`, sentiment: 'negative' },
    ],
    averageResponseTime: `${Math.floor(Math.random() * 5) + 1} days`,
  };
};

const mockTeams = ['Frontend', 'Backend', 'DevOps', 'Design', 'Product'];

const mockProjects = [
  { id: 'project1', name: 'Project Alpha' },
  { id: 'project2', name: 'Project Beta' },
  { id: 'project3', name: 'Project Gamma' },
];

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
  const [feedbackData, setFeedbackData] = useState(generateMockData(selectedTeam));
  const [projects, setProjects] = useState(mockProjects);
  const [selectedProject, setSelectedProject] = useState('');
  const [aiSuggestions, setAISuggestions] = useState(mockAISuggestions);

  useEffect(() => {
    setFeedbackData(generateMockData(selectedTeam));
  }, [selectedTeam]);

  return { 
    feedbackData, 
    selectedTeam, 
    setSelectedTeam,
    teams: mockTeams,
    projects, 
    selectedProject, 
    setSelectedProject,
    aiSuggestions,
  };
};