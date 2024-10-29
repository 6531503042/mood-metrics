import React, { useState } from 'react';
import { Button, Tooltip } from "@nextui-org/react";
import { 
  LayoutDashboard, MessageSquare, Users, Activity,
  TrendingUp, Target, Settings, Menu, ChevronRight 
} from "lucide-react";
import { motion, AnimatePresence } from 'framer-motion';
import LoadingScreen from './LoadingScreen';

const FloatingNavbar = ({ theme, setCurrentPage = () => {} }) => {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [activePage, setActivePage] = useState('dashboard');
  const [loading, setLoading] = useState(false);

  const navItems = [
    { id: 'dashboard', label: 'Dashboard Overview', icon: <LayoutDashboard size={20} /> },
    { id: 'feedback', label: 'Feedback Management', icon: <MessageSquare size={20} /> },
    { id: 'team-analytics', label: 'Team Analytics', icon: <Users size={20} /> },
    { id: 'performance', label: 'Performance Metrics', icon: <Activity size={20} /> },
    { id: 'sentiment', label: 'Sentiment Analysis', icon: <TrendingUp size={20} /> },
    { id: 'action-items', label: 'Action Items', icon: <Target size={20} /> },
    { id: 'hr-management', label: 'HR Management', icon: <Users size={20} /> },
    { id: 'settings', label: 'Settings', icon: <Settings size={20} /> },
  ];

  const handlePageChange = (pageId) => {
    setLoading(true);
    setActivePage(pageId);
    setTimeout(() => {
      setCurrentPage(pageId);
      setLoading(false);
    }, 800);
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className={`fixed ${isCollapsed ? 'bottom-4 right-4' : 'bottom-4 left-1/2 -translate-x-1/2'} z-50`}
      >
        <motion.div
          layout
          transition={{ duration: 0.3 }}
          className={`
            ${theme === 'dark' ? 'bg-gray-900/90' : 'bg-white/90'}
            rounded-full shadow-lg p-2 flex items-center gap-2
            backdrop-blur-md
            border border-purple-500/20
            max-w-[95vw] overflow-x-auto scrollbar-hide
            hover:shadow-xl transition-shadow duration-300
            ${!isCollapsed && 'flex-wrap md:flex-nowrap justify-center md:justify-start'}
          `}
        >
          <Button
            isIconOnly
            variant="light"
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="text-purple-500 hover:scale-110 transition-transform duration-300"
          >
            <motion.div
              animate={{ rotate: isCollapsed ? 0 : 180 }}
              transition={{ duration: 0.3 }}
            >
              {isCollapsed ? <Menu size={20} /> : <ChevronRight size={20} />}
            </motion.div>
          </Button>

          {!isCollapsed && (
            <motion.div
              initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: 1, width: "auto" }}
              exit={{ opacity: 0, width: 0 }}
              transition={{ duration: 0.3 }}
              className="flex flex-wrap md:flex-nowrap gap-2 p-2 justify-center md:justify-start"
            >
              {navItems.map((item) => (
                <Tooltip
                  key={item.id}
                  content={item.label}
                  placement="top"
                >
                  <Button
                    isIconOnly
                    variant={activePage === item.id ? "solid" : "light"}
                    onClick={() => handlePageChange(item.id)}
                    className={`
                      transition-all duration-300
                      hover:scale-110
                      ${activePage === item.id 
                        ? 'bg-purple-500 text-white shadow-lg scale-105' 
                        : `${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'} hover:text-purple-500`
                      }
                      min-w-[40px] h-[40px] md:min-w-[44px] md:h-[44px]
                    `}
                  >
                    {item.icon}
                  </Button>
                </Tooltip>
              ))}
            </motion.div>
          )}
        </motion.div>
      </motion.div>
      {loading && <LoadingScreen />}
    </>
  );
};

export default FloatingNavbar;