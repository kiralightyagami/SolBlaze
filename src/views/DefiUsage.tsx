import React from 'react';
import { defiProtocols } from '../data/mockData';
import ProtocolCard from '../components/ProtocolCard';

const DefiUsage: React.FC = () => {
 
  const totalBsolInDefi = defiProtocols.reduce((sum, protocol) => sum + protocol.bsolUsed, 0);
  
 
  const protocolsByCategory = defiProtocols.reduce((acc, protocol) => {
    if (!acc[protocol.category]) {
      acc[protocol.category] = [];
    }
    acc[protocol.category].push(protocol);
    return acc;
  }, {} as Record<string, typeof defiProtocols>);

  
  const categoryUsage = Object.entries(protocolsByCategory).map(([category, protocols]) => {
    const categoryTotal = protocols.reduce((sum, protocol) => sum + protocol.bsolUsed, 0);
    return {
      category,
      total: categoryTotal,
      percentage: (categoryTotal / totalBsolInDefi) * 100
    };
  }).sort((a, b) => b.total - a.total);

  
  const formatLargeNumber = (value: number): string => {
    if (value >= 1000000) {
      return `$${(value / 1000000).toFixed(2)}M`;
    } else if (value >= 1000) {
      return `$${(value / 1000).toFixed(1)}K`;
    } else {
      return `$${value}`;
    }
  };

  return (
    <div className="space-y-6">
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 border border-gray-100 dark:border-gray-700">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
          bSOL DeFi Usage
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div>
            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
              Category Distribution
            </h3>
            <div className="relative pt-2">
              <div className="h-4 rounded-full overflow-hidden bg-gray-200 dark:bg-gray-700">
                {categoryUsage.map((category, index) => {
                  const colors = [
                    'bg-blue-500 dark:bg-blue-600',
                    'bg-green-500 dark:bg-green-600',
                    'bg-amber-500 dark:bg-amber-600',
                    'bg-purple-500 dark:bg-purple-600',
                    'bg-indigo-500 dark:bg-indigo-600',
                    'bg-rose-500 dark:bg-rose-600',
                    'bg-teal-500 dark:bg-teal-600'
                  ];
                  return (
                    <div
                      key={category.category}
                      className={`absolute top-0 h-4 ${colors[index % colors.length]}`}
                      style={{
                        left: `${categoryUsage.slice(0, index).reduce((sum, cat) => sum + cat.percentage, 0)}%`,
                        width: `${category.percentage}%`
                      }}
                    >
                      <span className="sr-only">{category.category}: {category.percentage.toFixed(1)}%</span>
                    </div>
                  );
                })}
              </div>
              
              <div className="mt-4 space-y-2">
                {categoryUsage.map((category, index) => {
                  const colors = [
                    'bg-blue-500 dark:bg-blue-600',
                    'bg-green-500 dark:bg-green-600',
                    'bg-amber-500 dark:bg-amber-600',
                    'bg-purple-500 dark:bg-purple-600',
                    'bg-indigo-500 dark:bg-indigo-600',
                    'bg-rose-500 dark:bg-rose-600',
                    'bg-teal-500 dark:bg-teal-600'
                  ];
                  return (
                    <div key={category.category} className="flex items-center justify-between">
                      <div className="flex items-center">
                        <span className={`inline-block w-3 h-3 rounded-full mr-2 ${colors[index % colors.length]}`}></span>
                        <span className="text-sm text-gray-700 dark:text-gray-300">{category.category}</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <span className="text-sm font-medium text-gray-900 dark:text-white">
                          {formatLargeNumber(category.total)}
                        </span>
                        <span className="text-sm text-gray-500 dark:text-gray-400">
                          {category.percentage.toFixed(1)}%
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
              Overview
            </h3>
            <div className="space-y-4">
              <div className="bg-gray-50 dark:bg-gray-750 p-4 rounded-lg">
                <div className="flex justify-between items-center">
                  <p className="text-sm text-gray-500 dark:text-gray-400">Total bSOL in DeFi</p>
                  <p className="text-lg font-semibold text-gray-900 dark:text-white">
                    {formatLargeNumber(totalBsolInDefi)}
                  </p>
                </div>
              </div>
              
              <div className="bg-gray-50 dark:bg-gray-750 p-4 rounded-lg">
                <div className="flex justify-between items-center">
                  <p className="text-sm text-gray-500 dark:text-gray-400">Number of Protocols</p>
                  <p className="text-lg font-semibold text-gray-900 dark:text-white">
                    {defiProtocols.length}
                  </p>
                </div>
              </div>
              
              <div className="bg-gray-50 dark:bg-gray-750 p-4 rounded-lg">
                <div className="flex justify-between items-center">
                  <p className="text-sm text-gray-500 dark:text-gray-400">Average APY</p>
                  <p className="text-lg font-semibold text-green-600 dark:text-green-400">
                    {(defiProtocols.reduce((sum, p) => sum + p.apy, 0) / defiProtocols.length).toFixed(2)}%
                  </p>
                </div>
              </div>
              
              <div className="bg-gray-50 dark:bg-gray-750 p-4 rounded-lg">
                <div className="flex justify-between items-center">
                  <p className="text-sm text-gray-500 dark:text-gray-400">Top Category</p>
                  <p className="text-lg font-semibold text-gray-900 dark:text-white">
                    {categoryUsage[0].category}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div>
        <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4 px-1">
          Protocols Using bSOL
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {defiProtocols.map(protocol => (
            <ProtocolCard key={protocol.id} protocol={protocol} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DefiUsage;