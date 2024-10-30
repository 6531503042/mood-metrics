import React, { useState, useEffect } from 'react';
import { Button, Tooltip } from "@nextui-org/react";
import { Filter, X } from 'lucide-react';
import SelectFilter from './SelectFilter';
import { motion, AnimatePresence } from 'framer-motion';

const FloatingFilterBar = ({ 
  selectedTeam, 
  setSelectedTeam, 
  selectedProject, 
  setSelectedProject, 
  feedbackFilter, 
  setFeedbackFilter, 
  teams, 
  projects 
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
        setIsExpanded(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          className="fixed bottom-24 right-8 z-40 md:top-4 md:right-4"
        >
          <Tooltip content={isExpanded ? "Hide Filters" : "Show Filters"}>
            <Button
              auto
              color="primary"
              isIconOnly
              onPress={() => setIsExpanded(!isExpanded)}
              className="shadow-lg dark:bg-gray-800 dark:text-white"
            >
              {isExpanded ? <X size={20} /> : <Filter size={20} />}
            </Button>
          </Tooltip>

          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="mt-2 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-xl w-[280px] md:w-64 absolute right-0"
              >
                <SelectFilter
                  selectedTeam={selectedTeam}
                  setSelectedTeam={setSelectedTeam}
                  selectedProject={selectedProject}
                  setSelectedProject={setSelectedProject}
                  feedbackFilter={feedbackFilter}
                  setFeedbackFilter={setFeedbackFilter}
                  teams={teams}
                  projects={projects}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FloatingFilterBar;