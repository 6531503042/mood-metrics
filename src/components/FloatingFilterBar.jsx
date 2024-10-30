import React, { useState } from 'react';
import { Button, Tooltip } from "@nextui-org/react";
import { Filter, X } from 'lucide-react';
import SelectFilter from './SelectFilter';
import { motion } from 'framer-motion';
import { 
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger 
} from "@/components/ui/sheet";

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
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed bottom-24 right-4 z-40 md:top-4 md:right-4"
    >
      <Sheet>
        <SheetTrigger asChild>
          <Button
            auto
            color="primary"
            isIconOnly
            className="shadow-lg dark:bg-gray-800 dark:text-white w-10 h-10"
          >
            <Filter size={18} />
          </Button>
        </SheetTrigger>
        <SheetContent side="right" className="w-[90vw] sm:w-[380px] p-4">
          <SheetHeader>
            <SheetTitle>Filters</SheetTitle>
          </SheetHeader>
          <div className="mt-4">
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
        </SheetContent>
      </Sheet>
    </motion.div>
  );
};

export default FloatingFilterBar;