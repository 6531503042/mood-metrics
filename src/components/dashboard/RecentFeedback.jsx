import { Card, CardBody } from "@nextui-org/react";
import { Brain } from 'lucide-react';
import SentimentIndicator from '../feedback/SentimentIndicator';

const RecentFeedback = ({ data, filter, team, project }) => {
  const filteredData = data.filter(feedback => 
    (filter === 'all' || feedback.sentiment === filter) &&
    (team === 'Overall' || feedback.team === team) &&
    (project === 'Overall' || feedback.project === project)
  );

  return (
    <div className="space-y-4">
      {filteredData.map((feedback) => (
        <Card key={feedback.id} className="bg-white dark:bg-gray-800 shadow-sm hover:shadow-md transition-shadow duration-300">
          <CardBody>
            <div className="flex items-start">
              <div className="mr-4">
                <SentimentIndicator 
                  sentiment={feedback.sentiment} 
                  confidence={feedback.confidenceScore || 85}
                />
              </div>
              <div className="flex-grow">
                <p className="text-gray-800 dark:text-gray-200">{feedback.text}</p>
                <div className="mt-2 text-xs text-gray-500 dark:text-gray-400 flex items-center justify-between">
                  <div>
                    <span className="mr-2">Team: {feedback.team}</span>
                    <span>Project: {feedback.project}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Brain className="text-purple-500" size={16} />
                    <span>AI Processing</span>
                  </div>
                </div>
              </div>
            </div>
          </CardBody>
        </Card>
      ))}
      {filteredData.length === 0 && (
        <p className="text-center text-gray-500 dark:text-gray-400">
          No feedback matching the current filters.
        </p>
      )}
    </div>
  );
};

export default RecentFeedback;