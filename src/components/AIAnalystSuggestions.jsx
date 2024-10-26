import React from 'react';
import { Card, CardHeader, CardBody, Divider, Chip, Progress } from "@nextui-org/react";
import { Lightbulb, TrendingUp, Users, Target, AlertTriangle, AlertCircle, CheckCircle2 } from 'lucide-react';
import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";

const shimmer = keyframes`
  0% { background-position: -1000px 0; }
  100% { background-position: 1000px 0; }
`;

const gradientMove = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const StyledCard = styled(Card)`
  position: relative;
  background: linear-gradient(
    45deg, 
    rgba(59, 130, 246, 0.9),
    rgba(99, 102, 241, 0.9),
    rgba(139, 92, 246, 0.9)
  );
  background-size: 200% 200%;
  animation: ${gradientMove} 15s ease-in-out infinite;
  border-radius: 1rem;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.1),
      transparent
    );
    animation: ${shimmer} 6s infinite;
  }
`;

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

const getRiskColor = (risk) => {
  switch (risk.toLowerCase()) {
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

const AIAnalystSuggestions = ({ suggestions }) => {
  const categories = {
    performance: {
      title: 'Performance Insights',
      icon: <TrendingUp size={18} />,
      risk: 'Medium',
      confidence: 85,
      suggestions: suggestions?.filter(s => s.category === 'performance') || [],
    },
    engagement: {
      title: 'Engagement Analysis',
      icon: <Users size={18} />,
      risk: 'Low',
      confidence: 92,
      suggestions: suggestions?.filter(s => s.category === 'engagement') || [],
    },
    improvement: {
      title: 'Improvement Opportunities',
      icon: <Target size={18} />,
      risk: 'High',
      confidence: 78,
      suggestions: suggestions?.filter(s => s.category === 'improvement') || [],
    },
  };

  return (
    <StyledCard className="w-full mb-6">
      <CardHeader className="flex gap-3">
        <Lightbulb size={24} className="text-white animate-pulse" />
        <div className="flex flex-col">
          <p className="text-xl font-bold text-white">AI-Powered Insights</p>
          <p className="text-small text-white/60">
            Leveraging advanced machine learning algorithms for data-driven recommendations
          </p>
        </div>
      </CardHeader>
      <Divider />
      <CardBody>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {Object.entries(categories).map(([key, category]) => (
            <div 
              key={key} 
              className={`${getRiskColor(category.risk)} border p-4 rounded-lg backdrop-blur-lg transition-all duration-300 hover:scale-105`}
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                  {category.icon}
                  <span>{category.title}</span>
                </h3>
                <div className="flex items-center gap-2">
                  {getRiskIcon(category.risk)}
                  <Chip
                    size="sm"
                    className={`${getRiskColor(category.risk)} text-white`}
                  >
                    {category.risk} Risk
                  </Chip>
                </div>
              </div>
              <div className="mb-4">
                <div className="flex justify-between text-white/80 text-sm mb-1">
                  <span>AI Confidence</span>
                  <span>{category.confidence}%</span>
                </div>
                <Progress 
                  value={category.confidence}
                  color={category.confidence > 85 ? "success" : category.confidence > 70 ? "warning" : "danger"}
                  className="h-2"
                />
              </div>
              <ul className="list-disc pl-5 text-white/80 space-y-2">
                {category.suggestions.map((item, index) => (
                  <li key={index} className="text-sm hover:text-white transition-colors duration-200">
                    {item.suggestion}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </CardBody>
    </StyledCard>
  );
};

export default AIAnalystSuggestions;