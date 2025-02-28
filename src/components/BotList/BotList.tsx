import React, { FC, useMemo } from 'react';
import styled from 'styled-components';
import Bot from '../Bot/Bot';
import BotIcon from '../../asserts/Icons/BotIcon/BotIcon';
import MegaBotIcon from '../../asserts/Icons/MegaBotIcon/MegaBotIcon';
import { useStoreContext } from '../../Providers/StoreProvider';
import { T_NamesBots } from '../../types/T_NamesBots';
import { I_Bot } from '../../types/I_Bot';
import ArrowsIcon from '../../asserts/Icons/ArrowsIcon/ArrowsIcon';

interface createActualBotListParams {
  bots: Array<I_Bot>;
  namesVisibleBots: Array<T_NamesBots>;
  megabotIndex: number;
  emptyBotIndex: number;
}

const createActualBotList = ({
  bots,
  namesVisibleBots,
  megabotIndex,
  emptyBotIndex,
}: createActualBotListParams): Array<I_Bot | { name: 'emptyBot' }> => {
  const botList: Array<I_Bot | { name: 'emptyBot' }> = bots.filter(
    (bot) => namesVisibleBots.includes(bot.name) && !(bot.name === 'yellow_bot')
  );
  const megabot = bots.find((bot) => bot.name === 'yellow_bot');

  botList.splice(emptyBotIndex, 0, { name: 'emptyBot' });

  if (megabot) {
    botList.splice(megabotIndex, 0, megabot);
  }

  if (botList.length < 6) {
    const diff = 6 - botList.length;
    const emptyBotsArray: Array<{ name: 'emptyBot' }> = Array.from({
      length: diff,
    }).map(() => ({ name: 'emptyBot' }));
    botList.push(...emptyBotsArray);
  }

  return botList;
};

const Container = styled.div`
  padding: 0 var(--padding-side);
  margin: 27px auto 0 auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2px;
  max-width: 784px;
`;

const MegaBotContainer = styled.div`
  position: relative;
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
  const bots = useStoreContext((state) => state.data.bots);
  const { currentTimeRange, currentBot, setBot } = useStoreContext((state) => ({
    currentTimeRange: state.currentTimeRange,
    currentBot: state.currentBot,
    setBot: state.setBot,
  }));

  const actualBotList = useMemo(() => {
    return createActualBotList({
      bots,
      namesVisibleBots: [
        'orange_bot',
        'blue_bot',
        'green_bot',
        'red_bot',
        'yellow_bot',
      ],
      emptyBotIndex: 1,
      megabotIndex: 4,
    });
  }, []);

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
      {actualBotList.map((bot, index) => {
        if (bot.name === 'emptyBot') {
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

        if (bot.name === 'yellow_bot') {
          return (
            <MegaBotContainer key={index}>
              <ArrowsIcon
                style={{
                  position: 'absolute',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  top: '-20%',
                }}
              />
              <Bot
                textMarginTop={10}
                text='Megabot'
                name={bot.name}
                percent={bot[currentTimeRange]}
                active={bot.name === currentBot.name}
              >
                <MegaBotIcon fill='#feda32' fullFill={true} />
              </Bot>
            </MegaBotContainer>
          );
        }

        return (
          <Bot
            key={index}
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
