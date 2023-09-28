import {authRole, AuthType} from './AppEnums';

export const defaultUser = {
  displayName: '',
  email: '',
  authType: null,
  token: '',
  role: authRole.user,
  photoURL: '/assets/images/avatar/A11.jpg',
};

export const initialUrl = '/homepage'; // this url will open after login
