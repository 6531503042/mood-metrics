import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

const FeedbackTrends = ({ data }) => {
  // Transform data to include multiple metrics
  const transformedData = data.map(item => ({
    date: item.date,
    satisfaction: item.averageRating * 20, // Convert to percentage
    engagement: Math.round(Math.random() * 30 + 70), // Random engagement score
    participation: Math.round(Math.random() * 20 + 75), // Random participation rate
  }));

  return (
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
          stroke="#8884d8" 
          strokeWidth={3}
          dot={{ r: 4 }}
          activeDot={{ r: 6 }}
        />
        <Line 
          type="monotone" 
          dataKey="engagement" 
          stroke="#82ca9d" 
          strokeWidth={3}
          dot={{ r: 4 }}
          activeDot={{ r: 6 }}
        />
        <Line 
          type="monotone" 
          dataKey="participation" 
          stroke="#ffc658" 
          strokeWidth={3}
          dot={{ r: 4 }}
          activeDot={{ r: 6 }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default FeedbackTrends;