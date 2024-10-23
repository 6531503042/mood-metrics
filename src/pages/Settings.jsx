import React from 'react';
import { Card, CardBody, Switch } from "@nextui-org/react";

const Settings = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Settings</h1>
      <Card>
        <CardBody>
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <span>Email Notifications</span>
              <Switch defaultSelected />
            </div>
            <div className="flex justify-between items-center">
              <span>Weekly Reports</span>
              <Switch defaultSelected />
            </div>
            <div className="flex justify-between items-center">
              <span>Data Analytics</span>
              <Switch defaultSelected />
            </div>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default Settings;