import React from 'react';
import { Card, CardBody, CardHeader } from "@nextui-org/react";
import { MoreVertical } from "lucide-react";

const segmentationData = [
  { c1: 'Not Specified', c2: '800', color: '#9BA1A6', c3: 'rgba(155, 161, 166, 0.2)' },
  { c1: 'Male', c2: '441', color: '#8884d8', c3: 'rgba(136, 132, 216, 0.2)' },
  { c1: 'Female', c2: '233', color: '#82ca9d', c3: 'rgba(130, 202, 157, 0.2)' },
  { c1: 'Other', c2: '126', color: '#ffc658', c3: 'rgba(255, 198, 88, 0.2)' }
];

const UserSegmentation = () => {
  return (
    <Card className="w-full">
      <CardHeader className="flex justify-between items-center">
        <h3 className="text-xl font-semibold">User Segmentation</h3>
        <button className="p-2 hover:bg-gray-100 rounded-full dark:hover:bg-gray-800">
          <MoreVertical className="w-5 h-5" />
        </button>
      </CardHeader>
      <CardBody>
        <div className="text-sm text-gray-500 dark:text-gray-400 mb-4">All users</div>
        <div className="space-y-4">
          {segmentationData.map(({ c1, c2, c3, color }) => (
            <div className="flex items-center gap-4" key={c1}>
              <div
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: color }}
              />
              <div className="text-sm" style={{ color }}>
                {c1}
              </div>
              <div className="flex-grow" />
              <div className="text-sm font-medium" style={{ color }}>
                {c2}
              </div>
              <div className="w-24 h-8 rounded-lg overflow-hidden" style={{ backgroundColor: c3 }} />
            </div>
          ))}
        </div>
        <button className="mt-6 px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-xl text-sm hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
          View Details
        </button>
      </CardBody>
    </Card>
  );
};

export default UserSegmentation;