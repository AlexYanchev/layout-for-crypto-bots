import React, { FC, useMemo } from 'react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  ReferenceLine,
  ReferenceDot,
} from 'recharts';
import { curveCardinal } from 'd3-shape';
import styled, { css } from 'styled-components';
import { useStoreContext } from '../../Providers/StoreProvider';
import { E_TimeRange } from '../../types/E_TimeRange';
import { I_Bot } from '../../types/I_Bot';

const Container = styled.div`
  position: relative;
`;

const ResultPercent = styled.div<{ $negative?: boolean | undefined }>`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  span {
    color: rgb(var(--positive-result-text-color));
    font-size: clamp(1.5rem, 5.86vw, 2.875rem);
    ${({ $negative }) => {
      return (
        $negative &&
        css`
          color: rgb(var(--negative-result-text-color));
        `
      );
    }};
  }

  span::after {
    content: '%';
  }

  span::before {
    content: '+';
    ${({ $negative }) => {
      return (
        $negative &&
        css`
          content: '';
        `
      );
    }};
  }
`;

const Chart: FC = () => {
  const currentResultPercent = useStoreContext<number>(
    (state) => state.currentBot[state.currentTimeRange]
  );

  const mockData = useMemo(
    () =>
      Array.from({ length: 30 }).map((item, index) => {
        return {
          order: index,
          uv: Math.floor(Math.random() * (4000 - 2000 + 1)) + 2000,
        };
      }),
    [currentResultPercent]
  );

  const cardinal = curveCardinal.tension(0.2);
  const marginBottomTick = 30;
  const tickLabels: Array<{ order: number; tickName: string }> = [
    { order: 3, tickName: '22.04' },
    { order: 9, tickName: '23.04' },
    { order: 15, tickName: '24.04' },
    { order: 21, tickName: '25.04' },
    { order: 27, tickName: '26.04' },
  ];
  const horizontalLineCount = 9;

  return (
    <Container>
      <ResultPercent $negative={currentResultPercent < 0}>
        <span>{currentResultPercent}</span>
      </ResultPercent>
      <ResponsiveContainer width='100%' height={370}>
        <AreaChart
          // width={500}
          // height={400}
          data={mockData}
          margin={{
            top: 10,
            right: 0,
            left: 0,
            bottom: marginBottomTick,
          }}
        >
          <defs>
            <linearGradient id='colorUv' x1='0' y1='0' x2='0' y2='1'>
              <stop offset='5%' stopColor='#217edd' stopOpacity={1} />
              <stop offset='95%' stopColor='#217edd' stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid vertical={false} strokeDasharray='0' opacity={0.2} />

          <XAxis
            type='number'
            dataKey='order'
            interval={0}
            tickLine={false}
            ticks={tickLabels.map((item) => item.order)}
            domain={[1, mockData.length - 1]}
            allowDataOverflow={true}
            tickFormatter={(value) => {
              return (
                tickLabels.find((item) => item.order === value)?.tickName ||
                value
              );
            }}
            tickMargin={marginBottomTick}
            tick={{
              fontSize: 'clamp(0.8rem, 2.55vw, 1.25rem)',
              fill: '#546076',
              fontWeight: 200,
            }}
            axisLine={false}
          />

          <YAxis tickCount={horizontalLineCount} hide={true} />
          <Tooltip />

          <Area
            type={cardinal}
            dataKey='uv'
            stroke='#206cbb'
            strokeWidth={2}
            fill='url(#colorUv)'
            fillOpacity={0.3}
          />

          {mockData.reduce((acc: any[], curr, index) => {
            if (tickLabels.some((item) => item.order === curr.order)) {
              acc.push(
                <ReferenceLine
                  key={index}
                  stroke='#8884d8'
                  strokeDasharray='3 3'
                  strokeWidth={1}
                  opacity={0.3}
                  segment={[
                    { x: curr.order, y: 0 },
                    { x: curr.order, y: curr.uv },
                  ]}
                />
              );
            }

            return acc;
          }, [])}

          <ReferenceDot
            x={15}
            y={mockData.find((item) => item.order === 15)?.uv}
            r={7}
            fill='#9cc4ef'
            stroke='none'
          />
        </AreaChart>
      </ResponsiveContainer>
    </Container>
  );
};

export default Chart;
