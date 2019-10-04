import {
  AUTHENTICATE,
  CREATE_STREAM,
  GET_STREAMS,
  GET_STREAM,
  DELETE_STREAM,
  EDIT_STREAM
} from "./types";
import streamApi from "../api/streams";

export const authenticate = (isSignedIn, info) => {
  info = info.getBasicProfile();
  const profile = {
    name: info.getName(),
    img: info.getImageUrl(),
    email: info.getEmail(),
    id: info.getId()
  };
  return {
    type: AUTHENTICATE,
    payload: {
      isSignedIn,
      profile
    }
  };
};

export const createStream = streamInfo => async dispatch => {
  await streamApi.post("/streams", streamInfo);
  return dispatch({
    type: CREATE_STREAM,
    payload: streamInfo
  });
};

export const getStreams = () => async dispatch => {
  const res = await streamApi.get("/streams");
  dispatch({
    type: GET_STREAMS,
    payload: res.data
  });
};

export const getStream = id => async dispatch => {
  const res = await streamApi.get(`/streams/${id}`);
  dispatch({
    type: GET_STREAM,
    payload: res.data
  });
};

export const deleteStream = id => async dispatch => {
  await streamApi.delete(`/streams/${id}`);
  dispatch({
    type: DELETE_STREAM
  });
};

export const editStream = newStream => async dispatch => {
  await streamApi.put(`/streams`, newStream);
  dispatch({
    type: EDIT_STREAM
  });
};
