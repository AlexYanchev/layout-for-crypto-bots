import React, { FC } from 'react';
import styled, { css } from 'styled-components';
import DashBoardIcon from '../../asserts/Icons/DashBoardIcon/DashBoardIcon';
import MegabotToolIcon from '../../asserts/Icons/MegabotToolIcon/MegabotToolIcon';
import BotMarketToolIcon from '../../asserts/Icons/BotMarketToolIcon/BotMarketToolIcon';
import CoinPricesToolIcon from '../../asserts/Icons/CoinPricesToolIcon/CoinPricesToolIcon';
import ProfileToolIcon from '../../asserts/Icons/ProfileToolIcon/ProfileToolIcon';

const Container = styled.div`
  padding: 13px var(--padding-side);
  background: #232c3e;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Button = styled.button<{ $active?: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  background: none;
  border: none;
  color: inherit;
  font-size: 1.25rem;
  font-weight: 300;

  ${({ $active }) => {
    return (
      $active &&
      css`
        color: var(--accent-color);
      `
    );
  }}
`;

const ControlPanel: FC = () => {
  return (
    <Container>
      <Button type='submit' $active={true}>
        <DashBoardIcon />
        Dashboard
      </Button>
      <Button type='submit'>
        <MegabotToolIcon /> Megabot
      </Button>
      <Button type='submit'>
        <BotMarketToolIcon />
        Bot market
      </Button>
      <Button type='submit'>
        <CoinPricesToolIcon />
        Coin prices
      </Button>
      <Button type='submit'>
        <ProfileToolIcon />
        Profile
      </Button>
    </Container>
  );
};

export default ControlPanel;
