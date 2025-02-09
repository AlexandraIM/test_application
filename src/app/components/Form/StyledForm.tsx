"use client";
import styled from "styled-components";

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  width: 315px;
  height: 198px;
  margin: 138px auto;
`;
export const StyledH2 = styled.h2`
  text-align: center;
  weight: 700;
  font-size: 28px;
  line-height: 28px;
  color: #4a4e71;
`;
export const StyledP = styled.p<{ $met?: boolean; $error?: boolean; }> `
  weight: 400;
  font-size: 13px;
  line-height: 18px;
  color: ${({ $met, $error }: { $met?: boolean; $error?: boolean; }) => {
    if ($error) return "#FF8080";
    if ($met) return "rgba(39, 178, 116, 0.7)";
    return "#4A4E71";
  }};
`;
export const InputArea = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
export const Rules = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding-left: 20px;
`;
