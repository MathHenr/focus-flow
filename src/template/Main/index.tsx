// import hook
import { useTimerContext } from '../../hooks/useTimerContext';

// import function
import { createCycle } from '../../utils/createCycle';
import { changeIsActive } from '../../utils/changeIsActive';
import { nextFunction } from '../../utils/nextCycle';

// Lucide import
import { ChevronsRightIcon, PauseIcon, PlayIcon } from 'lucide-react';

// component import
import { Container } from '../../components/Container';
import { StatusDisplay } from '../../components/StatusDisplay';
import { Timer } from '../../components/Timer';
import { Button } from '../../components/Button';
import { Footer } from '../../components/Footer';
import { SettingsButton } from '../../components/SettingsButton';

export function Main() {
  const { state, dispatch } = useTimerContext();

  const startTimer = (): void => {
    if (state.tasks.length < 1) {
      return createCycle({ state, dispatch });
    }
    return changeIsActive({ dispatch });
  };

  const nextTimer = (): void => {
    return nextFunction({ state, dispatch });
  };

  const pauseTimer = (): void => {
    return changeIsActive({ dispatch });
  };

  return (
    <>
      <Container>
        <StatusDisplay />
      </Container>
      <Container>
        <Timer />
      </Container>
      <Container>
        <SettingsButton />
        {!state.isActive && (
          <Button
            key={'start'}
            handleClick={startTimer}
            variant="primary"
            icon={PlayIcon}
          />
        )}
        {!!state.isActive && (
          <Button
            key={'pause'}
            handleClick={pauseTimer}
            variant="primary"
            icon={PauseIcon}
          />
        )}
        <Button handleClick={nextTimer} variant="secondary" icon={ChevronsRightIcon} />
      </Container>
      <Container>
        <Footer />
      </Container>
    </>
  );
}
