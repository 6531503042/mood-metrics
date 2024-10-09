import React from 'react';
import { Card, CardHeader, CardBody } from "@nextui-org/react";

const FeedbackTrends = ({ data }) => {
  return (
    <Card>
      <CardHeader>Feedback Trends</CardHeader>
      <CardBody>
        <p>Feedback trends will be displayed here</p>
      </CardBody>
    </Card>
  );
};

export default FeedbackTrends;