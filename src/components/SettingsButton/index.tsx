// import react hook
import { useEffect, useState } from 'react';
// import style
import style from './style.module.css';
// import radix component
import { Popover, Switch } from 'radix-ui';
// import component
import { Button } from '../Button';
// import lucide icon
import { EllipsisIcon } from 'lucide-react';

type Theme = 'dark' | 'light';

export function SettingsButton() {
  const [theme, setTheme] = useState<Theme>(() => {
    const currentTheme = (localStorage.getItem('theme') as Theme) || 'light';
    return currentTheme;
  });

  const themeChange = (event: boolean): void => {
    setTheme(() => {
      return event ? 'dark' : 'light';
    });
    return;
  };

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

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
              <Switch.Root
                onCheckedChange={themeChange}
                checked={theme === 'light' ? false : true}
                className={style['switch-root']}
                id="theme-switch"
              >
                <Switch.Thumb className={style['switch-thumb']} />
              </Switch.Root>
            </fieldset>
            <fieldset className={style.fieldset}>
              <label className={style.label} htmlFor="">
                Focus length
              </label>
              <input className={style.input} type="number" name="work" id="work" />
            </fieldset>
            <fieldset className={style.fieldset}>
              <label className={style.label} htmlFor="">
                Short break length
              </label>
              <input
                className={style.input}
                type="number"
                name="shortBreak"
                id="shortBreak"
              />
            </fieldset>
            <fieldset className={style.fieldset}>
              <label className={style.label} htmlFor="">
                Long break length
              </label>
              <input
                className={style.input}
                type="number"
                name="longBreak"
                id="longBreak"
              />
            </fieldset>
          </div>
          <Popover.Arrow fill="var(--bg-default)" />
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
}
