import { StitchClient } from '@makes-apps/lib';

const RootContext = (clientAppId: string) => new StitchClient(clientAppId);
interface RootContext extends ReturnType<typeof RootContext> {}

export default RootContext;
