import React, { useState } from 'react';
import { Card, CardHeader, CardBody, Divider, Chip } from "@nextui-org/react";
import { Lightbulb, TrendingUp, Users, Target, AlertTriangle, AlertCircle, CheckCircle } from 'lucide-react';
import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";
import ExportButton from './ExportButton';
import InsightCard from './ai/InsightCard';

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

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, rgba(126, 214, 223, 0.1), rgba(104, 109, 224, 0.1));
    pointer-events: none;
  }
`;

const getPriorityIcon = (priority) => {
  switch (priority.toLowerCase()) {
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

const AIAnalystSuggestions = ({ suggestions = [] }) => {
  const [expandedCategories, setExpandedCategories] = useState({});

  const toggleCategory = (key) => {
    setExpandedCategories(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const categories = {
    performance: {
      title: 'Performance Insights',
      icon: <TrendingUp size={18} />,
      priority: 'High',
      confidence: 85,
      suggestions: suggestions?.filter(s => s.category === 'performance') || [],
      details: [
        "Detailed performance metrics analysis",
        "Historical trend comparison",
        "Peer benchmarking data",
        "Optimization recommendations"
      ]
    },
    engagement: {
      title: 'Engagement Analysis',
      icon: <Users size={18} />,
      priority: 'Medium',
      confidence: 92,
      suggestions: suggestions?.filter(s => s.category === 'engagement') || [],
      details: [
        "User interaction patterns",
        "Engagement rate trends",
        "Retention metrics",
        "Community participation insights"
      ]
    },
    improvement: {
      title: 'Improvement Opportunities',
      icon: <Target size={18} />,
      priority: 'Low',
      confidence: 78,
      suggestions: suggestions?.filter(s => s.category === 'improvement') || [],
      details: [
        "Priority improvement areas",
        "Resource allocation suggestions",
        "Implementation timeline",
        "Expected impact analysis"
      ]
    }
  };

  return (
    <StyledCard className="w-full mb-6 relative z-10">
      <CardHeader className="flex justify-between items-center px-6 py-4">
        <div className="flex gap-3">
          <Lightbulb size={24} className="text-purple-600 animate-pulse" />
          <div className="flex flex-col">
            <p className="text-xl font-bold text-purple-700">AI-Powered Insights</p>
            <p className="text-small text-purple-600/60">
              Leveraging advanced machine learning algorithms for data-driven recommendations
            </p>
          </div>
        </div>
        <ExportButton data={suggestions} filename="ai-insights" />
      </CardHeader>
      <Divider />
      <CardBody className="relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {Object.entries(categories).map(([key, category]) => (
            <div key={key} className="relative">
              <Chip
                size="sm"
                className="absolute top-2 right-2 z-10"
                color={
                  category.priority === 'High' ? 'danger' :
                  category.priority === 'Medium' ? 'warning' : 'success'
                }
              >
                {getPriorityIcon(category.priority)}
                <span className="ml-1">{category.priority} Priority</span>
              </Chip>
              <InsightCard
                category={category}
                expanded={expandedCategories[key]}
                onToggle={() => toggleCategory(key)}
              />
            </div>
          ))}
        </div>
      </CardBody>
    </StyledCard>
  );
};

export default AIAnalystSuggestions;