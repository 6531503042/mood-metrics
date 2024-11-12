import React from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { Card, Progress, Button } from "@nextui-org/react";
import { ChevronDown, ChevronUp, ArrowRight } from 'lucide-react';

const InsightCard = ({ category, expanded, onToggle }) => {
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

  return (
    <motion.div
      layout
      className={`${getRiskColor(category.risk)} border p-4 rounded-lg backdrop-blur-lg transition-all duration-300 hover:scale-102 relative overflow-hidden cursor-pointer`}
      onClick={onToggle}
      whileHover={{ scale: 1.02 }}
    >
      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-between flex-wrap gap-2">
          <h3 className="text-lg font-semibold text-purple-700 flex items-center gap-2">
            {category.icon}
            <span className="text-sm sm:text-base">{category.title}</span>
          </h3>
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

        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="mt-4 p-4 bg-white/30 dark:bg-gray-800/30 rounded-lg border border-purple-100 dark:border-purple-800"
            >
              {category.suggestions.slice(2).map((item, index) => (
                <div key={`extra-${index}`} className="flex items-start gap-2 text-sm text-purple-700/80 mb-2">
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
            </motion.div>
          )}
        </AnimatePresence>

        <div className="flex justify-center mt-2">
          {expanded ? (
            <ChevronUp size={20} className="text-purple-600" />
          ) : (
            <ChevronDown size={20} className="text-purple-600" />
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default InsightCard;