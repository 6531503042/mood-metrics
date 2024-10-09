import React from 'react';
import { Card, CardHeader, CardBody, CardFooter, Divider, Link, Image } from "@nextui-org/react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Tabs, Tab } from "@nextui-org/react";

const mockData = [
  { category: 'Work Environment', positive: 65, neutral: 20, negative: 15 },
  { category: 'Management', positive: 55, neutral: 30, negative: 15 },
  { category: 'Career Growth', positive: 70, neutral: 20, negative: 10 },
  { category: 'Work-Life Balance', positive: 60, neutral: 25, negative: 15 },
];

const FeedbackDashboard = () => {
  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold mb-8 text-center">Feedback Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card className="col-span-full">
          <CardHeader className="flex gap-3">
            <Image
              alt="nextui logo"
              height={40}
              radius="sm"
              src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
              width={40}
            />
            <div className="flex flex-col">
              <p className="text-md">Feedback Overview</p>
              <p className="text-small text-default-500">Last 30 days</p>
            </div>
          </CardHeader>
          <Divider/>
          <CardBody>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={mockData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="category" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="positive" fill="#4ade80" />
                <Bar dataKey="neutral" fill="#facc15" />
                <Bar dataKey="negative" fill="#f87171" />
              </BarChart>
            </ResponsiveContainer>
          </CardBody>
        </Card>

        <Card>
          <CardHeader className="flex gap-3">
            <div className="flex flex-col">
              <p className="text-md">Recent Feedback</p>
              <p className="text-small text-default-500">Last 5 submissions</p>
            </div>
          </CardHeader>
          <Divider/>
          <CardBody>
            <Tabs aria-label="Recent Feedback">
              <Tab key="positive" title="Positive">
                <ul className="list-disc pl-5">
                  <li>Great team collaboration on the latest project!</li>
                  <li>The new office layout improves productivity.</li>
                </ul>
              </Tab>
              <Tab key="neutral" title="Neutral">
                <ul className="list-disc pl-5">
                  <li>The new software is okay, but needs some improvements.</li>
                  <li>Team meetings could be more focused.</li>
                </ul>
              </Tab>
              <Tab key="negative" title="Negative">
                <ul className="list-disc pl-5">
                  <li>Workload distribution needs to be more balanced.</li>
                  <li>Communication between departments can be improved.</li>
                </ul>
              </Tab>
            </Tabs>
          </CardBody>
        </Card>

        <Card>
          <CardHeader className="flex gap-3">
            <div className="flex flex-col">
              <p className="text-md">Sentiment Analysis</p>
              <p className="text-small text-default-500">Overall mood</p>
            </div>
          </CardHeader>
          <Divider/>
          <CardBody>
            <div className="flex justify-center items-center h-full">
              <span className="text-6xl">😊</span>
            </div>
          </CardBody>
          <Divider/>
          <CardFooter>
            <Link isExternal showAnchorIcon href="#">
              View detailed analysis
            </Link>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader className="flex gap-3">
            <div className="flex flex-col">
              <p className="text-md">Action Items</p>
              <p className="text-small text-default-500">Based on recent feedback</p>
            </div>
          </CardHeader>
          <Divider/>
          <CardBody>
            <ul className="list-disc pl-5">
              <li>Schedule a team building event</li>
              <li>Review workload distribution</li>
              <li>Improve inter-department communication</li>
            </ul>
          </CardBody>
          <Divider/>
          <CardFooter>
            <Link isExternal showAnchorIcon href="#">
              Create new action item
            </Link>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default FeedbackDashboard;