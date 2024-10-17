import React from 'react';
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button } from "@nextui-org/react";
import { Moon, Sun } from 'lucide-react';

const AppNavbar = ({ theme, toggleTheme }) => {
  return (
    <Navbar isBordered>
      <NavbarBrand>
        <p className="font-bold text-inherit">Feedback System</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="#">
            Dashboard
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Submit Feedback
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <Button isIconOnly color="primary" variant="light" onClick={toggleTheme}>
            {theme === 'dark' ? <Sun /> : <Moon />}
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};

export default AppNavbar;