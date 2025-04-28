import React from 'react';
import { DefiProtocol } from '../types';

interface ProtocolCardProps {
  protocol: DefiProtocol;
}

const ProtocolCard: React.FC<ProtocolCardProps> = ({ protocol }) => {
  // Format large numbers with commas and K/M for thousands/millions
  const formatValue = (value: number): string => {
    if (value >= 1000000) {
      return `$${(value / 1000000).toFixed(1)}M`;
    } else if (value >= 1000) {
      return `$${(value / 1000).toFixed(1)}K`;
    } else {
      return `$${value}`;
    }
  };

  // Calculate percentage of bSOL in total TVL
  const bsolPercentage = (protocol.bsolUsed / protocol.tvl) * 100;

  // Determine category color
  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'DEX':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300';
      case 'Lending':
        return 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300';
      case 'Liquid Staking':
        return 'bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300';
      case 'Aggregator':
        return 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300';
      case 'Yield':
        return 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900/30 dark:text-indigo-300';
      case 'Derivatives':
        return 'bg-rose-100 text-rose-800 dark:bg-rose-900/30 dark:text-rose-300';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-300';
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-5 transition-all hover:shadow-md border border-gray-100 dark:border-gray-700">
      <div className="flex flex-col h-full">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            {protocol.name}
          </h3>
          <span className={`text-xs px-2 py-1 rounded-full font-medium ${getCategoryColor(protocol.category)}`}>
            {protocol.category}
          </span>
        </div>
        
        <div className="space-y-4 flex-grow">
          <div>
            <p className="text-sm text-gray-500 dark:text-gray-400">Total TVL</p>
            <p className="text-xl font-semibold text-gray-900 dark:text-white">
              {formatValue(protocol.tvl)}
            </p>
          </div>
          
          <div>
            <p className="text-sm text-gray-500 dark:text-gray-400">bSOL Used</p>
            <p className="text-xl font-semibold text-gray-900 dark:text-white">
              {formatValue(protocol.bsolUsed)}
            </p>
            <div className="mt-1 w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
              <div 
                className="h-2 rounded-full bg-blue-500 dark:bg-blue-600"
                style={{ width: `${bsolPercentage}%` }}
              />
            </div>
            <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
              {bsolPercentage.toFixed(1)}% of protocol TVL
            </p>
          </div>
        </div>
        
        <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-700">
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-500 dark:text-gray-400">Current APY</span>
            <span className="text-lg font-semibold text-green-600 dark:text-green-400">
              {protocol.apy.toFixed(1)}%
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProtocolCard;