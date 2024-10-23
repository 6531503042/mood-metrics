import { createBrowserRouter } from "react-router-dom";
import { lazy, Suspense } from 'react';
import LoadingScreen from "../components/LoadingScreen";
import DashboardLayout from "../components/DashboardLayout";

// Lazy load all pages
const DashboardOverview = lazy(() => import("../pages/DashboardOverview"));
const FeedbackManagement = lazy(() => import("../pages/FeedbackManagement"));
const TeamAnalytics = lazy(() => import("../pages/TeamAnalytics"));
const PerformanceMetrics = lazy(() => import("../pages/PerformanceMetrics"));
const SentimentAnalysis = lazy(() => import("../pages/SentimentAnalysis"));
const ActionItems = lazy(() => import("../pages/ActionItems"));
const Settings = lazy(() => import("../pages/Settings"));

const withSuspense = (Component) => (
  <Suspense fallback={<LoadingScreen />}>
    <DashboardLayout>
      <Component />
    </DashboardLayout>
  </Suspense>
);

export const router = createBrowserRouter([
  {
    path: "/",
    element: withSuspense(DashboardOverview),
  },
  {
    path: "/feedback",
    element: withSuspense(FeedbackManagement),
  },
  {
    path: "/team-analytics",
    element: withSuspense(TeamAnalytics),
  },
  {
    path: "/performance",
    element: withSuspense(PerformanceMetrics),
  },
  {
    path: "/sentiment",
    element: withSuspense(SentimentAnalysis),
  },
  {
    path: "/action-items",
    element: withSuspense(ActionItems),
  },
  {
    path: "/settings",
    element: withSuspense(Settings),
  },
]);