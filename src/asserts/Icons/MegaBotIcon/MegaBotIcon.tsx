import React, { FC } from 'react';

interface MegaBotIconProps {
  fill: string;
  fullFill: boolean;
}

const MegaBotIcon: FC<MegaBotIconProps> = ({ fill, fullFill }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      xmlnsXlink='http://www.w3.org/1999/xlink'
      width='min(11.47vw, 90px)'
      height='min(11.47vw, 90px)'
      viewBox='0 0 90 90'
      style={{ display: 'block' }}
    >
      {!fullFill && (
        <defs>
          <linearGradient
            id={`half-gradient-mega-bot-icon-${fill}`}
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
        fillRule='evenodd'
        fill={fullFill ? fill : `url(#half-gradient-mega-bot-icon-${fill})`}
        d='M80.000,70.000 L80.000,50.000 L70.000,50.000 L70.000,70.000 L60.000,70.000 L60.000,80.000 L70.000,80.000 L70.000,90.000 L60.000,90.000 L50.000,90.000 L50.000,70.000 L40.000,70.000 L40.000,90.000 L30.000,90.000 L20.000,90.000 L20.000,80.000 L30.000,80.000 L30.000,70.000 L20.000,70.000 L20.000,50.000 L10.000,50.000 L10.000,60.000 L10.000,70.000 L-0.000,70.000 L-0.000,60.000 L-0.000,50.000 L-0.000,40.000 L10.000,40.000 L10.000,30.000 L20.000,30.000 L20.000,20.000 L30.000,20.000 L30.000,10.000 L40.000,10.000 L40.000,20.000 L50.000,20.000 L50.000,10.000 L60.000,10.000 L60.000,20.000 L70.000,20.000 L70.000,30.000 L80.000,30.000 L80.000,40.000 L90.000,40.000 L90.000,50.000 L90.000,70.000 L80.000,70.000 ZM40.000,30.000 L30.000,30.000 L30.000,40.000 L40.000,40.000 L40.000,30.000 ZM60.000,30.000 L50.000,30.000 L50.000,40.000 L60.000,40.000 L60.000,30.000 ZM20.000,-0.000 L30.000,-0.000 L30.000,10.000 L20.000,10.000 L20.000,-0.000 ZM70.000,-0.000 L70.000,10.000 L60.000,10.000 L60.000,-0.000 L70.000,-0.000 Z'
      />
    </svg>
  );
};

export default React.memo(MegaBotIcon);
