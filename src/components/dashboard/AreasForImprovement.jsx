import { Card, CardHeader, CardBody, Progress } from "@nextui-org/react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { Briefcase, MessageSquare, TrendingUp, Scale, Users, Crown } from 'lucide-react';
import { motion } from "framer-motion";

const getIcon = (name) => {
  const icons = {
    'Work Environment': <Briefcase className="w-5 h-5" />,
    'Communication': <MessageSquare className="w-5 h-5" />,
    'Career Growth': <TrendingUp className="w-5 h-5" />,
    'Work-Life Balance': <Scale className="w-5 h-5" />,
    'Team Collaboration': <Users className="w-5 h-5" />,
    'Leadership Support': <Crown className="w-5 h-5" />
  };
  return icons[name] || null;
};

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-4 rounded-lg shadow-lg border border-gray-200">
        <p className="font-semibold text-gray-900">{label}</p>
        <p className="text-purple-600">Current: {payload[0].value}%</p>
        <p className="text-blue-600">Target: {payload[1].value}%</p>
        <p className="text-sm text-gray-600 mt-2">
          Gap: {(payload[1].value - payload[0].value).toFixed(1)}%
        </p>
      </div>
    );
  }
  return null;
};

const AreasForImprovement = ({ data }) => {
  const chartData = [
    { name: 'Work Environment', count: data?.workEnvironment || 45, target: 80 },
    { name: 'Communication', count: data?.communication || 65, target: 90 },
    { name: 'Career Growth', count: data?.careerGrowth || 55, target: 85 },
    { name: 'Work-Life Balance', count: data?.workLifeBalance || 70, target: 85 },
    { name: 'Team Collaboration', count: data?.teamCollaboration || 75, target: 90 },
    { name: 'Leadership Support', count: data?.leadershipSupport || 60, target: 85 },
  ];

  return (
    <Card className="w-full bg-white dark:bg-gray-800 shadow-lg">
      <CardHeader className="flex justify-between items-center px-6 py-4">
        <div>
          <h3 className="text-2xl font-bold text-purple-700 dark:text-purple-400">Areas for Improvement</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">Current performance vs target metrics</p>
        </div>
      </CardHeader>
      <CardBody>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 mb-6">
          {chartData.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col items-center p-4 rounded-xl bg-gradient-to-br from-purple-50 to-white dark:from-gray-700 dark:to-gray-800 shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="p-2 rounded-full bg-purple-100 dark:bg-purple-900/30">
                {getIcon(item.name)}
              </div>
              <span className="text-xs mt-2 text-center font-medium text-gray-700 dark:text-gray-300">{item.name}</span>
              <div className="mt-2 w-full">
                <div className="flex justify-between text-xs mb-1">
                  <span className="text-gray-600 dark:text-gray-400">Current</span>
                  <span className="font-semibold text-purple-600">{item.count}%</span>
                </div>
                <Progress 
                  value={(item.count / item.target) * 100}
                  className="h-1.5"
                  color={item.count >= item.target ? "success" : 
                         item.count >= item.target * 0.8 ? "warning" : "danger"}
                />
                <div className="flex justify-between text-xs mt-1">
                  <span className="text-gray-600 dark:text-gray-400">Target</span>
                  <span className="font-semibold text-blue-600">{item.target}%</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="h-[400px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart 
              data={chartData} 
              margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
              barGap={0}
              barSize={20}
            >
              <CartesianGrid strokeDasharray="3 3" opacity={0.1} />
              <XAxis 
                dataKey="name" 
                angle={-45} 
                textAnchor="end" 
                height={80} 
                interval={0} 
                tick={{ fontSize: 12 }}
              />
              <YAxis />
              <Tooltip content={<CustomTooltip />} />
              <Legend />
              <Bar 
                dataKey="count" 
                name="Current Score" 
                fill="rgba(147, 51, 234, 0.7)"
                radius={[4, 4, 0, 0]} 
              />
              <Bar 
                dataKey="target" 
                name="Target Score" 
                fill="rgba(59, 130, 246, 0.7)"
                radius={[4, 4, 0, 0]} 
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardBody>
    </Card>
  );
};

export default AreasForImprovement;