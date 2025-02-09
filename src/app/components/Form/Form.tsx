"use client";
import { Input } from "../Input/Input";
import { Button } from "../Button/Button";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { StyledForm, StyledH2, InputArea, Rules, StyledP } from "./StyledForm";

export function Form() {
  const {
    register,
    formState: { errors },
    watch,
    trigger,
  } = useForm();
  const password = watch("password", "");
  const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);
  const [emailIsValid, setEmailIsValid] = useState(false);
  const [passwordIsValid, setPasswordIsValid] = useState(false);

  const [rulesMet, setRulesMet] = useState({
    lengthAndNoSpaces: false,
    uppercaseAndLowercase: false,
    atLeastOneDigit: false,
  });

  useEffect(() => {
    if (password) {
      setRulesMet({
        lengthAndNoSpaces: password.length >= 8 && !/\s/.test(password),
        uppercaseAndLowercase: /[A-Z]/.test(password) && /[a-z]/.test(password),
        atLeastOneDigit: /\d/.test(password),
      });
    } else {
      setRulesMet({
        lengthAndNoSpaces: false,
        uppercaseAndLowercase: false,
        atLeastOneDigit: false,
      });
    }
  }, [password]);
  const onBlur = async (fieldName: string) => {
    const isValid = await trigger(fieldName);
    if (fieldName === "email") setEmailIsValid(isValid);
    if (fieldName === "password") setPasswordIsValid(isValid);
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setHasBeenSubmitted(true);
    try {
      setHasBeenSubmitted(true);
      const isValid = await trigger();
      console.log(isValid);
    } catch (error) {
      console.error("Error during form submission:", error);
    }
  };

  return (
    <StyledForm onSubmit={onSubmit}>
      <StyledH2>Sign up</StyledH2>
      <InputArea>
        <Input
          placeholder="Email"
          type="email"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Invalid email address",
            },
          })}
          onBlur={() => onBlur("email")}
          isValid={emailIsValid}
          error={errors.email?.message}
        />
        <Input
          placeholder="Create your password"
          type="password"
          isPassword
          isValid={passwordIsValid}
          {...register("password", {
            required: "Password is required",
            minLength: {
              value: 8,
              message: "Password must be at least 8 characters long",
            },
            validate: (value) => {
              const errors: string[] = [];
              if (value.length < 8 || /\s/.test(value))
                errors.push(
                  "Password must be at least 8 characters (no spaces)"
                );
              if (
                !/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=\S*$).{8,}$/.test(value)
              ) {
                errors.push(
                  "Password must contain at least one uppercase, one lowercase letter, and one digit"
                );
              }
              return errors.length > 0 ? errors.join(". ") : true;
            },
          })}
          error={errors.password?.message}
          onBlur={() => onBlur("password")}
        />
        <Rules>
          <StyledP
            $met={rulesMet.lengthAndNoSpaces}
            $error={hasBeenSubmitted && !rulesMet.lengthAndNoSpaces}
          >
            8 characters or more (no spaces)
          </StyledP>
          <StyledP
            $met={rulesMet.uppercaseAndLowercase}
            $error={hasBeenSubmitted && !rulesMet.uppercaseAndLowercase}
          >
            Uppercase and lowercase letters
          </StyledP>
          <StyledP
            $met={rulesMet.atLeastOneDigit}
            $error={hasBeenSubmitted && !rulesMet.atLeastOneDigit}
          >
            At least one digit
          </StyledP>
        </Rules>
      </InputArea>
      <Button type="submit">Sign up</Button>
    </StyledForm>
  );
}
