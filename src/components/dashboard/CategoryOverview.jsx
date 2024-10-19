import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';
import { Tooltip as NextUITooltip } from "@nextui-org/react";

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8', '#82ca9d'];

const CategoryOverview = ({ data, filter }) => {
  const filteredData = filter === 'all' ? data : data.filter(item => item.category === filter);

  return (
    <div className="h-[300px]">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={filteredData}
            cx="50%"
            cy="50%"
            labelLine={false}
            outerRadius={80}
            fill="#8884d8"
            dataKey="count"
            label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
          >
            {filteredData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
      <div className="mt-4 flex flex-wrap justify-center">
        {COLORS.map((color, index) => (
          <NextUITooltip key={color} content={`Category ${index + 1}`}>
            <div className="flex items-center mr-4 mb-2">
              <div className="w-4 h-4 rounded-full mr-2" style={{ backgroundColor: color }}></div>
              <span className="text-xs">Category {index + 1}</span>
            </div>
          </NextUITooltip>
        ))}
      </div>
    </div>
  );
};

export default CategoryOverview;