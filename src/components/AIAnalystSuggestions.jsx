import React from 'react';
import { Card, CardHeader, CardBody, Divider } from "@nextui-org/react";
import { Lightbulb } from 'lucide-react';

const AIAnalystSuggestions = ({ suggestions }) => {
  const categories = {
    performance: suggestions.filter(s => s.category === 'performance'),
    engagement: suggestions.filter(s => s.category === 'engagement'),
    improvement: suggestions.filter(s => s.category === 'improvement'),
  };

  return (
    <Card className="w-full mb-6 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
      <CardHeader className="flex gap-3">
        <Lightbulb size={24} className="text-white" />
        <div className="flex flex-col">
          <p className="text-xl font-bold text-white">AI Analyst Insights</p>
          <p className="text-small text-white/60">Futuristic recommendations based on advanced algorithms</p>
        </div>
      </CardHeader>
      <Divider />
      <CardBody>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {Object.entries(categories).map(([category, items]) => (
            <div key={category} className="bg-white/10 p-4 rounded-lg">
              <h3 className="text-lg font-semibold text-white capitalize mb-2">{category}</h3>
              <ul className="list-disc pl-5 text-white/80">
                {items.map((item, index) => (
                  <li key={index} className="mb-2">{item.suggestion}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </CardBody>
    </Card>
  );
};

export default AIAnalystSuggestions;