import React from "react";
import styled from "styled-components";

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #fafbfc;
  font-family: 'Pretendard', sans-serif;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
  padding: 48px 32px;
  background: #fff;
  border-radius: 24px;
  box-shadow: 0 4px 24px rgba(0,0,0,0.06);
`;

const Title = styled.h1`
  font-size: 3rem;
  font-weight: 800;
  color: ${({ theme }) => theme.colors.gray500 || '#222'};
  margin-bottom: 8px;
  font-family: 'Pretendard', sans-serif;
`;

const Description = styled.p`
  font-size: 1.25rem;
  color: #666;
  font-family: 'Pretendard', sans-serif;
  text-align: center;
`;

const HelloPage = () => {
  return (
    <Container>
      <Wrapper>
        <Title>안녕하세요</Title>
        <Description>이 페이지는 styled-components와 Pretendard 폰트를 사용해 만들어졌습니다.</Description>
        <Description>컴포넌트 구조는 Container, Wrapper, Title, Description으로 구성되어 있습니다.</Description>
        <Description>React와 스타일링을 활용해 깔끔하게 디자인했습니다.</Description>
      </Wrapper>
    </Container>
  );
};

export default HelloPage;