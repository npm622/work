import ActionCoordinator from '../actions/coordinator';

export default <STATE extends {}>(
  initialState: STATE,
  actions: { [key: string]: ActionCoordinator<STATE, any> }
) => {
  const coordinatorsByType = Object.values(actions).reduce(
    (acc, coordinator) => ({
      ...acc,
      [coordinator.creator.type]: coordinator,
    }),
    {} as any
  );

  return (state = initialState, action: any) => {
    const coordinator = coordinatorsByType[action.type];
    if (coordinator) {
      return coordinator.handleAction(state, action);
    }
    return state;
  };
};
