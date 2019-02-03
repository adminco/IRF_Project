import { RESET_STATE } from "../actions/resetStateAction";

export const resetStateReducer = (state = "", action) => {
  switch (action.type) {
    case RESET_STATE:
      return action.payload.bool;
    default:
      return state;
  }
};
