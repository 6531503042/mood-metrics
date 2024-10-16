import React from 'react';

const RecentFeedback = ({ data }) => {
  return (
    <div className="space-y-4">
      {data.map((feedback) => (
        <div key={feedback.id} className="bg-white p-4 rounded-lg shadow">
          <p className="text-gray-800">{feedback.text}</p>
          <span className={`inline-block px-2 py-1 mt-2 text-xs font-semibold rounded-full ${
            feedback.sentiment === 'positive' ? 'bg-green-200 text-green-800' :
            feedback.sentiment === 'neutral' ? 'bg-yellow-200 text-yellow-800' :
            'bg-red-200 text-red-800'
          }`}>
            {feedback.sentiment}
          </span>
        </div>
      ))}
    </div>
  );
};

export default RecentFeedback;