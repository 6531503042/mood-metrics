import React from 'react';
import { Card, CardBody, Progress } from "@nextui-org/react";
import { Brain, AlertTriangle, AlertCircle, CheckCircle2 } from 'lucide-react';

const getRiskIcon = (risk) => {
  switch (risk.toLowerCase()) {
    case 'high':
      return <AlertTriangle className="text-red-500" />;
    case 'medium':
      return <AlertCircle className="text-yellow-500" />;
    case 'low':
      return <CheckCircle2 className="text-green-500" />;
    default:
      return null;
  }
};

const AIInsightCard = ({ insight }) => {
  const { title, description, riskLevel, confidence, actionItems } = insight;

  return (
    <Card className="w-full max-w-md mx-auto mb-4 shadow-lg transition-all duration-300 hover:shadow-xl">
      <CardBody>
        <div className="flex items-center gap-2 mb-4">
          <Brain className="text-purple-500" />
          <h3 className="text-lg font-semibold flex-1">{title}</h3>
          {getRiskIcon(riskLevel)}
        </div>
        
        <div className="mb-4">
          <div className="flex justify-between mb-2">
            <span className="text-sm">AI Confidence</span>
            <span className="text-sm">{confidence}%</span>
          </div>
          <Progress 
            value={confidence}
            color={confidence > 75 ? "success" : confidence > 50 ? "warning" : "danger"}
          />
        </div>

        <p className="text-gray-600 dark:text-gray-300 mb-4 text-base">{description}</p>

        {actionItems && actionItems.length > 0 && (
          <div>
            <h4 className="font-semibold mb-2">Action Items:</h4>
            <ul className="list-disc pl-5 space-y-1">
              {actionItems.map((item, index) => (
                <li key={index} className="text-gray-600 dark:text-gray-300 text-base">{item}</li>
              ))}
            </ul>
          </div>
        )}
      </CardBody>
    </Card>
  );
};

export default AIInsightCard;
