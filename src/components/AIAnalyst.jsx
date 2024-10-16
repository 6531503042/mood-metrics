import React from 'react';
import { Card, CardHeader, CardBody } from "@nextui-org/react";
import { Lightbulb } from 'lucide-react';

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
        <ul className="list-disc pl-5">
          {suggestions.map((suggestion, index) => (
            <li key={index} className="mb-2">{suggestion}</li>
          ))}
        </ul>
      </CardBody>
    </Card>
  );
};

export default AIAnalyst;