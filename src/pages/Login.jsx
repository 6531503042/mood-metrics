import React, { useState } from 'react';
import { Card, CardBody, Input, Button } from "@nextui-org/react";
import { User, Lock, LogIn } from "lucide-react";
import { useAuth } from '../contexts/AuthContext';
import { motion } from 'framer-motion';
import { useToast } from "@/components/ui/use-toast";
import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";

const gradientAnimation = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const GradientBackground = styled.div`
  background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
  background-size: 400% 400%;
  animation: ${gradientAnimation} 15s ease infinite;
`;

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();
  const { toast } = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();
    const success = login(username, password);
    
    if (!success) {
      toast({
        title: "Login Failed",
        description: "Invalid username or password",
        variant: "destructive",
      });
    }
  };

  return (
    <GradientBackground className="min-h-screen flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Card className="w-full max-w-md backdrop-blur-lg bg-white/90 dark:bg-gray-900/90">
          <CardBody className="p-8">
            <div className="flex justify-center mb-6">
              <motion.img
                src="https://ata-it-th.com/wp-content/uploads/2023/03/cropped-ata_bnc.png"
                alt="ATA IT Logo"
                className="h-12 w-auto"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              />
            </div>
            
            <motion.h2 
              className="text-2xl font-bold text-center mb-6 bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              Welcome Back
            </motion.h2>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <motion.div
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                <Input
                  label="Username"
                  placeholder="Enter your username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  startContent={<User className="text-purple-500" size={18} />}
                  variant="bordered"
                  classNames={{
                    input: "text-sm",
                    inputWrapper: "backdrop-blur-lg bg-white/50 dark:bg-gray-800/50",
                  }}
                />
              </motion.div>
              
              <motion.div
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <Input
                  label="Password"
                  placeholder="Enter your password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  startContent={<Lock className="text-purple-500" size={18} />}
                  variant="bordered"
                  classNames={{
                    input: "text-sm",
                    inputWrapper: "backdrop-blur-lg bg-white/50 dark:bg-gray-800/50",
                  }}
                />
              </motion.div>
              
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                <Button
                  type="submit"
                  color="primary"
                  className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
                  size="lg"
                  startContent={<LogIn size={18} />}
                >
                  Sign In
                </Button>
              </motion.div>
            </form>
          </CardBody>
        </Card>
      </motion.div>
    </GradientBackground>
  );
};

export default Login;