import { AUTHENTICATE } from "./types";

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
