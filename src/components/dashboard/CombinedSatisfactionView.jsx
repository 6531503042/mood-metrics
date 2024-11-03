import { Card, CardBody, CardHeader } from "@nextui-org/react";
import { MoreVertical } from "lucide-react";
import { useSpring, animated } from '@react-spring/web';

const CombinedSatisfactionView = ({ data }) => {
  const { dashOffset } = useSpring({
    from: { dashOffset: 785.4 },
    to: { dashOffset: (100 - data.satisfactionRate) * 7.854 },
    config: { duration: 2000 }
  });

  const total = Object.values(data.sentimentData).reduce((acc, val) => acc + val, 0);
  const getPercentage = (value) => ((value / total) * 100).toFixed(1);

  return (
    <Card className="futuristic-card neon-border w-full bg-gradient-to-br from-gray-900/50 to-gray-800/50">
      <CardHeader className="flex justify-between items-center px-6 py-4">
        <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
          Satisfaction Overview
        </h3>
        <button className="p-2 hover:bg-white/10 rounded-full transition-all">
          <MoreVertical className="w-5 h-5" />
        </button>
      </CardHeader>
      <CardBody>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-4">
          <div className="flex flex-col items-center justify-center float">
            <div className="text-lg text-gray-300 mb-6 font-medium">
              Overall Satisfaction
            </div>
            <div className="relative w-full max-w-[300px]">
              <svg
                viewBox="0 0 700 380"
                fill="none"
                className="w-full h-auto"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 350C100 283.696 126.339 220.107 173.223 173.223C220.107 126.339 283.696 100 350 100C416.304 100 479.893 126.339 526.777 173.223C573.661 220.107 600 283.696 600 350"
                  stroke="currentColor"
                  className="stroke-gray-700"
                  strokeWidth="40"
                  strokeLinecap="round"
                />
                <animated.path
                  d="M100 350C100 283.696 126.339 220.107 173.223 173.223C220.107 126.339 283.696 100 350 100C416.304 100 479.893 126.339 526.777 173.223C573.661 220.107 600 283.696 600 350"
                  className="stroke-cyan-500"
                  strokeWidth="40"
                  strokeLinecap="round"
                  strokeDasharray="785.4"
                  strokeDashoffset={dashOffset}
                />
                <circle cx="350" cy="290" r="50" className="fill-yellow-400" />
                <circle cx="330" cy="280" r="8" className="fill-gray-800" />
                <circle cx="370" cy="280" r="8" className="fill-gray-800" />
                <path
                  d="M320 310 Q350 330 380 310"
                  stroke="#000"
                  strokeWidth="6"
                  fill="none"
                  strokeLinecap="round"
                />
              </svg>
            </div>
            <div className="flex justify-between w-full mt-6 px-6">
              <div className="text-sm text-gray-400">0%</div>
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400">{data.satisfactionRate}%</div>
                <div className="text-sm text-gray-400">Satisfaction Rate</div>
              </div>
              <div className="text-sm text-gray-400">100%</div>
            </div>
          </div>

          <div className="flex flex-col justify-center space-y-8 p-4">
            <div className="text-lg text-gray-300 font-medium text-center mb-4">
              Sentiment Distribution
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="futuristic-card rounded-xl p-4 transform hover:scale-105 transition-transform">
                <span className="text-5xl block text-center mb-2">😃</span>
                <p className="text-2xl font-bold text-center text-cyan-400">{getPercentage(data.sentimentData.positive)}%</p>
                <p className="text-sm text-gray-400 text-center">Positive</p>
              </div>
              <div className="futuristic-card rounded-xl p-4 transform hover:scale-105 transition-transform">
                <span className="text-5xl block text-center mb-2">😐</span>
                <p className="text-2xl font-bold text-center text-blue-400">{getPercentage(data.sentimentData.neutral)}%</p>
                <p className="text-sm text-gray-400 text-center">Neutral</p>
              </div>
              <div className="futuristic-card rounded-xl p-4 transform hover:scale-105 transition-transform">
                <span className="text-5xl block text-center mb-2">😞</span>
                <p className="text-2xl font-bold text-center text-purple-400">{getPercentage(data.sentimentData.negative)}%</p>
                <p className="text-sm text-gray-400 text-center">Negative</p>
              </div>
            </div>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};

export default CombinedSatisfactionView;