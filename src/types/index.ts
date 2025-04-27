export interface HistoricalDataPoint {
  date: string;
  value: number;
}

export interface TVLData {
  total: HistoricalDataPoint[];
  defi: HistoricalDataPoint[];
}

export interface UserCountData {
  total: HistoricalDataPoint[];
  active: HistoricalDataPoint[];
}

export interface DefiProtocol {
  id: string;
  name: string;
  category: string;
  tvl: number;
  apy: number;
  bsolUsed: number;
}

export interface StrategyOption {
  id: string;
  name: string;
  protocol: string;
  baseApy: number;
  additionalApy: number;
  risk: 'Low' | 'Medium' | 'High';
  lockupPeriod: number;
}

export interface Transaction {
  id: string;
  type: 'Stake' | 'Unstake' | 'Claim' | 'Transfer' | 'DeFi';
  amount: number;
  timestamp: string;
  address: string;
  status: 'Confirmed' | 'Pending';
  protocol?: string;
  details?: string;
}

export interface Validator {
  id: string;
  name: string;
  identity: string;
  stake: number;
  commission: number;
  uptime: number;
  mevScore: number;
  riskScore: number;
  sybilScore: number;
  votingScore: number;
  status: 'Active' | 'Inactive' | 'Jailed';
  lastVote: string;
  version: string;
}

export interface ValidatorMetrics {
  totalValidators: number;
  activeValidators: number;
  totalStake: number;
  averageUptime: number;
  highRiskValidators: number;
  mevIncidents: number;
  sybilClusters: number;
  votingViolations: number;
}