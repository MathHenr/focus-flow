// import react hook
import { useEffect, useReducer } from 'react';

// import initial values
import { initTimerState } from '../../contexts/TimerContext/initTimerState';

// import component context
import { TimerContext } from '../../contexts/TimerContext';
import { timerReducer } from '../../reducer/timerReducer';
import { TimerActionType } from '../../models/TimerActionModel';

type TimerContextProviderProps = {
  children: React.ReactNode;
};

export function TimerContextProvider({ children }: TimerContextProviderProps) {
  const [state, dispatch] = useReducer(timerReducer, initTimerState);

  useEffect(() => {
    dispatch({ type: TimerActionType.BG_THEME });
  }, [state.cycle]);

  useEffect(() => {
    console.log(state);
    // Count Down logic
    if (!state.isActive) return;
    const interval = window.setInterval(() => {
      dispatch({ type: TimerActionType.UPDATE_TIME });
    }, 1000);
    return () => window.clearInterval(interval);
  }, [state]);

  return (
    <TimerContext.Provider value={{ state, dispatch }}>{children}</TimerContext.Provider>
  );
}
