import { Card, CardBody, CardHeader } from "@nextui-org/react";
import { MoreVertical } from "lucide-react";
import { userSegments } from '../../utils/feedbackUtils';

const UserSegmentation = () => {
  const segmentData = userSegments.map(segment => ({
    id: segment.id,
    label: segment.label,
    count: Math.floor(Math.random() * 500) + 100,
    color: segment.color,
    trend: Math.random() > 0.5 ? 'up' : 'down'
  }));

  return (
    <Card className="w-full">
      <CardHeader className="flex justify-between items-center">
        <div>
          <h3 className="text-xl font-semibold">User Segmentation</h3>
          <p className="text-sm text-gray-500">Employee distribution across segments</p>
        </div>
        <button className="p-2 hover:bg-gray-100 rounded-full dark:hover:bg-gray-800">
          <MoreVertical className="w-5 h-5" />
        </button>
      </CardHeader>
      <CardBody>
        <div className="space-y-4">
          {segmentData.map(({ id, label, count, color, trend }) => (
            <div className="flex items-center gap-4" key={id}>
              <div
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: color }}
              />
              <div className="flex-1">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">{label}</span>
                  <span className="text-sm text-gray-600">{count}</span>
                </div>
                <div className="mt-1 h-2 bg-gray-100 rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full transition-all duration-500"
                    style={{ 
                      backgroundColor: color,
                      width: `${(count / 600) * 100}%`,
                      opacity: 0.3
                    }}
                  />
                </div>
              </div>
              <div className={`text-xs ${trend === 'up' ? 'text-green-500' : 'text-red-500'}`}>
                {trend === 'up' ? '↑' : '↓'} {Math.floor(Math.random() * 10) + 1}%
              </div>
            </div>
          ))}
        </div>
      </CardBody>
    </Card>
  );
};

export default UserSegmentation;