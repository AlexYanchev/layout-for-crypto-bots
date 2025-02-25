import React, { FC } from 'react';
import styled from 'styled-components';
import Header from '../Header/Header';

const Container = styled.main`
  background: radial-gradient(
    circle at top,
    var(--top-radial-gradient) 5%,
    var(--main-background) 15%
  );
  height: 100vh;
`;

const Main: FC = () => {
  return (
    <Container>
      <Header />
    </Container>
  );
};

export default Main;
