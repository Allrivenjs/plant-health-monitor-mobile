import {useEffect} from 'react';
import { useActionsStore } from '../../store/useActionsStore';

export const useActionScreen = () => {
  const fetchActions = useActionsStore(
    actionsStore => actionsStore.fetchActions,
  );
  const loadingActions = useActionsStore(actionsStore => actionsStore.loading);
  const actions = useActionsStore(actionsStore => actionsStore.actions);

  useEffect(() => {
    fetchActions();
  }, []);

  return {
    loading: loadingActions,
    actions,
  };
};
