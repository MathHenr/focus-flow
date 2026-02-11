// Lucide import
import { ChevronsRightIcon, EllipsisIcon, PlayIcon } from 'lucide-react';

// component import
import { Container } from '../../components/Container';
import { Logo } from '../../components/Logo';
import { StatusDisplay } from '../../components/StatusDisplay';
import { Timer } from '../../components/Timer';
import { Button } from '../../components/Button';
import { Footer } from '../../components/Footer';

export function Main() {
  function handleClick() {
    return;
  }

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
        <Button handleClick={handleClick} variant="primary" icon={PlayIcon} />
        <Button handleClick={handleClick} variant="secondary" icon={ChevronsRightIcon} />
      </Container>
      <Container>
        <Footer />
      </Container>
    </>
  );
}
