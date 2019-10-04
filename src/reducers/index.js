import { combineReducers } from "redux";

const loginReducer = (state = {}, action) => {
  switch (action.type) {
    case "AUTHENTICATE":
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
  user: loginReducer
});
