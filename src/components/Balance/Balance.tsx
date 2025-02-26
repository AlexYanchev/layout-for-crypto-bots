import React, { FC } from 'react';
import styled from 'styled-components';
import BalanceDetail from '../BalanceDetail/BalanceDetail';

const Container = styled.div`
  text-transform: uppercase;
`;

const Title = styled.p`
  font-size: 1.5rem;
  font-weight: 700;
`;

const InfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const MoneyBalance = styled.p`
  font-size: 4.25rem;
  font-weight: 100;
  color: var(--accent-color);
`;

const MoneyDetail = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 6px;
`;

const Balance: FC = () => {
  return (
    <Container>
      <Title>Trading capital</Title>
      <InfoContainer>
        <MoneyBalance>1.00865 BTC</MoneyBalance>
        <MoneyDetail>
          <BalanceDetail text='Balance' value={10850} />
          <BalanceDetail text='On hold' value={24000} />
        </MoneyDetail>
      </InfoContainer>
    </Container>
  );
};

export default Balance;
