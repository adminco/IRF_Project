import { NEWUSER_INFO } from "../actions/newUserAction";

export const newUserReducer = (state = "", action) => {
  switch (action.type) {
    case NEWUSER_INFO:
      return action.payload.newUser;
    default:
      return state;
  }
};
