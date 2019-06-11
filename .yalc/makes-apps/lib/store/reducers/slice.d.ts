import ActionCoordinator from '../actions/coordinator';
declare const _default: <STATE extends {}>(namespace: string, initialState: STATE, actions: {
    [key: string]: ActionCoordinator<STATE, any>;
}) => (state: STATE | undefined, action: any) => any;
export default _default;
