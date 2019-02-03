import { RESOURCES } from "../actions/resourcesAction";

export const resourcesReducer = (state = "", action) => {
  switch (action.type) {
    case RESOURCES:
      return action.payload.resource;
    default:
      return state;
  }
};
