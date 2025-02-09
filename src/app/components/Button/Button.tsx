'use client'
import { ButtonHTMLAttributes } from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  border: none;
  border-radius: 30px;
  padding: 15px 32px;
  font-size: 16px;
  font-weight: 700;
  line-height: 14px;
  text-align: center;
  width: 240px;  
  height:48px;
  background: linear-gradient(90deg, #70C3FF 0%, #4B65FF 100%);
  color: #FFFFFF;
`;

export function Button(props: ButtonHTMLAttributes<HTMLButtonElement>) {
  return <StyledButton {...props} />;
}