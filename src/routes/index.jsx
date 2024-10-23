import { createBrowserRouter } from "react-router-dom";
import { lazy, Suspense } from 'react';
import LoadingScreen from "../components/LoadingScreen";
import DashboardLayout from "../components/DashboardLayout";

// Preload critical pages
const DashboardOverview = lazy(() => import("../pages/DashboardOverview"), {
  suspense: true,
  prefetch: true
});

// Lazy load other pages
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

// Preload routes configuration
const routes = [
  { path: "/", element: DashboardOverview },
  { path: "/feedback", element: FeedbackManagement },
  { path: "/team-analytics", element: TeamAnalytics },
  { path: "/performance", element: PerformanceMetrics },
  { path: "/sentiment", element: SentimentAnalysis },
  { path: "/action-items", element: ActionItems },
  { path: "/settings", element: Settings }
];

export const router = createBrowserRouter(
  routes.map(route => ({
    path: route.path,
    element: withSuspense(route.element)
  }))
);