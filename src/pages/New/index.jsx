import { Container, Form } from "./styles";

import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { Section } from '../../components/Section';
import { Textarea } from '../../components/Textarea';
import { MovieItem } from '../../components/MovieItem';
import { ButtonText } from '../../components/ButtonText';

export function New() {

  return (
    <Container>
      <Header />

      <main>
        <Form>
          <header>
            <ButtonText title="Voltar" to="/" />

            <h1>Novo filme</h1>
          </header>

          <div>
            <Input placeholder="Título" />
            <Input placeholder="Sua nota (de 0 a 5)" />
          </div>

          <Textarea placeholder="Observações" />

          <Section title="Marcadores">
            <div className="tags">
              <MovieItem value="Drama" />
              <MovieItem placeholder="Novo marcador" isNew />
            </div>
          </Section>

          <div>
            <Button title="Excluir filme"/>
            <Button title="Salvar alterações"/>
          </div>
        </Form>
      </main>
    </Container>
  );
}