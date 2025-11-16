import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../../service/api";
import { useForm } from "react-hook-form";
import {
  LoginSchema,
  RegisterSchema,
  type LoginType,
  type RegisterType,
} from "./schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "react-toastify";

export function LoginViewModel() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [isRegister, setIsRegister] = useState(false);

  const { control, handleSubmit, reset } = useForm<LoginType | RegisterType>({
    resolver: zodResolver(isRegister ? RegisterSchema : LoginSchema),
    mode: "onSubmit",
  });

  useEffect(() => {
    reset({
      password2: "",
      email: "",
      password: "",
      username: "",
    });
  }, [isRegister]);

  const OnSubmit = handleSubmit(async (data: LoginType) => {
    try {
      setLoading(true);
      const body = data as LoginType;
      const response = await api.post("/token", body);

      if (response.status === 200 || 201) {
        localStorage.setItem("accessToken", response.data.access);
        localStorage.setItem("refreshToken", response.data.refresh);

        navigate({ pathname: "/home" });
      } else {
        toast.error("Ocorreu um erro ao logar na sua conta");
      }
    } catch (Error: any) {
      console.log("Ocorreu um erro: ", Error.message);
    } finally {
      setLoading(false);
    }
  });

  const OnRegister = handleSubmit(async (data) => {
    try {
      setLoading(true);
      const body = data as RegisterType;
      console.log(body);
      const response = await api.post("/register", body);

      if (response.status === 200 || 201) {
        toast.success("Conta criada com sucesso");
        setIsRegister(!isRegister);
      } else {
        toast.error("Não foi possível criar sua conta");
      }
    } catch (Error: any) {
      console.log("Ocorreu um error: ", Error);
    } finally {
      setLoading(false);
    }
  });

  return {
    OnSubmit,
    loading,
    isRegister,
    OnRegister,
    setIsRegister,
    handleSubmit,
    control,
  };
}
