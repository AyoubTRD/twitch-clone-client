import {
  AUTHENTICATE,
  CREATE_STREAM,
  GET_STREAMS,
  GET_STREAM,
  DELETE_STREAM,
  EDIT_STREAM,
  STREAM,
  AUTHREADY
} from "./types";
import streamApi from "../api/streams";
import history from "../history";

export const authenticate = (isSignedIn, info) => {
  info = info.getBasicProfile();

  const profile = info
    ? {
        name: info.getName(),
        img: info.getImageUrl(),
        email: info.getEmail(),
        id: info.getId()
      }
    : {};
  return {
    type: AUTHENTICATE,
    payload: {
      isSignedIn,
      profile
    }
  };
};

export const authReady = () => ({ type: AUTHREADY });

export const stream = stream => ({
  type: STREAM,
  payload: stream
});

export const createStream = streamInfo => async dispatch => {
  try {
    await streamApi.post("/streams", streamInfo);
    dispatch({
      type: CREATE_STREAM,
      payload: streamInfo
    });
    history.push("/");
  } catch (err) {
    console.log(err);
  }
};

export const editStream = newStream => async dispatch => {
  try {
    await streamApi.put("/strems", newStream);
    dispatch({
      type: EDIT_STREAM,
      payload: newStream
    });
    history.push("/");
  } catch (err) {
    console.log(err);
  }
};
export const getStreams = cb => async dispatch => {
  const res = await streamApi.get("/streams");
  dispatch({
    type: GET_STREAMS,
    payload: res.data
  });
  cb(res.data);
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
    type: DELETE_STREAM,
    payload: id
  });
};
