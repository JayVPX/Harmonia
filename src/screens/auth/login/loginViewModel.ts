import { useState } from "react";
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

export function LoginViewModel() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isRegister, setIsRegister] = useState(false);

  const { handleSubmit, control } = useForm<LoginType | RegisterType>({
    // resolver: zodResolver(LoginSchema || RegisterSchema),
  });

  const OnSubmit = async () => {
    try {
      setLoading(true);
      const body = {
        username: "JayVPX",
        password: "Joao-12345",
      };
      console.log(body);
      const response = await api.post("/token", body);
      console.log(response.data);
      localStorage.setItem("accessToken", response.data.access);
      localStorage.setItem("refreshToken", response.data.refresh);

      navigate({ pathname: "/home" });
    } catch (Error: any) {
      console.log("Ocorreu um erro: ", Error.message);
    } finally {
      setLoading(false);
    }
  };

  const OnRegister = async () => {};

  return {
    username,
    setUsername,
    password,
    setPassword,
    OnSubmit,
    loading,
    isRegister,
    OnRegister,
    setIsRegister,
    handleSubmit,
    control,
  };
}
