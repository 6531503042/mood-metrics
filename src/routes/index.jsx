import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../components/DashboardLayout";
import DashboardOverview from "../pages/DashboardOverview";
import FeedbackManagement from "../pages/FeedbackManagement";
import TeamAnalytics from "../pages/TeamAnalytics";
import PerformanceMetrics from "../pages/PerformanceMetrics";
import SentimentAnalysis from "../pages/SentimentAnalysis";
import ActionItems from "../pages/ActionItems";
import Settings from "../pages/Settings";

const withDashboardLayout = (Component) => (
  <DashboardLayout>
    <Component />
  </DashboardLayout>
);

export const router = createBrowserRouter([
  {
    path: "/",
    element: withDashboardLayout(DashboardOverview),
  },
  {
    path: "/feedback",
    element: withDashboardLayout(FeedbackManagement),
  },
  {
    path: "/team-analytics",
    element: withDashboardLayout(TeamAnalytics),
  },
  {
    path: "/performance",
    element: withDashboardLayout(PerformanceMetrics),
  },
  {
    path: "/sentiment",
    element: withDashboardLayout(SentimentAnalysis),
  },
  {
    path: "/action-items",
    element: withDashboardLayout(ActionItems),
  },
  {
    path: "/settings",
    element: withDashboardLayout(Settings),
  },
]);