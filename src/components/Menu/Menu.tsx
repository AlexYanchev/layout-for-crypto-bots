import React, { FC } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  position: relative;
  cursor: pointer;
  width: min(4.46vw, 35px);
  height: min(3.06vw, 24px);
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
    box-shadow: 0 min(1.4vw, 11px) 0 var(--main-element-color);
    transition: box-shadow 0.3s 0.15s, top 0.3s 0.15s, transform 0.3s;
  }

  &::after {
    bottom: 0;
    transition: bottom 0.3s 0.15s, transform 0.3s;
  }

  ${Input}:checked + &::before {
    top: 11px;
    transform: rotate(45deg);
    box-shadow: 0 6px 0 rgba(0, 0, 0, 0);
    transition: box-shadow 0.15s, top 0.3s, transform 0.3s 0.15s;
  }
  ${Input}:checked + &::after {
    bottom: 11px;
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
