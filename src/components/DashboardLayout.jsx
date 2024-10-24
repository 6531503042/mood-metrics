import React, { useState } from 'react';
import AppNavbar from './Navbar';
import FloatingNavbar from './FloatingNavbar';
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
        <div className={`min-h-screen ${theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'} transition-colors duration-200`}>
          <AppNavbar theme={theme} toggleTheme={toggleTheme} />
          <div className="relative">
            <FloatingNavbar theme={theme} setCurrentPage={setCurrentPage} />
            <main className={`flex-grow p-8 ${theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'}`}>
              <div className={`rounded-lg ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} shadow-lg p-6 transition-colors duration-200`}>
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