import React from 'react';
import { Card, CardHeader, CardBody, Divider } from "@nextui-org/react";
import { Lightbulb } from 'lucide-react';

const AIAnalyst = ({ suggestions }) => {
  const categorizedSuggestions = {
    workEnvironment: suggestions.filter(s => s.category === 'Work Environment'),
    teamCollaboration: suggestions.filter(s => s.category === 'Team Collaboration'),
    performance: suggestions.filter(s => s.category === 'Performance'),
    other: suggestions.filter(s => !['Work Environment', 'Team Collaboration', 'Performance'].includes(s.category))
  };

  const renderSuggestions = (category, suggestions) => (
    <div className="mb-4">
      <h3 className="font-semibold text-lg mb-2">{category}</h3>
      <ul className="list-disc pl-5">
        {suggestions.map((suggestion, index) => (
          <li key={index} className="mb-1">{suggestion.text}</li>
        ))}
      </ul>
    </div>
  );

  return (
    <Card className="w-full mb-6">
      <CardHeader className="flex gap-3">
        <Lightbulb size={24} />
        <div className="flex flex-col">
          <p className="text-md font-bold">AI Analyst Suggestions</p>
          <p className="text-small text-default-500">Based on current feedback data</p>
        </div>
      </CardHeader>
      <Divider />
      <CardBody>
        <div className="mb-4">
          <h3 className="font-semibold text-lg mb-2">Summary</h3>
          <p>{suggestions.find(s => s.category === 'Summary').text}</p>
        </div>
        <Divider className="my-4" />
        {renderSuggestions('Work Environment', categorizedSuggestions.workEnvironment)}
        {renderSuggestions('Team Collaboration', categorizedSuggestions.teamCollaboration)}
        {renderSuggestions('Performance', categorizedSuggestions.performance)}
        {categorizedSuggestions.other.length > 0 && renderSuggestions('Other', categorizedSuggestions.other)}
      </CardBody>
    </Card>
  );
};

export default AIAnalyst;