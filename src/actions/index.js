import { AUTHENTICATE, CREATE_STREAM } from "./types";
import streams from "../api/streams";

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
  await streams.post("/streams", streamInfo);
  return dispatch({
    type: CREATE_STREAM,
    payload: streamInfo
  });
};
