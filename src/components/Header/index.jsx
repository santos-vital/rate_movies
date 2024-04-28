import { Container, Profile } from "./styles";
import { Input } from "../Input";

export function Header() {
  return (
    <Container>
      <h1>RateMovies</h1>

      <Input placeholder="Pesquisar pelo título" />
      
      <Profile to="/profile">
        <div>
          <strong>Leandro Vital</strong>
          <span>Sair</span>
        </div>

        <img 
          src="http://github.com/santos-vital.png"
          alt="Foto do usuário"
        />
      </Profile>
    </Container>
  );
}