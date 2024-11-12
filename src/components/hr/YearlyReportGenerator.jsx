import React from 'react';
import { Card, CardHeader, CardBody, Button } from "@nextui-org/react";
import { FileText, Calendar, BookOpen, Download, Users, TrendingUp, Target, Award, Briefcase } from 'lucide-react';
import { motion } from "framer-motion";

const YearlyReportGenerator = () => {
  const generateReport = (type) => {
    console.log(`Generating ${type} report`);
  };

  const reportTypes = [
    {
      title: "Yearly Summary",
      icon: <Calendar className="text-purple-500" />,
      description: "Comprehensive overview of the year's feedback, metrics, and achievements",
      action: "Generate Summary",
      type: "yearly"
    },
    {
      title: "Strategic Planning",
      icon: <Target className="text-purple-500" />,
      description: "Next year's strategic initiatives and improvement plans",
      action: "Generate Plan",
      type: "plan"
    },
    {
      title: "Performance Analytics",
      icon: <TrendingUp className="text-purple-500" />,
      description: "Detailed performance metrics and trend analysis",
      action: "Generate Report",
      type: "performance"
    },
    {
      title: "Talent Management",
      icon: <Users className="text-purple-500" />,
      description: "Employee development and succession planning",
      action: "Generate Report",
      type: "talent"
    },
    {
      title: "Compliance Report",
      icon: <Briefcase className="text-purple-500" />,
      description: "Regulatory compliance and policy adherence summary",
      action: "Generate Report",
      type: "compliance"
    },
    {
      title: "Recognition & Awards",
      icon: <Award className="text-purple-500" />,
      description: "Employee recognition and achievements documentation",
      action: "Generate Report",
      type: "recognition"
    }
  ];

  return (
    <Card className="w-full mb-6 bg-gradient-to-r from-purple-50 to-blue-50 dark:from-gray-800 dark:to-gray-900">
      <CardHeader className="flex justify-between items-center px-6 py-4">
        <div className="flex gap-3">
          <FileText size={24} className="text-purple-600" />
          <div>
            <p className="text-xl font-bold text-purple-700">HR Documentation Center</p>
            <p className="text-small text-purple-600/60">Generate comprehensive reports and strategic plans</p>
          </div>
        </div>
      </CardHeader>
      <CardBody className="gap-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {reportTypes.map((report, index) => (
            <motion.div
              key={report.type}
              whileHover={{ scale: 1.02 }}
              className="p-4 rounded-lg bg-white/50 dark:bg-gray-800/50 shadow-lg border border-purple-100 dark:border-purple-900"
            >
              <div className="flex items-center gap-3 mb-4">
                {report.icon}
                <h3 className="font-semibold text-purple-700">{report.title}</h3>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                {report.description}
              </p>
              <Button 
                color="secondary"
                endContent={<Download size={16} />}
                onPress={() => generateReport(report.type)}
                className="w-full"
              >
                {report.action}
              </Button>
            </motion.div>
          ))}
        </div>
      </CardBody>
    </Card>
  );
};

export default YearlyReportGenerator;