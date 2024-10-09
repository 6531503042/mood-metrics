import React from 'react';
import { Card, CardHeader, CardBody } from "@nextui-org/react";

const RecentFeedback = ({ data }) => {
  return (
    <Card>
      <CardHeader>Recent Feedback</CardHeader>
      <CardBody>
        <p>Recent feedback will be displayed here</p>
      </CardBody>
    </Card>
  );
};

export default RecentFeedback;