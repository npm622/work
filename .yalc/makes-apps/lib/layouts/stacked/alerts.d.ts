import React from 'react';
import { Alert } from '../../store/admin';
import { Classer } from '../../components/utils';
interface Props {
    ackAlert: () => void;
    alerts: Alert[];
    classer: Classer;
}
declare class StackedAlerts extends React.Component<Props> {
    componentDidUpdate({ alerts: prevAlerts }: Props): void;
    render(): JSX.Element;
}
export default StackedAlerts;
