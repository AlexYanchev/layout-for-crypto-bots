import React, { FC, ReactNode } from 'react';
import styled, { css } from 'styled-components';
import Notification from '../Notification/Notification';

const Container = styled.div`
  position: relative;
`;

const Button = styled.button<{ $active?: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: min(calc(10 * var(--adaptive-coefficient)), 10px);
  background: none;
  border: none;
  color: inherit;
  font-size: min(calc(20 * var(--adaptive-coefficient)), 20px);
  font-weight: 300;
  cursor: pointer;

  ${({ $active }) => {
    return (
      $active &&
      css`
        color: var(--accent-color);
      `
    );
  }}
`;

interface ButtonToolProps {
  text: string;
  icon: ReactNode;
  active?: boolean | undefined;
  notificationValue?: number | undefined;
}

const ButtonTool: FC<ButtonToolProps> = ({
  icon,
  text,
  active,
  notificationValue,
}) => {
  return (
    <Container data-menuname={text}>
      {notificationValue && <Notification value={notificationValue} />}
      <Button type='button' $active={active}>
        {icon}
        {text}
      </Button>
    </Container>
  );
};

export default React.memo(ButtonTool);
