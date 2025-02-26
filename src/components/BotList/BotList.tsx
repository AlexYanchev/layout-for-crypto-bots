import React, { FC } from 'react';
import styled from 'styled-components';
import Bot from '../Bot/Bot';
import BotIcon from '../../asserts/Icons/BotIcon/BotIcon';
import MegaBotIcon from '../../asserts/Icons/MegaBotIcon/MegaBotIcon';

const Container = styled.div`
  padding: 0 var(--padding-side);
  margin-top: 27px;
  display: flex;
  flex-wrap: wrap;
  gap: 2px;
  justify-content: center;
  align-items: center;
`;

const BotList: FC = () => {
  return (
    <Container>
      <Bot text='Attack' percent={8.2} negative={true}>
        <BotIcon fill='#f96400' fullFill={false} />
      </Bot>
      <Bot text='Place bot here' textColor='#515d72' emptyBot={true}>
        <BotIcon fill='#1d2637' fullFill={true} />
      </Bot>
      <Bot text='Balance' percent={3.7} negative={true}>
        <BotIcon fill='#4794c4' fullFill={false} />
      </Bot>
      <Bot text='Defence' percent={2.5}>
        <BotIcon fill='#78a659' fullFill={false} />
      </Bot>
      <Bot text='Megabot' percent={3.6} textMarginTop={10}>
        <MegaBotIcon fill='#feda32' fullFill={false} />
      </Bot>
      <Bot text='Attack' percent={13.7} active={true}>
        <BotIcon fill='#f11d0d' fullFill={false} />
      </Bot>
    </Container>
  );
};

export default BotList;
