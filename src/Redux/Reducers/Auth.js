import {
  LOGIN,
  LOGOUT,
  ACCOUNT_TYPE_LIVEMUSIC,
  ACCOUNT_TYPE_RESTAURANT,
  ACCOUNT_TYPE_USER,
} from '../Types';
const intialState = {
  user: {},
  isLogin: false,
};
const reducer = (state = intialState, action) => {
  switch (action.type) {
    case LOGIN: {
      return {
        ...state,
        user: {...action.payload, type: 'user'},
        isLogin: true,
      };
    }
    case LOGOUT: {
      return {
        ...state,
        user: {},
        isLogin: false,
      };
    }
    case ACCOUNT_TYPE_LIVEMUSIC: {
      return {
        ...state,
        user: {...state.user, type: 'liveMusic'},
      };
    }
    case ACCOUNT_TYPE_RESTAURANT: {
      return {
        ...state,
        user: {...state.user, type: 'restaurant'},
      };
    }
    case ACCOUNT_TYPE_USER: {
      return {
        ...state,
        user: {...state.user, type: 'user'},
      };
    }
    default:
      return state;
  }
};
export default reducer;
