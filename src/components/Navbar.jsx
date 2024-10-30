import React, { useState } from 'react';
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Button, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from "@nextui-org/react";
import { Moon, Sun, User } from 'lucide-react';
import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import LoadingScreen from './LoadingScreen';
import { useAuth } from '../contexts/AuthContext';

const gradientAnimation = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const GradientText = styled.p`
  background: linear-gradient(45deg, #FF6B6B, #4ECDC4, #45B7D1, #96C93D);
  background-size: 300% 300%;
  -webkit-background-clip: text;
  color: transparent;
  animation: ${gradientAnimation} 10s ease infinite;
  font-size: 1.5rem;
  font-weight: bold;
  cursor: pointer;
  @media (max-width: 640px) {
    font-size: 1.25rem;
  }
`;

const AppNavbar = ({ theme, toggleTheme }) => {
  const [loading, setLoading] = useState(false);
  const { user, logout } = useAuth();

  const handleBrandClick = () => {
    setLoading(true);
    setTimeout(() => {
      window.location.reload();
    }, 1500);
  };

  return (
    <>
      {loading && <LoadingScreen />}
      <Navbar
        isBordered
        className={`${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-white'} transition-colors duration-200`}
      >
        <NavbarBrand>
          <div onClick={handleBrandClick} className="flex items-center">
            <GradientText>
              Feedback System
            </GradientText>
          </div>
        </NavbarBrand>
        <NavbarContent justify="end" className="gap-2 sm:gap-4">
          <NavbarItem className="flex items-center">
            <img 
              src="https://ata-it-th.com/wp-content/uploads/2023/03/cropped-ata_bnc.png" 
              alt="ATA IT Logo" 
              className={`h-6 w-auto object-contain transition-opacity duration-200 ${theme === 'dark' ? 'opacity-90 brightness-110 filter invert' : ''}`}
            />
          </NavbarItem>
          <NavbarItem>
            <Dropdown>
              <DropdownTrigger>
                <Button 
                  isIconOnly 
                  variant="light"
                  className="bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-full p-1"
                >
                  <User size={18} />
                </Button>
              </DropdownTrigger>
              <DropdownMenu aria-label="User actions">
                <DropdownItem key="role" className="text-purple-600 font-semibold">
                  {user?.role === 'admin' ? '👑 Admin' : '👤 User'}
                </DropdownItem>
                <DropdownItem key="logout" className="text-danger" color="danger" onClick={logout}>
                  Logout
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </NavbarItem>
          <NavbarItem>
            <Button 
              isIconOnly 
              variant="light" 
              onClick={toggleTheme}
              className={theme === 'dark' ? 'text-white' : 'text-gray-800'}
            >
              {theme === 'dark' ? <Sun /> : <Moon />}
            </Button>
          </NavbarItem>
        </NavbarContent>
      </Navbar>
    </>
  );
};

export default AppNavbar;