import React, { FC } from 'react';
import styled, { css } from 'styled-components';
import { useStoreContext } from '../../Providers/StoreProvider';
import { E_TimeRange } from '../../types/E_TimeRange';

const Container = styled.div`
  padding: min(3.95vw, 31px) var(--padding-side);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: min(2.55vw, 20px);
`;

const Title = styled.p`
  font-size: min(3.06vw, 1.5rem);
  color: inherit;
  font-weight: 700;
`;

const Button = styled.button<{ $active?: boolean }>`
  color: inherit;
  min-width: min(14.66vw, 115px);
  background: none;
  border-radius: 100px;
  padding: min(1.53vw, 12px) min(1.91vw, 15px);
  font-size: min(3.06vw, 1.5rem);
  font-weight: 400;
  border: 1px solid #546076;

  ${({ $active }) => {
    return (
      $active &&
      css`
        color: var(--accent-color);
        border: 1px solid var(--accent-color);
      `
    );
  }}
`;

interface TimeRangeProps {}

const TimeRange: FC<TimeRangeProps> = () => {
  const { currentTimeRange, setCurrentTimeRange } = useStoreContext(
    (state) => ({
      currentTimeRange: state.currentTimeRange,
      setCurrentTimeRange: state.setCurrentTimeRange,
    })
  );

  const onClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const timeRange = e.currentTarget.getAttribute(
      'data-timerange'
    ) as E_TimeRange | null;
    if (!timeRange) {
      return;
    }

    setCurrentTimeRange(timeRange);
  };
  return (
    <Container>
      <Title>Time range:</Title>
      <Button
        onClick={onClick}
        $active={currentTimeRange === E_TimeRange['24H']}
        data-timerange={E_TimeRange['24H']}
      >
        24h
      </Button>
      <Button
        onClick={onClick}
        $active={currentTimeRange === E_TimeRange['7D']}
        data-timerange={E_TimeRange['7D']}
      >
        7 days
      </Button>
      <Button
        onClick={onClick}
        $active={currentTimeRange === E_TimeRange['30D']}
        data-timerange={E_TimeRange['30D']}
      >
        30 days
      </Button>
      <Button
        onClick={onClick}
        $active={currentTimeRange === E_TimeRange.ALL_TIME}
        data-timerange={E_TimeRange.ALL_TIME}
      >
        All time
      </Button>
    </Container>
  );
};

export default TimeRange;
