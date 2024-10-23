import { createBrowserRouter } from "react-router-dom";
import DashboardOverview from "../pages/DashboardOverview";
import FeedbackManagement from "../pages/FeedbackManagement";
import TeamAnalytics from "../pages/TeamAnalytics";
import PerformanceMetrics from "../pages/PerformanceMetrics";
import SentimentAnalysis from "../pages/SentimentAnalysis";
import ActionItems from "../pages/ActionItems";
import Settings from "../pages/Settings";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <DashboardOverview />,
  },
  {
    path: "/feedback",
    element: <FeedbackManagement />,
  },
  {
    path: "/team-analytics",
    element: <TeamAnalytics />,
  },
  {
    path: "/performance",
    element: <PerformanceMetrics />,
  },
  {
    path: "/sentiment",
    element: <SentimentAnalysis />,
  },
  {
    path: "/action-items",
    element: <ActionItems />,
  },
  {
    path: "/settings",
    element: <Settings />,
  },
]);