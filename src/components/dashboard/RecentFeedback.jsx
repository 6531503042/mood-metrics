import React from 'react';
import { Card, CardBody } from "@nextui-org/react";
import { ThumbsUp, ThumbsDown, Minus } from 'lucide-react';

const SentimentIcon = ({ sentiment }) => {
  switch (sentiment) {
    case 'positive':
      return <ThumbsUp className="text-green-500 dark:text-green-400" />;
    case 'negative':
      return <ThumbsDown className="text-red-500 dark:text-red-400" />;
    default:
      return <Minus className="text-yellow-500 dark:text-yellow-400" />;
  }
};

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
                <SentimentIcon sentiment={feedback.sentiment} />
              </div>
              <div>
                <p className="text-gray-800 dark:text-gray-200">{feedback.text}</p>
                <div className="mt-2 text-xs text-gray-500 dark:text-gray-400">
                  <span className="mr-2">Team: {feedback.team}</span>
                  <span>Project: {feedback.project}</span>
                </div>
              </div>
            </div>
          </CardBody>
        </Card>
      ))}
      {filteredData.length === 0 && (
        <p className="text-center text-gray-500 dark:text-gray-400">No feedback matching the current filters.</p>
      )}
    </div>
  );
};

export default RecentFeedback;