import React, { useState } from "react";
import styled from 'styled-components';

const LargeText = styled.h1`
  font-size: 4rem;
  text-align: center;
  margin-top: 20vh;
`;

const HelloPage = () => {
  return <LargeText>안녕하세요</LargeText>;
};

export default HelloPage; 
