import React, { useState } from 'react';
import AppNavbar from './Navbar';
import AppSidebar from './Sidebar';
import { NextUIProvider } from "@nextui-org/react";

const DashboardLayout = ({ children, setCurrentPage }) => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(prevTheme => {
      const newTheme = prevTheme === 'light' ? 'dark' : 'light';
      document.documentElement.classList.toggle('dark');
      return newTheme;
    });
  };

  return (
    <NextUIProvider>
      <div className={theme === 'dark' ? 'dark' : ''}>
        <div className="min-h-screen bg-gray-900 dark:bg-gray-900 transition-colors duration-200">
          <AppNavbar theme={theme} toggleTheme={toggleTheme} />
          <div className="flex">
            <AppSidebar theme={theme} setCurrentPage={setCurrentPage} />
            <main className="flex-grow p-8 bg-gray-900 dark:bg-gray-900">
              <div className="rounded-lg bg-gray-800 dark:bg-gray-800 shadow-lg p-6 transition-colors duration-200">
                {children}
              </div>
            </main>
          </div>
        </div>
      </div>
    </NextUIProvider>
  );
};

export default DashboardLayout;