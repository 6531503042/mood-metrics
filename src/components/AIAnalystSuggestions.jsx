import React from 'react';
import { Card, CardHeader, CardBody, Divider } from "@nextui-org/react";
import { Lightbulb, TrendingUp, Users, Target } from 'lucide-react';
import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";

const gradientBorderAnimation = keyframes`
  0% { border-image-source: linear-gradient(45deg, #FF6B6B, #4ECDC4); }
  50% { border-image-source: linear-gradient(45deg, #45B7D1, #96C93D); }
  100% { border-image-source: linear-gradient(45deg, #FF6B6B, #4ECDC4); }
`;

const neonGlow = keyframes`
  0% { box-shadow: 0 0 5px #FF6B6B, 0 0 10px #FF6B6B, 0 0 15px #FF6B6B; }
  50% { box-shadow: 0 0 10px #4ECDC4, 0 0 20px #4ECDC4, 0 0 30px #4ECDC4; }
  100% { box-shadow: 0 0 5px #FF6B6B, 0 0 10px #FF6B6B, 0 0 15px #FF6B6B; }
`;

const StyledCard = styled(Card)`
  position: relative;
  background: linear-gradient(45deg, rgba(147, 51, 234, 0.9), rgba(236, 72, 153, 0.9), rgba(239, 68, 68, 0.9));
  animation: ${neonGlow} 3s infinite;
  border: 2px solid transparent;
  border-image: linear-gradient(45deg, #FF6B6B, #4ECDC4) 1;
  animation: ${gradientBorderAnimation} 3s infinite;
`;

const AIAnalystSuggestions = ({ suggestions }) => {
  const categories = {
    performance: suggestions.filter(s => s.category === 'performance'),
    engagement: suggestions.filter(s => s.category === 'engagement'),
    improvement: suggestions.filter(s => s.category === 'improvement'),
  };

  return (
    <StyledCard className="w-full mb-6">
      <CardHeader className="flex gap-3">
        <Lightbulb size={24} className="text-white" />
        <div className="flex flex-col">
          <p className="text-xl font-bold text-white">AI-Powered Insights</p>
          <p className="text-small text-white/60">Leveraging advanced machine learning algorithms for data-driven recommendations</p>
        </div>
      </CardHeader>
      <Divider />
      <CardBody>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white/10 p-4 rounded-lg">
            <h3 className="text-lg font-semibold text-white flex items-center mb-2">
              <TrendingUp size={18} className="mr-2" /> Performance Insights
            </h3>
            <p className="text-white/80 mb-2">Our AI has detected a 15% increase in overall team productivity this month.</p>
            <ul className="list-disc pl-5 text-white/80">
              {categories.performance.map((item, index) => (
                <li key={index} className="mb-2">{item.suggestion}</li>
              ))}
            </ul>
          </div>
          <div className="bg-white/10 p-4 rounded-lg">
            <h3 className="text-lg font-semibold text-white flex items-center mb-2">
              <Users size={18} className="mr-2" /> Engagement Analysis
            </h3>
            <p className="text-white/80 mb-2">Employee engagement scores have improved by 8% since implementing the last round of suggestions.</p>
            <ul className="list-disc pl-5 text-white/80">
              {categories.engagement.map((item, index) => (
                <li key={index} className="mb-2">{item.suggestion}</li>
              ))}
            </ul>
          </div>
          <div className="bg-white/10 p-4 rounded-lg">
            <h3 className="text-lg font-semibold text-white flex items-center mb-2">
              <Target size={18} className="mr-2" /> Improvement Opportunities
            </h3>
            <p className="text-white/80 mb-2">Based on natural language processing of recent feedback, we've identified key areas for improvement.</p>
            <ul className="list-disc pl-5 text-white/80">
              {categories.improvement.map((item, index) => (
                <li key={index} className="mb-2">{item.suggestion}</li>
              ))}
            </ul>
          </div>
        </div>
      </CardBody>
    </StyledCard>
  );
};

export default AIAnalystSuggestions;
