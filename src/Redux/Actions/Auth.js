import {
  LOGIN,
  LOGOUT,
  ACCOUNT_TYPE_LIVEMUSIC,
  ACCOUNT_TYPE_RESTAURANT,
  ACCOUNT_TYPE_USER,
} from '../Types';
export const login = payload => {
  return {
    type: LOGIN,
    payload: payload,
  };
};
export const logout = () => {
  return {
    type: LOGOUT,
    payload: {uid: ''},
  };
};
export const setAccountTypeUser = () => {
  return {
    type: ACCOUNT_TYPE_USER,
    payload: {uid: ''},
  };
};
export const setAccountTypeRestaurant = () => {
  return {
    type: ACCOUNT_TYPE_RESTAURANT,
    payload: {uid: ''},
  };
};
export const setAccountTypeLiveMusic = () => {
  return {
    type: ACCOUNT_TYPE_LIVEMUSIC,
    payload: {uid: ''},
  };
};
