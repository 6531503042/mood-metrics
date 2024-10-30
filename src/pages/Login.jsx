import React, { useState } from 'react';
import { Card, CardBody, Input, Button } from "@nextui-org/react";
import { User, Lock, LogIn } from "lucide-react";
import { useAuth } from '../contexts/AuthContext';
import { motion } from 'framer-motion';
import { useToast } from "@/components/ui/use-toast";

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
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-100 via-white to-blue-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md"
      >
        <Card className="shadow-xl bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm">
          <CardBody className="p-8">
            <div className="flex justify-center mb-8">
              <img
                src="https://ata-it-th.com/wp-content/uploads/2023/03/cropped-ata_bnc.png"
                alt="ATA IT Logo"
                className="h-10 w-auto"
              />
            </div>
            
            <h2 className="text-2xl font-semibold text-center mb-8 text-gray-800 dark:text-gray-200">
              Welcome Back
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <Input
                label="Username"
                placeholder="Enter your username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                startContent={<User className="text-purple-500" size={18} />}
                variant="bordered"
                classNames={{
                  input: "text-sm",
                  inputWrapper: "bg-white/50 dark:bg-gray-800/50",
                }}
              />
              
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
                  inputWrapper: "bg-white/50 dark:bg-gray-800/50",
                }}
              />
              
              <Button
                type="submit"
                color="primary"
                className="w-full bg-purple-600 hover:bg-purple-700 transition-colors"
                size="lg"
                startContent={<LogIn size={18} />}
              >
                Sign In
              </Button>
            </form>
          </CardBody>
        </Card>
      </motion.div>
    </div>
  );
};

export default Login;