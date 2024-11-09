import { Card, CardBody, CardHeader, Progress, Button } from "@nextui-org/react";
import { MoreVertical, TrendingUp, TrendingDown, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import ExportButton from '../ExportButton';

const UserSegmentation = ({ selectedProject, selectedTeam, selectedDepartment }) => {
  const segmentData = [
    { label: 'Highly Engaged', count: 273, trend: 'up', change: 3, color: '#22C55E' },
    { label: 'Satisfied', count: 108, trend: 'up', change: 5, color: '#3B82F6' },
    { label: 'Neutral', count: 530, trend: 'down', change: 5, color: '#F59E0B' },
    { label: 'At Risk', count: 494, trend: 'down', change: 9, color: '#EF4444' },
    { label: 'New Hire', count: 522, trend: 'down', change: 8, color: '#8B5CF6' },
    { label: 'Veteran Employee', count: 302, trend: 'down', change: 2, color: '#EC4899' },
    { label: 'Leadership', count: 462, trend: 'up', change: 3, color: '#06B6D4' },
    { label: 'Remote Worker', count: 242, trend: 'neutral', change: 0, color: '#14B8A6' }
  ];

  const totalEmployees = segmentData.reduce((acc, curr) => acc + curr.count, 0);

  const projectInfo = selectedProject ? {
    name: selectedProject,
    totalEmployees: totalEmployees,
    departmentBreakdown: {
      engineering: "35%",
      marketing: "25%",
      sales: "20%",
      other: "20%"
    }
  } : null;

  return (
    <Card className="w-full bg-white dark:bg-gray-800 shadow-lg">
      <CardHeader className="flex justify-between items-center px-6 py-4">
        <div>
          <h2 className="text-2xl font-bold text-purple-700 dark:text-purple-400">User Segmentation</h2>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Employee distribution across segments {selectedProject ? `for ${selectedProject}` : ''}
          </p>
        </div>
        <div className="flex items-center gap-4">
          <div className="text-right">
            <p className="text-sm text-gray-600 dark:text-gray-400">Total Employees</p>
            <p className="text-2xl font-bold text-purple-700 dark:text-purple-400">{totalEmployees}</p>
          </div>
          <ExportButton data={segmentData} filename="user-segmentation" />
        </div>
      </CardHeader>
      <CardBody className="px-6">
        <div className="space-y-4">
          {segmentData.map((segment, index) => (
            <motion.div
              key={segment.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group hover:bg-gray-50 dark:hover:bg-gray-700/50 p-3 rounded-lg transition-all duration-200"
            >
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-3">
                  <div 
                    className="w-3 h-3 rounded-full" 
                    style={{ backgroundColor: segment.color }}
                  />
                  <span className="font-medium text-gray-700 dark:text-gray-300">
                    {segment.label}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="font-bold text-gray-900 dark:text-gray-100">
                    {segment.count}
                  </span>
                  <div className={`flex items-center ${
                    segment.trend === 'up' ? 'text-green-500' : 
                    segment.trend === 'down' ? 'text-red-500' : 
                    'text-gray-500'
                  }`}>
                    {segment.trend === 'up' ? <TrendingUp size={16} /> : 
                     segment.trend === 'down' ? <TrendingDown size={16} /> : 
                     '−'}
                    <span className="ml-1 text-sm">
                      {segment.change}%
                    </span>
                  </div>
                  <Button
                    isIconOnly
                    size="sm"
                    variant="light"
                    className="opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <ChevronRight size={16} />
                  </Button>
                </div>
              </div>
              <Progress 
                value={(segment.count / totalEmployees) * 100}
                className="h-2"
                color={segment.trend === 'up' ? "success" : 
                       segment.trend === 'down' ? "danger" : 
                       "warning"}
              />
            </motion.div>
          ))}
        </div>

        {projectInfo && (
          <div className="mt-8 p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
            <h3 className="text-lg font-semibold text-purple-700 mb-4">Project Breakdown</h3>
            <div className="grid grid-cols-2 gap-4">
              {Object.entries(projectInfo.departmentBreakdown).map(([dept, percentage]) => (
                <div key={dept} className="flex justify-between items-center">
                  <span className="capitalize">{dept}</span>
                  <span className="font-semibold">{percentage}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </CardBody>
    </Card>
  );
};

export default UserSegmentation;