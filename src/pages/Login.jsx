import React, { useState } from 'react';
import { Card, CardBody, Input, Button } from "@nextui-org/react";
import { User, Lock } from "lucide-react";
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
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Card className="w-full max-w-md">
          <CardBody className="p-8">
            <div className="flex justify-center mb-6">
              <motion.img
                src="https://ata-it-th.com/wp-content/uploads/2023/03/cropped-ata_bnc.png"
                alt="ATA IT Logo"
                className="h-16"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              />
            </div>
            
            <h2 className="text-2xl font-bold text-center mb-6 text-purple-700 dark:text-purple-400">
              Welcome Back
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                label="Username"
                placeholder="Enter your username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                startContent={<User className="text-purple-500" size={18} />}
                variant="bordered"
                classNames={{
                  input: "text-sm",
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
                }}
              />
              
              <Button
                type="submit"
                color="primary"
                className="w-full bg-purple-600 hover:bg-purple-700"
                size="lg"
              >
                Sign In
              </Button>
            </form>
            
            <div className="mt-4 text-center text-sm text-gray-600 dark:text-gray-400">
              <p>Demo Credentials:</p>
              <p>Admin: admin/admin</p>
              <p>User: user/user</p>
            </div>
          </CardBody>
        </Card>
      </motion.div>
    </div>
  );
};

export default Login;