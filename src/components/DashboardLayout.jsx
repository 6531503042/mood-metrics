import React, { useState } from 'react';
import AppNavbar from './Navbar';
import AppSidebar from './Sidebar';
import { NextUIProvider } from "@nextui-org/react";

const DashboardLayout = ({ children }) => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
    document.documentElement.classList.toggle('dark');
  };

  return (
    <NextUIProvider>
      <div className={`min-h-screen ${theme === 'dark' ? 'dark bg-gray-900' : 'bg-gray-50'}`}>
        <AppNavbar theme={theme} toggleTheme={toggleTheme} />
        <div className="flex">
          <AppSidebar theme={theme} />
          <main className="flex-grow p-8">
            {children}
          </main>
        </div>
      </div>
    </NextUIProvider>
  );
};

export default DashboardLayout;