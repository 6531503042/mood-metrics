import React from 'react';

const EmojiFeedbackDistribution = ({ data }) => {
  const total = Object.values(data).reduce((acc, val) => acc + val, 0);
  const getPercentage = (value) => ((value / total) * 100).toFixed(1);

  return (
    <div className="flex justify-around items-center h-full">
      <div className="text-center">
        <span className="text-5xl">😃</span>
        <p className="mt-2 font-bold">{getPercentage(data.positive)}%</p>
        <p className="text-sm text-gray-500">Positive</p>
      </div>
      <div className="text-center">
        <span className="text-5xl">😐</span>
        <p className="mt-2 font-bold">{getPercentage(data.neutral)}%</p>
        <p className="text-sm text-gray-500">Neutral</p>
      </div>
      <div className="text-center">
        <span className="text-5xl">😞</span>
        <p className="mt-2 font-bold">{getPercentage(data.negative)}%</p>
        <p className="text-sm text-gray-500">Negative</p>
      </div>
    </div>
  );
};

export default EmojiFeedbackDistribution;