// import react hook
import { useEffect, useState } from 'react';
// import timer context
import { useTimerContext } from '../../hooks/useTimerContext';
// import type
import { TimerActionType } from '../../models/TimerActionModel';
import type { TimerStateModel } from '../../models/TimerStateModel';
// import style
import style from './style.module.css';
// import radix component
import { Popover, Switch } from 'radix-ui';
// import component
import { Button } from '../Button';
// import lucide icon
import { EllipsisIcon, XIcon } from 'lucide-react';

type Theme = 'dark' | 'light';

export function SettingsButton() {
  const { state, dispatch } = useTimerContext();
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

  const changeTime = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = event.target;

    if (Number(value) > 60) return;

    const timerSetup: TimerStateModel['config'] = {
      work: name === 'work' ? Number(value) : state.config.work,
      shortBreak: name === 'shortBreak' ? Number(value) : state.config.shortBreak,
      longBreak: name === 'longBreak' ? Number(value) : state.config.longBreak,
    };

    dispatch({ type: TimerActionType.SETUP_TIME, payload: timerSetup });
    return;
  };

  useEffect(() => {
    if (state.cycle > 0) {
      dispatch({ type: TimerActionType.BG_THEME });
    }
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [dispatch, state.cycle, theme]);

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
              <input
                placeholder={String(state.config.work)}
                onChange={changeTime}
                className={style.input}
                type="number"
                name="work"
                id="work"
              />
            </fieldset>
            <fieldset className={style.fieldset}>
              <label className={style.label} htmlFor="">
                Short break length
              </label>
              <input
                placeholder={String(state.config.shortBreak)}
                onChange={changeTime}
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
                placeholder={String(state.config.longBreak)}
                onChange={changeTime}
                className={style.input}
                type="number"
                name="longBreak"
                id="longBreak"
              />
            </fieldset>
          </div>
          <Popover.Close className={style.close}>
            <XIcon />
          </Popover.Close>
          <Popover.Arrow fill="var(--theme-soft)" />
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
}
