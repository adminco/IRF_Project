import { REQUEST } from "../actions/requestAction";

export const requestReducer = (state = "", action) => {
  switch (action.type) {
    case REQUEST:
      return action.payload.request;
    default:
      return state;
  }
};
