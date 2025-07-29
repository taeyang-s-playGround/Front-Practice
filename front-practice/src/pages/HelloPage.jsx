import React, { useState } from "react"; 
import styled from 'styled-components'; 

const LargeText = styled.h1`
  font-size: 4rem;
  text-align: center;
  margin-top: 20vh;
  color: ${({ theme }) => theme.colors.gray500};
`;

const HelloPage = () => {
  return <LargeText>안녕하세요</LargeText>;
};

export default HelloPage; 
