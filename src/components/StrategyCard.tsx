import React from 'react';
import { StrategyOption } from '../types';

interface StrategyCardProps {
  strategy: StrategyOption;
}

const StrategyCard: React.FC<StrategyCardProps> = ({ strategy }) => {
  const totalApy = strategy.baseApy + strategy.additionalApy;

  // Determine risk indicator color
  const getRiskColor = (risk: 'Low' | 'Medium' | 'High') => {
    switch (risk) {
      case 'Low':
        return 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300';
      case 'Medium':
        return 'bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300';
      case 'High':
        return 'bg-rose-100 text-rose-800 dark:bg-rose-900/30 dark:text-rose-300';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-300';
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-5 transition-all hover:shadow-md border border-gray-100 dark:border-gray-700">
      <div className="flex flex-col h-full">
        <div className="flex justify-between items-start">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            {strategy.name}
          </h3>
          <span className={`text-xs px-2 py-1 rounded-full font-medium ${getRiskColor(strategy.risk)}`}>
            {strategy.risk} Risk
          </span>
        </div>
        
        <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
          {strategy.protocol}
        </p>
        
        <div className="mt-4 flex-grow">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm text-gray-500 dark:text-gray-400">Base APY</span>
            <span className="text-sm font-medium text-gray-800 dark:text-gray-200">
              {strategy.baseApy.toFixed(1)}%
            </span>
          </div>
          
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm text-gray-500 dark:text-gray-400">Additional APY</span>
            <span className="text-sm font-medium text-green-600 dark:text-green-400">
              +{strategy.additionalApy.toFixed(1)}%
            </span>
          </div>
          
          <div className="flex justify-between items-center mb-4 pt-2 border-t border-gray-100 dark:border-gray-700">
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Total APY</span>
            <span className="text-lg font-semibold text-green-600 dark:text-green-400">
              {totalApy.toFixed(1)}%
            </span>
          </div>
          
          {strategy.lockupPeriod > 0 && (
            <div className="flex items-center mt-3 text-sm text-amber-600 dark:text-amber-400">
              <span className="mr-1">⚠️</span>
              <span>{strategy.lockupPeriod} day{strategy.lockupPeriod !== 1 ? 's' : ''} lockup period</span>
            </div>
          )}
        </div>
        
        <button className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg font-medium transition-colors duration-200">
          View Strategy Details
        </button>
      </div>
    </div>
  );
};

export default StrategyCard;