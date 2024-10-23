import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from "@nextui-org/react";
import { LayoutDashboard, ClipboardList, BarChart2, PieChart, Settings, Users, MessageSquare } from 'lucide-react';
import LoadingScreen from '../components/LoadingScreen'; // Import your LoadingScreen component

const AppSidebar = ({ theme }) => {
  const location = useLocation();
  const [loading, setLoading] = useState(false); // State to control loading

  const isActive = (path) => location.pathname === path;

  const handleNavigation = (path) => {
    setLoading(true); // Set loading state to true
    setTimeout(() => {
      window.location.pathname = path; // Navigate after delay
    }, 1500); // Delay of 1500ms
  };

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
        <Button
          key={item.path}
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
          onClick={() => handleNavigation(item.path)} // Use the navigation handler
        >
          {item.label}
        </Button>
      ))}
      
      {/* Conditionally render loading screen if loading */}
      {loading && <LoadingScreen />}
    </div>
  );
};

export default AppSidebar;
