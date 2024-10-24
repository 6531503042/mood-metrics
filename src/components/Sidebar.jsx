import React, { useState } from 'react';
import { Button } from "@nextui-org/react";
import { 
  LayoutDashboard, 
  ClipboardList, 
  BarChart2, 
  PieChart, 
  Settings, 
  Users, 
  MessageSquare,
  Activity,
  TrendingUp,
  Target
} from 'lucide-react';
import LoadingScreen from './LoadingScreen';

const AppSidebar = ({ theme, setCurrentPage }) => {
  const [loading, setLoading] = useState(false);
  const [activePage, setActivePage] = useState('dashboard');

  const handleNavigation = (page) => {
    setLoading(true);
    setActivePage(page);
    setCurrentPage(page);
    setTimeout(() => {
      setLoading(false);
    }, 800);
  };

  const navItems = [
    { id: 'dashboard', label: 'Dashboard Overview', icon: <LayoutDashboard size={24} /> },
    { id: 'feedback', label: 'Feedback Management', icon: <MessageSquare size={24} /> },
    { id: 'team-analytics', label: 'Team Analytics', icon: <Users size={24} /> },
    { id: 'performance', label: 'Performance Metrics', icon: <Activity size={24} /> },
    { id: 'sentiment', label: 'Sentiment Analysis', icon: <TrendingUp size={24} /> },
    { id: 'action-items', label: 'Action Items', icon: <Target size={24} /> },
    { id: 'settings', label: 'Settings', icon: <Settings size={24} /> },
  ];

  return (
    <>
      <div className={`h-screen w-64 ${theme === 'dark' ? 'bg-gray-800' : 'bg-purple-100'} p-4 space-y-2`}>
        {navItems.map((item) => (
          <Button
            key={item.id}
            className={`w-full mb-2 justify-start ${
              activePage === item.id
                ? theme === 'dark' 
                  ? 'bg-gray-700 text-white' 
                  : 'bg-purple-200 text-purple-800'
                : theme === 'dark'
                  ? 'text-gray-300 hover:bg-gray-700'
                  : 'text-gray-800 hover:bg-purple-200'
            }`}
            startContent={item.icon}
            variant="light"
            onClick={() => handleNavigation(item.id)}
          >
            {item.label}
          </Button>
        ))}
      </div>
      {loading && <LoadingScreen />}
    </>
  );
};

export default AppSidebar;