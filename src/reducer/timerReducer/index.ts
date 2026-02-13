import { TimerActionType, type TimerActionModel } from '../../models/TimerActionModel';
import type { TimerStateModel } from '../../models/TimerStateModel';
import { getCycle } from '../../utils/getCycle';

export function timerReducer(
  state: TimerStateModel,
  action: TimerActionModel
): TimerStateModel {
  switch (action.type) {
    case TimerActionType.START_TIME: {
      const secondsRemaining = action.payload.duration * 60;
      const cycle = getCycle(state.cycle);

      return {
        ...state,
        secondsRemaining,
        cycle,
        isActive: true,
        tasks: [action.payload],
      };
    }
    case TimerActionType.NEXT_TIME: {
      const secondsRemaining = action.payload.duration * 60;
      const cycle = getCycle(state.cycle);

      return {
        ...state,
        secondsRemaining,
        cycle,
        isActive: false,
        tasks: [action.payload],
      };
    }
    case TimerActionType.PAUSE_TIME: {
      return {
        ...state,
        isActive: !state.isActive,
      };
    }
    case TimerActionType.UPDATE_TIME: {
      if (!state.isActive) return state;

      const secondsRemaining = Math.max(state.secondsRemaining - 1, 0);

      return {
        ...state,
        secondsRemaining,
        isActive: secondsRemaining === 0 ? false : state.isActive,
      };
    }
    case TimerActionType.BG_THEME: {
      if (state.tasks.length < 1) return state;
      document.documentElement.setAttribute('data-theme', 'light-work');
      return state;
    }
  }

  return state;
}
