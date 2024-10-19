import React from 'react';
import { Card, CardBody } from "@nextui-org/react";
import { ThumbsUp, ThumbsDown, Minus, MessageSquare } from 'lucide-react';

const SentimentIcon = ({ sentiment }) => {
  switch (sentiment) {
    case 'positive':
      return <ThumbsUp className="text-green-500" />;
    case 'negative':
      return <ThumbsDown className="text-red-500" />;
    default:
      return <Minus className="text-yellow-500" />;
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
        <Card key={feedback.id} className="bg-white shadow-sm hover:shadow-md transition-shadow duration-300">
          <CardBody>
            <div className="flex items-start">
              <div className="mr-4 mt-1">
                <SentimentIcon sentiment={feedback.sentiment} />
              </div>
              <div className="flex-grow">
                <div className="flex items-center mb-2">
                  <MessageSquare size={16} className="mr-2 text-gray-500" />
                  <p className="text-gray-800 font-medium">{feedback.text}</p>
                </div>
                <div className="flex justify-between text-xs text-gray-500">
                  <span>Team: {feedback.team}</span>
                  <span>Project: {feedback.project}</span>
                </div>
              </div>
            </div>
          </CardBody>
        </Card>
      ))}
      {filteredData.length === 0 && (
        <p className="text-center text-gray-500">No feedback matching the current filters.</p>
      )}
    </div>
  );
};

export default RecentFeedback;