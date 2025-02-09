'use client'
import { Form } from "./components/Form/Form";
import styled from "styled-components";


const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  height: 100vh;
  margin: 0 auto;
  background: linear-gradient(180deg, #F4F9FF 0%, #E0EDFB 100%);
`;

export default function Home() {
  return (
    <StyledDiv >
     <Form/>
    </StyledDiv>
  );
}
