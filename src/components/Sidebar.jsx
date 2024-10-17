import React from 'react';
import { Sidebar, SidebarItem } from "@nextui-org/react";
import { BarChart2, Users, Settings, MessageSquare, PieChart } from 'lucide-react';

const AppSidebar = () => {
  return (
    <Sidebar className="h-screen">
      <SidebarItem
        key="feedback-management"
        title="Feedback Management"
        icon={<MessageSquare size={24} />}
      />
      <SidebarItem
        key="user-analytics"
        title="User Analytics"
        icon={<Users size={24} />}
      />
      <SidebarItem
        key="performance-metrics"
        title="Performance Metrics"
        icon={<BarChart2 size={24} />}
      />
      <SidebarItem
        key="sentiment-analysis"
        title="Sentiment Analysis"
        icon={<PieChart size={24} />}
      />
      <SidebarItem
        key="settings"
        title="Settings"
        icon={<Settings size={24} />}
      />
    </Sidebar>
  );
};

export default AppSidebar;