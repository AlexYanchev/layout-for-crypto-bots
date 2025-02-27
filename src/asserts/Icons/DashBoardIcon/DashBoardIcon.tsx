import React, { FC } from 'react';

interface DashBoardIconProps {
  active: boolean;
}

const DashBoardIcon: FC<DashBoardIconProps> = ({ active }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      xmlnsXlink='http://www.w3.org/1999/xlink'
      width='44px'
      height='39px'
    >
      <path
        fillRule='evenodd'
        fill={active ? 'var(--accent-color)' : 'var(--main-element-color)'}
        d='M42.895,20.084 L15.805,20.084 C15.194,20.084 14.700,19.599 14.700,19.000 C14.700,18.401 15.194,17.916 15.805,17.916 L42.895,17.916 C43.506,17.916 44.000,18.401 44.000,19.000 C44.000,19.599 43.506,20.084 42.895,20.084 ZM42.895,5.728 L15.805,5.728 C15.194,5.728 14.700,5.243 14.700,4.644 C14.700,4.045 15.194,3.560 15.805,3.560 L42.895,3.560 C43.506,3.560 44.000,4.045 44.000,4.644 C44.000,5.243 43.506,5.728 42.895,5.728 ZM4.735,38.000 C2.129,38.000 -0.000,35.911 -0.000,33.356 C-0.000,30.800 2.129,28.711 4.735,28.711 C7.341,28.711 9.470,30.791 9.470,33.356 C9.470,35.911 7.350,38.000 4.735,38.000 ZM4.735,30.862 C3.342,30.862 2.201,31.981 2.201,33.347 C2.201,34.713 3.342,35.832 4.735,35.832 C6.128,35.832 7.269,34.722 7.269,33.347 C7.269,31.981 6.137,30.862 4.735,30.862 ZM4.735,23.644 C2.129,23.644 -0.000,21.564 -0.000,19.000 C-0.000,16.435 2.120,14.356 4.735,14.356 C7.350,14.356 9.470,16.444 9.470,19.000 C9.470,21.556 7.350,23.644 4.735,23.644 ZM4.735,16.515 C3.342,16.515 2.201,17.625 2.201,19.000 C2.201,20.375 3.342,21.485 4.735,21.485 C6.128,21.485 7.269,20.366 7.269,19.000 C7.269,17.634 6.137,16.515 4.735,16.515 ZM4.735,9.297 C2.129,9.297 -0.000,7.200 -0.000,4.644 C-0.000,2.089 2.120,-0.000 4.735,-0.000 C7.350,-0.000 9.470,2.097 9.470,4.653 C9.470,7.209 7.350,9.297 4.735,9.297 ZM4.735,2.159 C3.342,2.159 2.201,3.278 2.201,4.644 C2.201,6.010 3.342,7.129 4.735,7.129 C6.128,7.129 7.269,6.010 7.269,4.644 C7.269,3.278 6.137,2.159 4.735,2.159 ZM15.805,32.263 L42.895,32.263 C43.506,32.263 44.000,32.748 44.000,33.347 C44.000,33.946 43.506,34.431 42.895,34.431 L15.805,34.431 C15.194,34.431 14.700,33.946 14.700,33.347 C14.700,32.748 15.194,32.263 15.805,32.263 Z'
      />
    </svg>
  );
};

export default DashBoardIcon;
