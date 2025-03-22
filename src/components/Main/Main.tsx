import React, { FC } from 'react';
import styled from 'styled-components';
import Header from '../Header/Header';
import Chart from '../Chart/Chart';
import BotList from '../BotList/BotList';
import TimeRange from '../TimeRange/TimeRange';
import ControlPanel from '../ControlPanel/ControlPanel';

const Container = styled.main`
  background: radial-gradient(
    circle at top,
    var(--top-radial-gradient) 5%,
    var(--main-background) 15%
  );
  height: 100vh;
  display: grid;
  grid-template-row: auto 1fr auto;
`;

const BottomContainer = styled.div`
`

const Main: FC = () => {
  return (
    <Container>
      <Header />
      <Chart />
      <BottomContainer>
        <BotList />
        <TimeRange />
        <ControlPanel />
      </BottomContainer>
    </Container>
  );
};

export default Main;
