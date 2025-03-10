import React, { FC } from 'react';

//width='30.000000'

const HMoneyIcon: FC = () => {
  return (
    <svg
      version='1.0'
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 30.000000 30.000000'
      preserveAspectRatio='xMidYMid meet'
      style={{
        width: 'clamp(1rem, calc(30 * var(--adaptive-coefficient)), 30px)',
        height: 'clamp(1rem, calc(30 * var(--adaptive-coefficient)), 30px)',
      }}
    >
      <g
        transform='translate(0.000000,30.000000) scale(0.100000,-0.100000)'
        fill='var(--main-element-color)'
        stroke='none'
      >
        <path
          d='M106 290 c-106 -32 -136 -174 -52 -248 59 -52 141 -50 198 5 79 76
  44 213 -63 243 -39 11 -44 11 -83 0z m135 -49 c35 -35 39 -44 39 -91 0 -77
  -53 -130 -130 -130 -47 0 -56 4 -91 39 -57 57 -57 125 0 182 35 35 44 39 91
  39 47 0 56 -4 91 -39z'
        />
        <path
          d='M115 251 c-11 -5 -31 -21 -45 -35 -58 -63 -8 -171 80 -171 57 0 105
  48 105 105 0 68 -81 126 -140 101z m15 -71 c0 -13 7 -20 20 -20 13 0 20 7 20
  20 0 11 5 20 10 20 6 0 10 -22 10 -50 0 -27 -4 -50 -10 -50 -5 0 -10 9 -10 20
  0 13 -7 20 -20 20 -13 0 -20 -7 -20 -20 0 -11 -4 -20 -10 -20 -5 0 -10 23 -10
  50 0 28 5 50 10 50 6 0 10 -9 10 -20z'
        />
      </g>
    </svg>
  );
};

export default HMoneyIcon;
