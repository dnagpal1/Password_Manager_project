import * as types from "../constants/actionTypes";

const initialState = {
  totalAccounts: 0,
  accountList: [],
  newWeb: "",
  newUsr: "",
  newPwd: "",
};

const passwordReducer = (state = initialState, action) => {
  let [accountList, totalAccounts, newWeb, newUsr, newPwd] = [
    [],
    0,
    "",
    "",
    "",
  ];

  switch (action.type) {
    case types.LOAD_ACCOUNT:
      accountList = action.payload;
      totalAccounts = action.payload.length;
      return {
        ...state,
        accountList,
        totalAccounts,
      };
    case types.NEW_WEBSITE:
      newWeb = action.payload;
      // console.log(state);
      return {
        ...state,
        newWeb,
      };
    case types.NEW_USERNAME:
      newUsr = action.payload;
      // console.log(newUsr);
      return {
        ...state,
        newUsr,
      };
    case types.NEW_PASSWORD:
      newPwd = action.payload;
      // console.log(state);
      return {
        ...state,
        newPwd,
      };
    case types.ADD_ACCOUNT:
      // console.log(state);

      return {
        ...state,
      };
    default: {
      return state;
    }
  }
};

export default passwordReducer;
