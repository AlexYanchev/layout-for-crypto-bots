import { I_Bot } from './I_Bot';

export interface I_AppData {
  trading_capital: number;
  trading_capital_currency: string;
  balance: number;
  on_hold: number;
  bots: Array<I_Bot>;
}
