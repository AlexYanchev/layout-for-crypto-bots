import React, { FC, ReactNode } from 'react';
import styled, { css } from 'styled-components';
import BotIcon from '../../asserts/Icons/BotIcon/BotIcon';

const Container = styled.div<{ $active?: boolean }>`
  aspect-ratio: 1/1;
  width: 100%;
  background: #252d40;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  ${({ $active }) => {
    return (
      $active &&
      css`
        background: radial-gradient(
          circle at center,
          #252d40 50%,
          #2a3b57 100%
        );
      `
    );
  }}
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Text = styled.p<{
  $textColor?: string | undefined;
  $textMarginTop?: number | undefined;
}>`
  line-height: clamp(1rem, calc(24 * var(--adaptive-coefficient)), 24px);
  text-transform: uppercase;
  text-align: center;

  font-size: clamp(0.8rem, calc(20 * var(--adaptive-coefficient)), 20px);
  color: var(--accent-color);
  font-weight: 700;
  margin-top: 10px;
  max-width: 100px;
  min-height: 40px;

  ${({ $textColor }) => {
    return (
      $textColor &&
      css`
        color: ${$textColor};
      `
    );
  }}

  ${({ $textMarginTop }) => {
    return (
      $textMarginTop &&
      css`
        margin-top: ${$textMarginTop}px;
      `
    );
  }}
`;

const Percent = styled.span<{ $negative?: boolean }>`
  display: block;
  color: rgb(var(--positive-result-text-color));

  &::before {
    content: '+';
  }

  &::after {
    content: '%';
  }

  ${({ $negative }) => {
    return (
      $negative &&
      css`
        color: rgb(var(--negative-result-text-color));

        &::before {
          content: '';
        }
      `
    );
  }}
`;
const Picture = styled.div`
  display: flex;
  height: min(calc(90 * var(--adaptive-coefficient)), 90px);
  align-items: center;
`;

interface BotProps {
  children: ReactNode;
  name: string;
  text: string;
  percent?: number;
  textColor?: string;
  textMarginTop?: number;
  emptyBot?: boolean;
  active?: boolean;
}

const Bot: FC<BotProps> = ({
  children,
  name,
  text,
  percent,
  textColor,
  textMarginTop,
  emptyBot,
  active,
}) => {
  return (
    <Container $active={active} data-botname={name}>
      <InfoContainer>
        <Picture>{children}</Picture>

        <Text $textColor={textColor} $textMarginTop={textMarginTop}>
          {text}
          {!emptyBot && percent && (
            <Percent $negative={percent < 0}>{percent}</Percent>
          )}
        </Text>
      </InfoContainer>
    </Container>
  );
};

export default React.memo(Bot);
