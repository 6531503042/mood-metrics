import { useState } from 'react';
import { Button, Tooltip } from "@nextui-org/react";
import { 
  LayoutDashboard, MessageSquare, Users, Activity,
  TrendingUp, Target, Settings, Menu, ChevronRight 
} from "lucide-react";
import { motion } from 'framer-motion';
import LoadingScreen from './LoadingScreen';

const FloatingNavbar = ({ theme, setCurrentPage }) => {
  const [isCollapsed, setIsCollapsed] = useState(false); // Changed to false
  const [activePage, setActivePage] = useState('dashboard');
  const [loading, setLoading] = useState(false);

  const navItems = [
    { id: 'dashboard', label: 'Dashboard Overview', icon: <LayoutDashboard size={20} /> },
    { id: 'feedback', label: 'Feedback Management', icon: <MessageSquare size={20} /> },
    { id: 'team-analytics', label: 'Team Analytics', icon: <Users size={20} /> },
    { id: 'performance', label: 'Performance Metrics', icon: <Activity size={20} /> },
    { id: 'sentiment', label: 'Sentiment Analysis', icon: <TrendingUp size={20} /> },
    { id: 'action-items', label: 'Action Items', icon: <Target size={20} /> },
    { id: 'settings', label: 'Settings', icon: <Settings size={20} /> },
  ];

  const handlePageChange = (pageId) => {
    setLoading(true);
    setActivePage(pageId);
    setTimeout(() => {
      setCurrentPage(pageId);
      setLoading(false);
    }, 400); // faster loading effect
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="fixed bottom-6 right-6 md:right-10 md:bottom-8 z-50"
      >
        <div
          className={`
            ${theme === 'dark' ? 'bg-gray-900/90' : 'bg-white/90'}
            rounded-full shadow-lg p-2 flex items-center gap-2
            transition-all duration-300
            backdrop-blur-md border border-purple-500/20
            max-w-full overflow-hidden
            ${isCollapsed ? 'justify-end' : 'justify-center md:justify-start'}
          `}
          style={{
            transition: "width 0.4s ease-in-out, opacity 0.4s ease-in-out",
            width: isCollapsed ? "56px" : "100%",
            opacity: isCollapsed ? 0.85 : 1,
          }}
        >
          <Button
            isIconOnly
            variant="light"
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="text-purple-500 hover:scale-105 transition-transform duration-150"
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <motion.div
              animate={{ rotate: isCollapsed ? 0 : 180 }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
            >
              {isCollapsed ? <Menu size={24} /> : <ChevronRight size={24} />}
            </motion.div>
          </Button>

          {!isCollapsed && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="flex flex-wrap md:flex-nowrap gap-2 p-2"
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
                      transition-all duration-200 ease-in-out hover:scale-105
                      ${activePage === item.id 
                        ? 'bg-purple-500 text-white shadow-lg scale-105' 
                        : `${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'} hover:text-purple-500`
                      }
                      min-w-[40px] h-[40px] md:min-w-[44px] md:h-[44px]
                    `}
                    style={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                  >
                    {item.icon}
                  </Button>
                </Tooltip>
              ))}
            </motion.div>
          )}
        </div>
      </motion.div>
      {loading && <LoadingScreen />}
    </>
  );
};

export default FloatingNavbar;
