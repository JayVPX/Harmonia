import {
  FormHelperText,
  TextField,
  InputAdornment,
  IconButton,
} from "@mui/material";
import { InputContainer } from "./styled";
import { useState } from "react";
import type { InputHTMLAttributes, ReactNode } from "react";
import { Visibility, VisibilityOff } from "@mui/icons-material";

interface InputWithErrorProps extends InputHTMLAttributes<HTMLInputElement> {
  errors?: string;
  inputWidth?: string;
  label?: string;
  isMultiline?: boolean;
  rows?: number;
  endIcon?: ReactNode;
}

export function FormInput({
  isMultiline,
  rows,
  errors,
  label,
  inputWidth = "100%",
  endIcon,
  type,
  ...rest
}: InputWithErrorProps) {
  const { size, color, ...filteredRest } = rest;

  // controla mostrar/ocultar senha
  const [showPassword, setShowPassword] = useState(false);

  const isPassword = type === "password";

  return (
    <InputContainer style={{ width: inputWidth }}>
      <TextField
        rows={rows}
        multiline={isMultiline}
        error={!!errors}
        style={{ width: "100%" }}
        label={label}
        type={isPassword ? (showPassword ? "text" : "password") : type}
        {...filteredRest}
        InputProps={{
          endAdornment: (
            <>
              {isPassword && (
                <InputAdornment position="end">
                  <IconButton onClick={() => setShowPassword((v) => !v)}>
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              )}
              {!isPassword && endIcon && (
                <InputAdornment position="end">{endIcon}</InputAdornment>
              )}
            </>
          ),
        }}
      />

      {errors && (
        <FormHelperText style={{ color: "red" }}>{errors}</FormHelperText>
      )}
    </InputContainer>
  );
}
