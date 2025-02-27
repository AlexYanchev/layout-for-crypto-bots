import React, { FC, useState } from 'react';
import styled, { css } from 'styled-components';
import DashBoardIcon from '../../asserts/Icons/DashBoardIcon/DashBoardIcon';
import MegabotToolIcon from '../../asserts/Icons/MegabotToolIcon/MegabotToolIcon';
import BotMarketToolIcon from '../../asserts/Icons/BotMarketToolIcon/BotMarketToolIcon';
import CoinPricesToolIcon from '../../asserts/Icons/CoinPricesToolIcon/CoinPricesToolIcon';
import ProfileToolIcon from '../../asserts/Icons/ProfileToolIcon/ProfileToolIcon';
import ButtonTool from '../ButtonTool/ButtonTool';

const Container = styled.div`
  padding: 13px var(--padding-side);
  background: #232c3e;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ControlPanel: FC = () => {
  const [active, setActive] = useState<string>('Dashboard');

  const onClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const menuName = e.currentTarget.getAttribute('data-menuname');

    if (!menuName) {
      return;
    }

    setActive(menuName);
  };
  return (
    <Container onClick={onClick}>
      <ButtonTool
        icon={<DashBoardIcon />}
        data-menuname='Dashboard'
        text='Dashboard'
        active={active === 'Dashboard'}
      />
      <ButtonTool
        icon={<MegabotToolIcon />}
        data-menuname='Megabot'
        text='Megabot'
        active={active === 'Megabot'}
      />
      <ButtonTool
        icon={<BotMarketToolIcon />}
        data-menuname='Bot market'
        text='Bot market'
        active={active === 'Bot market'}
      />
      <ButtonTool
        icon={<CoinPricesToolIcon />}
        data-menuname='Coin prices'
        text='Coin prices'
        active={active === 'Coin prices'}
      />
      <ButtonTool
        icon={<ProfileToolIcon />}
        text='Profile'
        notificationValue={3}
      />
    </Container>
  );
};

export default ControlPanel;
