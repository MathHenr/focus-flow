// import type
import type { TimerStateModel } from './TimerStateModel';

export interface TimerModel {
  id: string;
  duration: number;
  type: keyof TimerStateModel['config'];
}
