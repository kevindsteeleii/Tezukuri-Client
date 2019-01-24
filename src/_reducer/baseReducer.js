import { LOGIN, LOGOFF, SIGNUP } from '../_actions/types';

const initialState = {

}

export const baseReducer = (state = initialState, { type, payload}) => {
  switch(type) {
    case LOGIN:
      return state;

    default:
      return state;
  }
}