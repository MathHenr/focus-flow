// import context
import { createContext } from 'react';

// import type and state
import { initTimerState } from './initTimerState';
import type { TimerStateModel } from '../../models/TimerStateModel';

const initialContextState = {
  state: initTimerState,
  setState: () => {},
};

export interface TimerContextProps {
  state: TimerStateModel;
  setState: React.Dispatch<React.SetStateAction<TimerStateModel>>;
}

export const TimerContext = createContext<TimerContextProps>(initialContextState);
