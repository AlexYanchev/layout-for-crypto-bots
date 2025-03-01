import React, { FC } from 'react';
import styled from 'styled-components';
import BalanceDetail from '../BalanceDetail/BalanceDetail';
import { useStoreContext } from '../../Providers/StoreProvider';

const Container = styled.div`
  text-transform: uppercase;
`;

const Title = styled.p`
  font-size: clamp(1rem, calc(24 * var(--adaptive-coefficient)), 24px);
  font-weight: 700;
`;

const InfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const MoneyBalance = styled.p`
  font-size: clamp(2rem, calc(68 * var(--adaptive-coefficient)), 68px);
  font-weight: 300;
  color: var(--accent-color);
  text-transform: uppercase;
`;

const MoneyDetail = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: clamp(0, calc(6 * var(--adaptive-coefficient)), 6px);
`;

const Balance: FC = () => {
  const { tradingCapital, currency, balance, hold } = useStoreContext<{
    tradingCapital: number;
    currency: string;
    balance: number;
    hold: number;
  }>((state) => ({
    tradingCapital: state.data.trading_capital,
    currency: state.data.trading_capital_currency,
    balance: state.data.balance,
    hold: state.data.on_hold,
  }));
  return (
    <Container>
      <Title>Trading capital</Title>
      <InfoContainer>
        <MoneyBalance>
          {tradingCapital} {currency}
        </MoneyBalance>
        <MoneyDetail>
          <BalanceDetail text='Balance' value={balance} />
          <BalanceDetail text='On hold' value={hold} />
        </MoneyDetail>
      </InfoContainer>
    </Container>
  );
};

export default Balance;
