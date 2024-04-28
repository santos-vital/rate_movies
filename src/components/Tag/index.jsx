import { Container } from "./styles";

export function Tag({ title, backgroundColor, ...rest}) {
  return (
    <Container $backgroundcolor={backgroundColor} {...rest}>
        { title }
    </Container>
  );
}