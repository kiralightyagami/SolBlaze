import React, { useState } from 'react';
import { Search, SlidersHorizontal } from 'lucide-react';
import { validators, validatorMetrics } from '../data/mockValidators';
import ValidatorCard from '../components/ValidatorCard';
import MetricsGrid from '../components/MetricsGrid';

const Validators: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRisk, setSelectedRisk] = useState<string>('all');

  const filteredValidators = validators.filter(validator => {
    const matchesSearch = validator.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         validator.identity.toLowerCase().includes(searchTerm.toLowerCase());
    
    if (selectedRisk === 'all') return matchesSearch;
    if (selectedRisk === 'low') return matchesSearch && validator.riskScore <= 0.2;
    if (selectedRisk === 'medium') return matchesSearch && validator.riskScore > 0.2 && validator.riskScore <= 0.4;
    if (selectedRisk === 'high') return matchesSearch && validator.riskScore > 0.4;
    
    return matchesSearch;
  });

  return (
    <div className="space-y-6">
      <div className="bg-white dark:bg-gray-900/50 backdrop-blur-xl rounded-xl border border-gray-200 dark:border-gray-800/50 p-6">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 mb-6">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Validator Ecosystem Analysis</h2>
            <p className="text-gray-600 dark:text-gray-400">Monitor validator behavior, detect potential threats, and analyze network health</p>
          </div>
          
          <div className="flex items-center space-x-4 w-full lg:w-auto">
            <div className="relative flex-1 lg:flex-none lg:w-64">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500" size={18} />
              <input
                type="text"
                placeholder="Search validators..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-white dark:bg-gray-900/50 border border-gray-200 dark:border-gray-800/50 rounded-lg focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 text-gray-900 dark:text-white placeholder-gray-500"
              />
            </div>
            
            <div className="relative">
              <select
                value={selectedRisk}
                onChange={(e) => setSelectedRisk(e.target.value)}
                className="appearance-none pl-4 pr-10 py-2 bg-white dark:bg-gray-900/50 border border-gray-200 dark:border-gray-800/50 rounded-lg focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 text-gray-900 dark:text-white"
              >
                <option value="all">All Risks</option>
                <option value="low">Low Risk</option>
                <option value="medium">Medium Risk</option>
                <option value="high">High Risk</option>
              </select>
              <SlidersHorizontal className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500" size={18} />
            </div>
          </div>
        </div>

        <MetricsGrid metrics={validatorMetrics} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {filteredValidators.map(validator => (
          <ValidatorCard key={validator.id} validator={validator} />
        ))}
      </div>

      <div className="bg-white dark:bg-gray-900/50 backdrop-blur-xl rounded-xl border border-gray-200 dark:border-gray-800/50 p-6">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Risk Assessment Methodology</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div>
              <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-2">Risk Scoring</h4>
              <p className="text-gray-600 dark:text-gray-400">
                Our risk assessment combines multiple factors including historical performance,
                network behavior, and compliance with protocol rules to generate comprehensive risk scores.
              </p>
            </div>
            
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-gray-700 dark:text-gray-300">Low Risk (0-2)</span>
                <div className="w-24 h-2 rounded-full bg-emerald-200 dark:bg-emerald-500/20" />
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-700 dark:text-gray-300">Medium Risk (2-4)</span>
                <div className="w-24 h-2 rounded-full bg-amber-200 dark:bg-amber-500/20" />
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-700 dark:text-gray-300">High Risk (4+)</span>
                <div className="w-24 h-2 rounded-full bg-red-200 dark:bg-red-500/20" />
              </div>
            </div>
          </div>
          
          <div className="space-y-4">
            <div>
              <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-2">Monitoring Metrics</h4>
              <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                <li>• Voting pattern analysis for consensus violations</li>
                <li>• Network behavior monitoring for MEV activities</li>
                <li>• Stake concentration and delegation patterns</li>
                <li>• Historical performance and reliability metrics</li>
                <li>• Infrastructure diversity and version compliance</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Validators;