// Library imports
import { createStore } from "redux";

// Directory imports
import combinedReducers from "../reducers/globalReducers";

// Define the global store with initial states
const store = createStore(
  combinedReducers,
  {
    applicantInfo: {
      reqestedBy: "",
      department: "",
      location: "",
      manager: "",
      date: ""
    },
    newUser: {
      nameOfUser: "",
      mimicUser: "",
      position: "",
      startDate: "",
      phoneExt: "",
      priority: ""
    },
    formRequest: {
      request: "",
      someBenefits: ""
    },
    resources: {
      as400: false,
      network: false,
      folderAccess: false,
      rds: false,
      networkRestore: false,
      smartPhone: false,
      pcOrLaptop: false,
      transportationSuite: false,
      powerSell: false,
      powerNet: false,
      fastFax: false,
      ric: false,
      powerAnalyzer: false
    },
    resetForm: false
  },
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// console.log(store.getState());

export default store;
