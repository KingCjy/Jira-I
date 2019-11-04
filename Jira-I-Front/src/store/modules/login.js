import { createAction, handleActions } from 'redux-actions';

const CHANGE_INPUT = 'login/CHANGE_EMAIL_INPUT';
const AUTH_LOGIN = 'login/AUTH_LOGIN';
const AUTH_LOGIN_SUCCESS = 'login/AUTH_LOGIN_SUCCESS';
const AUTH_LOGIN_FAILURE = 'login/AUTH_LOGIN_FAILURE';
const SET_USER_INFO = 'login/SET_USER_INFO';
// const LOGIN = 'login/LOGIN';

export const changeInput = createAction(CHANGE_INPUT, input => ({
  key: input.key,
  value: input.value,
}));

export const loginSuccess = createAction(AUTH_LOGIN_SUCCESS);
export const loginFailure = createAction(AUTH_LOGIN_FAILURE);
export const setUserInfo = createAction(SET_USER_INFO, id => ({ id }));

const initialState = {
  email: '',
  password: '',
  check: false,
  login: {
    status: '',
    logged: false,
  },
};

export default handleActions(
  {
    [CHANGE_INPUT]: (state, action) => ({
      ...state,
      [action.payload.key]: action.payload.value,
    }),

    [AUTH_LOGIN]: state => ({
      ...state,
      login: {
        status: 'WAITING',
      },
    }),

    [AUTH_LOGIN_SUCCESS]: (state, action) => ({
      ...state,
      login: {
        status: 'SUCCESS',
        logged: true,
      },
    }),

    [AUTH_LOGIN_FAILURE]: (state, action) => ({
      ...state,
      login: {
        status: 'FAILURE',
      },
    }),

    [SET_USER_INFO]: (state, action) => ({
      ...state,
      email: action.payload.id,
      login: {
        status: 'SUCCESS',
        logged: true,
      },
    }),
  },
  initialState,
);
