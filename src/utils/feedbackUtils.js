import { format } from 'date-fns';

export const categories = [
  { value: "work_environment", label: "Work Environment", emoji: "🏢" },
  { value: "management", label: "Management", emoji: "👔" },
  { value: "career_growth", label: "Career Growth", emoji: "📈" },
  { value: "work_life_balance", label: "Work-Life Balance", emoji: "⚖️" },
  { value: "team_collaboration", label: "Team Collaboration", emoji: "🤝" },
  { value: "company_culture", label: "Company Culture", emoji: "🌟" },
  { value: "resources_support", label: "Resources & Support", emoji: "🛠️" },
  { value: "project_timeline", label: "Project Timeline", emoji: "⏰" },
  { value: "learning_development", label: "Learning & Development", emoji: "📚" },
];

export const projectQuestions = [
  {
    id: 'overall_experience',
    question: "How would you rate your overall experience with this project, and why?",
    subtext: "Please mention specific factors that contributed to your rating.",
    type: 'rating_text'
  },
  {
    id: 'successes_challenges',
    question: "What aspects of this project worked particularly well? What were the biggest challenges?",
    subtext: "How could these challenges be addressed in future projects?",
    type: 'text'
  },
  {
    id: 'team_collaboration',
    question: "How effective was communication and collaboration within the team?",
    subtext: "Are there any changes you would recommend for future projects?",
    type: 'rating_text'
  },
  {
    id: 'role_clarity',
    question: "Did you feel that your role and responsibilities were clear throughout the project?",
    subtext: "If not, how could we improve clarity in the future?",
    type: 'rating_text'
  },
  {
    id: 'resources_support',
    question: "Did you have the resources and support needed to complete your work effectively?",
    subtext: "What additional resources would have helped?",
    type: 'rating_text'
  },
  {
    id: 'timeline_workload',
    question: "Was the project timeline and workload manageable?",
    subtext: "Please provide any suggestions to improve project scheduling.",
    type: 'rating_text'
  },
  {
    id: 'learning_growth',
    question: "What new skills or knowledge did you gain from this project?",
    subtext: "How could future projects provide more learning and growth opportunities?",
    type: 'text'
  },
  {
    id: 'improvement',
    question: "If you could change one thing about this project, what would it be and why?",
    type: 'text'
  }
];

export const aiPrompts = [
  {
    id: 'themes',
    prompt: "Summarize the top three positive themes and top three areas for improvement from project feedback.",
    category: 'analysis'
  },
  {
    id: 'teamwork',
    prompt: "Identify feedback related to teamwork challenges and suggest improvements for future team structures.",
    category: 'team'
  },
  {
    id: 'resources',
    prompt: "Analyze feedback on resource needs and suggest ways HR can better support project teams.",
    category: 'support'
  },
  {
    id: 'workload',
    prompt: "Highlight any recurring comments on workload management to help improve project scheduling practices.",
    category: 'management'
  },
  {
    id: 'learning',
    prompt: "Generate a report on key learnings and skill development opportunities mentioned in feedback.",
    category: 'development'
  }
];

export const userSegments = [
  { id: 'highly_engaged', label: 'Highly Engaged', color: '#22c55e' },
  { id: 'satisfied', label: 'Satisfied', color: '#3b82f6' },
  { id: 'neutral', label: 'Neutral', color: '#f59e0b' },
  { id: 'at_risk', label: 'At Risk', color: '#ef4444' },
  { id: 'new_hire', label: 'New Hire', color: '#8b5cf6' },
  { id: 'veteran', label: 'Veteran Employee', color: '#6366f1' },
  { id: 'leadership', label: 'Leadership', color: '#ec4899' },
  { id: 'remote', label: 'Remote Worker', color: '#14b8a6' }
];

export const emojiRatings = [
  { value: 1, emoji: "😞", label: "Very Dissatisfied" },
  { value: 2, emoji: "😕", label: "Dissatisfied" },
  { value: 3, emoji: "😐", label: "Neutral" },
  { value: 4, emoji: "😊", label: "Satisfied" },
  { value: 5, emoji: "😄", label: "Very Satisfied" }
];

export const teams = [
  { value: "information_technology", label: "Information Technology" },
  { value: "human_resources", label: "Human Resources" },
  { value: "finance", label: "Finance" },
  { value: "marketing", label: "Marketing" },
  { value: "sales", label: "Sales" },
  { value: "operations", label: "Operations" },
];

export const projects = [
  { value: "alpha", label: "Project Alpha" },
  { value: "beta", label: "Project Beta" },
  { value: "gamma", label: "Project Gamma" },
  { value: "delta", label: "Project Delta" },
  { value: "epsilon", label: "Project Epsilon" },
];

export const formatDate = (date) => format(new Date(date), 'yyyy-MM-dd');

export const getRandomDate = (start, end) => {
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
};

export const mockFeedbackData = Array.from({ length: 50 }, (_, index) => ({
  id: index + 1,
  team: teams[Math.floor(Math.random() * teams.length)].value,
  project: projects[Math.floor(Math.random() * projects.length)].value,
  category: categories[Math.floor(Math.random() * categories.length)].value,
  rating: Math.floor(Math.random() * 5) + 1,
  feedback: `Sample feedback ${index + 1}`,
  date: formatDate(getRandomDate(new Date(2023, 0, 1), new Date())),
  isAnonymous: Math.random() > 0.5,
  segment: userSegments[Math.floor(Math.random() * userSegments.length)].id,
  sentiment: Math.random() > 0.6 ? 'positive' : Math.random() > 0.3 ? 'neutral' : 'negative',
  priority: Math.random() > 0.7 ? 'high' : Math.random() > 0.4 ? 'medium' : 'low'
}));