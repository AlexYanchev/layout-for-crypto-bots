import { T_NamesBots } from './T_NamesBots';

export interface I_Bot {
  name: T_NamesBots;
  cost: number;
  '24h': number;
  '7d': number;
  '30d': number;
  '60d': number;
  '90d': number;
  all_time: number;
}
