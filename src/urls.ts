import { urls } from '@makes-apps/lib';

export const BLOG_ID_PATHNAME = 'blogId';

export default {
  welcome: () => '/welcome',
  home: () => '/',
  profile: () => '/profile',
  blogs: urls.resource({ singular: 'blog' }),
  contact: () => '/contact',
  auth: urls.auth(),
};
