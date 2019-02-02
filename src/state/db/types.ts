import BSON from 'bson';

export const Contact = (from: string, subject: string, body: string) => ({
  _id: new BSON.ObjectId(),
  from,
  subject,
  body,
  ackd: false,
  responded: false,
});

export interface Contact extends ReturnType<typeof Contact> {}

export const DbState = () => ({
  contacts: [] as Contact[],
});

export interface DbState extends ReturnType<typeof DbState> {}
