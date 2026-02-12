import type { TimerContextProps } from '../contexts/TimerContext';
import { TimerActionType } from '../models/TimerActionModel';
import type { TimerModel } from '../models/TimerModel';
import { getCycle } from './getCycle';
import { getCycleType } from './getCycleType';

export function nextFunction({ state, dispatch }: TimerContextProps) {
  const cycle = getCycle(state.cycle);
  const type = getCycleType(cycle);

  const nextCycle: TimerModel = {
    id: Date.now().toString(),
    duration: state.config[type],
    type,
  };

  dispatch({ type: TimerActionType.NEXT_TIME, payload: nextCycle });
}
