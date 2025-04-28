import React from 'react';
import { tvlData, userCountData, defiProtocols, recentTransactions } from '../data/mockData';
import DataCard from '../components/DataCard';
import LineChart from '../components/LineChart';
import TransactionList from '../components/TransactionList';
import { Wallet, Users, BarChart3, TrendingUp } from 'lucide-react';

const Overview: React.FC = () => {
  // Get the most recent values for the cards
  const currentTVL = tvlData.total[tvlData.total.length - 1].value;
  const previousTVL = tvlData.total[tvlData.total.length - 2].value;
  const tvlChange = ((currentTVL - previousTVL) / previousTVL) * 100;
  
  const currentUsers = userCountData.total[userCountData.total.length - 1].value;
  const previousUsers = userCountData.total[userCountData.total.length - 2].value;
  const userChange = ((currentUsers - previousUsers) / previousUsers) * 100;
  
  // Calculate total bSOL used in DeFi
  const totalBsolInDefi = defiProtocols.reduce((sum, protocol) => sum + protocol.bsolUsed, 0);
  
  // Calculate average APY across protocols
  const avgApy = defiProtocols.reduce((sum, protocol) => sum + protocol.apy, 0) / defiProtocols.length;

  // Format large numbers
  const formatLargeNumber = (value: number): string => {
    if (value >= 1000000) {
      return `$${(value / 1000000).toFixed(1)}M`;
    } else if (value >= 1000) {
      return `$${(value / 1000).toFixed(1)}K`;
    } else {
      return `$${value}`;
    }
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        <DataCard
          title="Total Value Locked"
          value={formatLargeNumber(currentTVL)}
          change={parseFloat(tvlChange.toFixed(2))}
          icon={<Wallet size={24} className="text-blue-600 dark:text-blue-400" />}
        />
        
        <DataCard
          title="Total Users"
          value={currentUsers.toLocaleString()}
          change={parseFloat(userChange.toFixed(2))}
          icon={<Users size={24} className="text-green-600 dark:text-green-400" />}
        />
        
        <DataCard
          title="bSOL in DeFi"
          value={formatLargeNumber(totalBsolInDefi)}
          icon={<BarChart3 size={24} className="text-purple-600 dark:text-purple-400" />}
        />
        
        <DataCard
          title="Average APY"
          value={`${avgApy.toFixed(2)}%`}
          icon={<TrendingUp size={24} className="text-amber-600 dark:text-amber-400" />}
        />
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 border border-gray-100 dark:border-gray-700">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Total Value Locked
          </h3>
          <LineChart 
            data={tvlData.total}
            height={200}
            label="TVL"
            color="#3B82F6"
            valuePrefix="$"
          />
        </div>
        
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 border border-gray-100 dark:border-gray-700">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            User Growth
          </h3>
          <LineChart 
            data={userCountData.total}
            height={200}
            label="Users"
            color="#10B981"
          />
        </div>
      </div>
      
      <div>
        <TransactionList transactions={recentTransactions} />
      </div>
    </div>
  );
};

export default Overview;