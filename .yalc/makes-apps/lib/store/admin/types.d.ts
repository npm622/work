export declare const ADMIN = "admin";
export declare class AdminState {
    working: number;
    alerts: Alert[];
    background: Background;
    constructor(working?: number, alerts?: Alert[], background?: Background);
}
interface AlertAction {
    onClick: () => {};
    display: string;
}
declare type AlertType = 'success' | 'info' | 'warn' | 'error' | 'debug';
export interface AlertOptions {
    action?: AlertAction;
    confirmable?: boolean;
    dismissable?: boolean;
    displayForMillis?: number;
}
export declare type AlertParams = [AlertType, string, AlertOptions];
export interface Alert extends ReturnType<typeof Alert> {
}
export declare const Alert: (__0_0: "error" | "success" | "debug" | "info" | "warn", __0_1: string, __0_2: AlertOptions) => {
    key: string;
    type: "error" | "success" | "debug" | "info" | "warn";
    time: Date;
    message: string;
    action: AlertAction | undefined;
    confirmable: boolean | undefined;
    dismissable: boolean | undefined;
    displayForMillis: number | undefined;
};
export declare const SolidBackground: (fillColor: string) => {
    type: "solid";
    fillColor: string;
};
export declare const GradientBackground: (direction: string, colorStops: string[]) => {
    type: "linear_gradient";
    direction: string;
    colorStops: string[];
};
export declare const ImageBackground: (url: string) => {
    type: "image";
    url: string;
};
export declare type Background = ReturnType<typeof SolidBackground> | ReturnType<typeof GradientBackground> | ReturnType<typeof ImageBackground>;
export {};
