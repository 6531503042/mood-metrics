import React, { useState, useEffect } from 'react';
import { Button, Tooltip } from "@nextui-org/react";
import { 
  LayoutDashboard, MessageSquare, Users, Activity,
  TrendingUp, Target, Settings, Menu, ChevronRight 
} from "lucide-react";
import { motion, AnimatePresence } from 'framer-motion';
import LoadingScreen from './LoadingScreen';

const FloatingNavbar = ({ theme, setCurrentPage }) => {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [activePage, setActivePage] = useState('dashboard');
  const [loading, setLoading] = useState(false);

  const navItems = [
    { id: 'dashboard', label: 'Dashboard Overview', icon: <LayoutDashboard size={24} /> },
    { id: 'feedback', label: 'Feedback Management', icon: <MessageSquare size={24} /> },
    { id: 'team-analytics', label: 'Team Analytics', icon: <Users size={24} /> },
    { id: 'performance', label: 'Performance Metrics', icon: <Activity size={24} /> },
    { id: 'sentiment', label: 'Sentiment Analysis', icon: <TrendingUp size={24} /> },
    { id: 'action-items', label: 'Action Items', icon: <Target size={24} /> },
    { id: 'hr-management', label: 'HR Management', icon: <Users size={24} /> },
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
    setLoading(true);
    setActivePage(pageId);

    setTimeout(() => {
      setCurrentPage(pageId);
      setLoading(false);
    }, 1000);
  };

  return (
    <>
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className={`fixed bottom-4 ${isCollapsed ? 'right-4' : 'left-1/2 transform -translate-x-1/2'} z-50`}
          >
            <div
              className={`
                ${theme === 'dark' ? 'bg-gray-900' : 'bg-white'}
                rounded-full shadow-lg p-2 flex items-center gap-1
                transition-all duration-300 ease-in-out
                backdrop-blur-md bg-opacity-90
                border border-purple-500/20
                max-w-[90vw] md:max-w-none overflow-x-auto
                scrollbar-hide
              `}
            >
              <Button
                isIconOnly
                variant="light"
                onClick={() => setIsCollapsed(!isCollapsed)}
                className="text-purple-500"
              >
                {isCollapsed ? <Menu size={20} /> : <ChevronRight size={20} />}
              </Button>

              {!isCollapsed && (
                <div className="flex gap-2 overflow-x-auto">
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
                          min-w-[40px] md:min-w-[48px]
                        `}
                      >
                        {item.icon}
                      </Button>
                    </Tooltip>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {loading && <LoadingScreen />}
    </>
  );
};

export default FloatingNavbar;
