import React, { useState } from 'react';
import { Card, CardHeader, CardBody, Button } from "@nextui-org/react";
import { Lightbulb, ChevronDown, ChevronUp } from 'lucide-react';
import GradientBackground from './ai/GradientBackground';
import AIInsightCard from './ai/AIInsightCard';

const AIAnalystSuggestions = ({ suggestions }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const categories = {
    performance: {
      title: 'Performance Insights',
      suggestions: suggestions?.filter(s => s.category === 'performance') || [],
    },
    engagement: {
      title: 'Engagement Analysis',
      suggestions: suggestions?.filter(s => s.category === 'engagement') || [],
    },
    improvement: {
      title: 'Improvement Opportunities',
      suggestions: suggestions?.filter(s => s.category === 'improvement') || [],
    },
  };

  return (
    <GradientBackground>
      <Card className="w-full mb-6 bg-transparent shadow-none">
        <CardHeader className="flex gap-3">
          <Lightbulb size={24} className="text-purple-500" />
          <div className="flex flex-col">
            <p className="text-xl font-bold">AI-Powered Insights</p>
            <p className="text-small text-default-500">
              Leveraging advanced analytics for actionable recommendations
            </p>
          </div>
        </CardHeader>
        <CardBody>
          <div className="space-y-4">
            {Object.entries(categories).slice(0, isExpanded ? undefined : 2).map(([key, category]) => (
              <div key={key} className="space-y-2">
                <h3 className="text-lg font-semibold">{category.title}</h3>
                <div className="space-y-2">
                  {category.suggestions.map((suggestion, index) => (
                    <AIInsightCard key={index} insight={suggestion} />
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          <Button
            className="mt-4 w-full bg-purple-500/10 hover:bg-purple-500/20 text-purple-700"
            endContent={isExpanded ? <ChevronUp /> : <ChevronDown />}
            onClick={() => setIsExpanded(!isExpanded)}
          >
            {isExpanded ? "Show Less" : "See More Insights"}
          </Button>
        </CardBody>
      </Card>
    </GradientBackground>
  );
};

export default AIAnalystSuggestions;