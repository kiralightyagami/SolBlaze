import React from 'react';

interface DataCardProps {
  title: string;
  value: string | number;
  change?: number;
  icon: React.ReactNode;
}

const DataCard: React.FC<DataCardProps> = ({ title, value, change, icon }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 transition-all hover:shadow-md border border-gray-100 dark:border-gray-700">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm font-medium text-gray-500 dark:text-gray-400">{title}</p>
          <p className="mt-2 text-3xl font-semibold text-gray-900 dark:text-white">{value}</p>
          
          {change !== undefined && (
            <p className={`mt-2 text-sm font-medium ${
              change >= 0 
                ? 'text-green-600 dark:text-green-400' 
                : 'text-red-600 dark:text-red-400'
            }`}>
              {change >= 0 ? '+' : ''}{change}%
            </p>
          )}
        </div>
        <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
          {icon}
        </div>
      </div>
    </div>
  );
};

export default DataCard;