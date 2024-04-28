import { FiPlus } from "react-icons/fi";

import { Container, NewMovie } from "./styles";

import { Movie } from "../../components/Movie";
import { Header } from "../../components/Header";

export function Home() {
  return (
    <Container>
      <Header />

      <div>
        <h1>Meus filmes</h1>

        <NewMovie to="/new">
          <FiPlus />
          Adicionar filme
        </NewMovie>
      </div>

      <main>
        <Movie data={{ 
          title: 'Interestellar', 
          tags: [
            { id: '1', name: 'Ficção Científica' },
            { id: '2', name: 'Drama' },
            { id: '3', name: 'Família' }
          ]
        }} />
      </main>
    </Container>
  );
}