import {useEffect} from 'react';

import {useGardensStore} from '../../store';
import {useActionsStore} from '../../store/useActionsStore';

export const useHomeScreen = () => {
  const gardens = useGardensStore(gardensStore => gardensStore.gardens);
  const fetchGardens = useGardensStore(
    gardensStore => gardensStore.fetchGardens,
  );
  const loadingGardens = useGardensStore(gardensStore => gardensStore.loading);

  const fetchActions = useActionsStore(
    actionsStore => actionsStore.fetchActions,
  );
  const loadingActions = useActionsStore(actionsStore => actionsStore.loading);
  const actions = useActionsStore(actionsStore => actionsStore.actions);
  const addAction = useActionsStore(actionsStore => actionsStore.addAction);

  useEffect(() => {
    fetchGardens();
    fetchActions();
  }, []);

  return {
    loadingGardens,
    loadingActions,
    gardens,
    actions,
    addAction,
  };
};
