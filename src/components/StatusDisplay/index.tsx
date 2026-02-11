// import timer hook
import { useTimerContext } from '../../hooks/useTimerContext';

// style import
import style from './style.module.css';

// Lucide import
import { BrainIcon, CoffeeIcon } from 'lucide-react';

export function StatusDisplay() {
  const { state } = useTimerContext();
  return (
    <>
      {state.tasks.length === 0 ? (
        <></>
      ) : (
        <div className={style.content}>
          {state.tasks.map((_, index) => {
            if (state.tasks[index].type === 'work') {
              return (
                <>
                  <BrainIcon />
                  <p>Focus</p>
                </>
              );
            }
            return (
              <>
                <CoffeeIcon />
                {state.tasks[index].type === 'shortBreak' ? (
                  <p>Short Break</p>
                ) : (
                  <p>Long Break</p>
                )}
              </>
            );
          })}
        </div>
      )}
    </>
  );
}
