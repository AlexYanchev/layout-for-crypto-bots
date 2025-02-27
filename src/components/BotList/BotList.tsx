import React, { FC } from 'react';
import styled from 'styled-components';
import Bot from '../Bot/Bot';
import BotIcon from '../../asserts/Icons/BotIcon/BotIcon';
import MegaBotIcon from '../../asserts/Icons/MegaBotIcon/MegaBotIcon';
import { useStoreContext } from '../../Providers/StoreProvider';
import { T_NamesBots } from '../../types/T_NamesBots';

const Container = styled.div`
  padding: 0 var(--padding-side);
  margin-top: 27px;
  display: flex;
  flex-wrap: wrap;
  gap: 2px;
  justify-content: center;
  align-items: center;
`;

const botNameMap: Record<T_NamesBots, { text: string; fill: string }> = {
  blue_bot: { text: 'Balance', fill: '#4794c4' },
  green_bot: { text: 'Defence', fill: '#78a659' },
  orange_bot: { text: 'Attack', fill: '#f96400' },
  red_bot: { text: 'Attack', fill: '#f11d0d' },
  white_bot: { text: 'Balance', fill: '#fff' },
  yellow_bot: { text: 'Megabot', fill: '#feda32' },
};

const BotList: FC = () => {
  const botList = useStoreContext((state) => state.data.bots);
  const { currentTimeRange, currentBot, setBot } = useStoreContext((state) => ({
    currentTimeRange: state.currentTimeRange,
    currentBot: state.currentBot,
    setBot: state.setBot,
  }));

  const onClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const targetElement = e.target as HTMLElement;
    const botElement = targetElement.closest('[data-botname]');

    if (!botElement) {
      return;
    }

    const botName = botElement.getAttribute(
      'data-botname'
    ) as T_NamesBots | null;

    if (!botName) {
      return;
    }

    setBot(botName);
  };

  return (
    <Container onClick={onClick}>
      {botList.map((bot, index) => {
        if (index === 1) {
          return (
            <Bot
              key={index}
              text='Place bot here'
              textColor='#515d72'
              emptyBot={true}
              name=''
            >
              <BotIcon fill='#1d2637' fullFill={true} />
            </Bot>
          );
        }
        return (
          <Bot
            key={index}
            textMarginTop={bot.name === 'yellow_bot' ? 10 : undefined}
            text={botNameMap[bot.name].text}
            percent={bot[currentTimeRange]}
            active={bot.name === currentBot.name}
            name={bot.name}
          >
            <BotIcon fill={botNameMap[bot.name].fill} fullFill={false} />
          </Bot>
        );
      })}
    </Container>
  );
};

export default BotList;
