import { Card, CardBody, CardHeader, Progress } from "@nextui-org/react";
import { MoreVertical, TrendingUp, TrendingDown, Minus } from "lucide-react";
import { useSpring, animated } from '@react-spring/web';
import ExportButton from '../ExportButton';

const CombinedSatisfactionView = ({ data }) => {
  const { dashOffset } = useSpring({
    from: { dashOffset: 785.4 },
    to: { dashOffset: (100 - data.satisfactionRate) * 7.854 },
    config: { duration: 2000 }
  });

  const total = Object.values(data.sentimentData).reduce((acc, val) => acc + val, 0);
  const getPercentage = (value) => ((value / total) * 100).toFixed(1);

  const yearlyTrends = {
    overall: data.satisfactionRate > 85 ? 'up' : 'down',
    change: Math.abs(data.satisfactionRate - 85).toFixed(1),
    previousYear: 85
  };

  const getTrendIcon = (trend) => {
    switch(trend) {
      case 'up':
        return <TrendingUp className="text-green-500" />;
      case 'down':
        return <TrendingDown className="text-red-500" />;
      default:
        return <Minus className="text-gray-500" />;
    }
  };

  const exportData = {
    satisfactionRate: data.satisfactionRate,
    yearOverYearChange: `${yearlyTrends.change}%`,
    sentimentDistribution: data.sentimentData,
    trends: {
      previousYear: yearlyTrends.previousYear,
      currentYear: data.satisfactionRate,
      trend: yearlyTrends.overall
    }
  };

  return (
    <Card className="w-full bg-gradient-to-br from-purple-50 to-white dark:from-gray-800 dark:to-gray-900">
      <CardHeader className="flex justify-between items-center px-6 py-4">
        <div>
          <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
            Satisfaction Overview
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-300">
            Year-over-year satisfaction analysis and sentiment distribution
          </p>
        </div>
        <ExportButton data={[exportData]} filename="satisfaction-overview" />
      </CardHeader>
      <CardBody>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-4">
          {/* Satisfaction Meter */}
          <div className="flex flex-col items-center justify-center">
            <div className="text-lg text-gray-600 dark:text-gray-300 mb-6 font-medium">
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
                  className="stroke-gray-200 dark:stroke-gray-700"
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
              <div className="text-sm text-gray-500">0%</div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600">{data.satisfactionRate}%</div>
                <div className="text-sm text-gray-500">Satisfaction Rate</div>
              </div>
              <div className="text-sm text-gray-500">100%</div>
            </div>
            <div className="mt-6 w-full">
              <div className="flex justify-between items-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Year-over-Year Change</p>
                  <div className="flex items-center gap-2">
                    {getTrendIcon(yearlyTrends.overall)}
                    <span className={`text-lg font-bold ${yearlyTrends.overall === 'up' ? 'text-green-500' : 'text-red-500'}`}>
                      {yearlyTrends.change}%
                    </span>
                  </div>
                </div>
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Previous Year</p>
                  <p className="text-lg font-bold text-gray-800 dark:text-gray-200">{yearlyTrends.previousYear}%</p>
                </div>
              </div>
            </div>
          </div>

          {/* Emoji Distribution */}
          <div className="flex flex-col justify-center space-y-8 p-4">
            <div className="text-lg text-gray-600 dark:text-gray-300 font-medium text-center mb-4">
              Sentiment Distribution
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-lg transform hover:scale-105 transition-transform">
                <span className="text-5xl block text-center mb-2">😃</span>
                <p className="text-2xl font-bold text-center text-green-500">{getPercentage(data.sentimentData.positive)}%</p>
                <p className="text-sm text-gray-500 text-center">Positive</p>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-lg transform hover:scale-105 transition-transform">
                <span className="text-5xl block text-center mb-2">😐</span>
                <p className="text-2xl font-bold text-center text-yellow-500">{getPercentage(data.sentimentData.neutral)}%</p>
                <p className="text-sm text-gray-500 text-center">Neutral</p>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-lg transform hover:scale-105 transition-transform">
                <span className="text-5xl block text-center mb-2">😞</span>
                <p className="text-2xl font-bold text-center text-red-500">{getPercentage(data.sentimentData.negative)}%</p>
                <p className="text-sm text-gray-500 text-center">Negative</p>
              </div>
            </div>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};

export default CombinedSatisfactionView;
