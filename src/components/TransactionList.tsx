import React from 'react';
import { Transaction } from '../types';

interface TransactionListProps {
  transactions: Transaction[];
}

const TransactionList: React.FC<TransactionListProps> = ({ transactions }) => {
  // Helper to format timestamps
  const formatTime = (timestamp: string) => {
    const date = new Date(timestamp);
    return date.toLocaleString();
  };

  // Helper to format SOL amounts
  const formatAmount = (amount: number) => {
    return `${amount.toFixed(2)} SOL`;
  };

  // Get icon and color for transaction type
  const getTransactionTypeStyle = (type: string) => {
    switch (type) {
      case 'Stake':
        return {
          bgColor: 'bg-green-100 dark:bg-green-900/30',
          textColor: 'text-green-800 dark:text-green-300',
          icon: '⬆️'
        };
      case 'Unstake':
        return {
          bgColor: 'bg-amber-100 dark:bg-amber-900/30',
          textColor: 'text-amber-800 dark:text-amber-300',
          icon: '⬇️'
        };
      case 'Claim':
        return {
          bgColor: 'bg-blue-100 dark:bg-blue-900/30',
          textColor: 'text-blue-800 dark:text-blue-300',
          icon: '🎁'
        };
      case 'Transfer':
        return {
          bgColor: 'bg-purple-100 dark:bg-purple-900/30',
          textColor: 'text-purple-800 dark:text-purple-300',
          icon: '↔️'
        };
      case 'DeFi':
        return {
          bgColor: 'bg-indigo-100 dark:bg-indigo-900/30',
          textColor: 'text-indigo-800 dark:text-indigo-300',
          icon: '💰'
        };
      default:
        return {
          bgColor: 'bg-gray-100 dark:bg-gray-900/30',
          textColor: 'text-gray-800 dark:text-gray-300',
          icon: '🔄'
        };
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden">
      <div className="p-4 border-b border-gray-100 dark:border-gray-700">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Recent Transactions</h3>
      </div>
      
      <div className="divide-y divide-gray-100 dark:divide-gray-700">
        {transactions.map((tx) => {
          const { bgColor, textColor, icon } = getTransactionTypeStyle(tx.type);
          
          return (
            <div key={tx.id} className="p-4 hover:bg-gray-50 dark:hover:bg-gray-750 transition-colors">
              <div className="flex items-start justify-between">
                <div className="flex items-start">
                  <div className={`p-2 rounded-lg ${bgColor} mr-3`}>
                    <span className="text-lg" aria-hidden="true">{icon}</span>
                  </div>
                  
                  <div>
                    <div className="flex items-center">
                      <span className={`text-sm font-medium ${textColor}`}>
                        {tx.type}
                      </span>
                      {tx.protocol && (
                        <span className="ml-2 text-xs text-gray-500 dark:text-gray-400">
                          via {tx.protocol}
                        </span>
                      )}
                    </div>
                    
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                      {formatTime(tx.timestamp)}
                    </p>
                    
                    {tx.details && (
                      <p className="text-sm text-gray-700 dark:text-gray-300 mt-1">
                        {tx.details}
                      </p>
                    )}
                    
                    <div className="mt-2 flex items-center">
                      <span className="text-xs text-gray-500 dark:text-gray-400">
                        {tx.address}
                      </span>
                    </div>
                  </div>
                </div>
                
                <div className="text-right">
                  <p className="text-sm font-medium text-gray-900 dark:text-white">
                    {formatAmount(tx.amount)}
                  </p>
                  <span className={`text-xs px-2 py-0.5 rounded-full ${
                    tx.status === 'Confirmed' 
                      ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300' 
                      : 'bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300'
                  }`}>
                    {tx.status}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TransactionList;