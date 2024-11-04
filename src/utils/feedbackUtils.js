import { format } from 'date-fns';

export const categories = [
  { value: "work_environment", label: "Work Environment", emoji: "🏢" },
  { value: "management", label: "Management", emoji: "👔" },
  { value: "career_growth", label: "Career Growth", emoji: "📈" },
  { value: "work_life_balance", label: "Work-Life Balance", emoji: "⚖️" },
  { value: "team_collaboration", label: "Team Collaboration", emoji: "🤝" },
  { value: "company_culture", label: "Company Culture", emoji: "🌟" },
];

export const emojiRatings = [
  { value: 1, emoji: "😞", label: "Negative" },     // Negative
  { value: 3, emoji: "😐", label: "Neutral" },      // Neutral
  { value: 5, emoji: "😄", label: "Positive" },     // Positive
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
  project: `Project ${Math.floor(Math.random() * 5) + 1}`,
  category: categories[Math.floor(Math.random() * categories.length)].value,
  rating: Math.floor(Math.random() * 5) + 1,
  feedback: `Sample feedback ${index + 1}`,
  date: formatDate(getRandomDate(new Date(2023, 0, 1), new Date())),
  isAnonymous: Math.random() > 0.5,
}));