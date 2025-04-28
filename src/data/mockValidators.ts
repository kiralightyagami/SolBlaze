import { Validator, ValidatorMetrics } from '../types';

export const validators: Validator[] = [
  {
    id: '1',
    name: 'Helios Prime',
    identity: 'helios.sol',
    stake: 2500000,
    commission: 8,
    uptime: 99.98,
    mevScore: 0.1,
    riskScore: 0.2,
    sybilScore: 0.1,
    votingScore: 0.95,
    status: 'Active',
    lastVote: '2024-03-15T14:23:15Z',
    version: '1.17.0'
  },
  {
    id: '2',
    name: 'Quantum Node',
    identity: 'quantum.sol',
    stake: 1800000,
    commission: 7,
    uptime: 99.95,
    mevScore: 0.15,
    riskScore: 0.3,
    sybilScore: 0.2,
    votingScore: 0.92,
    status: 'Active',
    lastVote: '2024-03-15T14:23:10Z',
    version: '1.17.0'
  },
  {
    id: '3',
    name: 'Nexus Validator',
    identity: 'nexus.sol',
    stake: 2100000,
    commission: 6.5,
    uptime: 99.97,
    mevScore: 0.12,
    riskScore: 0.25,
    sybilScore: 0.15,
    votingScore: 0.94,
    status: 'Active',
    lastVote: '2024-03-15T14:23:05Z',
    version: '1.17.0'
  },
  {
    id: '4',
    name: 'Cyber Sentinel',
    identity: 'sentinel.sol',
    stake: 1500000,
    commission: 7.5,
    uptime: 99.93,
    mevScore: 0.18,
    riskScore: 0.35,
    sybilScore: 0.25,
    votingScore: 0.9,
    status: 'Active',
    lastVote: '2024-03-15T14:23:00Z',
    version: '1.17.0'
  },
  {
    id: '5',
    name: 'Matrix Node',
    identity: 'matrix.sol',
    stake: 1900000,
    commission: 8.5,
    uptime: 99.94,
    mevScore: 0.14,
    riskScore: 0.28,
    sybilScore: 0.18,
    votingScore: 0.93,
    status: 'Active',
    lastVote: '2024-03-15T14:22:55Z',
    version: '1.17.0'
  }
];

export const validatorMetrics: ValidatorMetrics = {
  totalValidators: 3250,
  activeValidators: 3100,
  totalStake: 450000000,
  averageUptime: 99.95,
  highRiskValidators: 42,
  mevIncidents: 156,
  sybilClusters: 8,
  votingViolations: 24
};