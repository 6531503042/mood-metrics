import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { NextUIProvider } from "@nextui-org/react";
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useState, lazy, Suspense } from 'react';
import LoadingScreen from "./components/LoadingScreen";
import DashboardLayout from "./components/DashboardLayout";
import Login from "./pages/Login";
import { AuthProvider, useAuth } from './contexts/AuthContext';

const DashboardOverview = lazy(() => import("./pages/DashboardOverview"));
const FeedbackManagement = lazy(() => import("./pages/FeedbackManagement"));
const TeamAnalytics = lazy(() => import("./pages/TeamAnalytics"));
const PerformanceMetrics = lazy(() => import("./pages/PerformanceMetrics"));
const SentimentAnalysis = lazy(() => import("./pages/SentimentAnalysis"));
const ActionItems = lazy(() => import("./pages/ActionItems"));
const Settings = lazy(() => import("./pages/Settings"));

const queryClient = new QueryClient();

const ProtectedRoute = ({ children, allowedRoles }) => {
  const { user } = useAuth();
  
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  if (allowedRoles && !allowedRoles.includes(user.role)) {
    return <Navigate to={user.role === 'user' ? '/feedback' : '/dashboard'} replace />;
  }

  return children;
};

const App = () => {
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <NextUIProvider>
          <TooltipProvider>
            <AuthProvider>
              <Toaster />
              <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/" element={<Navigate to="/login" replace />} />
                
                <Route path="/dashboard" element={
                  <ProtectedRoute allowedRoles={['admin']}>
                    <DashboardLayout>
                      <Suspense fallback={<LoadingScreen />}>
                        <DashboardOverview />
                      </Suspense>
                    </DashboardLayout>
                  </ProtectedRoute>
                } />

                <Route path="/feedback" element={
                  <ProtectedRoute>
                    <DashboardLayout>
                      <Suspense fallback={<LoadingScreen />}>
                        <FeedbackManagement />
                      </Suspense>
                    </DashboardLayout>
                  </ProtectedRoute>
                } />

                {/* Admin-only routes */}
                {['team-analytics', 'performance', 'sentiment', 'action-items', 'settings'].map(path => (
                  <Route
                    key={path}
                    path={`/${path}`}
                    element={
                      <ProtectedRoute allowedRoles={['admin']}>
                        <DashboardLayout>
                          <Suspense fallback={<LoadingScreen />}>
                            {(() => {
                              switch (path) {
                                case 'team-analytics': return <TeamAnalytics />;
                                case 'performance': return <PerformanceMetrics />;
                                case 'sentiment': return <SentimentAnalysis />;
                                case 'action-items': return <ActionItems />;
                                case 'settings': return <Settings />;
                                default: return null;
                              }
                            })()}
                          </Suspense>
                        </DashboardLayout>
                      </ProtectedRoute>
                    }
                  />
                ))}
              </Routes>
            </AuthProvider>
          </TooltipProvider>
        </NextUIProvider>
      </QueryClientProvider>
    </BrowserRouter>
  );
};

export default App;