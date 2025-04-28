import React from 'react';
import { recentTransactions } from '../data/mockData';
import TransactionList from '../components/TransactionList';
import TransactionDecoder from '../components/TransactionDecoder';

const Transactions: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 border border-gray-100 dark:border-gray-700">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          Transaction Decoder
        </h2>
        
        <p className="text-gray-700 dark:text-gray-300 mb-6">
          Decode and understand bSOL transactions. Enter a transaction ID to see human-readable information about stake pool interactions.
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <TransactionDecoder />
          
          <div className="bg-gray-50 dark:bg-gray-750 rounded-lg p-6">
            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
              Transaction Types
            </h3>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="p-2 rounded-lg bg-green-100 dark:bg-green-900/30 mr-3">
                  <span className="text-lg" aria-hidden="true">⬆️</span>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white">Stake</h4>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    When SOL is staked to BlazeStake to receive bSOL tokens.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="p-2 rounded-lg bg-amber-100 dark:bg-amber-900/30 mr-3">
                  <span className="text-lg" aria-hidden="true">⬇️</span>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white">Unstake</h4>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    When bSOL is converted back to SOL by unstaking from BlazeStake.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900/30 mr-3">
                  <span className="text-lg" aria-hidden="true">🎁</span>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white">Claim</h4>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    When staking rewards are claimed from the stake pool.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="p-2 rounded-lg bg-purple-100 dark:bg-purple-900/30 mr-3">
                  <span className="text-lg" aria-hidden="true">↔️</span>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white">Transfer</h4>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    When bSOL tokens are transferred between wallets.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="p-2 rounded-lg bg-indigo-100 dark:bg-indigo-900/30 mr-3">
                  <span className="text-lg" aria-hidden="true">💰</span>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white">DeFi</h4>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    When bSOL is used in DeFi protocols (providing liquidity, lending, etc).
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div>
        <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4 px-1">
          Recent Transactions
        </h3>
        <TransactionList transactions={recentTransactions} />
      </div>
    </div>
  );
};

export default Transactions;