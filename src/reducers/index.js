import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";

import {
  AUTHENTICATE,
  CREATE_STREAM,
  GET_STREAMS,
  GET_STREAM,
  EDIT_STREAM,
  DELETE_STREAM
} from "../actions/types";

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

const streamsReducer = (state = {}, { type, payload }) => {
  const { id } = payload;
  payload = { ...payload, id: undefined };

  switch (type) {
    case GET_STREAMS:
      return payload;
    case CREATE_STREAM || EDIT_STREAM:
      return { ...state, [id]: payload };
    case DELETE_STREAM:
      return { ...state, [id]: undefined };
    default:
      return state;
  }
};

const streamReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case GET_STREAM:
      return payload;
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
    case EDIT_STREAM:
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
  ownStream: createStream,
  streams: streamsReducer,
  currentStream: streamReducer
});
