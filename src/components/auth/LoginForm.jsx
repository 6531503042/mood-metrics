import React from 'react';
import { Card, CardHeader, CardBody, Button, Input } from "@nextui-org/react";
import { Mail, Lock, LogIn } from 'lucide-react';
import { motion } from 'framer-motion';

const LoginForm = ({ isAdmin = false }) => {
  const handleLogin = (e) => {
    e.preventDefault();
    // Mock login functionality
    console.log('Login attempted');
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Card className="max-w-md mx-auto">
        <CardHeader className="flex flex-col gap-2">
          <h1 className="text-2xl font-bold text-center">
            {isAdmin ? 'Admin Login' : 'Employee Login'}
          </h1>
          <p className="text-gray-500 text-center">
            {isAdmin 
              ? 'Access the HR management dashboard' 
              : 'Submit and track your feedback'
            }
          </p>
        </CardHeader>
        <CardBody>
          <form onSubmit={handleLogin} className="space-y-4">
            <Input
              label="Email"
              placeholder="Enter your email"
              startContent={<Mail className="text-gray-400" size={16} />}
            />
            <Input
              label="Password"
              type="password"
              placeholder="Enter your password"
              startContent={<Lock className="text-gray-400" size={16} />}
            />
            <Button
              type="submit"
              color="primary"
              className="w-full"
              startContent={<LogIn size={16} />}
            >
              Log In
            </Button>
            {!isAdmin && (
              <Button
                color="secondary"
                className="w-full mt-2"
              >
                Continue with Google
              </Button>
            )}
          </form>
        </CardBody>
      </Card>
    </motion.div>
  );
};

export default LoginForm;