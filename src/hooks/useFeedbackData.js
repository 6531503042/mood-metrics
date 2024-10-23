import { useState, useEffect } from 'react';

const mockTeams = ['Overall', 'Frontend', 'Backend', 'DevOps', 'Design', 'Product', 'Marketing', 'Sales', 'Customer Support'];
const mockProjects = ['Overall', 'Project Alpha', 'Project Beta', 'Project Gamma', 'Project Delta', 'Project Epsilon'];

const generateMockData = (teamName, projectName) => {
  return {
    totalFeedback: Math.floor(Math.random() * 1000) + 500,
    averageRating: (Math.random() * 2 + 3).toFixed(1),
    responseRate: (Math.random() * 30 + 70).toFixed(1),
    averageResponseTime: `${Math.floor(Math.random() * 24) + 1}h`,
    participationRate: `${(Math.random() * 20 + 80).toFixed(1)}%`,
    feedbackQuality: (Math.random() * 2 + 3).toFixed(1),
    categoryData: [
      { category: 'Work Environment', count: Math.floor(Math.random() * 100) + 50 },
      { category: 'Management', count: Math.floor(Math.random() * 100) + 50 },
      { category: 'Career Growth', count: Math.floor(Math.random() * 100) + 50 },
      { category: 'Work-Life Balance', count: Math.floor(Math.random() * 100) + 50 },
      { category: 'Team Collaboration', count: Math.floor(Math.random() * 100) + 50 },
    ],
    sentimentData: {
      positive: Math.floor(Math.random() * 60) + 40,
      neutral: Math.floor(Math.random() * 30) + 10,
      negative: Math.floor(Math.random() * 20) + 5,
    },
    trendData: Array.from({ length: 12 }, (_, i) => ({
      date: `2023-${i + 1}`,
      averageRating: (Math.random() * 2 + 3).toFixed(1),
    })),
    recentFeedback: [
      { id: 1, text: `Great work environment in ${teamName} for ${projectName}!`, sentiment: 'positive', team: teamName, project: projectName },
      { id: 2, text: `Need more career growth opportunities in ${teamName} for ${projectName}`, sentiment: 'neutral', team: teamName, project: projectName },
      { id: 3, text: `${teamName} management could improve communication for ${projectName}`, sentiment: 'negative', team: teamName, project: projectName },
      { id: 4, text: `Excellent team collaboration in ${teamName} on ${projectName}`, sentiment: 'positive', team: teamName, project: projectName },
      { id: 5, text: `Work-life balance needs improvement in ${teamName} for ${projectName}`, sentiment: 'negative', team: teamName, project: projectName },
    ],
    availableDataTables: [
      { id: 1, name: 'Employee Feedback', description: 'Contains all employee feedback data', lastUpdated: '2023-06-15' },
      { id: 2, name: 'Project Metrics', description: 'Project-specific performance metrics', lastUpdated: '2023-06-14' },
      { id: 3, name: 'Team Analytics', description: 'Team-level analytics and insights', lastUpdated: '2023-06-13' },
    ],
    performanceMetrics: [
      { name: 'Productivity', value: Math.floor(Math.random() * 40) + 60 },
      { name: 'Quality', value: Math.floor(Math.random() * 30) + 70 },
      { name: 'Efficiency', value: Math.floor(Math.random() * 20) + 80 },
      { name: 'Innovation', value: Math.floor(Math.random() * 50) + 50 },
    ],
    analysesRun: [
      { id: 1, name: 'Sentiment Analysis', dateRun: '2023-06-15', status: 'Completed' },
      { id: 2, name: 'Trend Analysis', dateRun: '2023-06-14', status: 'In Progress' },
      { id: 3, name: 'Predictive Analysis', dateRun: '2023-06-13', status: 'Completed' },
    ],
    employeeSegmentation: [
      { name: 'Highly Engaged', value: Math.floor(Math.random() * 30) + 20 },
      { name: 'Satisfied', value: Math.floor(Math.random() * 20) + 30 },
      { name: 'Neutral', value: Math.floor(Math.random() * 15) + 15 },
      { name: 'At Risk', value: Math.floor(Math.random() * 10) + 5 },
      { name: 'Disengaged', value: Math.floor(Math.random() * 5) + 5 },
    ],
  };
};

const mockAISuggestions = [
  { category: 'performance', suggestion: "Implement daily stand-ups to improve team coordination and communication." },
  { category: 'performance', suggestion: "Introduce peer code reviews to enhance code quality and knowledge sharing." },
  { category: 'engagement', suggestion: "Organize monthly team-building activities to boost morale and strengthen relationships." },
  { category: 'engagement', suggestion: "Implement a recognition program to acknowledge and reward outstanding contributions." },
  { category: 'improvement', suggestion: "Provide more learning and development opportunities, such as workshops and online courses." },
  { category: 'improvement', suggestion: "Conduct regular one-on-one meetings to address individual concerns and career aspirations." },
  { category: 'work-life balance', suggestion: "Introduce flexible working hours to accommodate different personal schedules." },
  { category: 'work-life balance', suggestion: "Encourage employees to take regular breaks and utilize their vacation time." },
];

// Generate mock data for all team and project combinations
const generateAllMockData = () => {
  const data = [];
  mockTeams.forEach(team => {
    mockProjects.forEach(project => {
      data.push({
        team,
        project,
        feedbackData: generateMockData(team, project),
      });
    });
  });
  return data;
};

export const useFeedbackData = () => {
  const [selectedTeam, setSelectedTeam] = useState(mockTeams[0]);
  const [selectedProject, setSelectedProject] = useState(mockProjects[0]);
  const [allFeedbackData, setAllFeedbackData] = useState(generateAllMockData());
  const [aiSuggestions, setAISuggestions] = useState(mockAISuggestions);

  const feedbackData = allFeedbackData.find(data => data.team === selectedTeam && data.project === selectedProject)?.feedbackData || {};

  useEffect(() => {
    const filteredData = generateMockData(selectedTeam, selectedProject);
    setAllFeedbackData((prevData) =>
      prevData.map((data) =>
        data.team === selectedTeam && data.project === selectedProject
          ? { ...data, feedbackData: filteredData }
          : data
      )
    );
  }, [selectedTeam, selectedProject]);

  return { 
    feedbackData, 
    selectedTeam, 
    setSelectedTeam,
    selectedProject,
    setSelectedProject,
    teams: mockTeams,
    projects: mockProjects,
    aiSuggestions, // Use the aiSuggestions state variable here
  };
};
