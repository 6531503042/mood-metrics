import { useState, useEffect } from 'react';

const createMockDataForTeam = (teamName) => ({
  totalFeedback: Math.floor(Math.random() * 100) + 50,
  averageRating: (Math.random() * 2 + 3).toFixed(1),
  responseRate: (Math.random() * 0.3 + 0.6).toFixed(2),
  categoryData: [
    { category: 'Work Environment', count: Math.floor(Math.random() * 30) + 10 },
    { category: 'Management', count: Math.floor(Math.random() * 25) + 10 },
    { category: 'Career Growth', count: Math.floor(Math.random() * 20) + 10 },
    { category: 'Work-Life Balance', count: Math.floor(Math.random() * 15) + 10 },
    { category: 'Team Collaboration', count: Math.floor(Math.random() * 10) + 10 },
  ],
  sentimentData: {
    positive: Math.floor(Math.random() * 40) + 30,
    neutral: Math.floor(Math.random() * 30) + 20,
    negative: Math.floor(Math.random() * 20) + 5,
  },
  trendData: Array.from({ length: 5 }, (_, i) => ({
    date: `2023-0${i + 1}`,
    averageRating: (Math.random() * 1 + 3.5).toFixed(1),
  })),
  recentFeedback: [
    { id: 1, text: `Great work environment in ${teamName}!`, sentiment: 'positive' },
    { id: 2, text: `Need more career growth opportunities in ${teamName}`, sentiment: 'neutral' },
    { id: 3, text: `${teamName} management could improve communication`, sentiment: 'negative' },
  ],
  averageResponseTime: `${Math.floor(Math.random() * 3) + 1} days`,
});

const mockTeams = ['Backend', 'Frontend', 'DevOps', 'Design', 'Product'];

const mockProjects = [
  { id: 'project1', name: 'Project Alpha' },
  { id: 'project2', name: 'Project Beta' },
  { id: 'project3', name: 'Project Gamma' },
];

const mockAISuggestions = [
  { category: 'Summary', text: "Overall, the feedback indicates positive trends in work environment and team collaboration, with areas for improvement in career growth opportunities and management communication." },
  { category: 'Work Environment', text: "Consider implementing more flexible work hours to improve work-life balance scores." },
  { category: 'Team Collaboration', text: "Increase cross-team projects to foster better collaboration between departments." },
  { category: 'Performance', text: "Implement a peer recognition program to boost morale and productivity." },
  { category: 'Work Environment', text: "Upgrade office equipment to enhance employee comfort and efficiency." },
  { category: 'Team Collaboration', text: "Organize more team-building activities to strengthen interpersonal relationships." },
  { category: 'Performance', text: "Provide more frequent feedback sessions to help employees track their progress." },
];

const mockDataTables = [
  { id: 1, name: 'Employee Feedback', description: 'Contains all employee feedback data', lastUpdated: '2023-05-15' },
  { id: 2, name: 'Performance Reviews', description: 'Annual performance review data', lastUpdated: '2023-04-30' },
  { id: 3, name: 'Employee Demographics', description: 'Employee demographic information', lastUpdated: '2023-05-01' },
];

const mockEmployeeSegments = [
  { name: 'Junior', value: 30 },
  { name: 'Mid-level', value: 45 },
  { name: 'Senior', value: 20 },
  { name: 'Management', value: 5 },
];

const mockPerformanceMetrics = [
  { name: 'Productivity', value: 85 },
  { name: 'Quality', value: 92 },
  { name: 'Collaboration', value: 78 },
  { name: 'Innovation', value: 70 },
];

const mockAnalysesRun = [
  { id: 1, name: 'Sentiment Analysis', dateRun: '2023-05-10', status: 'Completed' },
  { id: 2, name: 'Attrition Risk', dateRun: '2023-05-12', status: 'In Progress' },
  { id: 3, name: 'Skills Gap Analysis', dateRun: '2023-05-08', status: 'Completed' },
];

export const useFeedbackData = () => {
  const [feedbackData, setFeedbackData] = useState(createMockDataForTeam('All Teams'));
  const [selectedTeam, setSelectedTeam] = useState('all');
  const [projects, setProjects] = useState(mockProjects);
  const [selectedProject, setSelectedProject] = useState('');
  const [aiSuggestions, setAISuggestions] = useState(mockAISuggestions);
  const [dataTables, setDataTables] = useState(mockDataTables);
  const [employeeSegments, setEmployeeSegments] = useState(mockEmployeeSegments);
  const [performanceMetrics, setPerformanceMetrics] = useState(mockPerformanceMetrics);
  const [analysesRun, setAnalysesRun] = useState(mockAnalysesRun);

  useEffect(() => {
    if (selectedTeam === 'all') {
      setFeedbackData(createMockDataForTeam('All Teams'));
    } else {
      setFeedbackData(createMockDataForTeam(selectedTeam));
    }
  }, [selectedTeam, selectedProject]);

  return { 
    feedbackData, 
    selectedTeam, 
    setSelectedTeam, 
    projects, 
    selectedProject, 
    setSelectedProject,
    aiSuggestions,
    dataTables,
    employeeSegments,
    performanceMetrics,
    analysesRun
  };
};