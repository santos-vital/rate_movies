import { Link } from "react-router-dom";

import { Background, Container, Form } from "./styles";
import { FiMail, FiLock, FiUser } from "react-icons/fi";

import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { ButtonText } from "../../components/ButtonText";

export function SignUp() {
  return (
    <Container>
      <Form>
        <h1>RateMovies</h1>
        <p>Aplicação para acompanhar tudo que assistir.</p>

        <h2>Crie sua conta</h2>

        <Input 
          placeholder = "Nome"
          type="text"
          icon={FiUser} 
        />

        <Input 
          placeholder = "E-mail"
          type="text"
          icon={FiMail} 
        />

        <Input 
          placeholder = "Senha"
          type="password"
          icon={FiLock} 
        />

        <Button title="Cadastrar"/>

        <ButtonText title="Voltar para o login" to="/" />
      </Form>

      <Background />
    </Container>
  );
}

