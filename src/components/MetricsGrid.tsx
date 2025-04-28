import React from 'react';
import { ValidatorMetrics } from '../types';
import { Shield, Users, Database, Activity, AlertTriangle, Zap, Network, Vote } from 'lucide-react';

interface MetricsGridProps {
  metrics: ValidatorMetrics;
}

const MetricsGrid: React.FC<MetricsGridProps> = ({ metrics }) => {
  const cards = [
    {
      title: 'Total Validators',
      value: metrics.totalValidators.toLocaleString(),
      icon: <Shield className="text-blue-600 dark:text-blue-400" size={24} />,
      change: '+12 this week'
    },
    {
      title: 'Active Set',
      value: metrics.activeValidators.toLocaleString(),
      icon: <Users className="text-emerald-600 dark:text-emerald-400" size={24} />,
      change: '95.4% of total'
    },
    {
      title: 'Total Stake',
      value: `${(metrics.totalStake / 1000000).toFixed(1)}M SOL`,
      icon: <Database className="text-purple-600 dark:text-purple-400" size={24} />,
      change: '+2.3M this month'
    },
    {
      title: 'Average Uptime',
      value: `${metrics.averageUptime}%`,
      icon: <Activity className="text-sky-600 dark:text-sky-400" size={24} />,
      change: '+0.02% this week'
    },
    {
      title: 'High Risk Validators',
      value: metrics.highRiskValidators.toString(),
      icon: <AlertTriangle className="text-red-600 dark:text-red-400" size={24} />,
      change: '-3 this week'
    },
    {
      title: 'MEV Incidents',
      value: metrics.mevIncidents.toString(),
      icon: <Zap className="text-amber-600 dark:text-amber-400" size={24} />,
      change: '+18 this month'
    },
    {
      title: 'Sybil Clusters',
      value: metrics.sybilClusters.toString(),
      icon: <Network className="text-indigo-600 dark:text-indigo-400" size={24} />,
      change: 'No change'
    },
    {
      title: 'Voting Violations',
      value: metrics.votingViolations.toString(),
      icon: <Vote className="text-rose-600 dark:text-rose-400" size={24} />,
      change: '-2 this week'
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {cards.map((card, index) => (
        <div
          key={index}
          className="relative bg-white dark:bg-gray-900/50 backdrop-blur-xl rounded-xl border border-gray-200 dark:border-gray-800/50 p-6 hover:border-blue-500/50 transition-all duration-300"
        >
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-xl pointer-events-none" />
          
          <div className="relative">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">{card.title}</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white mt-2">{card.value}</p>
              </div>
              <div className="p-2 bg-gray-100 dark:bg-gray-800/50 rounded-lg">
                {card.icon}
              </div>
            </div>
            
            <p className="text-sm text-gray-600 dark:text-gray-500 mt-4">{card.change}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MetricsGrid;