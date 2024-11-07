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
    <div className="relative">
      <div className="absolute top-4 right-4 z-10">
        <ExportButton data={transformedData} filename="feedback-trends" />
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
  );
};

export default FeedbackTrends;