import React, { useState } from 'react';
import { Card, CardHeader, CardBody, Divider, Chip, Progress, Button, Select, SelectItem } from "@nextui-org/react";
import { Lightbulb, TrendingUp, Users, Target, AlertTriangle, AlertCircle, CheckCircle2, ChevronDown, ChevronUp, Filter, Brain, Activity } from 'lucide-react';
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

const getPriorityColor = (score) => {
  if (score >= 80) return "success";
  if (score >= 60) return "warning";
  return "danger";
};

const getPriorityLabel = (score) => {
  if (score >= 80) return "Low Priority";
  if (score >= 60) return "Medium Priority";
  return "High Priority";
};

const AIAnalystSuggestions = ({ suggestions = [] }) => {
  const [showAllCards, setShowAllCards] = useState(false);
  const [expandedCategory, setExpandedCategory] = useState(null);
  const [selectedTimeframe, setSelectedTimeframe] = useState("quarter");
  const [selectedDepartment, setSelectedDepartment] = useState("all");

  const categories = {
    trends: {
      title: 'Recurring Themes',
      icon: <TrendingUp size={18} />,
      suggestions: suggestions.filter(s => s.category === 'trends'),
    },
    sentiment: {
      title: 'Department Sentiment',
      icon: <Users size={18} />,
      suggestions: suggestions.filter(s => s.category === 'sentiment'),
    },
    critical: {
      title: 'Critical Actions',
      icon: <AlertTriangle size={18} />,
      suggestions: suggestions.filter(s => s.category === 'critical'),
    },
    performance: {
      title: 'Performance Insights',
      icon: <Activity size={18} />,
      suggestions: suggestions.filter(s => s.category === 'performance'),
    },
    wellbeing: {
      title: 'Employee Well-being',
      icon: <Target size={18} />,
      suggestions: suggestions.filter(s => s.category === 'wellbeing'),
    }
  };

  const visibleCategories = showAllCards 
    ? Object.entries(categories)
    : Object.entries(categories).slice(0, 3);

  return (
    <StyledCard className="w-full mb-6">
      <CardHeader className="flex flex-col gap-3">
        <div className="flex justify-between items-center w-full">
          <div className="flex items-center gap-2">
            <Brain size={24} className="text-purple-600" />
            <div>
              <p className="text-xl font-bold text-purple-700">HR Insights & Actions</p>
              <p className="text-small text-purple-600/60">AI-powered analysis for HR decision making</p>
            </div>
          </div>
          <div className="flex gap-2">
            <Select 
              size="sm"
              placeholder="Timeframe" 
              defaultSelectedKeys={["quarter"]}
              onChange={(e) => setSelectedTimeframe(e.target.value)}
              startContent={<Filter size={16} />}
              className="w-32"
            >
              <SelectItem key="week" value="week">Past Week</SelectItem>
              <SelectItem key="month" value="month">Past Month</SelectItem>
              <SelectItem key="quarter" value="quarter">Past Quarter</SelectItem>
              <SelectItem key="year" value="year">Past Year</SelectItem>
            </Select>
            <Select 
              size="sm"
              placeholder="Department" 
              defaultSelectedKeys={["all"]}
              onChange={(e) => setSelectedDepartment(e.target.value)}
              startContent={<Users size={16} />}
              className="w-40"
            >
              <SelectItem key="all" value="all">All Departments</SelectItem>
              <SelectItem key="it" value="it">IT</SelectItem>
              <SelectItem key="hr" value="hr">HR</SelectItem>
              <SelectItem key="finance" value="finance">Finance</SelectItem>
              <SelectItem key="marketing" value="marketing">Marketing</SelectItem>
            </Select>
          </div>
        </div>
      </CardHeader>
      <Divider />
      <CardBody>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {visibleCategories.map(([key, category]) => (
            <Card 
              key={key} 
              className={`shadow-md hover:shadow-lg transition-all duration-300 ${
                category.suggestions.some(s => s.metrics?.score < 60) 
                  ? 'bg-red-50 dark:bg-red-900/20' 
                  : category.suggestions.some(s => s.metrics?.score < 80)
                    ? 'bg-yellow-50 dark:bg-yellow-900/20'
                    : 'bg-green-50 dark:bg-green-900/20'
              }`}
            >
              <CardHeader className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  {category.icon}
                  <h3 className="text-lg font-semibold">{category.title}</h3>
                </div>
                {category.suggestions.length > 2 && (
                  <Button
                    size="sm"
                    variant="light"
                    onClick={() => setExpandedCategory(expandedCategory === key ? null : key)}
                  >
                    {expandedCategory === key ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                  </Button>
                )}
              </CardHeader>
              <CardBody>
                <ul className="space-y-3">
                  {category.suggestions
                    .sort((a, b) => (b.metrics?.score || 0) - (a.metrics?.score || 0))
                    .slice(0, expandedCategory === key ? undefined : 2)
                    .map((item, index) => (
                      <li key={index} className="flex items-start gap-3 p-2 rounded-lg bg-white/50 dark:bg-gray-700/50">
                        <div className="flex-grow">
                          <div className="flex items-center gap-2 mb-2">
                            <p className="text-sm flex-grow">{item.suggestion}</p>
                            <Chip 
                              size="sm" 
                              color={getPriorityColor(item.metrics?.score || 0)}
                              variant="flat"
                            >
                              {getPriorityLabel(item.metrics?.score || 0)}
                            </Chip>
                          </div>
                          {item.metrics && (
                            <div className="mt-2">
                              <div className="flex justify-between text-xs text-gray-500 mb-1">
                                <span>Impact Score</span>
                                <span>{item.metrics.score}%</span>
                              </div>
                              <Progress 
                                value={item.metrics.score} 
                                color={getPriorityColor(item.metrics.score)}
                                size="sm"
                              />
                            </div>
                          )}
                        </div>
                      </li>
                    ))}
                </ul>
              </CardBody>
            </Card>
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
              {showAllCards ? "Show Less" : "View All Insights"}
            </Button>
          </div>
        )}
      </CardBody>
    </StyledCard>
  );
};

export default AIAnalystSuggestions;
