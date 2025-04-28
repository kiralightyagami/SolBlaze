import React, { useState } from 'react';
import { Search } from 'lucide-react';

const TransactionDecoder: React.FC = () => {
  const [transactionId, setTransactionId] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [decodedData, setDecodedData] = useState<null | {
    status: string;
    type: string;
    amount: number;
    timestamp: string;
    details: string;
    address: string;
  }>(null);

  const handleDecode = (e: React.FormEvent) => {
    e.preventDefault();
    if (!transactionId.trim()) return;
    
    setIsLoading(true);
    
    // Simulate API call with timeout
    setTimeout(() => {
      // Mock decoded transaction data
      if (transactionId.startsWith('0x') || transactionId.length > 8) {
        setDecodedData({
          status: 'Confirmed',
          type: 'Stake',
          amount: 25.5,
          timestamp: new Date().toISOString(),
          details: 'Stake 25.5 SOL to BlazeStake for bSOL',
          address: '5xB42...8fA1'
        });
      } else {
        setDecodedData(null);
      }
      
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 border border-gray-100 dark:border-gray-700">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
        Transaction Decoder
      </h3>
      
      <form onSubmit={handleDecode} className="space-y-4">
        <div>
          <label htmlFor="tx-id" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Enter Transaction ID
          </label>
          <div className="relative">
            <input
              id="tx-id"
              type="text"
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              placeholder="0x1234abcd..."
              value={transactionId}
              onChange={(e) => setTransactionId(e.target.value)}
            />
            <button
              type="submit"
              className="absolute right-2 top-1/2 transform -translate-y-1/2 p-1 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"
              disabled={isLoading}
            >
              <Search size={20} />
            </button>
          </div>
        </div>
        
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg font-medium transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={isLoading || !transactionId.trim()}
        >
          {isLoading ? 'Decoding...' : 'Decode Transaction'}
        </button>
      </form>
      
      {decodedData && (
        <div className="mt-6 border-t border-gray-100 dark:border-gray-700 pt-4">
          <h4 className="text-md font-medium text-gray-900 dark:text-white mb-3">
            Decoded Transaction
          </h4>
          
          <div className="space-y-3 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-500 dark:text-gray-400">Type:</span>
              <span className="font-medium text-gray-900 dark:text-white">{decodedData.type}</span>
            </div>
            
            <div className="flex justify-between">
              <span className="text-gray-500 dark:text-gray-400">Amount:</span>
              <span className="font-medium text-gray-900 dark:text-white">{decodedData.amount} SOL</span>
            </div>
            
            <div className="flex justify-between">
              <span className="text-gray-500 dark:text-gray-400">Status:</span>
              <span className="px-2 py-0.5 rounded-full text-xs bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300">
                {decodedData.status}
              </span>
            </div>
            
            <div className="flex justify-between">
              <span className="text-gray-500 dark:text-gray-400">Timestamp:</span>
              <span className="font-medium text-gray-900 dark:text-white">
                {new Date(decodedData.timestamp).toLocaleString()}
              </span>
            </div>
            
            <div className="flex justify-between">
              <span className="text-gray-500 dark:text-gray-400">Address:</span>
              <span className="font-medium text-gray-900 dark:text-white">{decodedData.address}</span>
            </div>
            
            <div>
              <span className="text-gray-500 dark:text-gray-400 block mb-1">Details:</span>
              <span className="font-medium text-gray-900 dark:text-white">{decodedData.details}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TransactionDecoder;