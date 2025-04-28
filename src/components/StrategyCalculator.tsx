import React, { useState, useEffect } from 'react';
import CalculatorInput from './CalculatorInput';
import { StrategyOption } from '../types';

interface StrategyCalculatorProps {
  strategies: StrategyOption[];
}

const StrategyCalculator: React.FC<StrategyCalculatorProps> = ({ strategies }) => {
  const [investmentAmount, setInvestmentAmount] = useState(1000);
  const [timeHorizon, setTimeHorizon] = useState(12);
  const [selectedStrategyId, setSelectedStrategyId] = useState(strategies[0]?.id || '');
  const [projectedReturns, setProjectedReturns] = useState<{
    finalAmount: number;
    profit: number;
    roi: number;
  }>({ finalAmount: 0, profit: 0, roi: 0 });

  // Find the selected strategy
  const selectedStrategy = strategies.find(s => s.id === selectedStrategyId) || strategies[0];
  
  // Calculate projected returns when inputs change
  useEffect(() => {
    if (selectedStrategy) {
      const totalApy = selectedStrategy.baseApy + selectedStrategy.additionalApy;
      const monthlyRate = totalApy / 100 / 12;
      const finalAmount = investmentAmount * Math.pow(1 + monthlyRate, timeHorizon);
      const profit = finalAmount - investmentAmount;
      const roi = (profit / investmentAmount) * 100;
      
      setProjectedReturns({
        finalAmount,
        profit,
        roi
      });
    }
  }, [investmentAmount, timeHorizon, selectedStrategy]);

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 border border-gray-100 dark:border-gray-700">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
        Strategy Calculator
      </h3>
      
      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Select Strategy
          </label>
          <select
            value={selectedStrategyId}
            onChange={(e) => setSelectedStrategyId(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
          >
            {strategies.map(strategy => (
              <option key={strategy.id} value={strategy.id}>
                {strategy.name} ({strategy.protocol}) - {(strategy.baseApy + strategy.additionalApy).toFixed(1)}% APY
              </option>
            ))}
          </select>
        </div>
        
        <div className="space-y-4">
          <CalculatorInput
            label="Investment Amount"
            value={investmentAmount}
            onChange={setInvestmentAmount}
            min={100}
            max={10000}
            step={100}
            prefix="$"
          />
          
          <CalculatorInput
            label="Time Horizon"
            value={timeHorizon}
            onChange={setTimeHorizon}
            min={1}
            max={36}
            step={1}
            suffix={timeHorizon === 1 ? " month" : " months"}
          />
        </div>
        
        <div className="mt-6 p-4 bg-gray-50 dark:bg-gray-750 rounded-lg border border-gray-100 dark:border-gray-700">
          <h4 className="text-md font-medium text-gray-900 dark:text-white mb-3">
            Projected Returns
          </h4>
          
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">Final Amount</p>
              <p className="text-xl font-semibold text-gray-900 dark:text-white">
                ${projectedReturns.finalAmount.toFixed(2)}
              </p>
            </div>
            
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">Profit</p>
              <p className="text-xl font-semibold text-green-600 dark:text-green-400">
                ${projectedReturns.profit.toFixed(2)}
              </p>
            </div>
            
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">ROI</p>
              <p className="text-xl font-semibold text-blue-600 dark:text-blue-400">
                {projectedReturns.roi.toFixed(2)}%
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {selectedStrategy.lockupPeriod > 0 && (
        <div className="mt-4 p-3 bg-amber-50 dark:bg-amber-900/20 rounded-lg border border-amber-100 dark:border-amber-800/30">
          <p className="text-sm text-amber-700 dark:text-amber-400 flex items-center">
            <span className="mr-2">⚠️</span>
            This strategy has a {selectedStrategy.lockupPeriod}-day lockup period.
          </p>
        </div>
      )}
    </div>
  );
};

export default StrategyCalculator;