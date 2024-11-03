import { useState } from 'react';
import AppNavbar from './Navbar';
import FloatingNavbar from './FloatingNavbar';
import { NextUIProvider } from "@nextui-org/react";

const DashboardLayout = ({ children, setCurrentPage }) => {
  const [theme, setTheme] = useState('dark'); // Default to dark theme for futuristic look

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
        <div className="gradient-bg min-h-screen transition-colors duration-200">
          <AppNavbar theme={theme} toggleTheme={toggleTheme} />
          
          <div className="relative">
            <FloatingNavbar theme={theme} setCurrentPage={setCurrentPage} />
            
            <main className="flex-grow p-4 md:p-8 pt-16 md:pt-24 transition-all duration-200">
              <div className="futuristic-card rounded-lg p-4 md:p-6 transition-all duration-200">
                {children}
              </div>
            </main>
          </div>

          {/* Decorative Elements */}
          <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-0">
            <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-blue-500/10 rounded-full filter blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-purple-500/10 rounded-full filter blur-3xl"></div>
          </div>
        </div>
      </div>
    </NextUIProvider>
  );
};

export default DashboardLayout;