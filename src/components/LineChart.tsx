import React from 'react';
import { HistoricalDataPoint } from '../types';

interface LineChartProps {
  data: HistoricalDataPoint[];
  height: number;
  label: string;
  color: string;
  valuePrefix?: string;
  valueSuffix?: string;
}

const LineChart: React.FC<LineChartProps> = ({ 
  data, 
  height, 
  label, 
  color,
  valuePrefix = '', 
  valueSuffix = '' 
}) => {
  // Find min and max values for scaling
  const values = data.map(d => d.value);
  const minValue = Math.min(...values);
  const maxValue = Math.max(...values);
  const range = maxValue - minValue;
  
  // Function to scale values to chart height
  const scaleY = (value: number) => {
    // Leave some padding at top and bottom (10%)
    const padding = height * 0.1;
    const availableHeight = height - (padding * 2);
    return height - padding - ((value - minValue) / range) * availableHeight;
  };

  // Create points for the path
  const points = data.map((point, index) => {
    const x = (index / (data.length - 1)) * 100;
    const y = scaleY(point.value);
    return `${x},${y}`;
  }).join(' ');

  // Format date labels (showing only some for readability)
  const dateLabels = data.filter((_, index) => index === 0 || index === Math.floor(data.length / 2) || index === data.length - 1);

  // Format value for display
  const formatValue = (value: number): string => {
    if (value >= 1000000) {
      return `${valuePrefix}${(value / 1000000).toFixed(1)}M${valueSuffix}`;
    } else if (value >= 1000) {
      return `${valuePrefix}${(value / 1000).toFixed(1)}K${valueSuffix}`;
    } else {
      return `${valuePrefix}${value}${valueSuffix}`;
    }
  };

  return (
    <div className="relative">
      <div className="mb-2">
        <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">{label}</h3>
        <p className="text-xl font-semibold text-gray-900 dark:text-white">
          {formatValue(data[data.length - 1].value)}
        </p>
      </div>
      
      <svg width="100%" height={height} className="overflow-visible">
        {/* Grid lines */}
        <line 
          x1="0" 
          y1={height} 
          x2="100%" 
          y2={height} 
          stroke="currentColor" 
          className="text-gray-200 dark:text-gray-700" 
          strokeWidth="1" 
        />
        
        {/* Chart line */}
        <polyline 
          points={points} 
          fill="none" 
          stroke={color} 
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        
        {/* Chart area fill with gradient */}
        <linearGradient id={`grad-${label.replace(/\s+/g, '-')}`} x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor={color} stopOpacity="0.2" />
          <stop offset="100%" stopColor={color} stopOpacity="0" />
        </linearGradient>
        <polyline 
          points={`${points} ${100},${height} 0,${height}`} 
          fill={`url(#grad-${label.replace(/\s+/g, '-')})`}
          strokeWidth="0"
        />
        
        {/* Data points */}
        {data.map((point, index) => (
          <g key={index} className="transition-opacity duration-200 opacity-0 hover:opacity-100">
            <circle
              cx={`${(index / (data.length - 1)) * 100}%`}
              cy={scaleY(point.value)}
              r="4"
              fill="white"
              stroke={color}
              strokeWidth="2"
              className="cursor-pointer"
            />
            <title>{`${point.date}: ${formatValue(point.value)}`}</title>
          </g>
        ))}
      </svg>
      
      {/* X-axis labels */}
      <div className="flex justify-between mt-2 text-xs text-gray-500 dark:text-gray-400">
        {dateLabels.map((label, index) => (
          <div key={index}>
            {new Date(label.date).toLocaleDateString(undefined, { month: 'short', year: '2-digit' })}
          </div>
        ))}
      </div>
    </div>
  );
};

export default LineChart;