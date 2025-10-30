import { Button, TextField } from "@mui/material";
import { LoginViewModel } from "./loginViewModel";
import {
  AuthBox,
  Container,
  Form,
  Logo,
  Title,
  TitleContainer,
} from "./styled";

export function LoginView() {
  const { OnSubmit, password, setPassword, setUsername, username } =
    LoginViewModel();

  return (
    <Container>
      <AuthBox>
        <Form>
          <TitleContainer>
            <Title>Login</Title>
          </TitleContainer>
          <TextField
            placeholder="Digite seu username"
            label="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <TextField
            type="password"
            placeholder="Digite sua senha"
            label="Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            variant="contained"
            onClick={() => {
              OnSubmit();
            }}
          >
            Confirmar
          </Button>
        </Form>
      </AuthBox>
      <Logo src="/src/assets/HarmoniaLogo.jpg" alt="Harmonia" />
    </Container>
  );
}
