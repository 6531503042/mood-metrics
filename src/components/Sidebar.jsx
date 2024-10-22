import React from 'react';
import { Button } from "@nextui-org/react";
import { LayoutDashboard, ClipboardList, BarChart2, PieChart, Settings, Users, MessageSquare } from 'lucide-react';

const AppSidebar = () => {
  const handleClick = (section) => {
    // Implement navigation or state update logic here
    console.log(`Navigating to ${section}`);
  };

  return (
    <div className="h-screen w-64 bg-purple-100 p-4 space-y-2">
      <Button
        className="w-full mb-2 justify-start"
        startContent={<LayoutDashboard size={24} />}
        variant="light"
        onClick={() => handleClick('Dashboard Overview')}
      >
        Dashboard Overview
      </Button>
      <Button
        className="w-full mb-2 justify-start"
        startContent={<MessageSquare size={24} />}
        variant="light"
        onClick={() => handleClick('Feedback Management')}
      >
        Feedback Management
      </Button>
      <Button
        className="w-full mb-2 justify-start"
        startContent={<Users size={24} />}
        variant="light"
        onClick={() => handleClick('Team Analytics')}
      >
        Team Analytics
      </Button>
      <Button
        className="w-full mb-2 justify-start"
        startContent={<BarChart2 size={24} />}
        variant="light"
        onClick={() => handleClick('Performance Metrics')}
      >
        Performance Metrics
      </Button>
      <Button
        className="w-full mb-2 justify-start"
        startContent={<PieChart size={24} />}
        variant="light"
        onClick={() => handleClick('Sentiment Analysis')}
      >
        Sentiment Analysis
      </Button>
      <Button
        className="w-full mb-2 justify-start"
        startContent={<ClipboardList size={24} />}
        variant="light"
        onClick={() => handleClick('Action Items')}
      >
        Action Items
      </Button>
      <Button
        className="w-full mb-2 justify-start"
        startContent={<Settings size={24} />}
        variant="light"
        onClick={() => handleClick('Settings')}
      >
        Settings
      </Button>
    </div>
  );
};

export default AppSidebar;