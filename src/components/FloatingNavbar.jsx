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
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();
  const { user } = useAuth();

  const getNavItems = () => {
    const baseItems = [
      { id: 'feedback', label: 'Feedback Management', icon: <MessageSquare size={20} />, path: '/feedback' },
      { id: 'settings', label: 'Settings', icon: <Settings size={20} />, path: '/settings' },
    ];

    if (user?.role === 'admin') {
      return [
        { id: 'dashboard', label: 'Dashboard Overview', icon: <LayoutDashboard size={20} />, path: '/dashboard' },
        ...baseItems,
        { id: 'team-analytics', label: 'Team Analytics', icon: <Users size={20} />, path: '/team-analytics' },
        { id: 'performance', label: 'Performance Metrics', icon: <Activity size={20} />, path: '/performance' },
        { id: 'sentiment', label: 'Sentiment Analysis', icon: <TrendingUp size={20} />, path: '/sentiment' },
        { id: 'action-items', label: 'Action Items', icon: <Target size={20} />, path: '/action-items' },
      ];
    }

    return baseItems;
  };

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
        setIsCollapsed(true);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

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
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 px-4 w-full max-w-2xl"
          >
            <motion.div
              layout
              transition={{ duration: 0.3 }}
              className={`
                ${theme === 'dark' ? 'bg-gray-900/90' : 'bg-white/90'}
                rounded-full shadow-lg p-2 flex items-center gap-2
                backdrop-blur-md border border-purple-500/20
                hover:shadow-xl transition-shadow duration-300
                ${!isCollapsed ? 'justify-center flex-wrap' : 'justify-center'}
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
                  className="flex flex-wrap gap-2 justify-center items-center p-1"
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
                          transition-all duration-300 hover:scale-110
                          ${activePage === item.id 
                            ? 'bg-purple-500 text-white shadow-lg scale-105' 
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
        )}
      </AnimatePresence>
      {loading && <LoadingScreen />}
    </>
  );
};

export default FloatingNavbar;