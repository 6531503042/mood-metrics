import React from 'react';
import { Smile, Meh, Frown } from 'lucide-react';
import { Tooltip } from "@nextui-org/react";

const SentimentIndicator = ({ sentiment, confidence }) => {
  const getIcon = () => {
    switch (sentiment.toLowerCase()) {
      case 'positive':
        return <Smile className="text-green-500" size={24} />;
      case 'neutral':
        return <Meh className="text-yellow-500" size={24} />;
      case 'negative':
        return <Frown className="text-red-500" size={24} />;
      default:
        return null;
    }
  };

  return (
    <Tooltip content={`${sentiment} (${confidence}% confidence)`}>
      <div className="cursor-help">{getIcon()}</div>
    </Tooltip>
  );
};

export default SentimentIndicator;