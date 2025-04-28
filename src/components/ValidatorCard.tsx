import React from 'react';
import { Validator } from '../types';
import { Shield, Activity, Zap, Brain } from 'lucide-react';

interface ValidatorCardProps {
  validator: Validator;
}

const ValidatorCard: React.FC<ValidatorCardProps> = ({ validator }) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Active':
        return 'bg-emerald-100 dark:bg-emerald-900/20 text-emerald-700 dark:text-emerald-400 border-emerald-200 dark:border-emerald-500/20';
      case 'Inactive':
        return 'bg-amber-100 dark:bg-amber-900/20 text-amber-700 dark:text-amber-400 border-amber-200 dark:border-amber-500/20';
      case 'Jailed':
        return 'bg-red-100 dark:bg-red-900/20 text-red-700 dark:text-red-400 border-red-200 dark:border-red-500/20';
      default:
        return 'bg-gray-100 dark:bg-gray-900/20 text-gray-700 dark:text-gray-400 border-gray-200 dark:border-gray-500/20';
    }
  };

  const getRiskIndicator = (score: number) => {
    if (score <= 0.2) return 'bg-emerald-200 dark:bg-emerald-500/20';
    if (score <= 0.4) return 'bg-amber-200 dark:bg-amber-500/20';
    return 'bg-red-200 dark:bg-red-500/20';
  };

  return (
    <div className="relative bg-white dark:bg-gray-900/50 backdrop-blur-xl rounded-xl border border-gray-200 dark:border-gray-800/50 p-6 hover:border-blue-500/50 transition-all duration-300">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-xl pointer-events-none" />
      
      <div className="relative">
        <div className="flex items-start justify-between mb-4">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">{validator.name}</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">{validator.identity}</p>
          </div>
          <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(validator.status)}`}>
            {validator.status}
          </span>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="space-y-1">
            <p className="text-sm text-gray-500 dark:text-gray-400">Stake</p>
            <p className="text-lg font-semibold text-gray-900 dark:text-white">
              {(validator.stake / 1000000).toFixed(2)}M SOL
            </p>
          </div>
          <div className="space-y-1">
            <p className="text-sm text-gray-500 dark:text-gray-400">Commission</p>
            <p className="text-lg font-semibold text-gray-900 dark:text-white">{validator.commission}%</p>
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Shield size={16} className="text-blue-600 dark:text-blue-400" />
              <span className="text-sm text-gray-700 dark:text-gray-300">Risk Score</span>
            </div>
            <div className="flex items-center">
              <div className={`w-16 h-1.5 rounded-full ${getRiskIndicator(validator.riskScore)}`} />
              <span className="ml-2 text-sm text-gray-500 dark:text-gray-400">{(validator.riskScore * 10).toFixed(1)}</span>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Activity size={16} className="text-emerald-600 dark:text-emerald-400" />
              <span className="text-sm text-gray-700 dark:text-gray-300">Uptime</span>
            </div>
            <span className="text-sm text-emerald-600 dark:text-emerald-400">{validator.uptime}%</span>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Zap size={16} className="text-amber-600 dark:text-amber-400" />
              <span className="text-sm text-gray-700 dark:text-gray-300">MEV Score</span>
            </div>
            <div className="flex items-center">
              <div className={`w-16 h-1.5 rounded-full ${getRiskIndicator(validator.mevScore)}`} />
              <span className="ml-2 text-sm text-gray-500 dark:text-gray-400">{(validator.mevScore * 10).toFixed(1)}</span>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Brain size={16} className="text-purple-600 dark:text-purple-400" />
              <span className="text-sm text-gray-700 dark:text-gray-300">Sybil Score</span>
            </div>
            <div className="flex items-center">
              <div className={`w-16 h-1.5 rounded-full ${getRiskIndicator(validator.sybilScore)}`} />
              <span className="ml-2 text-sm text-gray-500 dark:text-gray-400">{(validator.sybilScore * 10).toFixed(1)}</span>
            </div>
          </div>
        </div>

        <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-800/50">
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-500 dark:text-gray-400">Last Vote</span>
            <span className="text-gray-700 dark:text-gray-300">{new Date(validator.lastVote).toLocaleTimeString()}</span>
          </div>
          <div className="flex items-center justify-between text-sm mt-2">
            <span className="text-gray-500 dark:text-gray-400">Version</span>
            <span className="text-gray-700 dark:text-gray-300">{validator.version}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ValidatorCard;