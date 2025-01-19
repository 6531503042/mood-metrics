import React, { useState } from 'react';
import { Card, CardHeader, CardBody, Divider, Chip, Progress, Button } from "@nextui-org/react";
import { Lightbulb, TrendingUp, Users, Target, AlertTriangle, AlertCircle, CheckCircle2, ChevronDown, ChevronUp, ArrowRight } from 'lucide-react';
import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";
import { motion, AnimatePresence } from "framer-motion";
import ExportButton from './ExportButton';

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

const DetailCard = styled(motion.div)`
  overflow: hidden;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 0.5rem;
  margin-top: 1rem;
  padding: 1rem;
  border: 1px solid rgba(147, 51, 234, 0.1);
`;

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

const getRiskColor = (risk = 'medium') => {
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

const AIAnalystSuggestions = ({ suggestions = [] }) => {
  const [showAllCards, setShowAllCards] = useState(false);
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
      risk: 'Medium',
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
      risk: 'Low',
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
      risk: 'High',
      confidence: 78,
      suggestions: suggestions?.filter(s => s.category === 'improvement') || [],
      details: [
        "Priority improvement areas",
        "Resource allocation suggestions",
        "Implementation timeline",
        "Expected impact analysis"
      ]
    },
  };

  const visibleCategories = showAllCards 
    ? Object.entries(categories)
    : Object.entries(categories).slice(0, 3);

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
          {visibleCategories.map(([key, category]) => (
            <div 
              key={key} 
              className={`${getRiskColor(category.risk)} border p-4 rounded-lg backdrop-blur-lg transition-all duration-300 hover:scale-102 relative overflow-hidden`}
            >
              <div className="flex flex-col gap-2">
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <h3 className="text-lg font-semibold text-purple-700 flex items-center gap-2">
                    {category.icon}
                    <span className="text-sm sm:text-base">{category.title}</span>
                  </h3>
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1">
                      {getRiskIcon(category.risk)}
                      <Chip size="sm" className={`${getRiskColor(category.risk)} text-purple-700`}>
                        {category.risk} Risk
                      </Chip>
                    </div>
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
                  {category.suggestions.slice(0, 2).map((item, index) => (
                    <li key={index} className="hover:text-purple-700 transition-colors duration-200">
                      {item.suggestion}
                    </li>
                  ))}
                </ul>

                <Button
                  light
                  size="sm"
                  className="mt-2 text-purple-600 text-xs sm:text-sm"
                  endContent={expandedCategories[key] ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                  onPress={() => toggleCategory(key)}
                >
                  {expandedCategories[key] ? "Show Less" : "See More Details"}
                </Button>

                <AnimatePresence>
                  {expandedCategories[key] && (
                    <DetailCard
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="space-y-4">
                        {category.suggestions.slice(2).map((item, index) => (
                          <div key={`extra-${index}`} className="flex items-start gap-2 text-sm text-purple-700/80">
                            <ArrowRight size={16} className="mt-1 flex-shrink-0" />
                            <p>{item.suggestion}</p>
                          </div>
                        ))}
                        
                        <div className="mt-4 pt-4 border-t border-purple-100 dark:border-purple-800">
                          <h4 className="font-semibold text-purple-700 mb-2">Detailed Analysis</h4>
                          <ul className="space-y-2">
                            {category.details.map((detail, index) => (
                              <li key={index} className="flex items-center gap-2 text-sm text-purple-700/80">
                                <div className="w-1.5 h-1.5 rounded-full bg-purple-400"></div>
                                {detail}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </DetailCard>
                  )}
                </AnimatePresence>
              </div>
            </div>
          ))}
        </div>
      </CardBody>
    </StyledCard>
  );
};

export default AIAnalystSuggestions;
