"use client";
import { Eye, EyeOff } from "@styled-icons/ionicons-outline";
import styled from "styled-components";

export const StyledInput = styled.input<{ $hasError: boolean; $isValid?: boolean; }> `
  border: ${({
  $hasError, $isValid,
}: {
  $hasError: boolean;
  $isValid?: boolean;
}) => $hasError ? "1px solid #FF8080" : $isValid ? "1px solid #27B274" : "none"};
  border-radius: 10px;
  padding: 10px 20px;
  font-size: 16px;
  width: 315px;
  height: 48px;
  color: ${({
  $hasError, $isValid,
}: {
  $hasError: boolean;
  $isValid?: boolean;
}) => ($hasError ? "#FF8080" : $isValid ? "#27B274" : "#4A4E71")};
  background: ${({ $hasError }: { $hasError: boolean; }) => $hasError ? "rgba(237, 95, 89, 0.1)" : "#ffffff"};
  &:focus {
    outline: none;
    border: 1px solid #6f91bc;
  }
  &:disabled {
    color: #151d51;
    border: 2px solid rgba(21, 29, 81, 0.2);
    background: rgba(21, 29, 81, 0.1);
  }
`;
export const PasswordContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;
export const TogglePasswordButton = styled.button`
  position: absolute;
  right: 10px;
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  font-size: 1.2rem;

  &:focus {
    outline: none;
  }
`;
export const EyeOn = styled(Eye) <{ $hasError: boolean; }> `
  color: ${({ $hasError }: { $hasError: boolean; }) => $hasError ? "#FF8080" : "#6f91bc"};
  width: 24px;
  height: 24px;
`;
export const EyeOnOff = styled(EyeOff) <{ $hasError: boolean; }> `
  color: ${({ $hasError }: { $hasError: boolean; }) => $hasError ? "#FF8080" : "#6f91bc"};
  width: 24px;
  height: 24px;
`;
export const ErrorMessage = styled.p`
  color: #ff8080;
  font-size: 13px;
  font-weight: 400;
  line-height: 18px;
  padding-left: 20px;
`;
