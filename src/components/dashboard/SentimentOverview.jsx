import React from 'react';
import { Card, CardHeader, CardBody } from "@nextui-org/react";

const SentimentOverview = ({ data }) => {
  return (
    <Card>
      <CardHeader>Sentiment Overview</CardHeader>
      <CardBody>
        <p>Sentiment data will be displayed here</p>
      </CardBody>
    </Card>
  );
};

export default SentimentOverview;