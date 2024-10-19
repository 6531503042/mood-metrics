import React from 'react';
import { Progress } from "@nextui-org/react";
import { Activity, Zap, Target, Lightbulb } from 'lucide-react';

const MetricIcon = ({ name }) => {
  switch (name) {
    case 'Productivity':
      return <Activity size={16} />;
    case 'Quality':
      return <Target size={16} />;
    case 'Efficiency':
      return <Zap size={16} />;
    case 'Innovation':
      return <Lightbulb size={16} />;
    default:
      return null;
  }
};

const PerformanceMetrics = ({ data }) => {
  return (
    <div className="space-y-4">
      {data.map((metric) => (
        <div key={metric.name} className="flex items-center">
          <div className="w-1/4 flex items-center">
            <MetricIcon name={metric.name} />
            <span className="ml-2 text-sm">{metric.name}</span>
          </div>
          <div className="w-3/4">
            <Progress
              value={metric.value}
              className="max-w-md"
              color="primary"
              showValueLabel={true}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default PerformanceMetrics;