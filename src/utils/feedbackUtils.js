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
  { value: 1, emoji: "😞", label: "Very Dissatisfied" },
  { value: 2, emoji: "🙁", label: "Dissatisfied" },
  { value: 3, emoji: "😐", label: "Neutral" },
  { value: 4, emoji: "🙂", label: "Satisfied" },
  { value: 5, emoji: "😄", label: "Very Satisfied" },
];

export const formatDate = (date) => format(new Date(date), 'yyyy-MM-dd');

export const getRandomDate = (start, end) => {
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
};

export const mockFeedbackData = Array.from({ length: 50 }, (_, index) => ({
  id: index + 1,
  category: categories[Math.floor(Math.random() * categories.length)].value,
  rating: Math.floor(Math.random() * 5) + 1,
  feedback: `Sample feedback ${index + 1}`,
  date: formatDate(getRandomDate(new Date(2023, 0, 1), new Date())),
  isAnonymous: Math.random() > 0.5,
}));