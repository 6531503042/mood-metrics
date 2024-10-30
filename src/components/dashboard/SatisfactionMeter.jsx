import { Card, CardBody, CardHeader } from "@nextui-org/react";
import { MoreVertical } from "lucide-react";
import { useSpring, animated } from '@react-spring/web';

const SatisfactionMeter = () => {
  const { dashOffset } = useSpring({
    from: { dashOffset: 785.4 },
    to: { dashOffset: 78.54 }, // 90% satisfaction
    config: { duration: 2000 }
  });

  return (
    <Card className="w-full">
      <CardHeader className="flex justify-between items-center">
        <h3 className="text-xl font-semibold">Satisfaction Rate</h3>
        <button className="p-2 hover:bg-gray-100 rounded-full dark:hover:bg-gray-800">
          <MoreVertical className="w-5 h-5" />
        </button>
      </CardHeader>
      <CardBody>
        <div className="text-sm text-gray-500 dark:text-gray-400 mb-4">From all projects</div>
        <div className="flex justify-center">
          <svg
            viewBox="0 0 700 380"
            fill="none"
            width="300"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 350C100 283.696 126.339 220.107 173.223 173.223C220.107 126.339 283.696 100 350 100C416.304 100 479.893 126.339 526.777 173.223C573.661 220.107 600 283.696 600 350"
              stroke="currentColor"
              className="stroke-gray-200 dark:stroke-gray-800"
              strokeWidth="40"
              strokeLinecap="round"
            />
            <animated.path
              d="M100 350C100 283.696 126.339 220.107 173.223 173.223C220.107 126.339 283.696 100 350 100C416.304 100 479.893 126.339 526.777 173.223C573.661 220.107 600 283.696 600 350"
              className="stroke-purple-500"
              strokeWidth="40"
              strokeLinecap="round"
              strokeDasharray="785.4"
              strokeDashoffset={dashOffset}
            />
            <circle
              cx="350"
              cy="290"
              r="50"
              className="fill-yellow-400"
            />
            <circle
              cx="330"
              cy="280"
              r="8"
              className="fill-gray-800"
            />
            <circle
              cx="370"
              cy="280"
              r="8"
              className="fill-gray-800"
            />
            <path
              d="M320 310 Q350 330 380 310"
              stroke="#000"
              strokeWidth="6"
              fill="none"
              strokeLinecap="round"
            />
          </svg>
        </div>
        <div className="flex justify-between mt-4 px-6">
          <div className="text-sm text-gray-500">0%</div>
          <div className="text-center">
            <div className="text-2xl font-bold text-purple-600">97.78%</div>
            <div className="text-sm text-gray-500">Based on Likes</div>
          </div>
          <div className="text-sm text-gray-500">100%</div>
        </div>
      </CardBody>
    </Card>
  );
};

export default SatisfactionMeter;