export const NEWUSER_INFO = "NEWUSER_INFO";

export const newUserInfo = newUser => {
  return {
    type: NEWUSER_INFO,
    payload: { newUser }
  };
};
