// import hook
import { useTimerContext } from '../../hooks/useTimerContext';

// import function
import { createCycle } from '../../utils/createCycle';
import { changeIsActive } from '../../utils/changeIsActive';

// Lucide import
import { ChevronsRightIcon, EllipsisIcon, PauseIcon, PlayIcon } from 'lucide-react';

// component import
import { Container } from '../../components/Container';
import { Logo } from '../../components/Logo';
import { StatusDisplay } from '../../components/StatusDisplay';
import { Timer } from '../../components/Timer';
import { Button } from '../../components/Button';
import { Footer } from '../../components/Footer';

export function Main() {
  const { state, setState } = useTimerContext();

  function handleClick() {
    return;
  }

  const startTimer = (): void => {
    if (state.tasks.length < 1) {
      return createCycle({ state, setState });
    }
    return changeIsActive({ state, setState });
  };

  const pauseTimer = (): void => {
    return changeIsActive({ state, setState });
  };

  return (
    <>
      <Container>
        <Logo />
      </Container>
      <Container>
        <StatusDisplay />
      </Container>
      <Container>
        <Timer />
      </Container>
      <Container>
        <Button handleClick={handleClick} variant="secondary" icon={EllipsisIcon} />
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
        <Button handleClick={handleClick} variant="secondary" icon={ChevronsRightIcon} />
      </Container>
      <Container>
        <Footer />
      </Container>
    </>
  );
}
