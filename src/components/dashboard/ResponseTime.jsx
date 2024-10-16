import React from 'react';
import { Card, CardBody } from "@nextui-org/react";

const ResponseTime = ({ averageTime }) => {
  return (
    <Card className="bg-white shadow-md">
      <CardBody className="flex items-center justify-between p-4">
        <div>
          <p className="text-sm text-gray-500">Average Response Time</p>
          <p className="text-2xl font-bold">{averageTime}</p>
        </div>
        <div className="text-3xl text-indigo-500">⏱️</div>
      </CardBody>
    </Card>
  );
};

export default ResponseTime;