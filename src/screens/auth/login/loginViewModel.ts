import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../../service/api";

export function LoginViewModel() {
  const navigate = useNavigate();
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const OnSubmit = async () => {
    const body = {
      username: username,
      password: password,
    };
    try {
      // const response = await api.post("/token", body);
      // console.log(response.data);
      // localStorage.setItem("accessToken", response.data.access);
      // localStorage.setItem("refreshToken", response.data.refresh);

      navigate({ pathname: "/home" });
    } catch (Error: any) {
      console.log("Ocorreu um erro: ", Error.message);
    }
  };

  return { username, setUsername, password, setPassword, OnSubmit };
}
