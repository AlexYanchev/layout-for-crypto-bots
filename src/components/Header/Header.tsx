import React, { FC } from 'react';
import styled from 'styled-components';
import Menu from '../Menu/Menu';
import RefreshIcon from '../../asserts/Icons/Refresh/Refresh';
import Balance from '../Balance/Balance';

const Container = styled.div`
  padding: 0 var(--padding-side);
  margin-bottom: 45px;
`;

const HeaderContainer = styled.header`
  height: min(calc(150 * var(--adaptive-coefficient)), 150px);
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled.p`
  font-size: min(1.5rem, calc(32 * var(--adaptive-coefficient)), 32px);
  font-weight: 700;
`;

const RefreshButton = styled.button`
  border: none;
  background: none;

  & > svg {
    display: block;
  }
`;

const Header: FC = () => {
  return (
    <Container>
      <HeaderContainer>
        <Menu />
        <Logo>Dashboard</Logo>
        <RefreshButton>
          <RefreshIcon />
        </RefreshButton>
      </HeaderContainer>
      <Balance />
    </Container>
  );
};

export default Header;
