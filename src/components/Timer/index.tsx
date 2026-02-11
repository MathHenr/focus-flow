// style import
import style from './style.module.css';

export function Timer() {
  return (
    <div className={style.timer}>
      <span>25</span>
      <span>00</span>
    </div>
  );
}
