// style import
import style from './style.module.css';

// Lucide import
import { BrainIcon } from 'lucide-react';

export function StatusDisplay() {
  return (
    <div className={style['container-contet']}>
      <div className={style.content}>
        <BrainIcon />
        <p>Focus</p>
      </div>
    </div>
  );
}
