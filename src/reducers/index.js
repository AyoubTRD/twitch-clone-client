import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";

import { AUTHENTICATE } from "../actions/types";

const loginReducer = (state = {}, action) => {
  switch (action.type) {
    case AUTHENTICATE:
      const newState = {
        isSignedIn: action.payload.isSignedIn,
        profile: action.payload.profile
      };
      return newState;
    default:
      return state;
  }
};

export default combineReducers({
  user: loginReducer,
  form: formReducer
});
