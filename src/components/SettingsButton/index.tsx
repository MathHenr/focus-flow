// import style
import style from './style.module.css';

// import radix component
import { Popover } from 'radix-ui';
// import component
import { Button } from '../Button';
// import lucide icon
import { EllipsisIcon } from 'lucide-react';

export function SettingsButton() {
  return (
    <Popover.Root>
      <Popover.Trigger asChild>
        <Button variant="secondary" icon={EllipsisIcon} />
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Content side="top" className={style.content} sideOffset={5}>
          <div className={style['popover-container']}>
            <p>Settings</p>
            <fieldset className={style.fieldset}>
              <label className={style.label} htmlFor="">
                Dark mode
              </label>
            </fieldset>
            <fieldset className={style.fieldset}>
              <label className={style.label} htmlFor="">
                Short break mode
              </label>
            </fieldset>
            <fieldset className={style.fieldset}>
              <label className={style.label} htmlFor="">
                Long break mode
              </label>
            </fieldset>
          </div>
          <Popover.Arrow fill="var(--bg-default)" />
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
}
