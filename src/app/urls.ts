export default {
  welcome: '/welcome',
  home: '/',
  admin: '/admin',

  users: {
    list: '/users',
    find: (userName = ':userName') => `/users/${userName}`,
  },

  auth: {
    login: '/login',
    register: '/register',
    confirmEmail: '/confirm_email',
    resetPassword: '/reset_password',
    confirmation: '/confirmation',
    passwordReset: '/password_reset',
  },
};
