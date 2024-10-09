import React from 'react';
import { Card, CardHeader, CardBody } from "@nextui-org/react";

const ResponseTime = ({ averageTime }) => {
  return (
    <Card>
      <CardHeader>Response Time</CardHeader>
      <CardBody>
        <p>Average response time: {averageTime}</p>
      </CardBody>
    </Card>
  );
};

export default ResponseTime;