import type { TimerModel } from './TimerModel';
import type { TimerStateModel } from './TimerStateModel';

export enum TimerActionType {
  START_TIME = 'START_TIME',
  PAUSE_TIME = 'PAUSE_TIME',
  UPDATE_TIME = 'UPDATE_TIME',
  NEXT_TIME = 'NEXT_TIME',
  BG_THEME = 'BG_THEME',
  SETUP_TIME = 'SETUP_TIME',
}

export type TimerActionModel =
  | {
      type: TimerActionType.START_TIME | TimerActionType.NEXT_TIME;
      payload: TimerModel;
    }
  | {
      type:
        | TimerActionType.PAUSE_TIME
        | TimerActionType.UPDATE_TIME
        | TimerActionType.BG_THEME;
    }
  | {
      type: TimerActionType.SETUP_TIME;
      payload: TimerStateModel['config'];
    };
