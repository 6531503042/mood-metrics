import { Card, CardHeader, CardBody } from "@nextui-org/react";
import EmployeeSegmentation from '../components/dashboard/EmployeeSegmentation';
import PerformanceMetrics from '../components/dashboard/PerformanceMetrics';
import { useFeedbackData } from '../hooks/useFeedbackData';

const TeamAnalytics = () => {
  const { feedbackData } = useFeedbackData();

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Team Analytics</h1>
      <div className="grid gap-6">
        <Card>
          <CardHeader>
            <h2 className="text-2xl font-semibold">Employee Segmentation</h2>
          </CardHeader>
          <CardBody>
            <EmployeeSegmentation data={feedbackData.employeeSegmentation} />
          </CardBody>
        </Card>
        <Card>
          <CardHeader>
            <h2 className="text-2xl font-semibold">Performance Overview</h2>
          </CardHeader>
          <CardBody>
            <PerformanceMetrics data={feedbackData.performanceMetrics} />
          </CardBody>
        </Card>
      </div>
    </div>
  );
};

export default TeamAnalytics;