import React, { useState } from 'react';
import { Card, CardHeader, CardBody, Divider, Chip, Progress, Button } from "@nextui-org/react";
import { Lightbulb, TrendingUp, Users, Target, AlertTriangle, AlertCircle, CheckCircle2, ChevronDown, ChevronUp } from 'lucide-react';
import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";

const backgroundShift = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const StyledCard = styled(Card)`
  position: relative;
  overflow: hidden;
  background: linear-gradient(135deg, #f6f9fc, #eef2f7);
  background-size: 200% 200%;
  animation: ${backgroundShift} 15s ease infinite;

  &.dark {
    background: linear-gradient(135deg, #1a1f2c, #2d3748);
  }
`;

const getPriorityColor = (priority) => {
  switch (priority.toLowerCase()) {
    case 'high':
      return 'bg-red-500/20 border-red-500';
    case 'medium':
      return 'bg-yellow-500/20 border-yellow-500';
    case 'low':
      return 'bg-green-500/20 border-green-500';
    default:
      return 'bg-blue-500/20 border-blue-500';
  }
};

const getPriorityIcon = (priority) => {
  switch (priority.toLowerCase()) {
    case 'high':
      return <AlertTriangle className="text-red-500" />;
    case 'medium':
      return <AlertCircle className="text-yellow-500" />;
    case 'low':
      return <CheckCircle2 className="text-green-500" />;
    default:
      return <AlertCircle className="text-blue-500" />;
  }
};

const categories = {
  performance: {
    title: 'Performance Insights',
    icon: <TrendingUp size={18} />,
    priority: 'high',
    confidence: 85,
  },
  engagement: {
    title: 'Engagement Analysis',
    icon: <Users size={18} />,
    priority: 'medium',
    confidence: 92,
  },
  improvement: {
    title: 'Improvement Opportunities',
    icon: <Target size={18} />,
    priority: 'high',
    confidence: 78,
  },
  'work-life': {
    title: 'Work-Life Balance',
    icon: <Target size={18} />,
    priority: 'medium',
    confidence: 88,
  },
};

const AIAnalystSuggestions = ({ suggestions = [] }) => {
  const [showAllCards, setShowAllCards] = useState(false);
  const [expandedCategory, setExpandedCategory] = useState(null);

  // Sort categories by priority
  const sortedCategories = Object.entries(categories).sort((a, b) => {
    const priorityOrder = { high: 0, medium: 1, low: 2 };
    return priorityOrder[a[1].priority] - priorityOrder[b[1].priority];
  });

  const visibleCategories = showAllCards 
    ? sortedCategories
    : sortedCategories.slice(0, 3);

  return (
    <StyledCard className="w-full mb-6">
      <CardHeader className="flex gap-3">
        <Lightbulb size={24} className="text-purple-600 animate-pulse" />
        <div className="flex flex-col">
          <p className="text-xl font-bold text-purple-700">AI-Powered Insights</p>
          <p className="text-small text-purple-600/60">
            Leveraging advanced ML for data-driven recommendations
          </p>
        </div>
      </CardHeader>
      <Divider />
      <CardBody>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {visibleCategories.map(([key, category]) => (
            <div 
              key={key} 
              className={`${getPriorityColor(category.priority)} border p-4 rounded-lg backdrop-blur-lg transition-all duration-300 hover:scale-102`}
            >
              <div className="flex flex-col gap-2">
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <h3 className="text-lg font-semibold text-purple-700 flex items-center gap-2">
                    {category.icon}
                    <span className="text-sm sm:text-base">{category.title}</span>
                  </h3>
                  <div className="flex items-center gap-1 sm:gap-2 flex-wrap">
                    {getPriorityIcon(category.priority)}
                    <Chip
                      size="sm"
                      className={`${getPriorityColor(category.priority)} text-purple-700 text-xs sm:text-sm whitespace-nowrap`}
                    >
                      {category.priority.charAt(0).toUpperCase() + category.priority.slice(1)} Priority
                    </Chip>
                  </div>
                </div>
                <div className="mb-2">
                  <div className="flex justify-between text-purple-700/80 text-xs sm:text-sm mb-1">
                    <span>AI Confidence</span>
                    <span>{category.confidence}%</span>
                  </div>
                  <Progress 
                    value={category.confidence}
                    color={category.confidence > 85 ? "success" : category.confidence > 70 ? "warning" : "danger"}
                    className="h-2"
                  />
                </div>
                <ul className="list-disc pl-5 text-purple-700/80 space-y-2 text-xs sm:text-sm">
                  {suggestions
                    .filter(s => s.category === key)
                    .slice(0, expandedCategory === key ? undefined : 2)
                    .map((item, index) => (
                      <li key={index} className="hover:text-purple-700 transition-colors duration-200">
                        {item.suggestion}
                      </li>
                    ))}
                </ul>
                {suggestions.filter(s => s.category === key).length > 2 && (
                  <Button
                    light
                    size="sm"
                    className="mt-2 text-purple-600 text-xs sm:text-sm"
                    endContent={expandedCategory === key ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                    onPress={() => setExpandedCategory(expandedCategory === key ? null : key)}
                  >
                    {expandedCategory === key ? "Show Less" : "See More"}
                  </Button>
                )}
              </div>
            </div>
          ))}
        </div>
        {Object.keys(categories).length > 3 && (
          <div className="flex justify-center mt-4">
            <Button
              color="secondary"
              variant="flat"
              onPress={() => setShowAllCards(!showAllCards)}
              endContent={showAllCards ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            >
              {showAllCards ? "Show Less" : "Show More Insights"}
            </Button>
          </div>
        )}
      </CardBody>
    </StyledCard>
  );
};

export default AIAnalystSuggestions;