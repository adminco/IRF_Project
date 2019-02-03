// Library imports
import { combineReducers } from "redux";

// Directory imports
import { applicantReducer } from "./applicantReducer";
import { newUserReducer } from "./newUserReducer";
import { requestReducer } from "./requestReducer";
import { resourcesReducer } from "./resourcesReducer";
import { resetStateReducer } from "./resetStateReducer";

const combinedReducer = combineReducers({
  applicantInfo: applicantReducer,
  newUser: newUserReducer,
  formRequest: requestReducer,
  resources: resourcesReducer,
  resetForm: resetStateReducer
});

export default combinedReducer;
