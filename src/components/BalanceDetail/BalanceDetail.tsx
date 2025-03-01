import React, { FC } from 'react';
import HMoneyIcon from '../../asserts/Icons/HMoneyIcon/HMoneyIcon';
import styled from 'styled-components';

interface BalanceDetailProps {
  text: string;
  value: number;
}

//gap: 25px;
const Container = styled.div`
  display: flex;
  gap: clamp(10px, calc(25 * var(--adaptive-coefficient)), 25px);
  justify-content: space-between;
  width: 100%;
`;

//font-size: 1.5rem;
const Text = styled.p`
  display: flex;
  align-items: center;
  text-transform: uppercase;
  font-weight: 700;
  font-size: clamp(1rem, calc(24 * var(--adaptive-coefficient)), 24px);
`;

const NumberContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

//font-size: 1.5rem;
const Number = styled.span`
  font-weight: 700;
  font-size: clamp(1rem, calc(24 * var(--adaptive-coefficient)), 24px);
  color: white;
`;

const BalanceDetail: FC<BalanceDetailProps> = ({ text, value }) => {
  return (
    <Container>
      <Text>{text}:</Text>{' '}
      <NumberContainer>
        <Number>{value.toLocaleString()}</Number>
        <HMoneyIcon />
      </NumberContainer>
    </Container>
  );
};

export default React.memo(BalanceDetail);
