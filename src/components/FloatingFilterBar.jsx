import React, { useState, useEffect } from 'react';
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

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <div className={`fixed top-0 left-0 right-0 z-50 bg-white shadow-md transition-transform duration-300 ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
      <div className="container mx-auto px-4 py-2">
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
    </div>
  );
};

export default FloatingFilterBar;