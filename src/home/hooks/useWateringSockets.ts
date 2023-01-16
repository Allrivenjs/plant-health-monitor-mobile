import {useEffect} from 'react';
import {socket} from '../../lib/socketIOClient';
import { useActionsStore } from '../../store/useActionsStore';

export const useWateringSockets = () => {
  const addAction = useActionsStore(actionsStore => actionsStore.addAction);

  useEffect(() => {
    socket.on('watering', action => {
      addAction(action);
    });
  }, []);
};
