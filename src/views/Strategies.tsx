import React from 'react';
import { strategyOptions } from '../data/mockData';
import StrategyCard from '../components/StrategyCard';
import StrategyCalculator from '../components/StrategyCalculator';

const Strategies: React.FC = () => {
  // Group strategies by risk level
  const lowRiskStrategies = strategyOptions.filter(s => s.risk === 'Low');
  const mediumRiskStrategies = strategyOptions.filter(s => s.risk === 'Medium');
  const highRiskStrategies = strategyOptions.filter(s => s.risk === 'High');

  return (
    <div className="space-y-6">
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 border border-gray-100 dark:border-gray-700">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          bSOL Strategies
        </h2>
        
        <p className="text-gray-700 dark:text-gray-300 mb-6">
          Explore various strategies to optimize your bSOL yields. Select different risk profiles to match your investment goals.
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <StrategyCalculator strategies={strategyOptions} />
          
          <div className="bg-gray-50 dark:bg-gray-750 rounded-lg p-6">
            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
              Understanding Risk
            </h3>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="px-2 py-1 rounded-full bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300 text-xs font-medium mr-3">
                  Low Risk
                </div>
                <div>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">
                    Basic strategies with minimal exposure to market volatility. Suitable for conservative investors.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="px-2 py-1 rounded-full bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300 text-xs font-medium mr-3">
                  Medium Risk
                </div>
                <div>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">
                    Balanced approach with moderate exposure to market fluctuations. Good for diversified portfolios.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="px-2 py-1 rounded-full bg-rose-100 text-rose-800 dark:bg-rose-900/30 dark:text-rose-300 text-xs font-medium mr-3">
                  High Risk
                </div>
                <div>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">
                    Advanced strategies with higher potential returns but greater exposure to volatility. For experienced investors.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
              <h4 className="font-medium text-gray-900 dark:text-white mb-3">
                Things to Consider
              </h4>
              
              <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 rounded-full bg-blue-500 mt-1.5 mr-2"></span>
                  <span>Past performance does not guarantee future results</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 rounded-full bg-blue-500 mt-1.5 mr-2"></span>
                  <span>APYs fluctuate based on market conditions</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 rounded-full bg-blue-500 mt-1.5 mr-2"></span>
                  <span>Some strategies may have lockup periods</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 rounded-full bg-blue-500 mt-1.5 mr-2"></span>
                  <span>Consider your investment timeframe when selecting strategies</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      
      {lowRiskStrategies.length > 0 && (
        <div>
          <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4 px-1 flex items-center">
            <span className="w-3 h-3 rounded-full bg-green-500 mr-2"></span>
            Low Risk Strategies
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {lowRiskStrategies.map(strategy => (
              <StrategyCard key={strategy.id} strategy={strategy} />
            ))}
          </div>
        </div>
      )}
      
      {mediumRiskStrategies.length > 0 && (
        <div>
          <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4 mt-8 px-1 flex items-center">
            <span className="w-3 h-3 rounded-full bg-amber-500 mr-2"></span>
            Medium Risk Strategies
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mediumRiskStrategies.map(strategy => (
              <StrategyCard key={strategy.id} strategy={strategy} />
            ))}
          </div>
        </div>
      )}
      
      {highRiskStrategies.length > 0 && (
        <div>
          <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4 mt-8 px-1 flex items-center">
            <span className="w-3 h-3 rounded-full bg-rose-500 mr-2"></span>
            High Risk Strategies
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {highRiskStrategies.map(strategy => (
              <StrategyCard key={strategy.id} strategy={strategy} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Strategies;