import React, { useState, useEffect } from 'react';
import { Button, Tooltip } from "@nextui-org/react";
import { 
  LayoutDashboard, MessageSquare, Users, Activity,
  TrendingUp, Target, Settings, Menu, ChevronRight 
} from "lucide-react";
import { motion, AnimatePresence } from 'framer-motion';
import LoadingScreen from './LoadingScreen';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const FloatingNavbar = ({ theme }) => {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [activePage, setActivePage] = useState('dashboard');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { user } = useAuth();

  const getNavItems = () => {
    const baseItems = [
      { id: 'feedback', label: 'Feedback Form', icon: <MessageSquare size={16} />, path: '/feedback' },
    ];

    if (user?.role === 'admin') {
      return [
        { id: 'dashboard', label: 'Dashboard', icon: <LayoutDashboard size={16} />, path: '/dashboard' },
        ...baseItems,
        { id: 'team-analytics', label: 'Team Analytics', icon: <Users size={16} />, path: '/team-analytics' },
        { id: 'performance', label: 'Performance', icon: <Activity size={16} />, path: '/performance' },
        { id: 'sentiment', label: 'Sentiment', icon: <TrendingUp size={16} />, path: '/sentiment' },
        { id: 'action-items', label: 'Actions', icon: <Target size={16} />, path: '/action-items' },
        { id: 'settings', label: 'Settings', icon: <Settings size={16} />, path: '/settings' },
      ];
    }

    return [
      ...baseItems,
      { id: 'settings', label: 'Settings', icon: <Settings size={16} />, path: '/settings' },
    ];
  };

  const handlePageChange = (pageId, path) => {
    setLoading(true);
    setActivePage(pageId);
    setTimeout(() => {
      navigate(path);
      setLoading(false);
    }, 500);
  };

  // Show navbar even when there's no scroll
  useEffect(() => {
    const navbar = document.querySelector('.floating-navbar');
    if (navbar) {
      navbar.style.display = 'block';
    }
  }, []);

  const navItems = getNavItems();

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="floating-navbar fixed bottom-4 left-1/2 -translate-x-1/2 z-50 px-2 w-auto max-w-[95%] sm:max-w-[400px]"
      >
        <motion.div
          layout
          transition={{ duration: 0.2 }}
          className={`
            ${theme === 'dark' ? 'bg-gray-900/90' : 'bg-white/90'}
            rounded-full shadow-lg p-1 flex items-center gap-1
            backdrop-blur-md border border-purple-500/20
            hover:shadow-xl transition-shadow duration-300
          `}
        >
          <Button
            isIconOnly
            variant="light"
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="text-purple-500 w-7 h-7 min-w-7"
          >
            <motion.div
              animate={{ rotate: isCollapsed ? 0 : 180 }}
              transition={{ duration: 0.2 }}
            >
              {isCollapsed ? <Menu size={14} /> : <ChevronRight size={14} />}
            </motion.div>
          </Button>

          {!isCollapsed && (
            <motion.div
              initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: 1, width: "auto" }}
              exit={{ opacity: 0, width: 0 }}
              transition={{ duration: 0.2 }}
              className="flex gap-1 justify-center items-center px-1"
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
                    onClick={() => handlePageChange(item.id, item.path)}
                    className={`
                      transition-all duration-200 hover:scale-105
                      w-7 h-7 min-w-7
                      ${activePage === item.id 
                        ? 'bg-purple-500 text-white shadow-sm' 
                        : `${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'} hover:text-purple-500`
                      }
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