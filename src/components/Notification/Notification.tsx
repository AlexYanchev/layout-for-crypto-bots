import React, { FC } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 35px;
  height: 35px;
  border-radius: 100px;
  background: rgba(var(--notification-color), 1);
  position: absolute;
  right: -12px;
  top: -22px;
  color: var(--accent-color);
  font-size: 1.5rem;
  line-height: 1.5rem;
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

export default Notification;
