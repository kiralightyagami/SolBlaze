import React, { useState } from 'react';
import { tvlData, userCountData } from '../data/mockData';
import LineChart from '../components/LineChart';
import TabButton from '../components/TabButton';

const GrowthMetrics: React.FC = () => {
  const [activeMetric, setActiveMetric] = useState('tvl');

  return (
    <div className="space-y-6">
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 border border-gray-100 dark:border-gray-700">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
            Growth Metrics
          </h2>
          
          <div className="flex space-x-2">
            <TabButton
              active={activeMetric === 'tvl'}
              onClick={() => setActiveMetric('tvl')}
            >
              TVL
            </TabButton>
            
            <TabButton
              active={activeMetric === 'users'}
              onClick={() => setActiveMetric('users')}
            >
              Users
            </TabButton>
          </div>
        </div>
        
        {activeMetric === 'tvl' ? (
          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
                Total Value Locked
              </h3>
              <LineChart 
                data={tvlData.total}
                height={300}
                label="Total TVL"
                color="#3B82F6"
                valuePrefix="$"
              />
            </div>
            
            <div>
              <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
                bSOL in DeFi
              </h3>
              <LineChart 
                data={tvlData.defi}
                height={300}
                label="DeFi TVL"
                color="#8B5CF6"
                valuePrefix="$"
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-md font-medium text-gray-900 dark:text-white mb-2">
                  Key TVL Insights
                </h4>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 rounded-full bg-blue-500 mt-1.5 mr-2"></span>
                    <span>bSOL TVL has grown by <span className="font-semibold">347%</span> over the past year</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 rounded-full bg-blue-500 mt-1.5 mr-2"></span>
                    <span>Approximately <span className="font-semibold">78%</span> of all bSOL is actively utilized in DeFi protocols</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 rounded-full bg-blue-500 mt-1.5 mr-2"></span>
                    <span>The highest monthly growth was <span className="font-semibold">24%</span> in November 2023</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-md font-medium text-gray-900 dark:text-white mb-2">
                  Future Projections
                </h4>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 rounded-full bg-purple-500 mt-1.5 mr-2"></span>
                    <span>Projected to reach <span className="font-semibold">$20M TVL</span> by Q4 2024</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 rounded-full bg-purple-500 mt-1.5 mr-2"></span>
                    <span>DeFi integration expected to grow to <span className="font-semibold">85%</span> of total bSOL</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 rounded-full bg-purple-500 mt-1.5 mr-2"></span>
                    <span>Continued growth driven by new protocol integrations and improved yields</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        ) : (
          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
                Total Users
              </h3>
              <LineChart 
                data={userCountData.total}
                height={300}
                label="Total Users"
                color="#10B981"
              />
            </div>
            
            <div>
              <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
                Active Users
              </h3>
              <LineChart 
                data={userCountData.active}
                height={300}
                label="Active Users"
                color="#F59E0B"
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-md font-medium text-gray-900 dark:text-white mb-2">
                  User Growth Insights
                </h4>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 rounded-full bg-green-500 mt-1.5 mr-2"></span>
                    <span>User base has expanded by <span className="font-semibold">16x</span> since launch</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 rounded-full bg-green-500 mt-1.5 mr-2"></span>
                    <span>Approximately <span className="font-semibold">73%</span> of users are active monthly</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 rounded-full bg-green-500 mt-1.5 mr-2"></span>
                    <span>Retention rate has improved from <span className="font-semibold">54%</span> to <span className="font-semibold">81%</span> in the past year</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-md font-medium text-gray-900 dark:text-white mb-2">
                  User Demographics
                </h4>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 rounded-full bg-amber-500 mt-1.5 mr-2"></span>
                    <span><span className="font-semibold">42%</span> of users also participate in DeFi activities</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 rounded-full bg-amber-500 mt-1.5 mr-2"></span>
                    <span>Average user holds <span className="font-semibold">45 bSOL</span></span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 rounded-full bg-amber-500 mt-1.5 mr-2"></span>
                    <span>New users are growing at <span className="font-semibold">14%</span> month-over-month</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default GrowthMetrics;