// style import
import style from './style.module.css';

// Lucide icon import
import { Clock4Icon } from 'lucide-react';

export function Logo() {
  return (
    <div className={style['logo-container']}>
      <Clock4Icon />
      <p>Chronos</p>
    </div>
  );
}
