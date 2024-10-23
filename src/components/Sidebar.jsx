import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from "@nextui-org/react";
import { LayoutDashboard, ClipboardList, BarChart2, PieChart, Settings, Users, MessageSquare } from 'lucide-react';

const AppSidebar = ({ theme }) => {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  const navItems = [
    { path: '/', label: 'Dashboard Overview', icon: <LayoutDashboard size={24} /> },
    { path: '/feedback', label: 'Feedback Management', icon: <MessageSquare size={24} /> },
    { path: '/team-analytics', label: 'Team Analytics', icon: <Users size={24} /> },
    { path: '/performance', label: 'Performance Metrics', icon: <BarChart2 size={24} /> },
    { path: '/sentiment', label: 'Sentiment Analysis', icon: <PieChart size={24} /> },
    { path: '/action-items', label: 'Action Items', icon: <ClipboardList size={24} /> },
    { path: '/settings', label: 'Settings', icon: <Settings size={24} /> },
  ];

  return (
    <div className={`h-screen w-64 ${theme === 'dark' ? 'bg-gray-800' : 'bg-purple-100'} p-4 space-y-2`}>
      {navItems.map((item) => (
        <Link to={item.path} key={item.path}>
          <Button
            className={`w-full mb-2 justify-start ${
              isActive(item.path) 
                ? theme === 'dark' 
                  ? 'bg-gray-700 text-white' 
                  : 'bg-purple-200 text-purple-800'
                : theme === 'dark'
                  ? 'text-gray-300 hover:bg-gray-700'
                  : 'text-gray-800 hover:bg-purple-200'
            }`}
            startContent={item.icon}
            variant="light"
          >
            {item.label}
          </Button>
        </Link>
      ))}
    </div>
  );
};

export default AppSidebar;