import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";

import { AUTHENTICATE, CREATE_STREAM } from "../actions/types";

const loginReducer = (state = { profile: {} }, action) => {
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

const createStream = (state = { isStreaming: false }, action) => {
  switch (action.type) {
    case CREATE_STREAM:
      return {
        isStreaming: true,
        info: action.payload
      };
    default:
      return state;
  }
};

export default combineReducers({
  form: formReducer,
  user: loginReducer,
  stream: createStream
});
