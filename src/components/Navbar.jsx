import React from 'react';
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Button } from "@nextui-org/react";
import { Moon, Sun } from 'lucide-react';
import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";

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
`;

const AppNavbar = ({ theme, toggleTheme }) => {
  return (
    <Navbar 
      isBordered 
      className={`${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-white'} transition-colors duration-200`}
    >
      <NavbarBrand>
        <GradientText>
          Feedback System
        </GradientText>
      </NavbarBrand>
      <NavbarContent justify="end" className="gap-4">
        <NavbarItem>
          <img 
            src="https://ata-it-th.com/wp-content/uploads/2023/03/cropped-ata_bnc.png" 
            alt="ATA IT Logo" 
            className={`h-8 transition-opacity duration-200 ${theme === 'dark' ? 'opacity-90 brightness-110' : ''}`}
          />
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
  );
};

export default AppNavbar;