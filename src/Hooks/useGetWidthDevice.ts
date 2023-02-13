import { useState, useEffect } from 'react';

export const useGetWidthDevice = (): number => {
  const [deviceSize, changeDeviceSize] = useState(window.innerWidth);

  useEffect(() => {
    const resizeW = (): void => changeDeviceSize(window.innerWidth);

    window.addEventListener('resize', resizeW);

    return (): void => window.removeEventListener('resize', resizeW);
  });

  return deviceSize;
};
