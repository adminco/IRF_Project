import { APPLICANT_INFO } from "../actions/applicantsAction";

export const applicantReducer = (state = "", action) => {
  switch (action.type) {
    case APPLICANT_INFO:
      return action.payload.info;
    default:
      return state;
  }
};
