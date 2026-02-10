// component import
import { Container } from '../../components/Container';
import { Logo } from '../../components/Logo';
import { StatusDisplay } from '../../components/StatusDisplay';
import { Timer } from '../../components/Timer';

export function Main() {
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
    </>
  );
}
