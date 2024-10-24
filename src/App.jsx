import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { NextUIProvider } from "@nextui-org/react";
import { useState, lazy, Suspense } from 'react';
import LoadingScreen from "./components/LoadingScreen";
import DashboardLayout from "./components/DashboardLayout";

const DashboardOverview = lazy(() => import("./pages/DashboardOverview"));
const FeedbackManagement = lazy(() => import("./pages/FeedbackManagement"));
const TeamAnalytics = lazy(() => import("./pages/TeamAnalytics"));
const PerformanceMetrics = lazy(() => import("./pages/PerformanceMetrics"));
const SentimentAnalysis = lazy(() => import("./pages/SentimentAnalysis"));
const ActionItems = lazy(() => import("./pages/ActionItems"));
const Settings = lazy(() => import("./pages/Settings"));

const queryClient = new QueryClient();

const App = () => {
  const [currentPage, setCurrentPage] = useState('dashboard');

  const renderPage = () => {
    switch(currentPage) {
      case 'dashboard':
        return <DashboardOverview />;
      case 'feedback':
        return <FeedbackManagement />;
      case 'team-analytics':
        return <TeamAnalytics />;
      case 'performance':
        return <PerformanceMetrics />;
      case 'sentiment':
        return <SentimentAnalysis />;
      case 'action-items':
        return <ActionItems />;
      case 'settings':
        return <Settings />;
      default:
        return <DashboardOverview />;
    }
  };

  return (
    <QueryClientProvider client={queryClient}>
      <NextUIProvider>
        <TooltipProvider>
          <Toaster />
          <DashboardLayout setCurrentPage={setCurrentPage}>
            <Suspense fallback={<LoadingScreen />}>
              {renderPage()}
            </Suspense>
          </DashboardLayout>
        </TooltipProvider>
      </NextUIProvider>
    </QueryClientProvider>
  );
};

export default App;