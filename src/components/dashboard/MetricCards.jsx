import React from 'react';
import { Card, CardBody, CardHeader } from "@nextui-org/react";

const MetricCards = ({ data }) => {
  return (
    <>
      <Card>
        <CardHeader>Total Feedback</CardHeader>
        <CardBody>{data.totalFeedback || 0}</CardBody>
      </Card>
      <Card>
        <CardHeader>Average Rating</CardHeader>
        <CardBody>{data.averageRating?.toFixed(1) || 'N/A'}</CardBody>
      </Card>
      <Card>
        <CardHeader>Response Rate</CardHeader>
        <CardBody>{data.responseRate ? `${(data.responseRate * 100).toFixed(1)}%` : 'N/A'}</CardBody>
      </Card>
    </>
  );
};

export default MetricCards;