// component import
import { Container } from '../../components/Container';
import { Logo } from '../../components/Logo';
import { StatusDisplay } from '../../components/StatusDisplay';

export function Main() {
  return (
    <>
      <Container>
        <Logo />
      </Container>
      <Container>
        <StatusDisplay />
      </Container>
    </>
  );
}
