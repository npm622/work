import { RemoteMongoClient, StitchAppClient, UserPasswordAuthProviderClient } from 'mongodb-stitch-browser-sdk';

export const appDb = (stitch: StitchAppClient) =>
  stitch.getServiceClient(RemoteMongoClient.factory, 'mongodb-atlas').db('makes_life');

export const authClient = (stitch: StitchAppClient) =>
  stitch.auth.getProviderClient(UserPasswordAuthProviderClient.factory);
