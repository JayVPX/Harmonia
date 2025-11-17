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
import { ToastContainer } from "react-toastify";
import { FormInput as Input } from "../../../components/inputForm";

export function LoginView() {
  const {
    OnSubmit,
    OnRegister,

    loading,
    isRegister,
    setIsRegister,
    control,
  } = LoginViewModel();

  return (
    <Container>
      <AuthBox>
        <Form>
          <TitleContainer>
            <Title>{isRegister ? "Registrar" : "Login"}</Title>
          </TitleContainer>

          <Controller
            name="username"
            control={control}
            render={({ field, fieldState }) => (
              <Input
                placeholder="Digite seu username"
                label="Username"
                value={field.value}
                onChange={field.onChange}
                errors={fieldState.error?.message}
              />
            )}
          />

          {isRegister && (
            <Controller
              name="email"
              control={control}
              render={({ field, fieldState }) => (
                <Input
                  placeholder="Digite seu E-mail"
                  label="E-mail"
                  value={field.value}
                  onChange={field.onChange}
                  errors={fieldState.error?.message}
                />
              )}
            />
          )}

          <Controller
            name="password"
            control={control}
            render={({ field, fieldState }) => (
              <Input
                placeholder="Digite sua senha"
                label="Senha"
                type="password"
                value={field.value}
                onChange={field.onChange}
                errors={fieldState.error?.message}
              />
            )}
          />

          {isRegister && (
            <Controller
              name="password2"
              control={control}
              render={({ field, fieldState }) => (
                <Input
                  placeholder="Confirme a senha"
                  type="password"
                  label="Confirmar senha"
                  value={field.value}
                  onChange={field.onChange}
                  errors={fieldState.error?.message}
                />
              )}
            />
          )}

          <Button
            variant="contained"
            onClick={isRegister ? OnRegister : OnSubmit}
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
      <ToastContainer position="top-center" autoClose={2000} />
    </Container>
  );
}
