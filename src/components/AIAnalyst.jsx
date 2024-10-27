// import React from 'react';
import { Card, CardHeader, CardBody, Chip } from "@nextui-org/react";
import { Lightbulb, AlertTriangle, AlertCircle, CheckCircle } from 'lucide-react';

const getRiskIcon = (risk) => {
  switch (risk.toLowerCase()) {
    case 'high':
      return <AlertTriangle className="text-red-500" />;
    case 'medium':
      return <AlertCircle className="text-yellow-500" />;
    case 'low':
      return <CheckCircle className="text-green-500" />;
    default:
      return null;
  }
};

const AIAnalyst = ({ suggestions }) => {
  return (
    <Card className="w-full mb-6">
      <CardHeader className="flex gap-3">
        <Lightbulb size={24} />
        <div className="flex flex-col">
          <p className="text-md">AI Analyst Suggestions</p>
          <p className="text-small text-default-500">Based on current feedback data</p>
        </div>
      </CardHeader>
      <CardBody>
        <ul className="space-y-4">
          {suggestions.map((suggestion, index) => (
            <li key={index} className="flex items-start gap-4 p-3 rounded-lg bg-gray-50 dark:bg-gray-800">
              <div className="mt-1">
                {getRiskIcon(suggestion.riskLevel)}
              </div>
              <div className="flex-grow">
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-medium">{suggestion.text}</span>
                  <Chip
                    size="sm"
                    color={
                      suggestion.riskLevel === 'high' ? 'danger' :
                      suggestion.riskLevel === 'medium' ? 'warning' : 'success'
                    }
                  >
                    {suggestion.riskLevel} Risk
                  </Chip>
                  <Chip size="sm" color="primary">
                    {suggestion.confidence}% Confidence
                  </Chip>
                </div>
                {suggestion.actionItems && (
                  <ul className="list-disc pl-5 text-sm text-gray-600 dark:text-gray-400">
                    {suggestion.actionItems.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                )}
              </div>
            </li>
          ))}
        </ul>
      </CardBody>
    </Card>
  );
};

export default AIAnalyst;