import React, { FC } from 'react';

interface BotIconProps {
  fill: string;
  fullFill: boolean;
}

const BotIcon: FC<BotIconProps> = ({ fill, fullFill }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      xmlnsXlink='http://www.w3.org/1999/xlink'
      viewBox='0 0 90 70'
      style={{
        display: 'block',
        width: 'min(calc(90 * var(--adaptive-coefficient)), 90px)',
        height: 'min(calc(70 * var(--adaptive-coefficient)), 70px)',
      }}
    >
      {!fullFill && (
        <defs>
          <linearGradient
            id={`half-gradient-bot-icon-${fill}`}
            x1='0%'
            y1='0%'
            x2='100%'
            y2='0%'
          >
            <stop offset='50%' stopColor={fill} stopOpacity={1} />
            <stop offset='50%' stopColor={fill} stopOpacity={0.85} />
          </linearGradient>
        </defs>
      )}

      <path
        fill={fullFill ? fill : `url(#half-gradient-bot-icon-${fill})`}
        fillRule='evenodd'
        d='M80.000,70.000 L80.000,60.000 L70.000,60.000 L70.000,70.000 L60.000,70.000 L60.000,60.000 L50.000,60.000 L50.000,70.000 L40.000,70.000 L40.000,60.000 L30.000,60.000 L30.000,70.000 L20.000,70.000 L20.000,60.000 L10.000,60.000 L10.000,70.000 L-0.000,70.000 L-0.000,60.000 L-0.000,30.000 L10.000,30.000 L10.000,20.000 L20.000,20.000 L20.000,10.000 L30.000,10.000 L30.000,-0.000 L40.000,-0.000 L40.000,10.000 L50.000,10.000 L50.000,-0.000 L60.000,-0.000 L60.000,10.000 L70.000,10.000 L70.000,20.000 L80.000,20.000 L80.000,30.000 L90.000,30.000 L90.000,60.000 L90.000,70.000 L80.000,70.000 ZM40.000,30.000 L20.000,30.000 L20.000,40.000 L40.000,40.000 L40.000,30.000 ZM50.000,30.000 L50.000,40.000 L70.000,40.000 L70.000,30.000 L50.000,30.000 Z'
      />
    </svg>
  );
};

export default React.memo(BotIcon);
