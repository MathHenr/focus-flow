// style import
import style from './style.module.css';

// import function
import { getMinutes } from '../../utils/getMinutes';
import { getSeconds } from '../../utils/getSeconds';

// import context
import { useTimerContext } from '../../hooks/useTimerContext';

export function Timer() {
  const { state } = useTimerContext();

  const minutes = getMinutes(state.secondsRemaining);
  const seconds = getSeconds(state.secondsRemaining);

  return (
    <div className={style.timer}>
      {!state.isActive && (
        <>
          <span>{minutes}</span>
          <span>{seconds}</span>
        </>
      )}
      {!!state.isActive && (
        <>
          <span className={style.paused}>{minutes}</span>
          <span className={style.paused}>{seconds}</span>
        </>
      )}
    </div>
  );
}
