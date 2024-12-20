import { 
  HomeIcon, 
  MessageSquare, 
  Users, 
  Activity,
  TrendingUp, 
  Target, 
  Settings,
  FileText,
  Send
} from "lucide-react";

export const navItems = [
  {
    title: "Dashboard",
    id: "dashboard",
    icon: <HomeIcon className="h-4 w-4" />,
  },
  {
    title: "Submit Feedback",
    id: "submit-feedback",
    icon: <Send className="h-4 w-4" />,
  },
  {
    title: "Feedback Management",
    id: "feedback-management",
    icon: <FileText className="h-4 w-4" />,
  },
  {
    title: "Team Analytics",
    id: "team-analytics",
    icon: <Users className="h-4 w-4" />,
  },
  {
    title: "Performance",
    id: "performance",
    icon: <Activity className="h-4 w-4" />,
  },
  {
    title: "Sentiment",
    id: "sentiment",
    icon: <TrendingUp className="h-4 w-4" />,
  },
  {
    title: "Action Items",
    id: "action-items",
    icon: <Target className="h-4 w-4" />,
  },
  {
    title: "Settings",
    id: "settings",
    icon: <Settings className="h-4 w-4" />,
  },
];