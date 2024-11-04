import { Card, CardBody } from "@nextui-org/react";
import { SmilePlus, Meh, Frown, Brain, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';

const getSentimentEmoji = (sentiment) => {
  switch (sentiment.toLowerCase()) {
    case 'positive':
      return <SmilePlus className="text-green-500 w-8 h-8" />;
    case 'neutral':
      return <Meh className="text-yellow-500 w-8 h-8" />;
    case 'negative':
      return <Frown className="text-red-500 w-8 h-8" />;
    default:
      return <SmilePlus className="text-green-500 w-8 h-8" />;
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
      {filteredData.map((feedback, index) => (
        <motion.div
          key={feedback.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
        >
          <Card className="bg-gradient-to-r from-purple-50 to-blue-50 dark:from-gray-800 dark:to-gray-900 hover:shadow-lg transition-all duration-300">
            <CardBody>
              <div className="flex items-start gap-4">
                <div className="p-2 rounded-full bg-white/90 dark:bg-gray-700/90 shadow-lg">
                  {getSentimentEmoji(feedback.sentiment)}
                </div>
                <div className="flex-grow">
                  <p className="text-lg text-gray-800 dark:text-gray-200 mb-2">{feedback.text}</p>
                  <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
                    <div className="flex items-center gap-1">
                      <Brain className="w-4 h-4 text-purple-500" />
                      <span>AI Processed</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4 text-blue-500" />
                      <span>{new Date().toLocaleDateString()}</span>
                    </div>
                    <span className="px-2 py-1 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400">
                      {feedback.team}
                    </span>
                    <span className="px-2 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400">
                      {feedback.project}
                    </span>
                  </div>
                </div>
              </div>
            </CardBody>
          </Card>
        </motion.div>
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