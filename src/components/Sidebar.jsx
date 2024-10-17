import React from 'react';
import { Button } from "@nextui-org/react";
import { BarChart2, Users, MessageSquare, PieChart, Settings } from 'lucide-react';

const AppSidebar = () => {
  return (
    <div className="h-screen w-64 bg-gray-100 p-4">
      <Button
        className="w-full mb-2 justify-start"
        startContent={<MessageSquare size={24} />}
        variant="light"
      >
        Feedback Management
      </Button>
      <Button
        className="w-full mb-2 justify-start"
        startContent={<Users size={24} />}
        variant="light"
      >
        Team Analytics
      </Button>
      <Button
        className="w-full mb-2 justify-start"
        startContent={<BarChart2 size={24} />}
        variant="light"
      >
        Performance Metrics
      </Button>
      <Button
        className="w-full mb-2 justify-start"
        startContent={<PieChart size={24} />}
        variant="light"
      >
        Sentiment Analysis
      </Button>
      <Button
        className="w-full mb-2 justify-start"
        startContent={<Settings size={24} />}
        variant="light"
      >
        Settings
      </Button>
    </div>
  );
};

export default AppSidebar;