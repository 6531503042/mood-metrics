import { Card, CardHeader, CardBody, Button } from "@nextui-org/react";
import { TrendingUp, Brain, LineChart, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import ExportButton from '../ExportButton';

const AnalyticsCard = ({ title, description, icon: Icon, metrics }) => (
  <motion.div
    whileHover={{ scale: 1.02 }}
    className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg"
  >
    <div className="flex items-start justify-between mb-4">
      <div className="flex items-center gap-3">
        <div className="p-2 bg-purple-100 dark:bg-purple-900/30 rounded-lg">
          <Icon className="w-6 h-6 text-purple-600" />
        </div>
        <h3 className="text-lg font-semibold">{title}</h3>
      </div>
      <Button
        isIconOnly
        size="sm"
        variant="light"
        className="text-purple-600"
      >
        <ChevronRight />
      </Button>
    </div>
    <p className="text-gray-600 dark:text-gray-400 mb-4">{description}</p>
    {metrics && (
      <div className="grid grid-cols-2 gap-4">
        {metrics.map((metric, index) => (
          <div key={index} className="bg-gray-50 dark:bg-gray-900/50 p-3 rounded-lg">
            <p className="text-sm text-gray-500">{metric.label}</p>
            <p className="text-lg font-semibold text-purple-600">{metric.value}</p>
          </div>
        ))}
      </div>
    )}
  </motion.div>
);

const AdvancedAnalytics = () => {
  const analyticsData = [
    {
      title: "Predictive Analytics",
      description: "AI-powered predictions for potential future concerns and trends",
      icon: Brain,
      metrics: [
        { label: "Prediction Accuracy", value: "94%" },
        { label: "Issues Prevented", value: "23" }
      ]
    },
    {
      title: "Interactive Analytics",
      description: "Visual insights into engagement trends and sentiment patterns",
      icon: LineChart,
      metrics: [
        { label: "Active Users", value: "1.2k" },
        { label: "Insights Generated", value: "89" }
      ]
    },
    {
      title: "Impact Tracking",
      description: "Monitor outcomes of HR interventions and satisfaction changes",
      icon: TrendingUp,
      metrics: [
        { label: "Success Rate", value: "87%" },
        { label: "ROI", value: "+32%" }
      ]
    }
  ];

  return (
    <Card className="w-full">
      <CardHeader className="flex justify-between items-center px-6 py-4">
        <div>
          <h2 className="text-2xl font-bold text-purple-700 dark:text-purple-400">
            Advanced Data Analytics
          </h2>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            AI-powered insights and predictive analytics
          </p>
        </div>
        <ExportButton data={analyticsData} filename="advanced-analytics" />
      </CardHeader>
      <CardBody className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
        {analyticsData.map((item, index) => (
          <AnalyticsCard key={index} {...item} />
        ))}
      </CardBody>
    </Card>
  );
};

export default AdvancedAnalytics;