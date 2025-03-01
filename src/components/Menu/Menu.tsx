import React, { FC } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  position: relative;
  cursor: pointer;
  width: min(calc(35 * var(--adaptive-coefficient)), 35px);
  height: min(calc(24 * var(--adaptive-coefficient)), 24px);
`;

const Input = styled.input`
  position: absolute;
  visibility: hidden;
`;

const Label = styled.label`
  &::before,
  &::after {
    content: '';
    left: 0;
    position: absolute;
    display: block;
    width: 100%;
    height: 2px;
    background: var(--main-element-color);
  }

  &::before {
    top: 0;
    box-shadow: 0 min(calc(11 * var(--adaptive-coefficient)), 11px) 0
      var(--main-element-color);
    transition: box-shadow 0.3s 0.15s, top 0.3s 0.15s, transform 0.3s;
  }

  &::after {
    bottom: 0;
    transition: bottom 0.3s 0.15s, transform 0.3s;
  }

  ${Input}:checked + &::before {
    top: clapm(9px, calc(11 * var(--adaptive-coefficient)), 11px);
    transform: rotate(45deg);
    box-shadow: 0 calc(6 * var(--adaptive-coefficient)) 0 rgba(0, 0, 0, 0);
    transition: box-shadow 0.15s, top 0.3s, transform 0.3s 0.15s;
  }
  ${Input}:checked + &::after {
    bottom: clapm(9px, calc(11 * var(--adaptive-coefficient)), 11px);
    transform: rotate(-45deg);
    transition: bottom 0.3s, transform 0.3s 0.15s;
  }
`;

const Menu: FC = () => {
  return (
    <Container>
      <Input type='checkbox' id='burger-checkbox' />
      <Label htmlFor='burger-checkbox' className='burger'></Label>
    </Container>
  );
};

export default Menu;
