export const BLOG_ID_PATHNAME = 'blogId';

export default {
  welcome: () => '/welcome',
  home: () => '/',
  profile: () => '/profile',
  blogs: () => {
    const defaultBlogId = `:${BLOG_ID_PATHNAME}`;
    const root = '/blogs';
    const url = (path: string) => `${root}${path}`;
    return {
      list: () => root,
      new: () => url('/new'),
      view: (blogId = defaultBlogId) => url(`/${blogId}`),
      edit: (blogId = defaultBlogId) => url(`/${blogId}/edit`),
    };
  },
  contact: () => '/contact',

  login: () => '/login',
  register: () => '/register',
  passwordReset: () => '/password_reset',
  emailConfirmation: () => '/email_confirmation',
  confirmEmail: () => '/confirm_email',
  resetPassword: () => '/reset_password',
};
