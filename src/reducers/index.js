import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";

import {
  AUTHENTICATE,
  CREATE_STREAM,
  GET_STREAMS,
  GET_STREAM,
  EDIT_STREAM,
  DELETE_STREAM,
  STREAM,
  AUTHREADY
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

const createStream = (state = {}, { type, payload }) => {
  switch (type) {
    case CREATE_STREAM:
      return payload;
    case STREAM:
      return payload;
    case EDIT_STREAM:
      return payload;
    default:
      return state;
  }
};

const streamsReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case GET_STREAMS:
      return payload;
    case CREATE_STREAM:
      const { id } = payload;
      return { ...state, [id]: payload };
    case EDIT_STREAM: {
      const { id } = payload;
      return { ...state, [id]: payload };
    }
    case DELETE_STREAM:
      return { ...state, [payload]: undefined };
    default:
      return state;
  }
};

const isStreamingReducer = (state = false, { type }) => {
  switch (type) {
    case CREATE_STREAM:
      return true;
    case DELETE_STREAM:
      return false;
    case STREAM:
      return true;
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

const authReadyReducer = (state = false, { type }) => {
  switch (type) {
    case AUTHREADY:
      return true;
    default:
      return state;
  }
};

export default combineReducers({
  form: formReducer,
  user: loginReducer,
  ownStream: createStream,
  streams: streamsReducer,
  isStreaming: isStreamingReducer,
  currentStream: streamReducer,
  authReady: authReadyReducer
});
