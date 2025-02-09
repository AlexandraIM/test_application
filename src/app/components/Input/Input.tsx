"use client";
import React, { InputHTMLAttributes, useState } from "react";
import { PasswordContainer, StyledInput, TogglePasswordButton, EyeOn, EyeOnOff, ErrorMessage } from "./InputStyles";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: string;
  placeholder?: string;
  isPassword?: boolean;
  isValid?: boolean;
}

export function Input({
  isValid,
  error,
  isPassword,
  value,
  onChange,
  ...rest
}: InputProps) {
  const [showPassword, setShowPassword] = useState(false);
  const inputType = isPassword
    ? showPassword
      ? "text"
      : "password"
    : rest.type || "text";
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <PasswordContainer>
        <StyledInput
          type={inputType}
          $hasError={!!error}
          $isValid={isValid}
          value={value}
          onChange={onChange}
          {...rest}
        />
        {isPassword && (
          <TogglePasswordButton onClick={togglePasswordVisibility}>
            {showPassword ? (
              <EyeOn $hasError={!!error} />
            ) : (
              <EyeOnOff $hasError={!!error} />
            )}
          </TogglePasswordButton>
        )}
      </PasswordContainer>
      {error && !isPassword && <ErrorMessage>{error}</ErrorMessage>}
    </>
  );
}
