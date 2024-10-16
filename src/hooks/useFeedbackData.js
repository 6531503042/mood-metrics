import { useState, useEffect } from 'react';

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

const mockProjects = [
  { id: 'project1', name: 'Project Alpha' },
  { id: 'project2', name: 'Project Beta' },
  { id: 'project3', name: 'Project Gamma' },
];

const mockRoles = [
  { id: 'role1', name: 'Developer' },
  { id: 'role2', name: 'Designer' },
  { id: 'role3', name: 'Manager' },
];

const mockAISuggestions = [
  "Consider implementing more team-building activities to improve collaboration scores.",
  "The recent drop in work-life balance ratings may be addressed by reviewing current policies.",
  "Positive feedback on the new project management tool suggests expanding its use across teams.",
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
  const [feedbackData, setFeedbackData] = useState(mockFeedbackData);
  const [selectedTeam, setSelectedTeam] = useState('all');
  const [projects, setProjects] = useState(mockProjects);
  const [selectedProject, setSelectedProject] = useState('');
  const [roles, setRoles] = useState(mockRoles);
  const [selectedRole, setSelectedRole] = useState('');
  const [aiSuggestions, setAISuggestions] = useState(mockAISuggestions);
  const [dataTables, setDataTables] = useState(mockDataTables);
  const [employeeSegments, setEmployeeSegments] = useState(mockEmployeeSegments);
  const [performanceMetrics, setPerformanceMetrics] = useState(mockPerformanceMetrics);
  const [analysesRun, setAnalysesRun] = useState(mockAnalysesRun);

  useEffect(() => {
    // In a real application, you would fetch data based on the selected team, project, and role
    console.log(`Team: ${selectedTeam}, Project: ${selectedProject}, Role: ${selectedRole}`);
    // Update feedbackData, projects, roles, and aiSuggestions based on selections
  }, [selectedTeam, selectedProject, selectedRole]);

  return { 
    feedbackData, 
    selectedTeam, 
    setSelectedTeam, 
    projects, 
    selectedProject, 
    setSelectedProject,
    roles,
    selectedRole,
    setSelectedRole,
    aiSuggestions,
    dataTables,
    employeeSegments,
    performanceMetrics,
    analysesRun
  };
};
