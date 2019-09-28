import { BaseDocument } from '@makes-apps/lib';

export interface Contact extends BaseDocument {
  timestamp: Date;
  from: string;
  message: string;
}
