import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { Card, CardHeader, CardBody } from "@nextui-org/react";
import ExportButton from '../ExportButton';

const FeedbackTrends = ({ data }) => {
  const transformedData = [
    { date: '2024-01', satisfaction: 85, engagement: 88, participation: 92 },
    { date: '2024-02', satisfaction: 87, engagement: 90, participation: 89 },
    { date: '2024-03', satisfaction: 82, engagement: 85, participation: 88 },
    { date: '2024-04', satisfaction: 89, engagement: 92, participation: 94 },
    { date: '2024-05', satisfaction: 91, engagement: 89, participation: 90 },
    { date: '2024-06', satisfaction: 88, engagement: 91, participation: 93 }
  ];

  return (
    <Card className="w-full">
      <CardHeader className="flex justify-between items-center px-6 py-4">
        <div>
          <h2 className="text-2xl font-semibold text-purple-700">Feedback Trends</h2>
          <p className="text-sm text-gray-600">Monthly tracking of key metrics</p>
        </div>
        <ExportButton data={transformedData} filename="feedback-trends" />
      </CardHeader>
      <CardBody>
        <div className="mb-4">
          <div className="grid grid-cols-3 gap-4 mb-6">
            <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
              <p className="text-sm text-gray-600 dark:text-gray-400">Satisfaction</p>
              <p className="text-2xl font-bold text-purple-600">88%</p>
              <p className="text-xs text-gray-500">Avg. this quarter</p>
            </div>
            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <p className="text-sm text-gray-600 dark:text-gray-400">Engagement</p>
              <p className="text-2xl font-bold text-blue-600">90%</p>
              <p className="text-xs text-gray-500">Avg. this quarter</p>
            </div>
            <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
              <p className="text-sm text-gray-600 dark:text-gray-400">Participation</p>
              <p className="text-2xl font-bold text-green-600">92%</p>
              <p className="text-xs text-gray-500">Avg. this quarter</p>
            </div>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={transformedData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" opacity={0.1} />
              <XAxis 
                dataKey="date" 
                stroke="#888888"
                fontSize={12}
                tickLine={false}
              />
              <YAxis 
                stroke="#888888"
                fontSize={12}
                tickLine={false}
                domain={[0, 100]}
              />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'rgba(255, 255, 255, 0.8)',
                  border: 'none',
                  borderRadius: '8px',
                  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
                }}
              />
              <Legend />
              <Line 
                type="monotone" 
                dataKey="satisfaction" 
                name="Satisfaction Rate"
                stroke="#8884d8" 
                strokeWidth={3}
                dot={{ r: 4 }}
                activeDot={{ r: 6 }}
              />
              <Line 
                type="monotone" 
                dataKey="engagement" 
                name="Engagement Score"
                stroke="#82ca9d" 
                strokeWidth={3}
                dot={{ r: 4 }}
                activeDot={{ r: 6 }}
              />
              <Line 
                type="monotone" 
                dataKey="participation" 
                name="Participation Rate"
                stroke="#ffc658" 
                strokeWidth={3}
                dot={{ r: 4 }}
                activeDot={{ r: 6 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardBody>
    </Card>
  );
};

export default FeedbackTrends;