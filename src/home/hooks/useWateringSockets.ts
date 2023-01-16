import { useEffect } from 'react';
import socket from '../../lib/socketIOClient';

export const useWateringSockets = () => {
  useEffect(() => {
    socket.on('watering', (message) => {
      console.log('watering message received: ', message);
    });
  }, []);
};
