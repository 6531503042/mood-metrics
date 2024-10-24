import React, { useState, useEffect } from 'react';
import { Button, Tooltip } from "@nextui-org/react";
import { 
  LayoutDashboard, MessageSquare, Users, Activity,
  TrendingUp, Target, Settings, ChevronRight, ChevronLeft 
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const FloatingNavbar = ({ theme, setCurrentPage }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [activePage, setActivePage] = useState('dashboard');

  const navItems = [
    { id: 'dashboard', label: 'Dashboard Overview', icon: <LayoutDashboard size={24} /> },
    { id: 'feedback', label: 'Feedback Management', icon: <MessageSquare size={24} /> },
    { id: 'team-analytics', label: 'Team Analytics', icon: <Users size={24} /> },
    { id: 'performance', label: 'Performance Metrics', icon: <Activity size={24} /> },
    { id: 'sentiment', label: 'Sentiment Analysis', icon: <TrendingUp size={24} /> },
    { id: 'action-items', label: 'Action Items', icon: <Target size={24} /> },
    { id: 'settings', label: 'Settings', icon: <Settings size={24} /> },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsVisible(currentScrollY < lastScrollY || currentScrollY < 100);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const handlePageChange = (pageId) => {
    setActivePage(pageId);
    setCurrentPage(pageId);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50"
        >
          <div
            className={`
              ${theme === 'dark' ? 'bg-gray-900' : 'bg-white'}
              rounded-full shadow-lg p-2 flex items-center gap-2
              transition-all duration-300 ease-in-out
              backdrop-blur-md bg-opacity-90
              border border-purple-500/20
            `}
          >
            <Button
              isIconOnly
              variant="light"
              onClick={() => setIsCollapsed(!isCollapsed)}
              className="text-purple-500"
            >
              {isCollapsed ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
            </Button>

            <div className="flex gap-2">
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
                        ? 'bg-purple-500 text-white shadow-lg scale-110' 
                        : `${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'} hover:text-purple-500`
                      }
                    `}
                  >
                    {item.icon}
                  </Button>
                </Tooltip>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FloatingNavbar;