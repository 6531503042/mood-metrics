import { useState } from 'react';
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
        {/* Page background color depending on theme */}
        <div className={`min-h-screen ${theme === 'dark' ? 'bg-black' : 'bg-gray-50'} transition-colors duration-200`}>
          {/* Main Navigation */}
          <AppNavbar theme={theme} toggleTheme={toggleTheme} />
          
          {/* Floating Navbar and content */}
          <div className="relative">
            {/* Responsive Floating Navbar */}
            <FloatingNavbar theme={theme} setCurrentPage={setCurrentPage} />
            
            {/* Main Content Area */}
            <main className={`flex-grow p-4 md:p-8 pt-16 md:pt-24 ${theme === 'dark' ? 'bg-black' : 'bg-gray-50'} transition-colors duration-200`}>
              <div className={`rounded-lg ${theme === 'dark' ? 'bg-gray-900' : 'bg-white'} shadow-lg p-4 md:p-6 transition-colors duration-200`}>
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
