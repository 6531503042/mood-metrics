import React, { useState } from 'react';
import AppNavbar from './Navbar';
import AppSidebar from './Sidebar';
import { NextUIProvider } from "@nextui-org/react";

const DashboardLayout = ({ children }) => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  return (
    <NextUIProvider theme={theme}>
      <div className={`min-h-screen ${theme === 'dark' ? 'dark' : ''}`}>
        <AppNavbar theme={theme} toggleTheme={toggleTheme} />
        <div className="flex">
          <AppSidebar />
          <main className="flex-grow p-8">
            {children}
          </main>
        </div>
      </div>
    </NextUIProvider>
  );
};

export default DashboardLayout;