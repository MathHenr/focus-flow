// import react hook
import { useContext } from 'react';
// import context
import { TimerContext } from '../../contexts/TimerContext';

export function useTimerContext() {
  return useContext(TimerContext);
}
