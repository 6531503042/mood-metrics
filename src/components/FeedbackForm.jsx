import React from 'react';
import { Card, CardHeader, CardBody, Input, Textarea, Button, Select, SelectItem, Switch } from "@nextui-org/react";

const categories = [
  { value: "work_environment", label: "Work Environment" },
  { value: "management", label: "Management" },
  { value: "career_growth", label: "Career Growth" },
  { value: "work_life_balance", label: "Work-Life Balance" },
];

const FeedbackForm = () => {
  return (
    <div className="p-8 bg-gray-100 min-h-screen flex justify-center items-center">
      <Card className="w-full max-w-2xl">
        <CardHeader className="flex gap-3">
          <div className="flex flex-col">
            <p className="text-xl font-bold">Submit Feedback</p>
            <p className="text-small text-default-500">Your voice matters</p>
          </div>
        </CardHeader>
        <CardBody>
          <form className="space-y-4">
            <Select 
              label="Category" 
              placeholder="Select a category"
              className="max-w-xs"
            >
              {categories.map((category) => (
                <SelectItem key={category.value} value={category.value}>
                  {category.label}
                </SelectItem>
              ))}
            </Select>

            <Textarea
              label="Feedback"
              placeholder="Enter your feedback here"
              className="max-w-xs"
            />

            <div className="flex items-center space-x-2">
              <Switch />
              <span>Submit anonymously</span>
            </div>

            <Select 
              label="Privacy Level" 
              placeholder="Select privacy level"
              className="max-w-xs"
            >
              <SelectItem key="public" value="public">Public</SelectItem>
              <SelectItem key="team" value="team">Team Only</SelectItem>
              <SelectItem key="private" value="private">Private (HR Only)</SelectItem>
            </Select>

            <div className="flex justify-end">
              <Button color="primary">
                Submit Feedback
              </Button>
            </div>
          </form>
        </CardBody>
      </Card>
    </div>
  );
};

export default FeedbackForm;