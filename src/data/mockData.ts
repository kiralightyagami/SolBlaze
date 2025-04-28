import { TVLData, UserCountData, DefiProtocol, StrategyOption, Transaction } from '../types';

export const tvlData: TVLData = {
  total: [
    { date: '2023-01-01', value: 1200000 },
    { date: '2023-02-01', value: 1450000 },
    { date: '2023-03-01', value: 1800000 },
    { date: '2023-04-01', value: 2200000 },
    { date: '2023-05-01', value: 2600000 },
    { date: '2023-06-01', value: 3100000 },
    { date: '2023-07-01', value: 3800000 },
    { date: '2023-08-01', value: 4500000 },
    { date: '2023-09-01', value: 5200000 },
    { date: '2023-10-01', value: 6100000 },
    { date: '2023-11-01', value: 7000000 },
    { date: '2023-12-01', value: 8200000 },
    { date: '2024-01-01', value: 9500000 },
    { date: '2024-02-01', value: 11000000 },
    { date: '2024-03-01', value: 12800000 },
  ],
  defi: [
    { date: '2023-01-01', value: 800000 },
    { date: '2023-02-01', value: 950000 },
    { date: '2023-03-01', value: 1200000 },
    { date: '2023-04-01', value: 1500000 },
    { date: '2023-05-01', value: 1800000 },
    { date: '2023-06-01', value: 2200000 },
    { date: '2023-07-01', value: 2700000 },
    { date: '2023-08-01', value: 3300000 },
    { date: '2023-09-01', value: 3900000 },
    { date: '2023-10-01', value: 4600000 },
    { date: '2023-11-01', value: 5400000 },
    { date: '2023-12-01', value: 6300000 },
    { date: '2024-01-01', value: 7400000 },
    { date: '2024-02-01', value: 8600000 },
    { date: '2024-03-01', value: 10100000 },
  ]
};

export const userCountData: UserCountData = {
  total: [
    { date: '2023-01-01', value: 500 },
    { date: '2023-02-01', value: 650 },
    { date: '2023-03-01', value: 800 },
    { date: '2023-04-01', value: 950 },
    { date: '2023-05-01', value: 1100 },
    { date: '2023-06-01', value: 1400 },
    { date: '2023-07-01', value: 1700 },
    { date: '2023-08-01', value: 2100 },
    { date: '2023-09-01', value: 2600 },
    { date: '2023-10-01', value: 3200 },
    { date: '2023-11-01', value: 3900 },
    { date: '2023-12-01', value: 4700 },
    { date: '2024-01-01', value: 5600 },
    { date: '2024-02-01', value: 6800 },
    { date: '2024-03-01', value: 8200 },
  ],
  active: [
    { date: '2023-01-01', value: 350 },
    { date: '2023-02-01', value: 450 },
    { date: '2023-03-01', value: 550 },
    { date: '2023-04-01', value: 650 },
    { date: '2023-05-01', value: 750 },
    { date: '2023-06-01', value: 950 },
    { date: '2023-07-01', value: 1150 },
    { date: '2023-08-01', value: 1450 },
    { date: '2023-09-01', value: 1800 },
    { date: '2023-10-01', value: 2200 },
    { date: '2023-11-01', value: 2700 },
    { date: '2023-12-01', value: 3300 },
    { date: '2024-01-01', value: 4000 },
    { date: '2024-02-01', value: 4900 },
    { date: '2024-03-01', value: 6000 },
  ]
};

export const defiProtocols: DefiProtocol[] = [
  { 
    id: '1', 
    name: 'Raydium', 
    category: 'DEX', 
    tvl: 3500000, 
    apy: 4.8, 
    bsolUsed: 2200000 
  },
  { 
    id: '2', 
    name: 'Marinade', 
    category: 'Liquid Staking', 
    tvl: 2800000, 
    apy: 6.2, 
    bsolUsed: 1800000 
  },
  { 
    id: '3', 
    name: 'Orca', 
    category: 'DEX', 
    tvl: 2200000, 
    apy: 5.5, 
    bsolUsed: 1400000 
  },
  { 
    id: '4', 
    name: 'Solend', 
    category: 'Lending', 
    tvl: 1900000, 
    apy: 7.8, 
    bsolUsed: 1200000 
  },
  { 
    id: '5', 
    name: 'Jupiter', 
    category: 'Aggregator', 
    tvl: 1700000, 
    apy: 3.2, 
    bsolUsed: 1100000 
  },
  { 
    id: '6', 
    name: 'Kamino', 
    category: 'Yield', 
    tvl: 1500000, 
    apy: 8.5, 
    bsolUsed: 950000 
  },
  { 
    id: '7', 
    name: 'Drift', 
    category: 'Derivatives', 
    tvl: 1300000, 
    apy: 9.2, 
    bsolUsed: 820000 
  },
  { 
    id: '8', 
    name: 'Mango Markets', 
    category: 'DEX', 
    tvl: 1100000, 
    apy: 6.8, 
    bsolUsed: 700000 
  }
];

export const strategyOptions: StrategyOption[] = [
  {
    id: '1',
    name: 'bSOL-SOL LP',
    protocol: 'Raydium',
    baseApy: 5.8,
    additionalApy: 2.2,
    risk: 'Low',
    lockupPeriod: 0
  },
  {
    id: '2',
    name: 'bSOL Supply',
    protocol: 'Solend',
    baseApy: 7.2,
    additionalApy: 1.5,
    risk: 'Low',
    lockupPeriod: 0
  },
  {
    id: '3',
    name: 'bSOL-USDC LP',
    protocol: 'Orca',
    baseApy: 8.4,
    additionalApy: 3.1,
    risk: 'Medium',
    lockupPeriod: 0
  },
  {
    id: '4',
    name: 'bSOL Leveraged Yield',
    protocol: 'Kamino',
    baseApy: 12.6,
    additionalApy: 5.8,
    risk: 'High',
    lockupPeriod: 7
  },
  {
    id: '5',
    name: 'bSOL-ETH LP',
    protocol: 'Raydium',
    baseApy: 9.2,
    additionalApy: 3.8,
    risk: 'Medium',
    lockupPeriod: 0
  },
  {
    id: '6',
    name: 'bSOL Vault Strategy',
    protocol: 'Drift',
    baseApy: 14.8,
    additionalApy: 6.2,
    risk: 'High',
    lockupPeriod: 14
  }
];

export const recentTransactions: Transaction[] = [
  {
    id: '0x123f681a',
    type: 'Stake',
    amount: 25,
    timestamp: '2024-03-15T14:23:15Z',
    address: '5xB42...8fA1',
    status: 'Confirmed'
  },
  {
    id: '0x456b891c',
    type: 'DeFi',
    amount: 10,
    timestamp: '2024-03-15T12:18:42Z',
    address: '3dF72...9bE4',
    status: 'Confirmed',
    protocol: 'Raydium',
    details: 'Add liquidity to bSOL-SOL pool'
  },
  {
    id: '0x789d234e',
    type: 'Unstake',
    amount: 5,
    timestamp: '2024-03-14T22:45:30Z',
    address: '8hJ93...2cD7',
    status: 'Confirmed'
  },
  {
    id: '0xabc4567f',
    type: 'Transfer',
    amount: 3.5,
    timestamp: '2024-03-14T18:12:05Z',
    address: '2gK45...7nP9',
    status: 'Confirmed'
  },
  {
    id: '0xdef8910g',
    type: 'Claim',
    amount: 0.8,
    timestamp: '2024-03-14T09:35:22Z',
    address: '5xB42...8fA1',
    status: 'Confirmed'
  },
  {
    id: '0x123h456i',
    type: 'DeFi',
    amount: 12,
    timestamp: '2024-03-13T16:51:38Z',
    address: '7jF81...3dA5',
    status: 'Confirmed',
    protocol: 'Solend',
    details: 'Supply bSOL as collateral'
  }
];