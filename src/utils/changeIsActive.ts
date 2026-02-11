// import type
import type { TimerContextProps } from '../contexts/TimerContext';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function changeIsActive({ state, setState }: TimerContextProps) {
  return setState((prevState) => {
    const currentBollean = prevState.isActive;
    return {
      ...prevState,
      isActive: !currentBollean ? true : false,
    };
  });
}
