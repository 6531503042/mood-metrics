import React from 'react';
import { Card, CardHeader, CardBody, Button } from "@nextui-org/react";
import { FileText, Calendar, BookOpen, Download } from 'lucide-react';
import { motion } from "framer-motion";

const YearlyReportGenerator = () => {
  const generateReport = (type) => {
    // This would be implemented to generate different types of reports
    console.log(`Generating ${type} report`);
  };

  return (
    <Card className="w-full mb-6 bg-gradient-to-r from-purple-50 to-blue-50 dark:from-gray-800 dark:to-gray-900">
      <CardHeader className="flex justify-between items-center px-6 py-4">
        <div className="flex gap-3">
          <FileText size={24} className="text-purple-600" />
          <div>
            <p className="text-xl font-bold text-purple-700">HR Documentation Center</p>
            <p className="text-small text-purple-600/60">Generate comprehensive reports and plans</p>
          </div>
        </div>
      </CardHeader>
      <CardBody className="gap-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="p-4 rounded-lg bg-white/50 dark:bg-gray-800/50 shadow-lg border border-purple-100 dark:border-purple-900"
          >
            <div className="flex items-center gap-3 mb-4">
              <Calendar className="text-purple-500" />
              <h3 className="font-semibold text-purple-700">Yearly Summary</h3>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
              Comprehensive overview of the year's feedback, metrics, and achievements
            </p>
            <Button 
              color="secondary"
              endContent={<Download size={16} />}
              onPress={() => generateReport('yearly')}
              className="w-full"
            >
              Generate Summary
            </Button>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.02 }}
            className="p-4 rounded-lg bg-white/50 dark:bg-gray-800/50 shadow-lg border border-purple-100 dark:border-purple-900"
          >
            <div className="flex items-center gap-3 mb-4">
              <BookOpen className="text-purple-500" />
              <h3 className="font-semibold text-purple-700">Next Year Plan</h3>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
              Strategic planning document based on current year's insights
            </p>
            <Button 
              color="secondary"
              endContent={<Download size={16} />}
              onPress={() => generateReport('plan')}
              className="w-full"
            >
              Generate Plan
            </Button>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.02 }}
            className="p-4 rounded-lg bg-white/50 dark:bg-gray-800/50 shadow-lg border border-purple-100 dark:border-purple-900"
          >
            <div className="flex items-center gap-3 mb-4">
              <FileText className="text-purple-500" />
              <h3 className="font-semibold text-purple-700">Custom Report</h3>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
              Generate custom reports with specific metrics and timeframes
            </p>
            <Button 
              color="secondary"
              endContent={<Download size={16} />}
              onPress={() => generateReport('custom')}
              className="w-full"
            >
              Create Custom
            </Button>
          </motion.div>
        </div>
      </CardBody>
    </Card>
  );
};

export default YearlyReportGenerator;