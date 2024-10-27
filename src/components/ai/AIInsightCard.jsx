import React from 'react';
import { Card, CardBody, Progress } from "@nextui-org/react";
import { Brain, AlertTriangle, AlertCircle, CheckCircle2 } from 'lucide-react';

const getRiskIcon = (risk = 'medium') => {
  switch (risk.toLowerCase()) {
    case 'high':
      return <AlertTriangle className="text-red-500" />;
    case 'medium':
      return <AlertCircle className="text-yellow-500" />;
    case 'low':
      return <CheckCircle2 className="text-green-500" />;
    default:
      return <AlertCircle className="text-yellow-500" />;
  }
};

const AIInsightCard = ({ insight = {} }) => {
  const { 
    title = "Insight",
    description = "",
    riskLevel = "medium",
    confidence = 75,
    actionItems = []
  } = insight;

  return (
    <Card className="w-full mb-4">
      <CardBody>
        <div className="flex items-center gap-2 mb-4">
          <Brain className="text-purple-500" />
          <h3 className="text-lg font-semibold">{title}</h3>
          {getRiskIcon(riskLevel)}
        </div>
        
        <div className="mb-4">
          <div className="flex justify-between mb-2">
            <span>AI Confidence</span>
            <span>{confidence}%</span>
          </div>
          <Progress 
            value={confidence}
            color={confidence > 75 ? "success" : confidence > 50 ? "warning" : "danger"}
          />
        </div>

        <p className="text-gray-600 dark:text-gray-300 mb-4">{description}</p>

        {actionItems && actionItems.length > 0 && (
          <div>
            <h4 className="font-semibold mb-2">Action Items:</h4>
            <ul className="list-disc pl-5">
              {actionItems.map((item, index) => (
                <li key={index} className="text-gray-600 dark:text-gray-300">{item}</li>
              ))}
            </ul>
          </div>
        )}
      </CardBody>
    </Card>
  );
};

export default AIInsightCard;