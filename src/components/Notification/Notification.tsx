import React, { FC } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: min(calc(35 * var(--adaptive-coefficient)), 35px);
  height: min(calc(35 * var(--adaptive-coefficient)), 35px);
  border-radius: 100px;
  background: rgba(var(--notification-color), 1);
  position: absolute;
  right: max(calc(-12 * var(--adaptive-coefficient)), -12px);
  top: max(calc(-22 * var(--adaptive-coefficient)), -22px);
  color: var(--accent-color);
  font-size: min(calc(24 * var(--adaptive-coefficient)), 24px);
  line-height: min(calc(24 * var(--adaptive-coefficient)), 24px);
  font-weight: 600;

  & > * {
    transform: scaleY(0.9);
  }
`;

interface NotificationProps {
  value: number;
}

const Notification: FC<NotificationProps> = ({ value }) => {
  return (
    <Container>
      <span>{value}</span>
    </Container>
  );
};

export default React.memo(Notification);
