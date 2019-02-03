export const RESET_STATE = "RESET_STATE";

export const resetState = bool => {
  return {
    type: RESET_STATE,
    payload: { bool }
  };
};
