import React, { useState, useEffect } from 'react';
import { Button, Tooltip, Avatar, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from "@nextui-org/react";
import { Bell, LogOut, User, Shield, Settings } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { navItems } from '../nav-items';
import { useToast } from "@/components/ui/use-toast";

const FloatingNavbar = ({ theme, setCurrentPage }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [activePage, setActivePage] = useState('dashboard');
  const [notifications, setNotifications] = useState([
    { id: 1, type: 'critical', message: 'Urgent feedback requires attention' },
    { id: 2, type: 'reminder', message: 'Weekly feedback submission reminder' }
  ]);
  const { toast } = useToast();

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

  const handleNotificationClick = (notification) => {
    toast({
      title: notification.type === 'critical' ? "Critical Alert" : "Reminder",
      description: notification.message,
      variant: notification.type === 'critical' ? "destructive" : "default",
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.2 }}
          className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-xl px-4"
        >
          <div className={`
            ${theme === 'dark' ? 'bg-gray-900/90' : 'bg-white/90'}
            rounded-full shadow-lg p-2 flex items-center justify-between gap-2
            backdrop-blur-md border border-purple-500/20
          `}>
            <div className="flex items-center gap-2">
              {navItems.map((item) => (
                <Tooltip
                  key={item.id}
                  content={item.title}
                  placement="top"
                >
                  <Button
                    isIconOnly
                    variant={activePage === item.id ? "solid" : "light"}
                    onClick={() => handlePageChange(item.id)}
                    className={`
                      transition-all duration-200
                      ${activePage === item.id 
                        ? 'bg-blue-500 text-white shadow-md scale-105' 
                        : `${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'} hover:text-blue-500`
                      }
                    `}
                  >
                    {item.icon}
                  </Button>
                </Tooltip>
              ))}
            </div>

            <div className="flex items-center gap-2">
              <Dropdown>
                <DropdownTrigger>
                  <Button 
                    isIconOnly
                    variant="light"
                    className="relative"
                  >
                    <Bell className="h-5 w-5" />
                    {notifications.length > 0 && (
                      <span className="absolute -top-1 -right-1 h-3 w-3 bg-red-500 rounded-full animate-pulse" />
                    )}
                  </Button>
                </DropdownTrigger>
                <DropdownMenu aria-label="Notifications">
                  {notifications.map((notification) => (
                    <DropdownItem
                      key={notification.id}
                      className={notification.type === 'critical' ? 'text-red-500' : ''}
                      onClick={() => handleNotificationClick(notification)}
                    >
                      {notification.message}
                    </DropdownItem>
                  ))}
                </DropdownMenu>
              </Dropdown>

              <Dropdown>
                <DropdownTrigger>
                  <Avatar
                    icon={<User className="h-4 w-4" />}
                    className="cursor-pointer"
                  />
                </DropdownTrigger>
                <DropdownMenu aria-label="Profile actions">
                  <DropdownItem startContent={<User className="h-4 w-4" />}>
                    Profile
                  </DropdownItem>
                  <DropdownItem startContent={<Shield className="h-4 w-4" />}>
                    Privacy Settings
                  </DropdownItem>
                  <DropdownItem 
                    startContent={<LogOut className="h-4 w-4" />}
                    className="text-danger"
                  >
                    Log Out
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FloatingNavbar;