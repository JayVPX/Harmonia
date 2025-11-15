import { Button, CircularProgress, TextField } from "@mui/material";
import { LoginViewModel } from "./loginViewModel";
import {
  AuthBox,
  Container,
  Form,
  Logo,
  Title,
  TitleContainer,
} from "./styled";
import { Controller } from "react-hook-form";

export function LoginView() {
  const {
    OnSubmit,
    OnRegister,
    password,
    setPassword,
    username,
    setUsername,
    loading,
    isRegister,
    setIsRegister,
    control,
    handleSubmit,
  } = LoginViewModel();

  return (
    <Container>
      <AuthBox>
        <Form>
          <TitleContainer>
            <Title>{isRegister ? "Registrar" : "Login"}</Title>
          </TitleContainer>

          {/* <Controller
            name="username"
            control={control}
            render={({ field, fieldState }) => (
              <TextField
                placeholder="Digite seu username"
                label="Username"
                value={field.value}
                onChange={field.onChange}
              />
            )}
          />

          {isRegister && (
            <Controller
              name="email"
              control={control}
              render={({ field, fieldState }) => (
                <TextField
                  placeholder="Digite seu E-mail"
                  label="E-mail"
                  value={field.value}
                  onChange={field.onChange}
                />
              )}
            />
          )}

          <Controller
            name="password"
            control={control}
            render={({ field, fieldState }) => (
              <TextField
                placeholder="Digite sua senha"
                label="Senha"
                type="password"
                value={field.value}
                onChange={field.onChange}
              />
            )}
          />

          {isRegister && (
            <Controller
              name="confirmPassword"
              control={control}
              render={({ field, fieldState }) => (
                <TextField
                  placeholder="Confirme a senha"
                  type="password"
                  label="Confirmar senha"
                  value={field.value}
                  onChange={field.onChange}
                />
              )}
            />
          )} */}

          <TextField
            label="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <TextField
            label="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <Button
            variant="contained"
            // onClick={() => (isRegister ? OnRegister() : OnSubmit())}
            onClick={OnSubmit}
          >
            {loading ? (
              <CircularProgress sx={{ color: "white" }} size={20} />
            ) : isRegister ? (
              "Registrar"
            ) : (
              "Entrar"
            )}
          </Button>

          <Button
            variant="text"
            onClick={() => setIsRegister(!isRegister)}
            sx={{ marginTop: "10px" }}
          >
            {isRegister
              ? "Já tem conta? Faça login"
              : "Não tem conta? Registre-se"}
          </Button>
        </Form>
      </AuthBox>

      <Logo src="/src/assets/HarmoniaLogo.jpg" alt="Harmonia" />
    </Container>
  );
}
