import { combineReducers } from "redux";

const loginReducer = (state = false, action) => {
  switch (action.type) {
    case "LOGIN":
      return true;
    default:
      return state;
  }
};

export default combineReducers({
  loggedIn: loginReducer
});
