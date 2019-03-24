import {
  AnonymousCredential,
  RemoteMongoClient,
  Stitch,
  StitchAppClient,
  StitchAppClientConfiguration,
  StitchAuth,
  UserPasswordAuthProviderClient,
  UserPasswordCredential,
} from 'mongodb-stitch-browser-sdk';
import { StitchClient, MakesClientOptions } from '..';
import BaseClient from './client';

export default class MakesStitchClient extends BaseClient implements StitchClient {
  readonly type = 'stitch';
  readonly authOptions: { useAnon: boolean; creds?: { username: string; password: string } };
  readonly stitch: StitchAppClient;

  constructor(clientAppId: string, useAnonAuth?: boolean, options = {} as MakesClientOptions) {
    super(options);

    let config = void 0 as StitchAppClientConfiguration | undefined;
    if (options.baseUrl) {
      config = new StitchAppClientConfiguration.Builder().withBaseUrl(options.baseUrl).build();
    }
    this.stitch = Stitch.initializeDefaultAppClient(clientAppId, config);

    this.authOptions = { useAnon: !!useAnonAuth, creds: options.credentials };
  }

  get auth() {
    return this.stitch.auth;
  }

  public clients = () => {
    return {
      db: (clusterName: string, dbName: string) =>
        this.stitch.getServiceClient(RemoteMongoClient.factory, clusterName).db(dbName),

      emailPassword: this.stitch.auth.getProviderClient(UserPasswordAuthProviderClient.factory),
    };
  };

  public login = () => {
    return {
      emailPassword: (email: string, password: string) =>
        this.stitch.auth.loginWithCredential(new UserPasswordCredential(email, password)),
    };
  };

  public logout = () => {
    return this.stitch.auth.logout();
  };

  public registerAuthListener = (onAuthEvent: (auth: StitchAuth) => any) => {
    this.stitch.auth.addAuthListener({ onAuthEvent });
  };

  public setup = async () => {
    const { useAnon, creds } = this.authOptions;

    if (useAnon) {
      const user = await this.stitch.auth.loginWithCredential(new AnonymousCredential());
      return user;
    }

    if (creds) {
      const user = await this.stitch.auth.loginWithCredential(
        new UserPasswordCredential(creds.username, creds.password)
      );
      return user;
    }

    return;
  };
}
