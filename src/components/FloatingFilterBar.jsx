import React, { useState, useEffect } from 'react';
import { Button } from "@nextui-org/react";
import { Filter } from 'lucide-react';
import SelectFilter from './SelectFilter';

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
    <div className={`fixed top-4 right-4 z-50 transition-all duration-300 ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
      <Button
        auto
        color="primary"
        icon={<Filter size={20} />}
        onClick={() => setIsExpanded(!isExpanded)}
        className="shadow-lg"
      >
        {isExpanded ? 'Hide Filters' : 'Show Filters'}
      </Button>
      {isExpanded && (
        <div className="mt-2 p-4 bg-white rounded-lg shadow-xl">
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
        </div>
      )}
    </div>
  );
};

export default FloatingFilterBar;