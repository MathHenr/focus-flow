// import type
import type { TimerStateModel } from '../../models/TimerStateModel';

export const initTimerState: TimerStateModel = {
  tasks: [],
  secondsRemaining: 0,
  formattedSecondsRemaining: '00:00',
  cycle: 0,
  config: {
    work: 25,
    shortBreak: 5,
    longBreak: 15,
  },
};
