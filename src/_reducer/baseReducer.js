import { LOGIN, LOGOFF, SIGNUP, DEMO } from '../_actions/types';
const initialState = {
  demoLoggedIn: false,
  user: {}
}

const baseReducer = (state = initialState, { type, payload}) => {
  let { demoLoggedIn, user } = state;

  switch(type) {
    case LOGIN:
      return state;

    case DEMO:
      demoLoggedIn = true;
      return {...state, demoLoggedIn};
    
    case LOGOFF:
      demoLoggedIn = false;
      user = {};
      return {...state, demoLoggedIn, user};

    default:
      return state;
  }
}
export default baseReducer;