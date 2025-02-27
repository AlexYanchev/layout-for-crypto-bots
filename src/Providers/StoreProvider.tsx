import React, {
  FC,
  useMemo,
  useContext,
  createContext,
  ReactNode,
  useState,
} from 'react';
import { I_AppData } from '../types/I_AppData';
import AppData from '../mockData/data.min';
import { I_Bot } from '../types/I_Bot';
import { T_NamesBots } from '../types/T_NamesBots';
import { E_TimeRange } from '../types/E_TimeRange';

interface I_InitialState {
  data: I_AppData;
  currentBot: I_Bot;
  currentTimeRange: E_TimeRange;
  setCurrentTimeRange: (timeRange: E_TimeRange) => void;
  setBot: (nameBot: T_NamesBots) => void;
}

const StoreContext = createContext<I_InitialState | null>(null);

interface StoreProviderProps {
  children: ReactNode;
}

const StoreProvider: FC<StoreProviderProps> = ({ children }) => {
  const data = useMemo(() => {
    return AppData as I_AppData;
  }, []);
  const [currentBot, setCurrentBot] = useState<I_Bot>(data.bots[0]);
  const [currentTimeRange, setCurrentTimeRange] = useState<E_TimeRange>(
    E_TimeRange.ALL_TIME
  );

  const setBot = (nameBot: T_NamesBots) => {
    const bot = data.bots.find((bot) => bot.name === nameBot) || data.bots[0];
    setCurrentBot(bot);
  };

  return (
    <StoreContext
      value={{
        data,
        currentBot,
        currentTimeRange,
        setBot,
        setCurrentTimeRange,
      }}
    >
      {children}
    </StoreContext>
  );
};

export function useStoreContext(): I_InitialState;
export function useStoreContext<T>(fn: (state: I_InitialState) => T): T;
export function useStoreContext<T>(
  fn?: (state: I_InitialState) => T
): T | I_InitialState {
  const store = useContext(StoreContext) as I_InitialState;
  if (fn) {
    return fn(store);
  }
  return store;
}

export default StoreProvider;
