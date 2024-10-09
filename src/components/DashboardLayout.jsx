import React from 'react';
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button } from "@nextui-org/react";
import { Home, BarChart2, MessageSquare, Settings } from 'lucide-react';

const DashboardLayout = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar isBordered>
        <NavbarBrand>
          <p className="font-bold text-inherit">Feedback System</p>
        </NavbarBrand>
        <NavbarContent className="hidden sm:flex gap-4" justify="center">
          <NavbarItem>
            <Link color="foreground" href="#">
              <Home className="mr-2" size={18} />
              Home
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="#">
              <BarChart2 className="mr-2" size={18} />
              Analytics
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="#">
              <MessageSquare className="mr-2" size={18} />
              Feedback
            </Link>
          </NavbarItem>
        </NavbarContent>
        <NavbarContent justify="end">
          <NavbarItem>
            <Button color="primary" variant="flat">
              <Settings size={18} />
              Settings
            </Button>
          </NavbarItem>
        </NavbarContent>
      </Navbar>
      <main className="container mx-auto px-4 py-8">
        {children}
      </main>
    </div>
  );
};

export default DashboardLayout;