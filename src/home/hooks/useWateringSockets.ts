import {useEffect} from 'react';
import {socket} from '../../lib/socketIOClient';
import {useActionsStore} from '../../store/useActionsStore';

export const useWateringSockets = () => {
  const addAction = useActionsStore(actionsStore => actionsStore.addAction);

  useEffect(() => {
    socket.on('watering', action => {
      addAction(action);
      console.log('llego una acción');
    });

    // socket.on('device-data', (data: DeviceData) => {
    //   console.log(data);
    //   setData({
    //     temperatura: Number(data.temperatura.toFixed(0)),
    //     humedad: Number(data.humedad.toFixed(0)),
    //     luz: Number(data.luz.toFixed(0)),
    //   });
    // });

    return () => {
      socket.off('watering');
    };
  }, []);
};
