import { TimerActionType, type TimerActionModel } from '../../models/TimerActionModel';
import type { TimerStateModel } from '../../models/TimerStateModel';
import { getCycle } from '../../utils/getCycle';
import { getCycleType } from '../../utils/getCycleType';

export function timerReducer(
  state: TimerStateModel,
  action: TimerActionModel
): TimerStateModel {
  type Theme = 'dark' | 'light';

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
      // Catch the main theme: dark | light
      const currentTheme = (localStorage.getItem('theme') as Theme) || 'light';

      // Change theme according to cycle type
      const type = getCycleType(state.cycle);

      document.documentElement.setAttribute('data-theme', `${currentTheme}-${type}`);
      return state;
    }
  }

  return state;
}
