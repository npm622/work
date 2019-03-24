import { BSON } from 'mongodb-stitch-browser-sdk';

export class AdminState {
  constructor(
    public working = 0,
    public alerts = [] as Alert[],
    public background = SolidBackground('#fff') as Background
  ) {}
}

interface AlertAction {
  onClick: () => {};
  display: string;
}

type AlertType = 'success' | 'info' | 'warn' | 'error' | 'debug';

export interface AlertOptions {
  action?: AlertAction;
  confirmable?: boolean;
  dismissable?: boolean;
  displayForMillis?: number;
}

export type AlertParams = [AlertType, string, AlertOptions];

export interface Alert extends ReturnType<typeof Alert> {}
export const Alert = (...[type, message, options]: AlertParams) => ({
  key: new BSON.ObjectID().toHexString(),
  type,
  time: new Date(),
  message,
  action: options.action,
  confirmable: options.confirmable,
  dismissable: options.dismissable,
  displayForMillis: options.displayForMillis,
});

export const SolidBackground = (fillColor: string) => ({
  type: 'solid' as 'solid',
  fillColor,
});

export const GradientBackground = (direction: string, colorStops: string[]) => ({
  type: 'linear_gradient' as 'linear_gradient',
  direction,
  colorStops,
});

export const ImageBackground = (url: string) => ({
  type: 'image' as 'image',
  url,
});

export type Background =
  | ReturnType<typeof SolidBackground>
  | ReturnType<typeof GradientBackground>
  | ReturnType<typeof ImageBackground>;
