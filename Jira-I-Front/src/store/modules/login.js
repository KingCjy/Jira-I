import { createAction, handleActions } from 'redux-actions';

const CHANGE_INPUT = 'login/CHANGE_EMAIL_INPUT';
// const LOGIN = 'login/LOGIN';

export const changeInput = createAction(CHANGE_INPUT, input => ({
  key: input.key,
  value: input.value,
}));

const initialState = {
  email: '',
  password: '',
  check: false,
};

export default handleActions(
  {
    [CHANGE_INPUT]: (state, action) => ({
      ...state,
      [action.payload.key]: action.payload.value,
    }),
  },
  initialState,
);
