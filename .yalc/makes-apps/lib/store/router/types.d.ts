import { RouterState as RouterStateInterface } from 'connected-react-router';
export declare const ROUTER = "router";
export declare class RouterState implements RouterStateInterface {
    location: {
        pathname: string;
        search: string;
        state: {};
        hash: string;
    };
    action: import("history").Action;
    constructor(location?: {
        pathname: string;
        search: string;
        state: {};
        hash: string;
    }, action?: import("history").Action);
}
