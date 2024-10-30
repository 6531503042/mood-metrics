import React, { useState } from 'react';
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
      { id: 'feedback', label: 'Feedback Management', icon: <MessageSquare size={18} />, path: '/feedback' },
    ];

    if (user?.role === 'admin') {
      return [
        { id: 'dashboard', label: 'Dashboard Overview', icon: <LayoutDashboard size={18} />, path: '/dashboard' },
        ...baseItems,
        { id: 'team-analytics', label: 'Team Analytics', icon: <Users size={18} />, path: '/team-analytics' },
        { id: 'performance', label: 'Performance Metrics', icon: <Activity size={18} />, path: '/performance' },
        { id: 'sentiment', label: 'Sentiment Analysis', icon: <TrendingUp size={18} />, path: '/sentiment' },
        { id: 'action-items', label: 'Action Items', icon: <Target size={18} />, path: '/action-items' },
        { id: 'settings', label: 'Settings', icon: <Settings size={18} />, path: '/settings' },
      ];
    }

    return [
      ...baseItems,
      { id: 'settings', label: 'Settings', icon: <Settings size={18} />, path: '/settings' },
    ];
  };

  const handlePageChange = (pageId, path) => {
    setLoading(true);
    setActivePage(pageId);
    setTimeout(() => {
      navigate(path);
      setLoading(false);
    }, 800);
  };

  const navItems = getNavItems();

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 px-4 w-full max-w-lg"
      >
        <motion.div
          layout
          transition={{ duration: 0.3 }}
          className={`
            ${theme === 'dark' ? 'bg-gray-900/90' : 'bg-white/90'}
            rounded-full shadow-lg p-1.5 flex items-center gap-1.5
            backdrop-blur-md border border-purple-500/20
            hover:shadow-xl transition-shadow duration-300
            ${!isCollapsed ? 'justify-center' : 'justify-center'}
          `}
        >
          <Button
            isIconOnly
            variant="light"
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="text-purple-500 w-8 h-8 min-w-8"
          >
            <motion.div
              animate={{ rotate: isCollapsed ? 0 : 180 }}
              transition={{ duration: 0.3 }}
            >
              {isCollapsed ? <Menu size={16} /> : <ChevronRight size={16} />}
            </motion.div>
          </Button>

          {!isCollapsed && (
            <motion.div
              initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: 1, width: "auto" }}
              exit={{ opacity: 0, width: 0 }}
              transition={{ duration: 0.3 }}
              className="flex flex-wrap gap-1.5 justify-center items-center"
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
                      transition-all duration-300 hover:scale-105
                      w-8 h-8 min-w-8
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