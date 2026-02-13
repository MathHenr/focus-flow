import type { TimerModel } from './TimerModel';

export enum TimerActionType {
  START_TIME = 'START_TIME',
  PAUSE_TIME = 'PAUSE_TIME',
  PLAY_TIME = 'PLAY_TIME',
  UPDATE_TIME = 'UPDATE_TIME',
  NEXT_TIME = 'NEXT_TIME',
  BG_THEME = 'BG_THEME',
}

export type TimerActionModel =
  | {
      type: TimerActionType.START_TIME | TimerActionType.NEXT_TIME;
      payload: TimerModel;
    }
  | {
      type:
        | TimerActionType.PAUSE_TIME
        | TimerActionType.PLAY_TIME
        | TimerActionType.UPDATE_TIME
        | TimerActionType.BG_THEME;
    };
