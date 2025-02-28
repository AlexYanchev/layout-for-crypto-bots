import React, { FC } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: min(4.46vw, 35px);
  height: min(4.46vw, 35px);
  border-radius: 100px;
  background: rgba(var(--notification-color), 1);
  position: absolute;
  right: max(-1.53vw, -12px);
  top: max(-2.8vw, -22px);
  color: var(--accent-color);
  font-size: min(3.06vw, 1.5rem);
  line-height: min(3.06vw, 1.5rem);
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
