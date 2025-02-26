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
  min-height: 100vh;
`;

const Main: FC = () => {
  return (
    <Container>
      <Header />
      <Chart />
      <BotList />
      <TimeRange />
      <ControlPanel />
    </Container>
  );
};

export default Main;
