import React, { FC } from 'react';
import styled, { css } from 'styled-components';

const Container = styled.div`
  padding: 31px var(--padding-side);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

const Title = styled.p`
  font-size: 1.5rem;
  color: inherit;
  font-weight: 700;
`;

const Button = styled.button<{ $active?: boolean }>`
  color: inherit;
  min-width: 115px;
  background: none;
  border-radius: 100px;
  padding: 12px 15px;
  font-size: 1.5rem;
  font-weight: 400;
  border: 1px solid #546076;

  ${({ $active }) => {
    return (
      $active &&
      css`
        color: var(--accent-color);
        border: 1px solid #58606c;
      `
    );
  }}
`;

interface TimeRangeProps {}

const TimeRange: FC<TimeRangeProps> = () => {
  return (
    <Container>
      <Title>Time range:</Title>
      <Button>24h</Button>
      <Button>7 days</Button>
      <Button>30 days</Button>
      <Button $active={true}>All time</Button>
    </Container>
  );
};

export default TimeRange;
