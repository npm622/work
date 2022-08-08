import { StitchClient } from '@makes-apps/lib';

const RootContext = () => new StitchClient(process.env.STITCH_APP_ID || '');
interface RootContext extends ReturnType<typeof RootContext> {}

export default RootContext;
